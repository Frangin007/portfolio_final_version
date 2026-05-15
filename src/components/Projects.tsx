import React, { useState } from 'react';
import { Building2, Calendar, ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Beep-me', company: 'Switchers Solves', year: '2021', color: '#38bdf8',
    img: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
    desc: 'Application de communication révolutionnaire avec appels internationaux abordables, numéros virtuels illimités et technologie brevetée. Développée avec Flutter & Node.js.',
    tech: ['Flutter', 'Node.js', 'WebRTC', 'MongoDB'],
  },
  {
    title: 'Takafa Mindset', company: 'Takafa Mindset', year: '2022', color: '#c084fc',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    desc: 'Plateforme e-learning pour développer les soft skills des professionnels. Éditeur de contenu riche, streaming vidéo et suivi de progression — React + PostgreSQL.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Open Source', company: 'Personnel', year: '2023', color: '#34d399',
    img: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg',
    desc: 'Contributions à des apps web, outils CLI et scripts d\'automatisation. Développement en public, apprentissage communautaire et livraison de choses utiles.',
    tech: ['Python', 'JavaScript', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'IoT Data Platform', company: 'OnlySun', year: '2024', color: '#fbbf24',
    img: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    desc: 'Pipeline de données temps réel entre capteurs électroniques et plateforme centrale. Microservices Django, architecture Docker, déployé via GitLab CI/CD.',
    tech: ['Django', 'IoT', 'Docker', 'GitLab CI/CD'],
  },
  {
    title: 'Système Sécurisé', company: 'Atos', year: '2025', color: '#818cf8',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    desc: 'Applications web sécurisées pour environnements industriels — contrôle d\'accès par rôle, journalisation des audits et durcissement sécurité avec React & Spring Boot.',
    tech: ['React.js', 'Spring Boot', 'Docker', 'GitLab CI/CD'],
  },
];

const Projects: React.FC = () => {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="projects" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '550px', height: '550px', top: '-100px', left: '-120px', background: 'rgba(129,140,248,0.06)' }} />
      <div className="orb" style={{ width: '450px', height: '450px', bottom: '-80px', right: '-80px', background: 'rgba(56,189,248,0.05)' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ marginBottom: 'clamp(52px, 7vw, 96px)' }}>
          <div className="eyebrow">Expérience</div>
          <h2 className="section-title">
            Du vrai travail,<br />
            <span className="g-text">un vrai impact</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Des startups aux grandes entreprises — projets où j'ai été propriétaire de la tech et investi dans le résultat.
          </p>
        </div>

        {/* list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((p, i) => (
            <div key={i} className="g-card" style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(180px, 22vw, 300px) 1fr',
              overflow: 'hidden', cursor: 'pointer',
              borderColor: hov === i ? `${p.color}45` : 'var(--card-border)',
              transform: hov === i ? 'translateY(-4px)' : 'none',
              boxShadow: hov === i ? `0 24px 60px rgba(0,0,0,0.4), 0 0 32px ${p.color}14` : 'none',
              transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}>

              {/* image */}
              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '220px' }}>
                <img src={p.img} alt={p.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  position: 'absolute', inset: 0,
                  transition: 'transform 0.5s ease',
                  transform: hov === i ? 'scale(1.07)' : 'scale(1)',
                  filter: 'brightness(0.6)',
                }} />
                <div style={{
                  position: 'absolute', bottom: '16px', left: '16px',
                  fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800,
                  color: 'rgba(255,255,255,0.18)', letterSpacing: '-0.05em', lineHeight: 1,
                }}>{p.year}</div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: p.color }} />
              </div>

              {/* content */}
              <div style={{ padding: 'clamp(24px, 3vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <Building2 size={15} style={{ color: p.color }} />
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em', color: p.color }}>{p.company}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={13} style={{ color: 'var(--text3)' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text3)' }}>{p.year}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 800,
                      letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.1,
                    }}>{p.title}</h3>
                    <ArrowUpRight size={22} style={{ color: hov === i ? p.color : 'var(--text3)', transition: 'color 0.25s', flexShrink: 0, marginLeft: '14px' }} />
                  </div>

                  <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, marginBottom: '24px' }}>
                    {p.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tech.map((t, j) => (
                      <span key={j} style={{
                        padding: '5px 13px', borderRadius: '99px', fontSize: '0.88rem', fontWeight: 500,
                        background: `${p.color}10`, border: `1px solid ${p.color}28`, color: p.color,
                      }}>{t}</span>
                    ))}
                  </div>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '10px 22px', borderRadius: '10px',
                    fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700,
                    background: `${p.color}12`, border: `1px solid ${p.color}28`,
                    color: p.color, cursor: 'pointer', transition: 'all 0.22s ease', flexShrink: 0,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}22`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = `${p.color}12`; }}>
                    <ExternalLink size={15} /> Détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
