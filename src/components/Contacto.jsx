import CupButton from './Cup_Button';

export default function Contacto() {
  return (
    <footer id="contacto" className="contacto">
      <img className="contacto__bg" src="/images/granos.webp" alt="" loading="lazy" decoding="async" />
      <div className="wrap">
        <h2 className="rv">Lo demás, lo compartimos.</h2>

        <div className="contacto__bloque rv">
          <p>Para contactarte con nosotros puedes escribirnos a:</p>
          <div className="contacto__cups">
            <CupButton small href="mailto:info@industriacopacabana.com">info@industriacopacabana.com</CupButton>
          </div>
        </div>

        <div className="contacto__bloque rv">
          <p>O llamarnos a los teléfonos:</p>
          <div className="contacto__cups">
            <CupButton small href="tel:+59122458329">(591-2) 2458329</CupButton>
            <CupButton small href="tel:+59122458173">(591-2) 2458173</CupButton>
            <CupButton small href="https://wa.me/78977741">78977741</CupButton>
          </div>
        </div>

        <div className="contacto__bloque rv">
          <p>Y síguenos en redes:</p>
          <div className="contacto__cups">
            <CupButton small external href="https://www.facebook.com/cafecopacabanabolivia/">Facebook oficial</CupButton>
          </div>
        </div>

        <div className="contacto__fin">
          <span>Siente. Disfruta. Saborea.</span>
          <span>La Paz, Bolivia. © 2026 Café Copacabana</span>
        </div>
      </div>
    </footer>
  )
}