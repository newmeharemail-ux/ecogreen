import { useEffect, useRef, useState } from 'react';

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

const projects = [
  { location: 'Camberwell, VIC', panels: 24, kw: 7.2, date: 'Mar 2026', type: 'Residential', img: '/images/solar-panels-roof.jpg' },
  { location: 'Brighton, VIC', panels: 32, kw: 9.6, date: 'Feb 2026', type: 'Residential', img: '/images/solar-tech-rooftop.jpg' },
  { location: 'Box Hill, VIC', panels: 18, kw: 5.4, date: 'Jan 2026', type: 'Residential', img: '/images/solar-installer-roof.jpg' },
  { location: 'Melbourne CBD, VIC', panels: 120, kw: 40, date: 'Dec 2025', type: 'Commercial', img: '/images/solar-panels-roof.jpg' },
  { location: 'Richmond, VIC', panels: 28, kw: 8.4, date: 'Dec 2025', type: 'Residential', img: '/images/solar-tech-rooftop.jpg' },
  { location: 'Essendon, VIC', panels: 20, kw: 6.0, date: 'Nov 2025', type: 'Residential', img: '/images/battery-installation.jpg' },
  { location: 'South Yarra, VIC', panels: 22, kw: 6.6, date: 'Nov 2025', type: 'Residential', img: '/images/hero-solar-installation.jpg' },
  { location: 'Kew, VIC', panels: 34, kw: 10.2, date: 'Oct 2025', type: 'Residential', img: '/images/solar-panels-roof.jpg' },
  { location: 'Footscray, VIC', panels: 16, kw: 4.8, date: 'Oct 2025', type: 'Residential', img: '/images/solar-installer-roof.jpg' },
  { location: 'Geelong, VIC', panels: 48, kw: 15, date: 'Sep 2025', type: 'Commercial', img: '/images/solar-tech-rooftop.jpg' },
  { location: 'Doncaster, VIC', panels: 26, kw: 7.8, date: 'Sep 2025', type: 'Residential', img: '/images/battery-installation.jpg' },
  { location: 'Preston, VIC', panels: 30, kw: 9.0, date: 'Aug 2025', type: 'Residential', img: '/images/hero-solar-installation.jpg' },
];

export default function Portfolio() {
  const [sectionRef, visible] = useReveal();

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Our Solar Installations
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Every project tells a story. See the quality and craftsmanship behind every system we install.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={sectionRef} className="section">
        <div className="container">
          <div className="grid-3">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`reveal ${visible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card" style={{ border: '1px solid var(--color-border)' }}>
                  <div className="img-zoom" style={{ height: 220, overflow: 'hidden', background: 'var(--color-green-50)', position: 'relative' }}>
                    <img
                      src={p.img}
                      alt={`Solar installation at ${p.location}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;padding:2rem"><svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" fill="#2D8A4E"/><path d="M24 4v4M24 40v4M8.46 8.46l2.83 2.83M36.71 36.71l2.83 2.83M4 24h4M40 24h4M8.46 39.54l2.83-2.83M36.71 11.29l2.83-2.83" stroke="#2D8A4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>';
                      }}
                    />
                  </div>
                  <div style={{ padding: 'var(--spacing-5)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-xl)' }}>{p.location}</h3>
                    <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', marginBottom: 'var(--spacing-3)' }}>
                      <span className="tag tag-blue">{p.type}</span>
                      <span className="tag tag-green">{p.kw} kW</span>
                      <span className="tag tag-warm">{p.panels} panels</span>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-lighter)', margin: 0 }}>Installed {p.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
