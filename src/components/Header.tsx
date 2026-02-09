import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(10px)" }}>
      <div style={{ background: "rgba(251,251,253,.75)", borderBottom: "1px solid rgba(17,24,39,.10)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", gap: 14 }}>
            <Link href="/" aria-label="Accueil">
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <div style={{ fontWeight: 850, letterSpacing: "-0.02em" }}>{siteConfig.brandName}</div>
                <div className="small" style={{ display: "flex", gap: 6 }}>
                  <span>Photobooth</span>
                  <span>•</span>
                  <span>{siteConfig.cityLabel}</span>
                  <span>•</span>
                  <span>{siteConfig.zoneLabel}</span>
                </div>
              </div>
            </Link>

            <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="small" style={{ fontWeight: 650 }}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Button href="/tarifs" variant="ghost">Voir les tarifs</Button>
              <Button href="/contact" variant="primary">Demander un devis</Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
