import type { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './tarifs.css';

export const metadata: Metadata = {
  title: 'Tarifs Location Photobooth Tours - Dès 179€',
  description: 'Tarifs transparents pour la location de photobooth à Tours. Formule weekend dès 179€. Retrait express, installation simple, fabrication française. Pas de frais cachés.',
  keywords: ['tarif photobooth Tours', 'prix location borne photo 37', 'photobooth pas cher Tours', 'location weekend Tours'],
};

export default function TarifsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h1>Nos Tarifs</h1>
            <p>Location weekend ou soirée • Retrait express à Tours • Tarifs transparents, sans surprise</p>
          </div>

          <div className="grid grid-3">
            {siteData.pricing.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <h2>{plan.name}</h2>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="duration">{plan.duration}</span>
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

          <div className="card" style={{ marginTop: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Options Supplémentaires</h2>
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

          <div className="card" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h2>Modalités de Location</h2>
            <div style={{ maxWidth: '800px', margin: '1.5rem auto 0', textAlign: 'left' }}>
              <h3>📍 Retrait & Restitution</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li><strong>Retrait :</strong> À Tours (adresse communiquée à la réservation)</li>
                <li><strong>Retrait express :</strong> En 5 minutes avec guide et vidéos d'installation</li>
                <li><strong>Option livraison et installation :</strong> À partir de 29€ selon le lieu</li>
                <li><strong>Restitution :</strong> Même lieu que le retrait</li>
              </ul>

              <h3 style={{ marginTop: '2rem' }}>⚡ Installation</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li>Installation ultra-simple : branchez et c'est parti !</li>
                <li>Guide papier fourni + vidéos explicatives</li>
                <li>Assistance téléphonique 7j/7 pendant votre événement</li>
                <li>Aucun montage compliqué, tout est prêt à l'emploi</li>
              </ul>

              <h3 style={{ marginTop: '2rem' }}>💳 Paiement & Réservation</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li>Acompte de 30% à la réservation</li>
                <li>Solde à régler avant le retrait</li>
                <li>Paiement par virement ou espèces</li>
              </ul>

              <h3 style={{ marginTop: '2rem' }}>🎯 Nos Engagements</h3>
              <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                <li><strong>Transparence totale :</strong> Pas de frais cachés, tous les tarifs sont clairs</li>
                <li><strong>Qualité premium :</strong> Photobooth fabriqué à la main en France, bois véritable, vrai appareil photo</li>
                <li><strong>Simplicité :</strong> Installation en 2 minutes, aucune prise de tête</li>
                <li><strong>Fiabilité :</strong> Matériel testé et vérifié avant chaque location</li>
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