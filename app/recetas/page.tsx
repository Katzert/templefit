'use client';

import { useState } from 'react';
import { Clock, Users, Flame, ChefHat, X, ChevronRight, Zap, Droplets, Wheat, Target } from 'lucide-react';
import { recipes, recipeCategories, siteConfig } from '@/data/content';

const BASE_PATH = '/templefit';

export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const filteredRecipes = activeCategory === 'all'
    ? recipes
    : recipes.filter(r => r.category === activeCategory);

  const openRecipe = recipes.find(r => r.id === selectedRecipe);

  return (
    <div className="animate-fade-in-up min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-24 overflow-hidden border-b border-temple-gold/20">
        <div className="absolute inset-0 bg-temple-navy-dark"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 hero-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-block px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full mb-6">
            <span className="label-tactical text-temple-gold">NUTRICIÓN BIO-OPTIMIZADA</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase elegant-title not-italic tracking-tighter mb-6">
            COMBUSTIBLE <span className="text-temple-gold">TÁCTICO</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Recetas diseñadas para el alto rendimiento. Cada plato está calibrado para potenciar tu transformación en el <span className="text-temple-gold font-bold">Reto 21 Días</span>.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-black/30 border-b border-white/5 sticky top-[57px] md:top-[73px] z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {recipeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-temple-gold text-temple-navy-dark border-temple-gold shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="label-tactical mb-2 block text-temple-red">ARSENAL NUTRICIONAL</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              {activeCategory === 'all' ? 'TODAS LAS' : ''} <span className="text-temple-gold">RECETAS{activeCategory !== 'all' ? ` — ${recipeCategories.find(c => c.id === activeCategory)?.label?.toUpperCase()}` : ''}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="tactical-card group no-padding cursor-pointer"
                onClick={() => setSelectedRecipe(recipe.id)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-t-[24px]">
                  <img
                    src={`${BASE_PATH}${recipe.image}`}
                    alt={recipe.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,33,0.95)] via-[rgba(0,15,33,0.3)] to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-temple-gold font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {recipe.category}
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4 bg-temple-gold/20 backdrop-blur-md border border-temple-gold/30 text-temple-gold font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {recipe.difficulty}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{recipe.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="text-white/60 text-sm leading-relaxed font-medium mb-5 line-clamp-2">{recipe.description}</p>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-temple-gold" />
                      {recipe.time} min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-temple-gold" />
                      {recipe.servings} {recipe.servings === 1 ? 'porción' : 'porciones'}
                    </span>
                  </div>

                  {/* Macros */}
                  <div className="mt-auto pt-4 border-t border-white/10 grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Flame className="w-3 h-3 text-temple-red" />
                      </div>
                      <span className="text-white font-black text-sm">{recipe.macros.calories}</span>
                      <span className="block text-[8px] text-white/40 uppercase tracking-widest font-bold">kcal</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-white font-black text-sm">{recipe.macros.protein}g</span>
                      <span className="block text-[8px] text-white/40 uppercase tracking-widest font-bold">prot</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Droplets className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="text-white font-black text-sm">{recipe.macros.fat}g</span>
                      <span className="block text-[8px] text-white/40 uppercase tracking-widest font-bold">grasa</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Wheat className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-white font-black text-sm">{recipe.macros.carbs}g</span>
                      <span className="block text-[8px] text-white/40 uppercase tracking-widest font-bold">carbs</span>
                    </div>
                  </div>

                  {/* View button */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-temple-gold text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    Ver Receta Completa <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="py-16 bg-black/50 border-y border-temple-gold/10 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center space-y-6">
          <span className="label-tactical text-temple-red block">PROTOCOLO NUTRICIONAL</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
            TU CUERPO ES UN <span className="text-temple-gold">TEMPLO</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-medium">
            Alimenta tu transformación con combustible de élite. Cada receta está diseñada para maximizar rendimiento y recuperación.
          </p>
          <div className="pt-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Quiero el plan nutricional completo del Reto 21 Días.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-temple-gold text-temple-navy-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Obtener Plan Completo
              <Target className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {openRecipe && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedRecipe(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

          {/* Modal */}
          <div
            className="relative bg-[rgba(0,15,33,0.98)] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-temple-gold hover:text-temple-navy-dark transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 rounded-t-3xl overflow-hidden">
              <img
                src={`${BASE_PATH}${openRecipe.image}`}
                alt={openRecipe.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,15,33,1)] via-[rgba(0,15,33,0.4)] to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-16">
                <div className="flex gap-2 mb-3">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-temple-gold font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {openRecipe.category}
                  </span>
                  <span className="bg-temple-gold/20 backdrop-blur-md border border-temple-gold/30 text-temple-gold font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {openRecipe.difficulty}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{openRecipe.name}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed font-medium border-l-2 border-temple-gold pl-5">
                {openRecipe.description}
              </p>

              {/* Meta + Macros */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="tactical-card !p-4 text-center">
                  <Clock className="w-5 h-5 text-temple-gold mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.time}</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">minutos</span>
                </div>
                <div className="tactical-card !p-4 text-center">
                  <Users className="w-5 h-5 text-temple-gold mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.servings}</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">{openRecipe.servings === 1 ? 'porción' : 'porciones'}</span>
                </div>
                <div className="tactical-card !p-4 text-center">
                  <Flame className="w-5 h-5 text-temple-red mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.macros.calories}</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">kcal</span>
                </div>
                <div className="tactical-card !p-4 text-center">
                  <Zap className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.macros.protein}g</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">proteína</span>
                </div>
                <div className="tactical-card !p-4 text-center">
                  <Droplets className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.macros.fat}g</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">grasa</span>
                </div>
                <div className="tactical-card !p-4 text-center">
                  <Wheat className="w-5 h-5 text-green-400 mx-auto mb-2" />
                  <span className="text-white font-black text-lg">{openRecipe.macros.carbs}g</span>
                  <span className="block text-[9px] text-white/40 uppercase tracking-widest font-bold">carbos</span>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="flex items-center gap-3 text-lg font-black text-white uppercase tracking-tight mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-temple-gold">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  Ingredientes
                </h3>
                <ul className="space-y-2">
                  {openRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-temple-gold mt-2 shrink-0"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h3 className="flex items-center gap-3 text-lg font-black text-white uppercase tracking-tight mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-temple-red">
                    <Target className="w-4 h-4" />
                  </div>
                  Preparación
                </h3>
                <ol className="space-y-4">
                  {openRecipe.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-temple-gold/20 border border-temple-gold/30 flex items-center justify-center text-temple-gold font-black text-xs">
                        {i + 1}
                      </span>
                      <p className="text-sm text-white/80 font-medium leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
