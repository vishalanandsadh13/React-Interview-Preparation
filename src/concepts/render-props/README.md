# Render Props

## Definition
Render props is a pattern where a component receives a function prop (often named `render` or `children`) that returns React elements.

## Why it is used
- To share reusable logic while letting the consumer fully control the UI.

## Key points
- The component owns the logic/state and calls `render(data)` to render UI.
- Can be more flexible than HOCs but can get verbose.
- Many render-prop use cases are now solved with hooks.

## Code explanation
- `MouseTracker` tracks mouse position inside a box.
- It calls `render(pos)` so the parent decides how to display the position.

## Interview questions
- Compare render props vs HOCs vs custom hooks.
- Why might render props lead to deeply nested code?
- How would you rewrite a render-prop component using hooks?

