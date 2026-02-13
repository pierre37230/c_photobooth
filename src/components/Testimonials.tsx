import { siteData } from '@/data/siteData';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-title">
          <h2>Avis Clients</h2>
          <p>Ce que nos clients disent de nous</p>
        </div>

        <div className="grid grid-3">
          {siteData.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}