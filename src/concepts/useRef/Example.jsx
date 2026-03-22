import React from 'react'

export default function Example() {
  const inputRef = React.useRef(null)
  const renderCountRef = React.useRef(0)
  const prevTextRef = React.useRef('')

  const [text, setText] = React.useState('')

  renderCountRef.current += 1

  React.useEffect(() => {
    prevTextRef.current = text
  }, [text])

  return (
    <div>
      <p className="muted">
        <code>useRef</code> holds a mutable value that survives re-renders without causing re-renders.
      </p>

      <div className="row">
        <button onClick={() => inputRef.current?.focus()}>Focus input</button>
        <span className="pill">Renders: {renderCountRef.current}</span>
        <span className="pill">Previous text: “{prevTextRef.current}”</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here…"
          style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
        />
      </div>
    </div>
  )
}

