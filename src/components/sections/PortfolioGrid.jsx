import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { img } from '../../utils/imagePath';

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
  { location: 'Camberwell, VIC', panels: 24, kw: 7.2, date: 'Mar 2026', type: 'Residential', img: '/images/melbourne-suburb-homes.jpg' },
  { location: 'Brighton, VIC', panels: 32, kw: 9.6, date: 'Feb 2026', type: 'Residential', img: '/images/australian-house-solar.jpg' },
  { location: 'Box Hill, VIC', panels: 18, kw: 5.4, date: 'Jan 2026', type: 'Residential', img: '/images/melbourne-modern-homes.jpg' },
  { location: 'Melbourne CBD, VIC', panels: 120, kw: 40, date: 'Dec 2025', type: 'Commercial', img: '/images/modern-solar-building.jpg' },
  { location: 'Richmond, VIC', panels: 28, kw: 8.4, date: 'Dec 2025', type: 'Residential', img: '/images/melbourne-townhouses.jpg' },
  { location: 'Essendon, VIC', panels: 20, kw: 6.0, date: 'Nov 2025', type: 'Residential', img: '/images/melbourne-suburb-green.jpg' },
];

export default function PortfolioGrid() {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff' }}>
      <div className="container">
        <SectionTitle
          title="Recent Installations"
          subtitle="Real projects, real results. Every system we install comes with a satisfaction guarantee."
        />
        <div className="grid-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="card" style={{ border: '1px solid var(--color-border-light)' }}>
                <div className="img-zoom" style={{
                  height: 240,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={img(p.img.replace('/images/', ''))}
                    alt={`Solar installation at ${p.location}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, var(--color-green-100) 0%, var(--color-blue-50) 100%)';
                      e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%"><svg width="40" height="40" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" fill="#2D8A4E"/><path d="M24 4v4M24 40v4M8.46 8.46l2.83 2.83M36.71 36.71l2.83 2.83M4 24h4M40 24h4M8.46 39.54l2.83-2.83M36.71 11.29l2.83-2.83" stroke="#2D8A4E" stroke-width="2.5" stroke-linecap="round"/></svg></div>';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'var(--spacing-3)',
                    right: 'var(--spacing-3)',
                    display: 'flex',
                    gap: 4,
                  }}>
                    <span className="tag tag-blue" style={{ backdropFilter: 'blur(4px)' }}>{p.type}</span>
                  </div>
                </div>
                <div style={{ padding: 'var(--spacing-5)' }}>
                  <h4 style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--text-lg)' }}>{p.location}</h4>
                  <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-3)',
                    flexWrap: 'wrap',
                    marginBottom: 'var(--spacing-3)',
                  }}>
                    <span className="tag tag-blue">{p.kw} kW</span>
                    <span className="tag tag-warm">{p.panels} panels</span>
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-lighter)', margin: 0 }}>
                    Installed {p.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`reveal ${visible ? 'reveal-visible' : ''}`} style={{ textAlign: 'center', marginTop: 'var(--spacing-8)' }}>
          <Link to="/portfolio" className="btn btn-secondary btn-lg">
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
