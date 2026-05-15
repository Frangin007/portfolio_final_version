import React from 'react';
import { Rocket, CheckCircle } from 'lucide-react';

const perks = [
  'Code propre et maintenable, toujours',
  'Async-friendly, réponses rapides',
  'Fort sens du design & UX',
  'Tarification transparente, sans surprise',
  'Disponible temps plein ou freelance',
  'Bilingue français & anglais',
];

const HireMe: React.FC = () => {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56,189,248,0.07) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.025, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      <div className="section-wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '9px 22px', borderRadius: '99px',
          border: '1px solid rgba(52,211,153,0.32)', background: 'rgba(52,211,153,0.08)',
          marginBottom: '36px',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 10px #34d399', display: 'inline-block', animation: 'pulseRing 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', color: '#6ee7b7', textTransform: 'uppercase' as const }}>
            Ouvert aux opportunités
          </span>
        </div>

        <h2 className="section-title" style={{ marginBottom: '20px' }}>
          Construisons quelque chose<br />
          <span className="g-text">dont vous serez fier</span>
        </h2>

        <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', fontWeight: 300, lineHeight: 1.75, color: 'var(--text2)', maxWidth: '600px', marginBottom: '60px' }}>
          Disponible pour des postes à temps plein et des projets freelance.
          Vous avez une idée, un problème à résoudre ou une équipe qui a besoin d'un développeur solide ? Parlons-en.
        </p>

        {/* perks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', width: '100%', maxWidth: '800px', marginBottom: '60px' }}>
          {perks.map((perk, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px 20px', borderRadius: '14px',
              background: 'var(--card)', border: '1px solid var(--card-border)', textAlign: 'left',
            }}>
              <CheckCircle size={20} style={{ color: '#34d399', flexShrink: 0 }} />
              <span style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)', color: 'var(--text2)', fontWeight: 400 }}>{perk}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-p" onClick={() => goto('contact')} style={{ fontSize: '1.1rem', padding: '18px 48px' }}>
            <Rocket size={21} /> Démarrer une conversation
          </button>
          <a href="https://www.linkedin.com/in/frangin-gbessemehlan-473361254/"
            target="_blank" rel="noopener noreferrer"
            className="btn-o"
            style={{ fontSize: '1.1rem', padding: '17px 48px', textDecoration: 'none' }}>
            Voir LinkedIn →
          </a>
        </div>

        {/* stats */}
        <div style={{
          display: 'flex', gap: 'clamp(32px, 5vw, 80px)', flexWrap: 'wrap', justifyContent: 'center',
          marginTop: '80px', paddingTop: '56px', borderTop: '1px solid rgba(255,255,255,0.07)', width: '100%',
        }}>
          {[
            { n: '50+', label: 'Projets livrés' },
            { n: '5+',  label: 'Années d\'expérience' },
            { n: '20+', label: 'Clients satisfaits' },
            { n: '2',   label: 'Langues parlées' },
          ].map(({ n, label }, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--text)' }}>{n}</span>
              <span style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', color: 'var(--text3)', fontWeight: 300 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireMe;
