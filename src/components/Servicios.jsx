import {
  Building2,
  Home,
  Sparkles,
  ShieldCheck,
  Droplets,
  Store,
  Paintbrush,
  Glasses,
  Hospital,
  HardHat,
  AirVent,
  Square
} from 'lucide-react'

const servicios = [
  {
    icon: Building2,
    title: 'Limpieza de Oficinas',
    desc: 'Servicio integral para oficinas, corporativos y espacios administrativos.',
  },
  {
    icon: Home,
    title: 'Limpieza de Casas y Departamentos',
    desc: 'Servicios residenciales adaptados a las necesidades de cada hogar.',
  },
  {
    icon: ShieldCheck,
    title: 'Sanitización de Espacios',
    desc: 'Desinfección profesional para eliminar virus, bacterias y microorganismos.',
  },
  {
    icon: Droplets,
    title: 'Lavado de Tinacos y Cisternas',
    desc: 'Limpieza y desinfección para garantizar agua limpia y segura.',
  },
  {
    icon: Sparkles,
    title: 'Lavado de Alfombras',
    desc: 'Limpieza profunda para eliminar manchas, polvo y malos olores.',
  },
  {
    icon: HardHat,
    title: 'Limpieza Fina para Entrega de Obras',
    desc: 'Preparación de inmuebles nuevos o remodelados para su entrega final.',
  },
  {
    icon: Square,
    title: 'Pulido de Pisos',
    desc: 'Recuperación y mantenimiento profesional para devolver brillo y apariencia a todo tipo de pisos.',
  },
  {
    icon: Store,
    title: 'Limpieza de Locales Comerciales',
    desc: 'Mantenimiento y limpieza para negocios, tiendas y establecimientos comerciales.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura de Fachadas e Interiores',
    desc: 'Aplicación profesional de pintura para renovación y mantenimiento de espacios.',
  },
  {
    icon: Glasses,
    title: 'Limpieza de Ventanas y Cristales',
    desc: 'Lavado especializado de vidrios, ventanales y fachadas acristaladas.',
  },
  {
    icon: Hospital,
    title: 'Limpieza de Clínicas y Hospitales',
    desc: 'Protocolos especializados para entornos médicos y sanitarios.',
  },
  {
    icon: AirVent,
    title: 'Lavado de Ductos y Cocinas Industriales',
    desc: 'Eliminación de grasa, residuos y contaminantes en sistemas industriales.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Lo que hacemos
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Nuestros <span className="text-brand-blue">servicios</span>
          </h2>

          <p className="font-body text-gray-500 mt-4 leading-relaxed">
            Ofrecemos soluciones profesionales de limpieza, mantenimiento y
            sanitización para hogares, empresas, comercios e instalaciones
            especializadas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icono */}
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                <s.icon
                  size={28}
                  className="text-brand-blue"
                  strokeWidth={2}
                />
              </div>

              <h3 className="font-display text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                {s.title}
              </h3>

              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-brand-navy hover:bg-brand-mid text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-navy/30"
          >
            Solicitar una cotización
          </a>
        </div>

      </div>
    </section>
  )
}