import React from 'react'

export default function Example() {
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(1)

  function increment() {
    // Using functional update avoids stale state when batching updates.
    setCount((c) => c + step)
  }

  function reset() {
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <p className="muted">Two independent pieces of state: <code>count</code> and <code>step</code>.</p>
      <div className="row">
        <span className="pill">Count: {count}</span>
        <span className="pill">Step: {step}</span>
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <button onClick={increment}>+ Step</button>
        <button onClick={() => setStep((s) => Math.max(1, s - 1))}>Step -</button>
        <button onClick={() => setStep((s) => s + 1)}>Step +</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

