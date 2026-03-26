import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Photobooth Tours | Questions Location Borne Photo 37',
  description: 'Questions fréquentes sur la location de photobooth à Tours : installation, prix, zone intervention, impressions. Réponses claires pour votre événement.',
  alternates: {
    canonical: 'https://www.cphotobooth.fr/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
