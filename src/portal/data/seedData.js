export const seedUsers = [
  {
    id: "u001",
    role: "parent",
    name: "Maria Santos",
    email: "maria.santos@gmail.com",
    password: "parent123",
    avatar: "MS",
    children: ["s001", "s002"]
  },
  {
    id: "u002",
    role: "parent",
    name: "Roberto Dela Cruz",
    email: "roberto.delacruz@gmail.com",
    password: "parent123",
    avatar: "RD",
    children: ["s003"]
  },
  {
    id: "u003",
    role: "student",
    name: "Angelo Reyes",
    email: "angelo.reyes@nssc.edu.ph",
    password: "student123",
    avatar: "AR",
    studentId: "s004"
  },
  {
    id: "u004",
    role: "student",
    name: "Patricia Lim",
    email: "patricia.lim@nssc.edu.ph",
    password: "student123",
    avatar: "PL",
    studentId: "s005"
  },
  {
    id: "u005",
    role: "teacher",
    name: "Mrs. Ana Reyes",
    email: "ana.reyes@nssc.edu.ph",
    password: "teacher123",
    avatar: "AR",
    employeeId: "T001",
    department: "Junior High",
    subjects: ["Filipino 8", "Filipino 7"],
    sections: ["Narra", "Molave"]
  },
  {
    id: "u006",
    role: "teacher",
    name: "Mr. Jose Cruz",
    email: "jose.cruz@nssc.edu.ph",
    password: "teacher123",
    avatar: "JC",
    employeeId: "T002",
    department: "Senior High",
    subjects: ["Basic Calculus", "Pre-Calculus"],
    sections: ["Einstein", "Curie"]
  },
  {
    id: "u007",
    role: "teacher",
    name: "Dr. Maria Santos",
    email: "maria.santos@nssc.edu.ph",
    password: "teacher123",
    avatar: "MS",
    employeeId: "T003",
    department: "College",
    subjects: ["Hematology", "Clinical Microscopy"],
    sections: ["MedTech 3A", "MedTech 3B"]
  },
  {
    id: "u008",
    role: "admin",
    name: "Mr. Ricardo Mendoza",
    email: "admin@nssc.edu.ph",
    password: "admin2025",
    avatar: "RM",
    employeeId: "A001",
    position: "School Registrar"
  },
  {
    id: "u009",
    role: "admin",
    name: "Ms. Lorna Bautista",
    email: "principal@nssc.edu.ph",
    password: "admin2025",
    avatar: "LB",
    employeeId: "A002",
    position: "School Principal"
  }
]

export const seedStudents = [
  {
    id: "s001",
    name: "Miguel Santos",
    lrn: "123456789001",
    level: "Preschool",
    program: "Toddler Casa",
    grade: "Toddler Casa",
    section: "Sunflower",
    schoolYear: "2024–2025",
    parentId: "u001",
    status: "Enrolled",
    tuitionTotal: 25000,
    tuitionPaid: 15000,
    photo: null
  },
  {
    id: "s002",
    name: "Sofia Santos",
    lrn: "123456789002",
    level: "Elementary",
    program: "Grade 3",
    grade: "Grade 3",
    section: "Sampaguita",
    schoolYear: "2024–2025",
    parentId: "u001",
    status: "Enrolled",
    tuitionTotal: 30000,
    tuitionPaid: 30000,
    photo: null
  },
  {
    id: "s003",
    name: "Carlos Dela Cruz",
    lrn: "123456789003",
    level: "Junior High",
    program: "Grade 8",
    grade: "Grade 8",
    section: "Narra",
    schoolYear: "2024–2025",
    parentId: "u002",
    status: "Enrolled",
    tuitionTotal: 35000,
    tuitionPaid: 20000,
    photo: null
  },
  {
    id: "s004",
    name: "Angelo Reyes",
    lrn: "123456789004",
    level: "Senior High",
    program: "STEM",
    grade: "Grade 12",
    section: "Einstein",
    schoolYear: "2024–2025",
    parentId: null,
    status: "Enrolled",
    tuitionTotal: 40000,
    tuitionPaid: 40000,
    photo: null
  },
  {
    id: "s005",
    name: "Patricia Lim",
    lrn: "123456789005",
    level: "College",
    program: "BS Medical Technology",
    grade: "3rd Year",
    section: "MedTech 3A",
    schoolYear: "2024–2025",
    parentId: null,
    status: "Enrolled",
    tuitionTotal: 55000,
    tuitionPaid: 30000,
    photo: null
  }
]

