import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-20 flex items-center justify-between">

          <a href="#inicio" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Mr. Clean - Melcon Suministros y Consultoría"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Inicio
            </a>

            <a href="#nosotros" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Nosotros
            </a>

            <a href="#servicios" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Servicios
            </a>

            <a href="#galeria" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Galería
            </a>

            <a href="#empresas" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Empresas
            </a>

            <a href="#certificaciones" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Certificaciones
            </a>

            <a href="#contacto" className="font-body text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Solicitar cotización
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-brand-navy"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">

            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Nosotros
            </a>

            <a
              href="#servicios"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Servicios
            </a>

            <a
              href="#galeria"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Galería
            </a>

            <a
              href="#empresas"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Empresas
            </a>

            <a
              href="#certificaciones"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Certificaciones
            </a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Contacto
            </a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="bg-brand-blue text-white text-center py-3 rounded-full"
            >
              Solicitar cotización
            </a>

          </div>
        )}
      </div>
    </header>
  )
}