import { useState } from 'react'
import useStore from '../../store/useStore'

export default function TeacherAnnouncements() {
  const announcements = useStore(s => s.announcements)
  const addAnnouncement = useStore(s => s.addAnnouncement)
  const currentUser = useStore(s => s.currentUser)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('General')

  const submit = () => {
    if (!title || !body) return
    addAnnouncement({ title, body, category, authorId: currentUser?.id, authorName: currentUser?.name, audience: 'teacher' })
    setTitle(''); setBody('')
  }

  const teacherAnnouncements = announcements.filter(a => a.audience === 'teacher' || a.audience === 'all')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .ann-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 1rem; }
        .create-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 2rem; }
        .form-input { width: 100%; padding: 0.6rem 0.875rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; margin-bottom: 0.75rem; font-family: Inter, sans-serif; }
        .form-input:focus { outline: none; border-color: #6B46C1; }
        .submit-btn { background: #6B46C1; color: white; border: none; border-radius: 8px; padding: 0.6rem 1.5rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
        .cat-badge { font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; background: rgba(107,70,193,0.08); color: #6B46C1; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Announcements</h2>

      <div className="create-card">
        <div style={{ fontWeight: 700, color: '#1A202C', marginBottom: '1rem' }}>Post Announcement</div>
        <input className="form-input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <select className="form-input" value={category} onChange={e => setCategory(e.target.value)} style={{ marginBottom: '0.75rem' }}>
          {['General','Enrollment','Exam','Payment','Event'].map(c => <option key={c}>{c}</option>)}
        </select>
        <textarea className="form-input" placeholder="Content..." rows={3} value={body} onChange={e => setBody(e.target.value)} />
        <button className="submit-btn" onClick={submit}>Post</button>
      </div>

      {teacherAnnouncements.map(a => (
        <div key={a.id} className="ann-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="cat-badge">{a.category}</span>
            <span style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{a.date}</span>
          </div>
          <h3 style={{ fontWeight: 700, color: '#1A202C', marginBottom: '0.5rem' }}>{a.title}</h3>
          <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: 1.65 }}>{a.body}</p>
        </div>
      ))}
    </div>
  )
}

