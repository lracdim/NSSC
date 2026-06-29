import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, User } from 'lucide-react'

const NAV = [
  { label: 'Home', path: '/' },
  {
    label: 'Academics',
    path: '/academics',
    children: [
      { label: 'Preschool', path: '/preschool' },
      { label: 'Elementary', path: '/elementary' },
      { label: 'Junior High School', path: '/junior-high' },
      { label: 'Senior High School', path: '/senior-high', divider: true },
    ],
  },
  {
    label: 'College',
    path: '/college',
    children: [
      { label: 'BS Medical Technology', path: '/college/medtech' },
      { label: 'BS Radiologic Technology', path: '/college/radtech' },
      { label: 'BS Psychology', path: '/college/psychology' },
      { label: 'Mechatronics NC II', path: '/tesda/mechatronics', divider: true },
      { label: 'Caregiving NC II', path: '/tesda/caregiving' },
    ],
  },
  { label: 'e-Skwela', path: '/enroll' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
]

const SIGN_IN = [
  { label: 'Parent Portal', path: '/parents' },
  { label: 'Student Portal', path: '/students' },
  { label: 'Teacher Portal', path: '/teachers' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [signInOpen, setSignInOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const signInRef = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 80
      setIsTop(atTop)
      const nav = navRef.current
      if (!nav) return
      if (!atTop || !isHome) {
        nav.style.background = 'rgba(241,241,235,0.97)'
        nav.style.backdropFilter = 'blur(12px)'
        nav.style.webkitBackdropFilter = 'blur(12px)'
        nav.style.borderBottom = '1px solid #D4D4CC'
      } else {
        nav.style.background = 'transparent'
        nav.style.backdropFilter = 'none'
        nav.style.webkitBackdropFilter = 'none'
        nav.style.borderBottom = 'none'
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  useEffect(() => {
    setMobileOpen(false)
    setSignInOpen(false)
    setMobileExpanded(null)
  }, [location])

  // Close Sign In dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (signInRef.current && !signInRef.current.contains(e.target)) setSignInOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const dark = isHome && isTop
  const accentColor = dark ? '#4ADE80' : '#1E6B45'
  const baseColor = dark ? 'rgba(255,255,255,0.85)' : '#4B5563'

  return (
    <nav ref={navRef} id="main-navbar" className="fixed top-0 inset-x-0 z-50" style={{ transition: 'none' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" style={{ flexShrink: 0 }}>
          <img src="/logo.png" alt="NSSC Logo" style={{ width: 36, height: 36, objectFit: 'contain', display: 'block', flexShrink: 0 }} />
          <div>
            <span className="font-bold text-xl leading-none block tracking-wide" style={{ color: dark ? '#FFFFFF' : 'var(--accent)' }}>NEW SINAI</span>
            <span className="text-[10px] leading-none hidden sm:block" style={{ color: dark ? 'rgba(255,255,255,0.55)' : '#9CA3AF' }}>School and Colleges</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map(item =>
            item.children ? (
              <DropdownItem key={item.label} item={item} dark={dark} accentColor={accentColor} baseColor={baseColor} currentPath={location.pathname} />
            ) : (
              <NavItem key={item.path} item={item} dark={dark} accentColor={accentColor} baseColor={baseColor} active={location.pathname === item.path} />
            )
          )}
        </div>

        {/* Sign In dropdown */}
        <div ref={signInRef} className="hidden lg:block" style={{ position: 'relative' }}>
          <button
            onClick={() => setSignInOpen(v => !v)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1rem',
              border: dark ? '1.5px solid rgba(255,255,255,0.45)' : '1.5px solid #1E6B45',
              color: dark ? 'white' : '#1E6B45',
              background: 'transparent',
              borderRadius: 0,
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <User size={14} />
            Sign In
            <ChevronDown size={12} style={{ transform: signInOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
          {signInOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', right: 0,
              background: '#FFFFFF', borderRadius: 8,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid #E5E7EB',
              minWidth: 180, zIndex: 100, overflow: 'hidden',
            }}>
              {SIGN_IN.map(opt => (
                <Link key={opt.label} to={opt.path}
                  style={{ display: 'block', padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: 500, color: '#374151', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#1E6B45' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden p-2 rounded-lg" style={{ color: dark ? 'white' : '#374151' }} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{ background: 'rgba(241,241,235,0.98)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #D4D4CC' }} className="lg:hidden absolute top-16 inset-x-0 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map(item => (
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium"
                    style={{ color: '#374151', background: 'transparent', cursor: 'pointer', border: 'none' }}
                  >
                    {item.label}
                    <ChevronDown size={16} style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                      {item.children.map(child => (
                        <div key={child.label}>
                          {child.divider && <div style={{ height: 1, background: '#E5E7EB', margin: '0.25rem 1rem 0.5rem' }} />}
                          <Link to={child.path}
                            className="block px-4 py-2 rounded-lg text-sm font-medium"
                            style={{ color: '#1E6B45', textDecoration: 'none' }}>
                            {child.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.path} to={item.path}
                  className="px-4 py-3 rounded-lg text-base font-medium"
                  style={{ color: location.pathname === item.path ? '#1E6B45' : '#374151', background: location.pathname === item.path ? 'rgba(30,107,69,0.06)' : 'transparent', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              )
            ))}
            <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: '1px solid #D4D4CC' }}>
              {SIGN_IN.map(opt => (
                <Link key={opt.label} to={opt.path}
                  className="px-4 py-3 rounded-lg text-base font-medium text-center"
                  style={{ color: '#1E6B45', border: '1.5px solid #1E6B45', textDecoration: 'none' }}>
                  {opt.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavItem({ item, dark, accentColor, baseColor, active }) {
  const [hovered, setHovered] = useState(false)
  const show = active || hovered
  return (
    <Link to={item.path}
      style={{ position: 'relative', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em', color: show ? accentColor : baseColor, padding: '0.5rem 0.6rem', transition: 'color 200ms ease', textDecoration: 'none', display: 'inline-block' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {item.label}
      <span style={{ position: 'absolute', bottom: 2, left: '0.6rem', right: '0.6rem', height: '2px', width: show ? 'calc(100% - 1.2rem)' : '0%', background: accentColor, transition: 'width 200ms ease', display: 'block' }} />
    </Link>
  )
}

function DropdownItem({ item, dark, accentColor, baseColor, currentPath }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)
  const active = currentPath === item.path || item.children.some(c => c.path === currentPath)

  const enter = () => { clearTimeout(timer.current); setOpen(true) }
  const leave = () => { timer.current = setTimeout(() => setOpen(false), 120) }

  return (
    <div style={{ position: 'relative' }} onMouseEnter={enter} onMouseLeave={leave}>
      <button style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
        fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em',
        color: active || open ? accentColor : baseColor,
        padding: '0.5rem 0.6rem', background: 'none', border: 'none',
        cursor: 'pointer', transition: 'color 200ms ease', position: 'relative',
      }}>
        {item.label}
        <ChevronDown size={13} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms', flexShrink: 0 }} />
        <span style={{ position: 'absolute', bottom: 2, left: '0.6rem', height: '2px', width: active || open ? 'calc(100% - 1rem)' : '0%', background: accentColor, transition: 'width 200ms ease', display: 'block' }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0,
          background: '#FFFFFF', borderRadius: 8,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          border: '1px solid #E5E7EB',
          minWidth: 210, zIndex: 100, overflow: 'hidden', padding: '0.4rem 0',
        }}>
          {item.children.map((child, i) => (
            <div key={i}>
              {child.divider && <div style={{ height: 1, background: '#E5E7EB', margin: '0.35rem 0' }} />}
              <Link to={child.path}
                style={{ display: 'block', padding: '0.6rem 1.1rem', fontSize: '0.875rem', fontWeight: 500, color: '#374151', textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB'; e.currentTarget.style.color = '#1E6B45' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}>
                {child.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
