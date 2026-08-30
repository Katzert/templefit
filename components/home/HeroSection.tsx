'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function HeroSection() {
  return (
    <section className="relative min-h-[92dvh] flex items-center justify-center overflow-hidden px-4 pt-24 pb-16 bg-[#FBF9F5] dark:bg-[#05070B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-temple-gold/15 via-amber-500/10 to-temple-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Master Logo */}
        <motion.div variants={item} className="flex justify-center mb-2">
          <img 
            src="assets/img/logo-tf-corona.png" 
            alt="TempleFit" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('templefit')) {
                target.src = '/templefit/assets/img/logo-tf-corona.png';
              }
            }}
            className="h-32 sm:h-44 md:h-56 lg:h-64 object-contain drop-shadow-[0_4px_25px_rgba(179,134,40,0.25)] dark:drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]" 
          />
        </motion.div>

        {/* Master Slogan Headline */}
        <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight leading-[1.08] text-balance">
          El Cuerpo es el <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-temple-gold to-yellow-500">Templo.</span><br />
          La Mente Crea y <span className="italic font-normal text-slate-700 dark:text-slate-200">Edifica Vidas.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-pretty">
          Entrena tu cuerpo, mejora tu alimentación y fortalece tu fe a través del <strong className="text-temple-navy dark:text-white font-bold">Reto de 21 Días</strong> y los <strong className="text-amber-600 dark:text-temple-gold font-bold">Escuadrones de 12 Atletas</strong>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="https://wa.me/59169127691?text=¡Hola%20Paulo!%20Quiero%20reclamar%20mi%20Semana%20de%20Prueba%20Gratuita%20en%20TempleFit%20y%20conocer%20los%20Escuadrones."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-temple-gold via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-sm md:text-base uppercase tracking-[0.15em] rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>Semana de Prueba Gratis</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#ecosystem"
            className="px-8 py-4 bg-black/5 dark:bg-white/5 text-temple-navy dark:text-white font-bold text-sm md:text-base uppercase tracking-[0.1em] rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Activity size={18} className="text-amber-600 dark:text-temple-gold group-hover:scale-110 transition-transform" />
            <span>Test Diagnóstico</span>
          </a>
        </motion.div>

        {/* Social Proof Counters */}
        <motion.div variants={item} className="grid grid-cols-3 max-w-2xl mx-auto pt-10 mt-6 border-t border-black/10 dark:border-white/10">
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-amber-600 dark:text-temple-gold">21</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 dark:text-gray-400 tracking-[0.2em]">Días de Reto</p>
          </div>
          <div className="space-y-1 border-x border-black/10 dark:border-white/10">
            <p className="text-3xl md:text-4xl font-black text-temple-navy dark:text-white">12</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 dark:text-gray-400 tracking-[0.2em]">Por Escuadrón</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400">06:00</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 dark:text-gray-400 tracking-[0.2em]">CristoFit Camp</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
