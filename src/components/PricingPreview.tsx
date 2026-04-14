import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './PricingPreview.css';

export default function PricingPreview() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-title">
          <h2>Nos Formules</h2>
          <p>Location weekend ou soirée • Retrait express à Tours</p>

        </div>

        <div className="grid grid-3">
          {siteData.pricingWeekend.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="plan-badge">Le plus populaire</div>}
              <h3>{plan.name}</h3>
              <div className="price">


              </div>
              <ul className="features">
                {plan.features.slice(0, 5).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link href="/tarifs" className="btn btn-secondary">
                Voir les détails
              </Link>
            </div>
          ))}
        </div>

        <div className="options-notice">
          <p><strong>Options disponibles :</strong> Livraison dès 39€ • Impressions sup. dès 39€ • Template personnalisé 10€</p>
        </div>
      </div>
    </section>
  );
}