import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: '#0a0d14', overflow: 'hidden',
    }}>
      {/* grain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.035, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />
      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
      {/* glow orbs */}
      <div style={{ position: 'absolute', top: '-200px', left: '-200px', zIndex: 0,
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)', filter: 'blur(40px)',
      }} />
      <div style={{ position: 'absolute', bottom: '-180px', right: '-180px', zIndex: 0,
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(40px)',
      }} />

      <div style={{ width: '100%', padding: '140px 6vw 100px', position: 'relative', zIndex: 2 }}>

        {/* available badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '8px 20px', borderRadius: '99px',
          border: '1px solid rgba(56,189,248,0.28)', background: 'rgba(56,189,248,0.07)',
          marginBottom: '36px',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8',
            boxShadow: '0 0 10px #38bdf8', display: 'inline-block',
            animation: 'heroPulse 2s ease-in-out infinite',
          }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600,
            letterSpacing: '0.1em', color: '#7dd3fc', textTransform: 'uppercase' as const,
          }}>Disponible · Lyon, France</span>
        </div>

        {/* main headline */}
        <h1 style={{ fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 9vw, 9rem)',
          fontWeight: 800, lineHeight: 0.95,
          letterSpacing: '-0.04em', color: '#f0f6ff',
          marginBottom: '28px',
        }}>
          Frangin<br />
          <span style={{
            background: 'linear-gradient(110deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'gradientMove 5s linear infinite',
          }}>construit</span><br />
          <span style={{ color: 'rgba(240,246,255,0.35)', fontWeight: 300, fontStyle: 'italic' }}>ce qui compte</span>
        </h1>

        {/* sub */}
        <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 300, lineHeight: 1.65,
          color: 'rgba(240,246,255,0.6)', maxWidth: '680px', marginBottom: '48px',
        }}>
          Développeur Full Stack & Data Analyst. Je construis des produits web, mobile
          et data performants — de la première ligne de code à la mise en production.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '80px' }}>
          <button onClick={() => goto('contact')} style={{
            padding: '18px 44px', background: '#38bdf8', color: '#040710',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
            border: 'none', borderRadius: '12px', cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 44px rgba(56,189,248,0.38)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            <Mail size={20} /> Me contacter
          </button>

          <button onClick={() => goto('portfolio')} style={{
            padding: '17px 44px', background: 'transparent', color: 'rgba(240,246,255,0.75)',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem',
            border: '1px solid rgba(255,255,255,0.14)', borderRadius: '12px',
            cursor: 'pointer', transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.45)'; (e.currentTarget as HTMLElement).style.color = '#f0f6ff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.75)'; }}>
            Voir mes projets
          </button>

          {/* socials */}
          <div style={{ display: 'flex', gap: '12px', marginLeft: '8px' }}>
            {[
              { icon: Github, href: 'https://github.com/Frangin007', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/frangin-gbessemehlan-473361254/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                width: '52px', height: '52px', borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(240,246,255,0.5)', textDecoration: 'none', transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.45)'; (e.currentTarget as HTMLElement).style.color = '#38bdf8'; (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.5)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                <Icon size={21} />
              </a>
            ))}
          </div>
        </div>

        {/* stats */}
        <div style={{ display: 'flex', gap: 'clamp(28px,5vw,72px)', alignItems: 'center', flexWrap: 'wrap',
          paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {[
            { n: '5+',  label: 'années d\'expérience' },
            { n: '50+', label: 'projets livrés' },
            { n: 'M2',  label: 'Gestion de Projet IT' },
          ].map(({ n, label }, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)',
                fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#f0f6ff',
              }}>{n}</div>
              <div style={{ fontSize: '1rem', color: 'rgba(240,246,255,0.42)', marginTop: '5px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <button onClick={() => goto('about')} style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        background: 'none', border: 'none', cursor: 'pointer', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px',
        color: 'rgba(240,246,255,0.28)', transition: 'color 0.2s ease',
        animation: 'heroFloat 2.5s ease-in-out infinite',
      }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#38bdf8'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.28)'}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', letterSpacing: '0.15em', fontWeight: 700 }}>SCROLL</span>
        <ArrowDown size={16} />
      </button>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes heroFloat { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      `}</style>
    </section>
  );
};

export default Hero;
