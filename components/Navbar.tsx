'use client';

import Link from 'next/link';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-temple-gold/25 to-black border border-temple-gold/50 flex items-center justify-center shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <span className="font-serif font-black text-temple-gold text-sm group-hover:text-white transition-colors">TF</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest text-white uppercase group-hover:text-temple-gold transition-colors duration-300">
              TEMPLE<span className="text-temple-gold group-hover:text-white transition-colors">FIT</span>
            </h1>
            <p className="hidden sm:block text-[8px] uppercase tracking-[0.25em] text-gray-400 font-extrabold">Centro de Transformación Holística</p>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-gray-300">
          <Link href="/" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">
            Inicio
          </Link>
          <Link href="/escuadrones" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold text-white font-extrabold">
            Escuadrones & Camp
          </Link>
          <Link href="/recetas" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">
            Recetas
          </Link>
          <Link href="/tienda" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">
            Tienda
          </Link>
          <Link href="/trayectoria" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">
            Trayectoria
          </Link>
          <a 
            href="https://katzert.github.io/templefit-wiki/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-temple-gold transition-colors text-gray-400 hover:text-white"
          >
            Wiki
          </a>
          <a 
            href="https://katzert.github.io/templefit-admin/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-3.5 py-1.5 rounded-xl bg-temple-gold/15 border border-temple-gold/40 text-temple-gold hover:bg-temple-gold hover:text-black transition-all text-[11px] font-extrabold uppercase shadow-sm"
          >
            CRM Portal
          </a>
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-temple-gold hover:bg-temple-gold-bright text-black px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-temple-gold/20 hover:scale-105 active:scale-100"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            <span>Unirse al Reto</span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3.5 py-2 border border-white/15 rounded-xl text-temple-gold transition-colors cursor-pointer"
            aria-label="Abrir Menú de Navegación"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="text-[10px] font-black tracking-widest uppercase">Menú</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors py-1">
                Inicio
              </Link>
              <Link href="/escuadrones" onClick={() => setIsOpen(false)} className="text-xs font-black tracking-[0.2em] uppercase text-white hover:text-temple-gold transition-colors bg-white/5 p-3 rounded-xl border border-white/10">
                Escuadrones & Cristofit Camp
              </Link>
              <Link href="/recetas" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors py-1">
                Recetas & Nutrición
              </Link>
              <Link href="/tienda" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors py-1">
                Tienda & Armería
              </Link>
              <Link href="/trayectoria" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors py-1">
                Trayectoria
              </Link>
              
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a 
                  href="https://katzert.github.io/templefit-wiki/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsOpen(false)} 
                  className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors py-1"
                >
                  📖 TempleFit Wiki
                </a>
                <a 
                  href="https://katzert.github.io/templefit-admin/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setIsOpen(false)} 
                  className="text-xs font-extrabold tracking-[0.2em] uppercase text-temple-gold hover:text-white transition-colors py-1"
                >
                  ⚡ Portal CRM Coaches
                </a>
              </div>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center bg-temple-gold hover:bg-temple-gold-bright text-black py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-temple-gold/20"
              >
                Unirme al Reto 21 Días
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
