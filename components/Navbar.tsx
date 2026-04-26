'use client';

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-vibrant-navy text-temple-cream shadow-2xl sticky top-0 z-50 border-b border-temple-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Dumbbell className="h-9 w-9 text-temple-gold animate-logo-glow" />
              <span className="font-serif text-2xl font-bold tracking-widest text-temple-gold uppercase italic-sport">Templefit</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="hover:text-temple-gold transition-all font-bold uppercase tracking-tighter hover:scale-110 active:scale-95">Inicio</Link>
            <Link href="/alianzas" className="hover:text-temple-gold transition-all font-bold uppercase tracking-tighter hover:scale-110 active:scale-95">Franquicias</Link>
            <Link href="/tienda" className="hover:text-temple-gold transition-all font-bold uppercase tracking-tighter hover:scale-110 active:scale-95">Tienda</Link>
            <Link href="/dashboard" className="hover:text-temple-gold transition-all font-bold uppercase tracking-tighter opacity-50 hover:opacity-100">Admin</Link>
            <a 
              href="https://wa.me/59169127691" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-temple-red hover:bg-opacity-90 text-temple-cream px-8 py-2.5 rounded-none font-black uppercase tracking-widest skew-btn shadow-[5px_5px_0px_0px_#C5A059] hover:shadow-none transition-all"
            >
              Únete al Reto
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-vintage-light hover:text-accent-gold"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-base border-t border-accent-gold/10 px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-accent-gold transition-colors font-medium">Inicio</Link>
          <Link href="/alianzas" onClick={() => setIsOpen(false)} className="block hover:text-accent-gold transition-colors font-medium">Franquicias</Link>
          <Link href="/tienda" onClick={() => setIsOpen(false)} className="block hover:text-accent-gold transition-colors font-medium">Tienda</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block hover:text-accent-gold transition-colors font-medium opacity-70">Admin</Link>
          <a 
            href="https://wa.me/59169127691" 
            target="_blank" 
            className="block bg-accent-rust text-center text-vintage-light px-6 py-2 rounded-full font-bold"
          >
            Únete al Reto
          </a>
        </div>
      )}
    </nav>
  );
}
