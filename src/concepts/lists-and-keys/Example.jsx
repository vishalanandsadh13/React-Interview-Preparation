import React from 'react'

function Item({ item, onToggle, onRemove }) {
  return (
    <div className="row" style={{ justifyContent: 'space-between' }}>
      <label className="row" style={{ gap: 8 }}>
        <input type="checkbox" checked={item.done} onChange={() => onToggle(item.id)} />
        <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
      </label>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  )
}

export default function Example() {
  const [text, setText] = React.useState('')
  const [items, setItems] = React.useState([
    { id: 'a1', text: 'Learn keys', done: false },
    { id: 'b2', text: 'Avoid index as key (usually)', done: false },
  ])

  function addItem(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setItems((prev) => [{ id: crypto.randomUUID(), text: trimmed, done: false }, ...prev])
    setText('')
  }

  function toggle(id) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)))
  }

  function remove(id) {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }

  return (
    <div>
      <p className="muted">
        Keys help React match list items between renders. Use stable IDs, not array index (when items can reorder/change).
      </p>

      <form onSubmit={addItem} className="row" style={{ marginTop: 12 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add item…"
          style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
        />
        <button type="submit">Add</button>
      </form>

      <div className="card" style={{ marginTop: 12 }}>
        {items.length === 0 ? (
          <div className="muted">No items.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {items.map((item) => (
              <Item key={item.id} item={item} onToggle={toggle} onRemove={remove} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

