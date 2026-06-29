import { useState } from 'react'
import useStore from '../../store/useStore'

const CATEGORIES = ['All', 'Enrollment', 'Exam', 'Payment', 'Event', 'Suspension']

export default function ParentAnnouncements() {
  const currentUser = useStore(s => s.currentUser)
  const allAnnouncements = useStore(s => s.announcements)
  const announcements = allAnnouncements.filter(a => a.targetRoles.includes('parent'))
  const markAnnouncementRead = useStore(s => s.markAnnouncementRead)
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? announcements : announcements.filter(a => a.category === filter)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .filter-row { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .filter-btn { padding: 0.4rem 1rem; border-radius: 9999px; font-size: 0.78rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .filter-btn.active { background: #1E6B45; color: white; border-color: #1E6B45; }
        .ann-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 1rem; cursor: pointer; transition: all 200ms; }
        .ann-card.unread { border-left: 4px solid #1E6B45; }
        .ann-card.read { border-left: 4px solid #E2E8F0; }
        .ann-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .cat-badge { font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; background: rgba(30,107,69,0.08); color: #1E6B45; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Announcements</h2>

      <div className="filter-row">
        {CATEGORIES.map(cat => (
          <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', color: '#A0AEC0', padding: '3rem' }}>No announcements found.</div>
      )}

      {filtered.map(a => {
        const isRead = currentUser ? a.isRead.includes(currentUser.id) : false
        return (
          <div
            key={a.id}
            className={`ann-card ${isRead ? 'read' : 'unread'}`}
            onClick={() => markAnnouncementRead(a.id, currentUser?.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <span className="cat-badge">{a.category}</span>
              <span style={{ fontSize: '0.75rem', color: '#A0AEC0' }}>{a.date}</span>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A202C', marginBottom: '0.5rem' }}>{a.title}</h3>
            <p style={{ fontSize: '0.875rem', color: '#718096', lineHeight: 1.65 }}>{a.body}</p>
            {!isRead && <div style={{ fontSize: '0.7rem', color: '#1E6B45', fontWeight: 600, marginTop: '0.75rem' }}>New</div>}
          </div>
        )
      })}
    </div>
  )
}

