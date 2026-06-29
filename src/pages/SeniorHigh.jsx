import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight, FlaskConical, Briefcase, BookOpen, Globe, Wrench, GraduationCap, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

const STRANDS = [
  {
    code: 'STEM',
    track: 'Academic Track',
    title: 'Science, Technology, Engineering & Mathematics',
    body: 'The most rigorous academic strand — designed for students aiming for medicine, engineering, architecture, computer science, and research. Heavy on advanced math, physics, chemistry, and biology.',
    icon: <FlaskConical size={28} />,
    subjects: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Biology', 'Research & Capstone Project'],
    careers: ['Medical Doctor', 'Engineer', 'Architect', 'Software Developer', 'Researcher'],
    color: '#1E6B45',
  },
  {
    code: 'ABM',
    track: 'Academic Track',
    title: 'Accountancy, Business & Management',
    body: 'For students who want to lead — in business, finance, and management. Builds financial literacy, entrepreneurship skills, and corporate acumen from Grade 11.',
    icon: <Briefcase size={28} />,
    subjects: ['Business Mathematics', 'Applied Economics', 'Fundamentals of ABM', 'Business Ethics', 'Entrepreneurship'],
    careers: ['Accountant', 'Business Owner', 'Financial Analyst', 'Marketing Manager', 'HR Professional'],
    color: '#C9A84C',
  },
  {
    code: 'HUMSS',
    track: 'Academic Track',
    title: 'Humanities & Social Sciences',
    body: 'For students drawn to people, society, language, and culture. Ideal for those pursuing law, education, journalism, public service, and psychology.',
    icon: <BookOpen size={28} />,
    subjects: ['Philippine Literature', 'World Literature', 'Philosophy', 'Community Engagement', 'Creative Writing'],
    careers: ['Lawyer', 'Journalist', 'Social Worker', 'Teacher', 'Psychologist'],
    color: '#7C3AED',
  },
  {
    code: 'GAS',
    track: 'Academic Track',
    title: 'General Academic Strand',
    body: 'A flexible, well-rounded strand for students still exploring their path. Covers subjects from across the academic tracks — giving you time to decide without falling behind.',
    icon: <Globe size={28} />,
    subjects: ['Applied Economics', 'Humanities', 'Organization & Management', 'Research in Daily Life', 'General Mathematics'],
    careers: ['Any college degree', 'Liberal arts', 'Public administration', 'Business', 'Education'],
    color: '#2563EB',
  },
  {
    code: 'TVL',
    track: 'Technical-Vocational',
    title: 'Technical-Vocational-Livelihood',
    body: 'Hands-on, skills-based training that prepares students for TESDA NC II certification and immediate employment — or college. The fastest path from Senior High to a paycheck.',
    icon: <Wrench size={28} />,
    subjects: ['Cookery NC II', 'BPP NC II', 'RAC (PACU) NC I', 'Housekeeping NC II', 'Professional Pastry & Patisserie'],
    careers: ['Chef / Baker', 'Hotel Staff', 'Entrepreneur', 'OFW (skilled worker)', 'Culinary Arts graduate'],
    color: '#EA580C',
  },
]

const REQUIREMENTS = [
  'Junior High School Card (Form 138) — Grade 10',
  'Certificate of Good Moral Character',
  'PSA Birth Certificate (original + photocopy)',
  'Medical/Dental Certificate (fit to study)',
  '2×2 ID Photos — 4 copies',
  'Senior High School Entrance Exam result',
  'Accomplished Application / Enrollment Form',
]

const FACTS = [
  'DepEd-recognized Senior High School program',
  '5 strands covering all career directions',
  'TESDA NC II certification for TVL graduates',
  'Experienced and licensed subject teachers',
  'Strong college entrance exam track record',
  'Small class sizes for personalized learning',
]

const openModal = () => window.dispatchEvent(new CustomEvent('openEnrollModal'))

