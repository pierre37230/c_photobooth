import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import { siteData } from '@/data/siteData';
import { equipment, equipmentAmount, normalizeEquipment } from '@/lib/equipment';
import { estimatePrice, formatPrice, formulaNames, formulas, type Formula, type Period } from '@/lib/pricing';
import { validEventDate } from '@/lib/booking';
export const runtime='nodejs';
// Limitation d'appoint par instance. Une règle WAF / protection externalisée reste indispensable pour un contrôle global sur Vercel.
const attempts=new Map<string,{count:number;until:number}>();
const allowedFormula=['digitale','impression','complete','indecis','aucun'];
const allowedZones=['retrait','20','40','60','autre'];
const EMAIL=/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]{2,}$/;
const clean=(s:string)=>s.replace(/[\r\n\t]+/g,' ').replace(/[<>]/g,'').trim();
export async function POST(request:NextRequest){
 const fail=(status:number)=>NextResponse.json({ok:false},{status});
 if(!process.env.RESEND_API_KEY||!process.env.QUOTE_FROM_EMAIL)return fail(503);
 const origin=request.headers.get('origin');if(!origin||origin!==request.nextUrl.origin)return fail(403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return fail(415);
 const raw=await request.text();if(raw.length>8000)return fail(413);
 let data:Record<string,unknown>;try{data=JSON.parse(raw);}catch{return fail(400);}
 if(!data||typeof data!=='object'||Array.isArray(data))return fail(400);
 const limits:Record<string,number>={name:100,email:254,phone:40,date:10,city:120,event:80,formula:20,period:10,message:1200,source:80,website:200,deliveryZone:10};
 for(const [key,max]of Object.entries(limits)){if(typeof data[key]!=='string'||(data[key] as string).length>max)return fail(400);}
 if(data.website||!String(data.name).trim()||!String(data.city).trim()||!String(data.event).trim()||!validEventDate(String(data.date))||!EMAIL.test(String(data.email)))return fail(400);
 if(!['weekend','soiree'].includes(String(data.period))||!allowedFormula.includes(String(data.formula))||!allowedZones.includes(String(data.deliveryZone)))return fail(400);
 if(typeof data.startedAt!=='number'||!Number.isFinite(data.startedAt)||Date.now()-data.startedAt<750||Date.now()-data.startedAt>86400000)return fail(400);
 if(![0,100,200].includes(data.extraPrints as number)||typeof data.customFrame!=='boolean')return fail(400);
 if(!Array.isArray(data.selectedEquipment)||data.selectedEquipment.length>equipment.items.length||!data.selectedEquipment.every(id=>typeof id==='string'&&equipment.items.some(item=>item.id===id)))return fail(400);
 const selected=normalizeEquipment(data.selectedEquipment as string[]);
 if(selected.length !== data.selectedEquipment.length) return fail(400);
 const formula=String(data.formula);
 if(formula==='aucun'&&!selected.length)return fail(400);
 if((formula==='digitale'||formula==='aucun')&&data.extraPrints!==0)return fail(400);
 const key=request.headers.get('idempotency-key');if(!key||!/^[a-f0-9-]{36}$/.test(key))return fail(400);
 const now=Date.now();for(const [k,v]of attempts){if(v.until<now)attempts.delete(k);}
 if(attempts.size>5000) { for(const k of Array.from(attempts.keys()).slice(0,1000))attempts.delete(k); }
 const ipHash=createHash('sha256').update(request.headers.get('x-real-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]||'unknown').digest('hex');
 const slot=attempts.get(ipHash)||{count:0,until:now+600000};if(slot.count>=5)return fail(429);slot.count++;attempts.set(ipHash,slot);
 const period=data.period as Period;
 const bundled=formulas.includes(formula as Formula);
 const zone=String(data.deliveryZone);
 const km=zone==='retrait'?null:zone==='20'?20:zone==='40'?40:zone==='60'?60:61;
 const photoboothTotal=bundled?estimatePrice(period,formula as Formula,km,data.extraPrints as 0|100|200,data.customFrame as boolean):null;
 // Ne jamais utiliser la grille photobooth pour estimer la livraison du matériel seul.
 const estimate=bundled&&photoboothTotal!==null?photoboothTotal+equipmentAmount(selected,true):formula==='aucun'&&zone==='retrait'?equipmentAmount(selected,false):null;
 const eqLabels=selected.map(id=>{const item=equipment.items.find(i=>i.id===id)!;return `${item.name} : ${formatPrice(bundled?item.priceWithPhotobooth:item.price)} ${formula==='indecis'?'(prix affiché avant confirmation de formule : prix seul, réduction possible)':''}`;});
 const details=[
 `Nom : ${clean(String(data.name))}`,
 `Email : ${clean(String(data.email))}`,
 `Téléphone : ${clean(String(data.phone))}`,
 `Date : ${data.date}`,
 `Ville : ${clean(String(data.city))}`,
 `Événement : ${clean(String(data.event))}`,
 `Période : ${period}`,
 `Formule : ${bundled?formulaNames[formula as Formula]:formula==='aucun'?'Matériel seul':'À conseiller'}`,
 `Remise / livraison : ${zone}`,
 `Tirages supplémentaires : ${bundled?data.extraPrints:formula==='indecis'?`${data.extraPrints} souhaités (sous réserve du choix de formule)`:'Non applicable'}`,
 `Cadre personnalisé : ${bundled?(formula==='complete'||data.customFrame?'oui':'non'):formula==='indecis'&&data.customFrame?'souhaité, à confirmer':'Non applicable'}`,
 `Matériel : ${eqLabels.length?eqLabels.join('; '):'Aucun'}`,
 `Montant estimatif : ${estimate===null?'À établir selon la formule et/ou la livraison':formatPrice(estimate)}`,
 `Source déclarée : ${clean(String(data.source))}`,
 `Précisions : ${String(data.message).trim()}`,
 ];
 const text=details.join('\n');
 try {
  const from=process.env.QUOTE_FROM_EMAIL!;
  const headers={Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'};
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{...headers,'Idempotency-Key':`devis-${key}`},body:JSON.stringify({from,to:[siteData.contact.email],reply_to:clean(String(data.email)),subject:'Nouvelle demande de devis CPhotobooth',text}),signal:AbortSignal.timeout(12000)});
  if(!response.ok)return fail(502);
  const result=await response.json();if(!result.id)return fail(502);
  let confirmationSent=false;
  try {
   const acknowledgment=`Bonjour ${clean(String(data.name))},\n\nNous avons bien reçu votre demande de devis CPhotobooth pour le ${data.date} à ${clean(String(data.city))}.\nNous reviendrons vers vous afin de confirmer disponibilité, montant et conditions.\n\nCette demande ne constitue pas une réservation.\n\nÀ bientôt,\nL’équipe CPhotobooth`;
   const confirm=await fetch('https://api.resend.com/emails',{method:'POST',headers:{...headers,'Idempotency-Key':`confirmation-${key}`},body:JSON.stringify({from,to:[String(data.email)],reply_to:siteData.contact.email,subject:'Demande de devis CPhotobooth bien reçue',text:acknowledgment}),signal:AbortSignal.timeout(12000)});
   if(confirm.ok)confirmationSent=Boolean((await confirm.json()).id);
  }catch{/* Un devis déjà reçu ne doit pas être requalifié en échec. */}
  return NextResponse.json({ok:true,confirmationSent});
 }catch{return fail(502);}
}
