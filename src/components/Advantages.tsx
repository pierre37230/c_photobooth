import { siteData } from '@/data/siteData';
import './Advantages.css';

export default function Advantages() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>Pourquoi choisir CPhotobooth ?</h2>
          <p>Une expérience premium pour vos événements</p>
        </div>

        <div className="grid grid-2">
          {siteData.advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}