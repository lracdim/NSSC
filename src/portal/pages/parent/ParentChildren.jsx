import useStore from '../../store/useStore'

export default function ParentChildren() {
  const students = useStore(s => s.students)
  const currentUser = useStore(s => s.currentUser)
  const myChildren = students.filter(s => s.parentId === currentUser?.id)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .child-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 1rem; }
        .child-avatar { width: 56px; height: 56px; border-radius: 50%; background: #38A169; color: white; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>My Children</h2>
      {myChildren.map(child => (
        <div key={child.id} className="child-card">
          <div className="child-avatar">{child.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1A202C' }}>{child.name}</div>
            <div style={{ fontSize: '0.82rem', color: '#718096' }}>{child.section} · LRN: {child.lrn}</div>
          </div>
        </div>
      ))}
      {myChildren.length === 0 && <div style={{ color: '#A0AEC0', fontSize: '0.875rem' }}>No children found.</div>}
    </div>
  )
}

