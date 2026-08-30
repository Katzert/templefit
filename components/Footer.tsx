import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';


const WHATSAPP_URL = 'https://wa.me/59169127691?text=Hola%20TempleFit!%20Quiero%20mas%20informacion';

export default function Footer() {
  return (
    <footer className="relative bg-[#FBF9F5] dark:bg-[#05070B] text-temple-navy dark:text-white pt-20 pb-10 border-t border-[#E8E2D5] dark:border-white/5 overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-temple-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col space-y-4">
              <img src="/assets/img/logo-tf-gestion.png" alt="TempleFit Logo Completo" className="h-16 md:h-20 object-contain drop-shadow-[0_2px_10px_rgba(0,33,71,0.1)] dark:drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
            </div>
            <p className="text-xs md:text-sm text-slate-700 dark:text-gray-300 max-w-sm mb-6 leading-relaxed font-medium">
              El Cuerpo es el Templo. La Mente Crea y Edifica Vidas.
            </p>
            <p className="text-sm text-slate-600 dark:text-gray-400 font-normal leading-relaxed border-l-2 border-temple-gold pl-4">
              Centro de Transformación Holística: Forjando atletas íntegros en cuerpo, mente y espíritu desde el corazón de Santa Cruz, Bolivia.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                title="WhatsApp Directo"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-temple-gold/15 hover:border-temple-gold/50 text-amber-800 dark:text-temple-gold-bright transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold"
                title="Instagram Oficial"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-blue-500/15 hover:border-blue-500/50 text-blue-700 dark:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Ir a Facebook de TempleFit"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black text-temple-navy dark:text-white uppercase tracking-[0.25em]">Navegación</h3>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-gray-400">
              <li><Link href="/escuadrones" className="hover:text-temple-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-temple-gold rounded-sm">CristoFit Camp</Link></li>
              <li><Link href="/recetas" className="hover:text-temple-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-temple-gold rounded-sm">Nutrición & Salud</Link></li>
              <li><Link href="/tienda" className="hover:text-temple-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-temple-gold rounded-sm">Tienda</Link></li>
              <li><Link href="/trayectoria" className="hover:text-temple-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-temple-gold rounded-sm">Trayectoria</Link></li>
              <li><a href="https://katzert.github.io/templefit-wiki/" target="_blank" rel="noopener noreferrer" className="hover:text-temple-navy dark:hover:text-white transition-colors text-slate-500 dark:text-gray-500">TempleFit Wiki</a></li>
              <li><a href="https://katzert.github.io/templefit-admin/" target="_blank" rel="noopener noreferrer" className="hover:text-temple-gold transition-colors text-temple-gold font-black">Portal CRM</a></li>
            </ul>
          </div>

          {/* Core Rule */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-black text-temple-navy dark:text-white uppercase tracking-[0.25em]">Nuestra Regla</h3>
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-[#E8E2D5] dark:border-white/5 hover:border-temple-gold/40 transition-colors shadow-sm">
              <p className="text-base text-slate-800 dark:text-gray-300 font-serif italic leading-relaxed">
                &quot;Todo lo que hagan, háganlo de corazón, como para el Señor.&quot;
              </p>
              <p className="text-[10px] text-amber-800 dark:text-temple-gold-bright uppercase tracking-[0.3em] mt-4 font-black">— Colosenses 3:23</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-500 dark:text-gray-600 uppercase font-black tracking-[0.3em] gap-4">
          <p>&copy; 2026 TempleFit • Santa Cruz, Bolivia</p>
          <div className="flex gap-6">
            <span className="text-temple-gold">Valores Eternos</span>
            <span>Atletas Valientes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
