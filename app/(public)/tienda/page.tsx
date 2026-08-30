'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck, CheckCircle2, Send, ArrowRight, X } from 'lucide-react';
import { products as officialProducts } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function TiendaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [liveProducts, setLiveProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const docRef = doc(db, 'workspaces', 'templefit-main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().products) {
          setLiveProducts(docSnap.data().products);
        } else {
          setLiveProducts(officialProducts);
        }
      } catch (err) {
        console.warn("Firebase no configurado, usando data local", err);
        setLiveProducts(officialProducts);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    { id: 'all', label: 'Todo el Catálogo' },
    { id: 'Textil', label: 'Indumentaria Táctica' },
    { id: 'Suplemento', label: 'Botica & Suplementos' },
    { id: 'Membresía', label: 'Membresías' },
    { id: 'Nutrición', label: 'Catering & Snack Bar' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? liveProducts
    : liveProducts.filter(p => p.category === activeCategory);

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/90 via-[#FBF9F5]/80 to-[#FBF9F5] dark:from-[#07090E]/90 dark:via-[#07090E]/80 dark:to-[#07090E]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full">
            <ShoppingBag size={14} className="text-temple-gold" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-temple-gold">
              Tienda Oficial & Suplementación
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-temple-navy dark:text-white uppercase tracking-tight">
            LA <span className="text-temple-gold italic">TIENDA</span> TEMPLEFIT
          </h1>
          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Ropa deportiva y suplementos en Santa Cruz.
          </p>
          <div className="text-xs text-temple-gold font-bold uppercase tracking-widest bg-slate-50 dark:bg-white dark:bg-black/40 py-2 px-4 rounded-xl max-w-md mx-auto border border-black/10 dark:border-white/10">
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
                  ? 'bg-temple-gold text-black border-temple-gold shadow-lg shadow-temple-gold/20 font-black'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:text-white'
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
              variants={item}
              className="bg-white dark:bg-[#0E1424]/90 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-temple-gold/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-50 dark:bg-white dark:bg-black/40">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-black/7 dark:bg-black/70 backdrop-blur-md border border-black/20 dark:border-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase text-temple-gold tracking-widest">
                    {prod.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-temple-navy dark:text-white group-hover:text-temple-gold transition">{prod.name}</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed line-clamp-2">{prod.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-black/5 dark:border-white/5 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-bold block">Inversión</span>
                  <span className="text-2xl font-black text-white">{prod.price} <span className="text-sm font-bold text-temple-gold">Bs.</span></span>
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
