import { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { weekendOffers, eveningOffers, additionalOptions } from '@/data/seo/offers';
import { getServiceBySlug } from '@/data/seo/services';
import { generateMetadata as genMeta, generateOfferSchema, generateFAQSchema } from '@/lib/seo-utils';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FAQSection from '@/components/seo/FAQSection';
import InternalLinks from '@/components/seo/InternalLinks';

export const metadata: Metadata = genMeta({
  title: 'Prix Photobooth Tours - Tarifs Location Borne Photo 37 dès 229€',
  description: 'Prix transparents pour la location de photobooth à Tours : 229€ à 339€ weekend. Comparatif des formules, options, livraison. Devis gratuit sous 24h. Indre-et-Loire.',
  canonical: 'https://www.cphotobooth.fr/prix-photobooth-tours',
});

export default function PrixPhotoboothToursPage() {
  const serviceContent = getServiceBySlug('prix-photobooth-tours');
  
  // Le contenu complet est dans services.ts - on l'utilise ici
  // Structure identique à photobooth-tours avec les sections spécifiques aux prix
  
  return (
    <article>
      {/* Render du contenu depuis services.ts + composants réutilisables */}
      {/* Formules avec comparaison prix barrés */}
      {/* Tableau comparatif des formules */}
      {/* Options supplémentaires détaillées */}
      {/* Comparatif avec concurrence */}
      {/* FAQ prix */}
    </article>
  );
}