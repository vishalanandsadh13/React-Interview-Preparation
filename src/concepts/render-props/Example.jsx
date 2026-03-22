import React from 'react'

function MouseTracker({ render }) {
  const boxRef = React.useRef(null)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

  function onMove(e) {
    const rect = boxRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    })
  }

  return (
    <div
      ref={boxRef}
      onMouseMove={onMove}
      className="card"
      style={{ height: 140, position: 'relative', overflow: 'hidden' }}
    >
      <div className="subtle">Move your mouse inside this box</div>
      {render(pos)}
    </div>
  )
}

export default function Example() {
  return (
    <div>
      <p className="muted">
        Render props is a pattern where a component shares logic by calling a function prop that returns UI.
      </p>

      <MouseTracker
        render={({ x, y }) => (
          <>
            <div className="row" style={{ marginTop: 12 }}>
              <span className="pill">x: {x}</span>
              <span className="pill">y: {y}</span>
            </div>
            <div
              style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#111',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </>
        )}
      />
    </div>
  )
}

