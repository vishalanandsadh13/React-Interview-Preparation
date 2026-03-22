// Central registry for the learning navigation.
// Each concept lazily loads its Example component.

import React from 'react'

export const concepts = [
  { id: 'useState', title: 'useState', loader: () => import('./useState/Example.jsx') },
  { id: 'useEffect', title: 'useEffect', loader: () => import('./useEffect/Example.jsx') },
  { id: 'useContext', title: 'useContext', loader: () => import('./useContext/Example.jsx') },
  { id: 'useRef', title: 'useRef', loader: () => import('./useRef/Example.jsx') },
  { id: 'custom-hooks', title: 'Custom Hooks', loader: () => import('./custom-hooks/Example.jsx') },
  { id: 'props-vs-state', title: 'Props vs State', loader: () => import('./props-vs-state/Example.jsx') },
  {
    id: 'controlled-vs-uncontrolled',
    title: 'Controlled vs Uncontrolled',
    loader: () => import('./controlled-vs-uncontrolled/Example.jsx'),
  },
  {
    id: 'conditional-rendering',
    title: 'Conditional Rendering',
    loader: () => import('./conditional-rendering/Example.jsx'),
  },
  { id: 'lists-and-keys', title: 'Lists and Keys', loader: () => import('./lists-and-keys/Example.jsx') },
  { id: 'forms-handling', title: 'Forms Handling', loader: () => import('./forms-handling/Example.jsx') },
  { id: 'lifting-state-up', title: 'Lifting State Up', loader: () => import('./lifting-state-up/Example.jsx') },
  { id: 'memoization', title: 'Memoization', loader: () => import('./memoization/Example.jsx') },
  { id: 'error-boundaries', title: 'Error Boundaries', loader: () => import('./error-boundaries/Example.jsx') },
  { id: 'portals', title: 'Portals', loader: () => import('./portals/Example.jsx') },
  {
    id: 'higher-order-components',
    title: 'Higher-Order Components',
    loader: () => import('./higher-order-components/Example.jsx'),
  },
  { id: 'render-props', title: 'Render Props', loader: () => import('./render-props/Example.jsx') },
  { id: 'code-splitting', title: 'Code Splitting', loader: () => import('./code-splitting/Example.jsx') },
]

export function getConceptById(id) {
  return concepts.find((c) => c.id === id) ?? concepts[0]
}

export function lazyExampleFor(conceptId) {
  const concept = getConceptById(conceptId)
  return React.lazy(concept.loader)
}

