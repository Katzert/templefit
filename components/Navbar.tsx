'use client';

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-temple-navy/95 backdrop-blur-xl text-white sticky top-0 z-[100] border-b-4 border-temple-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 border-4 border-temple-navy shadow-[4px_4px_0px_0px_#C5A059] group-hover:rotate-6 transition-transform">
                <Dumbbell className="h-10 w-10 text-temple-navy" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-black tracking-tighter text-white uppercase italic-sport hover-glitch">Temple<span className="text-temple-gold">fit</span></span>
                <span className="text-[7px] font-black tracking-[0.4em] text-temple-gold/60 uppercase">Comando Táctico</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-black uppercase tracking-widest">
            <Link href="/" className="hover:text-temple-gold transition-all hover:scale-110 active:scale-95">Inicio</Link>
            <Link href="/alianzas" className="hover:text-temple-gold transition-all hover:scale-110 active:scale-95">Franquicias</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-all hover:scale-110 active:scale-95">Tienda</Link>
            <Link href="/dashboard" className="hover:text-temple-gold transition-all opacity-40 hover:opacity-100">Panel Inversión</Link>
            <a 
              href="https://wa.me/59169127691" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-temple-red text-white px-8 py-3 -skew-x-12 shadow-[6px_6px_0px_0px_#C5A059] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-white/10"
            >
              MODO OPERATIVO
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-temple-gold p-2"
            >
              {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-temple-navy border-t-4 border-temple-gold p-8 space-y-8 animate-fade-in-up">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-2xl font-black italic-sport text-white hover:text-temple-gold">Inicio</Link>
          <Link href="/alianzas" onClick={() => setIsOpen(false)} className="block text-2xl font-black italic-sport text-white hover:text-temple-gold">Franquicias</Link>
          <Link href="/tienda" onClick={() => setIsOpen(false)} className="block text-2xl font-black italic-sport text-white hover:text-temple-gold">Tienda</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block text-lg font-black text-white/40 italic-sport">Panel Inversión</Link>
          <a 
            href="https://wa.me/59169127691" 
            target="_blank" 
            className="block bg-temple-red text-center text-white py-6 font-black text-xl uppercase tracking-widest -skew-x-12 shadow-[10px_10px_0px_0px_#C5A059]"
          >
            Únete al Reto
          </a>
        </div>
      )}
    </nav>
  );
}
