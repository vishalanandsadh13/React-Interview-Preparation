# useEffect

## Definition
`useEffect` runs side-effects after React renders (e.g. subscriptions, timers, DOM updates, fetching).

## Why it is used
- To synchronize your component with something **outside** React: timers, network, browser APIs, subscriptions.

## Key points
- It runs **after render**.
- The dependency array controls **when** it reruns.
- Return a cleanup function to avoid leaks (intervals, subscriptions).

## Code explanation
- When `running` is true, we start an interval and clean it up when `running` changes or the component unmounts.
- Another effect updates `document.title` whenever `seconds` changes, and resets the title on unmount.

## Interview questions
- Why do we need a cleanup function in effects?
- What happens if you forget dependencies (or include the wrong ones)?
- When should you avoid `useEffect` and compute values during render instead?

