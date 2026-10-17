'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteData } from '@/data/siteData';
import { trackEvent } from '@/lib/analytics';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image
              src="/images/logo.png"
              alt={siteData.businessName}
              width={50}
              height={50}
              priority
            />
            <span className="logo-text">{siteData.businessName}</span>
          </Link>

          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="navigation-principale"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav id="navigation-principale" aria-label="Navigation principale" className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link href="/" onClick={closeMenu}>Accueil</Link>
            <Link href="/tarifs" onClick={closeMenu}>Tarifs</Link>
            <Link href="/galerie" onClick={closeMenu}>Galerie</Link><Link href="/locations-evenementielles" onClick={closeMenu}>Autres locations</Link>
            <Link href="/conseils" onClick={closeMenu}>Conseils</Link>
            <Link
              href="/contact"
              onClick={() => {
                closeMenu();
                trackEvent('click_cta_header');
              }}
            >
              Devis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
