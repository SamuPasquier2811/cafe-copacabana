import { useLayoutEffect, useRef } from 'react'

// Número que sube hasta "to" cuando aparece en pantalla.
// Escribe directo en el DOM (sin useState), así no hay re-renders ni se traba.
export default function CountUp({ to, from = to - 40, duration = 1400, className }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.textContent = from
    let raf
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const k = Math.min((t - t0) / duration, 1)
        el.textContent = Math.round(from + (to - from) * (1 - (1 - k) ** 3))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, from, duration])

  return <span ref={ref} className={className}>{to}</span>
}