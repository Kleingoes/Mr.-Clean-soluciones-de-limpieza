import { MessageCircle } from 'lucide-react'
import logoWhite from '../assets/logo-white.png'

const WHATSAPP_NUMBER = '529XXXXXXXXX'
const WHATSAPP_MSG = encodeURIComponent(
  'Hola, me interesa solicitar una cotización para servicio de limpieza.'
)

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#inicio" className="flex items-center">
              <img
                src={logoWhite}
                alt="Mr. Clean - Melcon Suministros y Consultoría"
                className="h-10 w-auto object-contain"
                loading="eager"
              />
            </a>

            <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed">
              Soluciones de limpieza profesional para hogares y empresas.
              Calidad, confianza y resultados garantizados.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-medium text-sm px-5 py-2.5 rounded-full transition-colors w-fit"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-4">
              Navegación
            </p>

            <ul className="flex flex-col gap-2">
              {['Inicio', 'Nosotros', 'Servicios', 'Galería', 'Empresas', 'Certificaciones', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-body text-sm text-white/60 hover:text-brand-blue transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-4">
              Servicios
            </p>

            <ul className="flex flex-col gap-2">
              {[
                'Residencial',
                'Corporativo',
                'Profunda',
                'Sanitización',
                'Vidrios',
                'Post-obra',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="font-body text-sm text-white/60 hover:text-brand-blue transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Mr. Clean Soluciones de Limpieza.
            Todos los derechos reservados.
          </p>

          <p className="font-body text-xs text-white/20">
            Diseñado con ♥ en Chiapas, México
          </p>
        </div>
      </div>
    </footer>
  )
}