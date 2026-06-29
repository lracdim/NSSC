import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Wrench, Settings, Cpu, HardHat, Zap, TrendingUp, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

const LEARN = [
  'Electrical systems wiring and troubleshooting',
  'Pneumatic and hydraulic systems servicing',
  'Programmable Logic Controller (PLC) programming',
  'Industrial machine preventive maintenance',
  'Safety procedures for industrial environments',
  'Technical documentation and reporting',
]

const CAREERS = [
  { icon: <Wrench size={24} />, title: 'Plant / Factory Technician', body: 'Maintain and repair production line equipment in manufacturing plants — the most direct entry-level career path for NC II graduates.' },
  { icon: <Settings size={24} />, title: 'Industrial Machine Maintenance Specialist', body: 'Specialize in preventive maintenance of large industrial machines in export processing zones and industrial parks.' },
  { icon: <Cpu size={24} />, title: 'Automation Technician', body: 'Work with automated production systems, PLCs, and robotic equipment in modern manufacturing facilities.' },
  { icon: <Zap size={24} />, title: 'Electrical and Electronics Technician', body: 'Combine mechatronics skills with electrical work — servicing motors, control panels, and electrical systems in factories.' },
  { icon: <HardHat size={24} />, title: 'OFW Industrial Technician — Japan, Singapore, Middle East', body: 'NC II holders are eligible for skilled worker visas in Japan, Singapore, and the Middle East — with higher salaries than domestic placements.' },
  { icon: <TrendingUp size={24} />, title: 'Production Line Supervisor (with experience)', body: 'With 3–5 years of experience, advance into supervisory roles managing technicians and production output.' },
]

const REQUIREMENTS = [
  'PSA Birth Certificate',
  'High School or SHS Diploma / Form 138',
  'Valid Government-Issued ID',
  '2×2 ID Photos — 2 copies',
  'Medical Certificate (fit to train)',
  'Accomplished Application Form',
]

