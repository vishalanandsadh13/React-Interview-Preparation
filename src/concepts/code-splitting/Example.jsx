import React from 'react'

// This lazy import simulates splitting a part of the UI into a separate chunk.
const LazyPanel = React.lazy(() => import('./LazyPanel.jsx'))

export default function Example() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <p className="muted">
        Code splitting loads code on demand. In React you commonly use <code>React.lazy</code> + <code>Suspense</code>.
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={() => setOpen((v) => !v)}>{open ? 'Hide' : 'Show'} lazy panel</button>
        <span className="subtle">Open DevTools → Network to see chunk load</span>
      </div>

      <div style={{ marginTop: 12 }}>
        {open ? (
          <React.Suspense fallback={<div className="pill">Loading chunk…</div>}>
            <LazyPanel />
          </React.Suspense>
        ) : (
          <div className="pill">Panel is not loaded yet</div>
        )}
      </div>
    </div>
  )
}

