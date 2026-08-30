'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Coffee, Brain, ChevronRight, X, CheckCircle, Send } from 'lucide-react';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const triEcosystemUnits = [
  {
    id: 1,
    title: "1. GYM: Calistenia, Crossfit & Boxeo",
    tag: "Fuerza & Rendimiento",
    icon: <Dumbbell size={32} className="text-temple-gold" />,
    subtitle: "Cuerpo Físico: Fuerza y Resistencia",
    description: "Entrenamiento de fuerza y acondicionamiento físico. Incluye calistenia, crossfit y boxeo para mejorar tu condición física.",
    features: [
      "Jaula de calistenia y anillas olímpicas",
      "Escuadrones Tácticos (Máx. 12 atletas)",
      "CristoFit Camp Sábados 06:00 AM",
      "Entrenadores especializados"
    ],
    whatsappAction: "Hola Paulo! Quiero información sobre los entrenamientos de GYM en TempleFit."
  },
  {
    id: 2,
    title: "2. Snack Bar & Nutrición Funcional",
    tag: "Alianza Abuela Fit",
    icon: <Coffee size={32} className="text-amber-400" />,
    subtitle: "Bebidas Botánicas y Proteína Limpia",
    description: "Infusiones antiinflamatorias, batidos de proteína aislada y repostería saludable para la recuperación.",
    features: [
      "Infusiones botánicas con miel pura",
      "Batidos proteicos sin azúcares refinados",
      "Panadería saludable (Sin levadura)",
      "20% OFF para atletas de escuadrón"
    ],
    whatsappAction: "Hola Paulo! Quiero conocer el menú del Snack Bar de TempleFit."
  },
  {
    id: 3,
    title: "3. Neuro-Entrenamiento & Espíritu",
    tag: "Cuerpo, Mente & Espíritu",
    icon: <Brain size={32} className="text-emerald-400" />,
    subtitle: "Mente: Nutrición y Enfoque",
    description: "Nutrición orientada al rendimiento, suplementación y entrenamiento en ventas y liderazgo.",
    features: [
      "Neuro-Entrenamiento en Ventas",
      "Respiración anti-estrés (Método Buteyko)",
      "Club de lectura bíblica y mentoría",
      "Evaluaciones preventivas"
    ],
    whatsappAction: "Hola Paulo! Quiero información sobre los programas de Salud Integral y Neuro-Entrenamiento."
  }
];

export default function EcosystemSection() {
  const [activeUnitModal, setActiveUnitModal] = useState<number | null>(null);

  const openUnitWhatsApp = (text: string) => {
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="ecosistema" className="max-w-7xl mx-auto px-4 py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-temple-gold/5 dark:bg-temple-navy-dark/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center space-y-4 mb-20 relative z-10">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 dark:border-temple-gold/20 text-temple-gold-dark dark:text-temple-gold-bright text-[10px] font-black uppercase tracking-[0.3em]">
          EL TRI-ECOSISTEMA TEMPLEFIT
        </motion.div>
        <motion.h2 variants={item} className="text-4xl md:text-6xl font-serif font-black uppercase text-slate-900 dark:text-white tracking-tight text-balance">
          Tres Ejes de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">Transformación</span>
        </motion.h2>
        <motion.p variants={item} className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed text-pretty">
          Entrenamiento de fuerza, nutrición celular y devoción espiritual en un solo lugar, diseñado para forjar atletas completos.
        </motion.p>
      </div>

      <div className="bento-grid relative z-10">
        {triEcosystemUnits.map((unit, i) => (
          <motion.button 
            key={i} 
            variants={item} 
            onClick={() => setActiveUnitModal(i)}
            className={`tactical-card group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold focus-visible:ring-offset-2 focus-visible:ring-offset-temple-cream dark:focus-visible:ring-offset-[#05070B] w-full block ${i === 0 ? 'md:col-span-2' : 'md:col-span-2'}`}
            aria-label={`Ver detalles sobre ${unit.title}`}
          >
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-white dark:bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/5 group-hover:bg-temple-gold/10 dark:group-hover:bg-white/5 group-hover:scale-110 transition-all duration-500 shadow-inner">
                  {unit.icon}
                </div>
                <span className="text-[9px] uppercase font-black tracking-widest px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-amber-800 dark:text-temple-gold group-hover:border-temple-gold/50 transition-colors">
                  {unit.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-temple-gold transition-colors duration-300">{unit.title}</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-light mb-8 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors">{unit.description}</p>
            </div>

            <div className="pt-5 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-temple-gold-bright group-hover:translate-x-2 transition-transform duration-300">
              <span className="tracking-wider uppercase">Ver Protocolo</span>
              <ChevronRight size={18} className="group-hover:scale-125 transition-transform" aria-hidden="true" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Unit Detail Modal */}
      <AnimatePresence>
        {activeUnitModal !== null && (
          <div className="fixed inset-0 z-[110] bg-slate-950/60 dark:bg-[#05070B]/90 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="bg-white dark:bg-[#0A0E17] border border-black/10 dark:border-temple-gold/30 rounded-[2rem] max-w-2xl w-full max-h-[90dvh] overflow-y-auto custom-scrollbar p-6 md:p-10 relative space-y-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveUnitModal(null)}
                className="absolute top-6 right-6 min-w-[44px] min-h-[44px] p-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
                aria-label="Cerrar detalle del ecosistema"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="flex items-start md:items-center gap-5 flex-col md:flex-row">
                <div className="p-5 rounded-2xl bg-white dark:bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 shadow-inner">
                  {triEcosystemUnits[activeUnitModal].icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 rounded-full text-amber-800 dark:text-temple-gold mb-3 inline-block">
                    {triEcosystemUnits[activeUnitModal].tag}
                  </span>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white">{triEcosystemUnits[activeUnitModal].title}</h3>
                </div>
              </div>

              <div className="space-y-3 bg-white dark:bg-black/5 dark:bg-white/5 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h4 className="text-sm font-black text-amber-800 dark:text-temple-gold uppercase tracking-widest">{triEcosystemUnits[activeUnitModal].subtitle}</h4>
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed font-light">{triEcosystemUnits[activeUnitModal].description}</p>
              </div>

              <div className="space-y-4">
                <h5 className="text-xs font-black text-slate-500 dark:text-white/50 uppercase tracking-widest pl-1">¿Qué incluye este pilar?</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {triEcosystemUnits[activeUnitModal].features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-black/[0.03] dark:bg-black/30 p-4 rounded-xl border border-black/5 dark:border-white/5 text-sm text-slate-700 dark:text-gray-300 hover:border-temple-gold/30 transition-colors">
                      <CheckCircle size={18} className="text-amber-600 dark:text-temple-gold-bright shrink-0 mt-0.5" />
                      <span className="font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const actionText = triEcosystemUnits[activeUnitModal].whatsappAction;
                    setActiveUnitModal(null);
                    openUnitWhatsApp(actionText);
                  }}
                  className="flex-1 py-4 bg-gradient-to-r from-temple-gold to-amber-600 hover:from-temple-gold-bright hover:to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold"
                >
                  <Send size={18} />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
