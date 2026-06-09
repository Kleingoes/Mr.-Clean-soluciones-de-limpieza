import { Building2 } from 'lucide-react'

const empresas = [
  'Comercial Mexicana',
  'Palacio de Hierro',
  'Liverpool',
  'Soriana',
  'Chedraui',
  'Farmacias del Ahorro',
  'Coppel',
  'Elektra',
  'Office Depot',
  'Starbucks México',
  'Grupo Modelo',
  'Coca-Cola FEMSA',
  'Bimbo',
  'Aeroméxico',
  'Bancomer',
  'Santander',
  'Infinitum',
  'Telcel',
]

export default function Empresas() {
  return (
    <section id="empresas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Nuestros clientes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Empresas que confían{' '}
            <span className="text-brand-blue">en nosotros</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Más de 15 empresas en todo el país confían en Mr. Clean para
            mantener sus espacios impecables.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {empresas.map((nombre) => (
            <div
              key={nombre}
              className="group bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                <Building2
                  size={28}
                  className="text-brand-blue"
                  strokeWidth={2}
                />
              </div>
              <span className="font-body text-sm text-gray-600 text-center font-medium leading-tight group-hover:text-brand-navy transition-colors">
                {nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
