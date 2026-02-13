import type { Metadata } from 'next';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contact - Location Photobooth Tours',
  description: 'Contactez CPhotobooth pour louer un photobooth premium à Tours. Devis gratuit pour votre mariage, anniversaire ou événement d\'entreprise en Indre-et-Loire.',
  keywords: ['contact photobooth Tours', 'réservation borne photo 37', 'devis photobooth Tours'],
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h1>Contactez-nous</h1>
          <p>Réservez votre photobooth pour votre événement à Tours</p>
        </div>

        <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="card">
            <h2>Coordonnées</h2>
            <div style={{ marginTop: '1.5rem' }}>
              <h3>📧 Email</h3>
              <p>
                <a href={`mailto:${siteData.contact.email}`} style={{ color: 'var(--accent)', fontWeight: '500' }}>
                  {siteData.contact.email}
                </a>
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3>📞 Téléphone</h3>
              <p>
                <a href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`} style={{ color: 'var(--accent)', fontWeight: '500' }}>
                  {siteData.contact.phone}
                </a>
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3>📍 Zone d'intervention</h3>
              <p style={{ color: 'var(--text-light)' }}>{siteData.contact.address}</p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3>⏰ Disponibilité</h3>
              <p style={{ color: 'var(--text-light)' }}>7 jours sur 7</p>
            </div>
          </div>

          <div className="card">
            <h2>Demande de devis</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
              Pour recevoir un devis personnalisé gratuit, contactez-nous par email ou téléphone en précisant :
            </p>
            <ul style={{ marginTop: '1rem', lineHeight: '2', color: 'var(--text-light)' }}>
              <li>Date de votre événement</li>
              <li>Type d'événement (mariage, anniversaire, entreprise...)</li>
              <li>Lieu de l'événement</li>
              <li>Nombre d'invités estimé</li>
              <li>Durée souhaitée</li>
              <li>Options désirées</li>
            </ul>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-light)' }}>
              Nous vous répondrons dans les 24h avec un devis détaillé et personnalisé.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h2>Secteurs d'intervention</h2>
          <p style={{ color: 'var(--text-light)', lineHeight: '1.8', maxWidth: '700px', margin: '1rem auto' }}>
            Nous intervenons sur <strong>Tours</strong> et dans toute l'<strong>Indre-et-Loire (37)</strong> : 
            Joué-lès-Tours, Saint-Pierre-des-Corps, Saint-Avertin, La Riche, Chambray-lès-Tours, Amboise, 
            Chinon, Loches, Montbazon, Vouvray, et toutes les communes du département.
          </p>
          <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>
            Déplacements possibles dans les départements voisins (41, 36, 86).
          </p>
        </div>
      </div>
    </section>
  );
}