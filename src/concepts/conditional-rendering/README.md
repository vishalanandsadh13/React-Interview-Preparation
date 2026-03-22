# Conditional Rendering

## Definition
Conditional rendering means showing different UI based on state/props.

## Why it is used
- To represent states like loading/error/success.
- To show/hide UI based on permissions, feature flags, toggles, etc.

## Key points
- Use early returns for large branches.
- Use ternary for inline decisions.
- Use `&&` for “render this only if true”.

## Code explanation
- The status card shows three branches using a ternary chain.
- The details line uses `showDetails && ...`.

## Interview questions
- When do you prefer early return vs ternary?
- Why is `condition && <Comp />` common in React?
- What can go wrong if you render `0` with `&&` accidentally?

