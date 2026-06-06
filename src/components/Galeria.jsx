const trabajos = [
{ emoji: '🛋️', titulo: 'Sala residencial', tipo: 'Limpieza profunda' },
{ emoji: '🍳', titulo: 'Cocina industrial', tipo: 'Desengrasado' },
{ emoji: '🏢', titulo: 'Oficina corporativa', tipo: 'Mantenimiento' },
{ emoji: '🚿', titulo: 'Baño completo', tipo: 'Sanitización' },
{ emoji: '🪟', titulo: 'Fachada de vidrios', tipo: 'Limpieza exterior' },
{ emoji: '📦', titulo: 'Post-remodelación', tipo: 'Limpieza post-obra' },
]

export default function Galeria() {
return ( <section id="galeria" className="py-24 bg-white"> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center max-w-2xl mx-auto mb-16"> <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
Nuestro trabajo </span>

```
      <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
        Resultados <span className="text-brand-blue">reales</span>
      </h2>

      <p className="font-body text-gray-500 mt-4">
        Cada espacio que atendemos recibe el mismo nivel de dedicación y cuidado profesional.
      </p>
    </div>

    <div className="bg-gradient-to-r from-brand-navy to-brand-mid rounded-3xl p-8 mb-12 overflow-hidden relative">
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

        <div className="grid grid-cols-2 gap-3">
          {['Antes', 'Después'].map((label, i) => (
            <div
              key={label}
              className="aspect-square rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-2"
            >
              <span className="text-4xl">{i === 0 ? '😟' : '✨'}</span>
              <span className="font-display text-white font-bold text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {trabajos.map((t) => (
        <div
          key={t.titulo}
          className="group aspect-square bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1 cursor-pointer"
        >
          <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
            {t.emoji}
          </span>

          <div className="text-center px-3">
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

    <p className="text-center font-body text-sm text-gray-400 mt-8">
      📸 Próximamente: galería fotográfica con trabajos reales de nuestro equipo.
    </p>
  </div>
</section>
)
}