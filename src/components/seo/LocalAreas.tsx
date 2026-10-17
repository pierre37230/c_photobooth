import Link from 'next/link';
import { cities } from '@/data/seo/cities';
export default function LocalAreas({currentCity,limit=16}:{currentCity?:string;limit?:number}){return <section className="content-block"><h2>Secteurs desservis autour de Tours</h2><p>La livraison est confirmée avec l’adresse exacte du lieu de réception.</p><div className="grid grid-3">{cities.filter(c=>c.slug!==currentCity).slice(0,limit).map(c=><Link className="card text-link" key={c.slug} href={`/photobooth-${c.slug}`}>{c.name} ({c.postalCode}) →</Link>)}</div></section>;}
