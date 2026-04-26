import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page-shell" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh',
      textAlign: 'center'
    }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '120px', 
            fontWeight: '800', 
            margin: '0', 
            lineHeight: '1',
            letterSpacing: '-0.05em',
            opacity: '0.1'
          }}>
            404
          </h1>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            marginTop: '-40px',
            position: 'relative'
          }}>
            Page Not Found
          </h2>
          <p style={{ 
            color: '#666', 
            fontSize: '18px', 
            marginTop: '16px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/" className="publication-link" style={{ textTransform: 'uppercase' }}>
            Back to Home / 返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}
