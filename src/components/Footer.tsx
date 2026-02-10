// src/components/Footer.tsx
import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 10 }}>
              C&Photobooth
            </div>
            <p className="muted" style={{ margin: 0 }}>
              Location de photobooth à Tours et en Indre-et-Loire (37). Retrait
              sur Tours, livraison en option.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 750, marginBottom: 10 }}>Liens</div>
            <div style={{ display: "grid", gap: 8 }}>
              <Link href="/tarifs">Tarifs</Link>
              <Link href="/galerie">Galerie</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 750, marginBottom: 10 }}>Légal</div>
            <div style={{ display: "grid", gap: 8 }}>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Confidentialité</Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "14px 0",
            fontSize: 14,
            color: "var(--subtle)",
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span>© {new Date().getFullYear()} C&Photobooth. Tous droits réservés.</span>
          <span>Fabriqué en France • Photobooth en bois</span>
        </div>
      </Container>
    </footer>
  );
}
