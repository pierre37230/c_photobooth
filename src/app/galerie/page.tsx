import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function GaleriePage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">Galerie</span>
          <span>Exemples de rendus</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>Galerie</h1>
        <p className="p" style={{ marginTop: 10, fontSize: 18 }}>
          Ici, tu peux mettre des exemples d’impressions, de formats (strips), et quelques photos d’événements.
        </p>

        <div className="grid grid-3" style={{ marginTop: 18 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card" style={{ padding: 14 }}>
              <div
                style={{
                  height: 180,
                  borderRadius: 16,
                  border: "1px dashed rgba(17,24,39,.20)",
                  background: "rgba(255,255,255,.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(17,24,39,.55)",
                  fontWeight: 750,
                }}
              >
                Image {i + 1}
              </div>
              <div className="small" style={{ marginTop: 10 }}>
                Légende (à compléter)
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 22, marginTop: 18 }}>
          <h2 className="h2">Tu veux voir un exemple complet ?</h2>
          <p className="p" style={{ marginTop: 10 }}>
            On peut aussi envoyer une vidéo démo (et un exemple de galerie post-événement).
          </p>
          <div style={{ marginTop: 14 }}>
            <Button href="/contact" variant="primary">Nous contacter</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
