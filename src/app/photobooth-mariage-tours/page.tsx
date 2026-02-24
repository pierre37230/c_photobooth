import type { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Location Photobooth Mariage Tours & 37 - Dès 179€',
  description: 'Location photobooth premium pour votre mariage à Tours et en Indre-et-Loire. Fabrication française, bois véritable, 200 impressions incluses. Retrait express.',
  keywords: ['photobooth mariage Tours', 'borne photo mariage 37', 'location photobooth mariage Indre-et-Loire', 'animation mariage Tours'],
};

export default function PhotoboothMariagePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h1>Location Photobooth Mariage à Tours</h1>
          <p>Immortalisez votre jour J avec une borne photo premium fabriquée en France</p>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>Le Photobooth Parfait pour Votre Mariage à Tours</h2>
          <p>
            Vous organisez votre <strong>mariage à Tours</strong> ou dans l'<strong>Indre-et-Loire (37)</strong> ? 
            Notre photobooth artisanal en bois véritable apportera une <strong>animation originale</strong> et élégante 
            à votre réception. Vos invités repartiront avec des <strong>souvenirs instantanés</strong> de votre plus beau jour.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
          <div className="card">
            <h3>✨ Pourquoi nos mariés nous choisissent</h3>
            <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
              <li><strong>Fabrication française artisanale</strong> en bois massif</li>
              <li><strong>Véritable appareil photo</strong> pour une qualité pro</li>
              <li><strong>200 impressions 10x15cm</strong> incluses (Formule Complète)</li>
              <li><strong>Installation ultra-simple</strong> : 2 minutes chrono</li>
              <li><strong>Retrait express à Tours</strong> avec guide complet</li>
              <li><strong>Photos illimitées</strong> pendant toute la réception</li>
            </ul>
          </div>

          <div className="card">
            <h3>🎯 Parfait pour tous les mariages</h3>
            <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
              <li>Mariage champêtre, bohème, vintage</li>
              <li>Réception en château ou domaine</li>
              <li>Mariage en salle des fêtes</li>
              <li>Vin d'honneur et soirée dansante</li>
              <li>Brunch du lendemain</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>Nos Formules Mariage</h2>
          <div className="grid grid-2" style={{ marginTop: '2rem' }}>
            <div className="option-item">
              <h3>Formule Complète</h3>
              <p className="option-price">259€</p>
              <p className="option-desc">
                <strong>LA MEILLEURE pour un mariage !</strong><br/>
                200 impressions instantanées + toutes les photos en ligne
              </p>
              <Link href="/tarifs" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Voir les détails
              </Link>
            </div>

            <div className="option-item">
              <h3>Formule Numérique</h3>
              <p className="option-price">179€</p>
              <p className="option-desc">
                Photos illimitées + galerie en ligne pour tous vos invités
              </p>
              <Link href="/tarifs" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Voir les détails
              </Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '3rem' }}>
          <h2>Zone d'Intervention Mariage</h2>
          <p>
            Nous intervenons sur <strong>Tours et toute l'Indre-et-Loire (37)</strong> : 
            Joué-lès-Tours, Saint-Pierre-des-Corps, Saint-Avertin, La Riche, Chambray-lès-Tours, 
            Amboise, Chinon, Loches, Montbazon, Vouvray, Azay-le-Rideau, Langeais, et toutes les communes du département.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Livraison disponible</strong> directement sur votre lieu de réception à partir de 39€.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2>Prêt à réserver pour votre mariage ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Contactez-nous pour vérifier les disponibilités et recevoir votre devis gratuit
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
            Demander un devis
          </Link>
          <Link href="/galerie" className="btn btn-secondary">
            Voir la galerie
          </Link>
        </div>
      </div>
    </section>
  );
}