import { MessageCircle, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import useInView from '../hooks/useInView'
import { WHATSAPP_NUMBER, EMAIL, PHONE, LOCATION } from '../constants.js'
import FormEmpleo from './FormEmpleo.jsx'
import FormCotizacion from './FormCotizacion.jsx'

const infoItems = [
  { icon: Phone, label: 'Teléfono', value: PHONE, sub: 'Llámanos en horario de oficina' },
  { icon: Mail, label: 'Correo', value: EMAIL, sub: 'Respondemos en menos de 24 horas' },
  { icon: Mail, label: 'Correo', value: 'g.melquiades@mrclean.com.mx', sub: '' },
  { icon: Mail, label: 'Correo', value: 'rafael@mrclean.com.mx', sub: '' },
  { icon: MapPin, label: 'Ubicación', value: LOCATION, sub: 'Cobertura en todo el estado' },
  { icon: Clock, label: 'Horario', value: 'Lun - Vie: 9:00 - 17:00', sub: 'Sáb: 9:00 - 14:00' },
]

export default function Contacto() {
  const [ref, inView] = useInView()

  return (
    <section id="contacto" className="py-24 bg-gray-50 relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">Contáctanos</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            ¿Listo para un espacio <span className="text-brand-blue">impecable?</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Solicita tu cotización y recibe atención personalizada para hogares, oficinas e industrias.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <FormEmpleo />
          <FormCotizacion />
        </div>

        <div className={`mx-auto max-w-2xl mt-20 flex flex-col gap-8 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-8 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-green-500/40"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"><MessageCircle size={34} /></div>
            <div className="flex-1">
              <p className="font-display text-2xl font-bold">Contáctanos por WhatsApp</p>
              <p className="font-body text-sm text-white/80 mt-0.5">Respuesta inmediata · Sin costo · Sin compromiso</p>
            </div>
            <ChevronRight size={24} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 border border-gray-200 border-l-4 border-l-transparent hover:border-l-brand-blue hover:border-brand-blue/30 flex items-start gap-3 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 h-full min-h-[130px]"
              >
                <div className="w-11 h-11 rounded-full bg-brand-light/40 flex items-center justify-center flex-shrink-0"><item.icon size={20} className="text-brand-blue" /></div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="font-bold text-brand-navy text-sm">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
