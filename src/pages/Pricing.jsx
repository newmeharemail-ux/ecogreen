import { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';

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

const systems = [
  { size: '3kW', panels: 8, cost: '$3,500 - $4,500', saving: '$600 - $900/yr', rebate: '$1,200' },
  { size: '5kW', panels: 14, cost: '$4,500 - $6,000', saving: '$1,000 - $1,500/yr', rebate: '$1,900' },
  { size: '6.6kW', panels: 18, cost: '$5,500 - $7,500', saving: '$1,300 - $1,800/yr', rebate: '$2,300' },
  { size: '8kW', panels: 22, cost: '$7,000 - $9,500', saving: '$1,700 - $2,400/yr', rebate: '$3,000' },
  { size: '10kW', panels: 28, cost: '$9,000 - $12,000', saving: '$2,200 - $3,000/yr', rebate: '$3,600' },
];

const batteries = [
  { model: 'Tesla Powerwall 3', capacity: '13.5 kWh', cost: '$12,000 - $14,000', backup: 'Yes' },
  { model: 'LG Chem RESU Prime', capacity: '10 kWh', cost: '$8,000 - $10,000', backup: 'Yes' },
  { model: 'Sungrow HV Battery', capacity: '9.6 kWh', cost: '$6,500 - $8,500', backup: 'Optional' },
];

const comparisons = [
  { label: 'Average daily generation (6.6kW)', before: '0 kWh', after: '24 kWh' },
  { label: 'Annual electricity bill', before: '$1,800', after: '$540' },
  { label: 'Carbon footprint (tonnes CO2/yr)', before: '4.2', after: '0.8' },
  { label: 'Payback period', before: '—', after: '3-5 years' },
];

export default function Pricing() {
  const [solarRef, solarVisible] = useReveal();
  const [batteryRef, batteryVisible] = useReveal();
  const [compareRef, compareVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <>
      <section className="bg-green-deep" style={{
        padding: 'var(--spacing-20) 0',
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 'var(--text-4xl)', marginBottom: 'var(--spacing-4)' }}>
            Solar Pricing — Transparent & Clear
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            No hidden fees. No "call for price" games. Here's what you can expect to pay.
          </p>
          <div className="accent-bar" style={{ margin: 'var(--spacing-6) auto 0' }} />
        </div>
      </section>

      <section ref={solarRef} className="section">
        <div className="container">
          <div className={`reveal ${solarVisible ? 'reveal-visible' : ''}`}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-4)' }}>Residential Solar Systems</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-8)' }}>
              Prices shown include installation, inverter, and STC rebate deduction. Does not include battery.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, var(--color-green-700), var(--color-green-600))', color: '#fff' }}>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>System Size</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Panels</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Typical Cost</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Estimated Savings</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>STC Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  {systems.map((row, i) => (
                    <tr key={i} style={{
                      borderBottom: '1px solid var(--color-border-light)',
                      background: i % 2 === 0 ? '#fff' : 'var(--color-warm-light)',
                      transition: 'background 0.2s',
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-gold-50)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : 'var(--color-warm-light)'}
                    >
                      <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>{row.size}</td>
                      <td style={{ padding: 'var(--spacing-4)' }}>{row.panels}</td>
                      <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-green-700)', fontWeight: 700 }}>{row.cost}</td>
                      <td style={{ padding: 'var(--spacing-4)' }}>{row.saving}</td>
                      <td style={{ padding: 'var(--spacing-4)' }}>{row.rebate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section ref={batteryRef} className="section" style={{ background: 'var(--color-warm-light)' }}>
        <div className="container">
          <div className={`reveal ${batteryVisible ? 'reveal-visible' : ''}`}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-4)' }}>Battery Storage Pricing</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-8)' }}>
              Add battery storage to maximise your solar savings and get backup power.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, var(--color-blue-700), var(--color-blue-500))', color: '#fff' }}>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Model</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Capacity</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Installed Cost</th>
                    <th style={{ padding: 'var(--spacing-4)', textAlign: 'left' }}>Backup Ready</th>
                  </tr>
                </thead>
                <tbody>
                  {batteries.map((row, i) => (
                    <tr key={i} style={{
                      borderBottom: '1px solid var(--color-border-light)',
                      background: i % 2 === 0 ? '#fff' : 'var(--color-blue-50)',
                      transition: 'background 0.2s',
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-gold-50)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? '#fff' : 'var(--color-blue-50)'}
                    >
                      <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>{row.model}</td>
                      <td style={{ padding: 'var(--spacing-4)' }}>{row.capacity}</td>
                      <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-blue-700)', fontWeight: 700 }}>{row.cost}</td>
                      <td style={{ padding: 'var(--spacing-4)' }}>{row.backup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{
              textAlign: 'center',
              color: 'var(--color-text-lighter)',
              fontSize: 'var(--text-sm)',
              marginTop: 'var(--spacing-4)',
            }}>
              * Prices are estimates and may vary based on site conditions. Contact us for a firm quote.
            </p>
          </div>
        </div>
      </section>

      <section ref={compareRef} className="section">
        <div className="container">
          <div className={`reveal ${compareVisible ? 'reveal-visible' : ''}`}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>Before vs After Solar</h2>
            <div className="grid-4">
              {comparisons.map((c, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  background: '#fff',
                  padding: 'var(--spacing-6)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border-light)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-gold-500)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-gold-lg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-light)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                >
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-3)' }}>{c.label}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-3)' }}>
                    <div style={{ color: 'var(--color-error)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>{c.before}</div>
                    <div style={{ color: 'var(--color-text-lighter)' }}>&rarr;</div>
                    <div style={{ color: 'var(--color-green-700)', fontWeight: 800, fontSize: 'var(--text-xl)' }}>{c.after}</div>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 style={{ color: '#fff', marginBottom: 'var(--spacing-4)' }}>Want an Exact Quote?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 'var(--spacing-6)', maxWidth: 500, margin: '0 auto var(--spacing-6)' }}>
              Every home is different. Let us create a custom proposal tailored to your roof and energy usage.
            </p>
            <Button href="/contact" size="btn-lg" className="btn-gold btn-pulse">
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
