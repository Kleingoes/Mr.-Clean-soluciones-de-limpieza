import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react'

const valores = [
  'Personal certificado y con experiencia',
  'Productos de limpieza de alta calidad',
  'Puntualidad y compromiso en cada servicio',
  'Atención personalizada para cada cliente',
  'Garantía de resultados en todos nuestros trabajos',
  'Precios accesibles y transparentes',
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda */}
          <div className="relative">

            <div className="relative bg-gradient-to-br from-brand-navy to-brand-mid rounded-3xl p-1 shadow-2xl shadow-brand-navy/20">
              <div className="bg-gradient-to-br from-brand-navy to-[#001a4a] rounded-[22px] p-8 h-80 flex items-center justify-center">

                <div className="text-center">

                  <div className="flex justify-center mb-4">
                    <Sparkles
                      size={72}
                      className="text-brand-blue"
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="font-display text-2xl font-bold text-white">
                    Mr. Clean
                  </p>

                  <p className="font-body text-brand-light/70 text-sm mt-1">
                    Soluciones de Limpieza
                  </p>

                </div>

              </div>
            </div>

            {/* Experiencia */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Award
                  size={22}
                  className="text-brand-blue"
                />
              </div>

              <div>
                <p className="font-display text-xl font-bold text-brand-navy leading-none">
                  +10 años
                </p>

                <p className="font-body text-xs text-gray-500 mt-0.5">
                  de experiencia
                </p>
              </div>

            </div>

            {/* Clientes */}
            <div className="absolute -top-6 -left-6 bg-brand-blue rounded-2xl shadow-xl shadow-brand-blue/30 p-4 flex items-center gap-3">

              <ShieldCheck
                size={26}
                className="text-white"
              />

              <div>
                <p className="font-display text-xl font-bold text-white leading-none">
                  Muchos
                </p>

                <p className="font-body text-xs text-white/70 mt-0.5">
                  clientes satisfechos
                </p>
              </div>

            </div>

          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-6">

            <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
              Quiénes somos
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">
              Expertos en limpieza{' '}
              <span className="text-brand-blue">
                profesional
              </span>
            </h2>

            <p className="font-body text-gray-600 leading-relaxed">
              En <strong className="text-brand-navy">Mr. Clean Soluciones de Limpieza</strong>,
              nos dedicamos a proporcionar servicios de limpieza de alta calidad
              para hogares, empresas y organizaciones. Nuestro equipo está formado
              por profesionales capacitados que utilizan productos y técnicas
              modernas para garantizar resultados impecables.
            </p>

            <p className="font-body text-gray-600 leading-relaxed">
              Creemos que un espacio limpio transforma la calidad de vida,
              mejora la productividad y proyecta una mejor imagen profesional.
              Por eso trabajamos con atención al detalle y compromiso total
              en cada servicio.
            </p>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                  Misión
                </h3>

                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Comprometidos a ejercer el liderazgo en el servicio de limpieza,
                  con visión de largo plazo, siendo una empresa altamente productiva,
                  plenamente humana y totalmente orientada a la satisfacción de
                  nuestros clientes.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2">
                  Visión
                </h3>

                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Mantenernos como la empresa líder en satisfacción de clientes
                  mediante un servicio de calidad que impulse nuestro crecimiento
                  y fortalezca la confianza de quienes nos eligen.
                </p>
              </div>

            </div>

            {/* Valores corporativos */}
            <div className="bg-brand-navy rounded-2xl p-5">

              <h3 className="font-display text-lg font-bold text-white mb-2">
                Nuestros Valores
              </h3>

              <p className="font-body text-sm text-white/70 leading-relaxed">
                Somos una empresa guiada por principios de responsabilidad,
                honestidad, respeto, compromiso y calidad. Nuestro código de ética
                orienta cada decisión y cada servicio que ofrecemos.
              </p>

            </div>

            {/* Lista de fortalezas */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">

              {valores.map(v => (
                <li
                  key={v}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    size={17}
                    className="text-brand-blue flex-shrink-0 mt-0.5"
                  />

                  <span className="font-body text-sm text-gray-700">
                    {v}
                  </span>
                </li>
              ))}

            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}