import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

function OfferCard({
  title,
  price,
  lines,
  highlight,
}: {
  title: string;
  price: number;
  lines: string[];
  highlight?: boolean;
}) {
  return (
    <div className="card" style={{ padding: 22, border: highlight ? "1px solid rgba(255,77,141,.35)" : undefined }}>
      <div className="pill" style={{ justifyContent: "space-between" }}>
        <span className="badge">Offre</span>
        {highlight ? <span style={{ fontWeight: 750, color: "#c81e64" }}>La plus demandée</span> : <span />}
      </div>

      <div style={{ marginTop: 14, fontWeight: 900, fontSize: 22 }}>{title}</div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontSize: 44, fontWeight: 950, letterSpacing: "-0.03em" }}>{price}€</div>
        <div className="small">/ week-end</div>
      </div>

      <ul className="small" style={{ marginTop: 12, paddingLeft: 16, lineHeight: 1.85 }}>
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <Button href="/contact" variant={highlight ? "primary" : "ghost"}>
          Réserver / demander dispo
        </Button>
      </div>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">Tarifs</span>
          <span>Retrait sur Tours • Livraison en option</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>Tarifs de location</h1>
        <p className="p" style={{ marginTop: 10, fontSize: 18 }}>
          Deux formules simples, retrait sur Tours. Options possibles selon votre événement.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          <OfferCard
            title={siteConfig.offers.digital.label}
            price={siteConfig.offers.digital.price}
            lines={siteConfig.offers.digital.includes}
          />
          <OfferCard
            title={siteConfig.offers.print.label}
            price={siteConfig.offers.print.price}
            lines={siteConfig.offers.print.includes}
            highlight
          />
        </div>

        <div className="card" style={{ padding: 22, marginTop: 18 }}>
          <h2 className="h2">Options</h2>
          <div className="grid grid-2" style={{ marginTop: 12 }}>
            {siteConfig.offers.options.map((o) => (
              <div key={o.name} className="kpi">
                <div style={{ fontWeight: 850 }}>{o.name}</div>
                <div className="small" style={{ marginTop: 6 }}>{o.note}</div>
              </div>
            ))}
          </div>

          <div className="small" style={{ marginTop: 14 }}>
            * Ajustements possibles selon disponibilité, distance et configuration de l’événement.
          </div>
        </div>
      </Container>
    </section>
  );
}
