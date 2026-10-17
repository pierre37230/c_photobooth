import { globalFAQs } from '@/data/seo/faqs';
import { plans, prices, formatPrice } from '@/lib/pricing';
export const siteData = {
  businessName: "CPhotobooth",
  tagline: "Location de photobooth premium à Tours",
  description: "Location de bornes photo haut de gamme pour vos mariages, anniversaires et événements. Fabrication 100% française, artisanale en bois véritable avec appareil photo professionnel intégré. Retrait express à Tours.",
  
 
  contact: {
    email: "contact@cphotobooth.fr",
    phone: "07 81 41 51 95",
    address: "Tours, Indre-et-Loire (37)",
    city: "Tours",
    postalCode: "37000",
    region: "Centre-Val de Loire",
    country: "France",
  },

  social: {
    facebook: "",
    instagram: "",
  },

  hero: {
    title: "Location de photobooth à Tours",
    subtitle: "Une borne en bois pour vos mariages, anniversaires et soirées d’entreprise. Photos numériques illimitées, impressions selon la formule et retrait à Tours.",
    ctaText: "Découvrir nos tarifs",
    ctaLink: "/tarifs",
    image: "/images/photobooth-vrai.webp",
  },

  advantages: [
    {
      title: "Fabrication Française 🇫🇷",
      description: "Borne artisanale fabriquée à la main en France, en bois véritable avec un vrai appareil photo intégré",
    },
    {
      title: "Retrait Express à Tours",
      description: "Récupérez votre photobooth à Tours en 5 minutes. Guide et vidéos d'installation fournis",
    },
    {
      title: "Installation Ultra-Simple",
      description: "Branchez, c'est parti ! Aucune installation compliquée, tout est prêt à l'emploi",
    },
    {
      title: "Des formules détaillées",
      description: "Pas de prise de tête ni de mauvaises surprises : tous les tarifs sont affichés clairement",
    },
  ],

  pricingWeekend: plans('weekend'),
  pricingSoiree: plans('soiree'),
  delivery: [
    { distance: 'Jusqu’à 20 km', price: formatPrice(prices.livraison.jusqua20km), description: 'Autour de Tours • inclus avec la formule Complète' },
    { distance: 'Plus de 20 à 40 km', price: formatPrice(prices.livraison.de20a40km), description: 'Adresse exacte à confirmer lors du devis' },
    { distance: 'Plus de 40 à 60 km', price: formatPrice(prices.livraison.de40a60km), description: 'Au-delà : contactez-nous pour un devis' },
  ],
  options: [
    { name: '100 impressions supplémentaires', price: formatPrice(prices.options.impressions100), description: 'Avec les formules Impression et Complète' },
    { name: '200 impressions supplémentaires', price: formatPrice(prices.options.impressions200), description: 'Avec les formules Impression et Complète' },
    { name: 'Cadre photo personnalisé', price: formatPrice(prices.options.personnalisation), description: 'Prénoms, date ou logo • inclus dans la formule Complète' },
  ],

  gallery: [
    { src: "/images/photobooth-vrai.webp", alt: "Photobooth bois fabriqué France Tours" },
    { src: "/images/photobooth-2.webp", alt: "Borne photo artisanale appareil photo professionnel" },
    { src: "/images/photobooth-3.webp", alt: "Location photobooth mariage Tours retrait express" },
    { src: "/images/photobooth-4.webp", alt: "Photobooth bois véritable fabrication française" },
    { src: "/images/photobooth-5.webp", alt: "Borne photo weekend Tours installation simple" },
    { src: "/images/photobooth-6.webp", alt: "Photobooth premium Tours Indre-et-Loire 37" },
  ],

  testimonials: [
    {
      name: "Noé",
      event: "Anniversaire",
      text: "Installation en 2 minutes chrono ! La qualité des photos est top. Les invités ont adoré et le retrait à Tours était hyper pratique.",
      rating: 5,
    },

  ],

  faq: globalFAQs,

  legalEntity: {
    companyName: "CPhotobooth",
    legalForm: "Micro entreprise",
    siren: "100 959 626",
    address: "Dangé Saint Romain, 86220, France",
    email: "contact@cphotobooth.fr",
    phone: "07 81 41 51 95",
    directorName: "Cannelle Laverne",
  },


};