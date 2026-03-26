import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug } from '@/data/seo/cities';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-utils';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';
import LocalAreas from '@/components/seo/LocalAreas';
import InternalLinks from '@/components/seo/InternalLinks';

interface CityPageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map(city => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return genMeta({
    title: `Photobooth ${city.name} (${city.postalCode}) - Location Borne Photo 37`,
    description: `Location photobooth à ${city.name} (Indre-et-Loire). Borne photo premium dès 229€, livraison ${city.distanceFromTours}km Tours. Mariage, entreprise, anniversaire.`,
    canonical: `https://www.cphotobooth.fr/photobooth-${city.slug}`,
  });
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(
    `Location photobooth ${city.name}`,
    `Service de location de photobooth premium pour vos événements à ${city.name} et ses environs`,
    'Location de photobooth'
  );

  const faqSchema = generateFAQSchema(city.localFAQ);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Photobooth Tours', url: 'https://www.cphotobooth.fr/photobooth-tours' },
    { name: `Photobooth ${city.name}`, url: `https://www.cphotobooth.fr/photobooth-${city.slug}` },
  ]);

  const internalLinks = [
    { href: '/photobooth-tours', text: 'Photobooth Tours - Page principale' },
    { href: '/tarifs', text: 'Nos tarifs détaillés' },
    { href: '/photobooth-mariage-tours', text: 'Photobooth mariage' },
    { href: '/photobooth-entreprise-tours', text: 'Événements d\'entreprise' },
    ...city.nearbyCities.slice(0, 3).map(nearbySlug => ({
      href: `/photobooth-${nearbySlug}`,
      text: `Photobooth ${cities.find(c => c.slug === nearbySlug)?.name || nearbySlug}`,
    })),
  ];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
              { name: 'Photobooth Tours', url: '/photobooth-tours' },
              { name: `Photobooth ${city.name}`, url: `/photobooth-${city.slug}` },
            ]}
          />

          <div className="section-title">
            <h1>Location Photobooth à {city.name}</h1>
            <p>{city.description}</p>
          </div>

          <div className="card" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              {city.specificContent.intro}
            </p>
          </div>

          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2>Photobooth pour votre mariage à {city.name}</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {city.specificContent.weddingContext}
            </p>
            <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Types de lieux à {city.name}</h3>
              <ul style={{ lineHeight: '2' }}>
                {city.venueTypes.map((venue, idx) => (
                  <li key={idx}>✓ {venue}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2>Événements d'entreprise à {city.name}</h2>
            <p style={{ lineHeight: '1.8' }}>
              {city.specificContent.businessContext}
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/photobooth-entreprise-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                → Découvrez notre offre entreprise complète
              </Link>
            </p>
          </div>

          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2>Livraison à {city.name} depuis Tours</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {city.specificContent.logisticsNote}
            </p>
            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>📍 Informations pratiques</h3>
                <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
                  <li><strong>Distance :</strong> {city.distanceFromTours}km de Tours</li>
                  <li><strong>Code postal :</strong> {city.postalCode}</li>
                  <li><strong>Population :</strong> {city.population.toLocaleString()} habitants</li>
                </ul>
              </div>
              <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>💰 Tarifs de livraison</h3>
                <ul style={{ lineHeight: '2', listStyle: 'none', padding: 0 }}>
                  {city.distanceFromTours < 20 && (
                    <>
                      <li>✅ <strong>Gratuit</strong> avec formule Complète</li>
                      <li>📦 <strong>39€</strong> (autres formules)</li>
                    </>
                  )}
                  {city.distanceFromTours >= 20 && city.distanceFromTours <= 40 && (
                    <li>📦 <strong>45€</strong> (zone 20-40km)</li>
                  )}
                  {city.distanceFromTours > 40 && (
                    <li>📦 <strong>60€</strong> (zone 40-60km)</li>
                  )}
                  <li>🚗 <strong>Gratuit</strong> si retrait à Tours</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos formules pour {city.name}</h2>
            <div className="grid grid-3">
              <div className="pricing-card">
                <h3>Digitale</h3>
                <div className="price">
                  <span className="old-price">279€</span>
                  <span className="amount">229€</span>
                  <span className="duration">Weekend 48h</span>
                </div>
                <ul className="features">
                  <li>Photos illimitées</li>
                  <li>Photobooth bois artisanal</li>
                  <li>Vrai appareil photo pro</li>
                  <li>Assistance 7j/7</li>
                </ul>
                <Link href="/tarifs" className="btn btn-primary">Voir détails</Link>
              </div>
              <div className="pricing-card popular">
                <div className="plan-badge">⭐ Populaire</div>
                <h3>Impression</h3>
                <div className="price">
                  <span className="old-price">329€</span>
                  <span className="amount">289€</span>
                  <span className="duration">Weekend 48h</span>
                </div>
                <ul className="features">
                  <li>Tout de la Digitale</li>
                  <li>200 impressions papier</li>
                  <li>Imprimante pro</li>
                  <li>Tirages instantanés</li>
                </ul>
                <Link href="/tarifs" className="btn btn-primary">Voir détails</Link>
              </div>
              <div className="pricing-card">
                <h3>Complète</h3>
                <div className="price">
                  <span className="old-price">399€</span>
                  <span className="amount">339€</span>
                  <span className="duration">Weekend 48h</span>
                </div>
                <ul className="features">
                  <li>Tout de l'Impression</li>
                  <li>400 impressions totales</li>
                  <li>Template personnalisé</li>
                  {city.distanceFromTours < 20 && <li>Livraison GRATUITE</li>}
                </ul>
                <Link href="/tarifs" className="btn btn-primary">Voir détails</Link>
              </div>
            </div>
          </div>

          <FAQSection faqs={city.localFAQ} title={`Questions fréquentes pour ${city.name}`} />

          <InternalLinks title="Découvrez aussi" links={internalLinks} />

          <LocalAreas currentCity={city.slug} limit={8} />

          <div style={{ textAlign: 'center', background: 'var(--background-light)', padding: '3rem 2rem', borderRadius: '12px', marginTop: '4rem' }}>
            <h2>Réservez votre photobooth à {city.name}</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
              Contactez-nous pour vérifier les disponibilités et recevoir votre devis gratuit sous 24h.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <Link href="/tarifs" className="btn btn-secondary">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}