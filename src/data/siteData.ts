export const siteData = {
  businessName: "CPhotobooth",
  tagline: "Location de photobooth premium à Tours",
  description: "Location de bornes photo haut de gamme pour vos mariages, anniversaires et événements. Fabrication 100% française, artisanale en bois véritable avec appareil photo professionnel intégré. Retrait express à Tours.",
  
  promoText: "🎉 OFFRE DE LANCEMENT : jusqu'à -60€ sur toutes les formules !",
  
  contact: {
    email: "contact@cphotobooth.fr",
    phone: "06 XX XX XX XX",
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
    title: "Photobooth Premium Fabriqué en France",
    subtitle: "Location weekend ou soirée • Retrait express à Tours • Installation ultra-simple • Bois véritable et appareil photo professionnel",
    ctaText: "Découvrir nos tarifs",
    ctaLink: "/tarifs",
    image: "/images/hero.jpg",
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
      title: "Tarifs Transparents",
      description: "Pas de prise de tête ni de mauvaises surprises : tous les tarifs sont affichés clairement",
    },
  ],

  pricingWeekend: [
    {
      name: "Formule Digitale",
      price: "229€",
      oldPrice: "259€",
      duration: "Weekend 48h",
      savings: "-30€",
      features: [
        "Photobooth en bois fabrication française",
        "Véritable appareil photo intégré",
        "Photos illimitées pendant 48h",
        "Toutes les photos en ligne après l'événement",
        "Envoi par email ou lien de téléchargement",
        "Guide et vidéos d'installation",
        "Retrait express à Tours",
      ],
      popular: false,
    },
    {
      name: "Formule Impression",
      price: "289€",
      oldPrice: "329€",
      duration: "Weekend 48h",
      savings: "-40€",
      features: [
        "Tout de la formule Digitale",
        "200 impressions papier 10x15cm incluses",
        "Imprimante professionnelle",
        "Qualité photo exceptionnelle",
        "Souvenirs instantanés pour vos invités",
      ],
      popular: true,
    },
    {
      name: "Formule Complète",
      price: "339€",
      oldPrice: "399€",
      duration: "Weekend 48h",
      savings: "-60€",
      features: [
        "Tout de la formule Impression",
        "400 impressions papier 10x15cm au total",
        "Template photo personnalisé inclus",
        "Le maximum pour votre événement",
      ],
      popular: false,
    },
  ],

  pricingSoiree: [
    {
      name: "Formule Digitale Soirée",
      price: "124€",
      oldPrice: "139€",
      duration: "À partir de 18h",
      savings: "-15€",
      features: [
        "Photobooth en bois fabrication française",
        "Véritable appareil photo intégré",
        "Photos illimitées pendant la soirée",
        "Toutes les photos en ligne après",
        "Parfait pour soirées et afterworks",
        "Guide et vidéos d'installation",
        "Retrait express à Tours",
      ],
      popular: false,
    },
    {
      name: "Formule Impression Soirée",
      price: "169€",
      oldPrice: "199€",
      duration: "Soirée",
      savings: "-30€",
      features: [
        "Tout de la formule Digitale",
        "200 impressions papier 10x15cm incluses",
        "Imprimante professionnelle",
        "Parfait pour événements en semaine",
      ],
      popular: true,
    },
    {
      name: "Formule Complète Soirée",
      price: "219€",
      oldPrice: "259€",
      duration: "Soirée",
      savings: "-40€",
      features: [
        "Tout de la formule Impression",
        "400 impressions papier 10x15cm au total",
        "Le maximum pour votre soirée",
      ],
      popular: false,
    },
  ],

  delivery: [
    {
      distance: "Moins de 30km",
      price: "29€",
      description: "Livraison dans un rayon de 30km autour de Tours",
    },
    {
      distance: "30 à 60km",
      price: "45€",
      description: "Livraison entre 30 et 60km de Tours",
    },
    {
      distance: "Plus de 60km",
      price: "60€",
      description: "Livraison au-delà de 60km de Tours",
    },
  ],

  options: [
    {
      name: "100 Impressions Supplémentaires",
      price: "39€",
      description: "Pack de 100 photos 10x15cm en plus",
    },
    {
      name: "200 Impressions Supplémentaires",
      price: "60€",
      description: "Pack de 200 photos 10x15cm en plus",
    },
    {
      name: "Template Personnalisé",
      price: "10€",
      description: "Personnalisation du design des photos avec vos prénoms, logo, date...",
    },
  ],

  // Ancien pricing gardé pour compatibilité
  pricing: [
    {
      name: "Formule Digitale",
      price: "229€",
      oldPrice: "259€",
      duration: "Weekend 48h",
      features: [
        "Photobooth en bois fabrication française",
        "Véritable appareil photo intégré",
        "Photos illimitées pendant 48h",
        "Toutes les photos en ligne après",
      ],
      popular: false,
      badge: "100% numérique",
    },
    {
      name: "Formule Complète",
      price: "329€",
      oldPrice: "389€",
      duration: "Weekend 48h",
      features: [
        "Tout de la formule Digitale",
        "400 impressions papier incluses",
        "Template personnalisé inclus",
      ],
      popular: true,
      badge: "La meilleure",
    },
    {
      name: "Formule Soirée",
      price: "À partir de 124€",
      oldPrice: null,
      duration: "Dès 18h",
      features: [
        "Toutes les options disponibles",
        "Tarifs préférentiels soirée",
        "Idéal pour événements en semaine",
      ],
      popular: false,
      badge: "Soirée",
    },
  ],

  gallery: [
    { src: "/images/photobooth-vrai.jpg", alt: "Photobooth bois fabriqué France Tours" },
    { src: "/images/photobooth-2.jpg", alt: "Borne photo artisanale appareil photo professionnel" },
    { src: "/images/photobooth-3.jpg", alt: "Location photobooth mariage Tours retrait express" },
    { src: "/images/photobooth-4.jpg", alt: "Photobooth bois véritable fabrication française" },
    { src: "/images/photobooth-5.jpg", alt: "Borne photo weekend Tours installation simple" },
    { src: "/images/photobooth-6.jpg", alt: "Photobooth premium Tours Indre-et-Loire 37" },
  ],

  testimonials: [
    {
      name: "Noé",
      event: "Anniversaire",
      text: "Installation en 2 minutes chrono ! La qualité des photos est top. Les invités ont adoré et le retrait à Tours était hyper pratique.",
      rating: 5,
    },

  ],

  faq: [
    {
      question: "Où récupérer le photobooth ?",
      answer: "Le retrait se fait directement à Tours (37). Nous vous communiquons l'adresse exacte lors de la réservation. Le retrait est express : vous arrivez, on vous remet le photobooth avec le guide et les vidéos, et c'est parti ! Une option de livraison est disponible selon votre localisation.",
    },
    {
      question: "L'installation est-elle compliquée ?",
      answer: "Absolument pas ! L'installation est ultra-simple : vous branchez le photobooth sur une prise électrique, et c'est tout. Pas de montage, pas de réglages compliqués. Nous fournissons un guide papier et des vidéos explicatives. En 2 minutes, c'est opérationnel.",
    },
    {
      question: "Qu'est-ce qui différencie votre photobooth des autres ?",
      answer: "Notre photobooth est fabriqué à la main en France, en bois véritable (pas de plastique !). Il intègre un véritable appareil photo professionnel, pas une simple webcam. Le résultat : des photos de qualité exceptionnelle. C'est du premium artisanal français.",
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, aucune prise de tête ! Tous nos tarifs sont affichés clairement et connus à l'avance. Pas de mauvaises surprises. Ce que vous voyez sur notre site, c'est ce que vous payez.",
    },
    {
      question: "Comment récupérer les photos après l'événement ?",
      answer: "Avec toutes nos formules, toutes les photos sont disponibles après votre événement. Nous vous les envoyons par email ou via un lien de téléchargement sécurisé. Vous pouvez les partager avec tous vos invités !",
    },
    {
      question: "Combien de photos puis-je prendre ?",
      answer: "Autant que vous voulez ! Les photos sont illimitées pendant toute la durée de votre location. Vos invités peuvent se faire tirer le portrait autant de fois qu'ils le souhaitent.",
    },
    {
      question: "Quelle est la différence entre weekend et soirée ?",
      answer: "La formule weekend est pour 48h (vendredi soir au dimanche soir), parfaite pour les mariages. La formule soirée démarre à partir de 18h et est idéale pour les événements en semaine, anniversaires ou soirées d'entreprise.",
    },
    {
      question: "Puis-je personnaliser les photos ?",
      answer: "Oui ! Le template personnalisé est inclus dans la formule Complète, ou disponible en option pour 10€ avec les autres formules. Nous créons un design avec vos prénoms, date, logo, etc.",
    },
    {
      question: "Quel est le délai de réservation ?",
      answer: "Nous conseillons de réserver au minimum 2 semaines à l'avance pour les weekends. Pour les soirées en semaine, une semaine d'avance est généralement suffisante. N'hésitez pas à nous contacter même à la dernière minute, nous ferons notre possible !",
    },
  ],

  legalEntity: {
    companyName: "CPhotobooth",
    legalForm: "Micro entreprise",
    siret: "numéro de SIRET en cours d'attribution",
    address: "Dangé Saint Romain, 86220, France",
    email: "contact@cphotobooth.fr",
    phone: "07 81 41 51 95",
    directorName: "Cannelle Laverne",
  },
};