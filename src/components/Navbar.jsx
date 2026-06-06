import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-20 flex items-center justify-between">
          
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
              MC
            </div>

            <div>
              <p className="font-display font-bold text-brand-navy leading-none">
                Mr. Clean
              </p>
              <p className="text-xs text-gray-500">
                Soluciones de Limpieza
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors"
            >
              Nosotros
            </a>

            <a
              href="#servicios"
              className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors"
            >
              Servicios
            </a>

            <a
              href="#galeria"
              className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors"
            >
              Galería
            </a>

            <a
              href="#contacto"
              className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors"
            >
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Solicitar cotización
          </a>

          <button className="md:hidden text-brand-navy">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  )
}