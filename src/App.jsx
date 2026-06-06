import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Nosotros from './components/Nosotros.jsx'
import Servicios from './components/Servicios.jsx'
import Galeria from './components/Galeria.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Galeria />
        <Contacto />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}