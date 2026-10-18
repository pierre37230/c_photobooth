"use client";
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { prices, formatPrice, formulas, formulaNames, estimatePrice, type Period, type Formula } from '@/lib/pricing';
import { equipment, equipmentAmount, normalizeEquipment } from '@/lib/equipment';
import { siteData } from '@/data/siteData';
import { terms } from '@/lib/booking';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';

function localToday() { const d=new Date(); const y=d.getFullYear();const m=String(d.getMonth()+1).padStart(2,'0');const day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`; }
function summaryText(delivery: string, formula: string, period: Period, extra: number, custom: boolean, selected: string[], note: string, total: number | null) {
 const bundle=formulas.includes(formula as Formula);
 const extras=selected.map(id=>equipment.items.find(item=>item.id===id)).filter((x):x is typeof equipment.items[number]=>Boolean(x));
 const lines=[`Retrait / livraison : ${delivery==='retrait'?'Retrait sur rendez-vous à Tours':delivery==='autre'?'Livraison à chiffrer':`Livraison zone jusqu’à ${delivery} km (adresse à confirmer)`}`];
 if(bundle && formula!=='digitale' && extra) lines.push(`Tirages supplémentaires : ${extra} (${formatPrice(extra===100?prices.options.impressions100:prices.options.impressions200)})`);
 if(bundle && (custom||formula==='complete')) lines.push(`Cadre personnalisé : ${formula==='complete'?'inclus':formatPrice(prices.options.personnalisation)}`);
 if(formula==='indecis' && extra) lines.push(`Tirages supplémentaires souhaités : +${extra} (à confirmer selon la formule)`);
 if(formula==='indecis' && custom) lines.push('Cadre personnalisé souhaité (à confirmer selon la formule)');
 if(extras.length) lines.push('Matériel : '+extras.map(item=>`${item.name} (${bundle?formatPrice(item.priceWithPhotobooth):formula==='aucun'?formatPrice(item.price):`${formatPrice(item.priceWithPhotobooth)} avec photobooth / ${formatPrice(item.price)} seul — choix à confirmer`})`).join(', '));
 if(total!==null) lines.push(`Budget estimé hors particularités : ${formatPrice(total)}`);
 if(note.trim()) lines.push(`Informations du client : ${note.trim()}`);
 return lines.join('\n');
}
export default function QuoteForm({ directSend }: {directSend:boolean}) {
 const [selected,setSelected]=useState<string[]>([]);
 const [period,setPeriod]=useState<Period>('weekend');
 const [formula,setFormula]=useState('indecis');
 const [eventType,setEventType]=useState('');
 const [delivery,setDelivery]=useState('retrait');
 const [extra,setExtra]=useState<0|100|200>(0);
 const [custom,setCustom]=useState(false);
 const [note,setNote]=useState('');
 const [today,setToday]=useState('');
 const [draft,setDraft]=useState('');
 const [message,setMessage]=useState('');
 const [busy,setBusy]=useState(false);
 const [success,setSuccess]=useState(false);
 const [copied,setCopied]=useState(false);
 const started=useRef(false);const startedAt=useRef(Date.now());const idempotency=useRef('');const previous=useRef('');const resultRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{setToday(localToday());const q=new URLSearchParams(window.location.search);const f=q.get('formule');if(f && ([...formulas,'indecis','aucun'] as string[]).includes(f))setFormula(f);
  if(q.get('duree')==='soiree')setPeriod('soiree');
  const e=q.get('evenement');if(e){const eventNames:Record<string,string>={Mariage:'Mariage',Anniversaire:'Anniversaire',Entreprise:'Événement d’entreprise','Événement d’entreprise':'Événement d’entreprise',Autre:'Autre'};if(eventNames[e])setEventType(eventNames[e]);}
  const del=q.get('livraison');if(del && ['retrait','20','40','60','autre'].includes(del))setDelivery(del);
  const tir=q.get('tirages');if(['100','200'].includes(tir||'') && f!=='digitale')setExtra(Number(tir) as 100|200);
  if(q.get('cadre')==='oui')setCustom(true);
  const eq=q.get('equipement');if(eq){setSelected(normalizeEquipment(eq.split(',')));}
 },[]);
 useEffect(()=>{if(draft||message)resultRef.current?.scrollIntoView({behavior:'smooth',block:'nearest'});},[draft,message]);
 const bundle=formulas.includes(formula as Formula);
 const km=delivery==='retrait'?null:delivery==='20'?20:delivery==='40'?40:delivery==='60'?60:61;
 // Standalone equipment delivery is always quoted separately, not inferred from photobooth rates.
 const base=bundle?estimatePrice(period,formula as Formula,km,extra,custom):formula==='aucun' && delivery==='retrait'?0:null;
 const total=base===null?null:base+equipmentAmount(selected,bundle);
 const cleanEstimate=formula==='indecis'||(formula==='aucun'&&!selected.length)?null:total;
 function start(){if(!started.current){started.current=true;trackEvent('quote_form_start');}}
 function touch(){if(draft)setDraft('');if(success)return;setMessage('');setCopied(false);}
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(busy||success)return;setMessage('');setCopied(false);
  if(formula==='aucun'&&!selected.length){setMessage('Choisissez au moins un équipement pour une location sans photobooth.');return;}
  const fd=new FormData(e.currentTarget);
  const msg=summaryText(delivery,formula,period,extra,custom,selected,note,cleanEstimate);
  const payload={name:String(fd.get('name')||'').trim(),email:String(fd.get('email')||'').trim(),phone:String(fd.get('phone')||'').trim(),date:String(fd.get('date')||''),city:String(fd.get('city')||'').trim(),event:String(fd.get('event')||''),period,formula,message:note.trim(),source:String(fd.get('source')||''),website:String(fd.get('website')||''),startedAt:startedAt.current,deliveryZone:delivery,extraPrints:formula==='digitale'?0:extra,customFrame:custom,selectedEquipment:selected};
  const body=`Bonjour,\n\nJe souhaite un devis CPhotobooth.\n\nDate : ${payload.date}\nLieu : ${payload.city}\nÉvénement : ${payload.event}\nDurée : ${period==='weekend'?'Weekend / 48h':'Soirée en semaine'}\nFormule : ${bundle?formulaNames[formula as Formula]:formula==='aucun'?'Matériel seul':'Formule à définir'}\n\n${msg}\n\nNom : ${payload.name}\nEmail : ${payload.email}\nTéléphone : ${payload.phone||'Non renseigné'}\nDécouverte : ${payload.source||'Non renseignée'}\n`;
  setDraft(body);
  if(!directSend){trackEvent('quote_draft_created',{formula,period});setMessage('Votre demande est préparée mais pas envoyée. Votre messagerie va s’ouvrir : vérifiez le texte puis cliquez sur Envoyer.');window.location.href=`mailto:${siteData.contact.email}?subject=${encodeURIComponent('Demande de devis CPhotobooth')}&body=${encodeURIComponent(body)}`;return;}
  setBusy(true);
  try {const serialized=JSON.stringify(payload);if(previous.current!==serialized){previous.current=serialized;idempotency.current=crypto.randomUUID();}
   const response=await fetch('/api/devis',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':idempotency.current},body:serialized});if(!response.ok)throw new Error('Échec de la transmission');const result=await response.json();if(!result.ok)throw new Error('Envoi non confirmé');
   setSuccess(true);setDraft('');setMessage(result.confirmationSent?'Votre demande a été transmise. Un accusé de réception a également été envoyé à votre adresse email. Nous confirmerons ensuite la disponibilité.':'Votre demande a bien été transmise. Nous confirmerons ensuite la disponibilité.');
   trackEvent('generate_lead',{formula,period,has_extra_equipment:selected.length>0,...(cleanEstimate!==null?{value:cleanEstimate,currency:'EUR'}:{})});
  }catch{setMessage('L’envoi direct n’a pas pu être confirmé. Vous pouvez envoyer le texte conservé ci-dessous depuis votre messagerie ou nous appeler.');}
  finally{setBusy(false);}
 }
 return <form onSubmit={submit} onFocus={start} onChange={touch}>
  <div className="form-grid">
   <label>Votre nom *<input name="name" autoComplete="name" required maxLength={100}/></label>
   <label>Votre email *<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
   <label>Date de l’événement *<input name="date" type="date" min={today} required/></label>
   <label>Commune ou code postal *<input name="city" autoComplete="address-level2" required maxLength={120} placeholder="Tours, Amboise, Blois…"/></label>
   <label>Type d’événement *<select name="event" required value={eventType} onChange={e=>setEventType(e.target.value)}><option value="" disabled>Choisir</option><option>Mariage</option><option>Anniversaire</option><option>Événement d’entreprise</option><option>Autre</option></select></label>
   <label>Téléphone (facultatif)<input name="phone" autoComplete="tel" type="tel" maxLength={40}/></label>
   <label>Durée<select value={period} onChange={e=>setPeriod(e.target.value as Period)}><option value="weekend">Weekend / 48h</option><option value="soiree">Soirée en semaine uniquement</option></select></label>
   <label>Votre formule<select value={formula} onChange={e=>{setFormula(e.target.value);if(e.target.value==='digitale'||e.target.value==='aucun')setExtra(0);}}><option value="indecis">Je souhaite être conseillé sur la formule</option>{formulas.map(f=><option key={f} value={f}>{formulaNames[f]} — {formatPrice(prices[period][f])}</option>)}<option value="aucun">Matériel seul, sans photobooth</option></select></label>
   <label>Retrait / livraison<select value={delivery} onChange={e=>setDelivery(e.target.value)}><option value="retrait">Retrait gratuit sur RDV à Tours</option><option value="20">Livraison jusqu’à 20 km (selon l’équipement)</option><option value="40">Livraison entre 20 et 40 km</option><option value="60">Livraison entre 40 et 60 km</option><option value="autre">Plus de 60 km / à préciser</option></select></label>
   {formula!=='digitale'&&formula!=='aucun'&&<label>Tirages supplémentaires<select value={extra} onChange={e=>setExtra(Number(e.target.value) as 0|100|200)}><option value={0}>Aucun</option><option value={100}>+100 tirages — {formatPrice(prices.options.impressions100)}</option><option value={200}>+200 tirages — {formatPrice(prices.options.impressions200)}</option></select></label>}
  </div>
  {formula!=='aucun'&&(formula==='complete'?<p className="form-note">Le cadre personnalisé est compris dans la formule Complète.</p>:<label className="check-label"><input type="checkbox" checked={custom} onChange={e=>setCustom(e.target.checked)}/> Ajouter le cadre photo personnalisé — {formatPrice(prices.options.personnalisation)}</label>)}
  <fieldset className="equipment-options"><legend>Matériel événementiel (facultatif)</legend><p>{bundle?'Tarifs réduits appliqués à votre formule photobooth.':formula==='aucun'?'Tarifs de location seule. Livraison éventuelle sur devis.':'Vous hésitez encore ? Les deux tarifs sont affichés ; la remise s’applique seulement si vous réservez aussi un photobooth.'}</p><div className="equipment-checks">{equipment.items.map(item=><label key={item.id}><input type="checkbox" checked={selected.includes(item.id)} onChange={e=>setSelected(curr=>normalizeEquipment(e.target.checked?[...curr,item.id]:curr.filter(x=>x!==item.id)))}/><span>{item.name} — <strong>{formula==='aucun'?formatPrice(item.price):bundle?formatPrice(item.priceWithPhotobooth):`${formatPrice(item.priceWithPhotobooth)} avec photobooth / ${formatPrice(item.price)} seul`}</strong></span></label>)}</div></fieldset>
  {cleanEstimate!==null?<p className="estimate-total" aria-live="polite">Budget estimé : <strong>{formatPrice(cleanEstimate)}</strong> <small>(à confirmer avec l’adresse et le devis)</small></p>:<p className="form-note" aria-live="polite">{formula==='indecis'?'Le total sera précisé une fois votre formule choisie.':delivery!=='retrait'?'La livraison du matériel seul ou hors zone est chiffrée sur devis.':'Choisissez le matériel souhaité.'}</p>}
  <label>Précisions pour votre événement (facultatif)<textarea name="message" value={note} onChange={e=>setNote(e.target.value)} maxLength={1200} placeholder="Lieu de réception, accès, horaires, nombre d’invités…"/></label>
  <label style={{marginTop:18}}>Comment nous avez-vous connus ? (facultatif)<select name="source" defaultValue=""><option value="">Je préfère ne pas préciser</option><option>Google / Google Maps</option><option>ChatGPT ou une autre IA</option><option>Réseaux sociaux</option><option>Recommandation</option><option>Autre</option></select></label>
  <div className="honeypot" aria-hidden="true"><label>Site web<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <p className="form-note">Réservation après acceptation du devis : acompte de {terms.depositPercent} % ; solde au plus tard la veille. {formula==='aucun'?'Caution éventuelle du matériel seul précisée au devis.':`Pour un photobooth, caution de ${formatPrice(terms.cautionWithoutPrinter)} sans imprimante ou ${formatPrice(terms.cautionWithPrinter)} avec imprimante.`} Caution par chèque ou virement uniquement. <Link href="/conditions-location">Conditions d’annulation</Link>. Cette demande gratuite ne réserve pas encore votre date.</p>
  <p className="form-note">Ces informations servent uniquement à traiter votre demande. <Link href="/politique-confidentialite">Confidentialité</Link>.</p>
  {!directSend&&<p className="form-note">Votre demande sera préparée afin de l’envoyer avec votre messagerie habituelle.</p>}
  <button type="submit" className="btn btn-primary" disabled={busy||success}>{busy?'Envoi en cours…':directSend?'Envoyer ma demande de devis':'Préparer mon email de devis'}</button>
  <div ref={resultRef} aria-live="polite" className="quote-result">{message&&<p role={success?'status':'alert'} className={`form-message ${success?'':'form-error'}`}>{message}</p>}{draft&&<div className="form-message" role="status"><h3>Votre demande est prête, mais pas encore envoyée</h3><p>Vous pouvez l’envoyer depuis votre messagerie, ou copier le texte dans un email à {siteData.contact.email}.</p><div className="actions"><a className="btn btn-primary" href={`mailto:${siteData.contact.email}?subject=${encodeURIComponent('Demande de devis CPhotobooth')}&body=${encodeURIComponent(draft)}`} onClick={()=>trackEvent('quote_email_open',{formula,period})}>Ouvrir ma messagerie</a><button type="button" className="btn btn-secondary" onClick={async()=>{try{await navigator.clipboard.writeText(draft);setCopied(true);}catch{setMessage('Sélectionnez et copiez le texte ci-dessous.');}}}>{copied?'Texte copié':'Copier la demande'}</button></div><label>Texte de votre demande<textarea readOnly value={draft} rows={10}/></label></div>}</div>
 </form>;
}
