import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateLocalBusinessSchema } from '@/lib/seo-utils';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cphotobooth.fr'),
  title: {
    default: 'CPhotobooth - Location Photobooth Tours',
    template: '%s | CPhotobooth'
  },
  description: 'Location photobooth premium à Tours et en Indre-et-Loire',
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
      <body className={inter.className}>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8BRPGVJPXY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8BRPGVJPXY');
            `,
          }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}