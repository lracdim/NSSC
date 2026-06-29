import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Target, Eye, Users, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const MILESTONES = [
  { year: '2001', title: 'Founded', desc: 'New Sinai School and Colleges opens its doors in Sta. Rosa, Laguna with a small but dedicated student body.' },
  { year: '2005', title: 'DepEd Recognition', desc: 'Full DepEd recognition granted for Elementary and Junior High School programs.' },
  { year: '2010', title: 'Senior High School Launch', desc: 'Expanded to Senior High School with four academic strands including STEM, ABM, HUMSS, and GAS.' },
  { year: '2015', title: 'College Programs Open', desc: 'CHED-supervised college programs launched: BS Medical Technology, BS Radiologic Technology, and BS Psychology.' },
  { year: '2018', title: 'TESDA Accreditation', desc: 'Earned TESDA accreditation for Caregiving NC II and Mechatronics Servicing NC II programs.' },
  { year: '2024', title: '5,000+ Graduates', desc: 'Celebrated a landmark milestone — over 5,000 graduates shaping communities across the Philippines.' },
]

const VALUES = [
  { icon: <Heart size={24} />, title: 'Faith', desc: 'Rooted in Christian values, we nurture the spiritual growth of every student alongside their academic development.' },
  { icon: <Target size={24} />, title: 'Excellence', desc: 'We hold ourselves to the highest academic standards, evidenced by our 98% board exam passing rate.' },
  { icon: <Eye size={24} />, title: 'Integrity', desc: 'Honesty, transparency, and moral responsibility are non-negotiable expectations for every member of the NSSC community.' },
  { icon: <Users size={24} />, title: 'Service', desc: 'We train students not just to succeed for themselves, but to give back and serve their communities with compassion.' },
]

export default function About() {
  const heroLabelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)
  const heroImgRef = useRef(null)

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000) }

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
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.72) 60%, rgba(18,55,30,0.62) 100%)' }} />
        <div className="px-6 lg:px-20" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '120px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>ABOUT NSSC</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '960px', width: '100%' }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Two Decades of</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Shaping Lives</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[2] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>That Matter.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem' }}>
            Since 2001, New Sinai School and Colleges has been more than a school. We are a community that believes every child deserves an education that is academic, moral, and practical.
          </p>
          <div ref={heroCtaRef} style={{ marginTop: '2rem' }}>
            <a href="#our-story" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Our Story <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="our-story" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <span className="section-label">Our Mission</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.5rem 0 1rem' }}>Why We Exist</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                To provide quality, values-based education that develops the whole person — intellectually, morally, spiritually, and socially — equipping every learner to contribute meaningfully to a changing world.
              </p>
            </div>
            <div className="card p-8" style={{ background: 'var(--accent)', border: 'none' }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Our Vision</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: '0.5rem 0 1rem' }}>What We're Building</h2>
              <p style={{ color: '#D1FAE5', lineHeight: 1.8, fontSize: '1rem' }}>
                To be the most trusted educational institution in Sta. Rosa, Laguna — recognized for producing graduates who are academically excellent, spiritually grounded, and socially responsible professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Core Values</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Journey</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              20+ Years of Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((m, i) => (
              <div key={i} className="card p-6">
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.year}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.25rem 0 0.5rem' }}>{m.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                alt="NSSC Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="section-label">Where We Are</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.5rem 0 1rem' }}>
                Located in the Heart of Sta. Rosa, Laguna
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our campus is strategically situated in Sta. Rosa — Laguna's fastest-growing city — making NSSC easily accessible for families from Biñan, Cabuyao, San Pedro, Calamba, and the greater CALABARZON region.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  ['Address', 'Sta. Rosa, Laguna, Philippines'],
                  ['Phone', '(049) 123-4567'],
                  ['Email', 'nssc@example.com'],
                  ['School Year', 'S.Y. 2025–2026 Enrollment Open'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-3">
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', minWidth: '80px', fontSize: '0.9rem' }}>{label}:</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{value}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary inline-flex">
                Get in Touch <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #1E6B45, #165934)' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Become Part of the NSSC Family
          </h2>
          <p style={{ color: '#D1FAE5', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Join over 5,000 graduates who started their journey here. Enrollment for S.Y. 2025–2026 is open now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openEnrollModal'))} className="btn-primary" style={{ background: 'var(--accent-gold)', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>
              Enroll Now <ArrowRight size={18} />
            </button>
            <a href="#contact" className="btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>We're Here. Let's Talk.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
              Whether you're a parent with questions, a student exploring options, or a partner looking to connect — our team is ready to help.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: <MapPin size={20} />, label: 'Address', text: 'New Sinai School and Colleges\nSta. Rosa, Laguna, Philippines' },
                { icon: <Phone size={20} />, label: 'Phone', text: '(049) 123-4567', href: 'tel:0491234567' },
                { icon: <Mail size={20} />, label: 'Email', text: 'nssc@example.com', href: 'mailto:nssc@example.com' },
                { icon: <Clock size={20} />, label: 'Office Hours', text: 'Monday – Friday: 7:00 AM – 5:00 PM\nSaturday: 8:00 AM – 12:00 PM' },
              ].map((item, i) => (
                <div key={i} className="card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.25rem' }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.text}</a>
                      : <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.text}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-3">
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <Send size={48} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Thank you, {form.name}! We'll get back to you within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required className="input-field" placeholder="Juan Dela Cruz" />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field" placeholder="juan@email.com" />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+63 912 345 6789" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required className="input-field" placeholder="How can we help you?" />
                    </div>
                    <button type="submit" className="btn-primary inline-flex">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div style={{ width: '100%', height: '420px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden' }}>
            <iframe
              title="New Sinai School and Colleges Location"
              src="https://www.google.com/maps?q=838X%2BRCP+Manila+S+Rd+City+of+Santa+Rosa+4026+Laguna&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
