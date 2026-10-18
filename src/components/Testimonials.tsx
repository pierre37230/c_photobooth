'use client';
import { useState } from 'react';
import Script from 'next/script';
import './Testimonials.css';

const googleReviews = 'https://g.page/r/CZ9pbYIKAKWbEAE/review';
export default function Testimonials() {
  const [displayReviews, setDisplayReviews] = useState(false);
  return (
    <section className="section section-light" aria-labelledby="google-reviews-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="google-reviews-heading">Découvrez les retours de nos clients</h2>
          <p>Les avis sont consultables sur la fiche Google de CPhotobooth. Nous n’affichons ici aucune note ou citation que nous n’avons pas vérifiée.</p>
        </div>
        <div className="actions" style={{justifyContent:'center'}}>
          {!displayReviews && <button type="button" className="btn btn-secondary" onClick={() => setDisplayReviews(true)}>Afficher les avis ici</button>}
          <a href={googleReviews} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Voir la fiche Google ↗</a>
        </div>
        {!displayReviews && <p className="center-note">L’affichage intégré utilise un service tiers (SociableKIT) qui ne sera chargé qu’à votre demande.</p>}
        {displayReviews && <div className="google-reviews-widget" aria-label="Avis Google via SociableKIT">
          <div className="sk-ww-google-reviews" data-embed-id="25722904" />
          <Script id="sociablekit-google-reviews" src="https://widgets.sociablekit.com/google-reviews/widget.js" strategy="afterInteractive" />
          <p className="center-note">Si les avis ne s’affichent pas, utilisez le lien vers notre fiche Google ci-dessus.</p>
        </div>}
      </div>
    </section>
  );
}
