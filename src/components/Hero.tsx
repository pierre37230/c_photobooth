import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>{siteData.hero.title}</h1>
          <p>{siteData.hero.subtitle}</p>
          <Link href={siteData.hero.ctaLink} className="btn btn-primary">
            {siteData.hero.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}