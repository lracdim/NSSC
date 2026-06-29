import { useState } from 'react'
import useStore from '../../store/useStore'

const ACCENT = '#2B6CB0'

export default function AdminAnnouncements() {
  const announcements = useStore(s => s.announcements)
  const addAnnouncement = useStore(s => s.addAnnouncement)
  const currentUser = useStore(s => s.currentUser)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('General')
  const [audience, setAudience] = useState('all')

  const submit = () => {
    if (!title || !body) return
    addAnnouncement({ title, body, category, authorId: currentUser?.id, authorName: currentUser?.name, audience })
    setTitle(''); setBody('')
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .form-input { width: 100%; padding: 0.6rem 0.875rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; font-family: Inter, sans-serif; }
        .form-input:focus { outline: none; border-color: ${ACCENT}; }
        .submit-btn { background: ${ACCENT}; color: white; border: none; border-radius: 8px; padding: 0.6rem 1.5rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
        .ann-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 1rem; }
        .cat-badge { font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; background: rgba(43,108,176,0.08); color: #2B6CB0; }
        .audience-badge { font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; background: #F4F6F9; color: #718096; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Announcements</h2>

      <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ fontWeight: 700, color: '#1A202C', marginBottom: '1rem' }}>Post New Announcement</div>
        <input className="form-input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{ marginBottom: '0.75rem' }} />
        <div className="form-grid" style={{ marginBottom: '0.75rem' }}>
          <select className="form-input" value={category} onChange={e => setCategory(e.target.value)}>
            {['General','Enrollment','Exam','Payment','Event','Suspension'].map(c => <option key={c}>{c}</option>)}
          </select>
          <select className="form-input" value={audience} onChange={e => setAudience(e.target.value)}>
            {['all','student','parent','teacher','admin'].map(a => <option key={a} value={a}>{a.charAt(0).toUpperCase() + a.slice(1)} Only</option>)}
          </select>
        </div>
        <textarea className="form-input" placeholder="Content..." rows={3} value={body} onChange={e => setBody(e.target.value)} style={{ marginBottom: '0.75rem' }} />
        <button className="submit-btn" onClick={submit}>Post Announcement</button>
      </div>

      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', marginBottom: '1rem' }}>All Announcements</div>
      {[...announcements].reverse().map(a => (
        <div key={a.id} className="ann-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span className="cat-badge">{a.category}</span>
              <span className="audience-badge">{a.audience}</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{a.date} · by {a.authorName}</span>
          </div>
          <h3 style={{ fontWeight: 700, color: '#1A202C', marginBottom: '0.5rem' }}>{a.title}</h3>
          <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: 1.65 }}>{a.body}</p>
        </div>
      ))}
    </div>
  )
}

