import { useState } from 'react'
import useStore from '../../store/useStore'

function StatusBadge({ status }) {
  const styles = {
    Present: { bg: '#F0FFF4', color: '#38A169' },
    Late: { bg: '#FFFBEB', color: '#D69E2E' },
    Absent: { bg: '#FFF5F5', color: '#E53E3E' },
  }
  const s = styles[status] || { bg: '#F4F6F9', color: '#718096' }
  return (
    <span style={{ background: s.bg, color: s.color, fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>
      {status}
    </span>
  )
}

export default function ParentAttendance() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const [selectedChild, setSelectedChild] = useState(0)

  const myChildren = students.filter(s => currentUser?.children?.includes(s.id))
  const child = myChildren[selectedChild] || myChildren[0]
  if (!child) return <div style={{ color: '#718096' }}>No children enrolled.</div>

  const attendance = getStudentAttendance(child.id)
  const sorted = [...attendance].sort((a, b) => b.date.localeCompare(a.date))
  const present = attendance.filter(a => a.status === 'Present').length
  const late = attendance.filter(a => a.status === 'Late').length
  const absent = attendance.filter(a => a.status === 'Absent').length

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .child-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .child-tab { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .child-tab.active { border-color: #1E6B45; color: #1E6B45; background: #E8F5EE; }
        .stat-row { display: flex; gap: 1rem; margin-bottom: 2rem; }
        .stat-box { flex: 1; background: white; border-radius: 12px; border: 1px solid #E2E8F0; padding: 1rem 1.25rem; text-align: center; }
        .att-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .att-table table { width: 100%; border-collapse: collapse; }
        .att-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .att-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .att-table tr:nth-child(even) td { background: #FAFBFC; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>Attendance Record</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{child.name} · School Year 2024–2025</p>

      {myChildren.length > 1 && (
        <div className="child-tabs">
          {myChildren.map((c, i) => (
            <button key={c.id} className={`child-tab ${selectedChild === i ? 'active' : ''}`} onClick={() => setSelectedChild(i)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div className="stat-row">
        <div className="stat-box">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38A169' }}>{present}</div>
          <div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Present</div>
        </div>
        <div className="stat-box">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#D69E2E' }}>{late}</div>
          <div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Late</div>
        </div>
        <div className="stat-box">
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#E53E3E' }}>{absent}</div>
          <div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Absent</div>
        </div>
      </div>

      <div className="att-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((a, i) => {
              const d = new Date(a.date + 'T00:00:00')
              const dayName = d.toLocaleDateString('en-US', { weekday: 'long' })
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: '#1A202C' }}>{d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td style={{ color: '#718096' }}>{dayName}</td>
                  <td><StatusBadge status={a.status} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

