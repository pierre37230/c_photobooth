import { FAQItem } from '@/data/seo/faqs';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Questions fréquentes" }: FAQSectionProps) {
  return (
    <section className="faq-section">
      <h2>{title}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>
              <h3>{faq.question}</h3>
              <span className="icon">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
      <style jsx>{`
        .faq-section {
          margin: 3rem 0;
        }
        .faq-section h2 {
          margin-bottom: 2rem;
        }
        .faq-list {
          max-width: 900px;
        }
        .faq-item {
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 0;
        }
        .faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          list-style: none;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item h3 {
          font-size: 1.125rem;
          color: var(--primary);
          margin: 0;
        }
        .faq-item .icon {
          font-size: 1.5rem;
          color: var(--accent);
          transition: transform 0.3s ease;
        }
        .faq-item[open] .icon {
          transform: rotate(45deg);
        }
        .faq-answer {
          padding-top: 1rem;
          color: var(--text-light);
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
}