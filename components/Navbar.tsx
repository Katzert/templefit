'use client';

import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';


const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header-glass fixed top-0 w-full z-[100]">
      <div className="container mx-auto px-4 py-2 md:px-6 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-temple-gold/10 border border-temple-gold/40 flex items-center justify-center shrink-0 rounded-xl transition-transform group-hover:scale-105">
              <span className="font-serif font-black text-temple-gold text-sm">TF</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-black tracking-wider text-white uppercase">TEMPLE<span className="text-temple-gold">FIT</span></h1>
              <p className="hidden sm:block text-[8px] uppercase tracking-[0.2em] text-gray-400 font-medium">Centro de Transformación Holística</p>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-6 text-[11px] font-extrabold uppercase tracking-widest text-white items-center">
            <Link href="/" className="hover:text-temple-gold transition-colors pb-1">Inicio</Link>
            <Link href="/trayectoria" className="hover:text-temple-gold transition-colors pb-1">Trayectoria</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-colors pb-1">Tienda</Link>
            <Link href="/recetas" className="hover:text-temple-gold transition-colors pb-1">Recetas</Link>
            

          </div>
          
          <div className="md:hidden flex items-center bg-temple-gold/20 px-3 py-1.5 border border-temple-gold/30 rounded-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-4 h-4 text-temple-gold mr-1" /> : <Menu className="w-4 h-4 text-temple-gold mr-1" />}
            <span className="text-[10px] font-bold text-temple-gold">MENU</span>
          </div>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center bg-gradient-to-r from-temple-gold to-amber-500 text-black px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all shadow-md"
          >
            <span className="w-2 h-2 bg-black rounded-full mr-2.5 animate-pulse"></span>
            <span className="text-[10px] font-extrabold tracking-widest uppercase">UNIRSE AL RETO</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-xs font-extrabold tracking-widest uppercase text-white hover:text-temple-gold">Inicio</Link>
          <Link href="/trayectoria" onClick={() => setIsOpen(false)} className="block text-xs font-extrabold tracking-widest uppercase text-white hover:text-temple-gold">Trayectoria</Link>
          <Link href="/tienda" onClick={() => setIsOpen(false)} className="block text-xs font-extrabold tracking-widest uppercase text-white hover:text-temple-gold">Tienda</Link>
          <Link href="/recetas" onClick={() => setIsOpen(false)} className="block text-xs font-extrabold tracking-widest uppercase text-white hover:text-temple-gold">Recetas</Link>
          

          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-temple-gold text-black py-3 rounded-xl font-extrabold text-xs uppercase tracking-widest shadow-md"
          >
            Unirme al Reto 21 Días
          </a>
        </div>
      )}
    </nav>
  );
}
