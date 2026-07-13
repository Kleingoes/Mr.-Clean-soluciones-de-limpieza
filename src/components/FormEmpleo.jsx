import { useState, useRef } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Briefcase, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { buildEmpleoWhatsAppText, validateForm, stripHtml } from '../utils.js'
import { submitToBoth, renderField, renderTextarea, renderRadio, FormCard } from './formHelpers.jsx'

const HCAPTCHA_SITEKEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

const INITIAL = {
  nombre: '', telefono: '', correo: '',
  puesto: 'Operador de limpieza', experiencia: '', edad: '', mensaje: '', website: '',
  'h-captcha-response': '',
}

export default function FormEmpleo() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [formLoadTime] = useState(() => Date.now())
  const [lastSubmit, setLastSubmit] = useState(() => {
    const stored = sessionStorage.getItem('empleo_lastSubmit')
    return stored ? parseInt(stored, 10) : 0
  })
  const lastSubmitRef = useRef(lastSubmit)
  const captchaRef = useRef(null)

  const setField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const fieldProps = { form, errors, setField }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.website?.trim()) return

    if (Date.now() - formLoadTime < 4000) return

    if (Date.now() - lastSubmitRef.current < 60000) {
      setStatus('error-rate-limit')
      return
    }

    if (!form['h-captcha-response']) {
      setStatus('error-captcha')
      return
    }

    const sanitized = { ...form, mensaje: stripHtml(form.mensaje) }
    const validation = validateForm(sanitized)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    const now = Date.now()
    sessionStorage.setItem('empleo_lastSubmit', now.toString())
    setLastSubmit(now)
    lastSubmitRef.current = now
    setStatus('submitting')

    try {
      const ok = await submitToBoth({
        subject: 'Empleo — Mr. Clean Web',
        from_name: sanitized.nombre,
        email: sanitized.correo,
        message: buildEmpleoWhatsAppText(sanitized),
        'h-captcha-response': sanitized['h-captcha-response'],
      })
      if (!ok) throw new Error('Error al enviar')
      setStatus('submitted')
      setForm(INITIAL)
      captchaRef.current?.resetCaptcha()
    } catch (err) {
      console.error('Error al enviar empleo:', err)
      setStatus('error-server')
    }
  }

  return (
    <FormCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center"><Briefcase size={20} className="text-brand-blue" /></div>
        <div>
          <h3 className="font-display text-xl font-bold text-brand-navy">Trabaja con nosotros</h3>
          <p className="font-body text-sm text-gray-400">Únete al mejor equipo de limpieza profesional</p>
        </div>
      </div>

      {status === 'submitted' && (
        <div className="mb-5 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-green-800 text-sm">¡Solicitud enviada con éxito!</p>
            <p className="font-body text-green-700 text-xs mt-1">Te contactaremos si tu perfil es el adecuado.</p>
          </div>
        </div>
      )}

      {status === 'error-captcha' && (
        <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-red-800 text-sm">Captcha requerido</p>
            <p className="font-body text-red-700 text-xs mt-1">Por favor completa la verificación antes de enviar.</p>
          </div>
        </div>
      )}

      {status === 'error-rate-limit' && (
        <div className="mb-5 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-body font-semibold text-red-800 text-sm">Espera un momento</p>
            <p className="font-body text-red-700 text-xs mt-1">Debes esperar al menos 60 segundos entre envíos.</p>
          </div>
        </div>
      )}

      {status === 'error-server' && (
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
            {renderField({ ...fieldProps, name: 'nombre', label: 'Nombre completo *', placeholder: 'Nombre' })}
            {renderField({ ...fieldProps, name: 'telefono', label: 'Teléfono', type: 'tel', placeholder: 'Teléfono' })}
          </div>
          {renderField({ ...fieldProps, name: 'correo', label: 'Correo electrónico *', type: 'email', placeholder: 'Correo' })}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {renderField({ ...fieldProps, name: 'puesto', label: 'Puesto asignado', disabled: true })}
            {renderField({ ...fieldProps, name: 'edad', label: 'Edad *', type: 'number', min: 20, max: 50, placeholder: '20 - 50' })}
            {renderRadio({
              name: 'experiencia', label: '¿Experiencia en limpieza? *',
              options: [
                { value: 'Sí', label: 'Sí' },
                { value: 'No', label: 'No' },
              ],
              form, errors, setField,
            })}
          </div>
          {renderTextarea({ ...fieldProps, name: 'mensaje', label: 'Mensaje *', placeholder: 'Cuéntanos sobre ti...', rows: 4 })}
        </div>

        <div className="w-full mt-6 flex justify-center">
          <HCaptcha
            ref={captchaRef}
            sitekey={HCAPTCHA_SITEKEY}
            onVerify={(token) => setForm((prev) => ({ ...prev, 'h-captcha-response': token }))}
            reCaptchaCompat={false}
          />
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
              'Enviar solicitud por correo'
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
