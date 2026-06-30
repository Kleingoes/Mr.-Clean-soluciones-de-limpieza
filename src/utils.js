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

export function buildEmpleoWhatsAppText({ nombre, telefono, correo, puesto, experiencia, mensaje }) {
  return [
    'SOLICITUD DE EMPLEO',
    '',
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Correo: ${correo}`,
    `Puesto deseado: ${puesto}`,
    `Años de experiencia: ${experiencia}`,
    '',
    'Mensaje:',
    mensaje,
  ].join('\n')
}

export function validateForm(values) {
  const errors = {}
  if (!values.nombre?.trim() || values.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres'
  }
  if (!values.correo?.trim()) {
    errors.correo = 'El correo es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
    errors.correo = 'Correo electrónico inválido'
  }
  if (values.telefono?.trim() && !/^\d{10}$/.test(values.telefono.replace(/\D/g, ''))) {
    errors.telefono = 'El teléfono debe tener 10 dígitos'
  }
  if (!values.mensaje?.trim() || values.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  }
  return errors
}
