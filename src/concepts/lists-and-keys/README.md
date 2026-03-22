# Lists and Keys

## Definition
When rendering arrays in React, each element needs a `key` prop so React can track items between renders.

## Why it is used
- Improves performance and correctness when lists update (insert/remove/reorder).

## Key points
- Keys must be **stable** and **unique** among siblings.
- Prefer IDs from data (database ID, UUID).
- Avoid using array index as key when list can change order or items can be inserted/removed.

## Code explanation
- We store items with an `id`.
- While mapping `items`, we render `<Item key={item.id} ... />`.
- Adding/removing/toggling items keeps UI aligned because keys are stable.

## Interview questions
- Why are keys required when rendering lists?
- What issues happen when using index as a key?
- Do keys need to be globally unique in the whole app?

