import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, Award, MapPin, Star, Building, ChevronDown } from 'lucide-react'

const AUDIENCE_PILLS = ["I'm a Parent", "I'm a Student", "I'm a Graduate", "I'm Looking to Partner"]

const PROGRAMS = [
  { img: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Preschool', body: 'Toddler Casa, Junior Casa, and Kinder - nurturing curiosity and building strong foundations from age 3.', tag: 'Ages 3-5', link: '/preschool' },
  { img: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Elementary', body: 'Grades 1-6 with a values-integrated curriculum that builds academic excellence and strong moral character.', tag: 'Grades 1-6', link: '/elementary' },
  { img: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Junior High School', body: 'Grades 7-10 designed to develop critical thinking, leadership, and the confidence every teenager needs.', tag: 'Grades 7-10', link: '/junior-high' },
  { img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', title: 'Senior High School', body: "ABM, GAS, HUMSS, STEM, and TVL tracks - tailored to your child's passion and career path.", tag: 'Grades 11-12', link: '/senior-high' },
  { img: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&q=80', title: 'College', body: 'BSMedTech, BSRadTech, and BSPsych - healthcare and social science programs with strong board exam track records.', tag: 'Tertiary', link: '/college' },
  { img: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'TESDA Programs', body: 'Mechatronics Servicing NC II and Caregiving NC II - technical-vocational certificates that open doors fast.', tag: 'Certificate', link: '/tesda' },
]

const STATS = [
  { num: '20+', label: 'Years of Excellence', target: 20, suffix: '+' },
  { num: '5,000+', label: 'Graduates and Counting', target: 5000, suffix: '+' },
  { num: '12', label: 'Academic Programs Offered', target: 12, suffix: '' },
  { num: '98%', label: 'Board Exam Passers', target: 98, suffix: '%' },
]

const BOARD_BOXES = [
  { num: '100%', label: 'Batch 2024 Board Passing Rate', sub: 'BS Medical Technology · PRC Licensure Exam' },
  { num: '98%', label: 'Cumulative Board Passing Rate', sub: 'Across all BSMedTech batches' },
  { num: 'Top 10%', label: 'Regional Board Performance', sub: 'BS Radiologic Technology' },
]

const ACCREDIT_CARDS = [
  {
    Icon: GraduationCap,
    title: 'DepEd Recognized',
    sub: 'Department of Education',
    badge: 'Preschool · Elementary · JHS · SHS',
    body: 'All Basic Education programs — from Preschool through Senior High School — are formally recognized by the Department of Education under the K-12 curriculum.',
  },
  {
    Icon: Building,
    title: 'CHED Supervised',
    sub: 'Commission on Higher Education',
    badge: 'BSMedTech · BSRadTech · BSPsych',
    body: "New Sinai's College programs — BS Medical Technology, BS Radiologic Technology, and BS Psychology — operate under the supervision of CHED, ensuring quality tertiary education standards.",
  },
  {
    Icon: Award,
    title: 'TESDA Accredited',
    sub: 'Technical Education & Skills Development Authority',
    badge: 'Mechatronics NC II · Caregiving NC II',
    body: 'Our Technical-Vocational programs are accredited by TESDA — ensuring that NC II certificates earned at New Sinai are recognized nationally and accepted by employers locally and abroad.',
  },
]

const CAMPUS_PHOTOS = [
  {
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=900',
    label: 'Graduation Rites',
    style: { gridColumn: '1 / 2', gridRow: '1 / 3' }
  },
  {
    img: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Student Leadership',
    style: { gridColumn: '2 / 3', gridRow: '1 / 2' }
  },
  {
    img: 'https://images.pexels.com/photos/8617984/pexels-photo-8617984.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Science Competitions',
    style: { gridColumn: '3 / 4', gridRow: '1 / 2' }
  },
  {
    img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900',
    label: 'Academic Excellence',
    style: { gridColumn: '2 / 4', gridRow: '2 / 3' }
  },
]

const FAQ_ITEMS = [
  { q: 'When is enrollment open for S.Y. 2025–2026?', a: 'Enrollment for S.Y. 2025–2026 is now open for all grade levels — from Preschool to College. Visit our Registrar\'s Office Monday to Friday, 8:00 AM to 4:00 PM. Early enrollees receive priority section placement.' },
  { q: 'What are the tuition fees at New Sinai?', a: 'Tuition fees vary by level and program. We offer flexible payment options including quarterly installments. Please visit the Registrar\'s Office or contact us at (049) 123-4567 for the current fee schedule. Scholarship programs are also available.' },
  { q: 'Does New Sinai offer scholarships?', a: 'Yes. New Sinai partners with government scholarship programs including DepEd vouchers for Senior High School students, CHED grants for college programs, and TESDA scholarships for technical-vocational courses. Ask our registrar for eligibility requirements.' },
  { q: "Is New Sinai's diploma recognized for college admission?", a: 'Absolutely. New Sinai is a DepEd-recognized institution, and all Basic Education graduates receive official diplomas and Form 138 that are accepted by all colleges and universities in the Philippines. Our College programs are supervised by CHED.' },
  { q: "What strand should my child take in Senior High?", a: "The right strand depends on your child's college course and career goals. We offer ABM, STEM, HUMSS, GAS, and TVL tracks. Our guidance counselors offer free consultations to help your family decide. Visit the school or call us to book a session." },
  { q: 'Can I enroll my child mid-year or as a transferee?', a: "Yes, New Sinai accepts transferees subject to slot availability and submission of required documents including Form 138, Good Moral Certificate, and PSA Birth Certificate. Contact our Registrar's Office to check availability for your child's grade level." },
]

const TICKER_ITEMS = [
  '🏆 100% Board Exam Passing Rate — BSMedTech Batch 2024',
  '🥇 District Science Quiz Bee Champions — All 4 JHS Levels',
  '🎓 312 Graduates — Commencement 2025',
  '📚 20+ Years of Holistic Education',
  '🌟 5,000+ Graduates Nationwide',
  '✅ DepEd · CHED · TESDA Accredited',
  '📍 Sta. Rosa, Laguna\'s Trusted School',
]

const TESTIMONIALS = [
  { stars: 5, quote: "New Sinai gave my daughter more than a diploma. She graduated with confidence, discipline, and a heart to serve. I can't imagine sending her anywhere else.", name: 'Maria Santos', role: 'Parent of BSMedTech Graduate, Batch 2023', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80' },
  { stars: 5, quote: "I passed the board exam on my first try. New Sinai's faculty pushed us hard, but they also believed in us. That made all the difference.", name: 'James Reyes', role: 'BSMedTech Graduate, Licensed Medical Technologist', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80' },
  { stars: 5, quote: 'The values I learned at New Sinai shaped who I am today. From Grade 1 to Senior High - every teacher genuinely cared about my growth as a person.', name: 'Angelica Cruz', role: 'HUMSS Graduate, now studying Political Science at UP', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80' },
]

const NEWS = [
  { tag: 'Enrollment', date: 'June 15, 2025', title: 'S.Y. 2025-2026 Enrollment Now Open for All Grade Levels', body: 'New Sinai is now accepting enrollment applications for the upcoming school year. Early enrollees receive priority section placement.', link: '/news/sy-2025-2026-enrollment-now-open' },
  { tag: 'Achievement', date: 'March 22, 2025', title: 'New Sinai BSMedTech Batch 2024 Posts 100% Board Exam Passing Rate', body: 'All 18 graduates from our Medical Technology program passed the September 2024 board examination - a historic first for New Sinai.', link: '/news/bsmedtech-batch-2024-100-percent-board-passing' },
  { tag: 'Event', date: 'February 10, 2025', title: 'New Sinai Graduation Rites 2025: 312 New Graduates Take the Stage', body: 'The New Sinai Commencement Exercises celebrated another milestone as 312 students received their diplomas and certificates.', link: '/news/nssc-graduation-rites-2025' },
]

const MARQUEE_ITEMS = ['DepEd Recognized', 'CHED Supervised', 'TESDA Accredited', '20+ Years of Excellence', '5,000+ Graduates', 'Sta. Rosa, Laguna', 'BSMedTech', 'BSRadTech', 'BSPsych', 'Caregiving NC II', 'ABM', 'STEM', 'HUMSS', 'GAS', 'TVL Track', 'Holistic Education']

// CSS injected once
const GLOBAL_CSS = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
  @keyframes scroll-line {
    0% { height: 0; opacity: 0; }
    50% { height: 48px; opacity: 1; }
    100% { height: 48px; opacity: 0; }
  }
  @keyframes fadeUpCard {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .accredit-card {
    opacity: 0;
    animation: fadeUpCard 0.55s ease both;
  }
  .accredit-card:nth-child(1) { animation-delay: 0.1s; }
  .accredit-card:nth-child(2) { animation-delay: 0.25s; }
  .accredit-card:nth-child(3) { animation-delay: 0.4s; }
  .campus-item {
    opacity: 0;
    animation: fadeUpCard 0.5s ease both;
  }
  .campus-item:nth-child(1) { animation-delay: 0.05s; }
  .campus-item:nth-child(2) { animation-delay: 0.12s; }
  .campus-item:nth-child(3) { animation-delay: 0.18s; }
  .campus-item:nth-child(4) { animation-delay: 0.24s; }
  .campus-item:nth-child(5) { animation-delay: 0.3s; }
  .campus-item img { transition: transform 400ms ease; }
  .campus-item:hover img { transform: scale(1.06); }
  .campus-item .photo-overlay { opacity: 0; transition: opacity 300ms ease; }
  .campus-item:hover .photo-overlay { opacity: 1; }
  .news-card {
    display: flex;
    flex-direction: column;
    background: #F1F1EB;
    border: 1px solid #D4D4CC;
    border-radius: 1rem;
    padding: 1.5rem;
    transition: border-color 250ms, box-shadow 250ms;
  }
  .news-card:hover {
    border-color: #1E6B45;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
  .test-card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #E2E8F0;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .test-card .quote-body { flex: 1; }
  .test-card .avatar-row { margin-top: auto; }
`

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null)
  const heroImgRef = useRef(null)
  const heroLabelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)
  const heroStatsRef = useRef(null)
  const cardsRef = useRef(null)
  const testRef = useRef(null)
  const statRefs = useRef([])
  const boardRef = useRef(null)
  const answerRefs = useRef([])
  const statAnimated = useRef(false)

  // Inject global CSS once
  useEffect(() => {
    const id = 'home-global-css'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.textContent = GLOBAL_CSS
      document.head.appendChild(style)
    }
  }, [])

  useEffect(() => {
    const g = window.gsap
    const ST = window.ScrollTrigger
    if (!g || !ST) return
    g.registerPlugin(ST)

    // Lenis smooth scroll
    let lenis
    if (window.Lenis) {
      lenis = new window.Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
      g.ticker.add(time => lenis.raf(time * 1000))
      g.ticker.lagSmoothing(0)
      lenis.on('scroll', ST.update)
    }

    // Hero timeline
    const heroTl = g.timeline()
    if (heroImgRef.current) heroTl.fromTo(heroImgRef.current, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0)
    if (heroLabelRef.current) heroTl.fromTo(heroLabelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
    const lines = heroLinesRef.current.filter(Boolean)
    if (lines.length) heroTl.fromTo(lines, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }, 0.4)
    if (heroSubRef.current) heroTl.fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.9)
    if (heroCtaRef.current) heroTl.fromTo(heroCtaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 1.1)
    if (heroStatsRef.current && heroStatsRef.current.children.length) {
      heroTl.fromTo(Array.from(heroStatsRef.current.children), { opacity: 0, x: 40 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out' }, 0.8)
    }

    // Section headline wipes
    document.querySelectorAll('.section-headline').forEach(h2 => {
      g.fromTo(h2,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power2.out', scrollTrigger: { trigger: h2, start: 'top 88%', once: true } }
      )
    })

    // Program cards stagger
    if (cardsRef.current) {
      g.fromTo(Array.from(cardsRef.current.children),
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', once: true } }
      )
    }

    // Testimonial cards stagger
    if (testRef.current) {
      g.fromTo(Array.from(testRef.current.children),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: testRef.current, start: 'top 85%', once: true } }
      )
    }

    // Stat counters — fire ONCE only
    statRefs.current.forEach(el => {
      if (!el) return
      const tgt = parseFloat(el.dataset.target)
      const sfx = el.dataset.suffix || ''
      const obj = { v: 0 }
      g.to(obj, {
        v: tgt,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate() {
          const n = Math.round(obj.v)
          el.textContent = sfx === '%' ? n + '%' : n >= 1000 ? n.toLocaleString() + sfx : n + sfx
        },
        onComplete() {
          // Ensure final value is exact
          el.textContent = sfx === '%' ? tgt + '%' : tgt >= 1000 ? tgt.toLocaleString() + sfx : tgt + sfx
        }
      })
    })

    // Hero parallax
    if (heroImgRef.current) {
      g.to(heroImgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: heroImgRef.current.closest('section'), start: 'top top', end: 'bottom top', scrub: true }
      })
    }

    // Board exam boxes
    if (boardRef.current) {
      g.fromTo(Array.from(boardRef.current.children),
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: boardRef.current, start: 'top 82%', once: true } }
      )
    }

    return () => {
      lenis?.destroy()
      ST.getAll?.()?.forEach(s => s.kill())
    }
  }, [])

  // FAQ animation
  useEffect(() => {
    const g = window.gsap
    if (!g || faqOpen === null) return
    const el = answerRefs.current[faqOpen]
    if (!el) return
    g.fromTo(el, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' })
    return () => { g.killTweensOf(el) }
  }, [faqOpen])

  const toggleFaq = (i) => {
    if (faqOpen === i) {
      const g = window.gsap
      const el = answerRefs.current[i]
      if (g && el) g.to(el, { height: 0, opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => setFaqOpen(null) })
      else setFaqOpen(null)
    } else {
      const g = window.gsap
      if (g && faqOpen !== null && answerRefs.current[faqOpen]) {
        g.to(answerRefs.current[faqOpen], { height: 0, opacity: 0, duration: 0.2, ease: 'power2.in' })
      }
      setFaqOpen(i)
    }
  }

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#0A1910' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <img
            ref={heroImgRef}
            src="https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.65) 65%, rgba(18,55,30,0.3) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '80px 5rem 5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem' }}>
          {/* Left */}
          <div style={{ flex: 1, maxWidth: '600px', minWidth: 0 }}>
            <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>STA. ROSA, LAGUNA</span>
            </div>
            <h1 style={{ margin: 0 }}>
              {['WHERE EVERY', 'CHILD BECOMES', 'HOLISTIC.'].map((line, i) => (
                <div
                  key={i}
                  ref={el => { heroLinesRef.current[i] = el }}
                  style={{ color: i === 2 ? '#4ADE80' : '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2.8rem, 4.8vw, 5.2rem)', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' }}
                >
                  {line}
                </div>
              ))}
            </h1>
            <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '480px', marginTop: '1.5rem' }}>
              New Sinai School and Colleges has shaped over 5,000 graduates in Sta. Rosa, Laguna. From Preschool through College, we build character, confidence, and careers — not just diplomas.
            </p>
            <div ref={heroCtaRef} style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))}
                style={{ background: '#1E6B45', color: 'white', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background 200ms, transform 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#165934'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1E6B45'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                ENROLL FOR S.Y. 2025–2026 →
              </button>
              <Link
                to="/academics"
                style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}
              >
                EXPLORE PROGRAMS
              </Link>
            </div>
          </div>
          {/* Right stats */}
          <div ref={heroStatsRef} style={{ display: 'flex', flexDirection: 'column', flexShrink: 0, width: '220px', gap: '1.75rem' }}>
            {[{ value: '20+ YEARS', label: 'OF EXCELLENCE' }, { value: '5,000+', label: 'GRADUATES' }, { value: '98%', label: 'BOARD EXAM PASSERS' }, { value: 'DEPED · CHED · TESDA', label: 'FULLY ACCREDITED' }].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: '#4ADE80', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✓</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.25em' }}>SCROLL</span>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)', animation: 'scroll-line 1.5s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── AUDIENCE NAV ─────────────────────────────────────── */}
      <section style={{ padding: '1.5rem 0', background: 'var(--accent)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ textAlign: 'center', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'white', marginBottom: '1rem' }}>Who are you?</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {AUDIENCE_PILLS.map(p => (
              <button key={p}
                style={{ borderRadius: '9999px', padding: '0.6rem 1.5rem', fontWeight: 600, fontSize: '0.875rem', background: '#fff', color: 'var(--accent)', border: 'none', cursor: 'pointer', transition: 'all 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--accent)' }}
              >{p}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ padding: '2rem 1.5rem', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <span
                  ref={el => { statRefs.current[i] = el }}
                  data-target={s.target}
                  data-suffix={s.suffix}
                  style={{ display: 'block', fontWeight: 800, fontSize: '3.5rem', color: 'var(--accent)', lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
                >{s.num}</span>
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARD EXAM RESULTS ───────────────────────────────── */}
      <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', background: '#1E6B45' }}>
        <div style={{ position: 'absolute', right: '-1rem', top: '-1rem', fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: '11rem', color: 'white', opacity: 0.06, pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>98%</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>PROVEN TRACK RECORD</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1, margin: 0 }}>Our Graduates Don&apos;t Just Pass. They Excel.</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.75, marginTop: '1rem', maxWidth: '480px' }}>
                New Sinai BSMedTech Batch 2024 posted a historic 100% first-time board exam passing rate. Our cumulative rate across all batches stands at 98% — built through a board-focused curriculum from Day 1, not a last-minute review.
              </p>
              <Link to="/college"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid white', color: 'white', borderRadius: '9999px', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, marginTop: '2rem', textDecoration: 'none', transition: 'all 200ms' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1E6B45' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
              >View College Programs →</Link>
            </div>
            <div ref={boardRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {BOARD_BOXES.map((box, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '1.25rem 1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: '2.5rem', color: 'white', lineHeight: 1 }}>{box.num}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{box.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginTop: '0.2rem' }}>{box.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="section-label">Academic Programs</span>
          <h2 className="section-headline" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>A School for Every Stage of Learning</h2>
          <p style={{ marginTop: '0.75rem', maxWidth: '560px', color: 'var(--text-secondary)' }}>From your child&apos;s first classroom to a college degree — New Sinai walks with every learner, every step of the way.</p>
          <div ref={cardsRef} style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {PROGRAMS.map(p => (
              <Link key={p.title} to={p.link} className="card overflow-hidden" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ height: '12rem', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="badge mb-2">{p.tag}</span>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{p.body}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '1rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NEW SINAI ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" alt="New Sinai Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', borderRadius: '0.75rem', padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 500, background: '#fff', color: 'var(--text-primary)', boxShadow: 'var(--shadow-md)' }}>Established 2001</div>
          </div>
          <div>
            <span className="section-label">Why Choose New Sinai</span>
            <h2 className="section-headline" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-primary)' }}>More Than a School. A Community That Cares.</h2>
            <p style={{ marginTop: '1rem', marginBottom: '2rem', maxWidth: '480px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
              At New Sinai, we believe education is not just about grades. It is about forming young people who are ready for life — academically prepared, spiritually grounded, and socially responsible.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                [GraduationCap, 'Holistic Education', 'We integrate values formation, academic rigor, and life skills into every level of learning.'],
                [Users, 'Small Class Sizes', 'Personalized attention for every student. No child gets left behind.'],
                [Award, 'Proven Board Exam Results', '98% first-time board exam passers in BSMedTech and BSRadTech programs.'],
                [MapPin, 'Conveniently Located in Sta. Rosa', "Right in the heart of Laguna's fastest-growing city — accessible and family-friendly."],
              ].map(([Icon, title, body], idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                  <Icon size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', margin: 0 }}>{title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-secondary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Discover Our Story</Link>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F1F1EB', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>ACCREDITATION & RECOGNITION</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#2C2C2C', margin: 0 }}>Recognized by the Bodies That Matter</h2>
          <p style={{ color: '#5A5A5A', fontSize: '1rem', maxWidth: '560px', margin: '0.75rem auto 3rem', lineHeight: 1.7 }}>
            New Sinai is fully recognized and supervised by the Philippine government&apos;s education regulatory bodies — so your child&apos;s diploma is valid, recognized, and respected everywhere.
          </p>
          {/* Cards — CSS animated, no GSAP opacity:0 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {ACCREDIT_CARDS.map(({ Icon, title, sub, badge, body }, i) => (
              <div
                key={i}
                className="accredit-card"
                style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1rem', border: '1px solid #D4D4CC', textAlign: 'center', transition: 'box-shadow 300ms, transform 300ms', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: '#E8F5EE', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={28} style={{ color: '#1E6B45' }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#2C2C2C', margin: '0 0 0.25rem' }}>{title}</h3>
                <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8A8A8A', marginBottom: '1rem' }}>{sub}</p>
                <p style={{ fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.7, marginBottom: '1.25rem' }}>{body}</p>
                <div style={{ display: 'inline-flex', background: '#E8F5EE', color: '#1E6B45', fontSize: '0.72rem', padding: '0.35rem 1rem', borderRadius: '9999px', fontWeight: 600 }}>{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ──────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>LIFE AT NEW SINAI</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#2C2C2C', margin: 0 }}>More Than Classrooms.</h2>
          <p style={{ color: '#5A5A5A', fontSize: '1rem', maxWidth: '500px', marginTop: '0.5rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            New Sinai students don&apos;t just study — they compete, create, lead, and grow. Here&apos;s a glimpse of life inside our campus.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gridTemplateRows: '260px 260px',
            gap: '0.875rem'
          }}>
            {CAMPUS_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="campus-item"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  ...photo.style,
                }}
              >
                <img
                  src={photo.img}
                  alt={photo.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  className="photo-overlay"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,40,20,0.85) 0%, rgba(10,40,20,0.2) 50%, transparent 100%)',
                    display: 'flex', alignItems: 'flex-end', padding: '1.25rem'
                  }}
                >
                  <span style={{
                    color: 'white', fontWeight: 700, fontSize: '0.95rem',
                    fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F1F1EB' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#2C2C2C', textAlign: 'center', margin: '0 0 0.75rem' }}>Parents Ask. We Answer.</h2>
          <p style={{ textAlign: 'center', color: '#5A5A5A', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Everything you need to know before enrolling your child at New Sinai.
          </p>
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '1rem', border: `1px solid ${faqOpen === i ? '#1E6B45' : '#D4D4CC'}`, marginBottom: '0.75rem', overflow: 'hidden', transition: 'border-color 200ms' }}>
                <button
                  onClick={() => toggleFaq(i)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1.25rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#2C2C2C', paddingRight: '1rem' }}>{item.q}</span>
                  <ChevronDown size={18} style={{ color: '#1E6B45', flexShrink: 0, transform: faqOpen === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 300ms' }} />
                </button>
                <div ref={el => { answerRefs.current[i] = el }} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
                  <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.875rem', color: '#5A5A5A', lineHeight: 1.75 }}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ────────────────────────────────────── */}
      <section style={{ padding: '1.25rem 0', overflow: 'hidden', background: 'var(--accent)' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 30s linear infinite' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} style={{ margin: '0 1rem', fontSize: '0.875rem', fontWeight: 500, color: 'white', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
              {item}<span style={{ marginLeft: '1rem', color: 'var(--accent-gold)' }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="section-label">What Parents & Students Say</span>
          <h2 className="section-headline" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>Real Stories from Real Sinaiians</h2>
          <div
            ref={testRef}
            style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}
          >
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="test-card">
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={15} fill="#C9A84C" color="#C9A84C" />)}
                </div>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.25, display: 'block', marginBottom: '-0.5rem' }}>&ldquo;</span>
                <p className="quote-body" style={{ lineHeight: 1.75, marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.quote}</p>
                <div className="avatar-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                  <img src={t.avatar} alt={t.name} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENT TICKER ───────────────────────────────── */}
      <section style={{ padding: '1.25rem 0', background: '#2C2C2C', overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 35s linear infinite' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em', padding: '0 1.5rem' }}>{item}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.875rem' }}>|</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── NEWS & ANNOUNCEMENTS ──────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <span className="section-label">Latest from New Sinai</span>
          <h2 className="section-headline" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>News & Announcements</h2>
          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}>
            {NEWS.map(n => (
              <div key={n.title} className="news-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.68rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{n.tag}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{n.date}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{n.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-secondary)', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.25rem' }}>{n.body}</p>
                <Link to={n.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', marginTop: 'auto', transition: 'gap 200ms' }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '0.5rem' }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '0.25rem' }}
                >Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLL CTA ───────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--accent)' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>S.Y. 2025-2026</p>
          <h2 style={{ fontWeight: 700, color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, margin: 0 }}>
            Enrollment is Open. Secure Your Child&apos;s Seat Today.
          </h2>
          <p style={{ marginTop: '1rem', marginBottom: '2rem', fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.75 }}>
            Limited slots available. Do not miss the chance to give your child a holistic education in the heart of Sta. Rosa, Laguna.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))}
              style={{ borderRadius: '9999px', padding: '1rem 2.5rem', fontWeight: 700, background: '#fff', color: 'var(--accent)', border: 'none', cursor: 'pointer', transition: 'transform 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >Enroll Now</button>
            <button
              style={{ borderRadius: '9999px', padding: '1rem 2.5rem', fontWeight: 600, color: 'white', border: '1.5px solid #fff', background: 'transparent', cursor: 'pointer', transition: 'all 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >Download Enrollment Form</button>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Questions? Call us: (049) 123-4567 | nssc@example.com</p>
        </div>
      </section>

    </div>
  )
}