import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled || open ? 'rgba(15,17,23,0.95)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ width: '100%', padding: '0 clamp(20px, 6vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <button onClick={() => goto('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px', color: '#040710', flexShrink: 0 }}>F</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>Frangin</span>
            </button>

            {/* Desktop links */}
            <div className="nav-desktop" style={{ gap: '4px', alignItems: 'center' }}>
              {navItems.map(item => (
                <button key={item.id} onClick={() => goto(item.id)} style={{ padding: '9px 16px', borderRadius: '10px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: active === item.id ? 700 : 500, background: active === item.id ? 'rgba(56,189,248,0.1)' : 'transparent', color: active === item.id ? '#38bdf8' : 'var(--text2)', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { if (active !== item.id) (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (active !== item.id) (e.currentTarget as HTMLElement).style.color = 'var(--text2)'; }}>
                  {item.label}
                </button>
              ))}
              <button onClick={() => goto('contact')} style={{ marginLeft: '10px', padding: '10px 22px', borderRadius: '10px', fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, background: '#38bdf8', color: '#040710', border: 'none', cursor: 'pointer', transition: 'all 0.25s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(56,189,248,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
                Hire me →
              </button>
            </div>

            {/* Burger */}
            <button className="nav-burger" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '8px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div style={{
          overflow: 'hidden',
          maxHeight: open ? '600px' : '0',
          transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
          borderTop: open ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}>
          <div style={{ padding: '12px clamp(20px, 6vw, 80px) 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => goto(item.id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '14px 16px', borderRadius: '12px', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: active === item.id ? 700 : 500, background: active === item.id ? 'rgba(56,189,248,0.1)' : 'transparent', color: active === item.id ? '#38bdf8' : 'var(--text2)', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => goto('contact')} style={{ marginTop: '8px', padding: '15px 16px', borderRadius: '12px', fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, background: '#38bdf8', color: '#040710', border: 'none', cursor: 'pointer', width: '100%' }}>
              Hire me →
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
