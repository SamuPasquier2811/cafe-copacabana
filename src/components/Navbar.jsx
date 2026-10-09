import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap">
        <a className="nav__logo" href="#inicio" onClick={close}>
          <img src="/images/logo.webp" alt="Café Copacabana" />
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
        <ul id="menu" className={`nav__links ${open ? 'is-open' : ''}`}>
          <li><a href="#cafes" onClick={close}>Nuestros cafés</a></li>
          <li><a href="#historia" onClick={close}>Historia</a></li>
          <li><a href="#contacto" onClick={close}>Contacto</a></li>
        </ul>
      </div>
    </header>
  )
}