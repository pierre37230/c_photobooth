import Link from 'next/link';
import PriceCards from './PriceCards';
export default function PricingPreview() {
 return <section className="section section-light" id="formules"><div className="container"><div className="section-title"><h2>Votre formule, en toute clarté</h2><p>Weekend ou 48h en semaine • Photos numériques illimitées</p></div><PriceCards /><p className="center-note">Vous organisez une soirée en semaine ? <Link href="/tarifs#soiree">Voir les tarifs Soirée et toutes les options</Link>.</p></div></section>;
}
