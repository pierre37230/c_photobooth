"use client";
import { useState } from 'react';
import Link from 'next/link';
import { prices, formatPrice, formulas, formulaNames, estimatePrice, contactLink, type Period, type Formula } from '@/lib/pricing';
import { equipment, equipmentAmount, normalizeEquipment } from '@/lib/equipment';
import { trackEvent } from '@/lib/analytics';
export default function PricingSimulator() {
 const [period,setPeriod]=useState<Period>('weekend');
 const [formula,setFormula]=useState<Formula>('impression');
 const [delivery,setDelivery]=useState('retrait');
 const [extra,setExtra]=useState<0|100|200>(0);
 const [custom,setCustom]=useState(false);
 const [selected,setSelected]=useState<string[]>([]);
 const km=delivery==='retrait'?null:delivery==='20'?20:delivery==='40'?40:delivery==='60'?60:61;
 const base=estimatePrice(period,formula,km,extra,custom);
 const equipmentTotal=equipmentAmount(selected,true);
 const total=base===null?null:base+equipmentTotal;
 const href=contactLink(formula,period)+`&livraison=${delivery}&tirages=${formula==='digitale'?0:extra}&cadre=${custom||formula==='complete'?'oui':'non'}${selected.length?'&equipement='+encodeURIComponent(selected.join(',')):''}`;
 return <section className="card content-block" aria-labelledby="estimate-title"><h2 id="estimate-title">Estimez votre budget</h2><p>Choisissez vos options : l’estimation sera conservée dans votre formulaire de devis. Les prix définitifs dépendent du lieu exact et des conditions du devis.</p><div className="form-grid"><label>Durée<select value={period} onChange={e=>setPeriod(e.target.value as Period)}><option value="weekend">Weekend / 48h</option><option value="soiree">Soirée en semaine</option></select></label><label>Formule<select value={formula} onChange={e=>{setFormula(e.target.value as Formula);setExtra(0);}}>{formulas.map(f=><option value={f} key={f}>{formulaNames[f]} — {formatPrice(prices[period][f])}</option>)}</select></label><label>Retrait ou livraison<select value={delivery} onChange={e=>setDelivery(e.target.value)}><option value="retrait">Retrait sur rendez-vous à Tours</option><option value="20">Livraison jusqu’à 20 km</option><option value="40">Livraison de plus de 20 à 40 km</option><option value="60">Livraison de plus de 40 à 60 km</option><option value="autre">Plus de 60 km / distance à confirmer</option></select></label>{formula!=='digitale'&&<label>Tirages supplémentaires<select value={extra} onChange={e=>setExtra(Number(e.target.value) as 0|100|200)}><option value="0">Aucun</option><option value="100">100 — {formatPrice(prices.options.impressions100)}</option><option value="200">200 — {formatPrice(prices.options.impressions200)}</option></select></label>}</div>{formula==='complete'?<p>Le cadre personnalisé est inclus dans la formule Complète.</p>:<label className="check-label"><input type="checkbox" checked={custom} onChange={e=>setCustom(e.target.checked)}/> Cadre photo personnalisé : {formatPrice(prices.options.personnalisation)}</label>}
 <fieldset className="equipment-options"><legend>Matériel à ajouter à votre photobooth</legend><div className="equipment-checks">{equipment.items.map(item=><label key={item.id}><input type="checkbox" checked={selected.includes(item.id)} onChange={e=>setSelected(curr=>normalizeEquipment(e.target.checked?[...curr,item.id]:curr.filter(x=>x!==item.id)))}/><span>{item.name} — <strong>{formatPrice(item.priceWithPhotobooth)}</strong> avec photobooth</span></label>)}</div></fieldset>
 <p className="estimate-total" aria-live="polite">{total===null?`Base hors livraison à préciser : ${formatPrice(prices[period][formula]+(formula==='digitale'?0:extra===100?prices.options.impressions100:extra===200?prices.options.impressions200:0)+(custom&&formula!=='complete'?prices.options.personnalisation:0)+equipmentTotal)} + livraison sur devis`:`Budget estimé : ${formatPrice(total)}`}</p>
 <Link className="btn btn-primary" href={href} onClick={()=>trackEvent('pricing_quote_click',{formula,period,value:total??undefined,currency:'EUR'})}>Conserver ces choix et demander un devis</Link></section>;
}
