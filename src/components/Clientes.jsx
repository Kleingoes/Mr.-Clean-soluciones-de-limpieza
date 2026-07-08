import useInView from '../hooks/useInView'

const grupoA = [
  { id: 'mcdonalds', nombre: "McDonald's" },
  { id: 'chevrolet', nombre: 'Chevrolet' },
  { id: 'liverpool', nombre: 'Liverpool' },
  { id: 'suzuki', nombre: 'Suzuki' },
  { id: 'unach', nombre: 'UNACH' },
  { id: 'sears', nombre: 'Sears' },
  { id: 'toyota', nombre: 'Toyota' },
  { id: 'dish-network', nombre: 'Dish Network' },
  { id: 'ine', nombre: 'INE' },
  { id: 'hyundai', nombre: 'Hyundai' },
  { id: 'interceramic', nombre: 'Interceramic', ext: 'png' },
]

const grupoB = [
  { id: 'kia', nombre: 'KIA' },
  { id: 'nissan', nombre: 'Nissan' },
  { id: 'bmw', nombre: 'BMW' },
  { id: 'peugeot', nombre: 'Peugeot' },
  { id: 'isuzu', nombre: 'Isuzu' },
  { id: 'cubox', nombre: 'Cubox', ext: 'png' },
  { id: 'farrera-collision', nombre: 'Farrera Collision Centers', ext: 'png' },
  { id: 'plastics-technology', nombre: 'Plastics Technology México', ext: 'png' },
  { id: 'umed', nombre: 'Ume·d', ext: 'png' },
  { id: 'farrera', nombre: 'Farrera', ext: 'png' },
  { id: 'diga-suridora', nombre: 'Diga Surtidora Agropecuaria', ext: 'png' },
  { id: 'sfera', nombre: 'Sfera', ext: 'png' },
]

function LogoRow({ logos, direction }) {
  const items = [...logos, ...logos]
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-brand-navy to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-brand-navy to-transparent pointer-events-none" />
      <div className={`flex gap-4 py-2 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} hover:[animation-play-state:paused]`}>
        {items.map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex-shrink-0 w-[88px] h-[88px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:-translate-y-0.5 group"
          >
            <img
              src={`/logos/${logo.id}.webp`}
              alt={logo.nombre}
              onError={(e) => { e.target.src = `/logos/${logo.id}.${logo.ext || 'svg'}` }}
              className="h-10 w-10 object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clientes() {
  const [ref, inView] = useInView()
  return (
    <section id="nuestros-clientes" className="py-24 bg-brand-navy relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.3)] overflow-hidden">
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

        <div className={`space-y-6 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <LogoRow logos={grupoA} direction="left" />
          <LogoRow logos={grupoB} direction="right" />
        </div>
      </div>
    </section>
  )
}
