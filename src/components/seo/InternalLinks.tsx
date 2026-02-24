import Link from 'next/link';

interface InternalLink {
  href: string;
  text: string;
}

interface InternalLinksProps {
  title: string;
  links: InternalLink[];
}

export default function InternalLinks({ title, links }: InternalLinksProps) {
  return (
    <section className="internal-links">
      <h2>{title}</h2>
      <div className="links-grid">
        {links.map(link => (
          <Link key={link.href} href={link.href} className="internal-link-card">
            <span>{link.text}</span>
            <span className="arrow">→</span>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .internal-links {
          background: var(--background-light);
          padding: 3rem 2rem;
          border-radius: 12px;
          margin: 3rem 0;
        }
        .internal-links h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .internal-link-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 8px;
          text-decoration: none;
          color: var(--primary);
          transition: all 0.3s ease;
        }
        .internal-link-card:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }
        .internal-link-card .arrow {
          color: var(--accent);
          font-size: 1.25rem;
          transition: transform 0.3s ease;
        }
        .internal-link-card:hover .arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}