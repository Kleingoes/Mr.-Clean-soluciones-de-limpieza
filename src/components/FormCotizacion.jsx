import { useState, useRef } from 'react'
import { ClipboardList, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { buildCotizacionWhatsAppText, validateForm, stripHtml } from '../utils.js'
import { submitToBoth, renderField, renderTextarea, SERVICIOS, FormCard } from './formHelpers.jsx'

const INITIAL = {
  nombre: '', telefono: '', correo: '', servicio: '',
  empresa: '', direccion: '', mensaje: '', website: '',
}

export default function FormCotizacion() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [formLoadTime] = useState(() => Date.now())
  const [lastSubmit, setLastSubmit] = useState(() => {
    const stored = sessionStorage.getItem('cotizacion_lastSubmit')
    return stored ? parseInt(stored, 10) : 0
  })
  const lastSubmitRef = useRef(lastSubmit)

  const setField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const fieldProps = { form, errors, setField }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.website?.trim()) {
      setStatus('error')
      return
    }

    if (Date.now() - formLoadTime < 4000) {
      setStatus('error')
      return
    }

    if (Date.now() - lastSubmitRef.current < 60000) {
      setStatus('error')
      return
    }

    const sanitized = { ...form, mensaje: stripHtml(form.mensaje) }
    const validation = validateForm(sanitized)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    const now = Date.now()
    sessionStorage.setItem('cotizacion_lastSubmit', now.toString())
    setLastSubmit(now)
    lastSubmitRef.current = now
    setStatus('submitting')

    try {
      const ok = await submitToBoth({
        subject: 'Cotización — Mr. Clean Web',
        from_name: sanitized.nombre,
        email: sanitized.correo,
        message: buildCotizacionWhatsAppText(sanitized),
      })
      if (!ok) throw new Error('Error al enviar')
      setStatus('submitted')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <FormCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center"><ClipboardList size={20} className="text-brand-blue" /></div>
        <h3 className="font-display text-xl font-bold text-brand-navy">¿Necesitas una cotización?</h3>
      </div>

      {status === 'submitted' && (
        <div className="mb-5 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-green-800 text-sm">Un supervisor se contactara a la brevedad para su cotizacion</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-red-800 text-sm">Error al enviar</p>
            <p className="font-body text-red-700 text-xs mt-1">Intenta de nuevo o escríbenos por WhatsApp.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
            value={form.website || ''}
            onChange={setField('website')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderField({ ...fieldProps, name: 'nombre', label: 'Nombre *', placeholder: 'Nombre' })}
            {renderField({ ...fieldProps, name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' })}
          </div>
          {renderField({ ...fieldProps, name: 'correo', label: 'Correo electrónico *', type: 'email', placeholder: 'Correo' })}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderField({ ...fieldProps, name: 'empresa', label: 'Tipo de cliente', placeholder: 'Selecciona el tipo de cliente', options: ['Persona Física', 'Persona Moral', 'Empresa'] })}
            {renderField({ ...fieldProps, name: 'direccion', label: 'Dirección', placeholder: 'Dirección' })}
          </div>
          {renderField({ ...fieldProps, name: 'servicio', label: 'Servicio de interés', options: SERVICIOS })}
          {renderTextarea({ ...fieldProps, name: 'mensaje', label: 'Mensaje *', placeholder: 'Cuéntanos qué necesitas...', rows: 4 })}
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-brand-blue hover:bg-brand-mid disabled:bg-brand-blue/60 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base shadow-md shadow-brand-blue/20"
          >
            {status === 'submitting' ? (
              <><Loader2 size={18} className="animate-spin" /> Enviando...</>
            ) : (
              'Solicitar cotización'
            )}
          </button>
          <p className="text-xs text-gray-400 text-center">
            Al enviar, aceptas nuestro{' '}
            <span
              onClick={() => window.dispatchEvent(new CustomEvent('open-privacy'))}
              className="text-brand-blue underline cursor-pointer hover:text-brand-mid"
            >
              Aviso de Privacidad
            </span>.
          </p>
        </div>
      </form>
    </FormCard>
  )
}