export default function Mechatronics() {
  const breadcrumbRef = useRef(null)
  const labelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroStatsRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    document.title = 'Mechatronics Servicing NC II | TESDA Program at NSSC Sta. Rosa Laguna'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'NSSC offers TESDA-accredited Mechatronics Servicing NC II in Sta. Rosa, Laguna. 320 hours of hands-on training. Get certified and job-ready for industrial and factory careers.'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Mechatronics Servicing NC II', provider: { '@type': 'EducationalOrganization', name: 'New Sinai School and Colleges Sta. Rosa, Inc.', address: { '@type': 'PostalAddress', addressLocality: 'Sta. Rosa', addressRegion: 'Laguna', addressCountry: 'PH' } }, description: 'TESDA-accredited Mechatronics Servicing NC II — 320 hours of hands-on training in Sta. Rosa, Laguna.', timeToComplete: 'P5M', educationalLevel: 'Vocational' })
    document.head.appendChild(script)
    return () => { try { document.head.removeChild(script) } catch (e) {} }
  }, [])

  useEffect(() => {
    const g = window.gsap
    if (!g) return
    const tl = g.timeline()
    if (breadcrumbRef.current) tl.fromTo(breadcrumbRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0)
    if (labelRef.current) tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.15)
    const lines = heroLinesRef.current.filter(Boolean)
    if (lines.length) tl.fromTo(lines, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.3)
    if (heroSubRef.current) tl.fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
    if (heroStatsRef.current) tl.fromTo(heroStatsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.9)
    if (heroCtaRef.current) tl.fromTo(heroCtaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 1.0)
  }, [])

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '80vh', overflow: 'hidden', backgroundColor: '#0A1910' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 45%, rgba(0,0,0,0.30) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', paddingTop: '12rem', paddingBottom: '5rem' }}>
          <div ref={breadcrumbRef} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/tesda" style={{ color: 'inherit', textDecoration: 'none' }}>TESDA</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Mechatronics NC II</span>
          </div>
          <p ref={labelRef} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>TESDA PROGRAM · NC II CERTIFIED</p>
          <h1 style={{ margin: 0, maxWidth: 900 }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>BUILD.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>FIX.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>EARN.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 520, marginTop: '1.5rem' }}>
            Mechatronics Servicing NC II trains you to maintain and repair industrial machines and automated systems — one of the highest-demand technical skills in the Philippines and abroad.
          </p>
          <div ref={heroStatsRef} style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['320 Hours','Training Duration'],['NC II','National Certificate'],['TESDA','Accredited'],['High Demand','Local and OFW']].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#FFFFFF', lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div ref={heroCtaRef} style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', padding: '1rem 2rem', borderRadius: 0, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>Enroll Now <ArrowRight size={18} /></button>
            <a href="/about#contact" style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: 'white', padding: '1rem 2rem', borderRadius: 0, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'transparent' }}>Download Brochure</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — ABOUT ── */}
      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>ABOUT THE PROGRAM</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Technician the Modern Factory Cannot Live Without</h2>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '1rem' }}>Mechatronics is the integration of mechanical engineering, electronics, and computer systems. Mechatronics technicians service, repair, and maintain the industrial machines and automated production systems that Philippine and global factories depend on.</p>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '2rem' }}>At NSSC, our Mechatronics Servicing NC II program prepares students for TESDA national assessment through hands-on training in electrical systems, pneumatics, hydraulics, and programmable logic controllers (PLCs).</p>
              <p style={{ color: '#1E6B45', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>WHAT YOU WILL LEARN</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {LEARN.map(l => (
                  <div key={l} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.5 }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 500 }}>
              <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mechatronics training" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — PROGRAM DETAILS ── */}
      <section style={{ background: '#FFFFFF', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ background: '#1E6B45', borderRadius: 16, padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[['320 Hours','Total Training'],['4–5 Months','Duration'],['TESDA NC II','Certificate Awarded'],['Mon–Fri','Schedule']].map(([v,l], i) => (
              <div key={l} style={{ textAlign: 'center', padding: '0 1.5rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#FFFFFF', lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — CAREER PATHS ── */}
      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div className="container">
          <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>WHERE YOU CAN WORK</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '2.5rem' }}>Career Paths for Mechatronics NC II Graduates</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {CAREERS.map(c => (
              <div key={c.title} style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: 16, border: '1px solid #D4D4CC' }}>
                <div style={{ color: '#1E6B45', marginBottom: '0.75rem' }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.65 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — REQUIREMENTS ── */}
      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>ADMISSION REQUIREMENTS</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#1A1A1A', lineHeight: 1.2, marginBottom: '1.5rem' }}>Who Can Apply</h2>
              {REQUIREMENTS.map(r => (
                <div key={r} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '0.95rem' }}>{r}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#F1F1EB', padding: '2rem', borderRadius: 16, border: '1px solid #D4D4CC' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Ready to Apply?</h3>
              <p style={{ color: '#5A5A5A', lineHeight: 1.75, marginBottom: '1.25rem' }}>Slots fill quickly. Contact us now to reserve your place in the next batch.</p>
              {[[<Phone size={16} />, '(049) 123-4567'],[<Mail size={16} />, 'nssc@example.com'],[<Clock size={16} />, 'Mon–Fri, 8:00 AM – 4:00 PM']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: '#5A5A5A', fontSize: '0.875rem' }}>
                  <span style={{ color: '#1E6B45' }}>{icon}</span> {text}
                </div>
              ))}
              <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ display: 'block', textAlign: 'center', background: '#1E6B45', color: 'white', padding: '1rem', borderRadius: 12, fontWeight: 700, fontSize: '0.9rem', marginTop: '1.5rem', textDecoration: 'none' }}>Enroll Now →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — TESTIMONIAL ── */}
      <section style={{ background: '#2C2C2C', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 750, margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '6rem', color: '#1E6B45', opacity: 0.35, lineHeight: 0.8, display: 'block', marginBottom: '0.5rem', userSelect: 'none' }}>"</span>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', color: '#FFFFFF', lineHeight: 1.45, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            I took Mechatronics NC II right after Senior High. Six months later I was hired as a plant technician in Laguna's technopark. The training was hard but practical — everything I learned, I use every single day.
          </p>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>Ryan dela Torre</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.25rem' }}>Mechatronics NC II Graduate, Plant Technician at a Laguna Export Processing Zone company</p>
        </div>
      </section>

    </div>
  )
}
