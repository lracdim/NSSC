import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Microscope, Stethoscope, Brain } from 'lucide-react'

const PROGRAMS = [
  {
    title: 'BS Medical Technology',
    grade: 'BSMedTech',
    icon: <Microscope size={28} />,
    desc: 'A four-year program preparing students for clinical laboratory practice. Graduates are eligible to take the Philippine Registry in Medical Technology licensure examination.',
    img: 'https://images.pexels.com/photos/5763170/pexels-photo-5763170.jpeg?w=600&q=80',
    highlights: [
      'Clinical laboratory rotations',
      'Histology & hematology',
      'Microbiology & immunology',
      'Clinical chemistry',
      'Board exam preparation',
    ],
    badge: 'PRC Accredited',
  },
  {
    title: 'BS Radiologic Technology',
    grade: 'BSRadTech',
    icon: <Stethoscope size={28} />,
    desc: 'Comprehensive training in diagnostic imaging modalities. Students gain hands-on clinical experience in partner hospitals with state-of-the-art equipment.',
    img: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=600&q=80',
    highlights: [
      'Diagnostic radiography',
      'MRI & CT imaging',
      'Radiation safety',
      'Patient care training',
      'Hospital internships',
    ],
    badge: 'PRC Accredited',
  },
  {
    title: 'BS Psychology',
    grade: 'BSPsych',
    icon: <Brain size={28} />,
    desc: 'A program exploring human behavior and mental processes. Prepares students for careers in counseling, human resources, research, or further studies in medicine and law.',
    img: 'https://images.pexels.com/photos/3810971/pexels-photo-3810971.jpeg?w=600&q=80',
    highlights: [
      'Psychological assessment',
      'Counseling techniques',
      'Research methodology',
      'Industrial psychology',
      'Graduate school prep',
    ],
    badge: 'CHED Recognized',
  },
]

const STATS = [
  { value: '98%', label: 'Board Pass Rate' },
  { value: '15+', label: 'Partner Hospitals' },
  { value: '24/7', label: 'Lab Access' },
  { value: '500+', label: 'College Alumni' },
]

export default function College() {
  const heroLabelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)
  const heroImgRef = useRef(null)

  useEffect(() => {
    const g = window.gsap
    if (!g) return
    const tl = g.timeline()
    if (heroLabelRef.current) tl.fromTo(heroLabelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.1)
    const lines = heroLinesRef.current.filter(Boolean)
    if (lines.length) tl.fromTo(lines, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.3)
    if (heroSubRef.current) tl.fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
    if (heroCtaRef.current) tl.fromTo(heroCtaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.9)
  }, [])

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#0A1910' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.72) 60%, rgba(18,55,30,0.62) 100%)' }} />
        <div className="px-6 lg:px-20" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '120px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>COLLEGE PROGRAMS</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '960px', width: '100%' }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Healthcare Careers</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Start Right Here.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem' }}>
            Three CHED-supervised programs. Board-focused curriculum. 98% first-time board exam passers. Your future in healthcare begins at NSSC.
          </p>
          <div ref={heroCtaRef} style={{ marginTop: '2rem' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
              View College Programs <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, i) => (
              <div key={i} className="card overflow-hidden flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'var(--accent-gold)', color: '#1A1A1A' }}>
                    {prog.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ color: 'var(--accent)' }}>{prog.icon}</span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {prog.title}
                    </h3>
                  </div>
                  <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{prog.grade}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
                    {prog.desc}
                  </p>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Program Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {prog.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-gold)', display: 'inline-block', flexShrink: 0 }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 0', background: 'var(--surface)' }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1E6B45, #165934)' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Start Your Healthcare Journey
          </h2>
          <p style={{ color: '#D1FAE5', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Applications are now open for SY 2025–2026. Take the first step toward a rewarding career in health sciences.
          </p>
          <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} className="btn-primary inline-flex" style={{ background: 'var(--accent-gold)', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>
            Enroll Now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
