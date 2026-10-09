import CountUp from "./Count_Up"

// Si tus imágenes tienen otro nombre, cambia solo el valor de "img"
const HITOS = [
  {
    year: 1957,
    titulo: 'Una idea. Una primera tienda.',
    texto:
      'Industria Copacabana nace el 8 de abril de 1957. Don José Hugo Camacho Prado y Doña Martha García Agreda, de unos 20 años, querían su propia empresa y vieron en el café un gran negocio. Con las escrituras de la casa de su madre, el Banco Central les dio capital para empezar. Su primera tienda abrió en la calle Díaz Romero, en Miraflores, y vendía 5 kilos de café al día.',
    img: '/images/hito-1957.webp',
  },
  {
    year: 1967,
    titulo: 'Más cerca de cada taza.',
    texto:
      'Con el tiempo notaron que había personas que buscaban un buen café, y abrieron nuevos puntos para acercar sus productos a más clientes.',
    img: '/images/hito-1967.webp',
  },
  {
    year: 1985,
    titulo: 'Un país estable, un café que viaja.',
    texto:
      'El país recupera su estabilidad política, económica y social. En 1990, Industria Copacabana empieza a exportar café a Europa y Estados Unidos.',
    img: '/images/hito-1985.webp',
  },
  {
    year: 1997,
    titulo: 'Una planta moderna. Una marca de calidad.',
    texto:
      'Concluye la construcción de una moderna planta de procesamiento, con tecnología de punta y granos de altura de Caranavi, en Nor Yungas. Ese año se consolida como la primera empresa exportadora de café, un sello de calidad reconocido internacionalmente.',
    img: '/images/hito-1997.webp',
  },
  {
    year: 2016,
    titulo: 'Una historia de esfuerzo, dedicación y fe.',
    texto:
      'Con más de 59 años en el mercado y más de 200 trabajadores comprometidos con la excelencia, Industria Copacabana sigue construyendo valores que han hecho de Café Copacabana el mejor café de Bolivia.',
    img: '/images/hito-2016.webp',
  },
]

export default function Historia() {
  return (
    <section id="historia" className="historia">
      <div className="wrap">
        <header className="historia__intro rv">
          <h2>De aquí. De siempre.</h2>
          <p>Todo empezó con una primera tienda en La Paz. Hoy seguimos encontrándonos alrededor de un café.</p>
        </header>

        <ol className="linea">
          {HITOS.map((h, i) => (
            <li key={h.year} className={`hito ${i % 2 ? 'hito--der' : ''}`}>
              <div className="hito__txt rv">
                <CountUp className="hito__year" to={h.year} />
                <h3>{h.titulo}</h3>
                <p>{h.texto}</p>
              </div>
              <figure className="hito__fig rv rv--img">
                <div className="hito__foto">
                  <img src={h.img} alt={`Café Copacabana, ${h.year}`} loading="lazy" decoding="async" />
                </div>
                <figcaption>{h.year}</figcaption>
              </figure>
              <span className="hito__dot" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}