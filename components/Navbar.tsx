'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header-glass fixed top-0 w-full z-[100] transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 md:px-8 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-lg p-1">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
              <img src="/assets/img/logo-tf-abreviado.png" alt="TF" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest text-temple-navy dark:text-white uppercase group-hover:text-temple-gold transition-colors duration-300">TEMPLE<span className="text-temple-gold">FIT</span></h1>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden lg:flex space-x-6 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-gray-300 items-center">
            <Link href="/" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Inicio</Link>
            <Link href="/escuadrones" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold text-temple-navy dark:text-white font-extrabold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">
              Escuadrones
            </Link>
            <Link href="/recetas" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Recetas</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Tienda</Link>
            <Link href="/trayectoria" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Trayectoria</Link>
          </div>
          
          <ThemeToggle />
          
          <button 
            className="lg:hidden flex items-center bg-black/5 dark:bg-white/5 px-4 py-2 border border-black/10 dark:border-white/10 rounded-full cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-4 h-4 text-temple-gold mr-1.5" aria-hidden="true" /> : <Menu className="w-4 h-4 text-temple-gold mr-1.5" aria-hidden="true" />}
            <span className="text-[10px] font-bold text-temple-navy dark:text-temple-gold tracking-widest uppercase">MENÚ</span>
          </button>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center bg-gradient-to-r from-temple-gold to-amber-600 text-black px-5 py-2.5 rounded-xl cursor-pointer hover:scale-105 transition-all shadow-md shadow-temple-gold/20 hover:shadow-temple-gold/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold"
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
            className="lg:hidden absolute top-full left-0 w-full bg-[#FBF9F5]/98 dark:bg-[#07090E]/98 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-gray-300 hover:text-temple-gold transition-colors">Inicio</Link>
              <Link href="/trayectoria" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-gray-300 hover:text-temple-gold transition-colors">Trayectoria</Link>
              <Link href="/tienda" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-gray-300 hover:text-temple-gold transition-colors">Tienda</Link>
              <Link href="/recetas" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-700 dark:text-gray-300 hover:text-temple-gold transition-colors">Recetas</Link>
              <Link href="/escuadrones" onClick={() => setIsOpen(false)} className="block text-xs font-black tracking-[0.2em] uppercase text-temple-navy dark:text-white hover:text-temple-gold transition-colors bg-black/5 dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/5">
                Escuadrones & Camp
              </Link>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 block text-center bg-gradient-to-r from-temple-gold to-amber-600 text-black py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-md shadow-temple-gold/20"
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
