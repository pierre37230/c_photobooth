import { Metadata } from 'next';
import Link from 'next/link';
import { weekendOffers, eveningOffers, additionalOptions } from '@/data/seo/offers';
import { globalFAQs } from '@/data/seo/faqs';
import { generateMetadata as genMeta, generateOfferSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-utils';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';
import InternalLinks from '@/components/seo/InternalLinks';

export const metadata: Metadata = genMeta({
  title: 'Prix Photobooth Tours - Tarifs Location Borne Photo 37 dès 229€',
  description: 'Prix transparents pour la location de photobooth à Tours : 229€ à 339€ weekend. Comparatif des formules, options, livraison. Devis gratuit sous 24h.',
  canonical: 'https://www.cphotobooth.fr/prix-photobooth-tours',
});

export default function PrixPhotoboothToursPage() {
  const offerSchema = generateOfferSchema(
    weekendOffers.map(offer => ({
      name: `Formule ${offer.name}`,
      price: offer.price,
      description: offer.features.slice(0, 3).join(', '),
    }))
  );

  const faqSchema = generateFAQSchema(
    globalFAQs.filter(f => f.category === 'pricing')
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Prix Photobooth Tours', url: 'https://www.cphotobooth.fr/prix-photobooth-tours' },
  ]);

  const internalLinks = [
    { href: '/photobooth-tours', text: 'Photobooth Tours - Page principale' },
    { href: '/photobooth-mariage-tours', text: 'Photobooth mariage' },
    { href: '/photobooth-entreprise-tours', text: 'Événements d\'entreprise' },
    { href: '/contact', text: 'Demander un devis gratuit' },
  ];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Prix Photobooth Tours', url: '/prix-photobooth-tours' },
            ]}
          />

          <div className="section-title">
            <h1>Prix Location Photobooth à Tours</h1>
            <p>Tarifs transparents et détaillés pour tous vos événements en Indre-et-Loire</p>
          </div>

          <div className="card" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              Vous vous demandez combien coûte la location d'un photobooth pour votre événement à Tours ou en Indre-et-Loire ? 
              Nous affichons nos tarifs de manière claire et transparente, sans frais cachés ni mauvaises surprises. Cette page 
              détaille tous nos prix, explique ce qui est inclus dans chaque formule, et vous aide à choisir l'option la plus 
              adaptée à votre événement et à votre budget.
            </p>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos tarifs weekend (48h)</h2>
            <div className="grid grid-3">
              {weekendOffers.map((offer, index) => (
                <div key={index} className={`pricing-card ${offer.popular ? 'popular' : ''}`}>
                  {offer.popular && <div className="plan-badge">⭐ Plus populaire</div>}
                  <h3>{offer.name}</h3>
                  <div className="price">
                    {offer.oldPrice && <span className="old-price">{offer.oldPrice}</span>}
                    <span className="amount">{offer.price}</span>
                    <span className="duration">{offer.duration}</span>
                    {offer.savings && <span className="savings">Économisez {offer.savings}</span>}
                  </div>
                  <ul className="features">
                    {offer.features.map((feature, i) => (
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

          <div className="card" style={{ marginBottom: '4rem' }}>
            <h2>Tarifs soirée (en semaine uniquement)</h2>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              Pour les événements se déroulant en semaine à Tours, nous proposons des tarifs soirée particulièrement avantageux.
            </p>
            <div className="grid grid-3">
              {eveningOffers.map((offer, index) => (
                <div key={index} className="pricing-card">
                  <h3>{offer.name}</h3>
                  <div className="price">
                    {offer.oldPrice && <span className="old-price">{offer.oldPrice}</span>}
                    <span className="amount">{offer.price}</span>
                    <span className="duration">{offer.duration}</span>
                  </div>
                  <ul className="features">
                    {offer.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: '4rem' }}>
            <h2>Options supplémentaires</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {additionalOptions.map((option, index) => (
                <div key={index} style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{option.name}</h3>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)', margin: '0.5rem 0' }}>
                    {option.price}
                  </p>
                  <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginBottom: '4rem', background: 'var(--background-light)' }}>
            <h2>Ce qui est toujours inclus</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Quelle que soit la formule choisie, vous bénéficiez toujours de :
            </p>
            <ul style={{ lineHeight: '2' }}>
              <li>✓ Photobooth artisanal en bois fabriqué en France</li>
              <li>✓ Véritable appareil photo professionnel intégré</li>
              <li>✓ Photos illimitées pendant toute la location</li>
              <li>✓ Installation ultra-simple en 2 minutes</li>
              <li>✓ Guide complet et assistance 7j/7</li>
              <li>✓ Récupération garantie de toutes vos photos</li>
              <li>✓ Accessoires de base fournis</li>
              <li>✓ Location weekend 48h (vendredi au dimanche)</li>
            </ul>
          </div>

          <FAQSection 
            faqs={globalFAQs.filter(f => f.category === 'pricing')} 
            title="Questions fréquentes sur les prix"
          />

          <InternalLinks
            title="Découvrez aussi"
            links={internalLinks}
          />

          <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', color: 'white', padding: '4rem 2rem', borderRadius: '12px', marginTop: '4rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Besoin d'un devis personnalisé ?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95 }}>
              Contactez-nous pour recevoir votre devis gratuit sous 24h.
            </p>
            <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}