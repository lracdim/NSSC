import { useState, useEffect } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { seedUsers, seedStudents, seedGrades, seedAttendance, seedPayments, seedSchedules, seedAnnouncements } from '../data/seedData'

const useStore = create(
  persist(
    (set, get) => ({
      currentUser: null,
      users: seedUsers,
      students: seedStudents,
      grades: seedGrades,
      attendance: seedAttendance,
      payments: seedPayments,
      schedules: seedSchedules,
      announcements: seedAnnouncements,

      login: (email, password, role) => {
        const user = get().users.find(
          u => u.email === email && u.password === password && u.role === role
        )
        if (user) {
          set({ currentUser: user })
          return { success: true, user }
        }
        return { success: false }
      },

      logout: () => set({ currentUser: null }),

      addUser: (user) => set(state => ({
        users: [...state.users, { ...user, id: `u${Date.now()}` }]
      })),

      deleteUser: (id) => set(state => ({
        users: state.users.filter(u => u.id !== id)
      })),

      updateUser: (id, updates) => set(state => ({
        users: state.users.map(u => u.id === id ? { ...u, ...updates } : u)
      })),

      addStudent: (student) => set(state => ({
        students: [...state.students, { ...student, id: `s${Date.now()}` }]
      })),

      deleteStudent: (id) => set(state => ({
        students: state.students.filter(s => s.id !== id)
      })),

      updateStudent: (id, updates) => set(state => ({
        students: state.students.map(s => s.id === id ? { ...s, ...updates } : s)
      })),

      getStudentGrades: (studentId) => {
        const grade = get().grades.find(g => g.studentId === studentId)
        return grade ? grade.subjects : []
      },

      computeGWA: (studentId) => {
        const grade = get().grades.find(g => g.studentId === studentId)
        if (!grade) return null
        const finals = grade.subjects.filter(s => s.final !== null).map(s => s.final)
        if (finals.length === 0) {
          const midterms = grade.subjects.filter(s => s.midterm !== null).map(s => s.midterm)
          if (midterms.length === 0) return null
          const sum = midterms.reduce((a, b) => a + b, 0)
          return (sum / midterms.length).toFixed(2)
        }
        const sum = finals.reduce((a, b) => a + b, 0)
        return (sum / finals.length).toFixed(2)
      },

      updateGrades: (studentId, subjectName, period, value) => set(state => {
        const existing = state.grades.find(g => g.studentId === studentId)
        if (existing) {
          const updatedSubjects = existing.subjects.map(s => {
            if (s.name === subjectName) {
              return { ...s, [period]: value }
            }
            return s
          })
          return {
            grades: state.grades.map(g =>
              g.studentId === studentId ? { ...g, subjects: updatedSubjects } : g
            )
          }
        }
        return state
      }),

      addGrades: (studentId, subjects) => set(state => ({
        grades: [...state.grades.filter(g => g.studentId !== studentId), { studentId, subjects }]
      })),

      markAttendance: (studentId, date, status) => set(state => {
        const exists = state.attendance.find(
          a => a.studentId === studentId && a.date === date
        )
        if (exists) {
          return {
            attendance: state.attendance.map(a =>
              a.studentId === studentId && a.date === date ? { ...a, status } : a
            )
          }
        }
        return {
          attendance: [...state.attendance, { studentId, date, status }]
        }
      }),

      getStudentAttendance: (studentId) => {
        return get().attendance.filter(a => a.studentId === studentId)
      },

      addPayment: (payment) => {
        const newPayment = { ...payment, id: `p${Date.now()}` }
        const student = get().students.find(s => s.id === payment.studentId)
        if (student) {
          set(state => ({
            payments: [...state.payments, newPayment],
            students: state.students.map(s =>
              s.id === payment.studentId
                ? { ...s, tuitionPaid: s.tuitionPaid + payment.amount }
                : s
            )
          }))
        } else {
          set(state => ({
            payments: [...state.payments, newPayment]
          }))
        }
      },

      deletePayment: (id) => {
        const payment = get().payments.find(p => p.id === id)
        if (payment) {
          set(state => ({
            payments: state.payments.filter(p => p.id !== id),
            students: state.students.map(s =>
              s.id === payment.studentId
                ? { ...s, tuitionPaid: Math.max(0, s.tuitionPaid - payment.amount) }
                : s
            )
          }))
        }
      },

      getStudentPayments: (studentId) => {
        return get().payments.filter(p => p.studentId === studentId)
      },

      getStudentSchedule: (studentId) => {
        const sched = get().schedules.find(s => s.studentId === studentId)
        return sched ? sched.schedule : []
      },

      getTeacherSchedule: (teacherId) => {
        const teacher = get().users.find(u => u.id === teacherId)
        if (!teacher || teacher.role !== 'teacher') return []
        const scheduleData = []
        get().schedules.forEach(sched => {
          sched.schedule.forEach(item => {
            if (teacher.sections.includes(item.subject.split(' ')[0] === teacher.sections[0] ? item.section : '')) {
              // match by section
            }
          })
        })
        return scheduleData
      },

      markAnnouncementRead: (announcementId, userId) => set(state => ({
        announcements: state.announcements.map(a => {
          if (a.id === announcementId && !a.isRead.includes(userId)) {
            return { ...a, isRead: [...a.isRead, userId] }
          }
          return a
        })
      })),

      addAnnouncement: (announcement) => set(state => ({
        announcements: [{ ...announcement, id: `a${Date.now()}`, isRead: [] }, ...state.announcements]
      })),

      deleteAnnouncement: (id) => set(state => ({
        announcements: state.announcements.filter(a => a.id !== id)
      })),

      updateAnnouncement: (id, updates) => set(state => ({
        announcements: state.announcements.map(a => a.id === id ? { ...a, ...updates } : a)
      })),

      getUnreadCount: (userId) => {
        const user = get().users.find(u => u.id === userId)
        if (!user) return 0
        return get().announcements.filter(a =>
          a.targetRoles.includes(user.role) && !a.isRead.includes(userId)
        ).length
      },

      getUserAnnouncements: (role, userId) => {
        return get().announcements.filter(a => a.targetRoles.includes(role))
      },

      getAllUsers: () => get().users,

      getTeacherStudents: (teacherId) => {
        const teacher = get().users.find(u => u.id === teacherId)
        if (!teacher || teacher.role !== 'teacher') return []
        const allStudents = get().students
        return allStudents.filter(s =>
          teacher.sections.includes(s.section)
        )
      },

      getTeacherSubjects: (teacherId) => {
        const teacher = get().users.find(u => u.id === teacherId)
        if (!teacher || teacher.role !== 'teacher') return []
        return teacher.subjects || []
      },

      getSectionStudents: (sectionName) => {
        return get().students.filter(s => s.section === sectionName)
      },

      getPendingGradesCount: (teacherId) => {
        const teacher = get().users.find(u => u.id === teacherId)
        if (!teacher || teacher.role !== 'teacher') return 0
        const students = get().getTeacherStudents(teacherId)
        let count = 0
        students.forEach(student => {
          const grade = get().grades.find(g => g.studentId === student.id)
          if (grade) {
            grade.subjects.forEach(s => {
              if (s.final === null && teacher.subjects.includes(s.name)) {
                count++
              }
            })
          }
        })
        return count
      }
    }),
    { name: 'nssc_portal' }
  )
)

export default useStore

export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(() => useStore.persist.hasHydrated())
  useEffect(() => useStore.persist.onFinishHydration(() => setHydrated(true)), [])
  return hydrated
}