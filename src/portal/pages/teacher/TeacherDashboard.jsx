import { Users, BookOpen, GraduationCap, ClipboardList } from 'lucide-react'
import useStore from '../../store/useStore'

function StatCard({ icon, value, label, sub, color, bg }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', flex: 1, minWidth: '200px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg || '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: '1rem' }}>
        {icon}
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1A202C', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.5rem' }}>{label}</div>
      {sub && <div style={{ fontSize: '0.75rem', color: '#A0AEC0', marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  )
}

const ACCENT = '#6B46C1'

export default function TeacherDashboard() {
  const currentUser = useStore(s => s.currentUser)
  const getTeacherStudents = useStore(s => s.getTeacherStudents)
  const getPendingGradesCount = useStore(s => s.getPendingGradesCount)
  const getTeacherSubjects = useStore(s => s.getTeacherSubjects)

  const teacher = currentUser
  const students = getTeacherStudents(teacher?.id)
  const subjects = getTeacherSubjects(teacher?.id)
  const pending = getPendingGradesCount(teacher?.id)
  const sections = teacher?.sections || []

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .section-title { font-size: 1.1rem; font-weight: 700; color: #1A202C; margin-bottom: 1rem; }
        .stats-row { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .class-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .class-table table { width: 100%; border-collapse: collapse; }
        .class-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .class-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .class-table tr:nth-child(even) td { background: #FAFBFC; }
        .status-complete { background: #F0FFF4; color: #38A169; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; }
        .status-incomplete { background: #FFFBEB; color: #D69E2E; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; }
        .action-btn { background: ${ACCENT}; color: white; border: none; border-radius: 8px; padding: 0.45rem 1rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; }
      `}</style>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>Welcome back, {teacher?.name?.split(' ').slice(1).join(' ') || teacher?.name}</h2>
        <p style={{ color: '#718096', fontSize: '0.875rem' }}>{teacher?.department} Department · {teacher?.employeeId}</p>
      </div>

      <div className="stats-row">
        <StatCard icon={<Users size={20} />} value={sections.length} label="My Classes" sub={`${sections.length} active sections`} color={ACCENT} bg="#FAF5FF" />
        <StatCard icon={<BookOpen size={20} />} value={subjects.length} label="My Subjects" sub="this school year" color={ACCENT} bg="#FAF5FF" />
        <StatCard icon={<GraduationCap size={20} />} value={students.length} label="Total Students" sub="enrolled across all sections" color={ACCENT} bg="#FAF5FF" />
        <StatCard icon={<ClipboardList size={20} />} value={pending} label="Pending Grades" sub="awaiting grade entry" color={pending > 0 ? '#D69E2E' : '#38A169'} bg={pending > 0 ? '#FFFBEB' : '#F0FFF4'} />
      </div>

      <div className="section-title">My Classes This School Year</div>
      <div className="class-table">
        <table>
          <thead>
            <tr><th>Subject</th><th>Section</th><th>Students</th><th>Grades Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {sections.map((section, i) => {
              const sectionStudents = students.filter(s => s.section === section)
              return subjects.map((subj, j) => (
                <tr key={`${section}-${subj}`}>
                  <td style={{ fontWeight: 600, color: '#1A202C' }}>{subj}</td>
                  <td style={{ color: '#718096' }}>{section}</td>
                  <td style={{ color: '#718096' }}>{sectionStudents.length}</td>
                  <td><span className="status-incomplete">Incomplete</span></td>
                  <td><button className="action-btn" onClick={() => window.location.href = `/teachers/grades?subject=${encodeURIComponent(subj)}&section=${encodeURIComponent(section)}`}>Enter Grades</button></td>
                </tr>
              ))
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

