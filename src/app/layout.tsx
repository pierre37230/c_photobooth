import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateLocalBusinessSchema } from '@/lib/seo-utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cphotobooth.fr'),
  // metadata globales...
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
        {children}
      </body>
    </html>
  );
}