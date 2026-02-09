import { Container } from "@/components/Container";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <section className="section">
      <Container>
        <div className="pill">
          <span className="badge">Contact</span>
          <span>Réponse rapide</span>
        </div>

        <h1 className="h1" style={{ marginTop: 14 }}>Contact</h1>
        <p className="p" style={{ marginTop: 10, fontSize: 18 }}>
          Pour réserver : envoie la date, la ville, le type d’événement, et la formule souhaitée.
        </p>

        <div className="grid grid-2" style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2">Coordonnées</h2>
            <div className="small" style={{ marginTop: 14, display: "grid", gap: 10 }}>
              <div><strong>Téléphone :</strong> {siteConfig.contact.phone || "à compléter"}</div>
              <div><strong>Email :</strong> {siteConfig.contact.email || "à compléter"}</div>
              <div><strong>Retrait :</strong> {siteConfig.contact.pickupAddress || "à compléter"}</div>
            </div>

            <div className="hr" style={{ margin: "18px 0" }} />

            <div className="small">
              <strong>Pour aller vite :</strong>
              <ul style={{ margin: "8px 0 0", paddingLeft: 16, lineHeight: 1.8 }}>
                <li>Date + horaires</li>
                <li>Lieu (ville)</li>
                <li>Formule (digitale ou impressions)</li>
                <li>Livraison oui/non</li>
                <li>Option template oui/non</li>
              </ul>
            </div>
          </div>

          <div className="card" style={{ padding: 22 }}>
            <h2 className="h2">Demande de devis</h2>
            <p className="p" style={{ marginTop: 10 }}>
              (Option rapide) Tu peux mettre un formulaire plus tard. Pour l’instant, on garde simple.
            </p>

            <div className="kpi" style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 850 }}>Astuce</div>
              <div className="small" style={{ marginTop: 6 }}>
                Ajoute ici un bouton “Envoyer un email” (mailto:) quand tu auras ton email pro.
              </div>
            </div>

            <div className="small" style={{ marginTop: 14 }}>
              Email : <span style={{ opacity: .7 }}>{siteConfig.contact.email || "à compléter"}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
