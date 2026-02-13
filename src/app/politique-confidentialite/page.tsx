import type { Metadata } from 'next';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de CPhotobooth.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>Politique de Confidentialité</h1>

          <div style={{ marginTop: '2rem' }}>
            <h2>1. Collecte des données</h2>
            <p>
              {siteData.businessName} collecte uniquement les données personnelles que vous nous communiquez 
              volontairement via le formulaire de contact ou par email/téléphone :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations relatives à votre événement</li>
            </ul>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>2. Utilisation des données</h2>
            <p>Vos données personnelles sont utilisées uniquement pour :</p>
            <ul>
              <li>Répondre à vos demandes de renseignements</li>
              <li>Établir des devis personnalisés</li>
              <li>Gérer vos réservations</li>
              <li>Vous contacter concernant votre événement</li>
            </ul>
            <p>
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
              sauf obligation légale.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>3. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire à la gestion de votre demande 
              ou réservation, puis supprimées ou archivées conformément aux obligations légales.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>4. Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : {siteData.contact.email}
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>5. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
              protéger vos données personnelles contre tout accès, modification, divulgation ou 
              destruction non autorisée.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>6. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking, publicitaires ou analytiques. 
              Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>7. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour. La version en vigueur 
              est toujours accessible sur cette page.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h2>8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
            </p>
            <p>
              <strong>Email :</strong> {siteData.contact.email}<br />
              <strong>Téléphone :</strong> {siteData.contact.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}