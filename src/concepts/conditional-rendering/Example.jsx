import React from 'react'

function Status({ state }) {
  if (state === 'loading') return <span className="pill">Loading…</span>
  if (state === 'error') return <span className="pill">Error</span>
  return <span className="pill">Ready</span>
}

export default function Example() {
  const [state, setState] = React.useState('ready') // ready | loading | error
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <div>
      <p className="muted">Common patterns: early returns, ternaries, and && rendering.</p>

      <div className="row">
        <strong>Status:</strong> <Status state={state} />
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={() => setState('ready')}>Ready</button>
        <button onClick={() => setState('loading')}>Loading</button>
        <button onClick={() => setState('error')}>Error</button>
        <label className="row" style={{ gap: 6 }}>
          <input type="checkbox" checked={showDetails} onChange={(e) => setShowDetails(e.target.checked)} />
          Show details
        </label>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        {state === 'loading' ? (
          <div>Fetching data… (demo)</div>
        ) : state === 'error' ? (
          <div>Something went wrong. Try again.</div>
        ) : (
          <div>Data loaded successfully.</div>
        )}

        {showDetails && <div className="subtle" style={{ marginTop: 8 }}>Extra details shown with <code>&&</code>.</div>}
      </div>
    </div>
  )
}

