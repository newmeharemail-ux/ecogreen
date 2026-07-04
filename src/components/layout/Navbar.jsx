import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../ui/Button';
import { LogoIcon } from '../ui/Icons';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/process', label: 'Process' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      height: 'var(--nav-height)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-2)',
          fontWeight: 700,
          fontSize: 'var(--text-xl)',
          color: 'var(--color-green-700)',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}>
          <LogoIcon />
          EcoGreen Solar
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
          <ul style={{
            display: 'flex',
            gap: 'var(--spacing-6)',
            alignItems: 'center',
          }} className="nav-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: pathname === link.path ? 600 : 400,
                    color: pathname === link.path ? 'var(--color-green-700)' : 'var(--color-text)',
                    padding: 'var(--spacing-2) 0',
                    borderBottom: pathname === link.path ? '2px solid var(--color-gold-500)' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.path) {
                      e.target.style.color = 'var(--color-green-700)';
                      e.target.style.borderBottomColor = 'var(--color-green-200)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.path) {
                      e.target.style.color = 'var(--color-text)';
                      e.target.style.borderBottomColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/contact" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
            Get a Quote
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: 'var(--spacing-2)',
            color: 'var(--color-green-700)',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(12px)',
          padding: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-xl)',
          zIndex: 999,
          borderBottom: '3px solid var(--color-gold-500)',
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: pathname === link.path ? 600 : 400,
                    color: pathname === link.path ? 'var(--color-green-700)' : 'var(--color-text)',
                    display: 'block',
                    padding: 'var(--spacing-2) 0',
                    borderBottom: pathname === link.path ? '2px solid var(--color-gold-500)' : '1px solid var(--color-border-light)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: 'var(--spacing-2)' }}>
              <Button href="/contact" className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                Get a Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
