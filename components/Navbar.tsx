'use client';

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-base text-vintage-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-accent-gold" />
              <span className="font-serif text-2xl font-bold tracking-wider text-accent-gold uppercase">Templefit</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent-gold transition-colors font-medium">Inicio</Link>
            <Link href="/alianzas" className="hover:text-accent-gold transition-colors font-medium">Franquicias</Link>
            <Link href="/tienda" className="hover:text-accent-gold transition-colors font-medium">Tienda</Link>
            <Link href="/dashboard" className="hover:text-accent-gold transition-colors font-medium text-sm opacity-70">Admin</Link>
            <a 
              href="https://wa.me/59169127691" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-rust hover:bg-opacity-90 text-vintage-light px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
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
