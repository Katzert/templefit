import { Flame, Shield, Users, ArrowRight, Brain, Target, TrendingUp } from 'lucide-react';
import { siteConfig, features, testimonials } from '@/data/content';

const IconMap: Record<string, any> = {
  Flame,
  Shield,
  Users,
  Brain,
  Target,
  TrendingUp
};

const TestimonialIconMap: Record<string, any> = {
  Target,
  Users,
  Brain
};

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dashboard/hero_mission.png')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center min-h-[70vh]">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full">
              <span className="label-tactical text-temple-gold">ELITE TRAINING DIVISION</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              <span className="block text-white/90">FORJANDO</span>
              <span className="block elegant-title text-temple-gold">CARÁCTER</span>
              <span className="block text-white/90">INQUEBRANTABLE</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-2xl text-white/70 font-medium leading-relaxed border-l-2 border-temple-gold pl-6">
              Entrenamiento híbrido, nutrición bio-optimizada y una comunidad de valores eternos diseñada para transformar tu físico y tu mente en <span className="text-temple-gold font-bold">21 Días</span>.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.message)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 bg-temple-gold text-temple-navy-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Unirse al Escuadrón
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Key Values (Bento Grid) */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="label-tactical mb-2 block">SISTEMA INTEGRAL</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              4 UNIDADES DE <span className="text-temple-gold">IMPACTO</span>
            </h2>
          </div>

          <div className="bento-grid">
            {features.map((feature, idx) => {
              const Icon = IconMap[feature.icon];
              // Make first card span 2 cols on tablet/desktop if we want a true bento feel, 
              // but for now 4 equal columns works beautifully.
              return (
                <div key={feature.id} className="tactical-card group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-white">
                    {Icon && <Icon className="w-32 h-32" />}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-xl mb-8 flex items-center justify-center bg-white/5 border border-white/10 text-${feature.color}`}>
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  
                  <div className="mt-auto z-20">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Stats Row */}
      <section className="py-16 bg-temple-navy-dark/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
            <div className="space-y-3">
                <p className="label-tactical">COMUNIDAD</p>
                <div className="text-5xl md:text-6xl font-black text-white elegant-title">+500</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Vidas Transformadas</div>
            </div>
            <div className="space-y-3">
                <p className="label-tactical">SISTEMA</p>
                <div className="text-5xl md:text-6xl font-black text-white elegant-title">21</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Días de Forja</div>
            </div>
            <div className="space-y-3">
                <p className="label-tactical">ENFOQUE</p>
                <div className="text-5xl md:text-6xl font-black text-white elegant-title">100%</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Compromiso Radical</div>
            </div>
            <div className="space-y-3">
                <p className="label-tactical">PROYECCIÓN</p>
                <div className="text-5xl md:text-6xl font-black text-temple-gold elegant-title">∞</div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Crecimiento Continuo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Bento Grid) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dashboard/bg_dynamic.png')] bg-cover opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16 max-w-2xl">
            <span className="label-tactical mb-2 block text-temple-red">TESTIMONIOS</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              HISTORIAS DE <span className="text-temple-gold">TRASCENDENCIA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const Icon = TestimonialIconMap[Object.keys(TestimonialIconMap)[i % 3]];
              return (
                <div key={i} className="tactical-card group">
                    <div className="mb-8 w-10 h-10 rounded-full bg-temple-navy flex items-center justify-center border border-white/10 text-temple-gold">
                        {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                      "{t.text}"
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-temple-gold font-bold text-sm elegant-title">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm tracking-tight">{t.author}</h4>
                        <span className="text-temple-gold font-bold text-[10px] uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden border-t border-temple-gold/20">
        <div className="absolute inset-0 bg-gradient-to-t from-temple-navy-dark to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed mix-blend-luminosity"></div>
        <div className="relative container mx-auto px-4 text-center space-y-12">
          <span className="label-tactical text-temple-red animate-pulse block">OPERACIÓN ACTIVA</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
            ¿LISTO PARA <span className="text-temple-gold block md:inline">TRASCENDER?</span>
          </h2>
          <div className="pt-8">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank" 
              className="inline-flex items-center gap-4 bg-white text-temple-navy-dark px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-temple-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
            >
              Reservar Mi Cupo Ahora
              <Target className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
