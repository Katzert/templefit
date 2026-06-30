import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck } from 'lucide-react';
import { products, siteConfig } from '@/data/content';

const IconMap: Record<string, any> = {
  Shirt,
  Zap,
  Star
};

export default function TiendaPage() {
  return (
    <div className="animate-fade-in-up min-h-screen">
      {/* Header Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-24 overflow-hidden border-b border-temple-gold/20">
        <div className="absolute inset-0 bg-temple-navy-dark"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover mix-blend-luminosity"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-block px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full mb-6">
            <span className="label-tactical text-temple-gold">EQUIPAMIENTO & NUTRICIÓN DE ÉLITE</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase elegant-title not-italic tracking-tighter mb-6">
            LA <span className="text-temple-gold">ARMERÍA</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Potencia tu transformación con protocolos nutricionales avanzados y porta la armadura oficial del Escuadrón con honor.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Nutrición Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b border-temple-gold/20 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-temple-red">
                <Utensils className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase elegant-title not-italic">COMBUSTIBLE <span className="text-temple-red">KETO</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.filter(p => p.category === 'Suscripción').map((product) => (
              <div key={product.id} className="tactical-card group no-padding flex flex-col md:flex-row">
                <div className="md:w-2/5 relative min-h-[250px] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-temple-navy-dark/90"></div>
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-temple-gold font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    RECOMENDADO
                  </div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">{product.description}</p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80">
                        <ShieldCheck className="w-4 h-4 text-temple-red" /> Sin Gluten / Sin Azúcar
                      </li>
                      <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80">
                        <ShieldCheck className="w-4 h-4 text-temple-red" /> Entrega Diaria 6:00 AM
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                    <span className="font-black text-3xl text-temple-gold elegant-title">${product.price}<span className="text-xs text-white/40 uppercase font-sans tracking-widest ml-2">/mes</span></span>
                    <button className="bg-temple-red/20 border border-temple-red/30 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-temple-red/40 transition-colors">
                      Suscribirse
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merch Section */}
        <div>
          <div className="flex items-center justify-between mb-12 border-b border-temple-gold/20 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-temple-gold">
                <Shirt className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase elegant-title not-italic">ARMADURA <span className="text-temple-gold">TEMPLEFIT</span></h2>
            </div>
          </div>

          <div className="bento-grid">
            {products.filter(p => p.category !== 'Suscripción').map((item, i) => {
              const Icon = IconMap[item.icon || 'Star'];
              return (
                <div key={item.id} className="tactical-card group">
                  <div className="aspect-square mb-6 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 relative overflow-hidden group-hover:border-temple-gold/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-temple-navy-dark to-transparent opacity-50"></div>
                    <div className="text-temple-gold/40 group-hover:text-temple-gold group-hover:scale-110 transition-all duration-500">
                      {Icon && <Icon className="w-16 h-16" />}
                    </div>
                    <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-white border border-white/20">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.name}</h3>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                      <span className="font-black text-2xl text-temple-gold elegant-title">${item.price.toFixed(2)}</span>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-temple-gold hover:text-temple-navy-dark hover:border-temple-gold transition-all">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Trust Banner */}
      <section className="bg-black/50 py-12 border-y border-temple-gold/10 backdrop-blur-md">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          <div className="font-bold text-xs md:text-sm text-white/40 tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-temple-gold"></span> ENVÍOS NACIONALES
          </div>
          <div className="font-bold text-xs md:text-sm text-white/40 tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-temple-gold"></span> PAGO SEGURO
          </div>
          <div className="font-bold text-xs md:text-sm text-white/40 tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-temple-gold"></span> CALIDAD ÉLITE
          </div>
        </div>
      </section>
    </div>
  );
}
