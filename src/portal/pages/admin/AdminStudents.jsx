import { useState } from 'react'
import useStore from '../../store/useStore'

export default function AdminStudents() {
  const students = useStore(s => s.students)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.lrn.toLowerCase().includes(search.toLowerCase()))
  const s = selected ? students.find(st => st.id === selected) : null
  const grades = s ? getStudentGrades(s.id) : []
  const attendance = s ? getStudentAttendance(s.id) : []
  const pCount = attendance.filter(a => a.status === 'Present').length
  const lCount = attendance.filter(a => a.status === 'Late').length
  const aCount = attendance.filter(a => a.status === 'Absent').length

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .student-grid { display: grid; grid-template-columns: 280px 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .student-grid { grid-template-columns: 1fr; } }
        .student-list { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; max-height: 600px; overflow-y: auto; }
        .student-item { padding: 0.75rem 1rem; font-size: 0.875rem; cursor: pointer; border-bottom: 1px solid #F4F6F9; color: #1A202C; transition: background 150ms; }
        .student-item:hover { background: #F4F6F9; }
        .student-item.active { background: #EBF8FF; border-left: 3px solid #2B6CB0; }
        .detail-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; }
        .mini-stat { background: #F4F6F9; border-radius: 8px; padding: 0.5rem 0.75rem; text-align: center; flex: 1; }
        .mini-stat-val { font-size: 1.25rem; font-weight: 800; }
        .mini-stat-lbl { font-size: 0.7rem; color: #718096; }
        .search-input { width: 100%; padding: 0.5rem 0.875rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; margin-bottom: 1rem; }
        .detail-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        .detail-table th { background: #F4F6F9; padding: 0.5rem 0.75rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; }
        .detail-table td { padding: 0.5rem 0.75rem; font-size: 0.82rem; border-top: 1px solid #E2E8F0; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Student Records</h2>
      <div className="student-grid">
        <div>
          <input className="search-input" placeholder="Search by name or LRN..." value={search} onChange={e => setSearch(e.target.value)} />
          <div className="student-list">
            {filtered.map(st => (
              <div key={st.id} className={`student-item ${selected === st.id ? 'active' : ''}`} onClick={() => setSelected(st.id)}>
                <div style={{ fontWeight: 600 }}>{st.name}</div>
                <div style={{ fontSize: '0.72rem', color: '#A0AEC0' }}>{st.section} · LRN: {st.lrn}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {s ? (
            <div className="detail-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1A202C' }}>{s.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#718096' }}>{s.section} · LRN: {s.lrn}</div>
                  <div style={{ fontSize: '0.82rem', color: '#718096' }}>Parent: {s.parentName}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div className="mini-stat"><div className="mini-stat-val" style={{ color: '#38A169' }}>{pCount}</div><div className="mini-stat-lbl">Present</div></div>
                  <div className="mini-stat"><div className="mini-stat-val" style={{ color: '#D69E2E' }}>{lCount}</div><div className="mini-stat-lbl">Late</div></div>
                  <div className="mini-stat"><div className="mini-stat-val" style={{ color: '#E53E3E' }}>{aCount}</div><div className="mini-stat-lbl">Absent</div></div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, background: '#F4F6F9', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: '#718096' }}>Tuition Total</div>
                  <div style={{ fontWeight: 800, color: '#1A202C' }}>₱{s.tuitionTotal.toLocaleString()}</div>
                </div>
                <div style={{ flex: 1, background: '#F0FFF4', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: '#718096' }}>Paid</div>
                  <div style={{ fontWeight: 800, color: '#38A169' }}>₱{s.tuitionPaid.toLocaleString()}</div>
                </div>
                <div style={{ flex: 1, background: '#FFF5F5', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: '#718096' }}>Balance</div>
                  <div style={{ fontWeight: 800, color: '#E53E3E' }}>₱{(s.tuitionTotal - s.tuitionPaid).toLocaleString()}</div>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Recent Grades</div>
              <table className="detail-table">
                <thead><tr><th>Subject</th><th>Term</th><th>Quiz</th><th>SW</th><th>Assign</th><th>Exam</th></tr></thead>
                <tbody>
                  {grades.slice(0, 10).map(g => <tr key={g.id}><td>{g.subject}</td><td>{g.term}</td><td>{g.quiz}</td><td>{g.seatwork}</td><td>{g.assignment}</td><td>{g.exam}</td></tr>)}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '3rem', textAlign: 'center', color: '#A0AEC0' }}>
              Select a student to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

