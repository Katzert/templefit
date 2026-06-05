import { Handshake, TrendingUp, Target, CheckCircle2, ArrowUpRight, BarChart3, Globe } from 'lucide-react';
import { alliances, siteConfig } from '@/data/content';

const IconMap: Record<string, any> = {
  TrendingUp,
  Target,
  BarChart3
};

export default function AlianzasPage() {
  return (
    <div className="animate-fade-in-up">
      {/* B2B Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden border-b border-temple-gold/20">
        <div className="absolute inset-0 bg-temple-navy-dark"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/dashboard/bg_dynamic.png')] bg-cover mix-blend-luminosity"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block px-4 py-1.5 border border-temple-red/30 bg-temple-red/10 backdrop-blur-md rounded-full">
              <span className="label-tactical text-temple-red">DIVISIÓN CORPORATIVA & ALIANZAS</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
              <span className="block text-white/90">EXPANDE TU</span>
              <span className="block elegant-title text-temple-gold">DOMINIO</span>
            </h1>
            
            <p className="max-w-2xl text-xl md:text-2xl text-white/70 font-medium leading-relaxed border-l-2 border-temple-gold pl-6">
              Integramos nuestra operación de alto rendimiento en tu club o franquicia. Elevamos la retención y el ticket promedio con el "Efecto Escuadrón".
            </p>
            
            <div className="pt-8">
              <a 
                href="https://wa.me/59169127691?text=Consulta%20B2B%20Alianzas" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-temple-gold text-temple-navy-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Agendar Presentación Ejecutiva
                <Handshake className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition B2B (Bento Grid) */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="label-tactical mb-2 block text-temple-red">VENTAJA COMPETITIVA</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              EL <span className="text-temple-gold">JOINT VENTURE</span> GANADOR
            </h2>
            <p className="mt-4 text-xl text-white/60 font-medium">TempleFit no es solo un programa, es una infraestructura de fidelización masiva.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alliances.map((alliance, i) => {
              const Icon = IconMap[alliance.icon];
              return (
                <div key={i} className="tactical-card group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-temple-gold">
                    {Icon && <Icon className="w-32 h-32" />}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl mb-8 flex items-center justify-center bg-white/5 border border-white/10 text-temple-gold">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  
                  <div className="mt-auto z-20">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{alliance.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">{alliance.description}</p>
                    <div className="flex items-center gap-2 text-temple-gold font-bold uppercase tracking-widest text-xs cursor-pointer group-hover:gap-4 transition-all">
                      Saber Más <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-32 relative overflow-hidden border-t border-temple-gold/10">
        <div className="absolute inset-0 bg-[url('/dashboard/bg_dynamic.png')] opacity-5 bg-cover pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                INFRAESTRUCTURA <span className="block elegant-title text-temple-gold mt-2">GLOBAL</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-temple-gold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-white/70 font-medium leading-relaxed">"TempleFit transformó nuestra área de fitness en un centro de comunidad vibrante en solo 3 meses."</p>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-temple-gold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-white/70 font-medium leading-relaxed">Presencia activa en los principales parques y clubes del eje metropolitano.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="tactical-card border-l-4 border-l-temple-red text-center sm:text-left p-10 md:p-14">
                <div className="text-6xl font-black text-temple-gold mb-2 elegant-title">+400%</div>
                <div className="label-tactical text-white mb-6">ROI Estimado</div>
                <p className="text-white/60 text-sm font-medium mb-10 leading-relaxed">Basado en la integración de servicios de nutrición y merchandising en gimnasios tradicionales de clase A.</p>
                <button className="w-full bg-white text-temple-navy py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-temple-gold transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
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
