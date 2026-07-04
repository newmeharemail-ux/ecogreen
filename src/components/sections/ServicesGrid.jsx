import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { SolarPanelIcon, BatteryIcon, ShieldIcon, SunIcon, HouseIcon, LeafIcon } from '../ui/Icons';

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

const services = [
  {
    icon: <SolarPanelIcon />,
    title: 'Solar Panel Installation',
    desc: 'Premium solar panel systems tailored to your home. We use top-tier panels and inverters for maximum energy production.',
    link: '/services',
  },
  {
    icon: <BatteryIcon />,
    title: 'Battery Storage',
    desc: 'Store excess solar energy and power your home through the night. Tesla Powerwall and LG Chem certified installers.',
    link: '/services',
  },
  {
    icon: <HouseIcon />,
    title: 'Commercial Solar',
    desc: 'Reduce operating costs with custom commercial solar solutions. Tax incentives and rapid ROI for your business.',
    link: '/services',
  },
  {
    icon: <ShieldIcon />,
    title: 'Repairs & Maintenance',
    desc: 'Expert diagnostics, repairs, and system optimisation. We service all major brands and older installations.',
    link: '/services',
  },
  {
    icon: <SunIcon />,
    title: 'EV Charger Installation',
    desc: 'Future-proof your home with EV charger installation. Compatible with all electric vehicles on the market.',
    link: '/services',
  },
  {
    icon: <LeafIcon />,
    title: 'Solar Roofing',
    desc: 'Integrated solar roofing solutions that blend seamlessly with your home\'s architecture. Dual-purpose beauty and power.',
    link: '/services',
  },
];

export default function ServicesGrid() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(var(--color-green-50) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        opacity: 0.5,
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle
          title="Solar Services That Keep You Powered"
          subtitle="From new installations to ongoing support, we handle every aspect of your solar journey."
        />
        <div className="grid-3">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Card glow style={{ padding: 'var(--spacing-8)', textAlign: 'center' }}>
                <div style={{
                  color: 'var(--color-green-700)',
                  marginBottom: 'var(--spacing-4)',
                  display: 'inline-flex',
                  padding: 'var(--spacing-3)',
                  background: 'var(--color-green-50)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform 0.3s ease',
                }}
                  className="icon-spin"
                >
                  {s.icon}
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-3)' }}>{s.title}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--text-sm)', marginBottom: 'var(--spacing-4)' }}>
                  {s.desc}
                </p>
                <a href={s.link} className="hover-border-glow" style={{
                  color: 'var(--color-green-700)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-1)',
                  padding: 'var(--spacing-1) var(--spacing-3)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid transparent',
                }}>
                  Learn more →
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
