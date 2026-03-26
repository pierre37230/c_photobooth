import { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { weekendOffers } from '@/data/seo/offers';
import { globalFAQs } from '@/data/seo/faqs';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateOfferSchema, generateBreadcrumbSchema } from '@/lib/seo-utils';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';
import LocalAreas from '@/components/seo/LocalAreas';
import InternalLinks from '@/components/seo/InternalLinks';

export const metadata: Metadata = genMeta({
  title: 'Location Photobooth Tours (37) - Borne Photo Premium dès 229€',
  description: 'Location de photobooth à Tours et en Indre-et-Loire. Borne photo artisanale française, appareil photo pro, installation simple. Mariage, entreprise, anniversaire. Devis gratuit.',
  canonical: 'https://www.cphotobooth.fr/photobooth-tours',
});

export default function PhotoboothToursPage() {
  const serviceSchema = generateServiceSchema(
    'Location photobooth Tours',
    'Service de location de photobooth premium pour tous vos événements à Tours et en Indre-et-Loire',
    'Location de photobooth'
  );

  const offerSchema = generateOfferSchema(
    weekendOffers.map(offer => ({
      name: `Formule ${offer.name}`,
      price: offer.price,
      description: offer.features.slice(0, 3).join(', '),
    }))
  );

  const faqSchema = generateFAQSchema(globalFAQs.slice(0, 10));

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Photobooth Tours', url: 'https://www.cphotobooth.fr/photobooth-tours' },
  ]);

  const internalLinks = [
    { href: '/photobooth-mariage-tours', text: 'Photobooth pour votre mariage' },
    { href: '/photobooth-entreprise-tours', text: 'Événements d\'entreprise' },
    { href: '/photobooth-anniversaire-tours', text: 'Anniversaires et fêtes' },
    { href: '/tarifs', text: 'Nos tarifs détaillés' },
    { href: '/contact', text: 'Demander un devis gratuit' },
  ];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
              { name: 'Photobooth Tours', url: '/photobooth-tours' },
            ]}
          />

          <div className="section-title">
            <h1>Location Photobooth à Tours</h1>
            <p>Borne photo premium artisanale pour vos événements en Indre-et-Loire</p>
          </div>

          {/* HERO INTRO */}
          <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, var(--background-light) 0%, white 100%)', border: '2px solid var(--accent)' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Vous recherchez un <strong>photobooth premium</strong> pour votre événement à Tours ou en Indre-et-Loire ? 
              CPhotobooth propose la location de bornes photo <strong>artisanales fabriquées en France</strong>, équipées de 
              véritables appareils photo professionnels. Que ce soit pour un mariage, un événement d'entreprise, un anniversaire 
              ou toute autre célébration dans la région tourangelle, notre photobooth apporte une animation moderne et ludique 
              qui crée des souvenirs instantanés mémorables.
            </p>
            <div className="grid grid-3" style={{ gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🇫🇷</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Fabrication française</h3>
                <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>Bois massif artisanal</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📸</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Appareil photo pro</h3>
                <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>Qualité studio garantie</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Installation 2 min</h3>
                <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>Ultra-simple, autonome</p>
              </div>
            </div>
          </div>

          {/* POURQUOI NOUS CHOISIR */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2>Pourquoi choisir notre photobooth à Tours ?</h2>
            
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Notre service de location de photobooth à Tours se distingue par plusieurs éléments qui font toute la différence 
              pour votre événement. <strong>Premièrement</strong>, nos bornes sont fabriquées artisanalement en France, en bois 
              massif véritable. Cette fabrication locale garantit une qualité supérieure et un design élégant qui s'intègre 
              harmonieusement dans tous les types de lieux de réception tourangeaux, des salles municipales modernes aux châteaux 
              historiques de la Loire.
            </p>

            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              <strong>Deuxièmement</strong>, nous utilisons un véritable appareil photo professionnel intégré, pas une simple 
              webcam comme la plupart des photobooths bas de gamme du marché. Cette différence technique fondamentale se traduit 
              par des photos de qualité exceptionnelle : netteté parfaite, colorimétrie fidèle, exposition optimale, et rendu 
              digne d'un studio photo professionnel. Vos invités remarqueront immédiatement la différence de qualité.
            </p>

            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
              <strong>Troisièmement</strong>, l'installation est ultra-simple et ne prend que 2 minutes chrono. Aucune compétence 
              technique requise, aucun montage compliqué. Vous posez la borne sur une surface plane, vous la branchez sur une prise 
              électrique standard, et c'est prêt à l'emploi. Nous fournissons un guide papier illustré complet et des vidéos 
              explicatives accessibles par QR code depuis votre smartphone.
            </p>

            <p style={{ lineHeight: '1.8' }}>
              <strong>Enfin</strong>, nous proposons un retrait express à Tours qui vous permet de récupérer le photobooth en 
              5 minutes à notre point de retrait, ou une livraison directe à votre lieu de réception dans toute l'Indre-et-Loire 
              selon vos besoins et votre budget.
            </p>
          </div>

          {/* NOS FORMULES */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Nos formules de location photobooth à Tours</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-light)' }}>
              Trois formules adaptées à tous les besoins et budgets pour vos événements à Tours et en Indre-et-Loire
            </p>
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
                  <Link href="/tarifs" className="btn btn-primary">
                    Voir les détails
                  </Link>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/tarifs" style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '1.125rem' }}>
                → Comparez toutes nos formules en détail
              </Link>
            </p>
          </div>

          {/* POUR QUELS ÉVÉNEMENTS */}
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h2>Pour quels événements à Tours ?</h2>
            
            <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              Notre photobooth s'adapte à tous types d'événements dans la région de Tours et l'Indre-et-Loire.
            </p>

            <div className="grid grid-2" style={{ gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🎊 Mariages</h3>
                <p style={{ lineHeight: '1.8' }}>
                  L'animation incontournable qui complète parfaitement votre photographe professionnel. Les mariages à Tours 
                  et ses environs bénéficient de notre expertise locale.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <Link href="/photobooth-mariage-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                    → Tout savoir sur le photobooth mariage
                  </Link>
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>💼 Événements d'entreprise</h3>
                <p style={{ lineHeight: '1.8' }}>
                  Animation conviviale pour séminaires, team building, soirées d'entreprise, lancements produits.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <Link href="/photobooth-entreprise-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                    → Découvrez notre offre entreprise
                  </Link>
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🎂 Anniversaires</h3>
                <p style={{ lineHeight: '1.8' }}>
                  Pour tous les âges : 18 ans, 30 ans, 40 ans, 50 ans et plus. Créez des souvenirs mémorables.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <Link href="/photobooth-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                    → Photobooth pour votre anniversaire
                  </Link>
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🎉 Autres célébrations</h3>
                <p style={{ lineHeight: '1.8' }}>
                  Baptêmes, communions, fêtes de village, soirées étudiantes, galas associatifs...
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <FAQSection 
            faqs={globalFAQs.slice(0, 12)} 
            title="Questions fréquentes sur la location photobooth à Tours"
          />

          {/* LIENS INTERNES */}
          <InternalLinks
            title="Découvrez nos pages spécialisées"
            links={internalLinks}
          />

          {/* VILLES */}
          <LocalAreas limit={16} />

          {/* CTA FINAL */}
          <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', color: 'white', padding: '4rem 2rem', borderRadius: '12px', marginTop: '4rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Prêt à réserver votre photobooth à Tours ?</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
              Contactez-nous pour vérifier les disponibilités et recevoir votre devis personnalisé gratuit sous 24h.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
                Demander un devis gratuit
              </Link>
              <Link href="/tarifs" className="btn" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
                Voir tous les tarifs
              </Link>
            </div>
            <p style={{ marginTop: '2rem', opacity: 0.9 }}>
              📞 {siteData.contact.phone} • 📧 {siteData.contact.email}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}