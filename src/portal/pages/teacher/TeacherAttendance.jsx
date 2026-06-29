import { useState } from 'react'
import useStore from '../../store/useStore'

const ACCENT = '#6B46C1'

export default function TeacherAttendance() {
  const currentUser = useStore(s => s.currentUser)
  const getTeacherStudents = useStore(s => s.getTeacherStudents)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const addAttendance = useStore(s => s.addAttendance)

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [status, setStatus] = useState('Present')

  const students = getTeacherStudents(currentUser?.id)

  const markAttendance = () => {
    if (!selectedStudent) return
    addAttendance({ studentId: selectedStudent.id, date, status })
    setSelectedStudent(null)
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .att-layout { display: grid; grid-template-columns: 280px 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .att-layout { grid-template-columns: 1fr; } }
        .student-item { padding: 0.75rem 1rem; font-size: 0.875rem; cursor: pointer; border-bottom: 1px solid #F4F6F9; color: #1A202C; transition: background 150ms; }
        .student-item:hover { background: #F4F6F9; }
        .student-item.selected { background: #FAF5FF; border-left: 3px solid ${ACCENT}; }
        .att-form { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; }
        .status-btn { padding: 0.5rem 1.25rem; border-radius: 8px; font-size: 0.875rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: white; color: #718096; transition: all 200ms; }
        .status-btn.active { color: white; }
        .save-btn { background: ${ACCENT}; color: white; border: none; border-radius: 8px; padding: 0.6rem 1.5rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
        .history-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; margin-top: 1.5rem; }
        .history-table table { width: 100%; border-collapse: collapse; }
        .history-table th { background: #F4F6F9; padding: 0.6rem 0.75rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; }
        .history-table td { padding: 0.6rem 0.75rem; font-size: 0.82rem; border-top: 1px solid #E2E8F0; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Mark Attendance</h2>
      <div className="att-layout">
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Select Student</div>
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            {students.map(s => (
              <div key={s.id} className={`student-item ${selectedStudent?.id === s.id ? 'selected' : ''}`} onClick={() => setSelectedStudent(s)}>{s.name}</div>
            ))}
          </div>
        </div>
        <div>
          {selectedStudent ? (
            <div className="att-form">
              <div style={{ fontWeight: 700, color: '#1A202C', marginBottom: '1.25rem' }}>{selectedStudent.name} — {selectedStudent.section}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div><label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#718096', display: 'block', marginBottom: '0.3rem' }}>Date</label><input className="grade-input" type="date" value={date} onChange={e => setDate(e.target.value)} style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', fontSize: '0.875rem' }} /></div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {['Present','Late','Absent'].map(s => (
                  <button key={s} className={`status-btn ${status === s ? 'active' : ''}`} style={status === s ? { background: { Present: '#38A169', Late: '#D69E2E', Absent: '#E53E3E' }[s], borderColor: { Present: '#38A169', Late: '#D69E2E', Absent: '#E53E3E' }[s] } : {}} onClick={() => setStatus(s)}>{s}</button>
                ))}
              </div>
              <button className="save-btn" onClick={markAttendance}>Mark Attendance</button>

              <div className="history-table">
                <table>
                  <thead><tr><th>Date</th><th>Status</th></tr></thead>
                  <tbody>
                    {getStudentAttendance(selectedStudent.id).slice(0, 10).map(a => (
                      <tr key={a.id}><td>{a.date}</td><td>{a.status}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '3rem', textAlign: 'center', color: '#A0AEC0' }}>
              Select a student to mark attendance.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

