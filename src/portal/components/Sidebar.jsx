import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, BarChart2, Calendar, CreditCard, Bell, BookOpen, ClipboardList, GraduationCap, UserCog, LogOut } from 'lucide-react'
import useStore from '../store/useStore'

const PARENT_NAV = [
  { icon: <LayoutDashboard size={17} />, label: 'Dashboard', path: '/parents/dashboard' },
  { icon: <Users size={17} />, label: 'My Children', path: '/parents/children' },
  { icon: <BarChart2 size={17} />, label: 'Grades', path: '/parents/grades' },
  { icon: <Calendar size={17} />, label: 'Attendance', path: '/parents/attendance' },
  { icon: <BookOpen size={17} />, label: 'Schedule', path: '/parents/schedule' },
  { icon: <CreditCard size={17} />, label: 'Payments', path: '/parents/payments' },
  { icon: <Bell size={17} />, label: 'Announcements', path: '/parents/announcements' },
]

const STUDENT_NAV = [
  { icon: <LayoutDashboard size={17} />, label: 'Dashboard', path: '/students/dashboard' },
  { icon: <BarChart2 size={17} />, label: 'My Grades', path: '/students/grades' },
  { icon: <Calendar size={17} />, label: 'Attendance', path: '/students/attendance' },
  { icon: <BookOpen size={17} />, label: 'Schedule', path: '/students/schedule' },
  { icon: <CreditCard size={17} />, label: 'Payments', path: '/students/payments' },
  { icon: <Bell size={17} />, label: 'Announcements', path: '/students/announcements' },
]

const TEACHER_NAV = [
  { icon: <LayoutDashboard size={17} />, label: 'Dashboard', path: '/teachers/dashboard' },
  { icon: <Users size={17} />, label: 'My Classes', path: '/teachers/classes' },
  { icon: <ClipboardList size={17} />, label: 'Grade Entry', path: '/teachers/grades' },
  { icon: <Calendar size={17} />, label: 'Attendance', path: '/teachers/attendance' },
  { icon: <Bell size={17} />, label: 'Announcements', path: '/teachers/announcements' },
]

const ADMIN_NAV = [
  { icon: <LayoutDashboard size={17} />, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: <UserCog size={17} />, label: 'User Management', path: '/admin/users' },
  { icon: <GraduationCap size={17} />, label: 'Students', path: '/admin/students' },
  { icon: <CreditCard size={17} />, label: 'Payments', path: '/admin/payments' },
  { icon: <Bell size={17} />, label: 'Announcements', path: '/admin/announcements' },
]

const ACCENT = '#1E6B45'

export default function Sidebar() {
  const location = useLocation()
  const currentUser = useStore(s => s.currentUser)
  const logout = useStore(s => s.logout)

  if (!currentUser) return null

  const nav = currentUser.role === 'parent' ? PARENT_NAV
    : currentUser.role === 'student' ? STUDENT_NAV
    : currentUser.role === 'teacher' ? TEACHER_NAV
    : ADMIN_NAV

  const roleLabel = { parent: 'Parent Portal', student: 'Student Portal', teacher: 'Teacher Portal', admin: 'Admin Portal' }

  const isActive = (path) => location.pathname.startsWith(path)

  const handleLogout = () => {
    logout()
    const role = currentUser.role
    window.location.href = role === 'parent' ? '/parents'
      : role === 'student' ? '/students'
      : role === 'admin' ? '/admin'
      : '/teachers'
  }

  return (
    <div style={{
      position: 'fixed', left: 0, top: 0, bottom: 0, width: '240px',
      background: '#FFFFFF',
      borderRight: '1px solid #E5E7EB',
      zIndex: 30,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        .snav-item {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0.6rem 0.875rem; border-radius: 8px;
          cursor: pointer; transition: background 150ms, color 150ms;
          color: #4B5563; text-decoration: none;
          font-size: 0.855rem; font-weight: 500; font-family: 'Inter', sans-serif;
        }
        .snav-item:hover { background: #F1F1EB; color: #1E6B45; }
        .snav-item.active { background: #1E6B45; color: #FFFFFF; }
        .snav-section { font-size: 0.63rem; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.1em; padding: 0 0.875rem; margin: 1rem 0 0.35rem; }
        .slogout-btn {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0.6rem 0.875rem; border-radius: 8px;
          cursor: pointer; transition: background 150ms, color 150ms;
          color: #9CA3AF; font-size: 0.855rem; font-weight: 500;
          font-family: 'Inter', sans-serif; border: none; background: none; width: 100%;
        }
        .slogout-btn:hover { background: #FEF2F2; color: #DC2626; }
      `}</style>

      {/* Logo */}
      <div style={{ padding: '1.25rem 1rem 1rem', borderBottom: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <img src="/logo.png" alt="New Sinai" style={{ width: 36, height: 36, objectFit: 'contain', borderRadius: '8px', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '0.8rem', color: '#111827', letterSpacing: '0.01em', lineHeight: 1.2 }}>NEW SINAI</div>
          <div style={{ fontSize: '0.65rem', color: ACCENT, fontWeight: 600, letterSpacing: '0.05em' }}>{roleLabel[currentUser.role] || 'e-Skwela'}</div>
        </div>
      </div>

      {/* User */}
      <div style={{ padding: '0.875rem 1rem', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
            {currentUser.avatar}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentUser.name}</div>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: ACCENT, background: '#E8F5EE', padding: '0.1rem 0.5rem', borderRadius: '9999px', display: 'inline-block', textTransform: 'capitalize', marginTop: '0.15rem' }}>
              {currentUser.role}
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem 0.625rem' }}>
        <div className="snav-section">Main Menu</div>
        {nav.map(item => (
          <Link key={item.path} to={item.path} className={`snav-item${isActive(item.path) ? ' active' : ''}`}>
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>

      {/* Sign out */}
      <div style={{ padding: '0.625rem', borderTop: '1px solid #F3F4F6' }}>
        <button className="slogout-btn" onClick={handleLogout}>
          <LogOut size={17} />
          Sign Out
        </button>
      </div>
    </div>
  )
}
