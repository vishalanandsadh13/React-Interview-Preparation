# Lifting State Up

## Definition
Lifting state up means moving shared state to the closest common parent so multiple children can stay in sync.

## Why it is used
- When sibling components need to read/update the same data.
- To keep a single source of truth.

## Key points
- Parent owns the state; children receive `value` and `onChange` via props.
- Avoid duplicating the same state in multiple components.

## Code explanation
The Celsius and Fahrenheit inputs are separate components, but the parent stores Celsius as the single source of truth.  
Changing either input updates the parent state, which updates both inputs.

## Interview questions
- What does “single source of truth” mean in React?
- When should you lift state up vs use context?
- How do children “update” parent state?

