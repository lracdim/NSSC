import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Microscope, Droplet, FlaskConical, Plane, Building2, Stethoscope, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

const YEARS = [
  { n: '01', badge: 'YEAR 1', title: 'Foundation Sciences', subjects: 'Anatomy & Physiology · General Chemistry · Biology · Mathematics for MedTech · Computer Fundamentals', body: 'Building the scientific foundation everything else stands on.' },
  { n: '02', badge: 'YEAR 2', title: 'Core Laboratory Sciences', subjects: 'Hematology · Microbiology · Parasitology · Biochemistry · Clinical Lab Methods', body: 'First hands-on laboratory work. Students begin analyzing real specimens.' },
  { n: '03', badge: 'YEAR 3', title: 'Advanced Sciences + Hospital Immersion', subjects: 'Immunology · Blood Banking · Clinical Microscopy · Histopathology · Hospital Affiliation', body: 'Students enter accredited hospitals and work in real diagnostic laboratories.' },
  { n: '04', badge: 'YEAR 4', title: 'Board Prep + Full Internship', subjects: 'Comprehensive Review · Hospital Internship · Mock Board Exams · Capstone Research', body: "The most intensive year. Where NSSC's 98% board passing rate is built." },
]

const CAREERS = [
  { icon: <Microscope size={24} />, title: 'Clinical Laboratory Technologist', body: 'Work in hospital and clinic laboratories — the most common career path for licensed MedTechs in the Philippines.' },
  { icon: <Droplet size={24} />, title: 'Blood Bank Technician', body: 'Work in Red Cross, hospital blood banks, and transfusion medicine centers — a critical and highly specialized role.' },
  { icon: <FlaskConical size={24} />, title: 'Research Scientist', body: 'Join pharmaceutical companies, government research institutions, and university laboratories in drug and disease research.' },
  { icon: <Plane size={24} />, title: 'OFW Healthcare Worker', body: 'Work in hospitals and diagnostic centers in the US, Canada, Saudi Arabia, UAE, and other countries with strong demand for MedTechs.' },
  { icon: <Building2 size={24} />, title: 'Laboratory Manager', body: 'With experience, advance to supervisory and management roles overseeing laboratory operations, staff, and quality control.' },
  { icon: <Stethoscope size={24} />, title: 'Medical Sales Representative', body: 'Represent diagnostic equipment and reagent companies — combining healthcare knowledge with sales and business development.' },
]

const FACTS = [
  '4-year CHED-supervised program',
  'Clinical hospital affiliations included',
  'Board-focused curriculum from Year 1',
  '98% first-time board passing rate',
  'Strong OFW employment pathway',
  'Licensed MedTechs in PH and abroad',
]

const REQUIREMENTS = [
  'Senior High School Card / Form 138',
  'Good Moral Certificate',
  'PSA Birth Certificate (original + photocopy)',
  'Medical Certificate (fit to study)',
  '2×2 ID Photos — 4 copies',
  'Accomplished Application Form',
  'College Entrance Exam — schedule at the Registrar',
]

