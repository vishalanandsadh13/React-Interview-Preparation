import React from 'react'

function CounterDisplay({ label, value }) {
  return (
    <div className="row">
      <strong>{label}:</strong> <span className="pill">{value}</span>
    </div>
  )
}

export default function Example() {
  const [count, setCount] = React.useState(0)
  const [label, setLabel] = React.useState('Counter')

  return (
    <div>
      <p className="muted">
        <strong>Props</strong> are inputs from a parent. <strong>State</strong> is owned and managed inside a component.
      </p>

      <CounterDisplay label={label} value={count} />

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment state</button>
        <button onClick={() => setLabel((l) => (l === 'Counter' ? 'My Counter' : 'Counter'))}>Change prop</button>
      </div>
    </div>
  )
}

