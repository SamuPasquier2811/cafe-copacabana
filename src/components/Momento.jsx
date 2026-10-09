export default function Momento() {
  return (
    <section className="momento">
      <img className="momento__bg" src="/images/espresso-hero.webp" alt="" loading="lazy" decoding="async" />
      <div className="wrap">
        <h2 className="rv">Hay momentos que merecen un buen café.</h2>
        <ul className="momento__list rv rv--list">
          <li>El aroma que despierta la casa.</li>
          <li>La conversación que se alarga.</li>
          <li>Ese instante que es solo tuyo.</li>
        </ul>
        <p className="momento__end rv">Un sorbo. Y estás aquí.</p>
      </div>
    </section>
  )
}