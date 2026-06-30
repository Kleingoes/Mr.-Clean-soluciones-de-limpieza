import { useState } from 'react'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from 'lucide-react'
import useInView from '../hooks/useInView'
import { WHATSAPP_NUMBER, EMAIL, PHONE, LOCATION } from '../constants.js'
import { buildCotizacionWhatsAppText, buildEmpleoWhatsAppText, validateForm } from '../utils.js'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const infoItems = [
  { icon: Phone, label: 'Teléfono', value: PHONE, sub: 'Llámanos en horario de oficina' },
  { icon: Mail, label: 'Correo', value: EMAIL, sub: 'Respondemos en menos de 24 horas' },
  { icon: MapPin, label: 'Ubicación', value: LOCATION, sub: 'Cobertura en todo el estado' },
  { icon: Clock, label: 'Horario', value: 'Lunes a Sábado', sub: '08:00 AM - 06:00 PM' },
]

const SERVICIOS = [
  'Pulido de Pisos',
  'Limpieza de Oficinas',
  'Lavado de Alfombras',
  'Sanitización de Espacios',
  'Lavado de Tinacos y Cisternas',
  'Limpieza de Locales Comerciales',
  'Pintura de Fachadas e Interiores',
  'Limpieza de Ventanas y Cristales',
  'Limpieza de Clínicas y Hospitales',
  'Limpieza de Casas y Departamentos',
  'Limpieza Fina para Entrega de Obras',
  'Lavado de Ductos y Cocinas Industriales',
]

function renderField({ name, label, type = 'text', placeholder, options, className, form, errors, setField }) {
  const baseCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
  const errCls = 'w-full bg-gray-50 border border-red-300 rounded-xl px-4 py-3 font-body text-sm outline-none transition-colors focus:border-red-400 focus:ring-2 focus:ring-red-200'
  const hasError = !!errors[name]
  const cls = hasError ? errCls : baseCls

  return (
    <div className={className}>
      <label htmlFor={name} className="font-body text-xs font-medium text-gray-500 mb-1">{label}</label>
      {options ? (
        <select id={name} name={name} value={form[name]} onChange={setField(name)} className={cls}>
          <option value="">Selecciona un servicio</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={setField(name)}
          placeholder={placeholder}
          className={cls}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
      )}
      {hasError && (
        <p id={`${name}-error`} className="text-red-500 text-xs mt-1" role="alert">{errors[name]}</p>
      )}
    </div>
  )
}

function renderTextarea({ name, label, placeholder, rows = 4, form, errors, setField }) {
  const baseCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-body text-sm outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
  const errCls = 'w-full bg-gray-50 border border-red-300 rounded-xl px-4 py-3 font-body text-sm outline-none transition-colors focus:border-red-400 focus:ring-2 focus:ring-red-200'
  const hasError = !!errors[name]
  const cls = hasError ? errCls : baseCls

  return (
    <div>
      <label htmlFor={name} className="font-body text-xs font-medium text-gray-500 mb-1">{label}</label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={form[name]}
        onChange={setField(name)}
        placeholder={placeholder}
        className={`${cls} resize-none`}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />
      {hasError && (
        <p id={`${name}-error`} className="text-red-500 text-xs mt-1" role="alert">{errors[name]}</p>
      )}
    </div>
  )
}

