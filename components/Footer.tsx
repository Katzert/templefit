import Link from 'next/link';
import { Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-temple-navy text-temple-cream py-20 border-t-4 border-temple-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Dumbbell className="h-10 w-10 text-temple-gold animate-logo-glow" />
              <span className="font-serif text-3xl font-black text-temple-gold uppercase italic-sport tracking-widest">Templefit</span>
            </div>
            <p className="text-lg opacity-60 leading-relaxed font-light">
              Centro de Transformación integral: Forjando atletas íntegros en cuerpo, mente y espíritu desde el corazón de la comunidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-black text-white uppercase italic-sport border-b-2 border-temple-gold inline-block pb-1">Navegación</h3>
            <ul className="space-y-4 text-lg font-bold uppercase tracking-tighter">
              <li><Link href="/" className="hover:text-temple-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-0.5 bg-temple-gold transition-all"></span>Reto 21 Días</Link></li>
              <li><Link href="/alianzas" className="hover:text-temple-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-0.5 bg-temple-gold transition-all"></span>Franquicias</Link></li>
              <li><Link href="/tienda" className="hover:text-temple-gold transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-0.5 bg-temple-gold transition-all"></span>Tienda</Link></li>
              <li><Link href="/dashboard" className="hover:text-temple-gold transition-colors opacity-30 hover:opacity-100 flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-0.5 bg-temple-gold transition-all"></span>Admin Dashboard</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-black text-white uppercase italic-sport border-b-2 border-temple-gold inline-block pb-1">Nuestra Regla</h3>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-temple-red -skew-x-12"></div>
              <p className="text-xl opacity-80 italic font-medium pl-4 leading-relaxed tracking-tight">
                &quot;Todo lo que hagan, háganlo de corazón, como para el Señor y no para los hombres.&quot;
              </p>
            </div>
            <p className="text-sm opacity-40 font-black uppercase tracking-widest pt-8 border-t border-white/10">
              © 2026 Templefit Victory Dashboard. Premium Elite Division.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
