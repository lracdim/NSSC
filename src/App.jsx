import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Preschool from './pages/Preschool'
import Elementary from './pages/Elementary'
import JuniorHigh from './pages/JuniorHigh'
import College from './pages/College'
import SeniorHigh from './pages/SeniorHigh'
import TESDA from './pages/TESDA'
import Enroll from './pages/Enroll'
import About from './pages/About'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import MedTech from './pages/college/MedTech'
import RadTech from './pages/college/RadTech'
import Psychology from './pages/college/Psychology'
import Mechatronics from './pages/tesda/Mechatronics'
import Caregiving from './pages/tesda/Caregiving'
import EnrollModal from './components/EnrollModal'
import NotFound from './pages/NotFound'
import Login from './portal/pages/Login'
import ProtectedRoute from './portal/components/ProtectedRoute'
import Sidebar from './portal/components/Sidebar'
import PortalNavbar from './portal/components/PortalNavbar'
import ErrorBoundary from './portal/components/ErrorBoundary'
import ParentDashboard from './portal/pages/parent/ParentDashboard'
import ParentGrades from './portal/pages/parent/ParentGrades'
import ParentAttendance from './portal/pages/parent/ParentAttendance'
import ParentSchedule from './portal/pages/parent/ParentSchedule'
import ParentPayments from './portal/pages/parent/ParentPayments'
import ParentAnnouncements from './portal/pages/parent/ParentAnnouncements'
import ParentChildren from './portal/pages/parent/ParentChildren'
import StudentDashboard from './portal/pages/student/StudentDashboard'
import StudentGrades from './portal/pages/student/StudentGrades'
import StudentAttendance from './portal/pages/student/StudentAttendance'
import StudentSchedule from './portal/pages/student/StudentSchedule'
import StudentPayments from './portal/pages/student/StudentPayments'
import StudentAnnouncements from './portal/pages/student/StudentAnnouncements'
import TeacherDashboard from './portal/pages/teacher/TeacherDashboard'
import TeacherClasses from './portal/pages/teacher/TeacherClasses'
import TeacherGradeEntry from './portal/pages/teacher/TeacherGradeEntry'
import TeacherAttendance from './portal/pages/teacher/TeacherAttendance'
import TeacherAnnouncements from './portal/pages/teacher/TeacherAnnouncements'
import AdminDashboard from './portal/pages/admin/AdminDashboard'
import AdminUsers from './portal/pages/admin/AdminUsers'
import AdminStudents from './portal/pages/admin/AdminStudents'
import AdminPayments from './portal/pages/admin/AdminPayments'
import AdminAnnouncements from './portal/pages/admin/AdminAnnouncements'

function PortalLayout() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F1F1EB', minHeight: '100vh' }}>
      <Sidebar />
      <PortalNavbar />
      <main style={{ marginLeft: '240px', marginTop: '64px', padding: '2rem', minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <>
    <EnrollModal />
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/academics" element={<><Navbar /><Academics /><Footer /></>} />
      <Route path="/preschool" element={<><Navbar /><Preschool /><Footer /></>} />
      <Route path="/elementary" element={<><Navbar /><Elementary /><Footer /></>} />
      <Route path="/junior-high" element={<><Navbar /><JuniorHigh /><Footer /></>} />
      <Route path="/college" element={<><Navbar /><College /><Footer /></>} />
      <Route path="/college/medtech" element={<><Navbar /><MedTech /><Footer /></>} />
      <Route path="/college/radtech" element={<><Navbar /><RadTech /><Footer /></>} />
      <Route path="/college/psychology" element={<><Navbar /><Psychology /><Footer /></>} />
      <Route path="/senior-high" element={<><Navbar /><SeniorHigh /><Footer /></>} />
      <Route path="/tesda" element={<><Navbar /><TESDA /><Footer /></>} />
      <Route path="/tesda/mechatronics" element={<><Navbar /><Mechatronics /><Footer /></>} />
      <Route path="/tesda/caregiving" element={<><Navbar /><Caregiving /><Footer /></>} />
      <Route path="/enroll" element={<><Navbar /><Enroll /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/news" element={<><Navbar /><News /><Footer /></>} />
      <Route path="/news/:slug" element={<><Navbar /><NewsArticle /><Footer /></>} />
      <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
      <Route path="/blog/:slug" element={<><Navbar /><BlogArticle /><Footer /></>} />

      {/* Portal login pages */}
      <Route path="/parents" element={<Login />} />
      <Route path="/students" element={<Login />} />
      <Route path="/teachers" element={<Login />} />
      <Route path="/admin" element={<Login />} />

      {/* Portal protected routes */}
      <Route element={<ErrorBoundary><PortalLayout /></ErrorBoundary>}>
        <Route path="/parents/dashboard" element={<ProtectedRoute role="parent"><ParentDashboard /></ProtectedRoute>} />
        <Route path="/parents/grades" element={<ProtectedRoute role="parent"><ParentGrades /></ProtectedRoute>} />
        <Route path="/parents/attendance" element={<ProtectedRoute role="parent"><ParentAttendance /></ProtectedRoute>} />
        <Route path="/parents/schedule" element={<ProtectedRoute role="parent"><ParentSchedule /></ProtectedRoute>} />
        <Route path="/parents/payments" element={<ProtectedRoute role="parent"><ParentPayments /></ProtectedRoute>} />
        <Route path="/parents/announcements" element={<ProtectedRoute role="parent"><ParentAnnouncements /></ProtectedRoute>} />
        <Route path="/parents/children" element={<ProtectedRoute role="parent"><ParentChildren /></ProtectedRoute>} />
        <Route path="/students/dashboard" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
        <Route path="/students/grades" element={<ProtectedRoute role="student"><StudentGrades /></ProtectedRoute>} />
        <Route path="/students/attendance" element={<ProtectedRoute role="student"><StudentAttendance /></ProtectedRoute>} />
        <Route path="/students/schedule" element={<ProtectedRoute role="student"><StudentSchedule /></ProtectedRoute>} />
        <Route path="/students/payments" element={<ProtectedRoute role="student"><StudentPayments /></ProtectedRoute>} />
        <Route path="/students/announcements" element={<ProtectedRoute role="student"><StudentAnnouncements /></ProtectedRoute>} />
        <Route path="/teachers/dashboard" element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/teachers/classes" element={<ProtectedRoute role="teacher"><TeacherClasses /></ProtectedRoute>} />
        <Route path="/teachers/grades" element={<ProtectedRoute role="teacher"><TeacherGradeEntry /></ProtectedRoute>} />
        <Route path="/teachers/attendance" element={<ProtectedRoute role="teacher"><TeacherAttendance /></ProtectedRoute>} />
        <Route path="/teachers/announcements" element={<ProtectedRoute role="teacher"><TeacherAnnouncements /></ProtectedRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute role="admin"><AdminUsers /></ProtectedRoute>} />
        <Route path="/admin/students" element={<ProtectedRoute role="admin"><AdminStudents /></ProtectedRoute>} />
        <Route path="/admin/payments" element={<ProtectedRoute role="admin"><AdminPayments /></ProtectedRoute>} />
        <Route path="/admin/announcements" element={<ProtectedRoute role="admin"><AdminAnnouncements /></ProtectedRoute>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}