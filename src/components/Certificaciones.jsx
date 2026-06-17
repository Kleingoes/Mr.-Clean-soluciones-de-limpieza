import { ShieldCheck, BadgeCheck } from 'lucide-react'
import useInView from '../hooks/useInView'

const certificaciones = [
  {
    icon: ShieldCheck,
    titulo: 'REPSE',
    desc: 'Registro de Prestadoras de Servicios Especializados ante la Secretaría del Trabajo y Previsión Social (STPS). Cumplimos con todas las obligaciones laborales, fiscales y de seguridad social que exige la ley.',
    entidad: 'STPS',
  },
]

export default function Certificaciones() {
  const [ref, inView] = useInView()
  return (
    <section id="certificaciones" className="py-24 bg-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Legalidad y transparencia
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Certificaciones{' '}
            <span className="text-brand-blue">y normas</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Operamos con total cumplimiento normativo y certificaciones que
            avalan la calidad y legalidad de nuestros servicios.
          </p>
        </div>

        <div className={`flex justify-center transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {certificaciones.map((cert) => (
            <div
              key={cert.titulo}
              className="w-full max-w-4xl bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6">
                <cert.icon
                  size={32}
                  className="text-brand-blue"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-2">
                {cert.titulo}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                {cert.desc}
              </p>
              <span className="inline-flex items-center gap-1 font-body text-xs text-brand-blue uppercase tracking-wider">
                <BadgeCheck size={14} />
                {cert.entidad}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
