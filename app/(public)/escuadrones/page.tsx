'use client';

import { motion } from 'framer-motion';
import { Users, Shield, Sword, Award, ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function EscuadronesPage() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-24 font-sans pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A]/80 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/10 border border-temple-gold/30 backdrop-blur-sm">
            <Users className="text-temple-gold" size={16} />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-temple-gold">Comunidad & Liderazgo</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-serif font-black uppercase text-white tracking-tight leading-none">
            ESCUADRONES <span className="text-temple-gold block mt-2">& CRISTOFIT CAMP</span>
          </motion.h1>

          <motion.p variants={item} className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            No entrenas solo. En TempleFit te asignamos a un <span className="text-temple-gold font-bold">Escuadrón Táctico</span> (máximo 12 atletas) para garantizar apoyo, retención y resultados radicales.
          </motion.p>
        </div>
      </section>

      {/* The 12 Athlete Rule Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={item} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-black uppercase text-white tracking-tight mb-4">
                La Regla de los <span className="text-temple-gold">12</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Jesús lideró a 12. Nosotros replicamos ese modelo de intimidad y discipulado en el entrenamiento físico. Tu escuadrón es tu círculo de fuego.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Protección Mutua", desc: "Nadie se rinde. Si faltas 3 días, tu escuadrón va por ti." },
                { icon: Sword, title: "Competitividad Sana", desc: "Sube de nivel comparando tus métricas semanales." },
                { icon: Users, title: "Liderazgo", desc: "Cada escuadrón tiene un Capitán rotativo." },
                { icon: Award, title: "Recompensas", desc: "Premios exclusivos para el Escuadrón del Mes." }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-temple-gold/40 transition-colors group">
                  <div className="w-10 h-10 bg-temple-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-temple-gold" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">{feature.title}</h3>
                  <p className="text-xs text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-temple-gold/20 to-transparent blur-3xl opacity-50 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop" 
              alt="Escuadrón Entrenando"
              className="relative w-full h-[600px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-temple-gold uppercase tracking-widest mb-1">Capacidad Máxima</p>
                  <p className="text-2xl font-black text-white">12 Atletas / Grupo</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-temple-gold border-dashed flex items-center justify-center">
                  <span className="text-temple-gold font-black">12</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CristoFit Camp Section */}
      <section className="relative py-24 bg-[#050505]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={item} className="space-y-6 max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black uppercase text-white tracking-tight">
              CristoFit <span className="text-temple-gold">Camp</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Cada sábado, todos los escuadrones se reúnen para un entrenamiento masivo. Es donde el físico se quiebra y el espíritu se levanta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop", title: "Entrenamiento Funcional Extremo" },
              { img: "https://images.unsplash.com/photo-1526506114620-302a981a3d00?q=80&w=2070&auto=format&fit=crop", title: "Retos de Escuadrón" },
              { img: "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=2070&auto=format&fit=crop", title: "Comunión y Snack Bar" }
            ].map((camp, i) => (
              <motion.div key={i} variants={item} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
                <img src={camp.img} alt={camp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{camp.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-16 flex flex-col items-center gap-4">
            <a 
              href="https://wa.me/59169127691?text=Hola%20TempleFit!%20Quisiera%20informaci%C3%B3n%20sobre%20las%20evaluaciones%20de%20Medicina%20Preventiva%20y%20Centro%20de%20Entrenamiento%20Espiritual."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-temple-gold to-amber-600 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <MapPin size={20} />
              Unirse al Próximo Camp
            </a>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Cupos limitados por escuadrón</p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
