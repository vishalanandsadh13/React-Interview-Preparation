import React from 'react'

function CelsiusInput({ value, onChange }) {
  return (
    <label style={{ flex: 1 }}>
      <div className="subtle">Celsius (°C)</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 25"
        style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
      />
    </label>
  )
}

function FahrenheitInput({ value, onChange }) {
  return (
    <label style={{ flex: 1 }}>
      <div className="subtle">Fahrenheit (°F)</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 77"
        style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
      />
    </label>
  )
}

function toNumberOrEmpty(v) {
  if (v.trim() === '') return ''
  const n = Number(v)
  return Number.isFinite(n) ? n : ''
}

export default function Example() {
  // Single source of truth lives in the parent.
  const [c, setC] = React.useState('25')

  const cNum = toNumberOrEmpty(c)
  const f = cNum === '' ? '' : String(Math.round((cNum * 9) / 5 + 32))

  function setF(nextF) {
    const fNum = toNumberOrEmpty(nextF)
    if (fNum === '') {
      setC('')
      return
    }
    const nextC = ((fNum - 32) * 5) / 9
    setC(String(Math.round(nextC)))
  }

  return (
    <div>
      <p className="muted">
        Two inputs stay in sync by moving shared state to their closest common parent (lifting state up).
      </p>

      <div className="row" style={{ alignItems: 'flex-start', marginTop: 12 }}>
        <CelsiusInput value={c} onChange={setC} />
        <FahrenheitInput value={f} onChange={setF} />
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="subtle">Single source of truth: <code>c</code> in parent</div>
        <div className="row" style={{ marginTop: 8 }}>
          <span className="pill">C: {c || '—'}</span>
          <span className="pill">F: {f || '—'}</span>
        </div>
      </div>
    </div>
  )
}

