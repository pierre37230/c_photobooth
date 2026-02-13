import './USP.css';

export default function USP() {
  return (
    <section className="usp-section">
      <div className="container">
        <div className="usp-grid">
          <div className="usp-card">
            <div className="usp-icon">🇫🇷</div>
            <h3>Fabriqué en France</h3>
            <p>Bois véritable, fabrication artisanale à la main</p>
          </div>

          <div className="usp-card">
            <div className="usp-icon">📸</div>
            <h3>Vrai Appareil Photo</h3>
            <p>Qualité professionnelle, pas de webcam</p>
          </div>

          <div className="usp-card">
            <div className="usp-icon">⚡</div>
            <h3>Installation Express</h3>
            <p>Branchez et c'est parti en 2 minutes</p>
          </div>

          <div className="usp-card">
            <div className="usp-icon">💰</div>
            <h3>Tarifs Clairs</h3>
            <p>Pas de frais cachés ni de surprises</p>
          </div>
        </div>
      </div>
    </section>
  );
}