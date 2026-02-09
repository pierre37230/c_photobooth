import { Container } from "@/components/Container";

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">Legal</span>
          <span>Mentions légales</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>Mentions légales</h1>
        <div className="card" style={{ padding: 22, marginTop: 18 }}>
          <p className="p">
            À compléter : identité de l’éditeur, statut (micro-entreprise), adresse, email, téléphone, hébergeur, etc.
          </p>
        </div>
      </Container>
    </section>
  );
}
