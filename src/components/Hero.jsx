import { useRef } from 'react'
import CupButton from './Cup_Button'

const BEANS = [
  { x: '2%', y: '10%', s: 30, r: -25, dur: 9, del: 0 },
  { x: '46%', y: '5%', s: 22, r: 30, dur: 11, del: -3 },
  { x: '92%', y: '12%', s: 34, r: 15, dur: 10, del: -5 },
  { x: '6%', y: '80%', s: 26, r: 50, dur: 12, del: -2 },
  { x: '48%', y: '92%', s: 20, r: -40, dur: 8, del: -6 },
  { x: '95%', y: '74%', s: 28, r: -10, dur: 13, del: -4 },
]

export default function Hero() {
  const ref = useRef(null)

  // Mueve los productos según el mouse (solo cambia variables CSS, sin re-render)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    ref.current.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }

  return (
    <section id="inicio" className="hero" ref={ref} onPointerMove={onMove}>
      {BEANS.map((b, i) => (
        <svg
          key={i}
          className="bean"
          viewBox="0 0 24 32"
          aria-hidden="true"
          style={{ left: b.x, top: b.y, width: b.s, '--r': `${b.r}deg`, '--dur': `${b.dur}s`, '--del': `${b.del}s` }}
        >
          <ellipse cx="12" cy="16" rx="10" ry="14" fill="#7a4a2e" />
          <path d="M12 3C6 12 18 20 12 29" stroke="#2b1912" strokeWidth="2" fill="none" />
        </svg>
      ))}

      <div className="hero__text">
        <p className="hero__kicker">Bolivia, desde 1957</p>
        <h1>
          <span className="line"><span>Siente</span></span>
          <span className="line"><span>el momento.</span></span>
        </h1>
        <p className="hero__lead">Una taza. Mil maneras de disfrutarla. Encuentra la tuya.</p>
        <CupButton href="#cafes">Descubre nuestros cafés</CupButton>
      </div>

      <div className="stage">
        <div className="stage__ring" aria-hidden="true" />
        <img className="p p--l" src="/images/tradicional-cutout.webp" alt="Café Copacabana Tradicional" fetchPriority="high" />
        <img className="p p--c" src="/images/premium-cutout.webp" alt="Café Copacabana Premium" fetchPriority="high" />
        <img className="p p--r" src="/images/liofilizado-cutout.webp" alt="Café Copacabana Liofilizado" fetchPriority="high" />
      </div>
    </section>
  )
}