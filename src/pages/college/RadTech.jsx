import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Zap, Brain, Plane, Activity, Heart, Wrench, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

const MODALITIES = [
  { n: '01', title: 'X-Ray / Radiography', body: 'The most fundamental imaging modality — used for bone fractures, chest conditions, and initial diagnostic screening.' },
  { n: '02', title: 'Computed Tomography (CT Scan)', body: 'Cross-sectional imaging that produces detailed 3D views of internal organs, blood vessels, and soft tissues.' },
  { n: '03', title: 'Magnetic Resonance Imaging (MRI)', body: 'High-resolution imaging of the brain, spine, joints, and soft tissues without radiation — using magnetic fields.' },
  { n: '04', title: 'Ultrasound / Sonography', body: 'Real-time imaging used in obstetrics, cardiology, and abdominal diagnostics — safe and non-invasive.' },
  { n: '05', title: 'Mammography', body: 'Specialized breast imaging for cancer detection and screening — a critical tool in women\'s health.' },
  { n: '06', title: 'Radiation Therapy', body: 'Using controlled radiation to treat cancer — one of the most specialized and high-paying RadTech career paths.' },
]

const CAREERS = [
  { icon: <Zap size={24} />, title: 'Hospital Radiologic Technologist', body: 'Work in hospital radiology departments — taking X-rays, CT scans, and other diagnostic images ordered by physicians.' },
  { icon: <Brain size={24} />, title: 'Medical Imaging Specialist', body: 'Specialize in one modality — CT, MRI, or ultrasound — and become a sought-after technician in diagnostic centers.' },
  { icon: <Plane size={24} />, title: 'OFW Healthcare Worker — US, UK, Canada', body: 'Work in hospitals and imaging centers abroad. RadTech is one of the most portable healthcare licenses in the world.' },
  { icon: <Activity size={24} />, title: 'Radiation Therapy Technologist', body: 'Work alongside oncologists to deliver precise radiation treatment to cancer patients — one of the highest-paying RadTech specializations.' },
  { icon: <Heart size={24} />, title: 'Ultrasound / Sonography Technician', body: 'Perform ultrasound imaging in hospitals, OB-GYN clinics, and cardiac centers — a high-demand and well-compensated specialization.' },
  { icon: <Wrench size={24} />, title: 'Medical Equipment Specialist', body: 'Work for medical equipment companies maintaining and calibrating imaging machines — combining technical and healthcare expertise.' },
]

const FACTS = [
  '4-year CHED-supervised program',
  'Clinical hospital affiliations in Laguna and Metro Manila',
  '6 imaging modalities covered',
  'Board exam preparation from Year 1',
  'Strong OFW employment pathway — US, UK, Canada',
  'High demand in public and private hospitals nationwide',
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

export default function RadTech() {
  const breadcrumbRef = useRef(null)
  const labelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroStatsRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    document.title = 'BS Radiologic Technology | NSSC College Sta. Rosa Laguna'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'NSSC offers CHED-supervised BS Radiologic Technology in Sta. Rosa, Laguna. Train to operate X-ray, CT scan, MRI, and ultrasound — and build a healthcare career locally or abroad.'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Bachelor of Science in Radiologic Technology', provider: { '@type': 'EducationalOrganization', name: 'New Sinai School and Colleges Sta. Rosa, Inc.', address: { '@type': 'PostalAddress', addressLocality: 'Sta. Rosa', addressRegion: 'Laguna', addressCountry: 'PH' } }, description: '4-year CHED-supervised Radiologic Technology program in Sta. Rosa, Laguna.', timeToComplete: 'P4Y', educationalLevel: 'College' })
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
          <img src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 45%, rgba(0,0,0,0.30) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', paddingTop: '12rem', paddingBottom: '5rem' }}>
          <div ref={breadcrumbRef} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/college" style={{ color: 'inherit', textDecoration: 'none' }}>College</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>BS Radiologic Technology</span>
          </div>
          <p ref={labelRef} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>COLLEGE PROGRAM · CHED SUPERVISED</p>
          <h1 style={{ margin: 0, maxWidth: 900 }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>SEE WHAT</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>OTHERS CANNOT.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>SAVE THEM.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 520, marginTop: '1.5rem' }}>
            Radiologic Technologists operate X-ray, CT scan, MRI, and ultrasound equipment — producing the images that allow doctors to diagnose and treat disease.
          </p>
          <div ref={heroStatsRef} style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['4 Years','Program Duration'],['High Demand','Locally and Abroad'],['CHED','Supervised'],['Clinical','Hospital Affiliations']].map(([v,l]) => (
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
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Eyes of Modern Medicine</h2>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '1rem' }}>Radiologic Technologists are the healthcare professionals who make the invisible visible. They operate the most advanced medical imaging technology in the world — X-ray, CT scan, MRI, mammography, and ultrasound — and produce the diagnostic images that doctors depend on to detect cancer, fractures, organ disease, and more.</p>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '2rem' }}>At NSSC, our BSRadTech program combines strong imaging science theory with hands-on clinical training in accredited hospitals across Laguna and Metro Manila.</p>
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
              <img src="https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Radiologic Technology" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — MODALITIES ── */}
      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>WHAT YOU WILL LEARN</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1 }}>Six Imaging Modalities You Will Master</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {MODALITIES.map(m => (
              <div key={m.n} style={{ background: '#F1F1EB', padding: '1.5rem', borderRadius: 16, border: '1px solid #D4D4CC' }}>
                <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: 9999, display: 'inline-block', marginBottom: '0.75rem' }}>{m.n}</span>
                <h3 style={{ fontWeight: 700, color: '#1A1A1A', fontSize: '1rem', marginBottom: '0.5rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.65 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — CAREER HIGHLIGHT ── */}
      <section style={{ background: '#1E6B45', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Oswald', sans-serif", fontSize: '10rem', fontWeight: 800, color: 'white', opacity: 0.07, lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>X-RAY</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>CAREER OUTLOOK</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1rem' }}>Radiologic Technologists Are Among the Most In-Demand Healthcare Professionals Abroad.</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75 }}>The demand for licensed Radiologic Technologists is growing globally — particularly in the United States, United Kingdom, and Canada, where aging populations require more diagnostic imaging. NSSC BSRadTech graduates are trained to meet international clinical standards.</p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['4 Years','Full Program'],['6','Imaging Modalities'],['PH & Abroad','Career Destinations']].map(([v,l]) => (
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
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '2.5rem' }}>Career Paths for Licensed Radiologic Technologists</h2>
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
            RadTech opened a career I never expected. I now work in a hospital in Canada operating CT and MRI equipment. NSSC gave me the foundation to get here.
          </p>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>Kristine Bautista</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.25rem' }}>BSRadTech Graduate, Licensed Radiologic Technologist, working in Canada</p>
        </div>
      </section>

    </div>
  )
}