export default function SeniorHigh() {
  const breadcrumbRef = useRef(null)
  const labelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroStatsRef = useRef(null)
  const heroCtaRef = useRef(null)

  useEffect(() => {
    document.title = 'Senior High School | NSSC Sta. Rosa Laguna — STEM, ABM, HUMSS, GAS, TVL'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = 'NSSC Senior High School in Sta. Rosa, Laguna offers Grade 11–12 with STEM, ABM, HUMSS, GAS, and TVL strands. DepEd recognized. Enroll now for S.Y. 2025–2026.'
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
          <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.35) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', paddingTop: '12rem', paddingBottom: '5rem' }}>
          <div ref={breadcrumbRef} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/academics" style={{ color: 'inherit', textDecoration: 'none' }}>Academics</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Senior High School</span>
          </div>
          <p ref={labelRef} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>DEPED K-12 · GRADES 11–12</p>
          <h1 style={{ margin: 0, maxWidth: 900 }}>
            <div ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>FIND YOUR</div>
            <div ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>STRAND.</div>
            <div ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem,5vw,5.5rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}>OWN YOUR FUTURE.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 520, marginTop: '1.5rem' }}>
            Senior High School at NSSC offers 5 strands designed to match every student's passion — whether you're heading to college, a career, or both.
          </p>
          <div ref={heroStatsRef} style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['5 Strands','To Choose From'],['Grades 11–12','K-12 Program'],['DepEd','Recognized'],['NC II','For TVL Graduates']].map(([v,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#FFFFFF', lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{l}</div>
              </div>
            ))}
          </div>
          <div ref={heroCtaRef} style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button onClick={openModal} style={{ background: '#1E6B45', color: 'white', padding: '1rem 2rem', borderRadius: 0, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Enroll Now <ArrowRight size={18} />
            </button>
            <a href="#strands" style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: 'white', padding: '1rem 2rem', borderRadius: 0, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'transparent' }}>
              See All Strands
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — ABOUT ── */}
      <section style={{ background: '#F1F1EB', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>ABOUT THE PROGRAM</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.5rem' }}>Two Years That Define Your Direction</h2>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '1rem' }}>Senior High School at NSSC covers Grades 11 and 12 — the two most important years of basic education. These are the years when students choose a strand that aligns with their future plans, develop higher-order thinking skills, and build the academic and personal foundation for college or work.</p>
              <p style={{ color: '#5A5A5A', lineHeight: 1.8, marginBottom: '2rem' }}>Whether you're already set on a career or still figuring it out, NSSC's five strands give you the flexibility to succeed on your terms.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {FACTS.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <CheckCircle size={16} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 480 }}>
              <img src="https://images.pexels.com/photos/8423039/pexels-photo-8423039.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Senior High students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — STRANDS ── */}
      <section id="strands" style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#1E6B45', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>STRANDS OFFERED</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: '#1A1A1A', lineHeight: 1.1 }}>Five Strands. One School. Your Choice.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {STRANDS.map((s, i) => (
              <div key={s.code} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderLeft: `5px solid ${s.color}`, borderRadius: 16, padding: '2rem', display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                {/* Left: Code + Icon */}
                <div>
                  <div style={{ color: s.color, marginBottom: '0.5rem' }}>{s.icon}</div>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2.5rem', color: s.color, lineHeight: 1, display: 'block' }}>{s.code}</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9CA3AF', display: 'block', marginTop: '0.3rem' }}>{s.track}</span>
                </div>
                {/* Middle: Title + Body + Subjects */}
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.75, marginBottom: '1rem' }}>{s.body}</p>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1E6B45', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Key Subjects</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {s.subjects.map(sub => (
                      <span key={sub} style={{ background: 'rgba(30,107,69,0.07)', color: '#1E6B45', fontSize: '0.72rem', fontWeight: 500, padding: '0.2rem 0.65rem', borderRadius: 9999 }}>{sub}</span>
                    ))}
                  </div>
                </div>
                {/* Right: Career paths */}
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Career Paths</p>
                  {s.careers.map(c => (
                    <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0, display: 'inline-block' }} />
                      <span style={{ fontSize: '0.85rem', color: '#374151' }}>{c}</span>
                    </div>
                  ))}
                  <button onClick={openModal} style={{ marginTop: '1rem', background: s.color, color: 'white', border: 'none', padding: '0.55rem 1.25rem', borderRadius: 8, fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.04em' }}>
                    Enroll in {s.code}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHY NSSC SHS ── */}
      <section style={{ background: '#1E6B45', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: "'Oswald', sans-serif", fontSize: '12rem', fontWeight: 800, color: 'white', opacity: 0.05, lineHeight: 1, userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap' }}>SHS</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>WHY NSSC SENIOR HIGH</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem,4vw,3rem)', color: '#FFFFFF', lineHeight: 1.1, marginBottom: '1.5rem' }}>The Right School For This Chapter.</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>NSSC Senior High graduates go on to top Philippine universities — UP, Ateneo, La Salle, UST — and earn TESDA certifications that open doors to immediate employment or OFW careers. Small class sizes mean teachers know every student by name.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', textAlign: 'center' }}>
            {[['5','Strands Offered'],['DepEd','Recognized'],['NC II','TVL Certification']].map(([v,l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '1.5rem' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2.5rem', color: '#FFFFFF', lineHeight: 1 }}>{v}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>{l}</div>
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
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2rem)', color: '#1A1A1A', lineHeight: 1.2, marginBottom: '1.5rem' }}>What You Need to Enroll</h2>
              {REQUIREMENTS.map(r => (
                <div key={r} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={18} style={{ color: '#1E6B45', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '0.95rem' }}>{r}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#F1F1EB', padding: '2rem', borderRadius: 16, border: '1px solid #D4D4CC' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Ready to Enroll?</h3>
              <p style={{ color: '#5A5A5A', lineHeight: 1.75, marginBottom: '1.25rem' }}>S.Y. 2025–2026 enrollment is now open. Slots are limited per strand — don't wait.</p>
              {[[<Phone size={16} />, '(049) 123-4567'],[<Mail size={16} />, 'nssc@example.com'],[<Clock size={16} />, 'Mon–Fri, 8:00 AM – 4:00 PM']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: '#5A5A5A', fontSize: '0.875rem' }}>
                  <span style={{ color: '#1E6B45' }}>{icon}</span> {text}
                </div>
              ))}
              <button onClick={openModal} style={{ display: 'block', width: '100%', textAlign: 'center', background: '#1E6B45', color: 'white', padding: '1rem', borderRadius: 12, fontWeight: 700, fontSize: '0.9rem', marginTop: '1.5rem', border: 'none', cursor: 'pointer' }}>
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — TESTIMONIAL ── */}
      <section style={{ background: '#2C2C2C', padding: '5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 750, margin: '0 auto', padding: '0 1.5rem' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '6rem', color: '#1E6B45', opacity: 0.35, lineHeight: 0.8, display: 'block', marginBottom: '0.5rem', userSelect: 'none' }}>"</span>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', color: '#FFFFFF', lineHeight: 1.45, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            I enrolled in STEM at NSSC because I wanted to be a doctor. My teachers pushed me harder than I expected — and I passed the UPCAT on my first try.
          </p>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem' }}>Jasmine Reyes</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.25rem' }}>NSSC SHS STEM Graduate, now a BS Biology student at UP Los Baños</p>
        </div>
      </section>

    </div>
  )
}
