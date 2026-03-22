import React from 'react'
import { concepts, getConceptById, lazyExampleFor } from './concepts'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="card" role="alert">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <strong>Example crashed</strong>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
      <pre style={{ whiteSpace: 'pre-wrap', marginBottom: 0 }}>{String(error?.message || error)}</pre>
    </div>
  )
}

class LocalErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} resetErrorBoundary={() => this.setState({ error: null })} />
    }
    return this.props.children
  }
}

export default function App() {
  const [activeId, setActiveId] = React.useState(concepts[0].id)
  const active = getConceptById(activeId)
  const ActiveExample = React.useMemo(() => lazyExampleFor(activeId), [activeId])

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">React Interview Preparation</h1>
        <div className="subtle">Pick a concept → see a working demo</div>
      </div>

      <div className="layout">
        <aside className="card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <strong>Concepts</strong>
            <span className="pill">{concepts.length}</span>
          </div>
          <div className="nav" style={{ marginTop: 10 }}>
            {concepts.map((c) => (
              <button key={c.id} onClick={() => setActiveId(c.id)} aria-current={c.id === activeId ? 'page' : undefined}>
                {c.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div>
              <strong>{active.title}</strong>
              <div className="subtle">Folder: <span className="muted">src/concepts/{active.id}</span></div>
            </div>
            <button onClick={() => setActiveId(concepts[0].id)} disabled={activeId === concepts[0].id}>
              Back to first
            </button>
          </div>

          <div style={{ marginTop: 12 }}>
            <LocalErrorBoundary key={activeId}>
              <React.Suspense fallback={<div className="muted">Loading example…</div>}>
                <ActiveExample />
              </React.Suspense>
            </LocalErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  )
}

