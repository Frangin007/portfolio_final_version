import React, { useEffect, useRef, useState } from 'react';
import myImage from '../../assets/profil.jpg';

const skills = [
  { label: 'Frontend Development',  pct: 90, color: '#38bdf8' },
  { label: 'Backend Development',   pct: 85, color: '#818cf8' },
  { label: 'Data Analysis & AI',    pct: 80, color: '#c084fc' },
  { label: 'Mobile Development',    pct: 75, color: '#34d399' },
];

const tools = ['React', 'Vue.js', 'Spring Boot', 'Flutter', 'Django', 'Node.js', 'Docker', 'Power BI', 'Python', 'PostgreSQL', 'MongoDB', 'GitLab CI/CD'];

const About: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '600px', height: '600px', top: '-100px', right: '-150px', background: 'rgba(56,189,248,0.06)' }} />
      <div className="orb" style={{ width: '400px', height: '400px', bottom: '-80px', left: '-80px', background: 'rgba(192,132,252,0.05)' }} />

      <div className="section-wrap" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 'clamp(48px, 6vw, 100px)',
        alignItems: 'start',
      }}>

        {/* ── image ── */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '24px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.55)',
            animation: 'floatY 6s ease-in-out infinite',
            maxWidth: '480px',
          }}>
            <img src={myImage} alt="Frangin GBESSEMEHLAN" loading="lazy" decoding="async"
              style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4/5' }} />
          </div>
          {/* exp badge */}
          <div style={{
            position: 'absolute', bottom: '32px', left: '-20px',
            background: 'rgba(13,17,28,0.95)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(56,189,248,0.28)', borderRadius: '18px',
            padding: '18px 26px', boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1 }}>5+</div>
            <div style={{ fontSize: '1rem', color: 'var(--text2)', marginTop: '6px' }}>ans<br />d'expérience</div>
          </div>
          {/* M2 badge */}
          <div style={{
            position: 'absolute', top: '24px', right: '-16px',
            background: 'rgba(13,17,28,0.95)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(192,132,252,0.28)', borderRadius: '16px',
            padding: '14px 20px', boxShadow: '0 12px 36px rgba(0,0,0,0.35)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', color: '#c084fc' }}>MASTER 2</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text2)', marginTop: '4px' }}>Gestion Projet IT</div>
          </div>
        </div>

        {/* ── content ── */}
        <div>
          <div className="eyebrow">À propos</div>

          <h2 className="section-title" style={{ marginBottom: '28px' }}>
            Je construis des logiciels<br />
            <span className="g-text">que les gens adorent</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
            <p style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', lineHeight: 1.8, color: 'var(--text2)', fontWeight: 300 }}>
              Je suis développeur full stack en Master 2 Gestion de Projet IT à l'
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>École Privée de l'Informatique de Lyon</strong>.
              J'ai commencé à coder par passion et je n'ai jamais arrêté.
            </p>
            <p style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', lineHeight: 1.8, color: 'var(--text2)', fontWeight: 300 }}>
              Ma zone de confort ? L'intersection entre des
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}> interfaces élégantes</strong>,
              des backends solides et
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}> l'intelligence des données</strong>.
              Je tiens à la qualité du code, pas seulement à livrer des fonctionnalités.
            </p>
          </div>

          {/* skill bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            {skills.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)' }}>
                    {s.label}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: s.color }}>{s.pct}%</span>
                </div>
                <div className="sbar-track">
                  <div className="sbar-fill" style={{
                    width: animated ? `${s.pct}%` : '0%',
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}88)`,
                    transitionDelay: `${i * 0.13}s`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* tech cloud */}
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700,
              letterSpacing: '0.12em', color: 'var(--text3)', textTransform: 'uppercase' as const,
              marginBottom: '16px',
            }}>Outils & technologies</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {tools.map((t, i) => <span key={i} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
