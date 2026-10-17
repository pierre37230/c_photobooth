import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import { siteData } from '@/data/siteData';
export const runtime='nodejs';
// Protection opportuniste par instance. Compléter par les règles du pare-feu Vercel si l’envoi direct est activé.
const attempts=new Map<string,{count:number;until:number}>();
export async function POST(request:NextRequest){
 const fail=(status:number)=>NextResponse.json({ok:false},{status});
 if(!process.env.RESEND_API_KEY||!process.env.QUOTE_FROM_EMAIL)return fail(503);
 const origin=request.headers.get('origin');if(!origin||origin!==request.nextUrl.origin)return fail(403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return fail(415);
 const raw=await request.text();if(raw.length>8000)return fail(413);
 let data:Record<string,unknown>;try{data=JSON.parse(raw);}catch{return fail(400);}
 if(!data||typeof data!=='object'||Array.isArray(data))return fail(400);
 const limits:Record<string,number>={name:100,email:254,phone:40,date:10,city:120,event:80,formula:20,period:10,message:1500,source:80,website:200};
 for(const [key,max]of Object.entries(limits)){if(typeof data[key]!=='string'||(data[key] as string).length>max)return fail(400);}
 if(data.website||!String(data.name).trim()||!String(data.city).trim()||!String(data.event).trim()||!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))||!/^\S+@[^\s@]+\.[^\s@]+$/.test(String(data.email)))return fail(400);
 if(!['weekend','soiree'].includes(String(data.period))||!['digitale','impression','complete','indecis'].includes(String(data.formula)))return fail(400);
 const key=request.headers.get('idempotency-key');if(!key||!/^[a-f0-9-]{36}$/.test(key))return fail(400);
 const now=Date.now();for(const [k,v]of attempts)if(v.until<now)attempts.delete(k);
 const ipHash=createHash('sha256').update(request.headers.get('x-forwarded-for')?.split(',')[0]||'unknown').digest('hex');const slot=attempts.get(ipHash)||{count:0,until:now+600000};if(slot.count>=5||attempts.size>10000)return fail(429);slot.count++;attempts.set(ipHash,slot);
 const text=Object.entries(data).filter(([k])=>!['website','startedAt'].includes(k)).map(([k,v])=>`${k} : ${v}`).join('\n');
 // D'abord transmettre la demande au professionnel. Ne confirmer au visiteur qu'après acceptation par Resend.
 try {
  const from=process.env.QUOTE_FROM_EMAIL!;
  const headers={Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'};
  const response=await fetch('https://api.resend.com/emails',{
   method:'POST',headers:{...headers,'Idempotency-Key':`devis-${key}`},
   body:JSON.stringify({from,to:[siteData.contact.email],reply_to:String(data.email),subject:'Nouvelle demande de devis CPhotobooth',text}),
   signal:AbortSignal.timeout(12000)
  });
  if(!response.ok)return fail(502);
  const result=await response.json();if(!result.id)return fail(502);
  // L'accusé client est secondaire : son échec ne doit pas transformer une demande reçue en échec.
  let confirmationSent=false;
  try {
   const firstName=String(data.name).trim();
   const acknowledgment=`Bonjour ${firstName},\n\nNous avons bien reçu votre demande de devis CPhotobooth pour le ${data.date} à ${data.city}.\nNous reviendrons vers vous pour confirmer les disponibilités et les conditions.\n\nCette demande ne constitue pas une réservation.\n\nÀ bientôt,\nL'équipe CPhotobooth`;
   const confirm=await fetch('https://api.resend.com/emails',{
    method:'POST',headers:{...headers,'Idempotency-Key':`confirmation-${key}`},
    body:JSON.stringify({from,to:[String(data.email)],reply_to:siteData.contact.email,subject:'Votre demande de devis CPhotobooth a bien été reçue',text:acknowledgment}),
    signal:AbortSignal.timeout(12000)
   });
   if(confirm.ok)confirmationSent=Boolean((await confirm.json()).id);
  } catch { /* Devis déjà reçu ; accusé de réception non garanti. */ }
  return NextResponse.json({ok:true,confirmationSent});
 } catch {return fail(502);}

}
