import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <Container>
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <div className="pill">
                <span className="badge">Retrait sur Tours</span>
                <span>Livraison en option</span>
              </div>

              <h1 className="h1" style={{ marginTop: 16 }}>
                Location de photobooth à {siteConfig.cityLabel} ({siteConfig.zoneLabel})
              </h1>

              <p className="p" style={{ marginTop: 14, fontSize: 18 }}>
                Une borne photo simple à installer, une expérience premium, et des souvenirs instantanés.
                Formule digitale ou impressions — retrait sur Tours, livraison possible.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                <Button href="/tarifs" variant="primary">Voir les tarifs</Button>
                <Button href="/contact" variant="ghost">Demander un devis</Button>
              </div>

              <div className="grid grid-3" style={{ marginTop: 22 }}>
                <div className="kpi">
                  <div style={{ fontWeight: 850 }}>Installation rapide</div>
                  <div className="small" style={{ marginTop: 6 }}>Guides fournis, mise en route en quelques minutes.</div>
                </div>
                <div className="kpi">
                  <div style={{ fontWeight: 850 }}>Photos HD</div>
                  <div className="small" style={{ marginTop: 6 }}>Rendu net, éclairage constant, expérience fluide.</div>
                </div>
                <div className="kpi">
                  <div style={{ fontWeight: 850 }}>Partage facile</div>
                  <div className="small" style={{ marginTop: 6 }}>Galerie / envoi possible après l’événement.</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(17,24,39,.10)" }}>
                <div style={{ padding: 18, background: "linear-gradient(135deg, rgba(255,77,141,.16), rgba(255,183,3,.14))" }}>
                  <div style={{ fontWeight: 850, fontSize: 18 }}>Aperçu de l’expérience</div>
                  <div className="small" style={{ marginTop: 6 }}>
                    Ici tu mettras 2–3 photos, ou une capture de la borne en action.
                  </div>
                </div>
                <div style={{ padding: 18 }}>
                  <div className="small" style={{ marginBottom: 10 }}>Idées de contenu :</div>
                  <ul className="small" style={{ margin: 0, paddingLeft: 16, lineHeight: 1.7 }}>
                    <li>Exemples de strips / formats</li>
                    <li>Photo du photobooth (esthétique bois)</li>
                    <li>Exemples d’impressions</li>
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                <Button href="/galerie" variant="ghost">Voir la galerie</Button>
                <Button href="/faq" variant="ghost">Lire la FAQ</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Container>
          <div className="card" style={{ padding: 22 }}>
            <div className="grid grid-2" style={{ alignItems: "center" }}>
              <div>
                <h2 className="h2">Deux formules simples</h2>
                <p className="p" style={{ marginTop: 10 }}>
                  Retrait sur Tours. Une offre digitale ou une offre avec impressions.
                  Options : livraison + template personnalisé.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
                <Button href="/tarifs" variant="primary">Voir les offres</Button>
                <Button href="/contact" variant="dark">Réserver / demander dispo</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
