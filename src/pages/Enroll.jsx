import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Mail, Phone, MapPin, FileText, CheckCircle } from 'lucide-react'

const STEPS = [
  { num: '01', label: 'Submit Application', icon: <FileText size={22} /> },
  { num: '02', label: 'Document Review', icon: <CheckCircle size={22} /> },
  { num: '03', label: 'Entrance Assessment', icon: <User size={22} /> },
  { num: '04', label: 'Enrollment Confirmation', icon: <CheckCircle size={22} /> },
]

export default function Enroll() {
  const heroLabelRef = useRef(null)
  const heroLinesRef = useRef([])
  const heroSubRef = useRef(null)
  const heroCtaRef = useRef(null)
  const heroImgRef = useRef(null)

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', gradeLevel: '',
    parentName: '', email: '', phone: '', address: '', notes: '',
  })

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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#0A1910' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?w=1600&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(110deg, rgba(5,20,12,0.92) 0%, rgba(8,28,16,0.84) 35%, rgba(12,40,22,0.72) 60%, rgba(18,55,30,0.62) 100%)' }} />
        <div className="px-6 lg:px-20" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1280px', margin: '0 auto', paddingTop: '120px', paddingBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div ref={heroLabelRef} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '2rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 500 }}>ENROLLMENT · S.Y. 2025–2026</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: '960px', width: '100%' }}>
            <div className="hero-line" ref={el => { heroLinesRef.current[0] = el }} style={{ color: '#FFFFFF', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Enrollment is Open.</div>
            <div className="hero-line" ref={el => { heroLinesRef.current[1] = el }} style={{ color: '#4ADE80', display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '0.01em', textTransform: 'uppercase' }}>Secure Your Slot.</div>
          </h1>
          <p ref={heroSubRef} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '520px', marginTop: '1.5rem' }}>
            Limited seats across all grade levels and college programs. Early enrollees get priority section placement. Don't wait.
          </p>
          <div ref={heroCtaRef} className="flex flex-wrap gap-3" style={{ marginTop: '2rem' }}>
            <a href="#enroll-form" style={{ background: '#1E6B45', color: 'white', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Enroll Now <ArrowRight size={18} />
            </a>
            <a href="#" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 0, padding: '1rem 2rem', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center' }}>
              Download Form
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '5rem 0', background: 'var(--surface)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">How to Enroll</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              Four Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="card p-6 text-center flex flex-col items-center" style={{ background: 'var(--bg)', border: '2px solid transparent' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(30,107,69,0.12)', position: 'absolute', top: '0.75rem', right: '1rem', lineHeight: 1 }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {step.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enroll-form" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">Application Form</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0.5rem 0 1.5rem' }}>
                Start Your Journey With Us
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                Fill out the form completely. Our admissions team will review your application and contact you within 3–5 business days.
              </p>
              <div className="space-y-4">
                <InfoItem icon={<FileText size={20} />} label="Requirements" text="PSA Birth Certificate, previous report card, 2×2 ID photo" />
                <InfoItem icon={<Mail size={20} />} label="Email" text="admissions@nssc.edu.ph" />
                <InfoItem icon={<Phone size={20} />} label="Phone" text="(049) 123-4567" />
                <InfoItem icon={<MapPin size={20} />} label="Office" text="NSSC Campus, Sta. Rosa, Laguna" />
              </div>
            </div>

            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    Application Submitted!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Thank you, {form.firstName}! We've received your application. Our admissions team will contact you within 3–5 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>First Name *</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} required className="input-field" placeholder="Juan" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Last Name *</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange} required className="input-field" placeholder="Dela Cruz" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Grade Level Applying For *</label>
                    <select name="gradeLevel" value={form.gradeLevel} onChange={handleChange} required className="input-field">
                      <option value="">Select level...</option>
                      <option value="Preschool">Preschool</option>
                      <option value="Elementary">Elementary</option>
                      <option value="JHS">Junior High School</option>
                      <option value="SHS STEM">Senior High – STEM</option>
                      <option value="SHS ABM">Senior High – ABM</option>
                      <option value="SHS HUMSS">Senior High – HUMSS</option>
                      <option value="SHS GAS">Senior High – GAS</option>
                      <option value="SHS TVL">Senior High – TVL</option>
                      <option value="TESDA">TESDA</option>
                      <option value="College">College</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Parent / Guardian Name *</label>
                    <input name="parentName" value={form.parentName} onChange={handleChange} required className="input-field" placeholder="Maria Santos" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field" placeholder="parent@email.com" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Phone *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required className="input-field" placeholder="+63 912 345 6789" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Home Address *</label>
                    <input name="address" value={form.address} onChange={handleChange} required className="input-field" placeholder="123 Rizal St., Sta. Rosa, Laguna" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Additional Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} className="input-field" placeholder="Any special considerations, requests, or questions..." />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">Submit Application</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoItem({ icon, label, text }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>{icon}</span>
      <div>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>{label}</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{text}</div>
      </div>
    </div>
  )
}
