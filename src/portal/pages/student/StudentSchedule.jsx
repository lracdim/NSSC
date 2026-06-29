import useStore from '../../store/useStore'
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const COLORS = ['#E8F5EE', '#EBF8FF', '#FAF5FF', '#FFF5F5', '#FFFBEB', '#F0FFF4']
export default function StudentSchedule() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentSchedule = useStore(s => s.getStudentSchedule)
  const student = students.find(s => s.id === currentUser?.studentId)
  if (!student) return <div>Not found.</div>
  const schedule = getStudentSchedule(student.id)
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .schedule-grid { display: grid; grid-template-columns: 100px repeat(6, 1fr); gap: 0.5rem; }
        .day-label { font-size: 0.72rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.5rem 0; text-align: center; }
        .time-slot { font-size: 0.72rem; color: #A0AEC0; text-align: center; padding: 0.5rem 0; border-top: 1px solid #E2E8F0; }
        .cell { min-height: 48px; border-top: 1px solid #E2E8F0; padding: 0.25rem; }
        .subject-card { border-radius: 8px; padding: 0.4rem 0.5rem; font-size: 0.72rem; height: 100%; }
        .subject-name { font-weight: 600; color: #1A202C; }
        .subject-teacher { color: #718096; font-size: 0.65rem; margin-top: 0.1rem; }
        .subject-room { color: #A0AEC0; font-size: 0.65rem; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>My Class Schedule</h2>
      <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.25rem', overflowX: 'auto' }}>
        <div className="schedule-grid">
          <div />
          {DAYS.map(d => <div key={d} className="day-label">{d}</div>)}
          {['7:30–8:30', '8:30–9:30', '9:30–10:30', '10:30–11:30', '1:00–2:00', '2:00–3:00', '3:00–4:00'].map(time => (
            <>
              <div key={time} className="time-slot">{time}</div>
              {DAYS.map((day, di) => {
                const items = schedule.filter(s => s.day === day && s.time === time)
                return (
                  <div key={`${day}-${time}`} className="cell">
                    {items.map((item, ii) => (
                      <div key={ii} className="subject-card" style={{ background: COLORS[di % COLORS.length] }}>
                        <div className="subject-name">{item.subject}</div>
                        <div className="subject-teacher">{item.teacher}</div>
                        <div className="subject-room">{item.room}</div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

