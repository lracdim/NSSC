import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { newsData } from '../data/news'
import { ArrowRight } from 'lucide-react'

const CATEGORIES = ['All', 'Enrollment', 'Achievement', 'Event', 'Program']

export default function News() {
  const [activeFilter, setActiveFilter] = useState('All')
  const gridRef = useRef(null)
  const cardsRef = useRef([])

  const filtered = activeFilter === 'All'
    ? newsData
    : newsData.filter(n => n.category === activeFilter)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  useEffect(() => {
    const g = window.gsap
    if (!g) return
    cardsRef.current = cardsRef.current.filter(Boolean)
    if (cardsRef.current.length) {
      g.fromTo(cardsRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out'
      })
    }
  }, [activeFilter])

  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>News & Announcements | NSSC Sta. Rosa Laguna</title>
      <meta name="description" content="Official news, announcements, achievements, and events from New Sinai School and Colleges Sta. Rosa, Laguna. Stay informed as an NSSC family." />

      <section style={{ background: '#F1F1EB', paddingTop: '7rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1E6B45', display: 'inline-block' }} />
            <span style={{ color: '#1E6B45', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 600 }}>OFFICIAL ANNOUNCEMENTS</span>
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', textTransform: 'uppercase', lineHeight: 1.05 }}>
            News &
            <br />
            Announcements
          </h1>
          <p style={{ color: '#374151', fontSize: '1.05rem', marginTop: '1rem', maxWidth: '480px', lineHeight: 1.75 }}>
            Stay updated on everything happening at NSSC — achievements, events, programs, and enrollment updates.
          </p>
        </div>
      </section>

      <div style={{ position: 'sticky', top: '64px', zIndex: 40, background: '#FFFFFF', borderBottom: '1px solid #D4D4CC', padding: '0.75rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 200ms',
                background: activeFilter === cat ? '#1E6B45' : '#F1F1EB',
                color: activeFilter === cat ? '#FFFFFF' : '#5A5A5A',
                border: activeFilter === cat ? 'none' : '1px solid #D4D4CC',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <section style={{ background: '#FFFFFF', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <Link to={`/news/${featured.slug}`} style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '3rem', alignItems: 'center', textDecoration: 'none' }}>
              <div style={{ overflow: 'hidden', borderRadius: '16px', height: '400px' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 400ms' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>{featured.category}</span>
                  <span style={{ background: '#C9A84C', color: '#1A1A1A', fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>LATEST</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{featured.date}</span>
                  <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{featured.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', lineHeight: 1.2, marginBottom: '1rem' }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#5A5A5A', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {featured.excerpt}
                </p>
                <span style={{ color: '#1E6B45', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Read Full Story <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section style={{ background: '#F1F1EB', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {rest.map((article, i) => (
              <Link
                key={article.slug}
                to={`/news/${article.slug}`}
                ref={el => { cardsRef.current[i] = el }}
                style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #D4D4CC', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'all 300ms', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1E6B45'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D4D4CC'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ height: '176px', overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{article.category}</span>
                    <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{article.readTime}</span>
                  </div>
                  <p style={{ fontSize: '0.72rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>{article.date}</p>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1.3, marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#5A5A5A', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                    {article.excerpt}
                  </p>
                  <span style={{ color: '#1E6B45', fontWeight: 600, fontSize: '0.82rem' }}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .news-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .news-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  )
}