'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteData } from '@/data/siteData';
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
            {siteData.businessName}
          </Link>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <Link href="/" onClick={closeMenu}>Accueil</Link>
            <Link href="/tarifs" onClick={closeMenu}>Tarifs</Link>
            <Link href="/galerie" onClick={closeMenu}>Galerie</Link>
            <Link href="/faq" onClick={closeMenu}>FAQ</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}