# Code Splitting (React.lazy, Suspense)

## Definition
Code splitting is loading JavaScript in smaller chunks so the browser downloads only what’s needed for the current screen.

## Why it is used
- Faster initial load time (smaller bundle).
- Improves perceived performance on large apps.

## Key points
- `React.lazy(() => import('./SomeComponent'))` creates a lazy component.
- Wrap lazy components in `<Suspense fallback={...}>`.
- Useful for routes, heavy widgets, and infrequently used panels.

## Code explanation
- Clicking “Show lazy panel” mounts a `React.lazy` component.
- While the chunk loads, Suspense shows a fallback.

## Interview questions
- What problem does code splitting solve?
- Why do we need `Suspense` with `React.lazy`?
- Where would you apply code splitting in a real app?

