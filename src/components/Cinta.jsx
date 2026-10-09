const PALABRAS = ['Siente', 'Disfruta', 'Saborea']

function Grupo({ oculto }) {
  return (
    <div className="cinta__grupo" aria-hidden={oculto || undefined}>
      {[0, 1, 2].flatMap((i) => PALABRAS.map((p) => <span key={i + p}>{p}</span>))}
    </div>
  )
}

export default function Cinta() {
  return (
    <div className="cinta">
      <div className="cinta__pista">
        <Grupo />
        <Grupo oculto />
      </div>
    </div>
  )
}