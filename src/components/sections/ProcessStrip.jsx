import { useEffect, useRef, useState } from 'react';
import { ClipboardIcon, SearchIcon, DocumentIcon, ToolsIcon } from '../ui/Icons';

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

const steps = [
  { icon: <ClipboardIcon />, title: 'Free Consultation', desc: 'We assess your energy needs and provide a custom proposal.' },
  { icon: <SearchIcon />, title: 'Site Survey', desc: 'Our engineers inspect your roof and electrical setup.' },
  { icon: <DocumentIcon />, title: 'Permits & Paperwork', desc: 'We handle all approvals, rebates, and paperwork.' },
  { icon: <ToolsIcon />, title: 'Installation', desc: 'Expert installation in as little as one day.' },
];

export default function ProcessStrip() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="bg-green-deep" style={{
      padding: 'var(--spacing-16) 0',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-12)',
          color: '#fff',
          fontSize: 'var(--text-3xl)',
        }}>
          How It Works — 4 Simple Steps
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--spacing-6)',
        }} className="process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ textAlign: 'center', position: 'relative', transitionDelay: `${i * 0.12}s` }}
            >
              <div style={{
                width: 88,
                height: 88,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--spacing-4)',
                border: '2px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12)';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.35), 0 0 20px rgba(249,168,37,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(249,168,37,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                {step.icon}
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 44,
                  right: '-15%',
                  width: '30%',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(249,168,37,0.5), rgba(255,255,255,0.05))',
                }} className="step-connector" />
              )}
              <h4 style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-lg)', color: '#fff' }}>{step.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
