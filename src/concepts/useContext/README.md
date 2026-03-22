# useContext

## Definition
Context is a way to share values (data/functions) between components without passing props through every level. `useContext` reads that value.

## Why it is used
- Avoid **prop drilling** for app-wide concerns like theme, auth user, locale, feature flags.

## Key points
- A component re-renders when the context value it reads changes.
- Keep context values stable with `useMemo` when passing objects/functions.
- Context is not a replacement for all state management—use it for shared, “global-ish” data.

## Code explanation
- `ThemeProvider` stores `theme` in state and provides `{ theme, toggle }`.
- `ThemeStatus` calls `useContext(ThemeContext)` to read and use the value.

## Interview questions
- What is prop drilling and how does context solve it?
- Why do we often wrap context values with `useMemo`?
- When would you avoid putting frequently changing values in context?

