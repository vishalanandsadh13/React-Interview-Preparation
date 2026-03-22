import React from 'react'
import { createPortal } from 'react-dom'

function Modal({ title, children, onClose }) {
  const portalRoot = document.getElementById('portal-root')
  if (!portalRoot) return null

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        display: 'grid',
        placeItems: 'center',
        padding: 16,
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(560px, 100%)' }}
      >
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <strong>{title}</strong>
          <button onClick={onClose}>Close</button>
        </div>
        <div style={{ marginTop: 10 }}>{children}</div>
      </div>
    </div>,
    portalRoot,
  )
}

export default function Example() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <p className="muted">
        Portals render children into a different DOM node (outside the parent DOM hierarchy) while keeping React
        ownership.
      </p>

      <button onClick={() => setOpen(true)}>Open modal (portal)</button>

      {open && (
        <Modal title="Portal Modal" onClose={() => setOpen(false)}>
          <p className="muted" style={{ marginTop: 0 }}>
            This modal is rendered under <code>#portal-root</code>, not inside this component’s DOM tree.
          </p>
          <div className="row">
            <span className="pill">Escape hatch for overlays</span>
            <span className="pill">Keeps React events working</span>
          </div>
        </Modal>
      )}
    </div>
  )
}

