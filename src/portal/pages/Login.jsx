import { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import useStore, { useHasHydrated } from '../store/useStore'

const ROLE_CONFIG = {
  '/parents': {
    key: 'parent',
    label: 'Parent',
    demoEmail: 'maria.santos@gmail.com',
    demoPass: 'parent123',
    welcome: 'Parent Portal',
    leftText: '"Monitoring your child\'s academic journey — stay informed, stay involved."',
  },
  '/students': {
    key: 'student',
    label: 'Student',
    demoEmail: 'angelo.reyes@nssc.edu.ph',
    demoPass: 'student123',
    welcome: 'Student Portal',
    leftText: '"Your grades, your schedule, your future — all in one place."',
  },
  '/teachers': {
    key: 'teacher',
    label: 'Teacher',
    demoEmail: 'ana.reyes@nssc.edu.ph',
    demoPass: 'teacher123',
    welcome: 'Teacher Portal',
    leftText: '"Manage your classes, track attendance, and inspire every day."',
  },
  '/admin': {
    key: 'admin',
    label: 'Admin',
    demoEmail: 'admin@nssc.edu.ph',
    demoPass: 'admin2025',
    welcome: 'Admin Portal',
    leftText: '"Full oversight of students, staff, and school operations."',
  },
}

const ACCENT = '#1E6B45'
const ACCENT_GOLD = '#C9A84C'
const BG_IMAGE = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const login = useStore(s => s.login)
  const currentUser = useStore(s => s.currentUser)

  const rolePath = Object.keys(ROLE_CONFIG).find(path => location.pathname.startsWith(path)) || '/parents'
  const config = ROLE_CONFIG[rolePath]

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const rehydrated = useHasHydrated()

  if (!rehydrated) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#F4F6F9' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ position: 'relative', width: '64px', height: '64px', margin: '0 auto 1.25rem' }}>
            <div style={{ position: 'absolute', inset: 0, border: `4px solid #E2E8F0`, borderTopColor: ACCENT, borderRadius: '50%', animation: 'spinRing 0.8s linear infinite' }} />
            <img src="/logo.png" alt="New Sinai" style={{ position: 'absolute', inset: '50%', transform: 'translate(-50%, -50%)', width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain' }} />
          </div>
          <style>{`@keyframes spinRing { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#718096', fontSize: '0.875rem', marginTop: '0.5rem' }}>Loading e-Skwela...</p>
        </div>
      </div>
    )
  }

  if (currentUser) {
    const dest = currentUser.role === 'parent' ? '/parents/dashboard'
      : currentUser.role === 'student' ? '/students/dashboard'
      : currentUser.role === 'admin' ? '/admin/dashboard'
      : '/teachers/dashboard'
    return <Navigate to={dest} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    const result = login(email, password, config.key)
    setLoading(false)
    if (result.success) {
      const dest = result.user.role === 'parent' ? '/parents/dashboard'
        : result.user.role === 'student' ? '/students/dashboard'
        : result.user.role === 'admin' ? '/admin/dashboard'
        : '/teachers/dashboard'
      navigate(dest)
    } else {
      setError('Invalid email or password. Please try again.')
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        .login-left {
          width: 44%;
          min-width: 360px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2.5rem;
          overflow: hidden;
        }
        .login-left-bg {
          position: absolute;
          inset: 0;
          background-image: url('${BG_IMAGE}');
          background-size: cover;
          background-position: center;
        }
        .login-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(10,30,18,0.93) 0%, rgba(18,55,32,0.88) 50%, rgba(10,25,15,0.95) 100%);
        }
        .login-left-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }
        .login-right { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem; background: #F4F6F9; }
        .login-card { background: white; border-radius: 24px; padding: 2.75rem; box-shadow: 0 20px 60px rgba(0,0,0,0.08); width: 100%; max-width: 440px; }
        .form-group { margin-bottom: 1.25rem; }
        .form-label { display: block; font-size: 0.875rem; font-weight: 600; color: #1A202C; margin-bottom: 0.4rem; }
        .form-input { width: 100%; padding: 0.85rem 1rem; border: 1.5px solid #E2E8F0; border-radius: 12px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none; transition: border-color 200ms, box-shadow 200ms; }
        .form-input:focus { border-color: ${ACCENT}; box-shadow: 0 0 0 3px ${ACCENT}20; }
        .error-box { background: #FFF5F5; border: 1px solid #FC8181; border-radius: 12px; padding: 0.85rem 1rem; color: #C53030; font-size: 0.875rem; margin-bottom: 1rem; }
        .submit-btn { width: 100%; padding: 1rem; background: ${ACCENT}; color: white; border: none; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: opacity 200ms; font-family: 'Inter', sans-serif; }
        .submit-btn:hover { opacity: 0.88; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .demo-box { background: #F4F6F9; border-radius: 12px; padding: 1rem; margin-top: 1.5rem; }
        .demo-label { font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; }
        .demo-cred { font-size: 0.78rem; color: #4A5568; font-family: monospace; display: block; margin-bottom: 0.35rem; }
        .pw-wrapper { position: relative; }
        .pw-toggle { position: absolute; right: 0.85rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: #718096; display: flex; align-items: center; }
        .spinner { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.35); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .login-left { display: none; } }
      `}</style>

      {/* Left panel */}
      <div className="login-left">
        <div className="login-left-bg" />
        <div className="login-left-overlay" />
        <div className="login-left-content">
          <img src="/logo.png" alt="New Sinai School and Colleges" style={{ width: 80, height: 80, objectFit: 'contain', borderRadius: '16px', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }} />
          <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: '#FFFFFF', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.2 }}>
            New Sinai School
          </div>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.6rem', color: ACCENT_GOLD, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            and Colleges
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            e-Skwela Portal — {config.label} Access
          </div>
          <div style={{ width: 48, height: 2, background: ACCENT_GOLD, opacity: 0.5, marginBottom: '2rem', borderRadius: 2 }} />
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '260px', fontStyle: 'italic' }}>
            {config.leftText}
          </p>
          <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
              © 2025 New Sinai School and Colleges · Sta. Rosa, Laguna
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="login-right">
        <div className="login-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <img src="/logo.png" alt="" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: '6px' }} />
            <span style={{ fontSize: '0.72rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              New Sinai School and Colleges
            </span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.3rem', fontFamily: "'Inter', sans-serif" }}>
            Sign in to {config.welcome}
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '1.75rem' }}>
            Enter your credentials to access your portal.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="pw-wrapper">
                <input type={showPassword ? 'text' : 'password'} className="form-input" style={{ paddingRight: '2.75rem' }} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="button" className="pw-toggle" onClick={() => setShowPassword(v => !v)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <div className="error-box">{error}</div>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <><span className="spinner" /> Signing in...</> : <><LogIn size={18} /> Sign In</>}
            </button>
          </form>

          <div className="demo-box">
            <div className="demo-label">Demo Credentials</div>
            <span className="demo-cred">{config.demoEmail}</span>
            <span className="demo-cred">{config.demoPass}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
