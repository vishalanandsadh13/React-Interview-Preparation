# Props vs State

## Definition
- **Props**: data passed *into* a component from its parent (read-only).
- **State**: data managed *inside* a component (changes over time).

## Why it is used
- Props let you configure and reuse components.
- State lets a component respond to user interactions and async updates.

## Key points
- Parents pass props down; children communicate up via callbacks.
- State updates cause re-renders.
- If multiple components need the same state, “lift it up” to a common parent.

## Code explanation
The parent owns `count` (state) and `label` (state).
`CounterDisplay` receives `label` and `value` as props and just renders them.

## Interview questions
- Can a child component change its props? If not, how does it communicate changes?
- When should state live in a child vs a parent?
- What is “single source of truth” in React?

