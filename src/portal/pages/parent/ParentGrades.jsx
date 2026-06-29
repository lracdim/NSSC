import { useState } from 'react'
import { Download } from 'lucide-react'
import useStore from '../../store/useStore'

function gradeColor(g) {
  if (g === null || g === undefined) return '#A0AEC0'
  if (g >= 90) return '#38A169'
  if (g >= 85) return '#1A202C'
  if (g >= 75) return '#D69E2E'
  return '#E53E3E'
}

export default function ParentGrades() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentGrades = useStore(s => s.getStudentGrades)
  const computeGWA = useStore(s => s.computeGWA)
  const [selectedChild, setSelectedChild] = useState(0)

  const myChildren = students.filter(s => currentUser?.children?.includes(s.id))
  const child = myChildren[selectedChild] || myChildren[0]
  if (!child) return <div style={{ color: '#718096' }}>No children enrolled.</div>

  const grades = getStudentGrades(child.id)
  const gwa = computeGWA(child.id)
  const gradePeriods = ['prelim', 'midterm', 'prefinal', 'final']

  const LEGEND = [
    { label: 'Outstanding (90–100)', color: '#38A169' },
    { label: 'Very Satisfactory (85–89)', color: '#2B6CB0' },
    { label: 'Satisfactory (80–84)', color: '#D69E2E' },
    { label: 'Fairly Satisfactory (75–79)', color: '#ED8936' },
    { label: 'Did Not Meet (below 75)', color: '#E53E3E' },
  ]

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .child-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .child-tab { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .child-tab.active { border-color: #1E6B45; color: #1E6B45; background: #E8F5EE; }
        .info-badge { background: #F4F6F9; color: #718096; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 6px; display: inline-block; margin-right: 0.5rem; margin-bottom: 0.5rem; }
        .grade-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .grade-table table { width: 100%; border-collapse: collapse; }
        .grade-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .grade-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .grade-table tr:nth-child(even) td { background: #FAFBFC; }
        .gwa-row td { background: #1E6B45 !important; color: white; font-weight: 800; }
        .legend-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
        .legend-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.72rem; color: #718096; }
        .legend-dot { width: 10px; height: 10px; border-radius: 50%; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>{child.name}'s Report Card</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1.5rem' }}>School Year 2024–2025</p>

      {myChildren.length > 1 && (
        <div className="child-tabs">
          {myChildren.map((c, i) => (
            <button key={c.id} className={`child-tab ${selectedChild === i ? 'active' : ''}`} onClick={() => setSelectedChild(i)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <span className="info-badge">{child.level}</span>
        <span className="info-badge">{child.program}</span>
        <span className="info-badge">{child.section}</span>
        <span className="info-badge">{child.schoolYear}</span>
      </div>

      <div className="grade-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Prelim</th>
              <th>Midterm</th>
              <th>Pre-Final</th>
              <th>Final</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((s, i) => {
              const available = gradePeriods.filter(p => s[p] !== null)
              const ave = available.length > 0 ? (available.reduce((a, p) => a + s[p], 0) / available.length).toFixed(1) : '—'
              return (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: '#1A202C' }}>{s.name}</td>
                  <td style={{ color: gradeColor(s.prelim), fontWeight: s.prelim ? 600 : 400 }}>{s.prelim ?? '—'}</td>
                  <td style={{ color: gradeColor(s.midterm), fontWeight: s.midterm ? 600 : 400 }}>{s.midterm ?? '—'}</td>
                  <td style={{ color: gradeColor(s.prefinal), fontWeight: s.prefinal ? 600 : 400 }}>{s.prefinal ?? '—'}</td>
                  <td style={{ color: gradeColor(s.final), fontWeight: s.final ? 600 : 400 }}>{s.final ?? '—'}</td>
                  <td style={{ color: gradeColor(parseFloat(ave)), fontWeight: 700, fontSize: '0.95rem' }}>{ave}</td>
                </tr>
              )
            })}
            <tr className="gwa-row">
              <td>General Weighted Average</td>
              <td colSpan={4} style={{ textAlign: 'right', paddingRight: '1rem' }}>Overall GWA</td>
              <td style={{ fontWeight: 800 }}>{gwa || '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="legend-row">
        {LEGEND.map(l => (
          <div key={l.label} className="legend-item">
            <div className="legend-dot" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => alert('Report card download will be available once all grades are released.')}
          style={{ background: '#1E6B45', color: 'white', border: 'none', borderRadius: '12px', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Download size={16} /> Download Report Card (PDF)
        </button>
      </div>
    </div>
  )
}

