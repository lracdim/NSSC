import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, Heart, Clock, Award } from 'lucide-react'

const PROGRAMS = [
  {
    title: 'Mechatronics Servicing NC II',
    badge: 'TESDA Accredited',
    duration: '320 Hours',
    img: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&q=80',
    desc: 'A technical program covering the installation, operation, and maintenance of automated and electromechanical systems used in modern industries.',
    competencies: [
      'Install and configure electromechanical components',
      'Maintain automated production equipment',
      'Troubleshoot mechatronics systems',
      'Perform preventive maintenance procedures',
      'Apply OHS policies in technical environments',
    ],
    careers: ['Automation Technician', 'Maintenance Engineer', 'Equipment Specialist', 'Production Technician'],
  },
  {
    title: 'Caregiving NC II',
    badge: 'TESDA Accredited',
    duration: '786 Hours',
    img: 'https://images.pexels.com/photos/3810971/pexels-photo-3810971.jpeg?w=600&q=80',
    desc: 'A healthcare support program that trains students to provide quality personal care and support to elderly, persons with disabilities, and patients in home or institutional settings.',
    competencies: [
      'Respond to safety and emergency situations',
      'Provide personal care to clients',
      'Foster social, intellectual, and spiritual well-being',
      'Support care of infants and toddlers',
      'Maintain a safe and clean environment',
    ],
    careers: ['Caregiver (Local)', 'Overseas Caregiver', 'Home Care Aide', 'Elder Care Worker', 'Disability Support Worker'],
  },
]

const WHY = [
  { icon: <Clock size={22} />, title: 'Short Completion Time', desc: 'Both programs can be completed in less than a year, giving you job-ready skills quickly.' },
  { icon: <Award size={22} />, title: 'Government Certificate', desc: 'Earn a TESDA National Certificate (NC II) — recognized by employers locally and internationally.' },
  { icon: <ArrowRight size={22} />, title: 'Immediate Employment', desc: 'NC II holders are in high demand — both programs have strong local and overseas employment prospects.' },
  { icon: <Heart size={22} />, title: 'Affordable Pathway', desc: 'TESDA programs offer a faster, more affordable route to stable employment than a 4-year degree.' },
]

export default function TESDA() {
  const heroLabelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)

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
          <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=1600&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.72) 60%, rgba(18,55,30,0.62) 100%)' }} />
        <div className="px-6 lg:px-20" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '120px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>TESDA PROGRAMS · NC II</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '960px', width: '100%' }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Skills That</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Open Doors.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem' }}>
            NSSC's TESDA-accredited programs give you a nationally recognized NC II certificate and the practical skills employers are looking for — in less than a year.
          </p>
          <div ref={heroCtaRef} style={{ marginTop: '2rem' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Enroll Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Programs</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>Two NC II Programs</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
              Both programs are TESDA-accredited, hands-on, and lead to immediate employment opportunities locally and abroad.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROGRAMS.map((prog, i) => (
              <div key={i} className="card overflow-hidden flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.5s ease' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span style={{ background: 'var(--accent-gold)', color: '#1A1A1A', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>{prog.badge}</span>
                    <span style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', backdropFilter: 'blur(4px)' }}>{prog.duration}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{prog.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{prog.desc}</p>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Core Competencies</h4>
                  <ul className="space-y-1.5 mb-5">
                    {prog.competencies.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-gold)', display: 'inline-block', flexShrink: 0, marginTop: 5 }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Career Paths</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.careers.map(c => <span key={c} className="badge" style={{ fontSize: '0.7rem' }}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TESDA */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Why TESDA?</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>A Faster Path to Employment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>{w.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{w.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label">Admission Requirements</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.5rem 0 1.5rem' }}>Who Can Apply</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                TESDA programs are open to high school graduates, ALS completers, and out-of-school youth. No college degree required.
              </p>
              {[
                ['Form 138 / Grade 12 Card', 'Or ALS Certificate of Completion.'],
                ['PSA Birth Certificate', 'Original and photocopy.'],
                ['Good Moral Certificate', 'From your previous school or barangay.'],
                ['2×2 ID Photos', '4 copies, white background.'],
                ['Medical Certificate', 'With fit-to-study notation.'],
              ].map(([req, note]) => (
                <div key={req} className="flex gap-4 mb-4">
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{req}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.15rem' }}>{note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card p-8" style={{ background: 'var(--accent)', border: 'none' }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Enrollment Open</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>Start Your TESDA Journey</h3>
              <p style={{ color: '#D1FAE5', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Classes are offered in morning and afternoon schedules to accommodate working students and fresh graduates alike. Inquire now to reserve your slot.
              </p>
              <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: 'var(--accent-gold)', color: '#1A1A1A', borderRadius: 0, padding: '0.875rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
                Enroll Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1E6B45, #165934)' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>Your Career Starts Here</h2>
          <p style={{ color: '#D1FAE5', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Don't wait years for a diploma. Earn your NC II certificate and start working in less than a year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} className="btn-primary" style={{ background: 'var(--accent-gold)', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>Enroll Now <ArrowRight size={18} /></button>
            <a href="/about#contact" className="btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>Ask a Question</a>
          </div>
        </div>
      </section>
    </div>
  )
}
