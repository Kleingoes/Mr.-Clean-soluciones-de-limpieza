import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

function getFocusableElements(container) {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
}

export default function Modal({ isOpen, onClose, title, children }) {
  const triggerRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement
      document.body.style.overflow = 'hidden'
      const timer = setTimeout(() => {
        const focusable = modalRef.current ? getFocusableElements(modalRef.current) : []
        if (focusable.length > 0) {
          focusable[0].focus()
        }
      }, 0)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = ''
      triggerRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    const handleTab = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = getFocusableElements(modalRef.current)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleTab)
    return () => window.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div ref={modalRef} className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        <div className="sticky top-0 bg-white rounded-t-3xl flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="font-display text-xl font-bold text-brand-navy">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>
        <div className="px-6 py-6 font-body text-sm text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}
