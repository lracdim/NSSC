import { TrendingUp, Calendar, CreditCard, Bell } from 'lucide-react'
import useStore from '../../store/useStore'

function StatCard({ icon, value, label, sub, color }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', flex: 1, minWidth: '200px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EBF8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: '1rem' }}>
        {icon}
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1A202C', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.5rem' }}>{label}</div>
      {sub && <div style={{ fontSize: '0.75rem', color: '#A0AEC0', marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  )
}

function gradeColor(g) {
  if (g === null || g === undefined) return '#A0AEC0'
  if (g >= 90) return '#38A169'
  if (g >= 85) return '#1A202C'
  if (g >= 75) return '#D69E2E'
  return '#E53E3E'
}

export default function StudentDashboard() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const computeGWA = useStore(s => s.computeGWA)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const getUnreadCount = useStore(s => s.getUnreadCount)

  const student = students.find(s => s.id === currentUser?.studentId)
  if (!student) return <div style={{ color: '#718096' }}>Student record not found.</div>

  const grades = getStudentGrades(student.id)
  const gwa = computeGWA(student.id)
  const attendance = getStudentAttendance(student.id)
  const presentCount = attendance.filter(a => a.status === 'Present').length
  const totalDays = attendance.length
  const attendanceRate = totalDays > 0 ? Math.round((presentCount / totalDays) * 100) : 0
  const balance = student.tuitionTotal - student.tuitionPaid
  const unread = getUnreadCount(currentUser?.id)
  const recentGrades = grades.slice(0, 5)
  const gradePeriods = ['prelim', 'midterm', 'prefinal', 'final']

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .section-title { font-size: 1.1rem; font-weight: 700; color: #1A202C; margin-bottom: 1rem; }
        .info-badge { background: #EBF8FF; color: #2B6CB0; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 6px; display: inline-block; margin-right: 0.5rem; margin-bottom: 0.5rem; }
        .stats-row { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .grade-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .grade-table table { width: 100%; border-collapse: collapse; }
        .grade-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .grade-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .grade-table tr:nth-child(even) td { background: #FAFBFC; }
        .exam-item { background: white; border-radius: 10px; border: 1px solid #E2E8F0; padding: 0.85rem 1rem; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center; }
      `}</style>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>
          Welcome back, {currentUser?.name?.split(' ')[0]}
        </h2>
        <div>
          <span className="info-badge">{student.level}</span>
          <span className="info-badge">{student.program}</span>
          <span className="info-badge">{student.section}</span>
        </div>
      </div>

      <div className="stats-row">
        <StatCard icon={<TrendingUp size={20} />} value={gwa || '—'} label="Current GWA" sub="as of Midterm" color="#2B6CB0" />
        <StatCard icon={<Calendar size={20} />} value={`${attendanceRate}%`} label="Attendance Rate" sub={`${presentCount} days present`} color={attendanceRate >= 95 ? '#38A169' : '#D69E2E'} />
        <StatCard icon={<CreditCard size={20} />} value={`₱${balance.toLocaleString()}`} label="Tuition Balance" sub={balance === 0 ? 'Fully paid' : 'Outstanding'} color={balance === 0 ? '#38A169' : '#E53E3E'} />
        <StatCard icon={<Bell size={20} />} value={unread} label="Announcements" sub="unread" color="#2B6CB0" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem', alignItems: 'start' }}>
        <div>
          <div className="section-title">Recent Grades</div>
          <div className="grade-table">
            <table>
              <thead>
                <tr>
                  <th>Subject</th><th>Prelim</th><th>Midterm</th><th>Pre-Final</th><th>Final</th><th>Ave</th>
                </tr>
              </thead>
              <tbody>
                {recentGrades.map((s, i) => {
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
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="section-title">Upcoming Exams</div>
          {[
            { name: 'General Biology 2 — Long Exam', date: 'March 17, 2025', room: 'Science Lab' },
            { name: 'Basic Calculus — Problem Set 3', date: 'March 18, 2025', room: 'SHS Room 1' },
            { name: 'English for Academic — Essay', date: 'March 19, 2025', room: 'Room 302' },
          ].map((exam, i) => (
            <div key={i} className="exam-item">
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#1A202C' }}>{exam.name}</div>
                <div style={{ fontSize: '0.72rem', color: '#718096', marginTop: '0.15rem' }}>{exam.date} · {exam.room}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

