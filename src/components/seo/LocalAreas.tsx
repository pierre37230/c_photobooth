import Link from 'next/link';
import { cities, City } from '@/data/seo/cities';

interface LocalAreasProps {
  currentCity?: string;
  limit?: number;
}

export default function LocalAreas({ currentCity, limit = 12 }: LocalAreasProps) {
  let displayCities: City[] = cities;
  
  // Si on est sur une page ville, exclure la ville actuelle
  if (currentCity) {
    displayCities = cities.filter(c => c.slug !== currentCity);
  }
  
  // Limiter le nombre
  displayCities = displayCities.slice(0, limit);
  
  return (
    <section className="local-areas">
      <h2>Nous intervenons également dans ces villes</h2>
      <div className="cities-grid">
        {displayCities.map(city => (
          <Link 
            key={city.slug} 
            href={`/photobooth-${city.slug}`}
            className="city-card"
          >
            <h3>{city.name}</h3>
            <p>{city.population.toLocaleString()} habitants</p>
            <p className="distance">À {city.distanceFromTours}km de Tours</p>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .local-areas {
          padding: 3rem 0;
          background: var(--background-light);
          border-radius: 12px;
          margin: 3rem 0;
        }
        .local-areas h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 0 2rem;
        }
        .city-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .city-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-color: var(--accent);
        }
        .city-card h3 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        .city-card p {
          margin: 0.25rem 0;
          color: var(--text-light);
          font-size: 0.9rem;
        }
        .distance {
          color: var(--accent);
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}