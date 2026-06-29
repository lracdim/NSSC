import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F1F1EB',
      fontFamily: 'Inter, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <div style={{
          fontSize: '10rem',
          fontWeight: 900,
          fontFamily: "'Oswald', sans-serif",
          color: '#1E6B45',
          lineHeight: 1,
          opacity: 0.12
        }}>404</div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#1E6B45" strokeWidth="2" fill="none" />
            <path d="M22 28C22 28 26 22 32 22C38 22 42 28 42 28" stroke="#1E6B45" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="32" r="2" fill="#1E6B45" />
            <circle cx="40" cy="32" r="2" fill="#1E6B45" />
          </svg>
        </div>
      </div>

      <h1 style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 700,
        color: '#2C2C2C',
        marginBottom: '0.75rem'
      }}>Page Not Found</h1>

      <p style={{
        fontSize: '1rem',
        color: '#5A5A5A',
        maxWidth: '420px',
        lineHeight: 1.7,
        marginBottom: '2.5rem'
      }}>
        The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.75rem',
          background: '#1E6B45',
          color: 'white',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'background 200ms'
        }}>
          <Home size={16} /> Back to Home
        </Link>
        <button onClick={() => window.history.back()} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.75rem',
          background: 'white',
          color: '#1E6B45',
          border: '2px solid #1E6B45',
          borderRadius: '9999px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.9rem',
          transition: 'background 200ms'
        }}>
          <ArrowLeft size={16} /> Go Back
        </button>
      </div>
    </div>
  )
}