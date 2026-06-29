import { Link } from 'react-router-dom'
import { Facebook, Youtube, Mail, Phone, MapPin, Clock, ChevronUp } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Academics', path: '/academics' },
  { label: 'College', path: '/college' },
  { label: 'Senior High', path: '/senior-high' },
  { label: 'TESDA', path: '/tesda' },
  { label: 'e-Skwela', path: '/enroll' },
  { label: 'About', path: '/about' },
]
const PROGRAMS = [
  { label: 'Preschool', path: '/preschool' },
  { label: 'Elementary', path: '/elementary' },
  { label: 'Junior High School', path: '/junior-high' },
  { label: 'Senior High School', path: '/senior-high' },
  { label: 'BSMedTech', path: '/college/medtech' },
  { label: 'BSRadTech', path: '/college/radtech' },
  { label: 'BSPsych', path: '/college/psychology' },
  { label: 'Caregiving NC II', path: '/tesda/caregiving' },
  { label: 'Mechatronics NC II', path: '/tesda/mechatronics' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative" style={{ backgroundColor: '#1A1A1A', color: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src="/logo.png" alt="NSSC Logo" style={{ width: 36, height: 36, objectFit: 'contain', display: 'block', flexShrink: 0 }} />
              <div>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-gold)', letterSpacing: '0.05em', display: 'block', lineHeight: 1 }}>NEW SINAI</span>
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', display: 'block', marginTop: '1px' }}>STA. ROSA, LAGUNA</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mt-3 max-w-[220px] leading-relaxed">
              Your Holistic Education Begins Here.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="section-label" style={{ color: 'var(--accent-gold)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="section-label" style={{ color: 'var(--accent-gold)' }}>Programs</h4>
            <ul className="space-y-2.5">
              {PROGRAMS.map(prog => (
                <li key={prog.label}>
                  <Link to={prog.path} className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors">
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label" style={{ color: 'var(--accent-gold)' }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span>Sta. Rosa, Laguna<br />Philippines</span>
              </div>
              <a href="tel:0491234567" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#C9A84C] transition-colors">
                <Phone size={15} className="shrink-0 text-gray-500" />
                (049) 123-4567
              </a>
              <a href="mailto:nssc@example.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-[#C9A84C] transition-colors">
                <Mail size={15} className="shrink-0 text-gray-500" />
                nssc@example.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock size={15} className="shrink-0 text-gray-500" />
                Mon–Fri: 7:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs text-gray-600">
            © 2025 New Sinai School and Colleges Sta. Rosa, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">Sta. Rosa, Laguna, Philippines</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
