import { Flame, Shield, Users, ArrowRight, Trophy, Zap, Heart } from 'lucide-react';
import { siteConfig, features, testimonials } from '@/data/content';

const IconMap: Record<string, any> = {
  Flame,
  Shield,
  Users
};

const TestimonialIconMap: Record<string, any> = {
  Trophy,
  Zap,
  Heart
};

export default function Home() {
  return (
    <div className="animate-fade-in-up">
      <div className="scanlines"></div>
      
      {/* Hero Section */}
      <section className="relative bg-temple-navy text-temple-cream overflow-hidden min-h-[95vh] flex items-center pt-20 pb-48 skew-divider-bottom">
        <div className="dynamic-overlay opacity-30"></div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-temple-navy/50 to-temple-navy"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <div className="inline-block bg-temple-red text-white font-black tracking-[0.4em] uppercase text-xs px-6 py-3 mb-10 -skew-x-12 shadow-2xl border-2 border-white/20">
            {siteConfig.slogan}
          </div>
          
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-black mb-12 leading-none uppercase tracking-tighter text-glow">
            <span className="block italic-sport text-temple-gold drop-shadow-2xl hover-glitch transition-all duration-300">RETO</span>
            <span className="block text-white hover-glitch transition-all duration-300">ÍNTEGROS</span>
            <span className="text-lg md:text-3xl block mt-6 tracking-[0.2em] md:tracking-[0.5em] font-sans font-black opacity-40 italic-sport uppercase">{siteConfig.tagline}</span>
          </h1>
          
          <p className="max-w-3xl text-xl md:text-3xl mb-16 opacity-90 leading-tight font-bold uppercase italic-sport border-l-8 border-temple-gold pl-8 text-left">
            Forja un carácter inquebrantable. <br/>
            <span className="text-lg md:text-xl font-medium normal-case italic opacity-60">Entrenamiento híbrido, nutrición bio-optimizada y una hermandad que no conoce límites.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.message)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-6 bg-temple-red text-white px-8 md:px-12 py-5 md:py-6 font-black text-xl md:text-2xl uppercase tracking-widest skew-btn shadow-[8px_8px_0px_0px_#C5A059] md:shadow-[15px_15px_0px_0px_#C5A059] hover:shadow-none transition-all border-2 border-white/20"
            >
              Unirse al Escuadrón
              <ArrowRight className="h-6 md:h-8 w-6 md:w-8 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Metrics / Key Values */}
      <section className="py-32 bg-temple-cream relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black text-temple-navy uppercase italic-sport mb-6 hover-glitch">
              NUESTROS <span className="text-temple-red">PILARES</span>
            </h2>
            <div className="w-24 md:w-32 h-2 md:h-3 bg-temple-gold mx-auto -skew-x-12 shadow-[4px_4px_0px_0px_#002147] md:shadow-[6px_6px_0px_0px_#002147]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => {
              const Icon = IconMap[feature.icon];
              return (
                <div key={feature.id} className="brutalist-card p-10 group hover:scale-[1.02] hover:!shadow-[20px_20px_0px_0px_#C5A059] transition-all">
                  <div className="w-20 h-20 bg-temple-navy flex items-center justify-center mb-8 -skew-x-12 shadow-[6px_6px_0px_0px_#D32F2F]">
                    {Icon && <Icon className="h-10 w-10 text-temple-gold" />}
                  </div>
                  <h3 className="font-serif text-3xl font-black text-temple-navy mb-4 uppercase italic-sport">{feature.title}</h3>
                  <p className="text-temple-navy/70 text-lg leading-relaxed font-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Stats Row */}
      <section className="bg-temple-navy py-20 border-y-8 border-temple-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
                <p class="text-[10px] font-black text-temple-gold uppercase tracking-[0.5em]">COMUNIDAD</p>
                <div className="text-7xl font-black text-white italic-sport text-glow">+500</div>
                <div className="text-white/40 uppercase tracking-widest text-[9px] font-bold">Atletas de Élite</div>
            </div>
            <div className="space-y-2">
                <p class="text-[10px] font-black text-temple-gold uppercase tracking-[0.5em]">SISTEMA</p>
                <div className="text-7xl font-black text-white italic-sport text-glow">21</div>
                <div className="text-white/40 uppercase tracking-widest text-[9px] font-bold">Días de Forja</div>
            </div>
            <div className="space-y-2">
                <p class="text-[10px] font-black text-temple-gold uppercase tracking-[0.5em]">ENFOQUE</p>
                <div className="text-7xl font-black text-white italic-sport text-glow">100%</div>
                <div className="text-white/40 uppercase tracking-widest text-[9px] font-bold">Compromiso Radical</div>
            </div>
            <div className="space-y-2">
                <p class="text-[9px] md:text-[10px] font-black text-temple-gold uppercase tracking-[0.3em] md:tracking-[0.5em]">LEGADO</p>
                <div className="text-5xl md:text-7xl font-black text-white italic-sport text-glow">∞</div>
                <div className="text-white/40 uppercase tracking-widest text-[8px] md:text-[9px] font-bold">Propósito Eterno</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Premium Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-temple-navy/5 -skew-x-12 transform -translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-6xl md:text-8xl font-black text-temple-navy uppercase leading-none mb-8 hover-glitch">
                TESTIMONIOS <br/><span className="text-temple-gold">INQUEBRANTABLES</span>
              </h2>
              <p className="text-2xl text-temple-navy/60 font-bold uppercase italic-sport border-l-4 border-temple-red pl-6">Historias reales de transformación física y espiritual.</p>
            </div>
            <div className="hidden lg:flex gap-4">
              <div className="w-16 h-2 bg-temple-red -skew-x-12 shadow-lg"></div>
              <div className="w-16 h-2 bg-temple-gold -skew-x-12 shadow-lg"></div>
              <div className="w-16 h-2 bg-temple-navy -skew-x-12 shadow-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => {
              const Icon = TestimonialIconMap[Object.keys(TestimonialIconMap)[i % 3]];
              return (
                <div key={i} className="brutalist-card p-12 !shadow-[15px_15px_0px_0px_#002147] hover:!shadow-[20px_20px_0px_0px_#D32F2F] transition-all group">
                    <div className="text-temple-gold mb-10 group-hover:scale-110 transition-transform">
                        {Icon && <Icon className="h-10 w-10" />}
                    </div>
                    <p className="text-temple-navy text-2xl italic mb-12 leading-tight font-black uppercase italic-sport">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="flex items-center gap-6 border-t border-temple-navy/10 pt-10">
                      <div className="w-16 h-16 bg-temple-navy -skew-x-12 flex items-center justify-center text-temple-gold font-black text-2xl italic shadow-[6px_6px_0px_0px_#C5A059]">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-black text-temple-navy uppercase text-xl tracking-tighter">{t.author}</h4>
                        <span className="text-temple-red font-black text-xs uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-temple-navy relative overflow-hidden border-t-8 border-temple-gold">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-12">
          <h2 className="font-serif text-5xl md:text-[10rem] font-black text-white uppercase italic-sport leading-none text-glow hover-glitch">
            ¿LISTO PARA <br/><span className="text-temple-gold">TRASCENDER</span>?
          </h2>
          <div className="pt-12">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank" 
              className="inline-block bg-white text-temple-navy px-16 py-8 font-black text-3xl uppercase tracking-widest skew-btn shadow-[20px_20px_0px_0px_#D32F2F] hover:shadow-none hover:bg-temple-gold transition-all border-4 border-temple-navy"
            >
              Reservar Mi Cupo Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
