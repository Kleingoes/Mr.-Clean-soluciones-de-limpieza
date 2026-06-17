import {
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react'
import useInView from '../hooks/useInView'

const valores = [
  'Personal certificado y con experiencia',
  'Productos de limpieza de alta calidad',
  'Puntualidad y compromiso en cada servicio',
  'Atención personalizada para cada cliente',
  'Garantía de resultados en todos nuestros trabajos',
  'Precios accesibles y transparentes',
]

export default function Nosotros() {
  const [ref, inView] = useInView()
  return (
    <section id="nosotros" className="py-24 bg-white relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda */}
          <div className={`relative transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>

            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 p-12 md:p-16 flex items-center justify-center min-h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/pilares_logo.svg"
                  alt="Pilares corporativos"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/logo-icon.png"
                    alt="Mr. Clean"
                    className="w-[22%] h-auto max-w-[90px]"
                  />
                </div>
              </div>
            </div>

            {/* Experiencia */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">

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
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <ShieldCheck
                  size={22}
                  className="text-brand-blue"
                />
              </div>

              <div>
                <p className="font-display text-xl font-bold text-brand-navy leading-none">
                  Muchos
                </p>

                <p className="font-body text-xs text-gray-500 mt-0.5">
                  clientes satisfechos
                </p>
              </div>

            </div>

          </div>

          {/* Columna derecha */}
          <div className={`flex flex-col gap-6 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>

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