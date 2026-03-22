import React from 'react'

function withLoading(Component) {
  return function WithLoading(props) {
    const { loading, ...rest } = props
    if (loading) return <div className="pill">Loading…</div>
    return <Component {...rest} />
  }
}

function UserCard({ user }) {
  return (
    <div className="card">
      <strong>{user.name}</strong>
      <div className="subtle">Role: {user.role}</div>
    </div>
  )
}

const UserCardWithLoading = withLoading(UserCard)

export default function Example() {
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({ name: 'Visha', role: 'React Developer' })

  async function simulateFetch() {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 700))
    setUser({ name: 'Alex', role: 'Frontend Engineer' })
    setLoading(false)
  }

  return (
    <div>
      <p className="muted">
        A Higher-Order Component (HOC) is a function that takes a component and returns an enhanced component.
      </p>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={simulateFetch}>Simulate loading</button>
        <button onClick={() => setUser({ name: 'Visha', role: 'React Developer' })} disabled={loading}>
          Reset user
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <UserCardWithLoading loading={loading} user={user} />
      </div>
    </div>
  )
}

