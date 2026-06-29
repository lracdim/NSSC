import useStore from '../../store/useStore'

function gradeColor(g) {
  if (g === null || g === undefined) return '#A0AEC0'
  if (g >= 90) return '#38A169'
  if (g >= 85) return '#1A202C'
  if (g >= 75) return '#D69E2E'
  return '#E53E3E'
}

export default function StudentGrades() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const computeGWA = useStore(s => s.computeGWA)

  const student = students.find(s => s.id === currentUser?.studentId)
  if (!student) return <div style={{ color: '#718096' }}>Student record not found.</div>

  const grades = getStudentGrades(student.id)
  const gwa = computeGWA(student.id)
  const gradePeriods = ['prelim', 'midterm', 'prefinal', 'final']

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .info-badge { background: #EBF8FF; color: #2B6CB0; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 6px; display: inline-block; margin-right: 0.5rem; margin-bottom: 0.5rem; }
        .grade-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .grade-table table { width: 100%; border-collapse: collapse; }
        .grade-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .grade-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .grade-table tr:nth-child(even) td { background: #FAFBFC; }
        .gwa-row td { background: #2B6CB0 !important; color: white; font-weight: 800; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>My Report Card</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1rem' }}>School Year 2024–2025</p>
      <div>
        <span className="info-badge">{student.level}</span>
        <span className="info-badge">{student.program}</span>
        <span className="info-badge">{student.section}</span>
      </div>

      <div className="grade-table" style={{ marginTop: '1.5rem' }}>
        <table>
          <thead>
            <tr><th>Subject</th><th>Prelim</th><th>Midterm</th><th>Pre-Final</th><th>Final</th><th>Average</th></tr>
          </thead>
          <tbody>
            {grades.map((s, i) => {
              const available = gradePeriods.filter(p => s[p] !== null)
              const ave = available.length > 0 ? (available.reduce((a, p) => a + s[p], 0) / available.length).toFixed(1) : '—'
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: '#1A202C' }}>{s.name}</td>
                  <td style={{ color: gradeColor(s.prelim) }}>{s.prelim ?? '—'}</td>
                  <td style={{ color: gradeColor(s.midterm) }}>{s.midterm ?? '—'}</td>
                  <td style={{ color: gradeColor(s.prefinal) }}>{s.prefinal ?? '—'}</td>
                  <td style={{ color: gradeColor(s.final) }}>{s.final ?? '—'}</td>
                  <td style={{ color: gradeColor(parseFloat(ave)), fontWeight: 700 }}>{ave}</td>
                </tr>
              )
            })}
            <tr className="gwa-row">
              <td>General Weighted Average</td>
              <td colSpan={4} style={{ textAlign: 'right', paddingRight: '1rem' }}>Overall GWA</td>
              <td>{gwa || '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

