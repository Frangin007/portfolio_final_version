import React, { useState } from 'react';
import { Code2, Smartphone, BrainCircuit, Server } from 'lucide-react';

const services = [
  {
    icon: Code2, color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)',
    title: 'Développement Web',
    headline: 'Rapide, beau, accessible.',
    description: 'Je développe des applications web qui sont agréables à utiliser. Des SPAs complexes aux plateformes server-side — avec React, Vue.js, Spring Boot et PHP.',
    tags: ['React', 'Vue.js', 'Spring Boot', 'PHP', 'TypeScript'],
  },
  {
    icon: Smartphone, color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)',
    title: 'Développement Mobile',
    headline: 'Un seul code. Tous les appareils.',
    description: 'Des apps cross-platform qui se sentent vraiment natives. Développées avec Flutter et Spring Boot, conçues pour la performance et une expérience utilisateur soignée.',
    tags: ['Flutter', 'Spring Boot', 'Android', 'iOS', 'Dart'],
  },
  {
    icon: BrainCircuit, color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.2)',
    title: 'Data & IA',
    headline: 'Transformer la donnée en décisions.',
    description: 'Du modèle prédictif au tableau de bord interactif. Je travaille sur tout le pipeline de données — collecte, analyse, visualisation et déploiement ML.',
    tags: ['Python', 'Power BI', 'Sklearn', 'OpenCV', 'TensorFlow'],
  },
  {
    icon: Server, color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)',
    title: 'Backend & DevOps',
    headline: 'Bases solides. Déploiements fluides.',
    description: 'Backends scalables et pipelines CI/CD robustes. Microservices, conteneurs Docker et déploiements automatisés pour que votre produit soit livré sereinement.',
    tags: ['Node.js', 'Django', 'Docker', 'GitLab CI/CD', 'PostgreSQL'],
  },
];

const Services: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '700px', height: '700px', top: '-200px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(56,189,248,0.05)' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(52px, 7vw, 96px)' }}>
          <div className="eyebrow">Ce que je fais</div>
          <h2 className="section-title">
            Toute la stack,<br />
            <span className="g-text">de A à Z</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Je travaille de bout en bout. Que ce soit votre premier MVP ou un système d'entreprise complexe,
            j'ai la profondeur technique pour le réaliser correctement.
          </p>
        </div>

        {/* grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHov = hovered === i;
            return (
              <div key={i} className="g-card" style={{
                padding: 'clamp(30px, 3.5vw, 44px)',
                position: 'relative', overflow: 'hidden', cursor: 'default',
                borderColor: isHov ? s.border : 'var(--card-border)',
                transform: isHov ? 'translateY(-6px)' : 'none',
                boxShadow: isHov ? `0 28px 64px rgba(0,0,0,0.45), 0 0 40px ${s.color}18` : 'none',
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>
                <div style={{
                  width: '62px', height: '62px', borderRadius: '16px',
                  background: s.bg, border: `1px solid ${s.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px', color: s.color,
                  transform: isHov ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.3s ease',
                }}>
                  <Icon size={28} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.45rem)', fontWeight: 800,
                  letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '8px',
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem', fontWeight: 500,
                  color: s.color, marginBottom: '16px', fontStyle: 'italic',
                }}>{s.headline}</p>

                <p style={{
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)', lineHeight: 1.75,
                  color: 'var(--text2)', marginBottom: '28px', fontWeight: 300,
                }}>{s.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.tags.map((t, j) => (
                    <span key={j} style={{
                      padding: '5px 13px', borderRadius: '99px',
                      fontSize: '0.85rem', fontWeight: 500,
                      background: s.bg, border: `1px solid ${s.border}`,
                      color: s.color,
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '110px', height: '110px',
                  background: `radial-gradient(circle at 100% 0%, ${s.color}18 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
