import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'services',  label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'projects',  label: 'Projets' },
  { id: 'contact',   label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const pos = window.scrollY + 130;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= pos) { setActive(navItems[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const NAV_BG   = scrolled || open ? 'rgba(255,255,255,0.97)' : 'transparent';
  const NAV_BLUR = scrolled || open ? 'blur(20px)'              : 'none';
  const NAV_BORDER = scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.35s ease, box-shadow 0.35s ease',
      background: NAV_BG,
      backdropFilter: NAV_BLUR,
      borderBottom: NAV_BORDER,
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
    }}>
      <div style={{ width: '100%', padding: '0 clamp(18px, 6vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* ── Logo ── */}
          <button onClick={() => goto('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '10px',
              background: '#e60023',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '16px',
              color: '#fff', flexShrink: 0,
              boxShadow: '0 2px 8px rgba(230,0,35,0.35)',
            }}>F</div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '1.1rem', color: '#111111', letterSpacing: '-0.02em' }}>
              Frangin
            </span>
          </button>

          {/* ── Desktop links ── */}
          <div className="nav-desktop" style={{ gap: '2px', alignItems: 'center' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => goto(item.id)} style={{
                padding: '8px 14px', borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: active === item.id ? 700 : 500,
                background: active === item.id ? 'rgba(230,0,35,0.08)' : 'transparent',
                color: active === item.id ? '#e60023' : '#333333',
                border: 'none', cursor: 'pointer', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { if (active !== item.id) { (e.currentTarget as HTMLElement).style.color = '#111'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)'; }}}
              onMouseLeave={e => { if (active !== item.id) { (e.currentTarget as HTMLElement).style.color = '#333'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}}>
                {item.label}
              </button>
            ))}
            <button onClick={() => goto('contact')} style={{
              marginLeft: '8px', padding: '9px 20px', borderRadius: '99px',
              fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 700,
              background: '#e60023', color: '#fff',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.22s ease',
              boxShadow: '0 2px 8px rgba(230,0,35,0.28)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ad081b'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#e60023'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
              Hire me →
            </button>
          </div>

          {/* ── Burger ── */}
          <button className="nav-burger" onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#111111', padding: '8px', borderRadius: '8px',
            alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.18s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '480px' : '0',
        transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
        borderTop: open ? '1px solid rgba(0,0,0,0.07)' : 'none',
        background: '#fff',
      }}>
        <div style={{ padding: '10px 18px 20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => goto(item.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '13px 14px', borderRadius: '10px',
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              fontWeight: active === item.id ? 700 : 500,
              background: active === item.id ? 'rgba(230,0,35,0.07)' : 'transparent',
              color: active === item.id ? '#e60023' : '#333333',
              border: 'none', cursor: 'pointer', transition: 'all 0.18s ease',
            }}>
              {item.label}
            </button>
          ))}
          <button onClick={() => goto('contact')} style={{
            marginTop: '8px', padding: '14px', borderRadius: '99px',
            fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700,
            background: '#e60023', color: '#fff', border: 'none', cursor: 'pointer', width: '100%',
          }}>
            Hire me →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;