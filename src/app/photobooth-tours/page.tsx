import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/siteData';
import { weekendOffers } from '@/data/seo/offers';
import { globalFAQs } from '@/data/seo/faqs';
import { cities } from '@/data/seo/cities';
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
    { href: '/prix-photobooth-tours', text: 'Nos tarifs détaillés' },
    { href: '/contact', text: 'Demander un devis gratuit' },
  ];

  return (
    <>
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

      <article>
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
                explicatives accessibles par QR code depuis votre smartphone. Votre témoin, un membre de votre famille ou n'importe 
                quel invité débrouillard peut s'en charger sans difficulté.
              </p>

              <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <strong>Quatrièmement</strong>, nos tarifs sont transparents et affichés clairement sur notre site : pas de frais 
                cachés, pas de suppléments surprise à la dernière minute. Ce que vous voyez affiché, c'est exactement ce que vous 
                payez. Cette transparence totale vous permet de budgétiser sereinement votre événement à Tours sans craindre de 
                mauvaises surprises.
              </p>

              <p style={{ lineHeight: '1.8' }}>
                <strong>Enfin</strong>, nous proposons un retrait express à Tours qui vous permet de récupérer le photobooth en 
                5 minutes à notre point de retrait, ou une livraison directe à votre lieu de réception dans toute l'Indre-et-Loire 
                selon vos besoins et votre budget. Cette flexibilité s'adapte à toutes les situations.
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
                <Link href="/prix-photobooth-tours" style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '1.125rem' }}>
                  → Comparez toutes nos formules en détail
                </Link>
              </p>
            </div>

            {/* POUR QUELS ÉVÉNEMENTS */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Pour quels événements à Tours ?</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                Notre photobooth s'adapte à tous types d'événements dans la région de Tours et l'Indre-et-Loire. Voici les 
                principales occasions où notre animation fait la différence.
              </p>

              <div className="grid grid-2" style={{ gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    🎊 Mariages à Tours et en Indre-et-Loire
                  </h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    C'est l'animation incontournable qui complète parfaitement votre photographe professionnel. Pendant que ce 
                    dernier capture les moments officiels et les émotions avec son œil artistique, le photobooth permet à vos 
                    invités de créer leurs propres souvenirs spontanés et amusants avec les accessoires fournis.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    Les mariages à Tours et ses environs (Joué-lès-Tours, Saint-Avertin, Amboise, Vouvray, Chinon, 
                    Azay-le-Rideau) bénéficient de notre expertise locale et de notre connaissance approfondie des lieux de 
                    réception de la région.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    <Link href="/photobooth-mariage-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                      → Tout savoir sur le photobooth mariage
                    </Link>
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    💼 Événements d'entreprise à Tours
                  </h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    Notre photobooth apporte une animation conviviale très appréciée lors de vos événements corporate : séminaires, 
                    team building, soirées d'entreprise, lancements produits, salons professionnels. La zone d'activités de Tours 
                    et les nombreux hôtels avec espaces de réception nous accueillent régulièrement.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    Le template personnalisé avec votre logo garantit que chaque photo porte votre identité de marque, créant 
                    du contenu authentique utilisable pour votre communication interne et externe.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    <Link href="/photobooth-entreprise-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                      → Découvrez notre offre entreprise
                    </Link>
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    🎂 Anniversaires et fêtes privées
                  </h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    Le photobooth crée une ambiance festive et génère des souvenirs mémorables pour tous les âges. Que ce soit 
                    pour un anniversaire 18 ans, 30 ans, 40 ans, 50 ans ou plus, l'animation plaît à tous : les enfants adorent 
                    se déguiser, les ados apprécient le côté tendance, les adultes redécouvrent leur âme d'enfant.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    Les tirages instantanés personnalisés avec le prénom et l'âge du fêté deviennent des souvenirs précieux 
                    que chaque invité garde longtemps.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    <Link href="/photobooth-anniversaire-tours" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                      → Photobooth pour votre anniversaire
                    </Link>
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    🎉 Autres célébrations
                  </h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    Baptêmes, communions, fêtes de village, soirées étudiantes, galas associatifs, événements culturels... 
                    Notre photobooth s'adapte à toutes les occasions festives à Tours et en Indre-et-Loire.
                  </p>
                  <p style={{ lineHeight: '1.8' }}>
                    L'installation simple et le fonctionnement autonome permettent de l'intégrer facilement dans n'importe 
                    quel type d'événement, du plus intime au plus grandiose.
                  </p>
                </div>
              </div>
            </div>

            {/* ZONE D'INTERVENTION */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Zone d'intervention autour de Tours</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                Nous intervenons dans toute l'agglomération tourangelle et bien au-delà. Notre service couvre l'ensemble du 
                département de l'Indre-et-Loire (37) et même les départements limitrophes pour certains événements d'envergure.
              </p>

              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>📍 Zone prioritaire (livraison rapide)</h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    <strong>Tours et communes limitrophes</strong> : Tours, La Riche, Saint-Cyr-sur-Loire, Joué-lès-Tours, 
                    Saint-Pierre-des-Corps, Saint-Avertin, Chambray-lès-Tours, Ballan-Miré, Fondettes.
                  </p>
                  <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
                    Délai de livraison très court, réactivité maximale, connaissance parfaite des lieux.
                  </p>
                </div>

                <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px' }}>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>🌍 Zone étendue (tout l'Indre-et-Loire)</h3>
                  <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
                    <strong>Tout le département 37</strong> : Amboise, Chinon, Loches, Azay-le-Rideau, Langeais, Vouvray, 
                    Montbazon, Sainte-Maure-de-Touraine, et toutes les communes du département.
                  </p>
                  <p style={{ lineHeight: '1.8', color: 'var(--text-light)' }}>
                    Livraison organisée selon distance, tarifs transparents affichés.
                  </p>
                </div>
              </div>

              <div style={{ background: '#e8f5e9', padding: '1.5rem', borderRadius: '8px', border: '2px solid #4caf50' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#2e7d32' }}>💰 Tarifs de livraison</h3>
                <ul style={{ lineHeight: '2', margin: 0 }}>
                  <li><strong>Gratuit</strong> : Retrait à Tours (toutes formules)</li>
                  <li><strong>Gratuit</strong> : Livraison jusqu'à 20km avec formule Complète</li>
                  <li><strong>39€</strong> : Livraison jusqu'à 20km (formules Digitale et Impression)</li>
                  <li><strong>45€</strong> : Livraison 20-40km (Amboise, Azay-le-Rideau, Langeais, Montbazon...)</li>
                  <li><strong>60€</strong> : Livraison 40-60km (Chinon, Loches...)</li>
                </ul>
              </div>

              <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '1.125rem' }}>
                  → Votre commune n'est pas listée ? Contactez-nous !
                </Link>
              </p>
            </div>

            {/* COMMENT ÇA FONCTIONNE */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Comment fonctionne la location ?</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                La location de notre photobooth à Tours suit un processus simple, transparent et sans stress en 7 étapes claires.
              </p>

              <div className="grid grid-2" style={{ gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>1</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Réservation en ligne</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Réservez en quelques clics sur notre site ou par téléphone. Nous conseillons de réserver 4 à 8 semaines 
                      à l'avance pour les événements importants. Un acompte de 30% sécurise votre date.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>2</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Personnalisation (optionnel)</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Si vous choisissez un template personnalisé, nous créons ensemble le design de vos photos : prénoms, 
                      date, couleurs, logo. Validation du design 2 semaines avant l'événement.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>3</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Retrait à Tours ou livraison</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      <strong>Option A</strong> : Retrait express à Tours (gratuit), généralement le vendredi pour un événement 
                      le samedi. <strong>Option B</strong> : Livraison directe à votre lieu selon tarifs.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>4</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Installation ultra-simple</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Sur votre lieu, posez la borne, branchez-la, c'est prêt ! 2 minutes chrono. Guide vidéo accessible 
                      depuis votre téléphone. Assistance 7j/7 si besoin.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>5</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Profitez de votre événement</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Vos invités utilisent le photobooth autant qu'ils veulent. Photos illimitées, impressions instantanées 
                      (formules Impression et Complète), accessoires fournis pour s'amuser.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>6</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Restitution sans stress</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Retour du matériel le lundi suivant (weekend 48h) au même point. Pas de pression horaire, pas de stress. 
                      Vous avez tout votre temps.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent)', flexShrink: 0 }}>7</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Récupération des photos</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Vous recevez toutes les photos par email sous 48h via lien de téléchargement sécurisé. Conservation 
                      en ligne 6 mois minimum. Partagez avec vos invités !
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', color: 'var(--accent)', flexShrink: 0 }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>C'est terminé !</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Votre événement à Tours est immortalisé, vos invités ont adoré, vous avez toutes les photos. Simple, 
                      efficace, sans stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUALITÉ ET FIABILITÉ */}
            <div className="card" style={{ marginBottom: '3rem', background: 'linear-gradient(135deg, #f5f5f5 0%, white 100%)' }}>
              <h2>Qualité et fiabilité garanties</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                La qualité et la fiabilité sont au cœur de notre service de location de photobooth à Tours. Voici nos engagements 
                concrets qui font la différence.
              </p>

              <div className="grid grid-2" style={{ gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    ✓ Tests systématiques avant chaque location
                  </h3>
                  <p style={{ lineHeight: '1.8' }}>
                    Chaque photobooth est systématiquement testé et vérifié avant chaque location. Nous contrôlons l'appareil 
                    photo, l'imprimante (si applicable), l'écran tactile, l'éclairage, et tous les composants électroniques. 
                    Cette procédure rigoureuse nous permet de détecter et résoudre tout problème potentiel avant votre événement. 
                    Le matériel que vous récupérez est parfaitement fonctionnel et prêt à l'emploi.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    ✓ Assistance téléphonique 7 jours sur 7
                  </h3>
                  <p style={{ lineHeight: '1.8' }}>
                    Notre assistance téléphonique est disponible 7 jours sur 7 pendant toute la durée de votre location, y compris 
                    les weekends et jours fériés. Une question pendant l'installation samedi matin ? Un doute sur une manipulation 
                    dimanche soir ? Un simple appel et nous vous guidons pas à pas. La proximité de Tours nous permet d'être 
                    particulièrement réactifs pour nos clients de l'agglomération.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    ✓ Matériel professionnel robuste
                  </h3>
                  <p style={{ lineHeight: '1.8' }}>
                    Nous utilisons du matériel professionnel robuste conçu pour fonctionner sans interruption pendant des heures. 
                    Notre photobooth en bois fabriqué artisanalement en France bénéficie d'une conception et d'une fabrication de 
                    qualité qui garantit sa longévité et sa fiabilité. Nous n'utilisons pas de matériel bas de gamme importé à 
                    durée de vie limitée.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    ✓ Récupération garantie de vos photos
                  </h3>
                  <p style={{ lineHeight: '1.8' }}>
                    La récupération de vos photos est garantie par un système de sauvegarde automatique et redondant. Envoi par 
                    lien de téléchargement sécurisé sous 48h après votre événement, conservation en ligne pendant 6 mois minimum, 
                    et sauvegarde de secours chez nous pendant 1 an. Vos souvenirs sont précieux, nous mettons tout en œuvre pour 
                    leur sécurité absolue.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '8px', border: '2px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--accent)' }}>
                  💯 Notre engagement qualité
                </h3>
                <p style={{ lineHeight: '1.8', margin: 0 }}>
                  Depuis notre lancement, nous maintenons un taux de satisfaction de 100% sur les événements à Tours et en 
                  Indre-et-Loire. Zéro incident technique majeur non résolu, zéro photo perdue, zéro client déçu. Cette 
                  performance reflète notre obsession de la qualité et notre attention méticuleuse aux détails à chaque étape.
                </p>
              </div>
            </div>

            {/* POURQUOI NOUS FAIRE CONFIANCE */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Pourquoi nous faire confiance pour votre événement à Tours ?</h2>
              
              <p style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
                Faire confiance à un prestataire pour votre événement important à Tours est une décision qui mérite réflexion. 
                Voici concrètement ce qui nous distingue et vous garantit une expérience réussie sans stress.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>🇫🇷</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Fabrication artisanale française</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Notre photobooth est fabriqué artisanalement en France, en bois massif véritable. Cette fabrication locale 
                      garantit une qualité supérieure et un contrôle total sur nos équipements. Chaque borne est unique, le bois 
                      est choisi avec soin, la finition est soignée. Nous ne vendons pas du matériel industriel produit en série 
                      à l'autre bout du monde.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>📸</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Véritable appareil photo professionnel</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Nous utilisons un véritable appareil photo professionnel avec objectif et capteur de qualité, pas une webcam. 
                      Cette différence technique fondamentale se voit immédiatement sur la qualité des photos : netteté, couleurs, 
                      exposition. Vos invités remarqueront la différence et apprécieront recevoir de vraies belles photos.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>💎</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Transparence totale des tarifs</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Nos tarifs sont transparents et affichés publiquement sur notre site : pas de frais cachés, pas de suppléments 
                      surprise. Ce que vous voyez, c'est exactement ce que vous payez. Cette transparence vous permet de budgétiser 
                      sereinement votre événement. Nous détaillons clairement ce qui est inclus dans chaque formule.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>⚡</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Installation ultra-simple en 2 minutes</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      L'installation ne nécessite aucune compétence technique et ne prend que 2 minutes. Vos témoins ou proches 
                      peuvent s'en charger facilement. Nous fournissons un guide complet et des vidéos accessibles par smartphone. 
                      Pas de montage compliqué, pas de réglages obscurs, pas de stress logistique.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>🛡️</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Assistance 7j/7 et réactivité Tours</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Notre assistance téléphonique 7j/7 vous accompagne pendant toute la location. La proximité avec Tours nous 
                      permet une grande réactivité pour les clients de l'agglomération. Nous connaissons parfaitement la région, 
                      les lieux de réception, les contraintes locales.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: 'var(--background-light)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>📦</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Photos sauvegardées et livrées garanties</h3>
                    <p style={{ lineHeight: '1.8', margin: 0, color: 'var(--text-light)' }}>
                      Toutes vos photos sont sauvegardées de manière sécurisée et redondante. Livraison rapide sous 48h par lien 
                      de téléchargement, conservation 6 mois en ligne, sauvegarde de secours 1 an. Zéro photo perdue depuis notre 
                      création. Vos souvenirs sont en sécurité absolue.
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '1.125rem', lineHeight: '1.8' }}>
                Notre engagement est simple : <strong>faire de votre événement à Tours un moment mémorable</strong> où le photobooth 
                contribue à créer des souvenirs inoubliables, sans stress, sans complications, avec la qualité que vous méritez.
              </p>
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
                Notre équipe répond rapidement à toutes vos questions.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
                  Demander un devis gratuit
                </Link>
                <Link href="/tarifs" className="btn" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
                  Voir tous les tarifs
                </Link>
              </div>
              <p style={{ marginTop: '2rem', opacity: 0.9' }}>
                📞 {siteData.contact.phone} • 📧 {siteData.contact.email}
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}