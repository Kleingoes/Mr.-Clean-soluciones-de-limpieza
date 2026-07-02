import { WHATSAPP_NUMBER, WHATSAPP_MSG_DEFAULT } from './constants.js'

const CONTEXTUAL_MSGS = {
  servicios: [
    'servicio',
    () => {
      const cards = document.querySelectorAll('#servicios .group h3')
      const titles = Array.from(cards).map(h3 => h3.textContent.trim())
      return titles.length > 0
        ? `Quiero cotizar el servicio de ${titles[0].toLowerCase()}`
        : 'Quiero cotizar un servicio de limpieza profesional'
    },
  ],
  galeria: [
    'galería',
    'Me interesa un servicio similar al de la galería de trabajos',
  ],
  contacto: [
    'contacto',
    'Quiero solicitar una cotización',
  ],
  empleo: [
    'empleo',
    'Me interesa trabajar con ustedes',
  ],
}

export function buildWhatsAppUrl(customMsg) {
  const msg = customMsg || getContextualMessage()
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function getContextualMessage() {
  const hash = window.location.hash?.replace('#', '')
  const match = CONTEXTUAL_MSGS[hash]
  if (match) {
    const msg = typeof match[1] === 'function' ? match[1]() : match[1]
    return msg
  }
  return WHATSAPP_MSG_DEFAULT
}

export function buildCotizacionWhatsAppText({ nombre, telefono, correo, empresa, direccion, servicio, mensaje }) {
  return [
    'SOLICITUD DE COTIZACIÓN',
    '',
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Correo: ${correo}`,
    `Empresa: ${empresa}`,
    `Dirección: ${direccion}`,
    `Servicio: ${servicio}`,
    '',
    'Mensaje:',
    mensaje,
  ].join('\n')
}

export function buildEmpleoWhatsAppText({ nombre, telefono, correo, puesto, experiencia, edad, mensaje }) {
  return [
    'SOLICITUD DE EMPLEO',
    '',
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Correo: ${correo}`,
    `Puesto: ${puesto}`,
    `Experiencia: ${experiencia}`,
    `Edad: ${edad}`,
    '',
    'Mensaje:',
    mensaje,
  ].join('\n')
}

const FAKE_TLDS = new Set([
  'tk', 'ml', 'ga', 'cf', 'gq', 'xyz', 'top', 'loan', 'bid',
  'date', 'win', 'men', 'link', 'click', 'review', 'download',
  'racing', 'stream', 'trade', 'webcam', 'science', 'work',
  'party', 'country', 'gdn', 'mom', 'loan', 'xin', 'site',
  'online', 'pw', 'website', 'space', 'tech', 'site',
])

const JUNK_LOCAL_PATTERNS = [
  /^test/i, /^asdf/i, /^123\d*$/, /^prueba/i, /^correo/i,
  /^user/i, /^a$/i, /^\d+$/,
]

const EMAIL_REGEX_STRICT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validateEmail(email) {
  if (!email?.trim()) return 'El correo es obligatorio'

  const e = email.trim()

  if (!EMAIL_REGEX_STRICT.test(e)) return 'Correo electrónico inválido'

  const [local, domain] = e.split('@')
  const tld = domain.split('.').pop().toLowerCase()

  if (FAKE_TLDS.has(tld)) return 'Correo electrónico inválido'

  if (JUNK_LOCAL_PATTERNS.some((p) => p.test(local))) return 'Correo electrónico inválido'

  if (local.length < 2) return 'Correo electrónico inválido'

  return null
}

export function stripHtml(text) {
  if (!text) return ''
  return text.replace(/<[^>]*>/g, '')
}

export function validateForm(values) {
  const errors = {}
  if (!values.nombre?.trim() || values.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres'
  }
  const emailError = validateEmail(values.correo)
  if (emailError) errors.correo = emailError
  if (values.telefono?.trim() && !/^\d{10}$/.test(values.telefono.replace(/\D/g, ''))) {
    errors.telefono = 'El teléfono debe tener 10 dígitos'
  }
  if (!values.mensaje?.trim() || values.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  }
  if (values.edad !== undefined) {
    const edadNum = parseInt(values.edad, 10)
    if (!values.edad?.trim()) {
      errors.edad = 'La edad es obligatoria'
    } else if (isNaN(edadNum) || edadNum < 20 || edadNum > 50) {
      errors.edad = 'La edad debe estar entre 20 y 50 años'
    }
  }
  return errors
}
