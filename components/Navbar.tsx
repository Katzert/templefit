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
              <img 
                src="assets/img/logo-tf-abreviado.png" 
                alt="TF" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('templefit')) {
                    target.src = '/templefit/assets/img/logo-tf-abreviado.png';
                  }
                }}
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest text-temple-navy dark:text-temple-navy dark:text-white uppercase group-hover:text-temple-gold transition-colors duration-300">TEMPLE<span className="text-temple-gold">FIT</span></h1>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden lg:flex space-x-6 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-gray-300 items-center">
            <Link href="/" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Inicio</Link>
            <Link href="/escuadrones" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold text-temple-navy dark:text-temple-navy dark:text-white font-extrabold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">
              Escuadrones
            </Link>
            <Link href="/recetas" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Recetas</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Tienda</Link>
            <Link href="/trayectoria" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm">Trayectoria</Link>
          </div>
          
          <ThemeToggle />
          
          <button 
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center bg-black/5 dark:bg-white/5 px-3.5 py-2 border border-black/10 dark:border-white/10 rounded-xl cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 text-amber-700 dark:text-temple-gold mr-1.5" aria-hidden="true" /> : <Menu className="w-5 h-5 text-amber-700 dark:text-temple-gold mr-1.5" aria-hidden="true" />}
            <span className="text-[11px] font-black text-temple-navy dark:text-temple-gold tracking-widest uppercase">MENÚ</span>
          </button>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-temple-gold to-amber-600 text-black px-5 py-2.5 rounded-xl cursor-pointer hover:scale-105 transition-all shadow-md shadow-temple-gold/20 hover:shadow-temple-gold/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            <span className="font-extrabold text-xs uppercase tracking-wider">Unirse al Reto</span>
          </a>
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
            <div className="p-5 flex flex-col space-y-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-slate-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold transition-all">
                Inicio
              </Link>
              <Link href="/escuadrones" onClick={() => setIsOpen(false)} className="flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-black tracking-[0.15em] uppercase text-amber-900 dark:text-temple-gold bg-amber-500/10 dark:bg-temple-gold/10 border border-amber-500/20 dark:border-temple-gold/20 hover:bg-amber-500/20 transition-all">
                Escuadrones & Camp
              </Link>
              <Link href="/recetas" onClick={() => setIsOpen(false)} className="flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-slate-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold transition-all">
                Recetas
              </Link>
              <Link href="/tienda" onClick={() => setIsOpen(false)} className="flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-slate-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold transition-all">
                Tienda
              </Link>
              <Link href="/trayectoria" onClick={() => setIsOpen(false)} className="flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-slate-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold transition-all">
                Trayectoria
              </Link>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 min-h-[48px] flex items-center justify-center gap-2 bg-gradient-to-r from-temple-gold to-amber-600 text-black py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-temple-gold/20 active:scale-98 transition-all"
              >
                <span>Unirme al Reto 21 Días</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
