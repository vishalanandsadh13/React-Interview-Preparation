# Higher-Order Components (HOC)

## Definition
A Higher-Order Component is a function that takes a component and returns a new component with added behavior.

## Why it is used
- To reuse cross-cutting UI behavior (loading states, permissions, analytics) across multiple components.

## Key points
- HOCs compose by wrapping components: `withX(Component)`.
- They can make component trees harder to debug (wrapper layers).
- Today, many use cases are better served by hooks, but HOCs still appear in legacy code and some libraries.

## Code explanation
- `withLoading` wraps a component and intercepts a `loading` prop.
- If `loading` is true, it renders a loading UI; otherwise it renders the wrapped component.

## Interview questions
- How does an HOC differ from a custom hook?
- What are the downsides of HOCs (e.g., wrapper hell)?
- When would you still choose an HOC today?

