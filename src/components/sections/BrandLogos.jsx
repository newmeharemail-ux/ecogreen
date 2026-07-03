import { useEffect, useRef, useState } from 'react';

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

const brands = [
  'SunPower', 'Tesla', 'LG Chem', 'Fronius', 'Sungrow', 'Q Cells', 'Enphase',
];

export default function BrandLogos() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} style={{
      background: '#fff',
      padding: 'var(--spacing-12) 0',
      borderTop: '1px solid var(--color-border-light)',
      borderBottom: '1px solid var(--color-border-light)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--color-border-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.3,
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          textAlign: 'center',
          color: 'var(--color-text-light)',
          marginBottom: 'var(--spacing-8)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 3,
          fontSize: 'var(--text-xs)',
        }}>
          Premium Brands We Trust & Install
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--spacing-6)',
          flexWrap: 'wrap',
        }}>
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{
                padding: 'var(--spacing-4) var(--spacing-6)',
                background: 'var(--color-warm-light)',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                color: 'var(--color-text)',
                fontSize: 'var(--text-sm)',
                letterSpacing: 1,
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'all 0.3s ease',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold-500)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,168,37,0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'var(--color-warm-light)';
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