export default function MedTech() {
  const breadcrumbRef = useRef(null)
  const labelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroStatsRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    document.title = 'BS Medical Technology | NSSC College Sta. Rosa Laguna – 98% Board Passing Rate'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'NSSC offers CHED-supervised BS Medical Technology in Sta. Rosa, Laguna with a 98% board exam passing rate. Train to become a licensed Medical Technologist.'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Bachelor of Science in Medical Technology', provider: { '@type': 'EducationalOrganization', name: 'New Sinai School and Colleges Sta. Rosa, Inc.', address: { '@type': 'PostalAddress', addressLocality: 'Sta. Rosa', addressRegion: 'Laguna', addressCountry: 'PH' } }, description: '4-year CHED-supervised Medical Technology program with 98% board exam passing rate in Sta. Rosa, Laguna.', timeToComplete: 'P4Y', educationalLevel: 'College' })
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
          <img src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 45%, rgba(0,0,0,0.30) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', paddingTop: '12rem', paddingBottom: '5rem' }}>
          <div ref={breadcrumbRef} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/college" style={{ color: 'inherit', textDecoration: 'none' }}>College</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>BS Medical Technology</span>
          </div>
          <p ref={labelRef} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>COLLEGE PROGRAM · CHED SUPERVISED</p>
          <h1 style={{ margin: 0, maxWidth: 900 }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>DIAGNOSE.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>ANALYZE.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>SAVE LIVES.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 520, marginTop: '1.5rem' }}>
            Train to become a licensed Medical Technologist — one of the most in-demand healthcare professionals in the Philippines and abroad.
          </p>
          <div ref={heroStatsRef} style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['98%','Board Passing Rate'],['4 Years','Program Duration'],['100%','Employment Within 6 Months'],['CHED','Supervised']].map(([v,l]) => (
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
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Scientists Behind Every Diagnosis</h2>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '1rem' }}>Medical Technologists work in clinical laboratories — analyzing blood, urine, tissue, and body fluids to detect disease, infection, and abnormalities. When a doctor orders a CBC, a blood culture, or a urinalysis, a Medical Technologist runs it, analyzes it, and reports the result. Without that result, the doctor cannot diagnose.</p>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '2rem' }}>At NSSC, our BSMedTech program combines rigorous laboratory training with board exam preparation from Day 1 — so graduates don't just pass the board exam. They excel in it.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {FACTS.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 500 }}>
              <img src="https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Medical Technology Laboratory" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — YEAR BY YEAR ── */}
      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>CURRICULUM OVERVIEW</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1 }}>Four Years. One Goal. Board Exam Ready.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {YEARS.map(y => (
              <div key={y.n} style={{ background: '#F1F1EB', padding: '1.5rem', borderRadius: 16, border: '1px solid #D4D4CC', position: 'relative', overflow: 'hidden', transition: 'all 300ms', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F1F1EB'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#1E6B45' }} />
                <div style={{ position: 'absolute', top: 12, right: 12, fontFamily: "'Oswald', sans-serif", fontSize: '3.5rem', fontWeight: 800, color: '#1E6B45', opacity: 0.10, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{y.n}</div>
                <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 9999, display: 'inline-block', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{y.badge}</span>
                <h3 style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{y.title}</h3>
                <p style={{ color: '#1E6B45', fontWeight: 600, fontSize: '0.72rem', marginBottom: '0.75rem', lineHeight: 1.5 }}>{y.subjects}</p>
                <p style={{ color: '#5A5A5A', fontSize: '0.85rem', lineHeight: 1.65 }}>{y.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — BOARD EXAM HIGHLIGHT ── */}
      <section style={{ background: '#1E6B45', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Oswald', sans-serif", fontSize: '12rem', fontWeight: 800, color: 'white', opacity: 0.07, lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>98%</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>BOARD EXAM TRACK RECORD</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1rem' }}>One of the Highest Board Passing Rates in Laguna.</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75 }}>NSSC BSMedTech Batch 2024 posted a historic 100% first-time board exam passing rate. Our cumulative rate stands at 98% — built year after year through a curriculum that treats board preparation as a daily practice, not a last-minute review.</p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['100%','Batch 2024 Passing Rate'],['98%','Cumulative Passing Rate'],['18','Licensure Passers, Batch 2024']].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2.5rem', color: '#FFFFFF', lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CAREER PATHS ── */}
      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div className="container">
          <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>WHERE YOU CAN WORK</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '2.5rem' }}>Career Paths for Licensed Medical Technologists</h2>
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

      {/* ── SECTION 5 — REQUIREMENTS ── */}
      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>ADMISSION REQUIREMENTS</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#1A1A1A', lineHeight: 1.2, marginBottom: '1.5rem' }}>What You Need to Apply</h2>
              {REQUIREMENTS.map(r => (
                <div key={r} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '0.95rem' }}>{r}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#F1F1EB', padding: '2rem', borderRadius: 16, border: '1px solid #D4D4CC' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Ready to Apply?</h3>
              <p style={{ color: '#5A5A5A', lineHeight: 1.75, marginBottom: '1.25rem' }}>Application for S.Y. 2025–2026 is now open. Talk to our admissions team to get started.</p>
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

      {/* ── SECTION 6 — TESTIMONIAL ── */}
      <section style={{ background: '#2C2C2C', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 750, margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '6rem', color: '#1E6B45', opacity: 0.35, lineHeight: 0.8, display: 'block', marginBottom: '0.5rem', userSelect: 'none' }}>"</span>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', color: '#FFFFFF', lineHeight: 1.45, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            I passed the board exam on my first try. NSSC's faculty pushed us hard — but they also believed in us every single day. That belief made the difference.
          </p>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>James Reyes</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.25rem' }}>Licensed Medical Technologist, NSSC Batch 2023</p>
        </div>
      </section>

    </div>
  )
}
