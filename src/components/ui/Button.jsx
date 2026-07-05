import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', size = '', href, className = '', ...props }) {
  const btnRef = useRef(null);

  const handleClick = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - diameter / 2;
    const y = e.clientY - rect.top - diameter / 2;
    ripple.style.cssText = `
      position: absolute;
      width: ${diameter}px;
      height: ${diameter}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      transform: scale(0);
      animation: ripple-effect 0.6s ease-out;
      pointer-events: none;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const cls = `btn btn-${variant} ${size} ${className}`.trim();

  const commonProps = {
    ref: btnRef,
    className: cls,
    onClick: handleClick,
    style: { position: 'relative', overflow: 'hidden' },
    ...props,
  };

  if (href) {
    return <Link to={href} {...commonProps}>{children}</Link>;
  }
  return <button {...commonProps}>{children}</button>;
}
