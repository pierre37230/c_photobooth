import Link from 'next/link';
import { cities, City } from '@/data/seo/cities';

interface LocalAreasProps {
  currentCity?: string;
  limit?: number;
}

export default function LocalAreas({ currentCity, limit = 12 }: LocalAreasProps) {
  let displayCities: City[] = cities;
  
  if (currentCity) {
    displayCities = cities.filter(c => c.slug !== currentCity);
  }
  
  displayCities = displayCities.slice(0, limit);
  
  return (
    <section style={{ padding: '3rem 0', background: 'var(--background-light)', borderRadius: '12px', margin: '3rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nous intervenons également dans ces villes</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '1.5rem',
        padding: '0 2rem'
      }}>
        {displayCities.map(city => (
          <Link 
            key={city.slug} 
            href={`/photobooth-${city.slug}`}
            style={{ 
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block'
            }}
            className="city-card-hover"
          >
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{city.name}</h3>
            <p style={{ margin: '0.25rem 0', color: 'var(--text-light)', fontSize: '0.9rem' }}>
              {city.population.toLocaleString()} habitants
            </p>
            <p style={{ margin: '0.25rem 0', color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem' }}>
              À {city.distanceFromTours}km de Tours
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}