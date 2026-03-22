# Controlled vs Uncontrolled Components

## Definition
- **Controlled**: form value is stored in React state (`value` + `onChange`).
- **Uncontrolled**: form value is stored in the DOM and read when needed (often via `ref`).

## Why it is used
- Controlled inputs make validation, formatting, and conditional UI straightforward.
- Uncontrolled inputs can be simpler for quick forms or integrating non-React widgets.

## Key points
- Controlled = single source of truth in state.
- Uncontrolled = less re-rendering while typing, but harder to validate live.
- Prefer controlled for most React apps.

## Code explanation
The left input is controlled by `email` state.  
The right input is uncontrolled; we read its value via `uncontrolledRef` on submit.

## Interview questions
- When would you choose uncontrolled inputs?
- How do you reset a controlled vs uncontrolled input?
- What does “single source of truth” mean for forms?

