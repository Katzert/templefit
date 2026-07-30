'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header-glass fixed top-0 w-full z-[100] border-b border-white/5 shadow-2xl shadow-black/50">
      <div className="container mx-auto px-4 py-3 md:px-8 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-temple-gold/20 to-black border border-temple-gold/40 flex items-center justify-center shrink-0 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <span className="font-serif font-black text-temple-gold text-sm group-hover:text-white transition-colors">TF</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest text-white uppercase group-hover:text-temple-gold transition-colors duration-300">TEMPLE<span className="text-temple-gold group-hover:text-white transition-colors">FIT</span></h1>
              <p className="hidden sm:block text-[8px] uppercase tracking-[0.25em] text-gray-400 font-medium">Centro de Transformación Holística</p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-300 items-center">
            <Link href="/" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">Inicio</Link>
            <Link href="/trayectoria" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">Trayectoria</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">Tienda</Link>
            <Link href="/recetas" className="hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold">Recetas</Link>
            <Link href="/escuadrones" className="flex items-center gap-1 hover:text-temple-gold transition-colors pb-1 border-b border-transparent hover:border-temple-gold text-white font-extrabold">
              Escuadrones
            </Link>
          </div>
          
          <div className="lg:hidden flex items-center bg-white/5 px-4 py-2 border border-white/10 rounded-full cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-4 h-4 text-temple-gold mr-1.5" /> : <Menu className="w-4 h-4 text-temple-gold mr-1.5" />}
            <span className="text-[10px] font-bold text-temple-gold tracking-widest uppercase">MENÚ</span>
          </div>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center bg-gradient-to-r from-temple-gold to-amber-600 text-black px-5 py-2.5 rounded-xl cursor-pointer hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full mr-2.5 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.15em] uppercase">UNIRSE AL RETO</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-5">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors">Inicio</Link>
              <Link href="/trayectoria" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors">Trayectoria</Link>
              <Link href="/tienda" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors">Tienda</Link>
              <Link href="/recetas" onClick={() => setIsOpen(false)} className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-temple-gold transition-colors">Recetas</Link>
              <Link href="/escuadrones" onClick={() => setIsOpen(false)} className="block text-xs font-black tracking-[0.2em] uppercase text-white hover:text-temple-gold transition-colors bg-white/5 p-3 rounded-lg border border-white/5">
                Escuadrones & Camp
              </Link>
              
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 block text-center bg-gradient-to-r from-temple-gold to-amber-600 text-black py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.3)]"
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