export const seedGrades = [
  {
    studentId: "s001",
    subjects: [
      { name: "Language Readiness", prelim: 92, midterm: 94, prefinal: null, final: null },
      { name: "Number Concepts", prelim: 88, midterm: 90, prefinal: null, final: null },
      { name: "Motor Skills", prelim: 95, midterm: 96, prefinal: null, final: null },
      { name: "Values Formation", prelim: 97, midterm: 97, prefinal: null, final: null },
    ]
  },
  {
    studentId: "s002",
    subjects: [
      { name: "Filipino", prelim: 88, midterm: 90, prefinal: 92, final: null },
      { name: "English", prelim: 91, midterm: 89, prefinal: 93, final: null },
      { name: "Mathematics", prelim: 85, midterm: 88, prefinal: 90, final: null },
      { name: "Science", prelim: 87, midterm: 91, prefinal: 89, final: null },
      { name: "Araling Panlipunan", prelim: 90, midterm: 92, prefinal: 91, final: null },
      { name: "MAPEH", prelim: 94, midterm: 95, prefinal: 96, final: null },
      { name: "Values Education", prelim: 96, midterm: 97, prefinal: 98, final: null },
    ]
  },
  {
    studentId: "s003",
    subjects: [
      { name: "Filipino 8", prelim: 83, midterm: 85, prefinal: 87, final: null },
      { name: "English 8", prelim: 86, midterm: 88, prefinal: 86, final: null },
      { name: "Mathematics 8", prelim: 78, midterm: 82, prefinal: 84, final: null },
      { name: "Science 8", prelim: 85, midterm: 87, prefinal: 89, final: null },
      { name: "AP 8", prelim: 88, midterm: 90, prefinal: 89, final: null },
      { name: "TLE", prelim: 91, midterm: 92, prefinal: 93, final: null },
      { name: "MAPEH 8", prelim: 90, midterm: 91, prefinal: 92, final: null },
      { name: "ESP 8", prelim: 93, midterm: 94, prefinal: 95, final: null },
    ]
  },
  {
    studentId: "s004",
    subjects: [
      { name: "Pre-Calculus", prelim: 88, midterm: 90, prefinal: 92, final: 91 },
      { name: "Basic Calculus", prelim: 85, midterm: 87, prefinal: 89, final: null },
      { name: "General Biology 2", prelim: 91, midterm: 93, prefinal: 94, final: null },
      { name: "General Physics 2", prelim: 86, midterm: 88, prefinal: 87, final: null },
      { name: "Research 2", prelim: 90, midterm: 92, prefinal: null, final: null },
      { name: "English for Academic", prelim: 89, midterm: 91, prefinal: 90, final: null },
      { name: "Filipino sa Piling Larang", prelim: 87, midterm: 89, prefinal: 88, final: null },
      { name: "PE and Health", prelim: 95, midterm: 96, prefinal: 97, final: null },
    ]
  },
  {
    studentId: "s005",
    subjects: [
      { name: "Hematology", prelim: 86, midterm: 88, prefinal: 90, final: null },
      { name: "Clinical Microscopy", prelim: 89, midterm: 91, prefinal: 93, final: null },
      { name: "Microbiology", prelim: 84, midterm: 87, prefinal: 88, final: null },
      { name: "Parasitology", prelim: 88, midterm: 90, prefinal: 89, final: null },
      { name: "Biochemistry", prelim: 82, midterm: 85, prefinal: 87, final: null },
      { name: "Immunology", prelim: 87, midterm: 89, prefinal: 91, final: null },
    ]
  }
]

const generateAttendance = () => {
  const records = []
  const students = ["s001", "s002", "s003", "s004", "s005"]
  const statuses = ["Present", "Present", "Present", "Present", "Present", "Present", "Present", "Present", "Late", "Late", "Absent"]
  const startDate = new Date("2025-01-06")

  students.forEach(studentId => {
    for (let i = 0; i < 20; i++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + i)
      const status = statuses[Math.floor(Math.random() * statuses.length)]
      records.push({
        studentId,
        date: date.toISOString().split("T")[0],
        status
      })
    }
  })
  return records
}

export const seedAttendance = generateAttendance()

