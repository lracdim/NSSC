import { useState } from 'react'
import useStore from '../../store/useStore'

export default function TeacherGradeEntry() {
  const currentUser = useStore(s => s.currentUser)
  const getTeacherStudents = useStore(s => s.getTeacherStudents)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const addGrade = useStore(s => s.addGrade)

  const params = new URLSearchParams(window.location.search)
  const subject = params.get('subject') || ''
  const section = params.get('section') || ''

  const [selectedStudent, setSelectedStudent] = useState(null)
  const [gradeData, setGradeData] = useState({ quiz: '', seatwork: '', assignment: '', exam: '' })
  const [term, setTerm] = useState('1st Quarter')

  const students = getTeacherStudents(currentUser?.id).filter(s => s.section === section)
  const grades = selectedStudent ? getStudentGrades(selectedStudent.id) : []

  const saveGrade = () => {
    if (!selectedStudent) return
    addGrade({ studentId: selectedStudent.id, subject, term, quiz: gradeData.quiz, seatwork: gradeData.seatwork, assignment: gradeData.assignment, exam: gradeData.exam })
    setGradeData({ quiz: '', seatwork: '', assignment: '', exam: '' })
    setSelectedStudent(null)
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .grade-layout { display: grid; grid-template-columns: 280px 1fr; gap: 1.5rem; }
        @media (max-width: 768px) { .grade-layout { grid-template-columns: 1fr; } }
        .student-list { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .student-item { padding: 0.75rem 1rem; font-size: 0.875rem; cursor: pointer; border-bottom: 1px solid #F4F6F9; color: #1A202C; transition: background 150ms; }
        .student-item:hover { background: #F4F6F9; }
        .student-item.selected { background: #FAF5FF; border-left: 3px solid #6B46C1; }
        .grade-form { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; }
        .grade-input { width: 100%; padding: 0.5rem 0.75rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; outline: none; }
        .grade-input:focus { border-color: #6B46C1; }
        .save-btn { background: #6B46C1; color: white; border: none; border-radius: 8px; padding: 0.6rem 1.5rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
        .grade-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; margin-top: 1.5rem; }
        .grade-table table { width: 100%; border-collapse: collapse; }
        .grade-table th { background: #F4F6F9; padding: 0.6rem 0.75rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; }
        .grade-table td { padding: 0.6rem 0.75rem; font-size: 0.82rem; border-top: 1px solid #E2E8F0; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.5rem' }}>Grade Entry</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '2rem' }}>{subject} · {section}</p>

      <div className="grade-layout">
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Select Student</div>
          <div className="student-list">
            {students.map(s => (
              <div key={s.id} className={`student-item ${selectedStudent?.id === s.id ? 'selected' : ''}`} onClick={() => setSelectedStudent(s)}>
                {s.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          {selectedStudent ? (
            <div className="grade-form">
              <div style={{ fontWeight: 700, color: '#1A202C', marginBottom: '1rem' }}>{selectedStudent.name}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <select className="grade-input" value={term} onChange={e => setTerm(e.target.value)}>
                  {['1st Quarter','2nd Quarter','3rd Quarter','4th Quarter'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                {[['quiz','Quiz'],['seatwork','Seatwork'],['assignment','Assignment'],['exam','Exam']].map(([k, l]) => (
                  <div key={k}><label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#718096', display: 'block', marginBottom: '0.3rem' }}>{l}</label><input className="grade-input" type="number" min="0" max="100" placeholder="0–100" value={gradeData[k]} onChange={e => setGradeData(p => ({...p, [k]: e.target.value}))} /></div>
                ))}
              </div>
              <button className="save-btn" onClick={saveGrade}>Save Grade</button>

              <div className="grade-table">
                <table>
                  <thead><tr><th>Subject</th><th>Term</th><th>Quiz</th><th>SW</th><th>Assign</th><th>Exam</th></tr></thead>
                  <tbody>
                    {grades.filter(g => g.subject === subject).map(g => (
                      <tr key={g.id}><td>{g.subject}</td><td>{g.term}</td><td>{g.quiz}</td><td>{g.seatwork}</td><td>{g.assignment}</td><td>{g.exam}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '3rem', textAlign: 'center', color: '#A0AEC0' }}>
              Select a student from the list to enter grades.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

