import '@/components/GalleryPreview.css';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Galerie Photos Photobooth Tours | Mariages & Événements 37',
  description: 'Découvrez le photobooth en bois CPhotobooth : photos du matériel, détails de la borne et présentation de son design.',
  alternates: {
    canonical: 'https://www.cphotobooth.fr/galerie',
  },
};

export default function GaleriePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h1>Galerie Photos</h1>
          <p>Découvrez notre photobooth en bois, photographié pour vous présenter le matériel</p>
        </div>

        <div className="gallery-grid">
          {siteData.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <Image src={image.src} alt={image.alt} width={1050} height={1400} sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2>Envie de créer vos propres souvenirs ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Demandez la disponibilité de votre photobooth pour votre prochain événement à Tours
          </p>
          <a href="/contact" className="btn btn-primary">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
