"use client";
import { trackEvent } from '@/lib/analytics';
import { siteData } from '@/data/siteData';
export default function TrackedContact(){return <><p><a href={`mailto:${siteData.contact.email}`} onClick={()=>trackEvent('click_mail',{placement:'contact'})}>{siteData.contact.email}</a></p><p><a href={`tel:${siteData.contact.phone.replace(/\s/g,'')}`} onClick={()=>trackEvent('click_tel',{placement:'contact'})}>{siteData.contact.phone}</a></p></>;}
