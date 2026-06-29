import { useState } from 'react'
import { X } from 'lucide-react'
import useStore from '../../store/useStore'

function Modal({ title, children, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '2rem', maxWidth: '480px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A202C' }}>{title}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#718096' }}><X size={20} /></button>
        </div>
        {children}
      </div>
    </div>
  )
}

const METHOD_STYLES = {
  GCash: { bg: '#EBF8FF', color: '#2B6CB0' },
  Cash: { bg: '#F4F6F9', color: '#4A5568' },
  'Bank Transfer': { bg: '#FAF5FF', color: '#6B46C1' },
  Maya: { bg: '#F0FFF4', color: '#38A169' },
}

export default function ParentPayments() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentPayments = useStore(s => s.getStudentPayments)
  const addPayment = useStore(s => s.addPayment)
  const [selectedChild, setSelectedChild] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ term: '1st Quarter', amount: '', method: 'GCash', reference: '', date: new Date().toISOString().split('T')[0] })

  const myChildren = students.filter(s => currentUser?.children?.includes(s.id))
  const child = myChildren[selectedChild] || myChildren[0]
  if (!child) return <div style={{ color: '#718096' }}>No children enrolled.</div>

  const payments = getStudentPayments(child.id)
  const balance = child.tuitionTotal - child.tuitionPaid
  const paid = child.tuitionPaid
  const total = child.tuitionTotal
  const pct = total > 0 ? Math.round((paid / total) * 100) : 0

  const handleSave = () => {
    if (!form.amount || !form.reference) return
    addPayment({
      studentId: child.id,
      date: form.date,
      amount: parseFloat(form.amount),
      type: 'Tuition',
      term: form.term,
      method: form.method,
      reference: form.reference,
      status: 'Paid',
      receivedBy: 'Cashier'
    })
    setShowModal(false)
    setForm({ term: '1st Quarter', amount: '', method: 'GCash', reference: '', date: new Date().toISOString().split('T')[0] })
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .child-tabs { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .child-tab { padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .child-tab.active { border-color: #1E6B45; color: #1E6B45; background: #E8F5EE; }
        .tuition-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 2rem; }
        .progress-bar { height: 12px; background: #E2E8F0; border-radius: 9999px; overflow: hidden; margin-top: 0.75rem; }
        .progress-fill { height: 100%; background: #1E6B45; border-radius: 9999px; transition: width 500ms; }
        .pay-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .pay-table table { width: 100%; border-collapse: collapse; }
        .pay-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .pay-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .pay-table tr:nth-child(even) td { background: #FAFBFC; }
        .method-badge { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 9999px; }
        .form-field { margin-bottom: 1rem; }
        .form-label { display: block; font-size: 0.8rem; font-weight: 600; color: #1A202C; margin-bottom: 0.35rem; }
        .form-input, .form-select { width: 100%; padding: 0.7rem 0.85rem; border: 1.5px solid #E2E8F0; border-radius: 10px; font-size: 0.875rem; font-family: 'Inter', sans-serif; outline: none; }
        .form-input:focus, .form-select:focus { border-color: #1E6B45; }
      `}</style>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '0.25rem' }}>Payment History</h2>
      <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{child.name} · School Year 2024–2025</p>

      {myChildren.length > 1 && (
        <div className="child-tabs">
          {myChildren.map((c, i) => (
            <button key={c.id} className={`child-tab ${selectedChild === i ? 'active' : ''}`} onClick={() => setSelectedChild(i)}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div className="tuition-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#718096', marginBottom: '0.25rem' }}>Total Tuition</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C' }}>₱{total.toLocaleString()}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.875rem', color: '#38A169', fontWeight: 600 }}>Paid: ₱{paid.toLocaleString()}</div>
            <div style={{ fontSize: '0.875rem', color: '#E53E3E', fontWeight: 600 }}>Balance: ₱{balance.toLocaleString()}</div>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div style={{ fontSize: '0.72rem', color: '#718096', marginTop: '0.5rem', textAlign: 'right' }}>{pct}% paid</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A202C' }}>Payment History</h3>
        <button
          onClick={() => setShowModal(true)}
          style={{ background: '#1E6B45', color: 'white', border: 'none', borderRadius: '12px', padding: '0.6rem 1.25rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
        >
          Record a Payment
        </button>
      </div>

      <div className="pay-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Term</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Reference</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr><td colSpan={6} style={{ textAlign: 'center', color: '#A0AEC0', padding: '2rem' }}>No payment records yet</td></tr>
            ) : payments.map(p => {
              const ms = METHOD_STYLES[p.method] || METHOD_STYLES.Cash
              return (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600, color: '#1A202C' }}>{new Date(p.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td style={{ color: '#718096' }}>{p.term}</td>
                  <td style={{ color: '#38A169', fontWeight: 700 }}>₱{p.amount.toLocaleString()}</td>
                  <td><span className="method-badge" style={{ background: ms.bg, color: ms.color }}>{p.method}</span></td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#718096' }}>{p.reference}</td>
                  <td><span style={{ background: '#F0FFF4', color: '#38A169', fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{p.status}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal title="Record New Payment" onClose={() => setShowModal(false)}>
          <div className="form-field">
            <label className="form-label">Term</label>
            <select className="form-select" value={form.term} onChange={e => setForm(f => ({ ...f, term: e.target.value }))}>
              {['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter', 'Miscellaneous'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Amount (₱)</label>
            <input type="number" className="form-input" placeholder="5000" value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} />
          </div>
          <div className="form-field">
            <label className="form-label">Payment Method</label>
            <select className="form-select" value={form.method} onChange={e => setForm(f => ({ ...f, method: e.target.value }))}>
              {['Cash', 'GCash', 'Maya', 'Bank Transfer'].map(m => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Reference Number</label>
            <input type="text" className="form-input" placeholder="GC20250115001" value={form.reference} onChange={e => setForm(f => ({ ...f, reference: e.target.value }))} />
          </div>
          <div className="form-field">
            <label className="form-label">Date</label>
            <input type="date" className="form-input" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '0.75rem', border: '1.5px solid #E2E8F0', borderRadius: '10px', background: 'white', fontWeight: 600, color: '#718096', cursor: 'pointer' }}>Cancel</button>
            <button onClick={handleSave} style={{ flex: 1, padding: '0.75rem', background: '#1E6B45', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>Save Payment</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

