import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { ShieldIcon, LeafIcon, SunIcon, HouseIcon, BatteryIcon } from '../components/ui/Icons';

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

const timeline = [
  { year: '2011', event: 'EcoGreen Solar founded in Melbourne' },
  { year: '2014', event: '200th installation completed' },
  { year: '2017', event: 'Expanded to commercial solar' },
  { year: '2020', event: 'Tesla Powerwall certified installer' },
  { year: '2023', event: '1,000+ systems installed' },
  { year: '2026', event: '1,200+ installations, 25+ team members' },
];

export default function About() {
  const [storyRef, storyVisible] = useReveal();
  const [journeyRef, journeyVisible] = useReveal();
  const [chooseRef, chooseVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <>
      <section style={{
        background: `url('/images/australian-house-solar.jpg') center center / cover no-repeat`,
        padding: 'var(--spacing-20) 0',
        position: 'relative',
        color: '#fff',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(13,40,24,0.92), rgba(45,138,78,0.75))',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            About EcoGreen Solar
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Melbourne's trusted solar partner since 2011.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={storyRef} className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-16)' }}>
            <div className={`reveal ${storyVisible ? 'reveal-visible' : ''}`}>
              <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Our Story</h2>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                EcoGreen Solar was founded in 2011 with a simple mission: make clean energy
                accessible and affordable for every Melbourne home. What started as a two-person
                operation has grown into one of Victoria's most trusted solar installation companies.
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                We've survived industry ups and downs by staying true to our values: transparency,
                quality craftsmanship, and genuine care for our customers. Every system we install
                comes with our personal guarantee.
              </p>
              <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                Today, with over 1,200 installations completed and a team of 25+ certified
                professionals, we continue to lead the way in solar innovation across Victoria.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-8)', marginTop: 'var(--spacing-6)' }}>
                <div>
                  <div className="stat-number" style={{ color: 'var(--color-green-700)' }}>1,200+</div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>Systems</div>
                </div>
                <div>
                  <div className="stat-number" style={{ color: 'var(--color-green-700)' }}>15+</div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>Years</div>
                </div>
                <div>
                  <div className="stat-number" style={{ color: 'var(--color-green-700)' }}>25+</div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)' }}>Team Members</div>
                </div>
              </div>
            </div>
            <div className={`reveal ${storyVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
              }}>
                <img
                  src="/images/melbourne-suburb-homes.jpg"
                  alt="EcoGreen solar installation in Melbourne suburb"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={journeyRef} className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle
            title="Our Journey"
            subtitle="From a two-person startup to Victoria's trusted solar partner."
            light
          />
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                className={`reveal ${journeyVisible ? 'reveal-visible' : ''}`}
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-6)',
                  marginBottom: 'var(--spacing-6)',
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{
                  minWidth: 80,
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  background: 'linear-gradient(135deg, var(--color-gold-700), var(--color-gold-500))',
                  color: 'var(--color-dark)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: 'var(--text-sm)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-gold)',
                }}>
                  {t.year}
                </div>
                <div className="glass-card" style={{
                  padding: 'var(--spacing-4) var(--spacing-6)',
                  flex: 1,
                }}>
                  <p style={{ margin: 0, color: '#fff' }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={chooseRef} style={{ padding: 'var(--spacing-20) 0' }}>
        <div className="container">
          <SectionTitle
            title="Why Choose EcoGreen?"
            subtitle="We're not just installers — we're your long-term energy partners."
          />
          <div className="grid-3">
            {[
              { icon: <ShieldIcon />, title: 'Certified Professionals', desc: 'All our installers are CEC accredited with ongoing training.' },
              { icon: <SunIcon />, title: 'Transparent Pricing', desc: 'No hidden fees, no pressure tactics. Clear quotes upfront.' },
              { icon: <BatteryIcon />, title: 'End-to-End Service', desc: 'From consultation to installation to ongoing support.' },
              { icon: <HouseIcon />, title: 'Local Melbourne Team', desc: 'We live and work in Melbourne. We know local conditions and regulations.' },
              { icon: <LeafIcon />, title: 'Premium Quality', desc: 'We only install Tier-1 panels and proven battery systems.' },
              { icon: <ShieldIcon />, title: 'Sustainability Focused', desc: 'We walk the talk — our office runs entirely on solar power.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal ${chooseVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="card" style={{
                  padding: 'var(--spacing-6)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    color: 'var(--color-green-700)',
                    marginBottom: 'var(--spacing-3)',
                    display: 'inline-flex',
                    padding: 'var(--spacing-2)',
                    background: 'var(--color-green-50)',
                    borderRadius: 'var(--radius-lg)',
                    transition: 'transform 0.3s ease',
                  }} className="icon-spin">
                    {item.icon}
                  </div>
                  <h4 style={{ marginBottom: 'var(--spacing-2)' }}>{item.title}</h4>
                  <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="section hero-gradient" style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0d2818, #1B5E20, #2D8A4E)',
        backgroundSize: '400% 400%',
      }}>
        <div className="container">
          <div className={`reveal ${ctaVisible ? 'reveal-visible' : ''}`}>
            <h2 style={{ color: '#fff', marginBottom: 'var(--spacing-4)' }}>Ready to Go Solar?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--spacing-6)', maxWidth: 500, margin: '0 auto var(--spacing-6)' }}>
              Book a free, no-obligation consultation with our team.
            </p>
            <Button href="/contact" size="btn-lg" className="btn-gold btn-pulse">
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
