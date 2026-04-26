import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck } from 'lucide-react';
import { products, siteConfig } from '@/data/content';

const IconMap: Record<string, any> = {
  Shirt,
  Zap,
  Star
};

export default function TiendaPage() {
  return (
    <div className="animate-fade-in-up bg-temple-cream min-h-screen">
      {/* Header Section */}
      <section className="bg-vibrant-navy text-temple-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-temple-gold text-temple-navy font-black tracking-widest uppercase text-xs px-4 py-2 mb-6 -skew-x-12">
            Equipamiento & Nutrición de Élite
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-white uppercase italic-sport mb-6 tracking-tighter">
            La <span className="text-temple-gold">Armería</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Potencia tu transformación con protocolos de Batch Cooking y porta la armadura oficial del Escuadrón con orgullo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Nutrición Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12 border-b-4 border-temple-navy pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-temple-red p-3 -skew-x-12">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-temple-navy uppercase italic-sport">Combustible <span className="text-temple-red">Keto</span></h2>
            </div>
            <div className="hidden md:flex gap-2">
              {[1, 2, 3].map(i => <div key={i} className="w-8 h-1 bg-temple-gold -skew-x-12"></div>)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {products.filter(p => p.category === 'Suscripción').map((product) => (
              <div key={product.id} className="relative group overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-temple-gold to-temple-red opacity-20 group-hover:opacity-40 transition-opacity blur"></div>
                <div className="relative flex flex-col md:flex-row bg-white border-l-8 border-temple-navy shadow-2xl">
                  <div className="md:w-2/5 bg-vibrant-navy relative min-h-[250px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-temple-gold text-temple-navy font-black text-xs px-3 py-1 -skew-x-12">RECOMENDADO</div>
                  </div>
                  <div className="p-10 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-3xl font-black text-temple-navy mb-4 uppercase italic-sport">{product.name}</h3>
                      <p className="text-temple-navy/60 text-lg leading-relaxed mb-6 italic">{product.description}</p>
                      <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-temple-navy/80">
                          <ShieldCheck className="w-4 h-4 text-temple-red" /> Sin Gluten / Sin Azúcar
                        </li>
                        <li className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-temple-navy/80">
                          <ShieldCheck className="w-4 h-4 text-temple-red" /> Entrega Diaria 6:00 AM
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-black text-3xl text-temple-navy italic-sport">${product.price}<span className="text-sm uppercase opacity-50 ml-1">/mes</span></span>
                      <button className="bg-temple-red text-white px-8 py-3 font-black uppercase tracking-widest skew-btn shadow-lg">Suscribirse</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merch Section */}
        <div>
          <div className="flex items-center justify-between mb-12 border-b-4 border-temple-gold pb-6">
            <div className="flex items-center gap-4">
              <div className="bg-temple-navy p-3 -skew-x-12">
                <Shirt className="w-8 h-8 text-temple-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-temple-navy uppercase italic-sport">Armadura <span className="text-temple-gold">TempleFit</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.filter(p => p.category !== 'Suscripción').map((item, i) => {
              const Icon = IconMap[item.icon || 'Star'];
              return (
                <div key={item.id} className="glass-panel p-6 metric-card group border-b-4 border-temple-navy/10 hover:border-temple-gold transition-all">
                  <div className="bg-vibrant-navy aspect-square mb-8 flex items-center justify-center -skew-x-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-temple-navy to-transparent opacity-50"></div>
                    <div className="text-temple-gold group-hover:scale-125 transition-transform duration-500">
                      {Icon && <Icon className="w-12 h-12" />}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                      {item.category}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-black text-temple-navy mb-2 uppercase italic-sport">{item.name}</h3>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-serif font-black text-2xl text-temple-navy italic-sport">${item.price.toFixed(2)}</span>
                    <button className="flex items-center gap-2 bg-temple-navy text-white px-6 py-2 font-black uppercase tracking-tighter skew-btn hover:bg-temple-red transition-colors">
                      <ShoppingBag className="w-4 h-4" /> COMPRAR
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Trust Banner */}
      <section className="bg-vibrant-navy py-12 border-y-4 border-temple-gold/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 items-center opacity-50">
          <div className="font-black text-2xl text-white italic-sport">ENVÍOS NACIONALES</div>
          <div className="font-black text-2xl text-white italic-sport">PAGO SEGURO</div>
          <div className="font-black text-2xl text-white italic-sport">CALIDAD ÉLITE</div>
        </div>
      </section>
    </div>
  );
}
