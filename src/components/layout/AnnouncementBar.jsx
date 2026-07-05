import { Link } from 'react-router-dom';
import { HouseIcon } from '../ui/Icons';

export default function AnnouncementBar() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--color-green-700), var(--color-green-500))',
      color: '#fff',
      textAlign: 'center',
      padding: 'var(--spacing-2) var(--spacing-4)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        verticalAlign: 'middle',
        position: 'relative',
        zIndex: 1,
      }}>
        <HouseIcon />
        Free site assessment — find out how much you could save!
      </span>
      <Link
        to="/contact"
        style={{
          color: 'var(--color-gold-300)',
          textDecoration: 'underline',
          fontWeight: 700,
          marginLeft: 'var(--spacing-1)',
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => e.target.style.color = '#fff'}
        onMouseLeave={(e) => e.target.style.color = 'var(--color-gold-300)'}
      >
        Get Your Estimate →
      </Link>
    </div>
  );
}
