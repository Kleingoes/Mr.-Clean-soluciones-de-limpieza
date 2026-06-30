import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center transition-all duration-200 hover:scale-110"
    >
      <MessageCircle size={26} />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  )
}
