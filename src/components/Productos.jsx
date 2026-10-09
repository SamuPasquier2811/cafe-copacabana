import { useState } from 'react'

// Cada línea tiene sus presentaciones. Cada presentación tiene su propia imagen.
// "def" es la presentación que se muestra primero (posición dentro de "pres", empezando en 0).
const LINEAS = [
  {
    id: 'tradicional', nombre: 'Tradicional', tone: '#6B3A22', def: 2,
    lema: 'El sabor de cada día',
    texto: 'Café con un delicado añadido de azúcar que le da su sabor característico.',
    pres: [
      { id: 't50', main: '50 g', img: '/images/productos/tradicional-50.webp' },
      { id: 't250', main: '250 g', img: '/images/productos/tradicional-250.webp' },
      { id: 't500', main: '500 g', img: '/images/productos/tradicional-500.webp' },
      { id: 't1000', main: '1000 g', img: '/images/productos/tradicional-1000.webp' },
    ],
  },
  {
    id: 'premium', nombre: 'Premium', tone: '#3B2418', def: 1,
    lema: 'Una selección para disfrutar',
    texto: 'Una línea elaborada con una fina selección de granos de café.',
    pres: [
      { id: 'p250', main: '250 g', img: '/images/productos/premium-250.webp' },
      { id: 'p500', main: '500 g', img: '/images/productos/premium-500.webp' },
    ],
  },
  {
    id: 'instantaneo', nombre: 'Instantáneo', tone: '#7A2F26', def: 0,
    lema: 'Tu pausa, sin complicaciones',
    texto: 'Una opción de preparación rápida para disfrutar café a tu ritmo.',
    pres: [
      { id: 'i50', main: '50 g', img: '/images/productos/instantaneo-50.webp' },
      { id: 'i200', main: '200 g', img: '/images/productos/instantaneo-200.webp' },
      { id: 'ifrasco', main: '200 g', sub: 'Frasco', img: '/images/productos/instantaneo-frasco-200.webp' },
      { id: 'isticks', main: '48 sticks', sub: 'Caja, 2 g cada uno', img: '/images/productos/instantaneo-sticks-48.webp' },
    ],
  },
  {
    id: 'liofilizado', nombre: 'Liofilizado', tone: '#8A5A1E', def: 0,
    lema: 'El momento, en un instante',
    texto: 'Café instantáneo liofilizado. Una forma sencilla de disfrutar tu pausa.',
    pres: [{ id: 'l45', main: '45 g', img: '/images/liofilizado-cutout.webp' }],
  },
]

export default function Productos() {
  const [l, setL] = useState(0)
  const [p, setP] = useState(LINEAS[0].def)
  const linea = LINEAS[l]
  const pres = linea.pres[p]
  const [num, ...unidad] = pres.main.split(' ')

  const elegirLinea = (i) => {
    setL(i)
    setP(LINEAS[i].def)
  }

  // Inclina el producto según el mouse (variables CSS, sin re-render)
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--tx', ((e.clientX - r.left) / r.width - 0.5).toFixed(2))
    e.currentTarget.style.setProperty('--ty', ((e.clientY - r.top) / r.height - 0.5).toFixed(2))
  }
  const onLeave = (e) => {
    e.currentTarget.style.setProperty('--tx', 0)
    e.currentTarget.style.setProperty('--ty', 0)
  }

  return (
    <section id="cafes" className="cafes" style={{ '--tone': linea.tone }}>
      <div className="wrap">
        <h2 className="rv">Distintos rituales. La misma pasión.</h2>

        <div className="tabs" role="tablist" aria-label="Elige una línea de café">
          {LINEAS.map((c, i) => (
            <button key={c.id} role="tab" className="tab" aria-selected={i === l} onClick={() => elegirLinea(i)}>
              {c.nombre}
            </button>
          ))}
        </div>

        <div className="prod" role="tabpanel">
          <div className="prod__stage" onPointerMove={onMove} onPointerLeave={onLeave}>
            <span key={linea.id + 'g'} className="prod__ghost" aria-hidden="true">{linea.nombre}</span>
            <img
              key={pres.id}
              className="prod__img"
              src={pres.img}
              alt={`Café Copacabana ${linea.nombre}, ${pres.main}${pres.sub ? ', ' + pres.sub.toLowerCase() : ''}`}
            />
            <div key={pres.id + 's'} className="prod__sello" aria-hidden="true">
              <b>{num}</b>
              <small>{unidad.join(' ')}</small>
            </div>
          </div>

          <div key={linea.id} className="prod__txt">
            <h3>{linea.lema}</h3>
            <p>{linea.texto}</p>
            <p className="pres__label" id="pres-label">
              {linea.pres.length > 1 ? 'Elige una presentación' : 'Presentación'}
            </p>
            <div className="pres" role="radiogroup" aria-labelledby="pres-label">
              {linea.pres.map((x, i) => (
                <button
                  key={x.id}
                  role="radio"
                  aria-checked={i === p}
                  className="chip"
                  style={{ '--i': i }}
                  onClick={() => setP(i)}
                >
                  <b>{x.main}</b>
                  {x.sub && <small>{x.sub}</small>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Precarga las demás presentaciones de la línea para que el cambio sea instantáneo */}
        <div hidden aria-hidden="true">
          {linea.pres.filter((x) => x.id !== pres.id).map((x) => (
            <img key={x.id} src={x.img} alt="" decoding="async" />
          ))}
        </div>
      </div>
    </section>
  )
}