import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#FFF5F5', minHeight: '100vh' }}>
          <h2 style={{ color: '#C53030', marginBottom: '0.5rem' }}>Portal Error</h2>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => { localStorage.removeItem('nssc_portal'); window.location.href = '/admin' }} style={{ background: '#1E6B45', color: 'white', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
              Log Out &amp; Return to Login
            </button>
          </div>
          <pre style={{ background: '#FED7D7', padding: '1rem', borderRadius: '8px', whiteSpace: 'pre-wrap', color: '#742A2A', fontSize: '0.85rem' }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
