import type { Metadata } from 'next';

interface SEOParams {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata(params: SEOParams): Metadata {
  const {
    title,
    description,
    canonical,
    ogImage = 'https://www.cphotobooth.fr/images/hero.jpg',
    noindex = false,
  } = params;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'CPhotobooth',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.cphotobooth.fr/#organization',
    name: 'CPhotobooth',
    image: 'https://www.cphotobooth.fr/images/hero.jpg',
    url: 'https://www.cphotobooth.fr',
    telephone: '+33 X XX XX XX XX', // À remplacer
    email: 'contact@cphotobooth.fr',
    priceRange: '229€-339€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tours',
      addressRegion: 'Centre-Val de Loire',
      postalCode: '37000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3941,
      longitude: 0.6848,
    },
    areaServed: [
      { '@type': 'City', name: 'Tours' },
      { '@type': 'AdministrativeArea', name: 'Indre-et-Loire' },
      { '@type': 'AdministrativeArea', name: 'Centre-Val de Loire' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, serviceType: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    serviceType,
    provider: {
      '@id': 'https://www.cphotobooth.fr/#organization',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.3941,
        longitude: 0.6848,
      },
      geoRadius: 50000,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOfferSchema(offers: Array<{
  name: string;
  price: string;
  description: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Formules photobooth CPhotobooth',
    itemListElement: offers.map(offer => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer.name,
        description: offer.description,
      },
      price: offer.price.replace('€', ''),
      priceCurrency: 'EUR',
      url: 'https://www.cphotobooth.fr/tarifs',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
    })),
  };
}