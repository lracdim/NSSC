import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Wrench } from 'lucide-react'

const LEVELS = [
  {
    label: 'Preschool',
    tag: 'Ages 3–5',
    badge: 'DepEd Recognized',
    img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?w=600&q=80',
    desc: 'Toddler Casa, Junior Casa, and Kinder programs that nurture curiosity, creativity, and a love for learning from the very start.',
    icon: <BookOpen size={20} />,
    link: '/preschool',
    linkLabel: 'Learn More',
  },
  {
    label: 'Elementary',
    tag: 'Grades 1–6',
    badge: 'DepEd Recognized',
    img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?w=600&q=80',
    desc: 'A values-integrated curriculum that builds academic excellence, strong moral character, and foundational skills across all subjects.',
    icon: <BookOpen size={20} />,
    link: '/elementary',
    linkLabel: 'Learn More',
  },
  {
    label: 'Junior High School',
    tag: 'Grades 7–10',
    badge: 'DepEd Recognized',
    img: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?w=600&q=80',
    desc: 'Develop critical thinking, leadership, and the confidence every teenager needs to thrive in Senior High School and beyond.',
    icon: <Users size={20} />,
    link: '/junior-high',
    linkLabel: 'Learn More',
  },
  {
    label: 'Senior High School',
    tag: 'Grades 11–12',
    badge: 'DepEd Recognized',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    desc: "Choose from ABM, GAS, HUMSS, STEM, and TVL tracks — each tailored to your child's passion and career path.",
    icon: <Award size={20} />,
    tracks: ['ABM', 'GAS', 'HUMSS', 'STEM', 'TVL'],
    link: '/senior-high',
    linkLabel: 'View SHS Strands',
  },
  {
    label: 'College',
    tag: 'Tertiary',
    badge: 'CHED Supervised',
    img: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&q=80',
    desc: 'BS Medical Technology, BS Radiologic Technology, and BS Psychology — healthcare and social science programs with strong board exam track records.',
    icon: <Award size={20} />,
    link: '/college',
    linkLabel: 'View College Programs',
    programs: ['BSMedTech', 'BSRadTech', 'BSPsych'],
  },
  {
    label: 'TESDA Programs',
    tag: 'Certificate',
    badge: 'TESDA Accredited',
    img: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&q=80',
    desc: 'Mechatronics Servicing NC II and Caregiving NC II — technical-vocational certificates that open career doors fast.',
    icon: <Wrench size={20} />,
    programs: ['Mechatronics Servicing NC II', 'Caregiving NC II'],
    link: '/tesda',
    linkLabel: 'Learn More',
  },
]

export default function Academics() {
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
          <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.72) 60%, rgba(18,55,30,0.62) 100%)' }} />
        <div className="px-6 lg:px-20" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '120px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>ACADEMIC PROGRAMS</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '960px', width: '100%' }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Every Stage.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Every Learner.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Every Dream.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem' }}>
            NSSC offers a complete academic ladder from Preschool to College — each program designed to meet your child exactly where they are and take them where they need to go.
          </p>
          <div ref={heroCtaRef} style={{ marginTop: '2rem' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ background: '#1E6B45', color: 'white', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Explore All Programs <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEVELS.map((lvl, i) => (
              <div key={i} className="card overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={lvl.img}
                    alt={lvl.label}
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }} />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--accent-gold)', color: '#1A1A1A' }}>
                    {lvl.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: 'var(--accent)' }}>{lvl.icon}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{lvl.label}</h3>
                  </div>
                  <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>{lvl.tag}</span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1 }}>{lvl.desc}</p>
                  {lvl.tracks && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {lvl.tracks.map(t => <span key={t} className="badge" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                    </div>
                  )}
                  {lvl.programs && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {lvl.programs.map(p => <span key={p} className="badge" style={{ fontSize: '0.7rem' }}>{p}</span>)}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '0.625rem', marginTop: '1.25rem' }}>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} style={{ flex: 1, background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', padding: '0.65rem 1rem', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                      Enroll Now <ArrowRight size={14} />
                    </button>
                    <Link to={lvl.link || '/academics'} style={{ flex: 1, border: '1.5px solid var(--accent)', color: 'var(--accent)', borderRadius: '8px', padding: '0.65rem 1rem', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', textDecoration: 'none', background: 'transparent' }}>
                      Learn More
                    </Link>
                  </div>
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
            Find the Right Program for Your Child
          </h2>
          <p style={{ color: '#D1FAE5', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Enrollment for S.Y. 2025–2026 is now open. Talk to our admissions team to find the best fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} className="btn-primary" style={{ background: 'var(--accent-gold)', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>
              Enroll Now <ArrowRight size={18} />
            </button>
            <Link to="/about#contact" className="btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
