'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Flame, ChefHat, X, ChevronRight, Sparkles, BookOpen, Utensils, Users, ShoppingBag, Activity, ArrowRight, Send } from 'lucide-react';
import { recipes as defaultRecipes, recipeCategories } from '@/data/content';
import { db } from '../../../lib/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

const DEFAULT_PRICES: Record<string, number> = {
  'electrohidra-elite': 15,
  'electrodetox-blast': 15,
  'infusion-daniel': 12,
  'bowl-guerrero': 22,
  'smoothie-salomon': 20,
  'pudin-shake': 25,
  'panqueque-shake': 28
};

function getRecipePrice(recipe: any): number {
  if (typeof recipe.suggestedPrice === 'number' && recipe.suggestedPrice > 0) return recipe.suggestedPrice;
  if (typeof recipe.price === 'number' && recipe.price > 0) return recipe.price;
  return DEFAULT_PRICES[recipe.id] || 15;
}

function mergeRecipes(custom: any[], defaults: any[]): any[] {
  if (!Array.isArray(custom) || custom.length === 0) {
    return defaults.map(d => ({ ...d, suggestedPrice: getRecipePrice(d) }));
  }
  const map = new Map<string, any>();
  // Start with defaults so baseline details exist
  defaults.forEach(d => map.set(d.id, { ...d, suggestedPrice: getRecipePrice(d) }));
  // Overwrite or append with custom recipes from Paulo's admin panel
  custom.forEach(c => {
    if (c && c.id && c.name) {
      const existing = map.get(c.id) || {};
      map.set(c.id, { 
        ...existing, 
        ...c, 
        suggestedPrice: getRecipePrice(c) 
      });
    }
  });
  return Array.from(map.values());
}

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [liveRecipes, setLiveRecipes] = useState<any[]>(() => mergeRecipes([], defaultRecipes));

  useEffect(() => {
    if (!db) return;
    try {
      const docRef = doc(db, 'workspaces', 'templefit-main');
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const recipesPool = Array.isArray(data.recipes) ? [...data.recipes] : [];
          // Also merge any showcaseItems of type 'recipe'
          if (Array.isArray(data.showcaseItems)) {
            data.showcaseItems.forEach((s: any) => {
              if (s && s.type === 'recipe' && s.title && !recipesPool.some(r => r.id === s.id)) {
                recipesPool.push({
                  id: s.id,
                  name: s.title,
                  category: 'snack',
                  time: 10,
                  description: s.description || '',
                  image: s.imageUrl,
                  suggestedPrice: s.price || 15,
                  ingredientsText: ['Ingredientes naturales selectos'],
                  steps: ['Preparado fresco en el Snack Bar TempleFit.']
                });
              }
            });
          }
          if (recipesPool.length > 0) {
            setLiveRecipes(mergeRecipes(recipesPool, defaultRecipes));
          }
        }
      }, (err) => {
        console.warn("Firebase snapshot error en recetas:", err);
      });

      return () => unsubscribe();
    } catch (err) {
      console.warn("Firebase no configurado, usando data local", err);
    }
  }, []);

  const recipesPool = Array.isArray(liveRecipes) && liveRecipes.length > 0 ? liveRecipes : defaultRecipes;

  const filteredRecipes = activeCategory === 'all'
    ? recipesPool
    : recipesPool.filter(r => {
        if (!r) return false;
        const cat = (r.category || '').toString().toLowerCase().trim();
        const active = activeCategory.toLowerCase().trim();
        return cat === active || cat.includes(active) || active.includes(cat);
      });

  const openRecipe = recipesPool.find(r => r && r.id === selectedRecipeId);

  return (
    <div className="space-y-16 pb-24 font-sans min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 dark:opacity-50"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/50 via-[#FBF9F5]/60 to-[#FBF9F5] dark:from-[#05070B]/60 dark:via-[#05070B]/70 dark:to-[#05070B]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/10 border border-temple-gold/30">
            <ChefHat className="text-temple-gold" size={16} />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-temple-gold">Nutrición Funcional & Botica</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight">
            COMIDAS Y <span className="text-temple-gold italic">RECETAS</span>
          </h1>

          <motion.p variants={item} className="text-sm md:text-base text-slate-700 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Recetas saludables para acompañar tu entrenamiento en el <span className="text-temple-gold font-bold">Reto 21 Días</span>.
          </motion.p>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2.5">
        {recipeCategories.map((cat) => (
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

      {/* Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="sr-only">Catálogo de Recetas y Alimentos Funcionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipeId(recipe.id)}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#0B0F19] dark:to-black border border-black/10 dark:border-white/10 hover:border-temple-gold/40 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Recipe Image Header */}
              <div className="relative h-56 overflow-hidden bg-black/[0.03] dark:bg-black/40">
                {recipe.image ? (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700 bg-gradient-to-t from-slate-100 dark:from-black to-[#FBF9F5] dark:to-gray-900">
                    <ChefHat size={32} className="opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-95" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-temple-gold text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {recipe.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-temple-gold transition-colors duration-300 drop-shadow-md">{recipe.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-slate-600 dark:text-gray-400 line-clamp-2 leading-relaxed">{recipe.description}</p>

                {/* Macros Preview */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center text-xs group-hover:bg-black/[0.04] dark:group-hover:bg-white/[0.05] transition-colors">
                  <div>
                    <span className="text-[9px] uppercase text-slate-500 dark:text-gray-500 block mb-0.5">Calorías</span>
                    <span className="font-black text-temple-navy dark:text-white drop-shadow-sm">{recipe.macros?.calories || 0}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-slate-500 dark:text-gray-500 block mb-0.5">Proteína</span>
                    <span className="font-black text-temple-gold drop-shadow-sm">{recipe.macros?.protein || 0}g</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-slate-500 dark:text-gray-500 block mb-0.5">Tiempo</span>
                    <span className="font-black text-slate-700 dark:text-gray-300 drop-shadow-sm">{recipe.time || 0}m</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase text-slate-500 dark:text-gray-500 font-bold block">Snack Bar</span>
                    <span className="text-base font-black text-temple-navy dark:text-white">
                      {recipe.suggestedPrice || 15} <span className="text-xs font-bold text-temple-gold">Bs.</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-black text-temple-gold group-hover:translate-x-1 transition-transform duration-200">
                    <span className="tracking-wider uppercase text-[11px]">Ver Receta</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredRecipes.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 dark:text-gray-500">
              <p>No se encontraron recetas en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Ecosystem Interconnection Bridges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="border-t border-black/10 dark:border-white/10 pt-16">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 dark:text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full border border-temple-gold/20">
              PILARES COMPLEMENTARIOS
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase text-temple-navy dark:text-white">
              Sinergia para el <span className="text-temple-gold">Atleta Integral</span>
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-xs md:text-sm max-w-lg mx-auto">
              La nutrición óptima cobra su mayor valor cuando se combina con entrenamiento en comunidad y evaluación constante.
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
                  25 escuadrones de 12 atletas. Calistenia, crossfit y CristoFit Camp los sábados al amanecer.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Ver Escuadrones</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              href="/tienda"
              className="p-6 rounded-3xl bg-white dark:bg-[#0B0F19] border border-black/10 dark:border-white/10 hover:border-temple-gold/50 shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-temple-gold/10 text-amber-700 dark:text-temple-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="text-lg font-bold text-temple-navy dark:text-white group-hover:text-temple-gold transition-colors">
                  Armería & Indumentaria
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                  Equipamiento de combate, correas, magnesio y accesorios oficiales para tu disciplina.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Ir a la Tienda</span>
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
                  Test de Diagnóstico
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-2 leading-relaxed">
                  Genera tu plan personalizado y agenda tu semana de prueba con Paulo directamente.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-temple-gold uppercase tracking-wider">
                <span>Hacer el Test</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {openRecipe && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recipe-modal-title"
          onClick={() => setSelectedRecipeId(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white dark:bg-[#0F1420] border border-black/10 dark:border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-5 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRecipeId(null)}
              className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-full text-slate-800 dark:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
              aria-label="Cerrar detalle de receta"
            >
              <X size={18} />
            </button>

              <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-6 bg-slate-100 dark:bg-black">
                <img 
                  src={openRecipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'} 
                  alt={`Fotografía de plato preparado: ${openRecipe.name}`} 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'; }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1424] via-transparent to-transparent" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-black px-3 py-1 bg-temple-gold rounded-full font-black">
                {openRecipe.category} • {openRecipe.time} minutos
              </span>

            <h2 id="recipe-modal-title" className="text-2xl font-bold text-temple-navy dark:text-white mt-3 mb-2">{openRecipe.name}</h2>
            <p className="text-sm text-slate-700 dark:text-gray-300 mb-6">{openRecipe.description}</p>

            <div className="space-y-6 border-t border-black/10 dark:border-white/10 pt-6">
              <div>
                <h4 className="text-sm font-bold text-temple-gold uppercase tracking-wider mb-3">Ingredientes</h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-gray-300">
                  {(openRecipe.ingredientsText || openRecipe.ingredients || []).map((ing: string, i: number) => {
                    const text = typeof ing === 'string' ? ing : (ing as any).name || (ing as any).item || 'Ingrediente';
                    return (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-temple-gold" />
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-temple-gold uppercase tracking-wider mb-3">Pasos de Preparación</h4>
                <ol className="space-y-3 text-xs text-slate-700 dark:text-gray-300">
                  {(openRecipe.steps || []).map((st: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 bg-black/[0.02] dark:bg-white/[0.02] p-3 rounded-xl border border-black/5 dark:border-white/5">
                      <span className="font-bold text-temple-gold flex-shrink-0">{i + 1}.</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-bold block">Consumo en Snack Bar</span>
                  <span className="text-2xl font-black text-temple-navy dark:text-white">
                    {openRecipe.suggestedPrice || 15} <span className="text-sm font-bold text-temple-gold">Bs.</span>
                  </span>
                </div>
                <button
                  onClick={() => {
                    const price = openRecipe.suggestedPrice || 15;
                    const text = encodeURIComponent(`¡Hola Paulo! 👋 Quiero pedir del Snack Bar TempleFit: *${openRecipe.name}* (${price} Bs.). ¿Cómo coordino mi pedido?`);
                    window.open(`https://wa.me/59169127691?text=${text}`, '_blank');
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-temple-gold hover:bg-temple-gold-bright text-black font-extrabold uppercase tracking-wider text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-temple-gold/20"
                >
                  <Send size={14} />
                  <span>Pedir al Snack Bar</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
