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
    <section style={{ 
      background: 'var(--background-light)', 
      padding: '3rem 2rem', 
      borderRadius: '12px', 
      margin: '3rem 0' 
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{title}</h2>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {links.map(link => (
          <Link 
            key={link.href} 
            href={link.href}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'var(--primary)',
              transition: 'all 0.3s ease'
            }}
            className="internal-link-hover"
          >
            <span>{link.text}</span>
            <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}