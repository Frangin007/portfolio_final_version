import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import { sendEmail, EmailData } from '../services/emailService';

const Contact: React.FC = () => {
  const [form, setForm] = useState<EmailData>({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const r = await sendEmail(form);
    setLoading(false);
    if (r.success) {
      setSent(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '550px', height: '550px', top: '-120px', right: '-120px', background: 'rgba(56,189,248,0.06)' }} />
      <div className="orb" style={{ width: '400px', height: '400px', bottom: '-80px', left: '-80px', background: 'rgba(192,132,252,0.05)' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ marginBottom: 'clamp(52px, 7vw, 88px)' }}>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">
            Dites bonjour,<br />créons<br />
            <span className="g-text">ensemble</span>
          </h2>
          <p className="section-sub" style={{ marginTop: '20px' }}>
            Vous avez un projet, une question ou vous voulez simplement me contacter ?
            Je réponds sous 24h — souvent bien plus vite.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(36px, 5vw, 72px)', alignItems: 'start' }}>

          {/* left */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                { icon: MapPin, color: '#38bdf8', label: 'Localisation', value: 'Lyon, France', href: 'https://maps.google.com/?q=Lyon,France' },
                { icon: Phone,  color: '#34d399', label: 'Téléphone',   value: '+33 7 68 52 85 19', href: 'tel:+33768528519' },
                { icon: Mail,   color: '#c084fc', label: 'Email',       value: 'gbessemehlanfrangin@gmail.com', href: 'mailto:gbessemehlanfrangin@gmail.com' },
              ].map(({ icon: Icon, color, label, value, href }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="g-card" style={{ padding: '20px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '18px' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${color}45`; (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-border)'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', flexShrink: 0, background: `${color}12`, border: `1px solid ${color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color }}>
                      <Icon size={23} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text)' }}>{value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <InteractiveMap />
            </div>
          </div>

          {/* form */}
          <div className="g-card" style={{ borderRadius: '24px', padding: 'clamp(28px, 4vw, 52px)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '10px' }}>
              Envoyer un message
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text2)', fontWeight: 300, marginBottom: '36px' }}>
              Parlez-moi de votre projet — je vous réponds rapidement.
            </p>

            {sent && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 20px', borderRadius: '12px', marginBottom: '28px', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.28)', color: '#34d399' }}>
                <CheckCircle size={22} />
                <span style={{ fontWeight: 500, fontSize: '1rem' }}>Message envoyé ! Je vous réponds bientôt.</span>
              </div>
            )}

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '10px' }}>Nom complet *</label>
                  <input name="name" value={form.name} onChange={onChange} required placeholder="Votre nom" className="f-input" />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '10px' }}>Téléphone</label>
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="+33 …" className="f-input" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '10px' }}>Email *</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="vous@exemple.com" className="f-input" />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text3)', textTransform: 'uppercase' as const, marginBottom: '10px' }}>Message *</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5}
                  placeholder="Parlez-moi de votre projet, vos délais, votre stack…"
                  className="f-input" style={{ resize: 'none' }} />
              </div>
              <button type="submit" disabled={loading} className="btn-p" style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '18px', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading
                  ? <><div style={{ width: '20px', height: '20px', border: '2px solid rgba(4,7,16,0.3)', borderTopColor: '#040710', borderRadius: '50%', animation: 'spin 0.9s linear infinite' }} /> Envoi en cours…</>
                  : <><Send size={19} /> Envoyer le message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
};

export default Contact;