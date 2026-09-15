import React, { useState, useEffect } from 'react';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { setShowTop(window.scrollY > 400); ticking = false; });
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const links = [
    { label: 'À propos', id: 'about' }, { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' }, { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ width: '100%', padding: 'clamp(56px,8vw,96px) 6vw clamp(32px,5vw,48px)' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: 'clamp(48px,7vw,80px)' }}>

          {/* brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', color: '#040710' }}>F</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>Frangin</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text2)', fontWeight: 300, maxWidth: '300px', marginBottom: '28px' }}>
              Construire des logiciels que les gens adorent — une ligne de code à la fois, depuis Lyon, France.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/frangin-gbessemehlan-473361254/', label: 'LinkedIn' },
                { icon: Github,   href: 'https://github.com/Frangin007', label: 'GitHub' },
                { icon: Mail,     href: 'mailto:gbessemehlanfrangin@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a key={i} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" style={{ width: '44px', height: '44px', borderRadius: '11px', border: '1px solid rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', textDecoration: 'none', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.45)'; (e.currentTarget as HTMLElement).style.color = '#38bdf8'; (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'; (e.currentTarget as HTMLElement).style.color = 'var(--text2)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '24px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {links.map(({ label, id }, i) => (
                <li key={i}>
                  <button onClick={() => goto(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text2)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#38bdf8'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text2)'}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '24px' }}>Me contacter</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Lyon, France', '+33 7 68 52 85 19', 'gbessemehlanfrangin@gmail.com'].map((t, i) => (
                <p key={i} style={{ fontSize: '1rem', color: 'var(--text2)', fontWeight: 300 }}>{t}</p>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div style={{ paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text3)' }}>© {new Date().getFullYear()} Frangin GBESSEMEHLAN · Tous droits réservés</p>
          <p style={{ fontSize: '0.92rem', color: 'var(--text3)' }}>Fait avec React & TypeScript 🚀</p>
        </div>
      </div>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Haut de page"
          style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 50, width: '52px', height: '52px', borderRadius: '14px', background: '#38bdf8', border: 'none', cursor: 'pointer', color: '#040710', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(56,189,248,0.38)', transition: 'all 0.25s ease' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(56,189,248,0.48)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(56,189,248,0.38)'; }}>
          <ChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
