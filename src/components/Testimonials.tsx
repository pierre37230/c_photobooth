import Script from 'next/script';
import './Testimonials.css';

const googleReviews = 'https://g.page/r/CZ9pbYIKAKWbEAE/review';

export default function Testimonials() {
  return (
    <section className="section section-light" aria-labelledby="google-reviews-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="google-reviews-heading">Les avis de nos clients sur Google</h2>
          <p>Découvrez les retours de clients ayant partagé leur expérience sur Google.</p>
        </div>
        <div className="google-reviews-widget">
          <div className="sk-ww-google-reviews" data-embed-id="25722904" />
          <Script
            id="sociablekit-google-reviews"
            src="https://widgets.sociablekit.com/google-reviews/widget.js"
            strategy="afterInteractive"
          />
        </div>
        <p className="google-reviews-fallback">
          <a href={googleReviews} target="_blank" rel="noopener noreferrer">Consulter notre fiche Google et laisser un avis ↗</a>
        </p>
      </div>
    </section>
  );
}
