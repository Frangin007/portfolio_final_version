import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const filters = ['Tout', 'Frontend', 'Backend', 'Data & IA', 'Mobile'];

const items = [
  { title: 'Plateforme E-commerce',    category: 'Frontend',  img: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800',  desc: 'E-commerce complet avec gestion de stock en temps réel, panier et intégration de paiement.' },
  { title: 'Dashboard Analytics',      category: 'Data & IA', img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',     desc: 'Tableau de bord live avec insights ML, graphiques personnalisés et rapports automatisés.' },
  { title: 'App Banque Mobile',         category: 'Mobile',    img: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',   desc: 'Application bancaire cross-platform avec auth biométrique, alertes push et mode hors-ligne.' },
  { title: 'API Gateway System',        category: 'Backend',   img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',     desc: 'Gateway API haute performance avec rate limiting, logs et routage microservices.' },
  { title: 'Plateforme Sociale',        category: 'Frontend',  img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',   desc: 'Communauté avec fils d\'actualité, notifications temps réel et éditeur de contenu riche.' },
  { title: 'Analyse Prédictive',        category: 'Data & IA', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',     desc: 'Pipeline Sklearn & TensorFlow pour prévisions de ventes avec rapports Power BI interactifs.' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tout');

  const visible = filter === 'Tout' ? items : items.filter(i => i.category === filter);

  return (
    <section id="portfolio" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '500px', height: '500px', bottom: '-80px', right: '-80px', background: 'rgba(192,132,252,0.06)' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '28px', marginBottom: 'clamp(44px, 6vw, 80px)' }}>
          <div>
            <div className="eyebrow">Portfolio</div>
            <h2 className="section-title">
              Ce que j'ai<br />
              <span className="g-text">livré</span>
            </h2>
          </div>
          <p className="section-sub" style={{ maxWidth: '420px' }}>
            Une sélection de projets sur toute la stack — des interfaces soignées aux pipelines de données.
          </p>
        </div>

        {/* filters */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: 'clamp(36px, 5vw, 60px)' }}>
          {filters.map(f => (
            <button key={f} className={`fpill${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        {/* grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {visible.map((item) => (
            <div key={item.title} className="g-card gallery-card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
              {/* image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '230px' }}>
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="gallery-img" style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,13,20,0.88) 0%, transparent 55%)' }} />
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  padding: '6px 15px', borderRadius: '99px',
                  background: 'rgba(10,13,20,0.78)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700,
                  letterSpacing: '0.08em', color: '#7dd3fc',
                }}>{item.category}</div>
              </div>
              {/* text */}
              <div style={{ padding: 'clamp(20px, 2.5vw, 30px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 700,
                    letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2,
                  }}>{item.title}</h3>
                  <ArrowUpRight size={20} className="gallery-arrow" style={{ color: 'var(--text3)', flexShrink: 0, marginLeft: '10px', marginTop: '2px' }} />
                </div>
                <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
