import type { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import PricingSimulator from '@/components/PricingSimulator';
import './tarifs.css';

export const metadata: Metadata = {
  title: 'Tarifs Photobooth Tours - Dès 124€ | Prix Clairs',
  description: 'Tarifs location photobooth Tours : dès 124€ en soirée, 229€ weekend. Options livraison dès 29€. Pas de frais cachés. Devis gratuit sous 24h.',
  alternates: {
    canonical: 'https://www.cphotobooth.fr/tarifs',
  },
};

export default function TarifsPage() {
  return (
    <>
      <PricingSimulator />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Nos Tarifs Détaillés</h1>
            <p>Tous nos tarifs affichés clairement • Aucun frais caché</p>
            {siteData.promoText && (
              <div className="promo-banner">
                {siteData.promoText}
              </div>
            )}
          </div>

          {/* TARIFS WEEKEND */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📅 Formules 48h (Weekend complet ou en semaine)</h2>
            <div className="grid grid-3">
              {siteData.pricingWeekend.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="plan-badge">Le plus populaire</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="old-price">{plan.oldPrice}</span>
                    <span className="amount">{plan.price}</span>
                    <span className="duration">{plan.duration}</span>
                    <span className="savings">Économisez {plan.savings}</span>
                  </div>
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-primary">
                    Réserver
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* TARIFS SOIRÉE */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🌙 Formules Soirée (dès 18h) | en semaine uniquement</h2>
            <div className="grid grid-3">
              {siteData.pricingSoiree.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="plan-badge">Le plus populaire</div>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="old-price">{plan.oldPrice}</span>
                    <span className="amount">{plan.price}</span>
                    <span className="duration">{plan.duration}</span>
                    <span className="savings">Économisez {plan.savings}</span>
                  </div>
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-primary">
                    Réserver
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* LIVRAISON */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🚚 Tarifs Livraison</h2>
            <div className="grid grid-3">
              {siteData.delivery.map((option, index) => (
                <div key={index} className="option-item">
                  <h3>{option.distance}</h3>
                  <p className="option-price">{option.price}</p>
                  <p className="option-desc">{option.description}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-light)' }}>
              💡 Retrait gratuit à Tours
            </p>
          </div>

          {/* OPTIONS */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>✨ Options Supplémentaires</h2>
            <div className="grid grid-3">
              {siteData.options.map((option, index) => (
                <div key={index} className="option-item">
                  <h3>{option.name}</h3>
                  <p className="option-price">{option.price}</p>
                  <p className="option-desc">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MODALITÉS */}
          <div className="card" style={{ textAlign: 'center' }}>
            <h2>Modalités de Location</h2>
            <div style={{ maxWidth: '800px', margin: '1.5rem auto 0', textAlign: 'left' }}>
              <h3>📍 Retrait & Restitution</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li><strong>Retrait :</strong> À Tours (adresse communiquée à la réservation)</li>
                <li><strong>Retrait express :</strong> En 5 minutes avec guide et vidéos</li>
                <li><strong>Option livraison :</strong> Selon distance (voir tarifs ci-dessus)</li>
                <li><strong>Restitution :</strong> Même lieu que le retrait</li>
              </ul>

              <h3 style={{ marginTop: '2rem' }}>⚡ Installation</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li>Installation ultra-simple : branchez et c'est parti !</li>
                <li>Guide papier + vidéos explicatives fournis</li>
                <li>Assistance téléphonique 7j/7</li>
                <li>Aucun montage compliqué</li>
              </ul>

              <h3 style={{ marginTop: '2rem' }}>💳 Paiement</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li>Acompte de 30% à la réservation</li>
                <li>Solde avant le retrait</li>
                <li>Paiement par virement ou espèces</li>
                <li>Annulation gratuite jusqu'à 14 jours avant</li>
              </ul>
            </div>
          </div>

          <div className="tarifs-cta">
            <Link href="/contact" className="btn btn-primary">
              Réserver maintenant
            </Link>
            <Link href="/faq" className="btn btn-secondary">
              Questions fréquentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
