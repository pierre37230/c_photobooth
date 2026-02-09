export const siteConfig = {
  brandName: "C&Photobooth",
  cityLabel: "Tours",
  zoneLabel: "Indre-et-Loire (37)",
  domain: "", // laisse vide pour l’instant

  contact: {
    phone: "", // à compléter
    email: "", // à compléter
    pickupAddress: "", // à compléter (retrait)
  },

  offers: {
    digital: {
      price: 160,
      label: "100% digitale",
      includes: ["Photos numériques illimitées", "Retrait sur Tours", "Galerie / envoi après événement si besoin", "Guide d'installation fourni"],
    },
    print: {
      price: 250,
      label: "Impressions",
      includes: ["200 impressions incluses", "Photos numériques illimitées", "Retrait sur Tours", "Galerie / envoi après événement si besoin"],
    },
    options: [
      { name: "Livraison", note: "à partir de 25€ selon la distance" },
      { name: "Template personnalisé", note: "10€" },
    ],
  },

  seo: {
    defaultTitle: "Location de photobooth à Tours (37)",
    defaultDescription:
      "Location de photobooth à Tours et en Indre-et-Loire (37). Retrait sur Tours, livraison en option. Formules digitale ou avec impressions.",
  },

  navigation: [
    { label: "Tarifs", href: "/tarifs" },
    { label: "Galerie", href: "/galerie" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};
