import { Flame, Shield, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-base text-vintage-light overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4">Transformación Integral</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reto <span className="text-accent-rust">ÍNTEGROS</span><br />de 21 Días
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-10 opacity-90 leading-relaxed">
            Forja tu cuerpo, renueva tu mente y fortalece tu espíritu. Únete a una comunidad que entrena con propósito. Calistenia, CrossFit, boxeo y nutrición Keto/Gluten-Free.
          </p>
          
          <a 
            href="https://wa.me/59169127691?text=Quiero%20unirme%20al%20Reto%20%C3%8DNTEGROS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-accent-rust hover:bg-opacity-90 text-vintage-light px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-[0_0_20px_rgba(155,74,58,0.4)]"
          >
            Únete al Escuadrón (WhatsApp)
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Proposition Values */}
      <section className="py-20 bg-vintage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-navy-base p-4 rounded-full mb-6 text-accent-gold">
                <Flame className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-base mb-3">Cuerpo de Élite</h3>
              <p className="text-navy-light opacity-80">Entrenamiento funcional híbrido adaptado a tu nivel. Boxeo, Calistenia y HIIT.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-navy-base p-4 rounded-full mb-6 text-accent-gold">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-base mb-3">Nutrición Preventiva</h3>
              <p className="text-navy-light opacity-80">Planes Keto y Gluten-Free diseñados para optimizar tu rendimiento y salud a largo plazo.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-navy-base p-4 rounded-full mb-6 text-accent-gold">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-base mb-3">Comunidad Íntegra</h3>
              <p className="text-navy-light opacity-80">No entrenas solo. Eres parte de un Escuadrón basado en valores de respeto y superación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-vintage-base border-t border-vintage-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-base mb-4">El &quot;Show Fit&quot; en Acción</h2>
            <p className="text-lg text-navy-light max-w-2xl mx-auto">Nuestros escuadrones transformando parques urbanos y vidas reales.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-vintage-light p-8 rounded-xl shadow-md border border-vintage-dark/20 relative">
                <div className="text-accent-gold text-4xl font-serif absolute top-4 left-4 opacity-30">&quot;</div>
                <p className="text-navy-base italic mb-6 relative z-10 pt-4">
                  {i === 1 && "El reto de 21 días no solo cambió mi físico, sino mi forma de afrontar la vida. La comunidad y los valores cristianos detrás de Templefit me dieron el propósito que me faltaba."}
                  {i === 2 && "Increíble ver cómo la nutrición y el ejercicio funcional se complementan. Me siento con más energía y claridad espiritual que nunca."}
                  {i === 3 && "Templefit es más que un gimnasio, es una familia. Los entrenamientos son intensos pero el apoyo de la comunidad es lo que te hace volver."}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center text-vintage-light font-bold">T{i}</div>
                  <div>
                    <h4 className="font-bold text-navy-base">Atleta Transformado</h4>
                    <span className="text-sm text-accent-rust">Escuadrón {i === 1 ? 'Alpha' : i === 2 ? 'Beta' : 'Gamma'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
