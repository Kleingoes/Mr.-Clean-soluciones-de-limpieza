import useInView from '../hooks/useInView'
import FormCotizacion from './FormCotizacion.jsx'

export default function Cotizacion() {
  const [ref, inView] = useInView()
  return (
    <section id="cotizacion" className="py-24 bg-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Cotización
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Solicita tu <span className="text-brand-blue">cotización</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Déjanos tus datos y recibe una cotización personalizada para el servicio que necesitas.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <FormCotizacion />
        </div>
      </div>
    </section>
  )
}
