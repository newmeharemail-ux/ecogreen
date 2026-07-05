import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { SolarPanelIcon } from '../ui/Icons';
import { img } from '../../utils/imagePath';

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3 - 0.15,
      opacity: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="hero-gradient"
      style={{
        position: 'relative',
        color: '#fff',
        padding: 'var(--spacing-24) 0',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0d2818, #1B5E20, #2D8A4E, #1565C0, #0d2818)',
        backgroundSize: '400% 400%',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: '-100px 0',
        height: 'calc(100% + 200px)',
        background: `url('${img('australian-house-solar.jpg')}') center center / cover no-repeat`,
        filter: 'brightness(0.45) saturate(1.3) contrast(1.15)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(13,40,24,0.92) 0%, rgba(27,94,32,0.75) 35%, rgba(45,138,78,0.55) 65%, rgba(21,101,192,0.4) 100%)',
        zIndex: 1,
      }} />

      <Particles />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: 700 }}>
          <div className="reveal reveal-visible" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            background: 'rgba(255,255,255,0.1)',
            padding: 'var(--spacing-2) var(--spacing-5)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-sm)',
            marginBottom: 'var(--spacing-6)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.25)',
            color: 'rgba(255,255,255,0.95)',
          }}>
            <SolarPanelIcon />
            <span>Serving all of Melbourne & Victoria</span>
          </div>

          <h1 className="reveal reveal-visible" style={{
            color: '#fff',
            fontSize: 'clamp(2.8rem, 5.5vw, 4rem)',
            marginBottom: 'var(--spacing-6)',
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: '-0.03em',
          }}>
            Melbourne's Trusted<br />
            <span className="text-gradient">Solar & Battery</span><br />
            Installation Experts
          </h1>

          <p className="reveal reveal-visible" style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'var(--text-lg)',
            marginBottom: 'var(--spacing-8)',
            maxWidth: 540,
            lineHeight: 1.7,
          }}>
            We help Melbourne homeowners and businesses slash energy bills
            with premium solar panels and battery storage. Free assessments,
            expert installers, and ongoing support since 2011.
          </p>

          <div className="reveal reveal-visible" style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
            <Button href="/contact" size="btn-lg" className="btn-white btn-pulse">
              Free Consultation
            </Button>
            <Button href="/portfolio" variant="outline-light" size="btn-lg">
              See Our Work
            </Button>
          </div>

          <div className="reveal reveal-visible" style={{
            display: 'flex',
            gap: 'var(--spacing-8)',
            marginTop: 'var(--spacing-12)',
            paddingTop: 'var(--spacing-8)',
            borderTop: '1px solid rgba(255,255,255,0.15)',
          }}>
            {[
              { val: '1,200+', label: 'Systems Installed' },
              { val: '15+', label: 'Years Experience' },
              { val: '98%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, letterSpacing: '-0.02em' }}>{s.val}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
