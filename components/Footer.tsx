import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const ADMIN_URL = 'https://katzert.github.io/templefit-admin/';
const WHATSAPP_URL = 'https://wa.me/59170000000?text=Hola%20Paulo!%20Quiero%20mas%20informacion';

export default function Footer() {
  return (
    <footer className="py-16 bg-[#05070B] border-t border-temple-gold/30 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col space-y-2">
              <h5 className="text-4xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
                TEMPLE<span className="text-temple-gold">FIT</span>
              </h5>
              <p className="text-[10px] tracking-[0.3em] uppercase font-extrabold text-temple-gold">
                Mente • Cuerpo • Espíritu
              </p>
            </div>
            <p className="text-sm text-gray-300 font-light leading-relaxed border-l-2 border-temple-gold pl-4">
              Centro de Transformación Holística: Forjando atletas íntegros en cuerpo, mente y espíritu desde el corazón de Santa Cruz, Bolivia.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 transition"
                title="WhatsApp Directo"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-temple-gold/20 hover:border-temple-gold/40 text-temple-gold transition"
                title="Instagram Oficial"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-temple-gold/20 hover:border-temple-gold/40 text-temple-gold transition"
                title="Facebook Oficial"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-extrabold text-temple-gold uppercase tracking-[0.25em]">Navegación</h3>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-gray-300">
              <li><Link href="/" className="hover:text-temple-gold transition">Inicio</Link></li>
              <li><Link href="/franquicias" className="hover:text-temple-gold transition">Franquicias</Link></li>
              <li><Link href="/alianzas" className="hover:text-temple-gold transition">Alianzas Estratégicas</Link></li>
              <li><Link href="/tienda" className="hover:text-temple-gold transition">Tienda</Link></li>
              <li><Link href="/recetas" className="hover:text-temple-gold transition">Recetas Bio-optimizadas</Link></li>
              <li><Link href="/neuro-ventas" className="hover:text-temple-gold transition">Neuro Ventas</Link></li>
              <li><a href={ADMIN_URL} className="text-temple-gold hover:text-white transition">Portal CRM Instructores ↗</a></li>
            </ul>
          </div>

          {/* Core Rule */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-extrabold text-temple-gold uppercase tracking-[0.25em]">Nuestra Regla</h3>
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <p className="text-lg text-white font-serif italic leading-relaxed">
                &quot;Todo lo que hagan, háganlo de corazón, como para el Señor.&quot;
              </p>
              <p className="text-xs text-temple-gold uppercase tracking-widest mt-3 font-bold">— Colosenses 3:23</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase font-bold tracking-[0.25em] gap-4">
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
