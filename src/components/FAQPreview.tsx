'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import './FAQPreview.css';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const previewFAQ = siteData.faq.slice(0, 4);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Questions Fréquentes</h2>
          <p>Tout ce que vous devez savoir</p>
        </div>

        <div className="faq-list">
          {previewFAQ.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/faq" className="btn btn-secondary">
            Voir toutes les questions
          </Link>
        </div>
      </div>
    </section>
  );
}