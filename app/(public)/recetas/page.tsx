'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Flame, ChefHat, X, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { recipes, recipeCategories } from '@/data/content';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  const filteredRecipes = activeCategory === 'all'
    ? recipes
    : recipes.filter(r => r.category === activeCategory);

  const openRecipe = recipes.find(r => r.id === selectedRecipeId);

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-16 pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0A0A0A]/90 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/10 border border-temple-gold/30">
            <ChefHat className="text-temple-gold" size={16} />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-temple-gold">Nutrición Bio-Optimizada</span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-6xl font-serif font-black uppercase text-white tracking-tight">
            COMBUSTIBLE <span className="text-temple-gold">TÁCTICO</span>
          </motion.h1>

          <motion.p variants={item} className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Recetas diseñadas para potenciar tu metabolismo, acelerar la recuperación muscular y alimentar tu energía en el <span className="text-temple-gold font-bold">Reto 21 Días</span>.
          </motion.p>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2">
        {recipeCategories.map((cat) => (
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

      {/* Recipes Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={item}
              onClick={() => setSelectedRecipeId(recipe.id)}
              className="group rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-temple-gold/40 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Recipe Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-temple-gold text-[10px] font-bold uppercase tracking-widest">
                  {recipe.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-temple-gold transition">{recipe.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{recipe.description}</p>

                {/* Macros Preview */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center text-xs">
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 block">Calorías</span>
                    <span className="font-bold text-white">{recipe.macros.calories}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 block">Proteína</span>
                    <span className="font-bold text-temple-gold">{recipe.macros.protein}g</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-gray-500 block">Tiempo</span>
                    <span className="font-bold text-gray-300">{recipe.time}m</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-temple-gold group-hover:translate-x-1 transition">
                  <span>Ver Receta Completa</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {openRecipe && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0F1420] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedRecipeId(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition"
            >
              <X size={18} />
            </button>

            <img src={openRecipe.image} alt={openRecipe.name} className="w-full h-64 object-cover rounded-2xl mb-6" />

            <span className="text-xs font-bold uppercase tracking-widest text-temple-gold px-3 py-1 bg-temple-gold/10 rounded-full border border-temple-gold/30">
              {openRecipe.category} • {openRecipe.time} minutos
            </span>

            <h2 className="text-2xl font-bold text-white mt-3 mb-2">{openRecipe.name}</h2>
            <p className="text-sm text-gray-300 mb-6">{openRecipe.description}</p>

            <div className="space-y-6 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-sm font-bold text-temple-gold uppercase tracking-wider mb-3">Ingredientes</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {openRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-temple-gold" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-temple-gold uppercase tracking-wider mb-3">Pasos de Preparación</h4>
                <ol className="space-y-3 text-xs text-gray-300">
                  {openRecipe.steps.map((st, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      <span className="font-bold text-temple-gold flex-shrink-0">{i + 1}.</span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </motion.div>
  );
}
