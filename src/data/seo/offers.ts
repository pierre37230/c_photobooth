export interface Offer {
  name: string;
  slug: string;
  price: string;
  oldPrice?: string;
  savings?: string;
  duration: string;
  popular?: boolean;
  features: string[];
  includesDelivery?: boolean;
  category: 'weekend' | 'evening';
}

export const weekendOffers: Offer[] = [
  {
    name: 'Digitale',
    slug: 'digitale-weekend',
    price: '229€',

    duration: 'Weekend 48h',
    features: [
      'Photobooth bois artisanal français',
      'Photos illimitées pendant 48h',
      'Vrai appareil photo professionnel',
      'Toutes les photos en ligne après',
      'Installation ultra-simple (2 min)',
      'Guide complet + vidéos',
      'Assistance 7j/7',
      'Retrait express à Tours',
    ],
    category: 'weekend'
  },
  {
    name: 'Impression',
    slug: 'impression-weekend',
    price: '289€',

    duration: 'Weekend 48h',
    popular: true,
    features: [
      'Tout de la formule Digitale',
      '200 impressions papier 10x15cm',
      'Imprimante professionnelle',
      'Vos invités repartent avec leurs photos',
      'Papier photo haute qualité',
      'Impressions instantanées',
    ],
    category: 'weekend'
  },
  {
    name: 'Complète',
    slug: 'complete-weekend',
    price: '339€',

    duration: 'Weekend 48h',
    features: [
      'Tout de la formule Impression',
      '400 impressions au total (+200)',
      'Template 100% personnalisé',
      'Vos prénoms, date, design unique',
      'Livraison GRATUITE jusqu\'à 20km Tours',
      'Meilleur rapport qualité-prix',
    ],
    includesDelivery: true,
    category: 'weekend'
  },
];

export const eveningOffers: Offer[] = [
  {
    name: 'Digitale Soirée',
    slug: 'digitale-soiree',
    price: '124€',

    duration: 'Soirée (à partir de 18h)',
    features: [
      'Photobooth bois artisanal français',
      'Photos illimitées toute la soirée',
      'Vrai appareil photo professionnel',
      'Toutes les photos en ligne après',
      'Assistance 7j/7',
      'Uniquement en semaine',
    ],
    category: 'evening'
  },
  {
    name: 'Impression Soirée',
    slug: 'impression-soiree',
    price: '169€',

    duration: 'Soirée (à partir de 18h)',
    popular: true,
    features: [
      'Tout de la formule Digitale Soirée',
      '200 impressions papier',
      'Imprimante professionnelle',
      'Impressions instantanées',
      'Uniquement en semaine',
    ],
    category: 'evening'
  },
  {
    name: 'Complète Soirée',
    slug: 'complete-soiree',
    price: '219€',

    duration: 'Soirée (à partir de 18h)',
    features: [
      'Tout de la formule Impression Soirée',
      '400 impressions au total',
      'Template personnalisé inclus',
      'Livraison gratuite <20km Tours',
      'Uniquement en semaine',
    ],
    includesDelivery: true,
    category: 'evening'
  },
];

export const additionalOptions = [
  {
    name: 'Livraison <20km',
    price: '39€',
    description: 'Livraison directe à votre lieu (gratuite avec formule Complète)',
  },
  {
    name: 'Livraison 20-40km',
    price: '45€',
    description: 'Pour Amboise, Azay-le-Rideau, Langeais, Montbazon...',
  },
  {
    name: 'Livraison 40-60km',
    price: '60€',
    description: 'Pour Chinon, Loches et communes éloignées',
  },
  {
    name: '+100 impressions',
    price: '39€',
    description: 'Pack de 100 tirages papier supplémentaires',
  },
  {
    name: '+200 impressions',
    price: '60€',
    description: 'Pack de 200 tirages papier supplémentaires',
  },
  {
    name: 'Template personnalisé',
    price: '10€',
    description: 'Design unique avec vos prénoms/logo (inclus formule Complète)',
  },
];

export function getAllOffers(): Offer[] {
  return [...weekendOffers, ...eveningOffers];
}

export function getOfferBySlug(slug: string): Offer | undefined {
  return getAllOffers().find(o => o.slug === slug);
}