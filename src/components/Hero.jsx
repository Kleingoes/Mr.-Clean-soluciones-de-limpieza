import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  MapPin
} from 'lucide-react'
import heroImage from '../assets/hero-cleaning.jpg'
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay para mantener contraste y la paleta navy */}
      <div className="absolute inset-0 bg-brand-navy/85" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glow top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[120px]" />
        {/* Medium glow bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-mid/15 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,160,220,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,220,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-blue/15 border border-brand-blue/30 rounded-full px-4 py-2 w-fit">
              <Sparkles size={14} className="text-brand-blue" />
              <span className="text-brand-light text-xs font-body font-medium tracking-wide uppercase">
                Servicios Profesionales de Limpieza
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight">
              Soluciones Profesionales de {' '}
              <span className="text-brand-blue">limpieza</span>{' '}
              para empresas y hogares
            </h1>

            {/* Subheading */}
            <p className="font-body text-lg text-white/60 max-w-md leading-relaxed">
              Más de 15 años brindando servicios especializados de limpieza,
              mantenimiento para hogares, oficinas, comercios, 
              hospitales e industrias.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 py-2">
              {[
                { value: '15+', label: 'Años de experiencia' },
                { value: '100%', label: 'Compromiso' },
                { value: '24/7', label: 'Atencion' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-brand-blue">{stat.value}</span>
                  <span className="font-body text-xs text-white/50 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#cotizacion"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-mid text-white font-body font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Solicitar cotización
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-blue/50 text-white/80 hover:text-white font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Ver servicios
              </a>
              <a
                href="#trabaja-con-nosotros"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-blue/50 text-white/80 hover:text-white font-body font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
              >
                Trabaja con nosotros
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 pt-2">
              <ShieldCheck size={18} className="text-brand-blue flex-shrink-0" />
              <span className="font-body text-sm text-white/50">
                Personal capacitado · Productos certificados · Resultados garantizados
              </span>
            </div>
          </div>

          {/* Right: Corporate card */}
          <div className="relative hidden lg:flex justify-center animate-fade-up delay-300">
            <div className="w-full max-w-sm">
              <div className="bg-gradient-to-br from-brand-mid/30 to-brand-blue/10 backdrop-blur-sm border border-brand-blue/20 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">

                {/* Cobertura */}
                <div className="flex flex-col gap-3">
                  <span className="font-body text-brand-blue text-xs uppercase tracking-widest font-semibold">
                    Cobertura
                  </span>
                  {[
                    'Tuxtla Gutiérrez, Chiapas',
                    'Todo el estado de Chiapas',
                    'Proyectos a nivel nacional',
                  ].map((lugar) => (
                    <div key={lugar} className="flex items-start gap-3">
                      <MapPin size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-white/80">{lugar}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

                {/* Especialidades */}
                <div className="flex flex-col gap-3">
                  <span className="font-body text-brand-blue text-xs uppercase tracking-widest font-semibold">
                    Especialidades
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Hogar', 'Oficinas', 'Industria', 'Clínicas', 'Post-obra'].map((esp) => (
                      <span
                        key={esp}
                        className="bg-brand-navy/60 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/80"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  )
}