import { useState } from 'react'
import useStore from '../../store/useStore'

const ACCENT = '#2B6CB0'
const STATUS_COLORS = { Approved: '#38A169', Pending: '#D69E2E', Rejected: '#E53E3E' }

export default function AdminPayments() {
  const payments = useStore(s => s.payments)
  const updatePaymentStatus = useStore(s => s.updatePaymentStatus)
  const students = useStore(s => s.students)
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? payments : payments.filter(p => p.status.toLowerCase() === filter)
  const totalCollected = payments.filter(p => p.status === 'Approved').reduce((s, p) => s + p.amount, 0)
  const totalPending = payments.filter(p => p.status === 'Pending').reduce((s, p) => s + p.amount, 0)

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .summary-row { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .summary-card { flex: 1; min-width: 200px; background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.25rem; }
        .filter-row { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
        .filter-btn { padding: 0.4rem 1rem; border-radius: 9999px; font-size: 0.78rem; font-weight: 600; cursor: pointer; border: 1.5px solid #E2E8F0; background: #F4F6F9; color: #718096; transition: all 200ms; }
        .filter-btn.active { background: ${ACCENT}; color: white; border-color: ${ACCENT}; }
        .pay-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .pay-table table { width: 100%; border-collapse: collapse; }
        .pay-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .pay-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .pay-table tr:nth-child(even) td { background: #FAFBFC; }
        .status-badge { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 9999px; }
        .action-btn-small { padding: 0.3rem 0.75rem; border-radius: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; border: 1.5px solid; background: transparent; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>Payment Management</h2>
      <div className="summary-row">
        <div className="summary-card"><div style={{ fontSize: '0.875rem', color: '#718096' }}>Total Collected</div><div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38A169' }}>₱{totalCollected.toLocaleString()}</div></div>
        <div className="summary-card"><div style={{ fontSize: '0.875rem', color: '#718096' }}>Pending Approval</div><div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#D69E2E' }}>₱{totalPending.toLocaleString()}</div></div>
      </div>
      <div className="filter-row">
        {['all','approved','pending','rejected'].map(f => <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f.charAt(0).toUpperCase() + f.slice(1)}</button>)}
      </div>
      <div className="pay-table">
        <table>
          <thead><tr><th>Date</th><th>Student</th><th>Term</th><th>Amount</th><th>Method</th><th>Reference</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600, color: '#1A202C' }}>{new Date(p.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td style={{ color: '#718096' }}>{p.studentName}</td>
                <td style={{ color: '#718096' }}>{p.term}</td>
                <td style={{ color: '#38A169', fontWeight: 700 }}>₱{p.amount.toLocaleString()}</td>
                <td style={{ color: '#718096' }}>{p.method}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#718096' }}>{p.reference}</td>
                <td><span className="status-badge" style={{ background: `${STATUS_COLORS[p.status]}15`, color: STATUS_COLORS[p.status] }}>{p.status}</span></td>
                <td>
                  {p.status === 'Pending' && (
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <button className="action-btn-small" style={{ borderColor: '#38A169', color: '#38A169' }} onClick={() => updatePaymentStatus(p.id, 'Approved')}>Approve</button>
                      <button className="action-btn-small" style={{ borderColor: '#E53E3E', color: '#E53E3E' }} onClick={() => updatePaymentStatus(p.id, 'Rejected')}>Reject</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

