import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteData } from '@/data/siteData';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cphotobooth.fr'),
  title: {
    default: 'Location Photobooth Tours dès 179€ | Borne Photo Mariage 37',
    template: '%s | CPhotobooth Tours',
  },
  description: 'Location photobooth premium à Tours dès 179€. Fabrication française artisanale, bois véritable, vrai appareil photo. Retrait express, installation simple. Mariages, anniversaires, entreprises.',
  keywords: [
    'location photobooth Tours',
    'borne photo Tours',
    'photobooth mariage Tours',
    'location borne photo 37',
    'photobooth Indre-et-Loire',
    'borne photo mariage 37',
    'photobooth événement Tours',
    'location photobooth weekend Tours',
    'borne selfie Tours',
    'photobooth anniversaire Tours',
  ],
  authors: [{ name: 'CPhotobooth' }],
  creator: 'CPhotobooth',
  publisher: 'CPhotobooth',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cphotobooth.fr',
    siteName: 'CPhotobooth',
    title: 'Location Photobooth Tours dès 179€ | Borne Photo Mariage 37',
    description: 'Location photobooth premium à Tours. Fabrication française, bois véritable, vrai appareil photo. Retrait express. Mariages, anniversaires, entreprises.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'CPhotobooth - Location borne photo Tours',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://cphotobooth.fr/#service',
    name: 'Location de Photobooth Premium',
    description: 'Service de location de bornes photo haut de gamme fabriquées artisanalement en France pour mariages, anniversaires et événements d\'entreprise',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://cphotobooth.fr/#organization',
      name: 'CPhotobooth',
      image: 'https://cphotobooth.fr/images/hero.jpg',
      telephone: siteData.contact.phone,
      email: siteData.contact.email,
      priceRange: '179€-259€',
      url: 'https://cphotobooth.fr',
      areaServed: [
        {
          '@type': 'City',
          name: 'Tours',
          '@id': 'https://www.wikidata.org/wiki/Q288'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Indre-et-Loire',
          alternateName: '37'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Centre-Val de Loire'
        }
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.3941,
        longitude: 0.6848
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de location photobooth',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Formule Numérique',
              description: 'Location photobooth weekend avec photos numériques illimitées'
            },
            price: '179',
            priceCurrency: 'EUR'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Formule Complète',
              description: 'Location photobooth weekend avec 200 impressions papier incluses'
            },
            price: '259',
            priceCurrency: 'EUR'
          }
        ]
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '12'
      }
    },
    serviceType: 'Location de matériel événementiel',
    category: 'Photobooth, Borne photo, Animation événementielle',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.3941,
        longitude: 0.6848
      },
      geoRadius: '50000'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '179',
      highPrice: '259',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock'
    }
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://cphotobooth.fr'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tarifs',
        item: 'https://cphotobooth.fr/tarifs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://cphotobooth.fr/contact'
      }
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}