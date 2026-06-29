import { useState } from 'react'
import useStore from '../../store/useStore'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const COLORS = ['#E8F5EE', '#EBF8FF', '#FAF5FF', '#FFF5F5', '#FFFBEB', '#F0FFF4']

export default function ParentSchedule() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentSchedule = useStore(s => s.getStudentSchedule)
  const [selectedChild, setSelectedChild] = useState(0)

  const myChildren = students.filter(s => currentUser?.children?.includes(s.id))
  const child = myChildren[selectedChild] || myChildren[0]
  if (!child) return <div style={{ color: '#718096' }}>No children enrolled.</div>

  const schedule = getStudentSchedule(child.id)

  const byDay = DAYS.map(day => ({
    day,
    items: schedule.filter(s => s.day === day)
  }))

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .child-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .child-tab { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .child-tab.active { border-color: #1E6B45; color: #1E6B45; background: #E8F5EE; }
        .schedule-grid { display: grid; grid-template-columns: 100px repeat(6, 1fr); gap: 0.5rem; }
        .day-label { font-size: 0.72rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem 0; text-align: center; }
        .time-slot { font-size: 0.72rem; color: #A0AEC0; text-align: center; padding: 0.5rem 0; border-top: 1px solid #E2E8F0; }
        .cell { min-height: 48px; border-top: 1px solid #E2E8F0; padding: 0.25rem; }
        .subject-card { border-radius: 8px; padding: 0.4rem 0.5rem; font-size: 0.72rem; height: 100%; }
        .subject-name { font-weight: 600; color: #1A202C; }
        .subject-teacher { color: #718096; font-size: 0.65rem; margin-top: 0.1rem; }
        .subject-room { color: #A0AEC0; font-size: 0.65rem; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>Class Schedule</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{child.name} · {child.section}</p>

      {myChildren.length > 1 && (
        <div className="child-tabs">
          {myChildren.map((c, i) => (
            <button key={c.id} className={`child-tab ${selectedChild === i ? 'active' : ''}`} onClick={() => setSelectedChild(i)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.25rem', overflowX: 'auto' }}>
        <div className="schedule-grid">
          <div />
          {DAYS.map(d => <div key={d} className="day-label">{d}</div>)}

          {['7:30–8:30', '8:30–9:30', '9:30–10:30', '10:30–11:30', '1:00–2:00', '2:00–3:00', '3:00–4:00'].map(time => (
            <>
              <div key={time} className="time-slot">{time}</div>
              {DAYS.map((day, di) => {
                const items = byDay.find(d => d.day === day)?.items.filter(i => i.time === time) || []
                return (
                  <div key={`${day}-${time}`} className="cell">
                    {items.map((item, ii) => (
                      <div key={ii} className="subject-card" style={{ background: COLORS[di % COLORS.length] }}>
                        <div className="subject-name">{item.subject}</div>
                        <div className="subject-teacher">{item.teacher}</div>
                        <div className="subject-room">{item.room}</div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

