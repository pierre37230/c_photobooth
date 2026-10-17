import Image from 'next/image';
import Link from 'next/link';
import { prices, formatPrice } from '@/lib/pricing';
import './Hero.css';
export default function Hero() {
 return <section className="hero"><div className="container hero-grid"><div className="hero-content"><p className="eyebrow">CPhotobooth • Tours • Amboise • Blois</p><h1>Un photobooth pour les moments que l’on garde.</h1><p>Location de photobooth en bois à Tours, Amboise et vers Blois pour votre mariage, anniversaire ou événement d’entreprise. Des photos à partager et des tirages à emporter, selon votre formule.</p><p className="hero-price">Weekend / 48h dès <strong>{formatPrice(prices.weekend.digitale)}</strong><br /><small>Avec {prices.inclus.impression} impressions : {formatPrice(prices.weekend.impression)}</small></p><div className="actions"><Link href="/contact" className="btn btn-primary">Vérifier ma date</Link><Link href="/tarifs" className="btn btn-secondary">Comparer les formules</Link></div><p className="hero-note">Retrait sur rendez-vous • Livraison sur devis • Personnalisation disponible</p></div><div className="hero-photo"><Image src="/images/photobooth-vrai.webp" alt="La borne photo en bois CPhotobooth" width={1024} height={1024} sizes="(max-width: 768px) 90vw, 45vw" priority /><p>Notre borne en bois, avec appareil photo intégré.</p></div></div></section>;
}
