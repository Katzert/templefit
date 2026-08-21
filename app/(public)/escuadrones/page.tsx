'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Sword, 
  Award, 
  Flame, 
  ShieldCheck, 
  Send
} from 'lucide-react';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

export default function EscuadronesPage() {
  const WHATSAPP_CAMP = 'https://wa.me/59169127691?text=¡Hola%20Paulo!%20Quiero%20postular%20a%20un%20Escuadrón%20de%20TempleFit%20y%20asistir%20al%20CristoFit%20Camp.';

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-24 font-sans pt-16">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transform hover:scale-100 transition-transform duration-1000"
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
                Tu escuadrón es tu círculo de rendición de cuentas: celebran tus victorias y te respaldan si flaqueas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Rendición de Cuentas", desc: "Si faltas a entrenar 3 días seguidos, tu escuadrón te busca y te respalda." },
                { icon: Sword, title: "Competencia Ética", desc: "Supera tus marcas personales de calistenia y crossfit junto a tus hermanos de equipo." },
                { icon: Users, title: "Capitán de Escuadrón", desc: "Cada brigada cuenta con un líder asignado para coordinar asistencia y oración." },
                { icon: Award, title: "Certificación Anual", desc: "Reconocimiento y graduación como Atleta Íntegro al completar el ciclo." }
              ].map((feature, i) => (
                <div key={i} className="bg-[#0B0F19] border border-white/10 p-6 rounded-2xl hover:border-temple-gold/40 transition-all duration-200 group shadow-lg">
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
              className="relative w-full h-[520px] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
            
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#07090E]/85 backdrop-blur-xl border border-white/15 p-6 rounded-2xl shadow-2xl">
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
            Un camino estructurado según el manual oficial: desde la purificación y paz hasta el liderazgo de honor en Cristo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phase 1: Paz (Blanco & Bronce) */}
          <motion.div variants={item} className="p-7 rounded-2xl bg-[#0B0F19] border border-white/20 space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-metal-bronze transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                  Fase 1 (Meses 1-3)
                </span>
                <span className="text-[10px] font-black uppercase text-[#CD7F32] bg-[#CD7F32]/10 px-2.5 py-1 rounded-md border border-[#CD7F32]/30">
                  Corona Bronce
                </span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white uppercase tracking-wide">Brigada de Paz</h3>
              <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                Uniforme: <span className="text-white font-black">Polera Blanca Oficial</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Purificación y restauración emocional. Boxeo formativo, calistenia inicial, técnica de respiración y superación del estrés cotidiano.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">• Evaluación biométrica inicial</li>
                <li className="flex items-center gap-2">• Integración a los 12 del Escuadrón</li>
                <li className="flex items-center gap-2">• Nutrición celular anti-inflamatoria</li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 2: Salvación / Gedeón (Azul Marino & Plata) */}
          <motion.div variants={item} className="p-7 rounded-2xl bg-[#0B0F19] border border-[#002147] space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-[#C0C8D0] transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#002147] text-white border border-[#C0C8D0]/30">
                  Fase 2 (Meses 4-8)
                </span>
                <span className="text-[10px] font-black uppercase text-[#C0C8D0] bg-[#C0C8D0]/10 px-2.5 py-1 rounded-md border border-[#C0C8D0]/30">
                  Corona Plata
                </span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white uppercase tracking-wide">Brigada de Salvación</h3>
              <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                Uniforme: <span className="text-[#C0C8D0] font-black">Short Azul Marino + Guantes</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Entrenamiento avanzado y liderazgo de testimonio. Reto de 21 Días, disciplina a las 06:00 AM y participación en servicio comunitario.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">• 1h Cuerpo + 1h Mente + 1h Devocional</li>
                <li className="flex items-center gap-2">• Neuroventas y oratoria ética</li>
                <li className="flex items-center gap-2">• Asistencia a CristoFit Camp</li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 3: Cristo (Ámbar Oro & Corona de Oro) */}
          <motion.div variants={item} className="p-7 rounded-2xl bg-gradient-to-b from-[#0B0F19] to-[#141B2D] border-2 border-temple-gold space-y-5 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-temple-gold-bright transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-temple-gold text-black">
                  Fase 3 (Meses 9-12)
                </span>
                <span className="text-[10px] font-black uppercase text-temple-gold bg-temple-gold/15 px-2.5 py-1 rounded-md border border-temple-gold/40">
                  Corona de Oro
                </span>
              </div>
              <h3 className="text-2xl font-serif font-black text-white uppercase tracking-wide">Brigada de Cristo</h3>
              <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                Uniforme: <span className="text-temple-gold font-black">Short Amarillo + Guantes Box Personalizados</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                El hito de la madurez y la integridad. Formación de nuevos capitanes, mentoría espiritual y graduación anual del templo.
              </p>
              <ul className="space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                <li className="flex items-center gap-2">• Liderazgo de Escuadrón asignado</li>
                <li className="flex items-center gap-2">• Multiplicación de nuevos atletas</li>
                <li className="flex items-center gap-2">• Graduación e investidura de Honor</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-[#0B0F19] border border-temple-gold/30 p-8 md:p-12 rounded-2xl shadow-2xl space-y-6">
          <h3 className="text-2xl md:text-3xl font-serif font-black text-white uppercase tracking-tight">
            ¿Listo para unirte a tu <span className="text-temple-gold">Escuadrón</span>?
          </h3>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Las vacantes por escuadrón son estrictamente limitadas a 12 atletas. Coordina con Paulo tu postulación para el próximo sábado en el CristoFit Camp.
          </p>
          <a
            href={WHATSAPP_CAMP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-temple-gold hover:bg-temple-gold-bright text-black font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-temple-gold/20"
          >
            <Send size={15} />
            <span>Postular vía WhatsApp</span>
          </a>
        </div>
      </section>

    </motion.div>
  );
}
