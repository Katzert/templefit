import Link from 'next/link';
import { Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-temple-navy border-t-8 border-temple-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/templefit/dashboard/bg_dynamic.png')] bg-fixed pointer-events-none"></div>
        
        <div className="container mx-auto px-6 space-y-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                {/* Brand Column */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="flex flex-col space-y-6">
                        <h5 className="text-6xl md:text-8xl font-serif italic-sport text-white uppercase font-black tracking-tighter hover-glitch">TEMPLE<span className="text-temple-gold">FIT</span></h5>
                        <div className="h-3 w-48 bg-temple-red -skew-x-12 shadow-[6px_6px_0px_0px_#C5A059]"></div>
                        <p className="text-[10px] md:text-sm tracking-[1em] uppercase opacity-40 font-black text-white">ATLETAS VALIENTES ● NEGOCIOS DIVINOS</p>
                    </div>
                    <p className="text-xl md:text-2xl text-white/60 font-bold uppercase italic-sport border-l-4 border-temple-gold pl-6 leading-tight">
                        Centro de Transformación integral: Forjando atletas íntegros en cuerpo, mente y espíritu desde el corazón de la comunidad.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="w-14 h-14 bg-white/5 border-2 border-white/10 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12 shadow-[4px_4px_0px_0px_#D32F2F] hover:shadow-none"><Instagram className="h-6 w-6" /></a>
                        <a href="#" className="w-14 h-14 bg-white/5 border-2 border-white/10 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12 shadow-[4px_4px_0px_0px_#D32F2F] hover:shadow-none"><Facebook className="h-6 w-6" /></a>
                        <a href="#" className="w-14 h-14 bg-white/5 border-2 border-white/10 flex items-center justify-center hover:bg-temple-gold hover:text-temple-navy transition-all -skew-x-12 shadow-[4px_4px_0px_0px_#D32F2F] hover:shadow-none"><Youtube className="h-6 w-6" /></a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="lg:col-span-3 space-y-10">
                    <h3 className="text-2xl font-black text-temple-gold uppercase tracking-[0.3em] italic-sport">NAVEGACIÓN</h3>
                    <ul className="space-y-6 text-xl font-black uppercase tracking-tighter text-white/80">
                        <li><Link href="/" className="hover:text-temple-gold transition-all flex items-center gap-4 group hover:translate-x-2"><span className="w-4 h-4 bg-temple-red -skew-x-12 opacity-0 group-hover:opacity-100 transition-all"></span>Inicio</Link></li>
                        <li><Link href="/alianzas" className="hover:text-temple-gold transition-all flex items-center gap-4 group hover:translate-x-2"><span className="w-4 h-4 bg-temple-red -skew-x-12 opacity-0 group-hover:opacity-100 transition-all"></span>Franquicias</Link></li>
                        <li><Link href="/tienda" className="hover:text-temple-gold transition-all flex items-center gap-4 group hover:translate-x-2"><span className="w-4 h-4 bg-temple-red -skew-x-12 opacity-0 group-hover:opacity-100 transition-all"></span>Tienda</Link></li>
                        <li><Link href="/dashboard" className="hover:text-temple-gold transition-all opacity-40 hover:opacity-100 flex items-center gap-4 group hover:translate-x-2"><span className="w-4 h-4 bg-temple-red -skew-x-12 opacity-0 group-hover:opacity-100 transition-all"></span>Inversores</Link></li>
                    </ul>
                </div>

                {/* Values */}
                <div className="lg:col-span-4 space-y-10">
                    <h3 className="text-2xl font-black text-temple-gold uppercase tracking-[0.3em] italic-sport">NUESTRA REGLA</h3>
                    <div className="brutalist-card p-10 bg-temple-navy/50 border-white/10 !shadow-[10px_10px_0px_0px_#C5A059]">
                        <p className="text-2xl md:text-3xl text-white italic font-black leading-tight uppercase italic-sport">
                            &quot;Todo lo que hagan, háganlo de corazón, como para el Señor.&quot;
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[12px] opacity-20 uppercase font-black tracking-[0.6em] gap-12 text-white">
                <p>&copy; 2026 TEMPLEFIT S.R.L. - ELITE TRAINING DIVISION</p>
                <div className="flex gap-16">
                    <span>BOLIVIA HQ</span>
                    <span>ESTRATEGIA GLOBAL</span>
                </div>
            </div>
        </div>
    </footer>
  );
}
