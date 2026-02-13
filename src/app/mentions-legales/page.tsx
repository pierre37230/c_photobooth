import type { Metadata } from 'next';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de CPhotobooth, location de photobooth à Tours.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>Mentions Légales</h1>

          <div style={{ marginTop: '2rem' }}>
            <h2>Éditeur du site</h2>
            <p><strong>Raison sociale :</strong> {siteData.legalEntity.companyName}</p>
            <p><strong>Forme juridique :</strong> {siteData.legalEntity.legalForm}</p>
            <p><strong>SIRET :</strong> {siteData.legalEntity.siret}</p>
            <p><strong>Adresse :</strong> {siteData.legalEntity.address}</p>
            <p><strong>Email :</strong> {siteData.legalEntity.email}</p>
            <p><strong>Téléphone :</strong> {siteData.legalEntity.phone}</p>
            <p><strong>Directeur de la publication :</strong> {siteData.legalEntity.directorName}</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>Hébergement</h2>
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>Données personnelles</h2>
            <p>
              Les informations collectées via ce site sont destinées uniquement à {siteData.businessName} 
              pour le traitement de vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, 
              de rectification et de suppression de vos données personnelles en nous contactant à : {siteData.contact.email}
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques 
              nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>Responsabilité</h2>
            <p>
              {siteData.businessName} ne saurait être tenu responsable des dommages directs ou indirects 
              résultant de l'accès ou de l'utilisation de ce site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}