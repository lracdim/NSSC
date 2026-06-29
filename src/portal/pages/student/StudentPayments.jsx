import useStore from '../../store/useStore'
const METHOD_STYLES = { GCash: { bg: '#EBF8FF', color: '#2B6CB0' }, Cash: { bg: '#F4F6F9', color: '#4A5568' }, 'Bank Transfer': { bg: '#FAF5FF', color: '#6B46C1' }, Maya: { bg: '#F0FFF4', color: '#38A169' } }
export default function StudentPayments() {
  const currentUser = useStore(s => s.currentUser)
  const students = useStore(s => s.students)
  const getStudentPayments = useStore(s => s.getStudentPayments)
  const student = students.find(s => s.id === currentUser?.studentId)
  if (!student) return <div>Not found.</div>
  const payments = getStudentPayments(student.id)
  const balance = student.tuitionTotal - student.tuitionPaid
  const pct = student.tuitionTotal > 0 ? Math.round((student.tuitionPaid / student.tuitionTotal) * 100) : 0
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <style>{`
        * { box-sizing: border-box; }
        .tuition-card { background: white; border-radius: 16px; border: 1px solid #E2E8F0; padding: 1.5rem; margin-bottom: 2rem; }
        .progress-bar { height: 12px; background: #E2E8F0; border-radius: 9999px; overflow: hidden; margin-top: 0.75rem; }
        .progress-fill { height: 100%; background: #2B6CB0; border-radius: 9999px; transition: width 500ms; }
        .pay-table { background: white; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; }
        .pay-table table { width: 100%; border-collapse: collapse; }
        .pay-table th { background: #F4F6F9; padding: 0.75rem 1rem; text-align: left; font-size: 0.7rem; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; }
        .pay-table td { padding: 0.75rem 1rem; font-size: 0.875rem; border-top: 1px solid #E2E8F0; }
        .pay-table tr:nth-child(even) td { background: #FAFBFC; }
        .method-badge { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 9999px; }
      `}</style>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C', marginBottom: '1.5rem' }}>My Payments</h2>
      <div className="tuition-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div><div style={{ fontSize: '0.875rem', color: '#718096' }}>Total Tuition</div><div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A202C' }}>₱{student.tuitionTotal.toLocaleString()}</div></div>
          <div style={{ textAlign: 'right' }}><div style={{ fontSize: '0.875rem', color: '#38A169', fontWeight: 600 }}>Paid: ₱{student.tuitionPaid.toLocaleString()}</div><div style={{ fontSize: '0.875rem', color: balance > 0 ? '#E53E3E' : '#38A169', fontWeight: 600 }}>Balance: ₱{balance.toLocaleString()}</div></div>
        </div>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
        <div style={{ fontSize: '0.72rem', color: '#718096', marginTop: '0.5rem' }}>{pct}% paid · S.Y. 2024–2025</div>
      </div>
      <div style={{ background: '#EBF8FF', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: '#2B6CB0' }}>
        To make a payment, please visit the Cashier's Office or coordinate with your parent/guardian.
      </div>
      <div className="pay-table">
        <table>
          <thead><tr><th>Date</th><th>Term</th><th>Amount</th><th>Method</th><th>Reference</th><th>Status</th></tr></thead>
          <tbody>
            {payments.length === 0 ? <tr><td colSpan={6} style={{ textAlign: 'center', color: '#A0AEC0', padding: '2rem' }}>No payment records found.</td></tr> : payments.map(p => {
              const ms = METHOD_STYLES[p.method] || METHOD_STYLES.Cash
              return <tr key={p.id}>
                <td style={{ fontWeight: 600, color: '#1A202C' }}>{new Date(p.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td style={{ color: '#718096' }}>{p.term}</td>
                <td style={{ color: '#38A169', fontWeight: 700 }}>₱{p.amount.toLocaleString()}</td>
                <td><span className="method-badge" style={{ background: ms.bg, color: ms.color }}>{p.method}</span></td>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#718096' }}>{p.reference}</td>
                <td><span style={{ background: '#F0FFF4', color: '#38A169', fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{p.status}</span></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

