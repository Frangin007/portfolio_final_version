import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#1a1d2e', overflow: 'hidden' }}>
      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* glow orbs */}
      <div style={{ position: 'absolute', top: '-200px', left: '-200px', zIndex: 0, width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '-180px', right: '-180px', zIndex: 0, width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div style={{ width: '100%', padding: 'clamp(120px,14vw,160px) clamp(20px,6vw,80px) clamp(80px,8vw,100px)', position: 'relative', zIndex: 2 }}>

        {/* badge disponible */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '99px', border: '1px solid rgba(56,189,248,0.28)', background: 'rgba(56,189,248,0.07)', marginBottom: '32px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 10px #38bdf8', display: 'inline-block', animation: 'heroPulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.72rem,1.2vw,0.88rem)', fontWeight: 600, letterSpacing: '0.1em', color: '#7dd3fc', textTransform: 'uppercase' as const }}>Disponible · Lyon, France</span>
        </div>

        {/* headline — clamp agressif pour ne jamais déborder */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 7vw, 8.5rem)',
          fontWeight: 800, lineHeight: 0.97,
          letterSpacing: '-0.04em', color: '#f0f6ff',
          marginBottom: '24px',
          wordBreak: 'break-word' as const,
          overflowWrap: 'break-word' as const,
        }}>
          Je construis<br />
          <span style={{ background: 'linear-gradient(110deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradientMove 5s linear infinite' }}>
            ce qui compte
          </span>
        </h1>

        {/* sous-titre */}
        <p style={{ fontSize: 'clamp(1rem,1.8vw,1.45rem)', fontWeight: 300, lineHeight: 1.7, color: 'rgba(240,246,255,0.6)', maxWidth: '620px', marginBottom: '44px' }}>
          Développeur Full Stack &amp; Data Analyst. Je construis des produits web, mobile
          et data performants — de la première ligne de code à la mise en production.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: 'clamp(56px,8vw,90px)' }}>
          <button onClick={() => goto('contact')} style={{ padding: 'clamp(13px,2vw,16px) clamp(24px,3vw,40px)', background: '#38bdf8', color: '#040710', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '9px', whiteSpace: 'nowrap' as const }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 44px rgba(56,189,248,0.38)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            <Mail size={18} /> Me contacter
          </button>
          <button onClick={() => goto('portfolio')} style={{ padding: 'clamp(12px,2vw,15px) clamp(24px,3vw,40px)', background: 'transparent', color: 'rgba(240,246,255,0.75)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.25s ease', whiteSpace: 'nowrap' as const }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.45)'; (e.currentTarget as HTMLElement).style.color = '#f0f6ff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.75)'; }}>
            Voir mes projets
          </button>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { icon: Github,   href: 'https://github.com/Frangin007', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/frangin-gbessemehlan-473361254/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ width: '48px', height: '48px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(240,246,255,0.5)', textDecoration: 'none', transition: 'all 0.25s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.45)'; (e.currentTarget as HTMLElement).style.color = '#38bdf8'; (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.5)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* stats */}
        <div style={{ display: 'flex', gap: 'clamp(24px,5vw,64px)', alignItems: 'center', flexWrap: 'wrap', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {[{ n: '5+', label: 'ans d\'expérience' }, { n: '50+', label: 'projets livrés' }, { n: 'M2', label: 'Gestion Projet IT' }].map(({ n, label }, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#f0f6ff' }}>{n}</div>
              <div style={{ fontSize: 'clamp(0.82rem,1.3vw,0.95rem)', color: 'rgba(240,246,255,0.4)', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => goto('about')} style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'rgba(240,246,255,0.28)', transition: 'color 0.2s', animation: 'heroFloat 2.5s ease-in-out infinite' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#38bdf8'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(240,246,255,0.28)'}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', letterSpacing: '0.15em', fontWeight: 700 }}>SCROLL</span>
        <ArrowDown size={15} />
      </button>

      <style>{`
        @keyframes heroPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes heroFloat{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
      `}</style>
    </section>
  );
};

export default Hero;
