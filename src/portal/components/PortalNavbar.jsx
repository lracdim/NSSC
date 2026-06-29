import { useLocation } from 'react-router-dom'
import { Bell } from 'lucide-react'
import useStore from '../store/useStore'

const PAGE_TITLES = {
  '/parents/dashboard': 'Dashboard',
  '/parents/children': 'My Children',
  '/parents/grades': 'Grades',
  '/parents/attendance': 'Attendance',
  '/parents/schedule': 'Schedule',
  '/parents/payments': 'Payments',
  '/parents/announcements': 'Announcements',
  '/students/dashboard': 'Dashboard',
  '/students/grades': 'My Grades',
  '/students/attendance': 'Attendance',
  '/students/schedule': 'Schedule',
  '/students/payments': 'Payments',
  '/students/announcements': 'Announcements',
  '/teachers/dashboard': 'Dashboard',
  '/teachers/classes': 'My Classes',
  '/teachers/grades': 'Grade Entry',
  '/teachers/attendance': 'Mark Attendance',
  '/teachers/announcements': 'Announcements',
  '/admin/dashboard': 'Dashboard',
  '/admin/users': 'User Management',
  '/admin/students': 'Student Records',
  '/admin/payments': 'Payment Management',
  '/admin/announcements': 'Announcements',
}

export default function PortalNavbar() {
  const location = useLocation()
  const currentUser = useStore(s => s.currentUser)
  const getUnreadCount = useStore(s => s.getUnreadCount)

  const title = PAGE_TITLES[location.pathname] || 'Portal'
  const unread = currentUser ? getUnreadCount(currentUser.id) : 0

  return (
    <div style={{
      position: 'fixed', top: 0, left: '240px', right: 0, height: '64px',
      background: 'white', borderBottom: '1px solid #E2E8F0', zIndex: 20,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <h1 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A202C', margin: 0, fontFamily: 'Inter, sans-serif' }}>
        {title}
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#F4F6F9', padding: '0.35rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#718096', fontWeight: 500 }}>
          S.Y. 2024–2025
        </div>

        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="#718096" />
          {unread > 0 && (
            <div style={{
              position: 'absolute', top: '-6px', right: '-6px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: '#E53E3E', color: 'white',
              fontSize: '0.6rem', fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {unread}
            </div>
          )}
        </div>

        {currentUser && (
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: '#1E6B45', color: 'white',
            fontSize: '0.75rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {currentUser.avatar}
          </div>
        )}
      </div>
    </div>
  )
}