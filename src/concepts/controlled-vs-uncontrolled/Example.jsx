import React from 'react'

export default function Example() {
  const [email, setEmail] = React.useState('')
  const uncontrolledRef = React.useRef(null)
  const [lastSubmitted, setLastSubmitted] = React.useState(null)

  function onSubmit(e) {
    e.preventDefault()
    const uncontrolledValue = uncontrolledRef.current?.value ?? ''
    setLastSubmitted({ controlled: email, uncontrolled: uncontrolledValue })
  }

  return (
    <div>
      <p className="muted">
        A <strong>controlled</strong> input stores its value in React state. An <strong>uncontrolled</strong> input stores
        its value in the DOM (read via a ref).
      </p>

      <form onSubmit={onSubmit}>
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <label>
              <div className="subtle">Controlled</div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
              />
            </label>
            <div className="subtle">State value: {email || '—'}</div>
          </div>

          <div style={{ flex: 1 }}>
            <label>
              <div className="subtle">Uncontrolled</div>
              <input
                ref={uncontrolledRef}
                defaultValue=""
                placeholder="type anything…"
                style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
              />
            </label>
            <div className="subtle">Not stored in state until submit</div>
          </div>
        </div>

        <div className="row" style={{ marginTop: 12 }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setEmail('')}>
            Clear controlled
          </button>
          <button
            type="button"
            onClick={() => {
              if (uncontrolledRef.current) uncontrolledRef.current.value = ''
            }}
          >
            Clear uncontrolled
          </button>
        </div>
      </form>

      {lastSubmitted && (
        <div className="card" style={{ marginTop: 12 }}>
          <strong>Last submit</strong>
          <div className="subtle">Controlled: {lastSubmitted.controlled || '—'}</div>
          <div className="subtle">Uncontrolled: {lastSubmitted.uncontrolled || '—'}</div>
        </div>
      )}
    </div>
  )
}

