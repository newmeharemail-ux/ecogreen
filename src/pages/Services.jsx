import { useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SolarPanelIcon, BatteryIcon, SunIcon, ShieldIcon, HouseIcon, LeafIcon } from '../components/ui/Icons';

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
    desc: 'Premium residential solar panel systems tailored to your home\'s energy needs. We use tier-1 panels from SunPower, Q Cells, and LG with industry-leading warranties.',
    features: ['High-efficiency monocrystalline panels', 'Optimised roof layout design', 'Smart monitoring included', '25-year performance warranty'],
    img: '/images/solar-panels-tiled-roof.jpg',
  },
  {
    icon: <BatteryIcon />,
    title: 'Battery Storage',
    desc: 'Store excess solar energy and power your home after dark. Certified installers for Tesla Powerwall, LG Chem, and Sungrow battery systems.',
    features: ['Tesla Powerwall certified', 'Backup power during outages', 'Smart energy management', 'Maximise solar self-consumption'],
    img: '/images/battery-installation.jpg',
  },
  {
    icon: <HouseIcon />,
    title: 'Commercial Solar',
    desc: 'Reduce operating costs and meet sustainability goals with custom commercial solar solutions. Rapid ROI and full STC rebate management.',
    features: ['Custom system design', 'STC & LGC management', 'Maximised roof utilisation', 'Ongoing performance monitoring'],
    img: '/images/house-many-solar-panels.jpg',
  },
  {
    icon: <ShieldIcon />,
    title: 'Repairs & Maintenance',
    desc: 'Expert diagnostics and repair for all solar systems. We service all brands and can take over orphaned systems from installers who\'ve closed down.',
    features: ['Same-week service available', 'All major brands supported', 'Performance diagnostics', 'Orphan system takeover'],
    img: '/images/solar-tech-rooftop.jpg',
  },
  {
    icon: <SunIcon />,
    title: 'EV Charger Installation',
    desc: 'Future-proof your home with professional EV charger installation. Compatible with Tesla, BYD, MG, and all electric vehicles.',
    features: ['7kW & 22kW chargers', 'Smart charging compatible', 'Solar integration ready', 'All EV brands supported'],
    img: '/images/melbourne-modern-homes.jpg',
  },
  {
    icon: <LeafIcon />,
    title: 'Solar Roofing',
    desc: 'Integrated solar roofing solutions that combine premium roofing materials with high-efficiency solar cells for a seamless look.',
    features: ['Tesla Solar Roof alternative', 'Architecturally integrated', 'Dual-purpose roofing + power', 'Premium aesthetics'],
    img: '/images/rooftops-solar-panels.jpg',
  },
];

export default function Services() {
  const [sectionRef, visible] = useReveal();

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Our Solar Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Everything you need to generate, store, and manage your solar energy.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={sectionRef} className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
            {services.map((service, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Card glow style={{
                  padding: 'var(--spacing-8)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--spacing-8)',
                  alignItems: 'center',
                }}>
                  <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                    <div style={{
                      width: 72,
                      height: 72,
                      background: 'var(--color-green-50)',
                      borderRadius: 'var(--radius-lg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--spacing-4)',
                      color: 'var(--color-green-700)',
                      transition: 'transform 0.3s ease',
                    }} className="icon-spin">
                      {service.icon}
                    </div>
                    <h3 style={{ marginBottom: 'var(--spacing-3)' }}>{service.title}</h3>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-4)' }}>{service.desc}</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)' }}>
                      {service.features.map((f, j) => (
                        <li key={j} style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-2)',
                        }}>
                          <span style={{ color: 'var(--color-gold-700)', fontWeight: 700 }}>&check;</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="secondary">Get a Quote</Button>
                  </div>
                  <div style={{
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    order: i % 2 === 0 ? 2 : 1,
                    height: 300,
                  }}>
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
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
