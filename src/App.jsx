import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Nosotros from './components/Nosotros.jsx'
import Servicios from './components/Servicios.jsx'
import Galeria from './components/Galeria.jsx'
import Clientes from './components/Clientes.jsx'
import Curriculum from './components/Curriculum.jsx'
import Cotizacion from './components/Cotizacion.jsx'
import TrabajaConNosotros from './components/TrabajaConNosotros.jsx'
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
        <Clientes />
        <Curriculum />
        <Cotizacion />
        <TrabajaConNosotros />
        <Contacto />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}