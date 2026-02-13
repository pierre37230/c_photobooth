import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteData } from '@/data/siteData';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cphotobooth.fr'),
  title: {
    default: `${siteData.businessName} - Location Photobooth Tours dès 179€`,
    template: `%s | ${siteData.businessName}`,
  },
  description: 'Location photobooth premium à Tours dès 179€. Fabrication française artisanale, bois véritable, vrai appareil photo. Retrait express, installation simple. Pas de frais cachés.',
  keywords: [
    'location photobooth Tours',
    'borne photo Tours',
    'photobooth Tours pas cher',
    'location borne photo 37',
    'photobooth mariage Tours',
    'photobooth weekend Tours',
    'photobooth fabrication française',
    'retrait Tours photobooth',
    'photobooth bois Tours',
    'location photobooth Indre-et-Loire',
  ],
  authors: [{ name: siteData.businessName }],
  creator: siteData.businessName,
  publisher: siteData.businessName,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cphotobooth.fr',
    siteName: siteData.businessName,
    title: `${siteData.businessName} - Location Photobooth Tours dès 179€`,
    description: siteData.description,
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: siteData.businessName,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteData.businessName,
    description: siteData.description,
    url: 'https://cphotobooth.fr',
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    priceRange: '179€-259€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteData.contact.city,
      postalCode: siteData.contact.postalCode,
      addressRegion: siteData.contact.region,
      addressCountry: siteData.contact.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3941,
      longitude: 0.6848,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.3941,
        longitude: 0.6848,
      },
      geoRadius: '50000',
    },
    image: 'https://cphotobooth.fr/images/hero.jpg',
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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