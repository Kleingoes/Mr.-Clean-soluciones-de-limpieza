import { useState } from 'react'
import useInView from '../hooks/useInView'

const trabajos = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    titulo: 'Sala residencial',
    tipo: 'Limpieza profunda',
    slug: 'sala-residencial',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.618a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.463z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    titulo: 'Cocina industrial',
    tipo: 'Desengrasado',
    slug: 'cocina-industrial',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    titulo: 'Oficina corporativa',
    tipo: 'Mantenimiento',
    slug: 'oficina-corporativa',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    titulo: 'Baño completo',
    tipo: 'Sanitización',
    slug: 'bano-completo',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    titulo: 'Fachada de vidrios',
    tipo: 'Limpieza exterior',
    slug: 'fachada-vidrios',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    titulo: 'Post-remodelación',
    tipo: 'Limpieza post-obra',
    slug: 'post-remodelacion',
  },
]

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50)
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {['Antes', 'Después'].map((label, i) => (
          <div
            key={label}
            className="aspect-square rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-2"
          >
            {i === 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white/70" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            )}
            <span className="font-display text-white font-bold text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden select-none bg-white/5">
      <img
        src="/galeria/antes-despues/sala-residencial_despues.webp"
        alt="Después"
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setImgError(true)}
      />
      {pos > 0 && (
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src="/galeria/antes-despues/sala-residencial_antes.webp"
            alt="Antes"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      )}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      />
      <div
        className="absolute top-1/2 w-9 h-9 rounded-full bg-white shadow-lg z-20 pointer-events-none flex items-center justify-center"
        style={{ left: `${pos}%`, transform: 'translate(-50%, -50%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-brand-navy">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={e => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Comparar antes y después"
      />
    </div>
  )
}

export default function Galeria() {
  const [ref, inView] = useInView()
  return (
    <section id="galeria" className="py-24 bg-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Nuestro trabajo
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Resultados <span className="text-brand-blue">reales</span>
          </h2>

          <p className="font-body text-gray-500 mt-4">
            Cada espacio que atendemos recibe el mismo nivel de dedicación y cuidado profesional.
          </p>
        </div>

        <div className={`bg-gradient-to-r from-brand-navy to-brand-mid rounded-3xl p-8 mb-12 overflow-hidden relative transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="inline-block font-body text-brand-light text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full mb-4">
                Antes &amp; Después
              </span>

              <h3 className="font-display text-3xl font-bold text-white mb-3">
                Transformamos cualquier espacio
              </h3>

              <p className="font-body text-white/60 text-sm leading-relaxed">
                Nuestros clientes quedan sorprendidos con los resultados.
                Pronto agregaremos fotos reales de nuestros trabajos más recientes.
              </p>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-5 bg-white text-brand-navy font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-light transition-colors"
              >
                ¡Quiero ese resultado!
              </a>
            </div>

            <BeforeAfterSlider />
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          {trabajos.map((t) => (
            <div
              key={t.titulo}
              className="group aspect-square bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              <img
                src={`/galeria/thumbnails/${t.slug}.webp`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <span className="relative z-10 text-brand-navy group-hover:text-brand-blue group-hover:scale-110 transition-all duration-200">
                {t.icon}
              </span>

              <div className="relative z-10 text-center px-3">
                <p className="font-display text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {t.titulo}
                </p>
                <p className="font-body text-xs text-gray-400 mt-0.5">
                  {t.tipo}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-sm text-gray-400 mt-8 inline-flex items-center gap-2 w-full justify-center transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>
          Próximamente: galería fotográfica con trabajos reales de nuestro equipo.
        </p>
      </div>
    </section>
  )
}