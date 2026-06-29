import useStore from '../../store/useStore'

function StatusBadge({ status }) {
  const s = { Present: { bg: '#F0FFF4', color: '#38A169' }, Late: { bg: '#FFFBEB', color: '#D69E2E' }, Absent: { bg: '#FFF5F5', color: '#E53E3E' } }[status] || { bg: '#F4F6F9', color: '#718096' }
  return <span style={{ background: s.bg, color: s.color, fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{status}</span>
}

export default function StudentAttendance() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const student = students.find(s => s.id === currentUser?.studentId)
  if (!student) return <div>Not found.</div>
  const attendance = getStudentAttendance(student.id)
  const sorted = [...attendance].sort((a, b) => b.date.localeCompare(a.date))
  const p = attendance.filter(a => a.status === 'Present').length
  const l = attendance.filter(a => a.status === 'Late').length
  const a = attendance.filter(a => a.status === 'Absent').length
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .stat-row { display: flex; gap: 1rem; margin-bottom: 2rem; }
        .stat-box { flex: 1; background: white; border-radius: 12px; border: 1px solid #E2E8F0; padding: 1rem 1.25rem; text-align: center; }
        .att-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .att-table table { width: 100%; border-collapse: collapse; }
        .att-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .att-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .att-table tr:nth-child(even) td { background: #FAFBFC; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>My Attendance</h2>
      <div className="stat-row">
        <div className="stat-box"><div style={{ fontSize: '2rem', fontWeight: 800, color: '#38A169' }}>{p}</div><div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Present</div></div>
        <div className="stat-box"><div style={{ fontSize: '2rem', fontWeight: 800, color: '#D69E2E' }}>{l}</div><div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Late</div></div>
        <div className="stat-box"><div style={{ fontSize: '2rem', fontWeight: 800, color: '#E53E3E' }}>{a}</div><div style={{ fontSize: '0.8rem', color: '#718096', marginTop: '0.25rem' }}>Absent</div></div>
      </div>
      <div className="att-table">
        <table>
          <thead><tr><th>Date</th><th>Day</th><th>Status</th></tr></thead>
          <tbody>
            {sorted.map((att, i) => {
              const d = new Date(att.date + 'T00:00:00')
              return <tr key={i}><td style={{ fontWeight: 600, color: '#1A202C' }}>{d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td><td style={{ color: '#718096' }}>{d.toLocaleDateString('en-US', { weekday: 'long' })}</td><td><StatusBadge status={att.status} /></td></tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

