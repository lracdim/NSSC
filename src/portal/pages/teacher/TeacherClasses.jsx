import useStore from '../../store/useStore'

const ACCENT = '#6B46C1'

export default function TeacherClasses() {
  const currentUser = useStore(s => s.currentUser)
  const getTeacherStudents = useStore(s => s.getTeacherStudents)
  const getTeacherSubjects = useStore(s => s.getTeacherSubjects)
  const teacher = currentUser
  const students = getTeacherStudents(teacher?.id)
  const subjects = getTeacherSubjects(teacher?.id)
  const sections = teacher?.sections || []

  const getSectionStudents = (section) => students.filter(s => s.section === section)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .class-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 1rem; }
        .section-badge { background: #FAF5FF; color: ${ACCENT}; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; }
        .student-row { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0; border-bottom: 1px solid #F4F6F9; }
        .student-avatar { width: 28px; height: 28px; border-radius: 50%; background: ${ACCENT}; color: white; font-size: 0.65rem; font-weight: 700; display: flex; align-items: center; justify-content: 'center'; flex-shrink: 0; }
        .action-btn { background: ${ACCENT}; color: white; border: none; border-radius: 8px; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; }
        .action-btn-outline { background: transparent; color: ${ACCENT}; border: 1.5px solid ${ACCENT}; border-radius: 8px; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>My Classes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1rem' }}>
        {sections.map(section => {
          const sectionStudents = getSectionStudents(section)
          return subjects.map(subj => (
            <div key={`${section}-${subj}`} className="class-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#1A202C', fontSize: '1rem' }}>{subj}</div>
                  <span className="section-badge">{section}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#718096' }}>{sectionStudents.length} students</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                {sectionStudents.slice(0, 3).map((s, i) => (
                  <div key={s.id} className="student-row">
                    <div className="student-avatar">{s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                    <span style={{ fontSize: '0.82rem', color: '#1A202C' }}>{s.name}</span>
                  </div>
                ))}
                {sectionStudents.length > 3 && <div style={{ fontSize: '0.75rem', color: '#A0AEC0', padding: '0.25rem 0' }}>+ {sectionStudents.length - 3} more students</div>}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="action-btn" onClick={() => window.location.href = `/teachers/grades?subject=${encodeURIComponent(subj)}&section=${encodeURIComponent(section)}`}>Enter Grades</button>
                <button className="action-btn-outline">Mark Attendance</button>
              </div>
            </div>
          ))
        })}
      </div>
    </div>
  )
}

