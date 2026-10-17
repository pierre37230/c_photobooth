"use client";
import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { CONSENT_KEY } from '@/lib/analytics';
const GA_ID='G-8BRPGVJPXY';
export default function AnalyticsConsent(){
 const [open,setOpen]=useState(false);const [accepted,setAccepted]=useState(false);
 useEffect(()=>{try{const c=JSON.parse(localStorage.getItem(CONSENT_KEY)||'null');const valid=c&&Date.now()-c.at<180*86400000;setOpen(!valid);setAccepted(valid&&c.choice==='accepted');}catch{setOpen(true);} const show=()=>setOpen(true);window.addEventListener('open-cookie-settings',show);return()=>window.removeEventListener('open-cookie-settings',show);},[]);
 function choose(choice:'accepted'|'refused'){
  try{localStorage.setItem(CONSENT_KEY,JSON.stringify({choice,at:Date.now()}));}catch{ /* Navigation remains available without storage. */ }
  if(choice==='refused'){
   (window as unknown as Record<string,unknown>)[`ga-disable-${GA_ID}`]=true;
   window.gtag?.('consent','update',{analytics_storage:'denied'});
   document.cookie.split(';').forEach(item=>{const name=item.split('=')[0].trim();if(name.startsWith('_ga')){for(const domain of ['',location.hostname,'.'+location.hostname,'.cphotobooth.fr'])document.cookie=`${name}=; Max-Age=0; path=/;${domain?' domain='+domain+';':''}`;}});
  }else{(window as unknown as Record<string,unknown>)[`ga-disable-${GA_ID}`]=false;window.gtag?.('consent','update',{analytics_storage:'granted'});}
  setAccepted(choice==='accepted');setOpen(false);
 }
 return <>{accepted&&<><Script id="analytics-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});gtag('js',new Date());gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false});`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" /></>}{open&&<aside className="privacy-panel" aria-label="Votre choix de mesure d’audience"><h2 style={{fontSize:'1.15rem'}}>Mesure d’audience</h2><p>Avec votre accord, Google Analytics nous aide à comprendre les visites. Vous pouvez refuser et utiliser le site normalement, puis changer d’avis depuis le pied de page.</p><div className="actions"><button className="btn btn-secondary" onClick={()=>choose('refused')}>Refuser</button><button className="btn btn-secondary" onClick={()=>choose('accepted')}>Accepter</button></div><p style={{marginTop:12,marginBottom:0}}><Link href="/politique-confidentialite">En savoir plus</Link></p></aside>}</>;
}
