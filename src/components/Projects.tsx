import React from 'react';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

const projects = [
  { title: 'Beep-me', company: 'Switchers Solves', year: '2021', color: '#38bdf8', img: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Application de communication révolutionnaire avec appels internationaux abordables, numéros virtuels illimités et technologie brevetée. Développée avec Flutter & Node.js.', tech: ['Flutter', 'Node.js', 'WebRTC', 'MongoDB'] },
  { title: 'Takafa Mindset', company: 'Takafa Mindset', year: '2022', color: '#c084fc', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Plateforme e-learning pour développer les soft skills des professionnels. Éditeur de contenu riche, streaming vidéo et suivi de progression — React + PostgreSQL.', tech: ['React', 'Express.js', 'PostgreSQL', 'AWS'] },
  { title: 'Open Source', company: 'Personnel', year: '2023', color: '#34d399', img: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Contributions à des apps web, outils CLI et scripts d\'automatisation. Développement en public, apprentissage communautaire et livraison de choses utiles.', tech: ['Python', 'JavaScript', 'Docker', 'GitHub Actions'] },
  { title: 'IoT Data Platform', company: 'OnlySun', year: '2024', color: '#fbbf24', img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Pipeline de données temps réel entre capteurs électroniques et plateforme centrale. Microservices Django, architecture Docker, déployé via GitLab CI/CD.', tech: ['Django', 'IoT', 'Docker', 'GitLab CI/CD'] },
  { title: 'Système Sécurisé', company: 'Atos', year: '2025', color: '#818cf8', img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Applications web sécurisées pour environnements industriels — contrôle d\'accès par rôle, journalisation des audits et durcissement sécurité avec React & Spring Boot.', tech: ['React.js', 'Spring Boot', 'Docker', 'GitLab CI/CD'] },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '550px', height: '550px', top: '-100px', left: '-120px', background: 'rgba(129,140,248,0.06)' }} />
      <div className="orb" style={{ width: '450px', height: '450px', bottom: '-80px', right: '-80px', background: 'rgba(56,189,248,0.05)' }} />

      <div className="section-wrap">
        <div style={{ marginBottom: 'clamp(44px, 6vw, 80px)' }}>
          <div className="eyebrow">Expérience</div>
          <h2 className="section-title">
            Du vrai travail,<br />
            <span className="g-text">un vrai impact</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '18px' }}>
            Des startups aux grandes entreprises — projets où j'ai été propriétaire de la tech et investi dans le résultat.
          </p>
        </div>

        {/* Grille de cartes — 1 col mobile, 2 col tablette, 3 col desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '20px',
        }}>
          {projects.map((p, i) => (
            <div key={i} className="g-card gallery-card exp-card" style={{
              overflow: 'hidden', cursor: 'pointer',
              '--accent-border': `${p.color}45`,
              '--accent-glow': `${p.color}14`,
            } as React.CSSProperties}>

              {/* barre couleur en haut */}
              <div style={{ height: '4px', background: p.color }} />

              {/* image */}
              <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />
                {/* année en filigrane */}
                <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.18)', letterSpacing: '-0.05em', lineHeight: 1 }}>{p.year}</div>
                {/* badge entreprise */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 11px', borderRadius: '99px', background: 'rgba(13,17,28,0.82)', backdropFilter: 'blur(10px)', border: `1px solid ${p.color}35` }}>
                  <Building2 size={11} style={{ color: p.color }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, color: p.color }}>{p.company}</span>
                </div>
              </div>

              {/* contenu */}
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem,1.8vw,1.25rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.15 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    <Calendar size={11} style={{ color: 'var(--text3)' }} />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>{p.year}</span>
                  </div>
                </div>

                <p style={{ fontSize: 'clamp(0.88rem,1.4vw,0.98rem)', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300, marginBottom: '18px' }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ padding: '3px 10px', borderRadius: '99px', fontSize: '0.78rem', fontWeight: 500, background: `${p.color}10`, border: `1px solid ${p.color}28`, color: p.color }}>{t}</span>
                  ))}
                </div>

                <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 0', width: '100%', justifyContent: 'center', borderRadius: '10px', fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, background: `${p.color}10`, border: `1px solid ${p.color}25`, color: p.color, cursor: 'pointer', transition: 'all 0.22s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}22`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}10`; }}>
                  <ExternalLink size={14} /> Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;