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
      {/* Hero Section */}
      <section className="relative bg-vibrant-navy text-temple-cream overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-temple-navy/50 to-temple-navy"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <div className="inline-block bg-temple-gold text-temple-navy font-black tracking-[0.3em] uppercase text-xs px-4 py-2 mb-8 -skew-x-12">
            {siteConfig.slogan}
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl font-black mb-8 leading-none uppercase tracking-tighter">
            <span className="block italic-sport text-temple-gold drop-shadow-2xl">RETO</span>
            <span className="block text-white">ÍNTEGROS</span>
            <span className="text-2xl md:text-4xl block mt-4 tracking-normal font-sans font-light opacity-80">{siteConfig.tagline}</span>
          </h1>
          
          <p className="max-w-3xl text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-light">
            Forja un carácter inquebrantable. Entrenamiento híbrido, nutrición bio-optimizada y una hermandad que no conoce límites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.message)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-temple-red text-white px-10 py-5 font-black text-xl uppercase tracking-widest skew-btn shadow-[8px_8px_0px_0px_#C5A059] hover:shadow-none transition-all"
            >
              Unirse al Escuadrón
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator Overlay */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 bg-gradient-to-b from-temple-gold to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Metrics / Key Values */}
      <section className="py-32 bg-temple-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-temple-navy to-transparent opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-6xl font-black text-temple-navy uppercase italic-sport mb-6">
              Nuestros <span className="text-temple-red">Pilares</span>
            </h2>
            <div className="w-24 h-2 bg-temple-gold mx-auto -skew-x-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature) => {
              const Icon = IconMap[feature.icon];
              return (
                <div key={feature.id} className="glass-panel p-10 metric-card group">
                  <div className={`w-16 h-16 bg-vibrant-navy flex items-center justify-center mb-8 -skew-x-12 group-hover:rotate-6 transition-transform`}>
                    {Icon && <Icon className="h-8 w-8 text-temple-gold" />}
                  </div>
                  <h3 className="font-serif text-3xl font-black text-temple-navy mb-4 uppercase italic-sport">{feature.title}</h3>
                  <p className="text-temple-navy/70 text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Stats Row */}
      <section className="bg-vibrant-navy py-20 border-y-4 border-temple-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-temple-gold mb-2 italic-sport">+500</div>
              <div className="text-white/60 uppercase tracking-widest text-xs font-bold">Atletas</div>
            </div>
            <div>
              <div className="text-5xl font-black text-temple-gold mb-2 italic-sport">21</div>
              <div className="text-white/60 uppercase tracking-widest text-xs font-bold">Días Clave</div>
            </div>
            <div>
              <div className="text-5xl font-black text-temple-gold mb-2 italic-sport">100%</div>
              <div className="text-white/60 uppercase tracking-widest text-xs font-bold">Compromiso</div>
            </div>
            <div>
              <div className="text-5xl font-black text-temple-gold mb-2 italic-sport">∞</div>
              <div className="text-white/60 uppercase tracking-widest text-xs font-bold">Propósito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Premium Layout */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl md:text-7xl font-black text-temple-navy uppercase leading-none mb-6">
                Testimonios <span className="text-temple-gold block">Inquebrantables</span>
              </h2>
              <p className="text-xl text-temple-navy/60">Historias reales de transformación física y espiritual en TempleFit.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-temple-red -skew-x-12"></div>
              <div className="w-12 h-1 bg-temple-gold -skew-x-12"></div>
              <div className="w-12 h-1 bg-temple-navy -skew-x-12"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => {
              const Icon = TestimonialIconMap[Object.keys(TestimonialIconMap)[i % 3]];
              return (
                <div key={i} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-temple-gold to-temple-red opacity-0 group-hover:opacity-10 transition-opacity blur-lg"></div>
                  <div className="relative bg-temple-cream p-12 border-l-8 border-temple-navy shadow-xl">
                    <div className="text-temple-gold mb-8">{Icon && <Icon className="h-6 w-6" />}</div>
                    <p className="text-temple-navy text-xl italic mb-10 leading-relaxed font-medium">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-vibrant-navy -skew-x-12 flex items-center justify-center text-white font-black text-xl italic">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-black text-temple-navy uppercase text-lg tracking-tighter">{t.author}</h4>
                        <span className="text-temple-red font-bold text-sm uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-temple-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-5xl md:text-7xl font-black text-white uppercase italic-sport mb-10 leading-tight">
            ¿Estás listo para <span className="text-temple-gold">trascender</span>?
          </h2>
          <a 
            href="https://wa.me/59169127691" 
            target="_blank" 
            className="inline-block bg-white text-temple-navy px-12 py-6 font-black text-2xl uppercase tracking-widest skew-btn hover:bg-temple-gold transition-colors"
          >
            Reservar Mi Cupo Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
