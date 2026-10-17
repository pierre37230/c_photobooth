import { prices } from '@/lib/pricing';
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
    ogImage = 'https://www.cphotobooth.fr/images/photobooth-vrai.webp',
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
          width: 1024,
          height: 1024,
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
    image: 'https://www.cphotobooth.fr/icon.png',
    logo: 'https://www.cphotobooth.fr/icon.png',
    url: 'https://www.cphotobooth.fr',
    telephone: '+33781415195',
    email: 'contact@cphotobooth.fr',
    priceRange: `${prices.soiree.digitale}€–${prices.weekend.complete}€`,
    areaServed: [
      {
        '@type': 'City',
        name: 'Tours',
      },
      { '@type': 'City', name: 'Blois' },
      { '@type': 'City', name: 'Amboise' },
      { '@type': 'AdministrativeArea', name: 'Loir-et-Cher' },
      {
        '@type': 'AdministrativeArea',
        name: 'Indre-et-Loire',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Centre-Val de Loire',
      },
    ],
    sameAs: [],

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
    areaServed: { '@type': 'AdministrativeArea', name: 'Indre-et-Loire' },
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
      price: offer.price.replace(/[^0-9,.]/g, '').replace(',', '.'),
      priceCurrency: 'EUR',
      url: 'https://www.cphotobooth.fr/tarifs',
    })),
  };
}