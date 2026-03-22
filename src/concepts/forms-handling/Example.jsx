import React from 'react'

export default function Example() {
  const [form, setForm] = React.useState({ name: '', role: 'frontend', agree: false })
  const [submitted, setSubmitted] = React.useState(null)

  function update(e) {
    const { name, type, value, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(form)
  }

  return (
    <div>
      <p className="muted">A common pattern: keep form fields in one state object and update by <code>name</code>.</p>

      <form onSubmit={onSubmit} className="card" style={{ marginTop: 12 }}>
        <div className="row" style={{ alignItems: 'flex-start' }}>
          <label style={{ flex: 1 }}>
            <div className="subtle">Name</div>
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Jane Doe"
              style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
            />
          </label>

          <label style={{ minWidth: 220 }}>
            <div className="subtle">Role</div>
            <select
              name="role"
              value={form.role}
              onChange={update}
              style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #e6e6e6' }}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </label>
        </div>

        <label className="row" style={{ gap: 8, marginTop: 12 }}>
          <input name="agree" type="checkbox" checked={form.agree} onChange={update} />
          I agree to the terms
        </label>

        <div className="row" style={{ marginTop: 12 }}>
          <button type="submit" disabled={!form.name.trim() || !form.agree}>
            Submit
          </button>
          <button type="button" onClick={() => setForm({ name: '', role: 'frontend', agree: false })}>
            Reset
          </button>
        </div>
      </form>

      {submitted && (
        <div className="card" style={{ marginTop: 12 }}>
          <strong>Submitted</strong>
          <pre style={{ marginBottom: 0 }}>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

