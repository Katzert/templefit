'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Flame, ChefHat, X, ChevronRight, Sparkles, BookOpen, Utensils } from 'lucide-react';
import { recipes as defaultRecipes, recipeCategories } from '@/data/content';
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

function mergeRecipes(custom: any[], defaults: any[]): any[] {
  if (!Array.isArray(custom) || custom.length === 0) return defaults;
  const map = new Map<string, any>();
  defaults.forEach(d => map.set(d.id, d));
  custom.forEach(c => {
    if (c && c.id && c.name) {
      map.set(c.id, { ...(map.get(c.id) || {}), ...c });
    }
  });
  return Array.from(map.values());
}

export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [liveRecipes, setLiveRecipes] = useState<any[]>(defaultRecipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (!db) {
          setLiveRecipes(defaultRecipes);
          return;
        }
        const docRef = doc(db, 'workspaces', 'templefit-main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (Array.isArray(data.recipes) && data.recipes.length > 0) {
            setLiveRecipes(mergeRecipes(data.recipes, defaultRecipes));
          } else {
            setLiveRecipes(defaultRecipes);
          }
        } else {
          setLiveRecipes(defaultRecipes);
        }
      } catch (err) {
        console.warn("Firebase no configurado, usando data local", err);
        setLiveRecipes(defaultRecipes);
      }
    };
    fetchRecipes();
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
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/95 to-[#07090E]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/10 border border-temple-gold/30">
            <ChefHat className="text-temple-gold" size={16} />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-temple-gold">Nutrición Funcional & Botica</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black uppercase text-white tracking-tight">
            COMIDAS Y <span className="text-temple-gold italic">RECETAS</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Nutrición celular viva y recetas funcionales diseñadas para acelerar la recuperación física y la claridad mental en el <span className="text-temple-gold font-bold">Reto 21 Días</span>.
          </p>
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
                ? 'bg-temple-gold text-black border-temple-gold shadow-lg shadow-temple-gold/20 font-black scale-105'
                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipeId(recipe.id)}
              className="group rounded-2xl overflow-hidden bg-[#0B0F19] border border-white/10 hover:border-temple-gold/40 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Recipe Image Header with 16:10 Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'}
                  alt={recipe.name}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />

                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-temple-gold text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                  {recipe.category}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-temple-gold transition-colors duration-200 drop-shadow-md">{recipe.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{recipe.description}</p>

                {/* Macros Preview */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 text-center text-xs">
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 font-bold block mb-0.5">Calorías</span>
                    <span className="font-extrabold text-white tabular-nums">{recipe.macros?.calories || 0}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 font-bold block mb-0.5">Proteína</span>
                    <span className="font-extrabold text-temple-gold tabular-nums">{recipe.macros?.protein || 0}g</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 font-bold block mb-0.5">Tiempo</span>
                    <span className="font-extrabold text-gray-300 tabular-nums">{recipe.time || 0}m</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs font-black text-temple-gold group-hover:translate-x-1 transition-transform duration-200">
                  <span className="tracking-widest uppercase">Ver Preparación</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
          
          {filteredRecipes.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500 border border-dashed border-white/10 rounded-2xl">
              <ChefHat size={40} className="mx-auto mb-3 opacity-30 text-temple-gold" />
              <p className="text-sm font-bold uppercase tracking-wider text-gray-400">No se encontraron recetas en esta categoría.</p>
              <button onClick={() => setActiveCategory('all')} className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs uppercase font-bold text-white transition">Ver Todas</button>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Detail Modal */}
      <AnimatePresence>
        {openRecipe && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-[#0E1424] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 md:p-8 relative shadow-2xl">
              <button
                onClick={() => setSelectedRecipeId(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition z-10"
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>

              <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-6 bg-black">
                <img 
                  src={openRecipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'} 
                  alt={openRecipe.name} 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'; }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1424] via-transparent to-transparent" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-black px-3 py-1 bg-temple-gold rounded-full font-black">
                {openRecipe.category} • {openRecipe.time} minutos
              </span>

              <h2 className="text-2xl font-serif font-black text-white mt-3 mb-2">{openRecipe.name}</h2>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{openRecipe.description}</p>

              <div className="space-y-6 border-t border-white/10 pt-6">
                <div>
                  <h4 className="text-xs font-extrabold text-temple-gold uppercase tracking-wider mb-3">Ingredientes Necesarios</h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {(openRecipe.ingredientsText || openRecipe.ingredients || []).map((ing: string, i: number) => {
                      const text = typeof ing === 'string' ? ing : (ing as any).name || (ing as any).item || 'Ingrediente';
                      return (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-temple-gold" />
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold text-temple-gold uppercase tracking-wider mb-3">Pasos de Preparación</h4>
                  <ol className="space-y-3 text-xs text-gray-300">
                    {(openRecipe.steps || []).map((st: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 bg-black/30 p-3.5 rounded-xl border border-white/5">
                        <span className="font-black text-temple-gold flex-shrink-0">{i + 1}.</span>
                        <span className="leading-relaxed">{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
