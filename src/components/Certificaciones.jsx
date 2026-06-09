import { ShieldCheck, BadgeCheck } from 'lucide-react'

const certificaciones = [
  {
    icon: ShieldCheck,
    titulo: 'REPSE',
    desc: 'Registro de Prestadoras de Servicios Especializados ante la Secretaría del Trabajo y Previsión Social (STPS). Cumplimos con todas las obligaciones laborales, fiscales y de seguridad social que exige la ley.',
    entidad: 'STPS',
  },
]

export default function Certificaciones() {
  return (
    <section id="certificaciones" className="py-24 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Legalidad y transparencia
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Certificaciones{' '}
            <span className="text-brand-blue">y normas</span>
          </h2>
          <p className="font-body text-white/50 mt-4">
            Operamos con total cumplimiento normativo y certificaciones que
            avalan la calidad y legalidad de nuestros servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certificaciones.map((cert) => (
            <div
              key={cert.titulo}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6">
                <cert.icon
                  size={32}
                  className="text-brand-blue"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {cert.titulo}
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
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
