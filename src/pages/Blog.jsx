import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../data/articles'
import { ArrowRight } from 'lucide-react'

const CATEGORIES = ['All', 'Senior High', 'College', 'Junior High', 'TESDA', 'Parents Guide']

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All')
  const cardsRef = useRef([])

  const filtered = activeFilter === 'All'
    ? blogData
    : blogData.filter(a => a.category === activeFilter)

  const featured = filtered[0]
  const row2 = filtered.slice(1, 3)
  const row3 = filtered.slice(3, 6)

  useEffect(() => {
    const g = window.gsap
    if (!g) return
    cardsRef.current = cardsRef.current.filter(Boolean)
    if (cardsRef.current.length) {
      g.fromTo(cardsRef.current, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out'
      })
    }
  }, [activeFilter])

  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>Blog – School Guides & Parent Resources | NSSC Sta. Rosa Laguna</title>
      <meta name="description" content="Helpful guides for parents and students in Sta. Rosa, Laguna — strand guides, college tips, TESDA advice, and school insights from NSSC." />

      <section style={{ background: '#2C2C2C', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <span style={{ display: 'inline-block', color: '#4ADE80', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>NSSC BLOG</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFFFFF', lineHeight: 1.05, textTransform: 'uppercase', marginBottom: '1rem' }}>
            Insights, Guides &
            <br />
            Stories for Families
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '520px', lineHeight: 1.75 }}>
            Practical guides for parents, honest advice for students, and stories from the NSSC community — written to help your family make better decisions.
          </p>
        </div>
      </section>

      <div style={{ background: '#F1F1EB', padding: '0.75rem 0', borderBottom: '1px solid #D4D4CC' }}>
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
        <section style={{ background: '#F1F1EB', padding: '3rem 0 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <Link
              to={`/blog/${featured.slug}`}
              ref={el => { cardsRef.current[0] = el }}
              style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px', transition: 'all 300ms' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ overflow: 'hidden' }}>
                <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: '#1E6B45', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>FEATURED READ</span>
                <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '1rem', alignSelf: 'flex-start' }}>{featured.category}</span>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#2C2C2C', lineHeight: 1.2, marginBottom: '1rem' }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#5A5A5A', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{featured.author}</span>
                  <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>·</span>
                  <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{featured.readTime}</span>
                </div>
                <span style={{ color: '#1E6B45', fontWeight: 700, fontSize: '0.9rem', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Read Article → <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {row2.length > 0 && (
        <section style={{ background: '#F1F1EB', padding: '1.5rem 0 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {row2.map((article, i) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                ref={el => { cardsRef.current[i + 1] = el }}
                style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'all 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{article.category}</span>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#5A5A5A', lineHeight: 1.65, flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{article.author}</span>
                    <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>·</span>
                    <span style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>{article.readTime}</span>
                  </div>
                  <span style={{ color: '#1E6B45', fontWeight: 700, fontSize: '0.85rem', marginTop: '1rem' }}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {row3.length > 0 && (
        <section style={{ background: '#F1F1EB', padding: '1.5rem 0 4rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {row3.map((article, i) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                ref={el => { cardsRef.current[i + 3] = el }}
                style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'flex', gap: '1rem', transition: 'all 300ms' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: '128px', flexShrink: 0, overflow: 'hidden' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', minHeight: '120px', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1rem 1rem 1rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.65rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.5rem' }}>{article.category}</span>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.5rem' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{article.date}</p>
                  <p style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{article.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            @media (max-width: 900px) { .blog-row3 { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 600px) { .blog-row3 { grid-template-columns: 1fr !important; } .blog-row2 { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}
    </div>
  )
}