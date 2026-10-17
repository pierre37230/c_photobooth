import type { Metadata } from 'next';
import AnalyticsConsent from '@/components/AnalyticsConsent';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema } from '@/lib/seo-utils';




export const metadata: Metadata = {
  metadataBase: new URL('https://www.cphotobooth.fr'),
  title: {
    default: 'CPhotobooth - Location Photobooth Tours',
    template: '%s | CPhotobooth'
  },
  description: 'Location de photobooth en bois à Tours et en Indre-et-Loire',
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'CPhotobooth', images: [{url:'/images/photobooth-vrai.webp',width:1024,height:1024,alt:'Borne en bois CPhotobooth'}] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="fr-FR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <AnalyticsConsent />
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}