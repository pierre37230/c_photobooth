// src/components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";

const links = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/galerie", label: "Galerie" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Ferme le menu quand on change de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Container>
        <div className="header-row">
          <Link className="brand" href="/">
            <span style={{ fontSize: 18 }}>C&Photobooth</span>
            <span className="muted" style={{ fontWeight: 600, fontSize: 14 }}>
              Photobooth • Tours • 37
            </span>
          </Link>

          <nav className="nav-desktop" aria-label="Navigation principale">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="btn btn-ghost" href="/tarifs">
              Voir les tarifs
            </Link>
            <Link className="btn btn-primary" href="/contact">
              Demander un devis
            </Link>

            <button
              className="burger"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-drawer ${open ? "open" : ""}`}>
          <div className="mobile-nav">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <Link className="btn btn-primary" href="/contact">
              Demander un devis
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
