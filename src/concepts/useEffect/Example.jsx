import React from 'react'

export default function Example() {
  const [seconds, setSeconds] = React.useState(0)
  const [running, setRunning] = React.useState(false)

  React.useEffect(() => {
    if (!running) return

    const id = window.setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    // Cleanup runs on unmount or before the next effect run.
    return () => window.clearInterval(id)
  }, [running])

  React.useEffect(() => {
    document.title = `Timer: ${seconds}s`
    return () => {
      // Restore a neutral title when this concept unmounts.
      document.title = 'React Interview Preparation'
    }
  }, [seconds])

  return (
    <div>
      <p className="muted">
        This demo uses <code>useEffect</code> for an interval (with cleanup) and for a side-effect on{' '}
        <code>document.title</code>.
      </p>

      <div className="row">
        <span className="pill">Seconds: {seconds}</span>
        <span className="pill">Running: {String(running)}</span>
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          Stop
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  )
}

