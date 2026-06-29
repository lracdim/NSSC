import { Users, GraduationCap, Currency, TrendingUp } from 'lucide-react'
import useStore from '../../store/useStore'

function StatCard({ icon, value, label, color, bg }) {
  return (
    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.5rem', flex: 1, minWidth: '200px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{icon}</div>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1A202C', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.5rem' }}>{label}</div>
    </div>
  )
}

export default function AdminDashboard() {
  const users = useStore(s => s.users)
  const students = useStore(s => s.students)
  const payments = useStore(s => s.payments)
  const announcements = useStore(s => s.announcements)

  const totalCollected = payments.reduce((sum, p) => sum + (p.status === 'Approved' ? p.amount : 0), 0)
  const balanceOwed = students.reduce((sum, s) => sum + (s.tuitionTotal - s.tuitionPaid), 0)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`* { box-sizing: border-box; } .stats-row { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .overview-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; }
        .overview-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.25rem; }
        .overview-card h4 { font-size: 0.875rem; font-weight: 700; color: #1A202C; margin-bottom: 0.75rem; }
        .mini-list { font-size: 0.82rem; }
        .mini-list-item { display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid #F4F6F9; color: #718096; }
        .mini-list-item:last-child { borderBottom: 'none' } `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>Admin Dashboard</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1.5rem' }}>School Year 2024–2025</p>

      <div className="stats-row">
        <StatCard icon={<Users size={20} />} value={users.length} label="Total Users" color="#2B6CB0" bg="#EBF8FF" />
        <StatCard icon={<GraduationCap size={20} />} value={students.length} label="Enrolled Students" color="#38A169" bg="#F0FFF4" />
        <StatCard icon={<Currency size={20} />} value={`₱${totalCollected.toLocaleString()}`} label="Total Collected" color="#38A169" bg="#F0FFF4" />
        <StatCard icon={<TrendingUp size={20} />} value={`₱${balanceOwed.toLocaleString()}`} label="Outstanding Balance" color="#E53E3E" bg="#FFF5F5" />
      </div>

      <div className="overview-grid">
        <div className="overview-card">
          <h4>Recent Payments</h4>
          <div className="mini-list">
            {payments.slice(-5).reverse().map(p => (
              <div key={p.id} className="mini-list-item">
                <span>{p.studentName}</span>
                <span style={{ fontWeight: 600, color: '#38A169' }}>₱{p.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overview-card">
          <h4>User Breakdown</h4>
          <div className="mini-list">
            {['Parent','Student','Teacher','Admin'].map(role => (
              <div key={role} className="mini-list-item">
                <span>{role}s</span>
                <span style={{ fontWeight: 600 }}>{users.filter(u => u.role === role.toLowerCase()).length}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overview-card">
          <h4>Latest Announcements</h4>
          <div className="mini-list">
            {announcements.slice(-4).reverse().map(a => (
              <div key={a.id} className="mini-list-item">
                <span style={{ color: '#1A202C', fontWeight: 600 }}>{a.title}</span>
                <span>{a.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

