import { useState } from 'react'
import useStore from '../../store/useStore'

const ACCENT = '#2B6CB0'
const ROLE_COLORS = { parent: '#38A169', student: '#2B6CB0', teacher: '#6B46C1', admin: '#D69E2E' }

export default function AdminUsers() {
  const users = useStore(s => s.users)
  const addUser = useStore(s => s.addUser)
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student', studentId: '' })

  const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))

  const submit = () => {
    if (!form.name || !form.email) return
    addUser(form)
    setForm({ name: '', email: '', password: '', role: 'student', studentId: '' })
    setShowForm(false)
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .toolbar { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .search-input { flex: 1; min-width: 200px; padding: 0.5rem 0.875rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; }
        .add-btn { background: ${ACCENT}; color: white; border: none; border-radius: 8px; padding: 0.5rem 1.25rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; white-space: nowrap; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1rem; }
        .form-input { width: 100%; padding: 0.5rem 0.75rem; border: 1.5px solid #E2E8F0; border-radius: 8px; font-size: 0.875rem; }
        .form-input:focus { outline: none; border-color: ${ACCENT}; }
        .modal-overlay { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }
        .modal { background: 'white', borderRadius: '16px', padding: '1.5rem', width: '480px', maxWidth: '90vw' }
        .user-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .user-table table { width: 100%; border-collapse: collapse; }
        .user-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .user-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .user-table tr:nth-child(even) td { background: #FAFBFC; }
        .role-badge { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; text-transform: capitalize; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>User Management</h2>
      <div className="toolbar">
        <input className="search-input" placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} />
        <button className="add-btn" onClick={() => setShowForm(true)}>+ Add User</button>
      </div>

      {showForm && (
        <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={e => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal" style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', width: '480px', maxWidth: '90vw' }}>
            <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>Add New User</h3>
            <div className="form-grid">
              <input className="form-input" placeholder="Full Name" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} style={{ gridColumn: 'span 2' }} />
              <input className="form-input" placeholder="Email" type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} style={{ gridColumn: 'span 2' }} />
              <input className="form-input" placeholder="Password" type="password" value={form.password} onChange={e => setForm(p => ({...p, password: e.target.value}))} style={{ gridColumn: 'span 2' }} />
              <select className="form-input" value={form.role} onChange={e => setForm(p => ({...p, role: e.target.value}))}>
                {['student','parent','teacher','admin'].map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
              </select>
              {form.role === 'parent' && <input className="form-input" placeholder="Student ID" value={form.studentId} onChange={e => setForm(p => ({...p, studentId: e.target.value}))} />}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowForm(false)} style={{ padding: '0.5rem 1rem', border: '1.5px solid #E2E8F0', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>Cancel</button>
              <button onClick={submit} className="add-btn">Add User</button>
            </div>
          </div>
        </div>
      )}

      <div className="user-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td style={{ fontWeight: 600, color: '#1A202C' }}>{u.name}</td>
                <td style={{ color: '#718096' }}>{u.email}</td>
                <td><span className="role-badge" style={{ background: `${ROLE_COLORS[u.role]}15`, color: ROLE_COLORS[u.role] }}>{u.role}</span></td>
                <td><span style={{ background: '#F0FFF4', color: '#38A169', fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

