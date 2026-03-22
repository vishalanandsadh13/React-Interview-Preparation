# useState

## Definition
`useState` is a React Hook that lets a functional component store and update local state.

## Why it is used
- To keep UI in sync with changing data (clicks, form inputs, toggles, etc.)

## Key points
- Updating state triggers a re-render.
- State updates may be **batched**.
- Prefer **functional updates** (`setX(prev => ...)`) when next state depends on previous state.

## Code explanation
This example stores two state values: `count` and `step`.
- Clicking **+ Step** updates `count` using `setCount(c => c + step)` so it always uses the latest `count`.
- `step` is changed independently and also re-renders the UI.

## Interview questions
- What’s the difference between `setCount(count + 1)` and `setCount(c => c + 1)`?
- Why does React re-render after a state update?
- When would you split one object state into multiple `useState` calls?

