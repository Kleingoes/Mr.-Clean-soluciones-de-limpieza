import { useState } from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

const WHATSAPP_NUMBER = '529613062682'

const infoItems = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '961 350 9260',
    sub: 'Llámanos en horario de oficina',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'patycantoral@mrclean.com.mx',
    sub: 'Respondemos en menos de 24 horas',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tuxtla Gutiérrez, Chiapas',
    sub: 'Cobertura en todo el estado',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Sábado',
    sub: '08:00 AM - 06:00 PM',
  },
]

export default function Contacto() {
  const [tab, setTab] = useState('cotizacion')

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [servicio, setServicio] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [direccion, setDireccion] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [puesto, setPuesto] = useState('')
  const [experiencia, setExperiencia] = useState('')

  const enviarWhatsApp = () => {
    const texto = tab === 'cotizacion'
      ? `
SOLICITUD DE COTIZACIÓN

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Empresa: ${empresa}
Dirección: ${direccion}
Servicio: ${servicio}

Mensaje:
${mensaje}
      `
      : `
SOLICITUD DE EMPLEO

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Puesto deseado: ${puesto}
Años de experiencia: ${experiencia}

Mensaje:
${mensaje}
      `

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texto
    )}`

    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Contáctanos
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            ¿Listo para un espacio{' '}
            <span className="text-brand-blue">impecable?</span>
          </h2>

          <p className="font-body text-gray-500 mt-4">
            Solicita tu cotización y recibe atención personalizada para hogares,
            oficinas e industrias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* IZQUIERDA */}
          <div className="flex flex-col gap-6">

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={28} />
              </div>

              <div>
                <p className="font-display text-xl font-bold">
                  Contáctanos por WhatsApp
                </p>

                <p className="font-body text-sm text-white/80">
                  Respuesta inmediata · Sin costo · Sin compromiso
                </p>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-4 border border-gray-100 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <item.icon
                      size={18}
                      className="text-brand-blue"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase">
                      {item.label}
                    </p>

                    <p className="font-semibold text-brand-navy">
                      {item.value}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* DERECHA */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setTab('cotizacion')}
                className={`pb-3 px-4 font-display text-sm font-semibold transition-colors relative ${
                  tab === 'cotizacion'
                    ? 'text-brand-blue'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Solicitar cotización
                {tab === 'cotizacion' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full" />
                )}
              </button>
              <button
                onClick={() => setTab('empleo')}
                className={`pb-3 px-4 font-display text-sm font-semibold transition-colors relative ${
                  tab === 'empleo'
                    ? 'text-brand-blue'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Trabaja con nosotros
                {tab === 'empleo' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full" />
                )}
              </button>
            </div>

            {/* Formulario de cotización */}
            {tab === 'cotizacion' && (
              <div className="flex flex-col gap-4">

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder="Empresa (opcional)"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                  <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Dirección (opcional)"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                <select
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Pulido de Pisos</option>
                  <option>Limpieza de Oficinas</option>
                  <option>Lavado de Alfombras</option>
                  <option>Sanitización de Espacios</option>
                  <option>Lavado de Tinacos y Cisternas</option>
                  <option>Limpieza de Locales Comerciales</option>
                  <option>Pintura de Fachadas e Interiores</option>
                  <option>Limpieza de Ventanas y Cristales</option>
                  <option>Limpieza de Clínicas y Hospitales</option>
                  <option>Limpieza de Casas y Departamentos</option>
                  <option>Limpieza Fina para Entrega de Obras</option>
                  <option>Lavado de Ductos y Cocinas Industriales</option>
                </select>

                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos qué necesitas..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 resize-none"
                />

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full bg-brand-blue hover:bg-brand-mid text-white font-semibold py-4 rounded-xl transition-all duration-200"
                >
                  Solicitar cotización por WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Tus datos serán tratados de forma confidencial.
                </p>

              </div>
            )}

            {/* Formulario de empleo */}
            {tab === 'empleo' && (
              <div className="flex flex-col gap-4">

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre completo"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Teléfono"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                <input
                  type="email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={puesto}
                    onChange={(e) => setPuesto(e.target.value)}
                    placeholder="Puesto deseado"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                  <input
                    type="number"
                    value={experiencia}
                    onChange={(e) => setExperiencia(e.target.value)}
                    placeholder="Años de experiencia"
                    min="0"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                  />
                </div>

                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos sobre ti y tu experiencia..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 resize-none"
                />

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full bg-brand-blue hover:bg-brand-mid text-white font-semibold py-4 rounded-xl transition-all duration-200"
                >
                  Enviar solicitud por WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Tus datos serán tratados de forma confidencial.
                </p>

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}