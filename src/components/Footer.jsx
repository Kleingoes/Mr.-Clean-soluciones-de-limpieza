import { useState, useEffect } from 'react'
import { MessageCircle, FileText, Shield } from 'lucide-react'
import logoWhite from '../assets/logo-white.png'
import { WHATSAPP_MSG_DEFAULT, COMPANY, COMPANY_FULL } from '../constants.js'
import { buildWhatsAppUrl } from '../utils.js'
import Modal from './Modal.jsx'

const navItems = [
  'Inicio', 'Nosotros', 'Servicios', 'Galería', 'Empresas',
  'Certificaciones', 'Contacto',
]

const serviceLinks = [
  'Residencial', 'Corporativo', 'Profunda', 'Sanitización', 'Vidrios', 'Post-obra',
]

const legalLinks = [
  { label: 'Aviso de Privacidad', icon: Shield, key: 'privacidad' },
  { label: 'Términos y Condiciones', icon: FileText, key: 'terminos' },
]

const privacidadContent = `
  Mr. Clean Soluciones de Limpieza ("Mr. Clean"), con domicilio en Tuxtla Gutiérrez, Chiapas, es
  responsable del tratamiento de sus datos personales. La información que nos proporcione será
  utilizada para atender solicitudes de servicios, cotizaciones, procesos de selección de personal
  y comunicación en general.

  En ningún caso compartiremos sus datos con terceros sin su consentimiento explícito, salvo las
  excepciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de los
  Particulares.

  Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos
  (derechos ARCO) mediante solicitud escrita al correo: patycantoral@mrclean.com.mx

  Este sitio web utiliza formularios de contacto y servicios de terceros (Web3Forms) para la
  transmisión de mensajes. No se almacenan datos en servidores propios.
`

const terminosContent = `
  Al utilizar este sitio web y sus formularios, usted acepta los siguientes términos:

  1. La información proporcionada en los formularios será utilizada exclusivamente para los fines
     de contacto y prestación de servicios solicitados.

  2. Las cotizaciones enviadas a través de este sitio tienen fines informativos y no constituyen
     una oferta contractual vinculante hasta su confirmación por escrito.

  3. Mr. Clean se reserva el derecho de modificar estos términos sin previo aviso. Las
     modificaciones entrarán en vigor al ser publicadas en este sitio.

  4. El uso de este sitio web es bajo responsabilidad del usuario. Mr. Clean no se hace
     responsable por daños derivados del uso indebido de la información aquí contenida.

  5. Ley aplicable: estas condiciones se rigen por las leyes de los Estados Unidos Mexicanos.
     Cualquier controversia estará sujeta a la jurisdicción de los tribunales de Tuxtla
     Gutiérrez, Chiapas.
`

export default function Footer() {
  const [modal, setModal] = useState(null)

  useEffect(() => {
    const handler = () => setModal('privacidad')
    window.addEventListener('open-privacy', handler)
    return () => window.removeEventListener('open-privacy', handler)
  }, [])

  return (
    <>
      <footer className="bg-brand-navy text-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.3)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <a href="#inicio" className="flex items-center">
                <img
                  src={logoWhite}
                  alt={COMPANY_FULL}
                  className="h-10 w-auto object-contain"
                  loading="eager"
                />
              </a>
              <p className="font-body text-sm text-white/50 max-w-xs leading-relaxed">
                Soluciones de limpieza profesional para hogares y empresas.
                Calidad, confianza y resultados garantizados.
              </p>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MSG_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-medium text-sm px-5 py-2.5 rounded-full transition-colors w-fit"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-4">Navegación</p>
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-body text-sm text-white/60 hover:text-brand-blue transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-4">Servicios</p>
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((s) => (
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

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-body text-xs uppercase tracking-widest text-white/40 mb-3">Legal</p>
                <ul className="flex flex-col gap-2">
                  {legalLinks.map((link) => (
                    <li key={link.key}>
                      <button
                        onClick={() => setModal(link.key)}
                        className="font-body text-sm text-white/60 hover:text-brand-blue transition-colors flex items-center gap-2"
                      >
                        <link.icon size={13} />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-body text-xs text-white/30">
              © {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.
            </p>
            <p className="font-body text-xs text-white/20">
              Diseñado con ♥ en Chiapas, México
            </p>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={modal === 'privacidad'}
        onClose={() => setModal(null)}
        title="Aviso de Privacidad"
      >
        {privacidadContent.split('\n\n').map((p, i) => (
          <p key={i}>{p.trim()}</p>
        ))}
      </Modal>

      <Modal
        isOpen={modal === 'terminos'}
        onClose={() => setModal(null)}
        title="Términos y Condiciones"
      >
        {terminosContent.split('\n\n').map((p, i) => (
          <p key={i}>{p.trim()}</p>
        ))}
      </Modal>
    </>
  )
}
