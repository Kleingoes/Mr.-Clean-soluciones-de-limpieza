import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-20 flex items-center justify-between">

          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="Mr. Clean - Melcon Suministros y Consultoría"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#inicio" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Inicio
            </a>

            <a href="#nosotros" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Nosotros
            </a>

            <a href="#servicios" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Servicios
            </a>

            <a href="#galeria" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Galería
            </a>

            <a href="#nuestros-clientes" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Nuestros Clientes
            </a>

            <a href="#cotizacion" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Cotización
            </a>

            <a href="#trabaja-con-nosotros" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Trabaja con nosotros
            </a>

            <a href="#contacto" className="whitespace-nowrap font-body text-xs xl:text-sm text-gray-600 hover:text-brand-blue transition-colors">
              Contacto
            </a>
          </div>

          {/* Spacer to balance logo on the left */}
          <div className="hidden lg:block w-[136px] xl:w-[160px]" />

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-brand-navy flex-shrink-0"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-4">

            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Nosotros
            </a>

            <a
              href="#servicios"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Servicios
            </a>

            <a
              href="#galeria"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Galería
            </a>

            <a
              href="#nuestros-clientes"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Nuestros Clientes
            </a>

            <a
              href="#cotizacion"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Cotización
            </a>

            <a
              href="#trabaja-con-nosotros"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Trabaja con nosotros
            </a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors py-1"
            >
              Contacto
            </a>

          </nav>
        )}
      </div>
    </header>
  )
}