export const seedPayments = [
  { id: "p001", studentId: "s001", date: "2025-01-10", amount: 5000, type: "Tuition", term: "1st Quarter", method: "GCash", reference: "GC20250110001", status: "Paid", receivedBy: "Cashier" },
  { id: "p002", studentId: "s001", date: "2025-02-10", amount: 5000, type: "Tuition", term: "2nd Quarter", method: "Cash", reference: "CASH20250210001", status: "Paid", receivedBy: "Cashier" },
  { id: "p003", studentId: "s001", date: "2025-03-10", amount: 5000, type: "Tuition", term: "3rd Quarter", method: "Bank Transfer", reference: "BT20250310001", status: "Paid", receivedBy: "Cashier" },
  { id: "p004", studentId: "s002", date: "2025-01-05", amount: 10000, type: "Tuition", term: "1st Quarter", method: "GCash", reference: "GC20250105001", status: "Paid", receivedBy: "Cashier" },
  { id: "p005", studentId: "s002", date: "2025-02-05", amount: 10000, type: "Tuition", term: "2nd Quarter", method: "Cash", reference: "CASH20250205001", status: "Paid", receivedBy: "Cashier" },
  { id: "p006", studentId: "s002", date: "2025-03-05", amount: 10000, type: "Tuition", term: "3rd Quarter", method: "Bank Transfer", reference: "BT20250305001", status: "Paid", receivedBy: "Cashier" },
  { id: "p007", studentId: "s003", date: "2025-01-08", amount: 10000, type: "Tuition", term: "1st Quarter", method: "GCash", reference: "GC20250108001", status: "Paid", receivedBy: "Cashier" },
  { id: "p008", studentId: "s003", date: "2025-02-08", amount: 10000, type: "Tuition", term: "2nd Quarter", method: "Cash", reference: "CASH20250208001", status: "Paid", receivedBy: "Cashier" },
  { id: "p009", studentId: "s004", date: "2025-01-03", amount: 10000, type: "Tuition", term: "1st Quarter", method: "GCash", reference: "GC20250103001", status: "Paid", receivedBy: "Cashier" },
  { id: "p010", studentId: "s004", date: "2025-02-03", amount: 10000, type: "Tuition", term: "2nd Quarter", method: "Cash", reference: "CASH20250203001", status: "Paid", receivedBy: "Cashier" },
  { id: "p011", studentId: "s004", date: "2025-03-03", amount: 10000, type: "Tuition", term: "3rd Quarter", method: "Bank Transfer", reference: "BT20250303001", status: "Paid", receivedBy: "Cashier" },
  { id: "p012", studentId: "s004", date: "2025-04-03", amount: 10000, type: "Tuition", term: "4th Quarter", method: "GCash", reference: "GC20250403001", status: "Paid", receivedBy: "Cashier" },
  { id: "p013", studentId: "s005", date: "2025-01-04", amount: 15000, type: "Tuition", term: "1st Quarter", method: "GCash", reference: "GC20250104001", status: "Paid", receivedBy: "Cashier" },
  { id: "p014", studentId: "s005", date: "2025-02-04", amount: 15000, type: "Tuition", term: "2nd Quarter", method: "Cash", reference: "CASH20250204001", status: "Paid", receivedBy: "Cashier" },
]

