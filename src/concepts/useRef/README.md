# useRef

## Definition
`useRef` returns an object `{ current }` that stays the same between renders.

## Why it is used
- To access DOM nodes (focus an input, measure an element).
- To keep mutable values (timers, previous values) **without** triggering renders.

## Key points
- Updating `ref.current` does **not** cause a re-render.
- A ref can store a DOM element via `ref={myRef}`.
- For “state that affects UI”, use `useState` instead.

## Code explanation
- `inputRef` points to the input so we can call `.focus()`.
- `renderCountRef` counts renders without using state.
- `prevTextRef` stores the previous `text` value (updated in an effect).

## Interview questions
- When would you use `useRef` instead of `useState`?
- Why doesn’t changing `ref.current` re-render the component?
- How do you store the previous value of a state variable?

