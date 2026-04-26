import { Handshake, TrendingUp, Target, CheckCircle2, ArrowUpRight, BarChart3, Globe } from 'lucide-react';
import { alliances, siteConfig } from '@/data/content';

const IconMap: Record<string, any> = {
  TrendingUp,
  Target,
  BarChart3
};

export default function AlianzasPage() {
  return (
    <div className="animate-fade-in-up bg-temple-cream">
      {/* B2B Hero Section */}
      <section className="bg-vibrant-navy text-temple-cream py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none -skew-x-12 translate-x-1/4">
          <Handshake className="w-full h-full text-temple-gold" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-temple-navy via-temple-navy/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-temple-red text-white font-black tracking-widest uppercase text-xs px-4 py-2 mb-8 -skew-x-12">
              División Corporativa & Alianzas
            </div>
            <h1 className="font-serif text-5xl md:text-8xl font-black mb-8 leading-none uppercase tracking-tighter italic-sport">
              Expande tu <span className="text-temple-gold">Dominio</span>
            </h1>
            <p className="text-xl md:text-3xl opacity-90 mb-12 leading-tight font-light max-w-2xl border-l-4 border-temple-gold pl-6">
              Integramos nuestra operación de alto rendimiento en tu club o franquicia. Elevamos la retención y el ticket promedio con el "Efecto Escuadrón".
            </p>
            <a 
              href="https://wa.me/59169127691?text=Consulta%20B2B%20Alianzas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-temple-gold text-temple-navy px-10 py-5 font-black text-xl uppercase tracking-widest skew-btn shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none transition-all"
            >
              Agendar Presentación Ejecutiva
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition B2B */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl font-black text-temple-navy uppercase italic-sport mb-6">
                El <span className="text-temple-red">Joint Venture</span> Ganador
              </h2>
              <p className="text-xl text-temple-navy/60">TempleFit no es solo un programa, es una infraestructura de fidelización masiva.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-2 bg-temple-gold -skew-x-12"></div>
              <div className="w-8 h-2 bg-temple-navy -skew-x-12"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {alliances.map((alliance, i) => {
              const Icon = IconMap[alliance.icon];
              return (
                <div key={i} className="glass-panel p-12 metric-card group border-t-8 border-t-temple-navy">
                  <div className={`w-16 h-16 bg-vibrant-navy flex items-center justify-center mb-8 -skew-x-12 group-hover:bg-temple-gold group-hover:text-temple-navy transition-all duration-500 text-temple-gold`}>
                    {Icon && <Icon className="w-10 h-10" />}
                  </div>
                  <h3 className="font-serif text-3xl font-black text-temple-navy mb-4 uppercase italic-sport">{alliance.title}</h3>
                  <p className="text-temple-navy/70 text-lg leading-relaxed">{alliance.description}</p>
                  <div className="mt-8 flex items-center gap-2 text-temple-red font-black uppercase tracking-widest text-sm cursor-pointer group-hover:gap-4 transition-all">
                    Saber Más <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="bg-temple-navy py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl font-black uppercase italic-sport mb-8 leading-tight">
                Infraestructura <span className="text-temple-gold">Global</span> localmente
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-temple-gold -skew-x-12 flex items-center justify-center text-temple-navy">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-xl text-white/80 font-light italic leading-relaxed italic-sport">"TempleFit transformó nuestra área de fitness en un centro de comunidad vibrante en solo 3 meses."</p>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-temple-gold -skew-x-12 flex items-center justify-center text-temple-navy">
                    <Globe className="w-6 h-6" />
                  </div>
                  <p className="text-xl text-white/80 font-light italic leading-relaxed italic-sport">Presencia activa en los principales parques y clubes del eje metropolitano.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-temple-gold/30 -skew-x-6"></div>
              <div className="relative bg-vibrant-navy p-12 -skew-x-2 border-l-8 border-temple-red">
                <div className="text-6xl font-black text-temple-gold mb-2 italic-sport">+400%</div>
                <div className="text-white font-black uppercase tracking-[0.2em] mb-8">ROI Estimado</div>
                <p className="text-white/60 text-lg mb-8">Basado en la integración de servicios de nutrición y merchandising en gimnasios tradicionales de clase A.</p>
                <button className="w-full bg-white text-temple-navy py-4 font-black uppercase tracking-widest skew-btn hover:bg-temple-gold transition-colors">
                  Solicitar Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