export const seedSchedules = [
  {
    studentId: "s003",
    schedule: [
      { day: "Monday", time: "7:30–8:30", subject: "Filipino 8", teacher: "Mrs. Reyes", room: "Room 201" },
      { day: "Monday", time: "8:30–9:30", subject: "Mathematics 8", teacher: "Mr. Cruz", room: "Room 202" },
      { day: "Monday", time: "9:30–10:30", subject: "Science 8", teacher: "Mrs. Lim", room: "Lab 1" },
      { day: "Monday", time: "10:30–11:30", subject: "English 8", teacher: "Ms. Santos", room: "Room 203" },
      { day: "Tuesday", time: "7:30–8:30", subject: "AP 8", teacher: "Mr. Ramos", room: "Room 201" },
      { day: "Tuesday", time: "8:30–9:30", subject: "TLE", teacher: "Mr. Torres", room: "TLE Room" },
      { day: "Tuesday", time: "9:30–10:30", subject: "MAPEH 8", teacher: "Mr. Garcia", room: "Gym" },
      { day: "Tuesday", time: "10:30–11:30", subject: "ESP 8", teacher: "Mrs. Flores", room: "Room 204" },
      { day: "Wednesday", time: "7:30–8:30", subject: "Filipino 8", teacher: "Mrs. Reyes", room: "Room 201" },
      { day: "Wednesday", time: "8:30–9:30", subject: "Science 8", teacher: "Mrs. Lim", room: "Lab 1" },
      { day: "Thursday", time: "7:30–8:30", subject: "English 8", teacher: "Ms. Santos", room: "Room 203" },
      { day: "Thursday", time: "8:30–9:30", subject: "Mathematics 8", teacher: "Mr. Cruz", room: "Room 202" },
      { day: "Friday", time: "7:30–8:30", subject: "AP 8", teacher: "Mr. Ramos", room: "Room 201" },
      { day: "Friday", time: "8:30–9:30", subject: "MAPEH 8", teacher: "Mr. Garcia", room: "Gym" },
    ]
  },
  {
    studentId: "s004",
    schedule: [
      { day: "Monday", time: "7:30–9:30", subject: "Basic Calculus", teacher: "Mr. Villanueva", room: "SHS Room 1" },
      { day: "Monday", time: "9:30–11:30", subject: "General Biology 2", teacher: "Mrs. Aquino", room: "Science Lab" },
      { day: "Monday", time: "1:00–3:00", subject: "Research 2", teacher: "Mr. Mendoza", room: "SHS Room 2" },
      { day: "Tuesday", time: "7:30–9:30", subject: "General Physics 2", teacher: "Mr. Bautista", room: "Physics Lab" },
      { day: "Tuesday", time: "9:30–11:30", subject: "Pre-Calculus", teacher: "Mr. Villanueva", room: "SHS Room 1" },
      { day: "Wednesday", time: "7:30–9:30", subject: "Pre-Calculus", teacher: "Mr. Villanueva", room: "SHS Room 1" },
      { day: "Wednesday", time: "9:30–11:30", subject: "English for Academic", teacher: "Ms. Garcia", room: "SHS Room 3" },
      { day: "Thursday", time: "7:30–9:30", subject: "General Biology 2", teacher: "Mrs. Aquino", room: "Science Lab" },
      { day: "Friday", time: "7:30–9:30", subject: "PE and Health", teacher: "Mr. Garcia", room: "Gym" },
      { day: "Friday", time: "9:30–11:30", subject: "Filipino sa Piling Larang", teacher: "Ms. Santos", room: "SHS Room 1" },
    ]
  },
  {
    studentId: "s005",
    schedule: [
      { day: "Monday", time: "7:00–9:00", subject: "Hematology (Lecture)", teacher: "Dr. Reyes", room: "College Room A" },
      { day: "Monday", time: "9:00–12:00", subject: "Hematology (Lab)", teacher: "Dr. Reyes", room: "MedTech Lab" },
      { day: "Tuesday", time: "7:00–9:00", subject: "Microbiology (Lecture)", teacher: "Dr. Santos", room: "College Room B" },
      { day: "Tuesday", time: "9:00–12:00", subject: "Microbiology (Lab)", teacher: "Dr. Santos", room: "MedTech Lab" },
      { day: "Wednesday", time: "7:00–10:00", subject: "Biochemistry", teacher: "Dr. Cruz", room: "College Room A" },
      { day: "Thursday", time: "7:00–9:00", subject: "Immunology", teacher: "Dr. Lim", room: "College Room C" },
      { day: "Thursday", time: "9:00–12:00", subject: "Clinical Microscopy (Lab)", teacher: "Dr. Lim", room: "MedTech Lab" },
      { day: "Friday", time: "7:00–9:00", subject: "Parasitology", teacher: "Dr. Reyes", room: "College Room A" },
    ]
  }
]

export const seedAnnouncements = [
  {
    id: "a001",
    title: "S.Y. 2025–2026 Enrollment Now Open",
    body: "Enrollment for the upcoming school year is now open for all grade levels. Visit the Registrar's Office Monday to Friday, 8AM–4PM.",
    category: "Enrollment",
    date: "2025-06-15",
    targetRoles: ["parent", "student", "teacher"],
    isRead: []
  },
  {
    id: "a002",
    title: "3rd Quarter Exam Schedule",
    body: "Third quarter examinations are scheduled from March 17–21, 2025. All students must present their exam permits on the first day.",
    category: "Exam",
    date: "2025-03-10",
    targetRoles: ["parent", "student", "teacher"],
    isRead: []
  },
  {
    id: "a003",
    title: "Tuition Payment Reminder — 3rd Quarter",
    body: "The deadline for 3rd quarter tuition payment is March 14, 2025. Students with unpaid tuition may not be allowed to take the examinations.",
    category: "Payment",
    date: "2025-03-05",
    targetRoles: ["parent", "student"],
    isRead: []
  },
  {
    id: "a004",
    title: "Foundation Day Celebration — October 1",
    body: "NSSC will celebrate its 23rd Founding Anniversary on October 1, 2024. Classes are suspended. Students are expected to attend the program.",
    category: "Event",
    date: "2024-09-25",
    targetRoles: ["parent", "student", "teacher", "admin"],
    isRead: []
  },
  {
    id: "a005",
    title: "No Classes — Special Non-Working Holiday",
    body: "In observance of the declared Special Non-Working Holiday on November 1, 2024 (All Saints' Day), there will be no classes.",
    category: "Suspension",
    date: "2024-10-30",
    targetRoles: ["parent", "student", "teacher"],
    isRead: []
  }
]