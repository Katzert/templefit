'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck, CheckCircle2, Send, ArrowRight, X, Users, Coffee, Activity } from 'lucide-react';
import { products as officialProducts } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../../lib/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { getAssetPath } from '../../../lib/utils';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.2 } } };

function normalizeName(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function mergeShowcaseProducts(showcase: any[], defaults: any[]): any[] {
  // Map showcase/inventory items by normalized name for quick lookup
  const showcaseMap = new Map<string, any>();
  if (Array.isArray(showcase)) {
    showcase.forEach(s => {
      if (s && (s.title || s.name) && s.status !== 'hidden') {
        const title = (s.title || s.name || '').trim();
        const normKey = normalizeName(title);
        if (normKey) {
          showcaseMap.set(normKey, s);
        }
      }
    });
  }

  const result: any[] = [];
  const processedKeys = new Set<string>();

  // 1. Maintain exact order of official default products, updating with live prices/stock without changing positions
  defaults.forEach(d => {
    const normKey = normalizeName(d.name);
    processedKeys.add(normKey);
    const s = showcaseMap.get(normKey);
    if (s) {
      let resolvedImage = s.imageUrl || s.image;
      if (
        !resolvedImage ||
        (d.category === 'Textil' && d.image) ||
        resolvedImage.includes('unsplash.com/photo-1579722820308-d74e571900a9') ||
        resolvedImage.includes('unsplash.com/photo-1521572267360-ee0c2909d518') ||
        resolvedImage.includes('unsplash.com/photo-1591195853828-11db59a44f6b') ||
        resolvedImage.includes('unsplash.com/photo-1556905055-8f358a7a47b2')
      ) {
        resolvedImage = d.image;
      }
      const priceVal = typeof s.price === 'number'
        ? s.price
        : (s.price !== undefined && s.price !== null && s.price !== '' && !isNaN(Number(s.price)) ? Number(s.price) : d.price);

      result.push({
        id: d.id,
        name: d.name,
        price: priceVal,
        category: d.category,
        description: s.description || d.description,
        image: resolvedImage
      });
    } else {
      result.push(d);
    }
  });

  // 2. Append any extra novel products from showcase that weren't in defaults
  if (Array.isArray(showcase)) {
    showcase.forEach(s => {
      if (s && (s.title || s.name) && s.status !== 'hidden') {
        const title = (s.title || s.name || '').trim();
        const normKey = normalizeName(title);
        if (!normKey || processedKeys.has(normKey)) return;
        processedKeys.add(normKey);

        let category = s.category || (s.type === 'recipe' ? 'Nutrición' : 'Suplemento');
        const priceVal = typeof s.price === 'number'
          ? s.price
          : (s.price !== undefined && s.price !== null && s.price !== '' && !isNaN(Number(s.price)) ? Number(s.price) : 0);

        result.push({
          id: s.id ? String(s.id) : `showcase-${normKey}`,
          name: title,
          price: priceVal,
          category,
          description: s.description || '',
          image: s.imageUrl || s.image || '/images/squad_training.webp'
        });
      }
    });
  }

  return result;
}

export default function TiendaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [liveProducts, setLiveProducts] = useState<any[]>(officialProducts);

  useEffect(() => {
    if (!db) return;
    try {
      const docRef = doc(db, 'public_content', 'main');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const showcaseList = Array.isArray(data.showcaseItems) ? [...data.showcaseItems] : [];
          const inventorySource = Array.isArray(data.inventoryPublic) ? data.inventoryPublic : Array.isArray(data.inventory) ? data.inventory : [];
          
          inventorySource.forEach((inv: any) => {
            const invNorm = normalizeName(inv.name);
            const exists = showcaseList.some(s => s.id === inv.id || normalizeName(s.title || s.name) === invNorm);
            if (inv && inv.id && inv.name && !exists) {
              showcaseList.push({
                id: inv.id,
                title: inv.name,
                price: inv.price || inv.cost || 0,
                type: inv.category === 'snack' ? 'recipe' : 'apparel',
                description: `Disponible en tienda y barra física TempleFit. Stock: ${inv.stock ?? 0} unidades.`,
                imageUrl: inv.imageUrl
              });
            }
          });

          if (Array.isArray(data.products) && data.products.length > 0) {
            setLiveProducts(mergeShowcaseProducts(data.products, officialProducts));
          } else if (showcaseList.length > 0) {
            setLiveProducts(mergeShowcaseProducts(showcaseList, officialProducts));
          } else {
            setLiveProducts(officialProducts);
          }
        } else {
          setLiveProducts(officialProducts);
        }
      }, (err) => {
        console.warn("Firebase snapshot error en tienda:", err);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firebase no configurado, usando data local", err);
      setLiveProducts(officialProducts);
    }
  }, []);

  const categories = [
    { id: 'all', label: 'Todo el Catálogo' },
    { id: 'Textil', label: 'Indumentaria Táctica' },
    { id: 'Suplemento', label: 'Botica & Suplementos' },
    { id: 'Membresía', label: 'Membresías' },
    { id: 'Nutrición', label: 'Catering & Snack Bar' },
    { id: 'Servicio', label: 'Recuperación & Servicios' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? liveProducts
    : liveProducts.filter(p => p.category === activeCategory);

  const handleOrder = (product: any) => {
    const text = encodeURIComponent(
      `¡Hola Paulo! 👋 Quisiera encargar de la Armería TempleFit: *${product.name}* (${product.price} Bs.). ¿Cómo realizo el 50% de seña para recogerlo este sábado en el CristoFit Camp?`
    );
    window.open(`https://wa.me/59169127691?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen font-sans pb-24">
      {/* Header Section */}
      <section className="relative min-h-[45vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 opacity-60 dark:opacity-50 bg-cover bg-center object-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/50 via-[#FBF9F5]/60 to-[#FBF9F5] dark:from-[#05070B]/60 dark:via-[#05070B]/70 dark:to-[#05070B]" />
        
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
          <div className="text-xs text-temple-gold font-bold uppercase tracking-widest bg-black/[0.03] dark:bg-black/40 py-2 px-4 rounded-xl max-w-lg mx-auto border border-black/10 dark:border-white/10">
            📦 Pedidos & Entregas: Reserva directa vía WhatsApp ➔ Retiro en Gimnasio o CristoFit Camp (Sábados)
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
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-gray-400 border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:text-temple-gold dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <h2 className="sr-only">Catálogo Oficial de Productos</h2>
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <motion.div
              key={prod.id}
              variants={item}
              className="bg-white dark:bg-[#0E1424]/90 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-temple-gold/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-black/[0.03] dark:bg-black/40">
                  <img 
                    src={getAssetPath(prod.image)} 
                    alt={prod.name} 
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={500}
                    onError={(e) => {
                      e.currentTarget.src = getAssetPath('/images/squad_training.webp');
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md border border-black/20 dark:border-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase text-amber-800 dark:text-temple-gold tracking-widest">
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
                  <span className="text-[10px] text-slate-700 dark:text-gray-300 uppercase tracking-widest font-bold block">Inversión</span>
                  <span className="text-2xl font-black text-temple-navy dark:text-white">{prod.price} <span className="text-sm font-bold text-temple-gold">Bs.</span></span>
                </div>

                <button
                  onClick={() => handleOrder(prod)}
                  className="px-5 py-2.5 bg-temple-gold hover:bg-temple-gold-bright text-black font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-temple-gold/15 active:translate-y-0"
                >
                  <Send size={13} />
                  <span>Pedir</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ecosystem Interconnection Bridges */}
        <div className="border-t border-black/10 dark:border-white/10 pt-16 pb-12">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 dark:text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full border border-temple-gold/20">
              PILARES COMPLEMENTARIOS
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase text-temple-navy dark:text-white">
              Armadura para la <span className="text-temple-gold">Misión</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs md:text-sm max-w-lg mx-auto">
              Porta la indumentaria oficial y vive la experiencia completa de los escuadrones y la nutrición botánica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/escuadrones"
              className="p-6 rounded-3xl bg-white dark:bg-[#0B0F19] border border-black/10 dark:border-white/10 hover:border-temple-gold/50 shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-temple-navy dark:text-white group-hover:text-temple-gold transition-colors">
                  Escuadrones & Camp
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                  Únete a un grupo de 12 atletas. Calistenia, crossfit y preparación física semanal.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Ver Escuadrones</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/recetas"
              className="p-6 rounded-3xl bg-white dark:bg-[#0B0F19] border border-black/10 dark:border-white/10 hover:border-temple-gold/50 shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Coffee size={24} />
                </div>
                <h3 className="text-lg font-bold text-temple-navy dark:text-white group-hover:text-temple-gold transition-colors">
                  Nutrición & Recetas
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                  Recetas botánicas, batidos proteicos e infusiones para respaldar tu suplementación.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Ver Recetas</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/#evaluacion"
              className="p-6 rounded-3xl bg-white dark:bg-[#0B0F19] border border-black/10 dark:border-white/10 hover:border-temple-gold/50 shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity size={24} />
                </div>
                <h3 className="text-lg font-bold text-temple-navy dark:text-white group-hover:text-temple-gold transition-colors">
                  Evaluación Inicial
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                  Descubre tu nivel actual y coordina tu semana de prueba con Paulo directamente.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Comenzar Evaluación</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="pt-6 pb-2 text-center text-xs text-slate-500 dark:text-gray-400 max-w-3xl mx-auto border-t border-black/5 dark:border-white/5">
          <p>
            <strong>Aviso de Salud:</strong> Las preparaciones botánicas y suplementos ofrecidos por TempleFit son complementos alimenticios y nutricionales; no constituyen medicamentos ni sustituyen el diagnóstico, prescripción o tratamiento médico profesional.
          </p>
        </div>

      </div>
    </div>
  );
}
