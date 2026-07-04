import { useEffect, useRef, useState } from 'react';
import { ClipboardIcon, SearchIcon, DocumentIcon, ToolsIcon, SunIcon, ShieldIcon, HouseIcon, LeafIcon } from '../components/ui/Icons';

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

const steps = [
  { number: '01', title: 'Initial Consultation', desc: 'We start with a chat about your energy goals. We\'ll review your power bills, discuss your needs, and give you a ballpark savings estimate — no obligation, no pressure.', icon: <ClipboardIcon /> },
  { number: '02', title: 'Site Survey', desc: 'Our engineering team visits your property to inspect your roof, electrical panel, and shading conditions. We take precise measurements and photos for your custom design.', icon: <SearchIcon /> },
  { number: '03', title: 'Custom Proposal', desc: 'We create a tailored system design with exact specifications, projected energy production, and a clear, itemised quote. You\'ll know exactly what you\'re getting.', icon: <DocumentIcon /> },
  { number: '04', title: 'Paperwork & Approvals', desc: 'We handle everything — STC rebate applications, Victorian Solar Homes rebate paperwork, council permits, and utility interconnection applications. You don\'t lift a finger.', icon: <ShieldIcon /> },
  { number: '05', title: 'Contract & Schedule', desc: 'Once you\'re happy, we sign the agreement and schedule your installation at a time that works for you. Most installs are completed in one day.', icon: <SunIcon /> },
  { number: '06', title: 'Installation Day', desc: 'Our certified installation team arrives on time, installs your system professionally, and cleans up completely. We respect your home like it\'s our own.', icon: <ToolsIcon /> },
  { number: '07', title: 'Inspection & Connection', desc: 'We arrange all required inspections and work with your electricity distributor to get your system connected and exporting power to the grid.', icon: <HouseIcon /> },
  { number: '08', title: 'Handover & Training', desc: 'We walk you through your monitoring system, explain how to maximise your savings, and answer every question. We don\'t leave until you\'re confident.', icon: <LeafIcon /> },
  { number: '09', title: 'Ongoing Support', desc: 'Your journey with us doesn\'t end at installation. We offer ongoing monitoring, maintenance packages, and priority support for the life of your system.', icon: <ShieldIcon /> },
];

export default function Process() {
  const [sectionRef, visible] = useReveal();

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Our Installation Process
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Going solar is simpler than you think. Here's exactly what to expect.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={sectionRef} className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 32,
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(to bottom, var(--color-gold-500), var(--color-green-500), var(--color-green-700))',
            }} />
            {steps.map((step, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'reveal-visible' : ''}`}
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-6)',
                  marginBottom: 'var(--spacing-8)',
                  position: 'relative',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-green-700), var(--color-green-500))',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 0 0 4px var(--color-green-50), var(--shadow-md)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px var(--color-green-50), var(--shadow-lg), 0 0 20px rgba(249,168,37,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px var(--color-green-50), var(--shadow-md)';
                  }}
                >
                  <div style={{ width: 28, height: 28 }}>{step.icon}</div>
                </div>
                <div className="glass-card" style={{
                  padding: 'var(--spacing-6)',
                  flex: 1,
                  border: '1px solid var(--color-border-light)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-2)' }}>
                    <span style={{
                      background: 'var(--color-gold-100)',
                      color: 'var(--color-gold-900)',
                      padding: '2px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                    }}>
                      Step {step.number}
                    </span>
                    <h3 style={{ margin: 0, color: 'var(--color-green-700)', fontSize: 'var(--text-xl)' }}>{step.title}</h3>
                  </div>
                  <p style={{ color: 'var(--color-text-light)', margin: 0, lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
