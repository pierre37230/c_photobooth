import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import USP from '@/components/USP';
import PricingPreview from '@/components/PricingPreview';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import FAQPreview from '@/components/FAQPreview';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Location Photobooth Tours dès 124€ | Borne Photo 37',
  description: 'Location photobooth premium à Tours. Fabrication française, bois véritable, appareil photo pro. Mariage, anniversaire, entreprise. Retrait express. 179€ le weekend.',
  alternates: {
    canonical: 'https://cphotobooth.fr',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <USP />
      
      {/* Section sémantique enrichie */}
      <section className="section section-light">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Location de Photobooth à Tours et en Indre-et-Loire</h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-light)', marginTop: '1.5rem' }}>
              Spécialiste de la <strong>location de borne photo</strong> pour vos événements à <strong>Tours et dans tout le département 37</strong>, 
              nous vous proposons un <strong>photobooth artisanal</strong> en bois massif <strong>fabriqué en France</strong>. 
              Idéal pour <strong>mariages</strong>, <strong>anniversaires</strong> et <strong>événements d'entreprise</strong>, 
              notre borne photo garantit des <strong>souvenirs mémorables</strong> avec une <strong>qualité professionnelle</strong>.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="/photobooth-mariage-tours" className="btn btn-secondary">
                Photobooth Mariage
              </Link>
              <Link href="/photobooth-entreprise-tours" className="btn btn-secondary">
                Événements Entreprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Advantages />
      <PricingPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <ContactSection />
    </>
  );
}