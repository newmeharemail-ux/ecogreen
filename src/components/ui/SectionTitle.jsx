export default function SectionTitle({ title, subtitle, light }) {
  return (
    <div className="section-title" style={light ? { color: '#fff' } : {}}>
      <h2 style={light ? { color: '#fff' } : {}}>{title}</h2>
      {subtitle && <p style={light ? { color: 'rgba(255,255,255,0.8)' } : {}}>{subtitle}</p>}
    </div>
  );
}
