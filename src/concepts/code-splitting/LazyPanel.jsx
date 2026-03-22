import React from 'react'

export default function LazyPanel() {
  const [time] = React.useState(() => new Date().toLocaleTimeString())
  return (
    <div className="card">
      <strong>Lazy-loaded panel</strong>
      <div className="subtle">Loaded at: {time}</div>
      <p className="muted" style={{ marginBottom: 0 }}>
        This component lives in a separate module so Vite can split it into a separate chunk.
      </p>
    </div>
  )
}

