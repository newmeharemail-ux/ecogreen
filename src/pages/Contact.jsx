import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from '../components/ui/Icons';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', suburb: '', message: '' });
  const [formRef, formVisible] = useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We\'ll be in touch within 24 hours.');
    setForm({ name: '', email: '', phone: '', suburb: '', message: '' });
  };

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Get Your Free Solar Consultation
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Fill in the form below and our team will get back to you within 24 hours with a custom proposal.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={formRef} className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--spacing-12)', alignItems: 'start' }}>
            <div className={`reveal ${formVisible ? 'reveal-visible' : ''}`}>
              <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Let's Talk Solar</h2>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                Ready to slash your energy bills with solar power? Fill out the form
                and one of our solar consultants will reach out within 24 hours.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--spacing-4)',
                marginTop: 'var(--spacing-8)',
              }}>
                {[
                  { icon: <MapPinIcon />, title: 'Location', desc: 'Serving all Melbourne & Victoria' },
                  { icon: <PhoneIcon />, title: 'Phone', desc: '1800-ECOGREEN' },
                  { icon: <MailIcon />, title: 'Email', desc: 'hello@ecogreensolar.com.au' },
                  { icon: <ClockIcon />, title: 'Hours', desc: 'Mon-Fri 7am-7pm, Sat 8am-5pm' },
                ].map((item, i) => (
                  <div key={i} className="hover-border-glow" style={{
                    background: 'var(--color-warm-light)',
                    padding: 'var(--spacing-4)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-light)',
                    transition: 'all 0.3s ease',
                  }}>
                    <div style={{ color: 'var(--color-green-700)', marginBottom: 'var(--spacing-2)' }}>
                      {item.icon}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{item.title}</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-xs)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 'var(--spacing-8)',
                borderRadius: 'var(--radius-lg)',
                height: 260,
                border: '1px solid var(--color-border-light)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <iframe
                  title="EcoGreen Solar service area map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=144.2%2C-38.4%2C145.8%2C-37.4&amp;layer=mapnik&amp;marker=37.8136%2C144.9631"
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100% + 80px)',
                    border: 'none',
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(135deg, rgba(13,40,24,0.4), rgba(45,138,78,0.2))',
                }} />
                <div className="glass-card" style={{
                  padding: 'var(--spacing-2) var(--spacing-5)',
                  position: 'absolute',
                  bottom: 'var(--spacing-4)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                  backdropFilter: 'blur(8px)',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-2)',
                }}>
                  <span style={{ display: 'flex', color: 'var(--color-gold-500)' }}><MapPinIcon /></span>
                  Serving all Melbourne & Victoria
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`reveal ${formVisible ? 'reveal-visible' : ''}`}
              style={{
                background: '#fff',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                padding: 'var(--spacing-8)',
                border: '1px solid var(--color-border-light)',
                transitionDelay: '0.15s',
              }}
            >
              <div style={{ marginBottom: 'var(--spacing-5)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-sm)' }}>
                  Full Name *
                </label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  style={{ width: '100%', padding: 'var(--spacing-3) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-base)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(249,168,37,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-5)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-sm)' }}>
                  Email Address *
                </label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange} required
                  style={{ width: '100%', padding: 'var(--spacing-3) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-base)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(249,168,37,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-5)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-sm)' }}>
                  Phone Number *
                </label>
                <input
                  name="phone" type="tel" value={form.phone} onChange={handleChange} required
                  style={{ width: '100%', padding: 'var(--spacing-3) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-base)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(249,168,37,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-5)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-sm)' }}>
                  Suburb / Postcode *
                </label>
                <input
                  name="suburb" value={form.suburb} onChange={handleChange} required
                  style={{ width: '100%', padding: 'var(--spacing-3) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-base)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(249,168,37,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-6)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-sm)' }}>
                  Message (optional)
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={4}
                  style={{ width: '100%', padding: 'var(--spacing-3) var(--spacing-4)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-base)', resize: 'vertical', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold-500)'; e.target.style.boxShadow = '0 0 0 3px rgba(249,168,37,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <Button type="submit" size="btn-lg" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Get Your Free Consultation
              </Button>
              <p style={{ textAlign: 'center', color: 'var(--color-text-lighter)', fontSize: 'var(--text-xs)', marginTop: 'var(--spacing-3)', marginBottom: 0 }}>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
