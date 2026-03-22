# Error Boundaries

## Definition
Error boundaries are components that catch JavaScript errors during rendering (and in lifecycle methods) in their child tree and render a fallback UI.

## Why it is used
- Prevents the entire app from crashing due to one component error.
- Lets you show a user-friendly recovery UI.

## Key points
- They **do not** catch errors in event handlers (you handle those with try/catch).
- They catch render-time errors and errors in effects during commit.
- Traditionally implemented with class components; in function-component apps you can use libraries like `react-error-boundary`.

## Code explanation
- `BuggyCounter` throws when the count reaches 5.
- `ErrorBoundary` catches it and renders `Fallback`.
- Changing `resetKey` remounts/resets the boundary state.

## Interview questions
- What kinds of errors do error boundaries catch (and not catch)?
- Why can’t we implement error boundaries with hooks alone?
- How would you let a user recover from an error boundary state?

