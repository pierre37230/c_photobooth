import type { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Photobooth Entreprise Tours | Animation Séminaire 37',
  description: 'Location photobooth pour événements d\'entreprise à Tours : séminaires, salons, team building. Tarifs pro, installation express, branding personnalisé.',
  keywords: ['photobooth entreprise Tours', 'animation séminaire 37', 'borne photo événement pro Tours', 'team building Tours'],
  alternates: {
    canonical: 'https://cphotobooth.fr/photobooth-entreprise-tours',
  },
};

export default function PhotoboothEntreprisePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h1>Photobooth Entreprise à Tours</h1>
          <p>Animation professionnelle pour vos événements d'entreprise</p>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>L'Animation Idéale pour Vos Événements Pro à Tours</h2>
          <p>
            Vous organisez un <strong>séminaire d'entreprise à Tours</strong>, un <strong>salon professionnel en Indre-et-Loire</strong> 
            ou un <strong>team building</strong> ? Notre photobooth premium apporte une <strong>animation originale et fédératrice</strong> 
            qui renforce la cohésion d'équipe et valorise votre <strong>image de marque</strong>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Avec notre borne photo en bois <strong>fabriquée en France</strong>, offrez à vos collaborateurs et clients une 
            <strong>expérience mémorable</strong> lors de vos événements corporate à Tours.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
          <div className="card">
            <h3>🎯 Parfait pour vos événements</h3>
            <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
              <li><strong>Séminaires d'entreprise</strong></li>
              <li><strong>Salons professionnels</strong></li>
              <li><strong>Team building</strong></li>
              <li><strong>Soirées d'entreprise</strong></li>
              <li><strong>Portes ouvertes</strong></li>
              <li><strong>Lancements de produit</strong></li>
              <li><strong>Conventions</strong></li>
              <li><strong>Afterworks</strong></li>
            </ul>
          </div>

          <div className="card">
            <h3>✨ Avantages pour votre entreprise</h3>
            <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
              <li><strong>Branding personnalisé</strong> avec votre logo</li>
              <li><strong>Qualité professionnelle</strong> garantie</li>
              <li><strong>Installation discrète</strong> et rapide</li>
              <li><strong>Tarifs dégressifs</strong> pour événements récurrents</li>
              <li><strong>Facture pour comptabilité</strong></li>
              <li><strong>Photos format digital</strong> pour réseaux sociaux</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '3rem', background: 'var(--background-light)' }}>
          <h2>Personnalisation Corporate</h2>
          <p>
            Nous créons un <strong>template photo personnalisé</strong> aux couleurs de votre entreprise avec :
          </p>
          <ul style={{ lineHeight: '2', color: 'var(--text-light)', marginTop: '1rem' }}>
            <li>Votre <strong>logo</strong> en bonne position</li>
            <li>Vos <strong>couleurs corporate</strong></li>
            <li>Le <strong>nom de l'événement</strong></li>
            <li>Un <strong>hashtag personnalisé</strong> pour les réseaux sociaux</li>
            <li>Design professionnel et épuré</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <strong>Option template personnalisé : seulement 10€</strong>
          </p>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>Tarifs Entreprise - Location Soirée</h2>
          <p>
            Nous proposons des <strong>tarifs préférentiels en semaine</strong> pour vos événements d'entreprise à Tours et en Indre-et-Loire.
          </p>
          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div className="option-item">
              <h3>Formule Pro Numérique</h3>
              <p className="option-desc">
                Photos illimitées + galerie en ligne sécurisée<br/>
                <strong>Sur devis selon durée</strong>
              </p>
            </div>

            <div className="option-item">
              <h3>Formule Pro Complète</h3>
              <p className="option-desc">
                Photos illimitées + impressions instantanées<br/>
                <strong>Sur devis selon durée</strong>
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/contact" className="btn btn-primary">
              Demander un devis entreprise
            </Link>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>Zone d'Intervention Entreprise</h2>
          <p>
            Nous intervenons sur <strong>Tours et toute l'Indre-et-Loire (37)</strong> : 
            Tours Centre, La Riche, Joué-lès-Tours, Saint-Pierre-des-Corps, Saint-Avertin, 
            Chambray-lès-Tours, et toutes les communes du département.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Livraison directe</strong> dans vos locaux ou sur votre lieu d'événement à partir de 39€.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Déplacements possibles dans les départements limitrophes pour les grands événements.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2>Organiser votre événement d'entreprise ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Contactez-nous pour un devis personnalisé sous 24h
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
            Demander un devis
          </Link>
          <Link href="/tarifs" className="btn btn-secondary">
            Voir les tarifs
          </Link>
        </div>
      </div>
    </section>
  );
}