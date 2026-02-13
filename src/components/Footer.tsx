import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{siteData.businessName}</h3>
            <p>{siteData.tagline}</p>
            <p className="footer-contact">
              <strong>Email:</strong> {siteData.contact.email}<br />
              <strong>Tél:</strong> {siteData.contact.phone}<br />
              <strong>Zone:</strong> {siteData.contact.address}
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/tarifs">Tarifs</Link></li>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Légal</h4>
            <ul>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteData.businessName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}