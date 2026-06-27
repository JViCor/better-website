type ProjectProps = {
  title: string;
  description: string;
};

export default function Project({ title, description }: ProjectProps) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      background: '#fff',
      maxWidth: '400px',
      margin: '16px auto'
    }}>
      <h2 style={{ margin: '0 0 12px 0', fontSize: '1.5rem' }}>{title}</h2>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
    </div>
  );
}
