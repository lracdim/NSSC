import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, Brain, Briefcase, GraduationCap, FlaskConical, Users, Heart, BookOpen, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

const AREAS = [
  { icon: <Brain size={28} />, title: 'Clinical Psychology', body: 'Study mental health assessment, diagnosis, and therapeutic interventions. The foundation for counseling and psychiatry careers.', tags: ['Counselor', 'Therapist', 'Researcher'] },
  { icon: <Briefcase size={28} />, title: 'Industrial-Organizational Psychology', body: 'Apply psychology in the workplace — talent acquisition, employee motivation, organizational behavior, and performance management.', tags: ['HR Specialist', 'Recruiter', 'OD Consultant'] },
  { icon: <GraduationCap size={28} />, title: 'Educational Psychology', body: 'Understand how students learn, behave, and develop — essential for teachers, guidance counselors, and school administrators.', tags: ['Guidance Counselor', 'School Psychologist'] },
  { icon: <FlaskConical size={28} />, title: 'Research & Experimental Psychology', body: 'Design studies, collect data, and contribute to the growing body of psychological knowledge — in academia, government, and industry.', tags: ['Researcher', 'Data Analyst', 'Academic'] },
]

const CAREERS = [
  { icon: <Users size={24} />, title: 'HR Specialist / Recruiter', body: 'Apply psychological principles in talent acquisition, employee screening, and organizational development in companies of all sizes.' },
  { icon: <Heart size={24} />, title: 'Guidance Counselor', body: 'Work in schools and universities helping students navigate academic, social, and personal challenges.' },
  { icon: <Brain size={24} />, title: 'Clinical Psychologist (with MA/MS)', body: 'With graduate studies, practice clinical assessment, psychotherapy, and mental health support in hospitals or private practice.' },
  { icon: <FlaskConical size={24} />, title: 'Researcher / Data Analyst', body: 'Design and conduct behavioral research in academic institutions, government agencies, or private research firms.' },
  { icon: <BookOpen size={24} />, title: 'Child Development Specialist', body: 'Work in early childhood education centers, pediatric hospitals, and family development programs.' },
  { icon: <Briefcase size={24} />, title: 'Social Worker / Case Manager', body: 'Support individuals and families in need through government agencies, NGOs, and social welfare organizations.' },
]

const FACTS = [
  '4-year CHED-supervised program',
  'Clinical, industrial, educational, and social tracks',
  'Strong industry demand in HR and mental health',
  'Eligible for graduate school in Psychology and Counseling',
  'Practicum hours in real organizations',
  'Graduates work across healthcare, business, and education',
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

export default function Psychology() {
  const breadcrumbRef = useRef(null)
  const labelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroStatsRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    document.title = 'BS Psychology | NSSC College Program Sta. Rosa Laguna'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'NSSC offers CHED-supervised BS Psychology in Sta. Rosa, Laguna. Study clinical, industrial, educational, and social psychology. Build a career in HR, counseling, or research.'
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Course', name: 'Bachelor of Science in Psychology', provider: { '@type': 'EducationalOrganization', name: 'New Sinai School and Colleges Sta. Rosa, Inc.', address: { '@type': 'PostalAddress', addressLocality: 'Sta. Rosa', addressRegion: 'Laguna', addressCountry: 'PH' } }, description: '4-year CHED-supervised Psychology program in Sta. Rosa, Laguna.', timeToComplete: 'P4Y', educationalLevel: 'College' })
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
          <img src="https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.70) 45%, rgba(0,0,0,0.30) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', paddingTop: '12rem', paddingBottom: '5rem' }}>
          <div ref={breadcrumbRef} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/college" style={{ color: 'inherit', textDecoration: 'none' }}>College</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>BS Psychology</span>
          </div>
          <p ref={labelRef} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>COLLEGE PROGRAM · CHED SUPERVISED</p>
          <h1 style={{ margin: 0, maxWidth: 900 }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>UNDERSTAND</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>PEOPLE.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>CHANGE LIVES.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 520, marginTop: '1.5rem' }}>
            Psychology is the science of human behavior — and NSSC BSPsych equips graduates with the knowledge to apply it in counseling, HR, research, and beyond.
          </p>
          <div ref={heroStatsRef} style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['4 Years','Program Duration'],['CHED','Supervised'],['4 Areas','Of Specialization'],['High Demand','HR & Mental Health']].map(([v,l]) => (
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
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Science of Human Behavior</h2>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '1rem' }}>Psychology is one of the most versatile college degrees in the Philippines. A BS Psychology graduate is trained to understand why people think, feel, and behave the way they do — and how to apply that understanding in real-world settings.</p>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '2rem' }}>At NSSC, our BSPsych program covers clinical, industrial, educational, and social psychology. Graduates leave equipped for careers in HR, counseling, research, and social work — or for graduate school in Psychology, Counseling, or Psychiatry.</p>
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
              <img src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Psychology students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — SPECIALIZATION AREAS ── */}
      <section style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>SPECIALIZATION AREAS</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1 }}>Four Areas of Psychology You Will Study</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {AREAS.map(a => (
              <div key={a.title} style={{ background: '#F1F1EB', padding: '2rem', borderRadius: 16, border: '1px solid #D4D4CC', borderLeft: '4px solid #1E6B45' }}>
                <div style={{ color: '#1E6B45', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.35rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{a.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.75, marginBottom: '1rem' }}>{a.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {a.tags.map(t => (
                    <span key={t} style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: 9999 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — VERSATILITY HIGHLIGHT ── */}
      <section style={{ background: '#1E6B45', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Oswald', sans-serif", fontSize: '10rem', fontWeight: 800, color: 'white', opacity: 0.07, lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>PSY</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>VERSATILITY</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1rem' }}>One Degree. Dozens of Careers.</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75 }}>BS Psychology is one of the most versatile degrees in the Philippines — recognized by employers in healthcare, business, education, government, and beyond. NSSC BSPsych graduates have gone on to work as HR Managers, School Counselors, Researchers, and Clinical Psychologists.</p>
          <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['4','Specialization Areas'],['Multiple Industries','Career Options'],['Graduate School','Ready']].map(([v,l]) => (
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
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '2.5rem' }}>Career Paths for BS Psychology Graduates</h2>
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
            BSPsych at NSSC did not just teach me theories. It taught me how to listen, how to observe, and how to understand people at a deeper level. Those skills changed how I work and how I live.
          </p>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>Sofia Mendoza</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.25rem' }}>BSPsych Graduate, now HR Manager at a Laguna-based manufacturing company</p>
        </div>
      </section>

    </div>
  )
}
