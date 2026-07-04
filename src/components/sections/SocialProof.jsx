import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const reviews = [
  { platform: 'Google', count: '156', stars: 5 },
  { platform: 'SolarQuotes', count: '89', stars: 5 },
  { platform: 'EnergyMatters', count: '72', stars: 5 },
];

const stats = [
  { value: '1,200+', label: 'Systems Installed' },
  { value: '15+', label: 'Years Experience' },
  { value: '8 MW', label: 'Solar Capacity' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function SocialProof() {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: 'var(--spacing-12) 0',
        borderBottom: '1px solid var(--color-border-light)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(var(--color-green-100) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.3,
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--spacing-6)',
          flexWrap: 'wrap',
          marginBottom: 'var(--spacing-10)',
        }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                padding: 'var(--spacing-3) var(--spacing-5)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(255,255,255,0.3)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-green-700)' }}>
                {r.platform}
              </div>
              <div style={{ color: 'var(--color-gold-500)', fontSize: '0.9rem', letterSpacing: 2 }}>
                {'★'.repeat(r.stars)}
              </div>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', fontWeight: 500 }}>
                {r.count} reviews
              </span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--spacing-16)',
          flexWrap: 'wrap',
        }}>
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ textAlign: 'center', transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="stat-number" style={{ color: 'var(--color-green-700)' }}>
                {s.value}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