export default function Contacto() {
  const [tab, setTab] = useState('cotizacion')
  const [ref, inView] = useInView()

  const [form, setForm] = useState({
    nombre: '', telefono: '', correo: '', servicio: '',
    empresa: '', direccion: '', mensaje: '', puesto: '', experiencia: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const setField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const fieldProps = { form, errors, setField }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateForm(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return
    setStatus('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${tab === 'cotizacion' ? 'Cotización' : 'Empleo'} — Mr. Clean Web`,
          from_name: form.nombre,
          email: form.correo,
          message: tab === 'cotizacion' ? buildCotizacionWhatsAppText(form) : buildEmpleoWhatsAppText(form),
        }),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setStatus('submitted')
      setForm({
        nombre: '', telefono: '', correo: '', servicio: '',
        empresa: '', direccion: '', mensaje: '', puesto: '', experiencia: '',
      })
    } catch {
      setStatus('error')
    }
  }

  const enviarWhatsApp = () => {
    const texto = tab === 'cotizacion' ? buildCotizacionWhatsAppText(form) : buildEmpleoWhatsAppText(form)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank')
  }

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

        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col gap-6">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle size={28} /></div>
              <div>
                <p className="font-display text-xl font-bold">Contáctanos por WhatsApp</p>
                <p className="font-body text-sm text-white/80">Respuesta inmediata · Sin costo · Sin compromiso</p>
              </div>
            </a>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center"><item.icon size={18} className="text-brand-blue" /></div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">{item.label}</p>
                    <p className="font-semibold text-brand-navy">{item.value}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <div className="flex border-b border-gray-200 mb-6">
              <button
                type="button"
                onClick={() => { setTab('cotizacion'); setErrors({}); setStatus('idle') }}
                className={`pb-3 px-4 font-display text-sm font-semibold transition-colors relative ${tab === 'cotizacion' ? 'text-brand-blue' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Solicitar cotización
                {tab === 'cotizacion' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full" />}
              </button>
              <button
                type="button"
                onClick={() => { setTab('empleo'); setErrors({}); setStatus('idle') }}
                className={`pb-3 px-4 font-display text-sm font-semibold transition-colors relative ${tab === 'empleo' ? 'text-brand-blue' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Trabaja con nosotros
                {tab === 'empleo' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue rounded-full" />}
              </button>
            </div>

            {status === 'submitted' && (
              <div className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-semibold text-green-800 text-sm">¡Mensaje enviado con éxito!</p>
                  <p className="font-body text-green-700 text-xs mt-1">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body font-semibold text-red-800 text-sm">Error al enviar</p>
                  <p className="font-body text-red-700 text-xs mt-1">Hubo un problema. Intenta de nuevo o escríbenos por WhatsApp.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {tab === 'cotizacion' && (
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField({ ...fieldProps, name: 'nombre', label: 'Nombre *', placeholder: 'Nombre' })}
                    {renderField({ ...fieldProps, name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' })}
                  </div>
                  {renderField({ ...fieldProps, name: 'correo', label: 'Correo electrónico *', type: 'email', placeholder: 'Correo electrónico' })}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField({ ...fieldProps, name: 'empresa', label: 'Empresa', placeholder: 'Empresa (opcional)' })}
                    {renderField({ ...fieldProps, name: 'direccion', label: 'Dirección', placeholder: 'Dirección (opcional)' })}
                  </div>
                  {renderField({ ...fieldProps, name: 'servicio', label: 'Servicio de interés', options: SERVICIOS })}
                  {renderTextarea({ ...fieldProps, name: 'mensaje', label: 'Mensaje *', placeholder: 'Cuéntanos qué necesitas...' })}
                </div>
              )}

              {tab === 'empleo' && (
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField({ ...fieldProps, name: 'nombre', label: 'Nombre completo *', placeholder: 'Nombre completo' })}
                    {renderField({ ...fieldProps, name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' })}
                  </div>
                  {renderField({ ...fieldProps, name: 'correo', label: 'Correo electrónico *', type: 'email', placeholder: 'Correo electrónico' })}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField({ ...fieldProps, name: 'puesto', label: 'Puesto deseado', placeholder: 'Puesto deseado' })}
                    {renderField({ ...fieldProps, name: 'experiencia', label: 'Años de experiencia', type: 'number', placeholder: 'Años de experiencia' })}
                  </div>
                  {renderTextarea({ ...fieldProps, name: 'mensaje', label: 'Mensaje *', placeholder: 'Cuéntanos sobre ti y tu experiencia...' })}
                </div>
              )}

              <div className="flex flex-col gap-3 mt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-blue hover:bg-brand-mid disabled:bg-brand-blue/60 text-white font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                  ) : (
                    `Enviar ${tab === 'cotizacion' ? 'cotización' : 'solicitud'} por correo`
                  )}
                </button>

                <button
                  type="button"
                  onClick={enviarWhatsApp}
                  className="w-full border-2 border-brand-blue/30 hover:border-brand-blue text-brand-blue font-semibold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {tab === 'cotizacion' ? 'Solicitar cotización' : 'Enviar solicitud'} por WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Al enviar, aceptas nuestro{' '}
                  <span
                    onClick={() => window.dispatchEvent(new CustomEvent('open-privacy'))}
                    className="text-brand-blue underline cursor-pointer hover:text-brand-mid"
                  >
                    Aviso de Privacidad
                  </span>.
                  Tus datos serán tratados de forma confidencial.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
