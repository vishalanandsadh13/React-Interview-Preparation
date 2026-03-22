import React from 'react'

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })

  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // If storage is blocked/full, we still keep state in memory.
    }
  }, [key, value])

  return [value, setValue]
}

export default function Example() {
  const [name, setName] = useLocalStorageState('rip_name', '')
  const [dark, setDark] = useLocalStorageState('rip_dark', false)

  return (
    <div>
      <p className="muted">
        A custom hook extracts reusable logic (state + effects). This one syncs to <code>localStorage</code>.
      </p>

      <div className="row">
        <label className="row" style={{ gap: 6 }}>
          <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
          Dark mode (demo)
        </label>
        <span className="pill">Stored</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (persists after refresh)…"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 8,
            border: '1px solid #e6e6e6',
            background: dark ? '#111' : '#fff',
            color: dark ? '#fff' : '#111',
          }}
        />
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <span className="pill">Hello, {name || 'Anonymous'}!</span>
        <button onClick={() => setName('')}>Clear</button>
      </div>
    </div>
  )
}

