'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden px-4">
      {/* Background with parallax and elegant dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter brightness-75 scale-105 transform animate-float"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)' }}
      />
      <div className="absolute inset-0 bg-temple-cream/90 dark:bg-white dark:bg-black/5 dark:bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-temple-cream via-transparent to-temple-cream/80 dark:from-[#05070B] dark:via-transparent dark:to-[#05070B]/80 z-10"></div>
      
      {/* Dynamic light accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-temple-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 pt-16">
        

        {/* Master Slogan Headline */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <img src="/assets/img/logo-tf-corona.png" alt="TempleFit" className="h-40 md:h-56 lg:h-72 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-pulse-slow" />
        </motion.div>
        <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-8xl font-serif font-black uppercase text-slate-900 dark:text-white tracking-tight leading-[1.05] drop-shadow-2xl text-balance">
          El Cuerpo es el <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-temple-gold-bright via-temple-cream to-temple-gold drop-shadow-none">Templo.</span><br />
          La Mente Crea y <span className="italic font-light text-slate-700 dark:text-white/90">Edifica Vidas.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed text-pretty">
          Entrena tu cuerpo, mejora tu alimentación y fortalece tu fe a través del <strong className="text-slate-900 dark:text-white font-bold drop-shadow-md">Reto de 21 Días</strong> y los <strong className="text-temple-gold-bright font-bold">Escuadrones de 12 Atletas</strong>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
          <a
            href="https://wa.me/59169127691?text=¡Hola%20Paulo!%20Quiero%20reclamar%20mi%20Semana%20de%20Prueba%20Gratuita%20en%20TempleFit%20y%20conocer%20los%20Escuadrones."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-600 text-black font-black text-sm md:text-base uppercase tracking-[0.2em] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500 hover:scale-105 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold focus-visible:ring-offset-2 focus-visible:ring-offset-temple-cream dark:focus-visible:ring-offset-[#05070B] gap-3"
          >
            <span>Semana de Prueba Gratis</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#ecosystem"
            className="px-8 py-4 bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white font-bold text-sm md:text-base uppercase tracking-[0.1em] rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold focus-visible:ring-offset-2 focus-visible:ring-offset-temple-cream dark:focus-visible:ring-offset-[#05070B] flex items-center justify-center gap-3 group"
          >
            <Activity size={18} className="text-temple-gold group-hover:scale-110 transition-transform" />
            <span>Test Diagnóstico</span>
          </a>
        </motion.div>

        {/* Social Proof Counters */}
        <motion.div variants={item} className="grid grid-cols-3 max-w-2xl mx-auto pt-14 mt-8 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-temple-gold-bright drop-shadow-lg">21</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-[0.2em]">Días de Reto</p>
          </div>
          <div className="space-y-1 border-x border-white/5">
            <p className="text-3xl md:text-4xl font-black text-temple-navy dark:text-white drop-shadow-lg">12</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-[0.2em]">Por Escuadrón</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-black text-emerald-400 drop-shadow-lg">06:00</p>
            <p className="text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-[0.2em]">CristoFit Camp</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
