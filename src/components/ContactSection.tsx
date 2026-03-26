'use client';

import { siteData } from '@/data/siteData';
import { trackEvent } from '@/lib/analytics';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-title">
          <h2>Contactez-nous</h2>
          <p>Parlons de votre événement</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <a
                href={`mailto:${siteData.contact.email}`}
                onClick={() => trackEvent('click_mail')}
              >
                {siteData.contact.email}
              </a>
            </div>

            <div className="contact-item">
              <h3>📞 Téléphone</h3>
              <a
                href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`}
                onClick={() => trackEvent('click_tel')}
              >
                {siteData.contact.phone}
              </a>
            </div>

            <div className="contact-item">
              <h3>📍 Zone d'intervention</h3>
              <p>{siteData.contact.address}</p>
            </div>
          </div>

          <div className="contact-cta">
            <p className="contact-message">
              Vous souhaitez réserver un photobooth pour votre mariage, anniversaire ou événement d'entreprise ? Contactez-nous par email ou téléphone pour un devis personnalisé gratuit.
            </p>
            <p className="contact-hours">
              <strong>Disponible 7j/7</strong> pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
