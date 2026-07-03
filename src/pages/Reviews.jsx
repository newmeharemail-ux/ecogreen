import { useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card';

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

const reviews = [
  { name: 'Sarah & Michael Thompson', location: 'Camberwell, VIC', rating: 5, text: 'EcoGreen made the whole process effortless. From the initial consultation to installation, everything was professional and on time. Our power bill has dropped by 70%! We\'ve already recommended them to three neighbours.' },
  { name: 'David Chen', location: 'Box Hill, VIC', rating: 5, text: 'I researched a lot of solar companies and EcoGreen stood out for their transparency and quality. They helped me choose the perfect system for my home. The monitoring app is fantastic.' },
  { name: 'Priority Building Group', location: 'Melbourne CBD, VIC', rating: 5, text: 'We\'ve worked with EcoGreen on multiple commercial projects. Their commercial team understands the unique requirements of businesses and delivers on time, every time. Highly professional.' },
  { name: 'Emma & James Wilson', location: 'Richmond, VIC', rating: 5, text: 'From the first phone call to the final handover, everything was seamless. The team was respectful, punctual, and incredibly knowledgeable. Our 6.6kW system is performing beautifully.' },
  { name: 'Robert Patel', location: 'Doncaster, VIC', rating: 5, text: 'After getting quotes from 4 different companies, EcoGreen was the clear winner. Best value, best warranty, and most importantly — no pushy sales tactics. Highly recommended.' },
  { name: 'Greenleaf Realty', location: 'South Yarra, VIC', rating: 5, text: 'EcoGreen helped us install solar across 3 of our commercial properties. The process was smooth, the pricing was fair, and the energy savings have been significant.' },
  { name: 'Lisa & Tom Bennett', location: 'Essendon, VIC', rating: 5, text: 'We added a Tesla Powerwall to our existing system and EcoGreen made it look easy. They handled all the paperwork and the installation was done in a single day. Brilliant.' },
  { name: 'Marcus Wong', location: 'Kew, VIC', rating: 5, text: 'What stood out was the after-sales support. When I had questions about my monitoring system, they answered immediately. You don\'t get that from every solar company.' },
];

export default function Reviews() {
  const [sectionRef, visible] = useReveal();

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Customer Reviews
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Don't take our word for it. Here's what Melbourne homeowners and businesses say about us.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={sectionRef} className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-12)',
            flexWrap: 'wrap',
          }}>
            {[
              { rating: '4.9', count: '156 reviews', platform: 'Google' },
              { rating: '5.0', count: '89 reviews', platform: 'SolarQuotes' },
              { rating: '4.8', count: '72 reviews', platform: 'EnergyMatters' },
            ].map((r, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'reveal-visible' : ''}`}
                style={{
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  padding: 'var(--spacing-6) var(--spacing-8)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: 'var(--shadow-md)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-green-700)' }}>{r.rating}</div>
                <div style={{ color: 'var(--color-gold-500)', letterSpacing: 3 }}>{'★'.repeat(5)}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', marginTop: 2 }}>{r.count}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-lighter)' }}>{r.platform}</div>
              </div>
            ))}
          </div>

          <div className="grid-3">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${0.2 + i * 0.06}s` }}
              >
                <Card glow style={{ padding: 'var(--spacing-6)' }}>
                  <div style={{ color: 'var(--color-gold-500)', marginBottom: 'var(--spacing-2)', letterSpacing: 2 }}>
                    {'★'.repeat(r.rating)}
                  </div>
                  <p style={{
                    color: 'var(--color-text)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: 'var(--spacing-3)',
                  }}>
                    "{r.text}"
                  </p>
                  <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--spacing-3)' }}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{r.name}</div>
                    <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-xs)' }}>{r.location}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
