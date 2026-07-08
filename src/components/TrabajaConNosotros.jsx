import { Sparkles, Droplets } from 'lucide-react'
import useInView from '../hooks/useInView'
import FormEmpleo from './FormEmpleo.jsx'

export default function TrabajaConNosotros() {
  const [ref, inView] = useInView()
  return (
    <section id="trabaja-con-nosotros" className="relative overflow-hidden py-24 bg-gradient-to-br from-brand-blue/[0.05] via-gray-50 to-brand-mid/[0.05] shadow-[0_-6px_20px_-6px_rgba(0,0,0,0.08)]">
      <div className="absolute -top-32 -right-32 w-96 h-96 max-md:w-56 max-md:h-56 rounded-full bg-brand-blue/12 blur-[120px] max-md:blur-[70px] pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-80 h-80 max-md:w-48 max-md:h-48 rounded-full bg-brand-mid/12 blur-[100px] max-md:blur-[60px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-56 h-56 max-md:w-32 max-md:h-32 rounded-full bg-brand-light/20 blur-[80px] max-md:blur-[50px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 max-md:w-20 max-md:h-20 rounded-full bg-brand-navy/5 blur-[60px] max-md:blur-[40px] pointer-events-none" />
      <Sparkles size={100} className="absolute top-12 right-16 text-brand-blue/[0.10] pointer-events-none hidden sm:block" />
      <Droplets size={72} className="absolute bottom-12 left-12 text-brand-mid/[0.10] pointer-events-none hidden sm:block" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`}>
          <span className="font-body text-brand-blue font-semibold text-sm uppercase tracking-widest">
            Trabaja con nosotros
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mt-2 leading-tight">
            Únete al <span className="text-brand-blue">mejor equipo</span>
          </h2>
          <p className="font-body text-gray-500 mt-4">
            Envíanos tu solicitud y forma parte de Mr. Clean Soluciones de Limpieza.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${inView ? '' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <FormEmpleo />
        </div>
      </div>
    </section>
  )
}
