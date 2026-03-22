import React from 'react'

const ThemeContext = React.createContext(null)

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light')
  const value = React.useMemo(
    () => ({
      theme,
      toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function ThemeStatus() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) return null

  const isDark = ctx.theme === 'dark'
  return (
    <div
      className="card"
      style={{
        borderColor: isDark ? '#333' : '#e6e6e6',
        background: isDark ? '#111' : '#fff',
        color: isDark ? '#fff' : '#111',
      }}
    >
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <strong>Theme: {ctx.theme}</strong>
        <button onClick={ctx.toggle}>Toggle</button>
      </div>
      <p className="muted" style={{ marginBottom: 0, color: isDark ? '#cfcfcf' : '#666' }}>
        Any component can read theme without prop drilling.
      </p>
    </div>
  )
}

export default function Example() {
  return (
    <div>
      <p className="muted">
        <code>useContext</code> reads a value from the nearest matching Provider.
      </p>
      <ThemeProvider>
        <ThemeStatus />
      </ThemeProvider>
    </div>
  )
}

