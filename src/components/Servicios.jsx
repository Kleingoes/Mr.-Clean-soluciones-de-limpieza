const servicios = [
  {
    emoji: '🏠',
    title: 'Limpieza Residencial',
    desc: 'Servicio completo para tu hogar: salas, recámaras, cocinas, baños y más. Limpieza profunda o mantenimiento regular.',
    items: ['Limpieza general', 'Limpieza profunda', 'Limpieza post-mudanza', 'Mantenimiento periódico'],
  },
  {
    emoji: '🏢',
    title: 'Limpieza Corporativa',
    desc: 'Soluciones para oficinas, locales comerciales y espacios empresariales. Mantenemos tu empresa impecable.',
    items: ['Oficinas y despachos', 'Locales comerciales', 'Bodegas e industria', 'Edificios corporativos'],
  },
  {
    emoji: '✨',
    title: 'Limpieza Profunda',
    desc: 'Servicio especializado de limpieza a fondo para eliminar suciedad acumulada, bacterias y malos olores.',
    items: ['Desinfección total', 'Limpieza de tapicería', 'Limpieza de alfombras', 'Sanitización'],
  },
  {
    emoji: '🪟',
    title: 'Limpieza de Vidrios',
    desc: 'Lavado profesional de ventanas, fachadas de vidrio y superficies transparentes interiores y exteriores.',
    items: ['Ventanas y puertas', 'Fachadas comerciales', 'Mampara de baño', 'Espejos'],
  },
  {
    emoji: '🚿',
    title: 'Sanitización',
    desc: 'Eliminación de virus, bacterias y gérmenes mediante productos certificados y técnicas avanzadas.',
    items: ['Nebulización', 'Desinfección de superficies', 'Control de olores', 'Certificado de servicio'],
  },
  {
    emoji: '📦',
    title: 'Post-Obra / Post-Evento',
    desc: 'Limpieza especializada tras remodelaciones, construcciones o eventos para dejar el espacio como nuevo.',
    items: ['Retiro de escombros menores', 'Polvo de construcción', 'Limpieza post-evento', 'Recuperación de espacios'],
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Lo que hacemos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Nuestros <span className="text-brand-blue">servicios</span>
          </h2>
          <p className="font-body text-gray-500 mt-4 leading-relaxed">
            Ofrecemos soluciones integrales de limpieza adaptadas a las necesidades 
            específicas de cada cliente y espacio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-blue/20 transition-colors">
                {s.emoji}
              </div>

              <h3 className="font-display text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                {s.title}
              </h3>

              <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                {s.desc}
              </p>

              <ul className="flex flex-col gap-1.5">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                    <span className="font-body text-xs text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-mid text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-navy/30"
          >
            Solicitar un servicio
          </a>
        </div>
      </div>
    </section>
  )
}
