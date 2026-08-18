'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Sword, 
  Award, 
  ChevronRight, 
  MapPin, 
  Flame, 
  Sparkles, 
  Clock, 
  Sun, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function EscuadronesPage() {
  const WHATSAPP_CAMP = 'https://wa.me/59169127691?text=¡Hola%20Paulo!%20Quiero%20postular%20a%20un%20Escuadrón%20de%20TempleFit%20y%20asistir%20al%20CristoFit%20Camp.';

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-24 font-sans pt-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105 transform hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/80 to-[#07090E]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/10 border border-temple-gold/30 backdrop-blur-sm">
            <Users className="text-temple-gold" size={16} />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-temple-gold">Comunidad & Liderazgo Táctico</span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl font-serif font-black uppercase text-white tracking-tight leading-tight">
            LOS 25 ESCUADRONES <span className="text-temple-gold block">& CRISTOFIT CAMP</span>
          </motion.h1>

          <motion.p variants={item} className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Nadie entrena aislado. En TempleFit aplicamos la <strong className="text-white font-bold">Regla de los 12</strong>: 
            grupos tácticos de máximo 12 atletas para garantizar compañerismo, rendición de cuentas y transformación integral.
          </motion.p>
        </div>
      </section>

      {/* The 12 Athlete Rule Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={item} className="space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full border border-temple-gold/20">
                Estructura Bíblica & Disciplina
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white tracking-tight mt-3 mb-4">
                La Regla de los <span className="text-temple-gold">12 Atletas</span>
              </h2>
              <p className="text-gray-300 leading-relaxed font-light text-sm md:text-base">
                Inspirados en el modelo de Jesús con sus 12 discípulos, organizamos a nuestra comunidad en 
                <strong className="text-white font-bold"> 25 Escuadrones de 12 personas</strong> (Meta anual de 300 atletas certificados). 
                Tu escuadrón es tu círculo de rendición de cuentas: celebran tus victorias y te rescatan si flaqueas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Rendición de Cuentas", desc: "Si faltas a entrenar 3 días seguidos, tu escuadrón te busca y te respalda." },
                { icon: Sword, title: "Competencia Ética", desc: "Supera tus marcas personales de calistenia y crossfit junto a tus hermanos de equipo." },
                { icon: Users, title: "Capitán de Escuadrón", desc: "Cada brigada cuenta con un líder asignado para coordinar asistencia y oración." },
                { icon: Award, title: "Certificación Anual", desc: "Reconocimiento y graduación como Atleta Íntegro al completar el ciclo." }
              ].map((feature, i) => (
                <div key={i} className="bg-[#0E1424]/90 border border-white/10 p-6 rounded-3xl hover:border-temple-gold/40 transition-colors group shadow-lg">
                  <div className="w-10 h-10 bg-temple-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="text-temple-gold" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">{feature.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-temple-gold/20 to-transparent blur-3xl opacity-50 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop" 
              alt="Escuadrón Entrenando"
              className="relative w-full h-[520px] object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#07090E]/80 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-temple-gold uppercase tracking-widest mb-1">Capacidad Máxima por Grupo</p>
                  <p className="text-2xl font-black text-white">12 Atletas por Escuadrón</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-temple-gold border-dashed flex items-center justify-center bg-temple-gold/10">
                  <span className="text-temple-gold font-black text-lg">12</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 3 Phases of Ascension */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full border border-temple-gold/20">
            METODOLOGÍA DE EVOLUCIÓN
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            Las 3 Fases del <span className="italic text-temple-gold">Atleta TempleFit</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-light">
            Un camino estructurado desde el acondicionamiento inicial hasta el liderazgo y servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <motion.div variants={item} className="p-8 rounded-3xl bg-[#0E1424]/90 border border-blue-500/30 space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Fase 1
                </span>
                <ShieldCheck size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">Escuadrón de Paz</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Iniciación y acondicionamiento. Diagnóstico postural y biométrico, adaptación neuromuscular a la calistenia y nutrición anti-inflamatoria.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">• Evaluación física inicial</li>
                <li className="flex items-center gap-2">• Técnica de respiración Buteyko</li>
                <li className="flex items-center gap-2">• Entrada a la comunidad</li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div variants={item} className="p-8 rounded-3xl bg-gradient-to-b from-[#0E1424] to-[#141B2D] border-2 border-temple-gold space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-temple-gold/20 text-temple-gold border border-temple-gold/40">
                  Fase 2 • Núcleo
                </span>
                <Flame size={24} className="text-temple-gold" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">Escuadrón de Gedeón</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                El <strong className="text-temple-gold font-bold">Reto 21 Días = ÍNTEGROS</strong>. 3 horas de disciplina diaria (1h Cuerpo + 1h Mente + 1h Espíritu) y asistencia a CristoFit Camp.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">• Disciplina 06:00 AM</li>
                <li className="flex items-center gap-2">• Neuro-Entrenamiento en Ventas</li>
                <li className="flex items-center gap-2">• Devocional y ayuno intermitente</li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div variants={item} className="p-8 rounded-3xl bg-[#0E1424]/90 border border-emerald-500/30 space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Fase 3 • Maestría
                </span>
                <Award size={24} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">Escuadrón de Cristo</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                E.A.G.E. (Escuela de Atletas y Guías Evangelísticos). Formación de capitanes, mentoría a nuevos miembros y servicio social activo.
              </p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">• Liderazgo de Escuadrón</li>
                <li className="flex items-center gap-2">• Servicio en festivales trimestrales</li>
                <li className="flex items-center gap-2">• Multiplicación de nuevos grupos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CristoFit Camp Section */}
      <section className="relative py-24 bg-[#07090E] border-t border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={item} className="space-y-6 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-gold/10 text-temple-gold text-[10px] font-black uppercase tracking-[0.3em]">
              SÁBADOS 06:00 AM • AL AIRE LIBRE
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-white tracking-tight">
              CristoFit <span className="text-temple-gold">Camp</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
              El punto de encuentro semanal de todos los escuadrones en Santa Cruz. Bloques combinados de calistenia, 
              fuerza funcional, hidratación botánica en el Snack Bar y brigadas de servicio comunitario.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop", 
                title: "1. Fuerza & Calistenia en Equipo",
                desc: "Entrenamiento funcional de alta exigencia al amanecer."
              },
              { 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", 
                title: "2. Retos y Rendición de Cuentas",
                desc: "Métricas semanales y evaluación de consistencia en hábitos."
              },
              { 
                img: "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=2070&auto=format&fit=crop", 
                title: "3. Comunión & Servicio Solidario",
                desc: "Snack Bar botánico y acciones de impacto en la ciudad."
              }
            ].map((camp, i) => (
              <motion.div key={i} variants={item} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10">
                <img src={camp.img} alt={camp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left space-y-1">
                  <h3 className="text-lg font-black text-white uppercase tracking-wider">{camp.title}</h3>
                  <p className="text-xs text-gray-300 font-light">{camp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-16 flex flex-col items-center gap-4">
            <a 
              href={WHATSAPP_CAMP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-temple-gold to-amber-500 text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-amber-400 transition-all shadow-xl shadow-temple-gold/20"
            >
              <Send size={16} />
              <span>Postular a un Escuadrón con Paulo</span>
            </a>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Cupos limitados a 12 personas por grupo</p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
