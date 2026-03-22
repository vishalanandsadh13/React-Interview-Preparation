import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function BuggyCounter() {
  const [count, setCount] = React.useState(0)
  if (count >= 5) {
    throw new Error('Boom! Counter reached 5.')
  }
  return (
    <div className="row">
      <span className="pill">Count: {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <span className="subtle">Crashes at 5</span>
    </div>
  )
}

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="card" role="alert">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <strong>Caught by Error Boundary</strong>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
      <div className="subtle">Error: {error.message}</div>
    </div>
  )
}

export default function Example() {
  const [resetKey, setResetKey] = React.useState(0)

  return (
    <div>
      <p className="muted">
        Error boundaries catch render-time errors in their child tree and show a fallback UI instead of crashing the whole
        app.
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={() => setResetKey((k) => k + 1)}>Remount boundary</button>
        <span className="subtle">Useful when you want a “fresh start”</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <ErrorBoundary FallbackComponent={Fallback} resetKeys={[resetKey]}>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    </div>
  )
}

