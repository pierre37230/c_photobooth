import Link from 'next/link';
import { plans, contactLink, type Period } from '@/lib/pricing';
import '@/components/PricingPreview.css';
export default function PriceCards({ period = 'weekend' }: { period?: Period }) {
  return <div className="grid grid-3">{plans(period).map(plan => <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
    {plan.popular && <div className="plan-badge">Avec impressions</div>}
    <h3>{plan.name}</h3><p className="price">{plan.price}</p><p>{plan.duration}</p>
    <ul className="features">{plan.features.map(f => <li key={f}>{f}</li>)}</ul>
    <Link href={contactLink(plan.id, period)} className="btn btn-primary">Vérifier la disponibilité</Link>
  </div>)}</div>;
}
