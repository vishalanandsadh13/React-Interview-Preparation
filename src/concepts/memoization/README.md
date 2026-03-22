# Memoization (React.memo, useMemo, useCallback)

## Definition
Memoization caches results so React can avoid unnecessary re-renders or recalculations.

## Why it is used
- To improve performance when renders are expensive or components re-render too often.

## Key points
- `React.memo(Component)` skips re-render when props are shallow-equal.
- `useMemo(fn, deps)` memoizes a computed value.
- `useCallback(fn, deps)` memoizes a function reference.
- Don’t memoize everything—measure first.

## Code explanation
- `items` is derived from `query` and memoized with `useMemo`.
- `onPick` is stable thanks to `useCallback`.
- `ExpensiveList` is wrapped with `React.memo`, so unrelated state changes (like `counter`) don’t force it to re-render when props are unchanged.

## Interview questions
- When does `React.memo` help and when does it not?
- Difference between `useMemo` and `useCallback`?
- Why can “over-memoization” hurt performance/readability?

