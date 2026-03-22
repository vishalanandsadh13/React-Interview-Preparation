# Portals

## Definition
A portal lets you render a React subtree into a DOM node outside the parent component’s DOM hierarchy.

## Why it is used
- Modals, tooltips, dropdowns, toasts (overlays that should escape `overflow: hidden`, stacking contexts, etc.)

## Key points
- Use `createPortal(children, domNode)`.
- React event bubbling still works through the React tree.
- Great for UI that needs to visually “break out” of layout containers.

## Code explanation
- We render a `Modal` into `#portal-root` using `createPortal`.
- Clicking the backdrop closes the modal; clicking inside stops propagation.

## Interview questions
- Why are portals useful for modals and tooltips?
- Do events bubble through the DOM or the React tree with portals?
- What problems do portals solve with CSS stacking/overflow?

