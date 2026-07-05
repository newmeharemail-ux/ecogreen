import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function CTABanner() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="hero-gradient" style={{
      background: 'linear-gradient(135deg, #0d2818, #1B5E20, #2D8A4E, #1565C0, #1B5E20)',
      backgroundSize: '400% 400%',
      padding: 'var(--spacing-20) 0',
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />
      <div className={`reveal ${visible ? 'reveal-visible' : ''}`} style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, var(--text-5xl))', marginBottom: 'var(--spacing-4)' }}>
          Still Paying Too Much for Power?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 'var(--text-lg)',
          marginBottom: 'var(--spacing-8)',
          lineHeight: 1.7,
        }}>
          Let's fix that. Whether you need a new installation, battery storage,
          or just want to explore your options — we'll recommend the fastest,
          cleanest path forward. No pushy sales. Just expert help.
        </p>
        <Button
          href="/contact"
          size="btn-lg"
          className="btn-gold btn-pulse"
          style={{
            fontSize: 'var(--text-lg)',
          }}
        >
          Get Your Free Quote
        </Button>
      </div>
    </section>
  );
}
