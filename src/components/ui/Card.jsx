import { useRef, useState } from 'react';

export default function Card({ children, className = '', tilt = false, glow = false, ...props }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!tilt) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setMousePos({ x: 0, y: 0 });
  };

  const tiltStyle = tilt ? {
    transform: `perspective(600px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
    transition: mousePos.x === 0 && mousePos.y === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
  } : {};

  const glowStyle = glow ? 'card-glow' : '';
  const cls = `card ${glowStyle} ${className}`.trim();

  return (
    <div
      ref={cardRef}
      className={cls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...tiltStyle, ...(props.style || {}) }}
      {...props}
    >
      {children}
    </div>
  );
}
