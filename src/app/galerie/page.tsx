import type { Metadata } from 'next';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Galerie Photos Photobooth Tours | Mariages & Événements 37',
  description: 'Découvrez notre photobooth en bois en action lors de mariages, anniversaires et événements à Tours. Photos réelles de nos clients en Indre-et-Loire.',
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
          <p>Nos photobooths en action lors de vos événements</p>
        </div>

        <div className="gallery-grid">
          {siteData.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2>Envie de créer vos propres souvenirs ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            Réservez dès maintenant votre photobooth pour votre prochain événement à Tours
          </p>
          <a href="/contact" className="btn btn-primary">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
