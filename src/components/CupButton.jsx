import { useRef, useState } from 'react'

// Botón en forma de taza: se llena de café al hacer click
export default function CupButton({ href, children, external = false, small = false }) {
  const [lleno, setLleno] = useState(false)
  const timer = useRef(0)

  const onClick = (e) => {
    setLleno(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setLleno(false), 2200)

    const sinPausa =
      external || e.metaKey || e.ctrlKey || e.shiftKey ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sinPausa) return

    // Pequeña pausa para ver cómo se llena la taza antes de ir al destino
    e.preventDefault()
    setTimeout(() => { window.location.href = href }, 600)
  }

  return (
    <a
      className={`cup ${small ? 'cup--sm' : ''} ${lleno ? 'is-lleno' : ''}`}
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="cup__steam" aria-hidden="true"><i /><i /><i /></span>
      <span className="cup__body">
        <span className="cup__fill" aria-hidden="true" />
        <span className="cup__label">{children}</span>
      </span>
    </a>
  )
}