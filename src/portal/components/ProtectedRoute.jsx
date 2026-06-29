import { Navigate } from 'react-router-dom'
import useStore, { useHasHydrated } from '../store/useStore'

export default function ProtectedRoute({ children, role }) {
  const hasHydrated = useHasHydrated()
  const currentUser = useStore(s => s.currentUser)

  if (!hasHydrated) return null

  if (!currentUser) {
    const loginPath = role === 'parent' ? '/parents'
      : role === 'student' ? '/students'
      : role === 'teacher' ? '/teachers'
      : '/admin'
    return <Navigate to={loginPath} replace />
  }

  if (role && currentUser.role !== role) {
    const dest = currentUser.role === 'parent' ? '/parents/dashboard'
      : currentUser.role === 'student' ? '/students/dashboard'
      : currentUser.role === 'teacher' ? '/teachers/dashboard'
      : '/admin/dashboard'
    return <Navigate to={dest} replace />
  }

  return <>{children}</>
}