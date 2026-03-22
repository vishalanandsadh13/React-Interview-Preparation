# Custom Hooks

## Definition
A custom hook is a JavaScript function that starts with `use` and can call other Hooks to encapsulate reusable React logic.

## Why it is used
- To reuse stateful logic across components without duplicating code.
- To keep components smaller and easier to read.

## Key points
- Custom hooks return values (state, helpers) like any function.
- They must follow the Rules of Hooks (only call hooks at the top level).
- Share **logic**, not UI.

## Code explanation
`useLocalStorageState`:
- Initializes state from `localStorage`.
- Persists state back to `localStorage` in an effect.
The component uses it twice for `name` and a `dark` toggle.

## Interview questions
- What problem do custom hooks solve compared to HOCs/render props?
- Why must custom hooks be named with `use`?
- What are the Rules of Hooks and why do they exist?

