'use client';

import { useState } from 'react';
import { ShoppingBag, Send } from 'lucide-react';
import { products as officialProducts } from '@/data/content';
import { motion } from 'framer-motion';

export default function TiendaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todo el Catálogo' },
    { id: 'Textil', label: 'Indumentaria Táctica' },
    { id: 'Suplemento', label: 'Botica & Suplementos' },
    { id: 'Membresía', label: 'Membresías' },
    { id: 'Nutrición', label: 'Catering & Snack Bar' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? officialProducts
    : officialProducts.filter(p => p.category === activeCategory);

  const handleOrder = (product: any) => {
    const text = encodeURIComponent(
      `¡Hola Paulo! 👋 Quisiera encargar de la Armería TempleFit: *${product.name}* (${product.price} Bs.). ¿Cómo realizo el 50% de seña para recogerlo este sábado en el CristoFit Camp?`
    );
    window.open(`https://wa.me/59169127691?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans pb-24">
      {/* Header Section */}
      <section className="relative min-h-[45vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity filter brightness-75"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/95 to-[#07090E]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full">
            <ShoppingBag size={14} className="text-temple-gold" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-temple-gold">
              Armería Oficial & Suplementación
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white uppercase tracking-tight">
            LA <span className="text-temple-gold italic">ARMERÍA</span> TEMPLEFIT
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Indumentaria de comando táctico, botica de suplementos cerebrales y nutrición funcional anti-inflamatoria en Santa Cruz.
          </p>
          <div className="text-xs text-temple-gold font-bold uppercase tracking-widest bg-black/50 py-2.5 px-5 rounded-xl max-w-md mx-auto border border-white/10 shadow-lg">
            📦 Regla de Pedido: 50% de seña previa (Viernes) ➔ Entrega Sábado en Camp
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-temple-gold text-black border-temple-gold shadow-lg shadow-temple-gold/20 font-black scale-105'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-temple-gold/40 transition-all duration-200 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-temple-gold tracking-widest shadow-lg">
                    {prod.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-temple-gold transition-colors duration-200">{prod.name}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">{prod.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-white/5 flex items-center justify-between mt-3">
                <div>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-extrabold block">Inversión</span>
                  <span className="text-2xl font-black text-white tabular-nums">{prod.price} <span className="text-xs font-extrabold text-temple-gold">Bs.</span></span>
                </div>

                <button
                  onClick={() => handleOrder(prod)}
                  className="px-5 py-2.5 bg-temple-gold hover:bg-temple-gold-bright text-black font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-temple-gold/15 active:translate-y-0"
                >
                  <Send size={13} />
                  <span>Pedir</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
