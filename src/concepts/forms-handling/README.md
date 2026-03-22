# Forms Handling

## Definition
Forms handling is managing input values, validation, and submission in React.

## Why it is used
- To keep UI and submitted data consistent.
- To validate user input and show feedback.

## Key points
- Use controlled inputs for most React forms.
- Update state from `onChange` and prevent default submit with `e.preventDefault()`.
- Keep form state flat/small when possible.

## Code explanation
- All fields are stored in one `form` object.
- The `update` handler updates by `input.name`.
- Submit stores a snapshot in `submitted` and shows it.

## Interview questions
- How do controlled inputs work in React?
- What’s the benefit of storing form fields in one object vs multiple `useState` calls?
- How do you handle validation and disable submit?

