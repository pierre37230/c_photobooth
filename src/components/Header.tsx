"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll derrière le menu mobile
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Logo / Nom */}
        <Link href="/" className="brand" aria-label="Accueil C&Photobooth" onClick={() => setOpen(false)}>
          <span className="brand__name">C&Photobooth</span>
          <span className="brand__meta">Photobooth • Tours • 37</span>
        </Link>

        {/* Nav desktop */}
        <nav className="nav nav--desktop" aria-label="Navigation principale">
          <Link href="/tarifs" className="nav__link">Tarifs</Link>
          <Link href="/galerie" className="nav__link">Galerie</Link>
          <Link href="/faq" className="nav__link">FAQ</Link>
          <Link href="/contact" className="nav__link">Contact</Link>
        </nav>

        {/* Actions desktop */}
        <div className="actions actions--desktop">
          <Link href="/tarifs" className="btn btn--ghost">Voir les tarifs</Link>
          <Link href="/contact" className="btn btn--primary">Demander un devis</Link>
        </div>

        {/* Actions mobile */}
        <div className="actions actions--mobile">
          <Link href="/contact" className="btn btn--primary btn--sm">Devis</Link>

          <button
            type="button"
            className="burger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Menu mobile (drawer) */}
      {open && (
        <div className="mobile">
          <div className="mobile__backdrop" onClick={() => setOpen(false)} />
          <div className="mobile__panel" role="dialog" aria-label="Menu">
            <div className="mobile__top">
              <div className="mobile__title">Menu</div>
              <button className="mobile__close" onClick={() => setOpen(false)} aria-label="Fermer">
                ✕
              </button>
            </div>

            <div className="mobile__links">
              <Link href="/tarifs" className="mobile__link" onClick={() => setOpen(false)}>Tarifs</Link>
              <Link href="/galerie" className="mobile__link" onClick={() => setOpen(false)}>Galerie</Link>
              <Link href="/faq" className="mobile__link" onClick={() => setOpen(false)}>FAQ</Link>
              <Link href="/contact" className="mobile__link" onClick={() => setOpen(false)}>Contact</Link>
            </div>

            <div className="mobile__cta">
              <Link href="/tarifs" className="btn btn--ghost btn--block" onClick={() => setOpen(false)}>
                Voir les tarifs
              </Link>
              <Link href="/contact" className="btn btn--primary btn--block" onClick={() => setOpen(false)}>
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
