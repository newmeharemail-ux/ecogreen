import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

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

const testimonials = [
  {
    name: 'Sarah & Michael Thompson',
    location: 'Camberwell, VIC',
    text: 'EcoGreen made the whole process effortless. From the initial consultation to installation, everything was professional and on time. Our power bill has dropped by 70%!',
    rating: 5,
  },
  {
    name: 'David Chen',
    location: 'Box Hill, VIC',
    text: 'I researched a lot of solar companies and EcoGreen stood out for their transparency and quality. They helped me choose the perfect system for my home. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Priority Building Group',
    location: 'Melbourne CBD, VIC',
    text: 'We\'ve worked with EcoGreen on multiple commercial projects. Their commercial team understands the unique requirements of businesses and delivers on time, every time.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--color-warm-light)', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(var(--color-gold-100) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Real words from real Melbourne homeowners and businesses."
        />
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <Card glow style={{ padding: 'var(--spacing-8)', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-4)',
                  right: 'var(--spacing-6)',
                  fontSize: '5rem',
                  color: 'var(--color-gold-100)',
                  lineHeight: 0.8,
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                }}>&ldquo;</div>
                <div style={{ color: 'var(--color-gold-500)', fontSize: '1.1rem', marginBottom: 'var(--spacing-3)', letterSpacing: 2 }}>
                  {'★'.repeat(t.rating)}
                </div>
                <p style={{
                  color: 'var(--color-text)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: 'var(--spacing-4)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  "{t.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--spacing-3)' }}>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{t.name}</div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-xs)' }}>{t.location}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
