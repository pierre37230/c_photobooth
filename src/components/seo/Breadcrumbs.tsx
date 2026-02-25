import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'ariane" className="breadcrumbs" style={{ margin: '1rem 0' }}>
      <ol 
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          listStyle: 'none', 
          padding: 0,
          fontSize: '0.9rem',
          color: 'var(--text-light)'
        }}
      >
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>
            <span itemProp="name">Accueil</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li
            key={item.url}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span style={{ margin: '0 0.5rem', color: 'var(--text-light)' }}> › </span>
            {index === items.length - 1 ? (
              <span itemProp="name" style={{ color: 'var(--primary)' }}>{item.name}</span>
            ) : (
              <Link href={item.url} itemProp="item" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>
                <span itemProp="name">{item.name}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}