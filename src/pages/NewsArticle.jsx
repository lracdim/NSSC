import { useParams, Link } from 'react-router-dom'
import { newsData } from '../data/news'
import { ArrowRight } from 'lucide-react'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsData.find(n => n.slug === slug)
  const currentIndex = newsData.findIndex(n => n.slug === slug)

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Article not found</h1>
          <Link to="/news" style={{ color: '#1E6B45', fontWeight: 600 }}>← Back to News</Link>
        </div>
      </div>
    )
  }

  const olderArticles = newsData.slice(currentIndex + 1, currentIndex + 4)

  return (
    <div style={{ background: '#F9FAFB' }}>
      <title>{article.title} | NSSC News</title>
      <meta name="description" content={article.excerpt} />

      <div style={{ maxWidth: '860px', margin: '0 auto', paddingTop: '7rem', paddingBottom: '2rem', padding: '7rem 1.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#9CA3AF' }}>
          <Link to="/" style={{ color: '#1E6B45', textDecoration: 'none' }}>Home</Link>
          <span>→</span>
          <Link to="/news" style={{ color: '#1E6B45', textDecoration: 'none' }}>News</Link>
          <span>→</span>
          <span>{article.category}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.72rem', fontWeight: 600, padding: '0.3rem 0.85rem', borderRadius: '9999px' }}>{article.category}</span>
          <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{article.date}</span>
          <span style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{article.readTime}</span>
        </div>

        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', lineHeight: 1.1, marginBottom: '2rem' }}>
          {article.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1E6B45', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
            NS
          </div>
          <div>
            <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#111827' }}>NSSC Communications Team</p>
            <p style={{ fontSize: '0.78rem', color: '#9CA3AF' }}>Official School Publication</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '16px' }}
        />
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div
          style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#2C2C2C' }}
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        <div style={{ background: '#F1F1EB', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Share this:</span>
          {['Facebook', 'Twitter/X', 'Copy Link'].map(platform => (
            <button key={platform} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.9rem', background: '#FFFFFF', border: '1px solid #D4D4CC', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 500, color: '#374151', cursor: 'pointer', transition: 'border-color 200ms' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#1E6B45'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#D4D4CC'}
            >
              {platform}
            </button>
          ))}
        </div>
      </div>

      {olderArticles.length > 0 && (
        <section style={{ background: '#F1F1EB', padding: '4rem 0', borderTop: '1px solid #D4D4CC' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', color: '#1E6B45', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>MORE FROM NSSC</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', color: '#2C2C2C', marginBottom: '2rem' }}>Previous News</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {olderArticles.map(a => (
                <Link
                  key={a.slug}
                  to={`/news/${a.slug}`}
                  style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #D4D4CC', overflow: 'hidden', textDecoration: 'none', display: 'flex', gap: '1rem', padding: '1rem', transition: 'all 200ms' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.background = '#FFFFFF' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.background = '#FFFFFF' }}
                >
                  <div style={{ width: '112px', height: '80px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.65rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.35rem' }}>{a.category}</span>
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2C2C2C', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.35rem' }}>
                      {a.title}
                    </h3>
                    <p style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{a.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .prev-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 600px) { .prev-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}
    </div>
  )
}