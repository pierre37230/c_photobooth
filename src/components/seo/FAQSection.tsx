import { FAQItem } from '@/data/seo/faqs';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Questions fréquentes" }: FAQSectionProps) {
  return (
    <section style={{ margin: '3rem 0' }}>
      <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
      <div style={{ maxWidth: '900px' }}>
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            style={{ 
              borderBottom: '1px solid var(--border)', 
              padding: '1.5rem 0' 
            }}
          >
            <summary style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              listStyle: 'none'
            }}>
              <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', margin: 0 }}>
                {faq.question}
              </h3>
              <span style={{ fontSize: '1.5rem', color: 'var(--accent)', flexShrink: 0, marginLeft: '1rem' }}>+</span>
            </summary>
            <div style={{ paddingTop: '1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}