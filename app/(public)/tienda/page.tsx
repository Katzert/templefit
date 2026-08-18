'use client';

import { useState } from 'react';
import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck, CheckCircle2, Send, ArrowRight, X } from 'lucide-react';
import { products as officialProducts } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function TiendaPage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
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
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-20 overflow-hidden border-b border-temple-gold/20">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-luminosity filter brightness-75"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/80 to-[#07090E]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full">
            <ShoppingBag size={14} className="text-temple-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-temple-gold">
              Armería Oficial & Suplementación
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white uppercase tracking-tight">
            LA <span className="text-temple-gold italic">ARMERÍA</span> TEMPLEFIT
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Indumentaria de comando táctico, botica de suplementos cerebrales y nutrición funcional anti-inflamatoria en Santa Cruz.
          </p>
          <div className="text-xs text-temple-gold font-bold uppercase tracking-widest bg-black/40 py-2 px-4 rounded-xl max-w-md mx-auto border border-white/10">
            📦 Regla de Pedido: 50% de seña previa (Viernes) ➔ Entrega Sábado en Camp
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-temple-gold text-black border-temple-gold shadow-lg shadow-temple-gold/20 font-black'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              variants={item}
              className="bg-[#0E1424]/90 border border-white/10 rounded-3xl overflow-hidden hover:border-temple-gold/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-black/40">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase text-temple-gold tracking-widest">
                    {prod.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-temple-gold transition">{prod.name}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">{prod.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block">Inversión</span>
                  <span className="text-2xl font-black text-white">{prod.price} <span className="text-sm font-bold text-temple-gold">Bs.</span></span>
                </div>

                <button
                  onClick={() => handleOrder(prod)}
                  className="px-5 py-2.5 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-black uppercase tracking-wider text-xs rounded-xl hover:bg-amber-400 transition flex items-center gap-1.5 shadow-lg shadow-temple-gold/10"
                >
                  <Send size={13} />
                  <span>Pedir</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
