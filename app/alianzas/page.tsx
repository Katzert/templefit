import { Handshake, TrendingUp, Target, CheckCircle2 } from 'lucide-react';

export default function AlianzasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* B2B Hero Section */}
      <section className="bg-navy-dark text-vintage-light py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Handshake className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">Portal de Alianzas (B2B)</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revoluciona tu Espacio con el Modelo Híbrido <span className="text-accent-rust">TEMPLEFIT</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              Integramos nuestra operación en tu club, gimnasio universitario o franquicia (ej. Casa del Tenis). Aumentamos la retención un 40% y elevamos el ticket promedio mediante ventas cruzadas.
            </p>
            <a 
              href="https://wa.me/59169127691?text=Consulta%20B2B%20Alianzas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-gold hover:bg-yellow-600 text-navy-base px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg text-center"
            >
              Agendar Presentación Ejecutiva
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition B2B */}
      <section className="py-24 bg-vintage-light border-b border-vintage-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-base">¿Por qué un Joint Venture con Templefit?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-vintage-base p-8 rounded-2xl border border-vintage-dark/30 shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-12 h-12 text-accent-rust mb-6" />
              <h3 className="font-serif text-xl font-bold text-navy-base mb-3">+40% en Retención</h3>
              <p className="text-navy-light">El sentido de "Escuadrón" y los valores compartidos crean una adherencia que las rutinas tradicionales no logran.</p>
            </div>
            
            <div className="bg-vintage-base p-8 rounded-2xl border border-vintage-dark/30 shadow-sm hover:shadow-md transition-shadow">
              <Target className="w-12 h-12 text-accent-rust mb-6" />
              <h3 className="font-serif text-xl font-bold text-navy-base mb-3">Cross-Selling Activo</h3>
              <p className="text-navy-light">Incrementamos el LTV (Life Time Value) del usuario a través de nuestros planes de nutrición y merchandising.</p>
            </div>
            
            <div className="bg-vintage-base p-8 rounded-2xl border border-vintage-dark/30 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-accent-rust mb-6" />
              <h3 className="font-serif text-xl font-bold text-navy-base mb-3">Operación Llave en Mano</h3>
              <p className="text-navy-light">Nosotros gestionamos a los instructores, la logística del Reto 21 Días y el "Show Fit" en tus instalaciones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
