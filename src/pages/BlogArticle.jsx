import { useParams, Link } from 'react-router-dom'
import { blogData } from '../data/articles'

export default function BlogArticle() {
  const { slug } = useParams()
  const article = blogData.find(a => a.slug === slug)

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Article not found</h1>
          <Link to="/blog" style={{ color: '#1E6B45', fontWeight: 600 }}>← Back to Blog</Link>
        </div>
      </div>
    )
  }

  const related = blogData
    .filter(a => a.slug !== slug && a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3)

  const fillCount = 3 - related.length
  if (fillCount > 0) {
    const others = blogData.filter(a => a.slug !== slug && !related.includes(a)).slice(0, fillCount)
    related.push(...others)
  }

  return (
    <div style={{ background: '#FFFFFF' }}>
      <title>{article.title} | NSSC Blog</title>
      <meta name="description" content={article.excerpt} />

      <div style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'flex-end', paddingTop: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={article.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto', width: '100%', padding: '3rem 1.5rem 4rem' }}>
          <span style={{ background: '#1E6B45', color: 'white', fontSize: '0.72rem', fontWeight: 600, padding: '0.3rem 0.85rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '1rem' }}>
            {article.category}
          </span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FFFFFF', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1rem' }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.72rem', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
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

      {related.length > 0 && (
        <section style={{ background: '#F1F1EB', padding: '4rem 0', borderTop: '1px solid #D4D4CC' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', color: '#1E6B45', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>KEEP READING</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.75rem', color: '#2C2C2C', marginBottom: '2rem' }}>Related Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {related.map(a => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', transition: 'all 300ms' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ height: '192px', overflow: 'hidden' }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ background: 'rgba(30,107,69,0.08)', color: '#1E6B45', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '9999px', display: 'inline-block', marginBottom: '0.75rem' }}>{a.category}</span>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#2C2C2C', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.5rem' }}>
                      {a.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#5A5A5A', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '0.75rem' }}>
                      {a.excerpt}
                    </p>
                    <p style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .related-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 600px) { .related-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      )}
    </div>
  )
}