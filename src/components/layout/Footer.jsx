import { Link } from 'react-router-dom';
import { LogoIcon, FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '../ui/Icons';

const footerLinks = {
  Services: [
    { label: 'Solar Panel Installation', path: '/services' },
    { label: 'Battery Storage', path: '/services' },
    { label: 'Commercial Solar', path: '/services' },
    { label: 'Repairs & Maintenance', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Process', path: '/process' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Reviews', path: '/reviews' },
  ],
  Support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-dark), #051408)',
      color: '#fff',
      padding: 'var(--spacing-16) 0 var(--spacing-8)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, var(--color-green-500), var(--color-gold-500), var(--color-green-500))',
      }} />
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--spacing-10)',
          marginBottom: 'var(--spacing-12)',
        }} className="footer-grid">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
              fontWeight: 700,
              fontSize: 'var(--text-xl)',
              color: 'var(--color-gold-500)',
              marginBottom: 'var(--spacing-4)',
            }}>
              <LogoIcon />
              EcoGreen Solar
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--spacing-4)', fontSize: 'var(--text-sm)' }}>
              Melbourne's trusted solar installation company.
              We help homes and businesses harness the power of the sun
              with quality solar panels and battery storage solutions.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              {[
                { icon: <FacebookIcon />, href: '#' },
                { icon: <InstagramIcon />, href: '#' },
                { icon: <LinkedInIcon />, href: '#' },
                { icon: <YouTubeIcon />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold-500)';
                    e.currentTarget.style.color = 'var(--color-dark)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                color: 'var(--color-gold-500)',
                marginBottom: 'var(--spacing-4)',
                fontSize: 'var(--text-base)',
              }}>
                {title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} style={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: 'var(--text-sm)',
                      transition: 'color 0.2s, padding-left 0.2s',
                      display: 'inline-block',
                    }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--color-gold-500)';
                        e.target.style.paddingLeft = '4px';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255,255,255,0.6)';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 'var(--spacing-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--spacing-4)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', margin: 0 }}>
            &copy; {new Date().getFullYear()} EcoGreen Solar. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-gold-500)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
            >Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-gold-500)'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
            >Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
