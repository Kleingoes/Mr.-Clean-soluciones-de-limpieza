import { Building2 } from 'lucide-react'
import useInView from '../hooks/useInView'

const clientes = [
  { id: 'mcdonalds', nombre: "McDonald's", logo: true },
  { id: 'chevrolet', nombre: 'Chevrolet', logo: true },
  { id: 'liverpool', nombre: 'Liverpool', logo: true },
  { id: 'suzuki', nombre: 'Suzuki', logo: true },
  { id: 'unach', nombre: 'UNACH — Universidad Autónoma de Chiapas', logo: true },
  { id: 'sears', nombre: 'Sears', logo: true },
  { id: 'toyota', nombre: 'Toyota', logo: true },
  { id: 'dish-network', nombre: 'Dish Network', logo: true },
  { id: 'ine', nombre: 'INE — Instituto Nacional Electoral', logo: true },
  { id: 'hyundai', nombre: 'Hyundai', logo: true },
  { id: 'interceramic', nombre: 'Interceramic', logo: true, ext: 'png' },
  { id: 'kia', nombre: 'KIA', logo: true },
  { id: 'nissan', nombre: 'Nissan', logo: true },
  { id: 'bmw', nombre: 'BMW', logo: true },
  { id: 'peugeot', nombre: 'Peugeot', logo: true },
  { id: 'isuzu', nombre: 'Isuzu', logo: true },
  { id: 'cubox', nombre: 'Cubox Internet + Xbox', logo: false },
  { id: 'farrera-inmobiliarium', nombre: 'Farrera Inmobiliarium', logo: false },
  { id: 'farrera-collision', nombre: 'Farrera Collision Centers', logo: false },
  { id: 'plastics-technology', nombre: 'Plastics Technology México', logo: false },
  { id: 'umed', nombre: 'Ume·d — Unidad Médica y de Diagnóstico', logo: false },
  { id: 'farrera', nombre: 'Farrera', logo: false },
  { id: 'diga-suridora', nombre: 'Diga Surtidora Agropecuaria', logo: false },
  { id: 'sfera', nombre: 'Sfera', logo: false },
]

export default function Clientes() {
  const [ref, inView] = useInView()
  return (
    <section id="clientes" className="py-24 bg-brand-navy relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.3)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Nuestros clientes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Clientes{' '}
            <span className="text-brand-blue">que confían en nosotros</span>
          </h2>
          <p className="font-body text-white/50 mt-4">
            Más de 20 empresas en todo el país confían en Mr. Clean para
            mantener sus espacios impecables.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-blue/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                {cliente.logo ? (
                  <img
                    src={`/logos/${cliente.id}.${cliente.ext || 'svg'}`}
                    alt={cliente.nombre}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <Building2
                    size={24}
                    className="text-brand-blue"
                    strokeWidth={2}
                  />
                )}
              </div>
              <span className="font-body text-sm text-white/60 text-center font-medium leading-tight group-hover:text-white transition-colors">
                {cliente.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
