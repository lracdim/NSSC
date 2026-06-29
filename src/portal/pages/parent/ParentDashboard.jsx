import { useState } from 'react'
import { TrendingUp, Calendar, CreditCard, Bell } from 'lucide-react'
import useStore from '../../store/useStore'

function StatCard({ icon, value, label, sub, color }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', flex: 1, minWidth: '200px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color, marginBottom: '1rem' }}>
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

export default function ParentDashboard() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const computeGWA = useStore(s => s.computeGWA)
  const getStudentAttendance = useStore(s => s.getStudentAttendance)
  const getStudentPayments = useStore(s => s.getStudentPayments)
  const getUnreadCount = useStore(s => s.getUnreadCount)

  const [selectedChild, setSelectedChild] = useState(0)

  const myChildren = students.filter(s => currentUser?.children?.includes(s.id))
  const child = myChildren[selectedChild] || myChildren[0]
  if (!child) return <div style={{ padding: '2rem', color: '#718096' }}>No children enrolled.</div>

  const grades = getStudentGrades(child.id)
  const gwa = computeGWA(child.id)
  const attendance = getStudentAttendance(child.id)
  const payments = getStudentPayments(child.id)

  const presentCount = attendance.filter(a => a.status === 'Present').length
  const totalDays = attendance.length
  const attendanceRate = totalDays > 0 ? Math.round((presentCount / totalDays) * 100) : 0
  const balance = child.tuitionTotal - child.tuitionPaid

  const recentGrades = grades.slice(0, 5)
  const unread = getUnreadCount(currentUser?.id)

  const currentTerm = 'Midterm'
  const gradePeriods = ['prelim', 'midterm', 'prefinal', 'final']

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        .section-title { font-size: 1.1rem; font-weight: 700; color: #1A202C; margin-bottom: 1rem; }
        .child-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .child-tab { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .child-tab.active { border-color: #1E6B45; color: #1E6B45; background: #E8F5EE; }
        .stats-row { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .grade-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .grade-table table { width: 100%; border-collapse: collapse; }
        .grade-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .grade-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .grade-table tr:nth-child(even) td { background: #FAFBFC; }
        .balance-warn { background: #FFFBEB; border: 1px solid #F6E05E; border-radius: 12px; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; }
        .balance-ok { background: #F0FFF4; border: 1px solid #9AE6B4; border-radius: 12px; padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; }
        .pay-btn { background: #1E6B45; color: white; border: none; border-radius: 9999px; padding: 0.5rem 1.25rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; }
        .student-info { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .info-badge { background: #F4F6F9; color: #718096; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 6px; }
      `}</style>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>
          Welcome back, {currentUser?.name?.split(' ')[0]}
        </h2>
        <p style={{ color: '#718096', fontSize: '0.9rem' }}>Here's an overview of your children's status.</p>
      </div>

      {myChildren.length > 1 && (
        <div className="child-tabs">
          {myChildren.map((c, i) => (
            <button key={c.id} className={`child-tab ${selectedChild === i ? 'active' : ''}`} onClick={() => setSelectedChild(i)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div className="student-info">
        <span className="info-badge">{child.level}</span>
        <span className="info-badge">{child.program}</span>
        <span className="info-badge">Section {child.section}</span>
        <span className="info-badge">S.Y. {child.schoolYear}</span>
      </div>

      <div className="stats-row">
        <StatCard icon={<TrendingUp size={20} />} value={gwa || '—'} label="Current GWA" sub={`as of ${currentTerm}`} color="#1E6B45" />
        <StatCard icon={<Calendar size={20} />} value={`${attendanceRate}%`} label="Attendance Rate" sub={`${presentCount} days present out of ${totalDays}`} color={attendanceRate >= 95 ? '#38A169' : attendanceRate >= 85 ? '#D69E2E' : '#E53E3E'} />
        <StatCard icon={<CreditCard size={20} />} value={`₱${balance.toLocaleString()}`} label="Tuition Balance" sub={`₱${child.tuitionPaid.toLocaleString()} of ₱${child.tuitionTotal.toLocaleString()} paid`} color={balance === 0 ? '#38A169' : '#E53E3E'} />
        <StatCard icon={<Bell size={20} />} value={unread} label="Announcements" sub="unread messages" color="#1E6B45" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '1.5rem', alignItems: 'start' }}>
        <div>
          <div className="section-title">Recent Grades</div>
          <div className="grade-table">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Prelim</th>
                  <th>Midterm</th>
                  <th>Pre-Final</th>
                  <th>Final</th>
                  <th>Ave</th>
                </tr>
              </thead>
              <tbody>
                {recentGrades.map((s, i) => {
                  const available = gradePeriods.filter(p => s[p] !== null && s[p] !== undefined)
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
          {balance > 0 ? (
            <div className="balance-warn">
              <div>
                <div style={{ fontWeight: 700, color: '#744210', fontSize: '0.9rem' }}>Outstanding Balance</div>
                <div style={{ color: '#975A16', fontSize: '0.8rem', marginTop: '0.25rem' }}>₱{balance.toLocaleString()}</div>
              </div>
              <button className="pay-btn" onClick={() => window.location.href = '/parents/payments'}>Pay Now</button>
            </div>
          ) : (
            <div className="balance-ok">
              <div>
                <div style={{ fontWeight: 700, color: '#276749', fontSize: '0.9rem' }}>Tuition Fully Paid ✓</div>
                <div style={{ color: '#48BB78', fontSize: '0.8rem', marginTop: '0.25rem' }}>S.Y. 2024–2025</div>
              </div>
            </div>
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <div className="section-title">Payment History</div>
            {payments.slice(0, 3).map(p => (
              <div key={p.id} style={{ background: 'white', borderRadius: '10px', border: '1px solid #E2E8F0', padding: '0.85rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#1A202C' }}>{p.term}</div>
                  <div style={{ fontSize: '0.72rem', color: '#718096' }}>{p.date} · {p.method}</div>
                </div>
                <div style={{ color: '#38A169', fontWeight: 700, fontSize: '0.875rem' }}>₱{p.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

