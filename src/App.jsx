import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cinta from './components/Cinta'
import Momento from './components/Momento'
import Productos from './components/Productos'
import Historia from './components/Historia'
import Contacto from './components/Contacto'
import useRevealAll from './hooks/useReveal'

export default function App() {
  useRevealAll()
  return (
    <>
      <div className="progreso" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Cinta />
        <Momento />
        <Productos />
        <Historia />
      </main>
      <Contacto />
    </>
  )
}