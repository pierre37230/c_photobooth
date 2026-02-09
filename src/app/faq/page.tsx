import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const faq = [
  {
    q: "Faut-il une connexion Internet sur place ?",
    a: "Non. La borne peut fonctionner sans Wi-Fi pendant l’événement. Les envois / galerie peuvent être faits après, une fois la borne reconnectée.",
  },
  {
    q: "Est-ce facile à installer ?",
    a: "Oui. Le retrait inclut un guide simple. L’installation se fait en quelques minutes (branchements + démarrage).",
  },
  {
    q: "Combien de temps dure la location ?",
    a: "Week-end (retrait + retour). Les horaires exacts sont à préciser lors de la réservation.",
  },
  {
    q: "Y a-t-il une caution ?",
    a: "Oui, une caution peut être demandée. Le montant et les modalités seront confirmés lors de l’échange (à compléter).",
  },
  {
    q: "Peut-on personnaliser le cadre (template) ?",
    a: "Oui, option template personnalisé (10€). Tu fournis ton texte / style, on adapte un design propre à ton événement.",
  },
  {
    q: "Livraison : comment ça marche ?",
    a: "Livraison possible à partir de 25€ selon distance. Sinon retrait sur Tours pour simplifier et réduire le coût.",
  },
];

export default function FaqPage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">FAQ</span>
          <span>Tout ce qu’il faut pour louer sereinement</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>FAQ</h1>
        <p className="p" style={{ marginTop: 10, fontSize: 18 }}>
          Les réponses aux questions les plus fréquentes pour une location simple et efficace.
        </p>

        <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
          {faq.map((item) => (
            <details key={item.q} className="card" style={{ padding: 18 }}>
              <summary style={{ cursor: "pointer", fontWeight: 850, outline: "none" }}>
                {item.q}
              </summary>
              <div className="small" style={{ marginTop: 10, lineHeight: 1.7 }}>
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="card" style={{ padding: 22, marginTop: 18 }}>
          <h2 className="h2">Tu as un cas particulier ?</h2>
          <p className="p" style={{ marginTop: 10 }}>
            Dis-nous la date, le lieu et le type d’événement (mariage, anniversaire, soirée d’entreprise…)
            et on te confirme la disponibilité.
          </p>
          <div style={{ marginTop: 14 }}>
            <Button href="/contact" variant="primary">Demander un devis</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
