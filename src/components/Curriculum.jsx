import { Building2 } from 'lucide-react'
import useInView from '../hooks/useInView'

const curriculum = [
  { id: 'fabricas-andrea', nombre: 'Fábricas de Calzado Andrea S.A. de C.V.', logo: true, ext: 'png' },
  { id: 'amsa', nombre: 'Agroindustrias Unidas de México S.A. de C.V. (AMSA)', logo: true, ext: 'png' },
  { id: 'gonac', nombre: 'Comercializadora Gonac S.A. de C.V.', logo: true, ext: 'png' },
  { id: 'diga', nombre: 'Surtidora Agropecuaria Diga S. de R.L. de C.V.', logo: true, ext: 'png' },
  { id: 'olam-agro', nombre: 'Olam Agro de México S.A. de C.V.', logo: true },
  { id: 'acnur', nombre: 'ACNUR — Alto Comisionado de las Naciones Unidas para los Refugiados', logo: true },
  { id: 'casino-jai', nombre: 'Promociones e Inversiones Guerrero (Casino Jai)', logo: true, ext: 'png' },
  { id: 'meditec-farma', nombre: 'Meditec Farma S.A. de C.V.', logo: true, ext: 'png' },
  { id: 'conalep', nombre: 'CONALEP — Colegio de Educación Profesional Técnica del Estado de Chiapas', logo: true, ext: 'png' },
  { id: 'canal-diez', nombre: 'Canal Diez — Sistema de Radio, Televisión y Cinematografía', logo: true, ext: 'png' },
  { id: 'sagyp', nombre: 'Secretaría de Agricultura, Ganadería y Pesca — Gobierno de Chiapas', logo: true, ext: 'png' },
  { id: 'conciliacion-chiapas', nombre: 'Centro de Conciliación Laboral del Estado de Chiapas', logo: false },
  { id: 'fernandez-merida', nombre: 'Compañía Fernández de Mérida S.A. de C.V.', logo: true, ext: 'png' },
  { id: 'icheja', nombre: 'ICHEJA — Instituto Chiapaneco de Educación para Jóvenes y Adultos', logo: true, ext: 'png' },
]

export default function Curriculum() {
  const [ref, inView] = useInView()
  return (
    <section id="empresas" className="py-24 bg-brand-navy relative shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.3)]">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Nuestra trayectoria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Empresas{' '}
            <span className="text-brand-blue">atendidas</span>
          </h2>
          <p className="font-body text-white/50 mt-4">
            A través de Melcon S.A. de C.V., hemos brindado servicios a
            organizaciones de diversos sectores a nivel nacional.
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          {curriculum.map((empresa) => (
            <div
              key={empresa.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-brand-blue/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors">
                {empresa.logo ? (
                  <img
                    src={`/logos/${empresa.id}.${empresa.ext || 'svg'}`}
                    alt={empresa.nombre}
                    className="h-8 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                ) : (
                  <Building2
                    size={24}
                    className="text-brand-blue"
                    strokeWidth={2}
                  />
                )}
              </div>
              <span className="font-body text-sm text-white/60 text-center font-medium leading-tight group-hover:text-white transition-colors">
                {empresa.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
