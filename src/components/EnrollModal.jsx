import { useState, useEffect, useRef } from 'react'
import { X, ChevronDown, CheckCircle } from 'lucide-react'

const PROGRAMS = [
  { group: 'Basic Education', items: ['Preschool', 'Elementary', 'Junior High School', 'Senior High School – STEM', 'Senior High School – ABM', 'Senior High School – HUMSS'] },
  { group: 'College', items: ['BS Medical Technology', 'BS Radiologic Technology', 'BS Psychology'] },
  { group: 'TESDA', items: ['Mechatronics Servicing NC II', 'Caregiving NC II'] },
]

const HEAR_ABOUT = ['Facebook / Social Media', 'Friend or Family Referral', 'Tarpaulin / Poster', 'Walk-in Visit', 'School Fair', 'Other']

const INITIAL = { name: '', email: '', phone: '', program: '', year: 'S.Y. 2025–2026', source: '', message: '' }

export default function EnrollModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openEnrollModal', handler)
    return () => window.removeEventListener('openEnrollModal', handler)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const g = window.gsap
      if (g && overlayRef.current && panelRef.current) {
        g.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
        g.fromTo(panelRef.current, { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' })
      }
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
      setErrors({})
    }
  }, [open])

  const close = () => setOpen(false)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Contact number is required'
    if (!form.program) e.program = 'Please select a program'
    return e
  }

  const submit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) close() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        ref={panelRef}
        style={{
          background: '#FFFFFF', width: '100%', maxWidth: 560,
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
          maxHeight: '90vh', display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ background: '#1E6B45', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>NEW SINAI SCHOOL AND COLLEGES</p>
            <h2 style={{ color: '#FFFFFF', fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.35rem', margin: 0 }}>Enrollment Application</h2>
          </div>
          <button onClick={close} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#FFFFFF', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div style={{ padding: '3rem 2rem', textAlign: 'center', flex: 1 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(30,107,69,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle size={32} style={{ color: '#1E6B45' }} />
            </div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Application Received!</h3>
            <p style={{ color: '#5A5A5A', lineHeight: 1.75, marginBottom: '0.4rem' }}>
              Thank you, <strong>{form.name.split(' ')[0]}</strong>. We'll contact you at <strong>{form.email}</strong> within 1–2 business days.
            </p>
            <p style={{ color: '#5A5A5A', fontSize: '0.875rem', marginBottom: '2rem' }}>
              Program: <strong>{form.program}</strong>
            </p>
            <button onClick={close} style={{ background: '#1E6B45', color: 'white', border: 'none', padding: '0.75rem 2rem', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={submit} style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>

            {/* Row: Name */}
            <Field label="Full Name" required error={errors.name}>
              <input
                type="text" placeholder="e.g. Juan dela Cruz"
                value={form.name} onChange={e => set('name', e.target.value)}
                style={inputStyle(errors.name)}
              />
            </Field>

            {/* Row: Email + Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <Field label="Email Address" required error={errors.email}>
                <input
                  type="email" placeholder="juandelacruz@email.com"
                  value={form.email} onChange={e => set('email', e.target.value)}
                  style={inputStyle(errors.email)}
                />
              </Field>
              <Field label="Contact Number" required error={errors.phone}>
                <input
                  type="tel" placeholder="09XX XXX XXXX"
                  value={form.phone} onChange={e => set('phone', e.target.value)}
                  style={inputStyle(errors.phone)}
                />
              </Field>
            </div>

            {/* Row: Program + Year */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <Field label="Program of Interest" required error={errors.program}>
                <div style={{ position: 'relative' }}>
                  <select
                    value={form.program} onChange={e => set('program', e.target.value)}
                    style={{ ...inputStyle(errors.program), appearance: 'none', paddingRight: '2rem', cursor: 'pointer' }}
                  >
                    <option value="">Select a program</option>
                    {PROGRAMS.map(g => (
                      <optgroup key={g.group} label={g.group}>
                        {g.items.map(i => <option key={i} value={i}>{i}</option>)}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
                </div>
              </Field>
              <Field label="School Year">
                <div style={{ position: 'relative' }}>
                  <select
                    value={form.year} onChange={e => set('year', e.target.value)}
                    style={{ ...inputStyle(), appearance: 'none', paddingRight: '2rem', cursor: 'pointer' }}
                  >
                    <option>S.Y. 2025–2026</option>
                    <option>S.Y. 2026–2027</option>
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
                </div>
              </Field>
            </div>

            {/* Row: How did you hear about us */}
            <Field label="How did you hear about us?">
              <div style={{ position: 'relative' }}>
                <select
                  value={form.source} onChange={e => set('source', e.target.value)}
                  style={{ ...inputStyle(), appearance: 'none', paddingRight: '2rem', cursor: 'pointer' }}
                >
                  <option value="">Select an option</option>
                  {HEAR_ABOUT.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={14} style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
              </div>
            </Field>

            {/* Row: Message */}
            <Field label="Questions or Additional Information">
              <textarea
                rows={3} placeholder="Any questions or information you'd like us to know..."
                value={form.message} onChange={e => set('message', e.target.value)}
                style={{ ...inputStyle(), resize: 'vertical', minHeight: 80 }}
              />
            </Field>

            {/* Submit */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', paddingTop: '0.25rem' }}>
              <button
                type="submit"
                style={{ flex: 1, background: '#1E6B45', color: 'white', border: 'none', padding: '0.9rem', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '0.03em' }}
              >
                Submit Application
              </button>
              <button type="button" onClick={close} style={{ background: '#F1F1EB', color: '#5A5A5A', border: 'none', padding: '0.9rem 1.25rem', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>

            <p style={{ fontSize: '0.72rem', color: '#9CA3AF', textAlign: 'center', marginTop: '-0.25rem' }}>
              By submitting, you agree to be contacted by NSSC regarding your application.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>
        {label} {required && <span style={{ color: '#EF4444' }}>*</span>}
      </label>
      {children}
      {error && <p style={{ fontSize: '0.72rem', color: '#EF4444', marginTop: '0.25rem' }}>{error}</p>}
    </div>
  )
}

function inputStyle(error) {
  return {
    width: '100%', padding: '0.6rem 0.75rem',
    border: `1.5px solid ${error ? '#FCA5A5' : '#D1D5DB'}`,
    borderRadius: 8, fontSize: '0.875rem', color: '#1A1A1A',
    background: error ? '#FFF5F5' : '#FFFFFF',
    outline: 'none', boxSizing: 'border-box',
    fontFamily: 'inherit',
  }
}
