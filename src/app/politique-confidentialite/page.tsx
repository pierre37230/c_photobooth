import { Container } from "@/components/Container";

export default function PolitiquePage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">Privacy</span>
          <span>Politique de confidentialité</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>Politique de confidentialité</h1>
        <div className="card" style={{ padding: 22, marginTop: 18 }}>
          <p className="p">
            À compléter : données collectées (emails/téléphone), finalité, durée de conservation, droits RGPD, contact, etc.
          </p>
        </div>
      </Container>
    </section>
  );
}
