import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './GalleryPreview.css';

export default function GalleryPreview() {
  const previewImages = siteData.gallery.slice(0, 6);

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Galerie</h2>
          <p>Découvrez nos photobooths en action</p>
        </div>

        <div className="gallery-grid">
          {previewImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/galerie" className="btn btn-secondary">
            Voir toute la galerie
          </Link>
        </div>
      </div>
    </section>
  );
}