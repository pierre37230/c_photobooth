import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer style={{ padding: "36px 0 46px" }}>
      <div className="hr" />
      <Container>
        <div style={{ paddingTop: 28 }} className="grid grid-3">
          <div>
            <div style={{ fontWeight: 850 }}>{siteConfig.brandName}</div>
            <p className="p" style={{ marginTop: 10 }}>
              Location de photobooth à {siteConfig.cityLabel} et en {siteConfig.zoneLabel}. Retrait sur Tours, livraison en option.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Liens</div>
            <div style={{ display: "grid", gap: 10 }}>
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="small">{item.label}</Link>
              ))}
              <Link href="/mentions-legales" className="small">Mentions légales</Link>
              <Link href="/politique-confidentialite" className="small">Confidentialité</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: 10 }}>Contact</div>
            <div className="small" style={{ display: "grid", gap: 10 }}>
              <div>Téléphone : <span style={{ opacity: .7 }}>{siteConfig.contact.phone || "à compléter"}</span></div>
              <div>Email : <span style={{ opacity: .7 }}>{siteConfig.contact.email || "à compléter"}</span></div>
              <div>Retrait : <span style={{ opacity: .7 }}>{siteConfig.contact.pickupAddress || "à compléter"}</span></div>
            </div>
          </div>
        </div>

        <div className="hr" style={{ marginTop: 22 }} />
        <div className="small" style={{ display: "flex", justifyContent: "space-between", gap: 12, paddingTop: 16, flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} {siteConfig.brandName}. Tous droits réservés.</div>
          <div style={{ display: "flex", gap: 14 }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
