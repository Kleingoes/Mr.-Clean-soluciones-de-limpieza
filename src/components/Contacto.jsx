import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

// TODO: Reemplazar con el número real de WhatsApp de Mr. Clean
const WHATSAPP_NUMBER = '529XXXXXXXXX'
const WHATSAPP_MSG    = encodeURIComponent('Hola, me interesa solicitar una cotización para servicio de limpieza.')

const infoItems = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 (XXX) XXX-XXXX',
    sub: 'Llámanos en horario de oficina',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'patycantoral@mrclean.com.mx',
    sub: 'Respondemos en menos de 24h',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tuxtla Gutiérrez, Chiapas',
    sub: 'Servicio a domicilio disponible',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun – Sáb: 8:00 – 18:00',
    sub: 'Domingo cerrado',
  },
]

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Contáctanos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            ¿Listo para un espacio{' '}
            <span className="text-brand-blue">impecable?</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Escríbenos por WhatsApp para contacto inmediata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Info + WhatsApp CTA */}
          <div className="flex flex-col gap-6">

            {/* WhatsApp CTA principal */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="font-display text-xl font-bold">Conctactanos por WhatsApp</p>
                <p className="font-body text-sm text-white/80 mt-0.5">
                  Respuesta inmediata · Sin costo · Sin compromiso
                </p>
              </div>
            </a>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map(item => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                    <p className="font-body text-sm font-semibold text-brand-navy mt-0.5">{item.value}</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Formulario */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6">
              Envíanos un mensaje
            </h3>

            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+52 XXX XXX XXXX"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                />
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1.5">
                  Tipo de servicio
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all">
                  <option value="">Selecciona un servicio</option>
                  <option>Limpieza Residencial</option>
                  <option>Limpieza Corporativa</option>
                  <option>Limpieza Profunda</option>
                  <option>Sanitización</option>
                  <option>Limpieza de Vidrios</option>
                  <option>Post-Obra / Post-Evento</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1.5">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu espacio y lo que necesitas…"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-brand-blue hover:bg-brand-mid text-white font-body font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30"
              >
                Enviar mensaje
              </button>

              <p className="font-body text-xs text-gray-400 text-center">
                Al enviar, aceptas nuestra política de privacidad. Nunca compartimos tus datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
