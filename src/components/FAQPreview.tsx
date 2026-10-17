import Link from 'next/link';import FAQSection from './seo/FAQSection';import { globalFAQs } from '@/data/seo/faqs';
export default function FAQPreview(){return <section className="section"><div className="container"><FAQSection faqs={globalFAQs.slice(0,4)}/><p className="center-note"><Link href="/faq">Toutes les questions fréquentes →</Link></p></div></section>;}
