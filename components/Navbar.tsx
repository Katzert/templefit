'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Accessibility } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { getAssetPath } from '../lib/utils';

const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/#ofertas', label: 'Ofertas' },
  { href: '/escuadrones', label: 'Escuadrones' },
  { href: '/recetas', label: 'Snack & Recetas' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/trayectoria', label: 'Trayectoria' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);
  const logoUrl = getAssetPath('/assets/img/logo-tf-abreviado.png');

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="header-glass fixed top-0 w-full z-[100] transition-colors duration-300">
        <div className="container mx-auto px-4 py-3 md:px-8 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link href="/" className="flex items-center gap-3 md:gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-lg p-1">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105">
                {!logoFailed ? (
                  <img 
                    src={logoUrl} 
                    alt="TF" 
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!triedFallback) {
                        setTriedFallback(true);
                        target.src = getAssetPath('/assets/img/logo-tf-corona.png');
                      } else {
                        setLogoFailed(true);
                      }
                    }}
                    className="w-full h-full object-contain" 
                  />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xs md:text-sm tracking-tighter shadow-md shadow-amber-500/20">
                    TF
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-black tracking-widest text-temple-navy dark:text-white uppercase group-hover:text-temple-gold transition-colors duration-300">TEMPLE<span className="text-temple-gold">FIT</span></h1>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden lg:flex space-x-6 text-[11px] font-bold uppercase tracking-widest items-center">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    aria-current={active ? 'page' : undefined}
                    className={`pb-1 border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold rounded-sm ${
                      active 
                        ? 'text-amber-800 dark:text-temple-gold border-temple-gold font-black' 
                        : 'text-slate-700 dark:text-gray-300 border-transparent hover:text-temple-gold hover:border-temple-gold font-bold'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            <ThemeToggle />
            
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('toggle-accessibility-widget'));
                }
              }}
              className="min-h-[44px] px-3 py-2 flex items-center gap-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-temple-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
              aria-label="Abrir opciones de accesibilidad"
              title="Opciones de accesibilidad (Alt + A)"
            >
              <Accessibility className="w-5 h-5 text-amber-700 dark:text-temple-gold" aria-hidden="true" />
              <span className="hidden xl:inline-block text-[11px] font-bold uppercase tracking-wider">Accesibilidad</span>
            </button>
            
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

        {/* Mobile Menu Dropdown - Solid Background, No Overlap */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#FBF9F5] dark:bg-[#07090E] border-b border-black/15 dark:border-white/15 shadow-2xl z-[100] max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              <div className="p-5 flex flex-col space-y-2.5 bg-[#FBF9F5] dark:bg-[#07090E]">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-xs tracking-[0.15em] uppercase transition-all ${
                        active
                          ? 'text-amber-900 dark:text-temple-gold bg-amber-500/15 dark:bg-temple-gold/15 border border-amber-500/30 dark:border-temple-gold/30 font-black'
                          : 'text-slate-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold font-bold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <button 
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('toggle-accessibility-widget'));
                    }
                  }} 
                  className="flex items-center gap-2.5 min-h-[44px] px-4 py-2.5 rounded-xl text-xs font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/5 hover:text-amber-600 dark:hover:text-temple-gold transition-all text-left w-full"
                >
                  <Accessibility className="w-4 h-4 text-amber-700 dark:text-temple-gold" aria-hidden="true" />
                  <span>Opciones de Accesibilidad</span>
                </button>
                
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

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 z-[90] backdrop-blur-[2px]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
