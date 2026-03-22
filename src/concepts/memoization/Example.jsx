import React from 'react'

const ExpensiveList = React.memo(function ExpensiveList({ items, onPick }) {
  // Pretend this is heavy.
  const totalChars = React.useMemo(() => items.reduce((sum, x) => sum + x.length, 0), [items])

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <strong>Memoized child</strong>
        <span className="pill">total chars: {totalChars}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 10 }}>
        {items.map((x) => (
          <button key={x} onClick={() => onPick(x)}>
            Pick “{x}”
          </button>
        ))}
      </div>
    </div>
  )
})

export default function Example() {
  const [query, setQuery] = React.useState('')
  const [picked, setPicked] = React.useState(null)
  const [counter, setCounter] = React.useState(0)

  const items = React.useMemo(() => {
    const base = ['react', 'memo', 'useMemo', 'useCallback', 'render']
    return base.filter((x) => x.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  const onPick = React.useCallback((value) => {
    setPicked(value)
  }, [])

  return (
    <div>
      <p className="muted">
        Memoization prevents unnecessary work/renders. Use <code>React.memo</code> for components,{' '}
        <code>useMemo</code> for values, and <code>useCallback</code> for stable function references.
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter…"
          style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
        />
        <button onClick={() => setCounter((c) => c + 1)}>Unrelated state: {counter}</button>
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <span className="pill">Picked: {picked || '—'}</span>
        <span className="pill">Items: {items.length}</span>
      </div>

      <div style={{ marginTop: 12 }}>
        <ExpensiveList items={items} onPick={onPick} />
      </div>
    </div>
  )
}

