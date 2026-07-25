'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Shield, Users, ArrowRight, Brain, Target, CheckCircle, Sparkles, ChevronRight, Award, Dumbbell, Heart, BookOpen, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Home() {
  const [goal, setGoal] = useState<'fuerza' | 'habitos' | 'liderazgo'>('fuerza');
  const [assessmentResult, setAssessmentResult] = useState<string | null>(null);

  const calculatePlan = () => {
    if (goal === 'fuerza') {
      setAssessmentResult('Plan Recomendado: Entrenamiento de Fuerza + Nutrición Real (Recomposición Corporal).');
    } else if (goal === 'habitos') {
      setAssessmentResult('Plan Recomendado: Reto 21 Días + Sábados CristoFit Camp (Hábitos y Disciplina Diaria).');
    } else {
      setAssessmentResult('Plan Recomendado: Mentoría de Hábitos y Liderazgo (Valores y Claridad Mental).');
    }
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-20 font-sans">
      
      {/* Top Banner: Portal Instructores Link */}
      <div className="bg-gradient-to-r from-temple-navy-dark via-temple-gold/20 to-temple-navy-dark border-b border-white/10 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="bg-temple-gold/20 text-temple-gold px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-[0.2em] text-[10px]">Oficial</span>
            <span>Ecosistema de Transformación Holística Santa Cruz</span>
          </div>
          <a 
            href="https://katzert.github.io/templefit-admin/" 
            className="flex items-center gap-1.5 text-temple-gold hover:text-white font-bold transition group"
          >
            <span>Acceso Portal Instructores (CRM)</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0A0A0A]/90 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-temple-gold/30 backdrop-blur-md">
            <Sparkles className="text-temple-gold animate-pulse" size={16} />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-temple-gold">
              Mente • Cuerpo • Espíritu
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-7xl font-serif font-black uppercase text-white tracking-tight leading-[1.05]">
            FORJANDO <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-amber-200 to-temple-gold">CARÁCTER</span> INQUEBRANTABLE
          </motion.h1>

          <motion.p variants={item} className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Entrenamiento híbrido de fuerza, nutrición preventiva bio-optimizada y mentoría bajo valores eternos para transformar tu vida en 21 Días.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/59169127691?text=Hola%20Paulo!%20Quiero%20unirme%20al%20Reto%2021%20D%C3%ADas%20%C3%8Dntegros"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-temple-gold/20 hover:scale-[1.02] transition duration-200 flex items-center justify-center gap-2"
            >
              <span>Unirme al Reto 21 Días</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#unidades"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-wider text-xs rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <span>Ver Unidades de Impacto</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
            {[
              { val: '+500', label: 'Vidas Transformadas' },
              { val: '21 Días', label: 'Forja de Hábitos' },
              { val: '100%', label: 'Acompañamiento' },
              { val: 'Sábados', label: 'CristoFit Camp' },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <p className="text-2xl md:text-3xl font-serif font-black text-temple-gold">{m.val}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 Core Impact Units Section */}
      <section id="unidades" className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-temple-gold">LA ARQUITECTURA DEL TEMPLO</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            4 Unidades de <span className="italic text-temple-gold">Impacto</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-normal">Desarrolladas de forma sinérgica para potenciar las 3 dimensiones de tu ser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Target size={32} className="text-temple-gold" />,
              title: "1. Reto 21 Días Íntegros",
              tag: "Transformación acelerada",
              desc: "Programa intensivo con plan nutricional preventivo adaptado, guía de suplementación limpia y hackeo de rutina diaria."
            },
            {
              icon: <Dumbbell size={32} className="text-amber-400" />,
              title: "2. Entrenamiento TempleFit",
              tag: "Fuerza real e inquebrantable",
              desc: "Sesiones híbridas diseñadas para construir densidad muscular, corregir postura y acelerar el metabolismo de forma segura."
            },
            {
              icon: <Brain size={32} className="text-temple-gold-bright" />,
              title: "3. Mentoría Neuro-Espiritual",
              tag: "Mente en paz y liderazgo",
              desc: "Enfoque en inteligencia emocional, renovación de creencias y liderazgo bajo principios bíblicos y morales eternos."
            },
            {
              icon: <Users size={32} className="text-emerald-400" />,
              title: "4. Sábado CristoFit Camp",
              tag: "Comunidad y hermandad",
              desc: "Entrenamiento funcional grupal al aire libre en Santa Cruz, seguido de tiempo de palabra, conexión comunitaria y recarga de energía."
            }
          ].map((unit, i) => (
            <motion.div key={i} variants={item} className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-temple-gold/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300">
                    {unit.icon}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {unit.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-temple-gold transition">{unit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-normal">{unit.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-temple-gold uppercase tracking-wider">Ver detalles</span>
                <ChevronRight size={18} className="text-gray-500 group-hover:text-temple-gold group-hover:translate-x-1 transition" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏆 HISTORIAS DE ÉXITO & TRANSFORMACIONES REALES */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-temple-gold">RESULTADOS VERIFICADOS DE ATLETAS</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            Historias de <span className="italic text-temple-gold">Transformación Real</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-normal">Testimonios de alumnos que completaron el Reto 21 Días Íntegros en Santa Cruz, Bolivia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Carlos M.',
              age: '32 años',
              plan: 'Reto 21 Días Íntegros',
              before: '94 kg • Fatiga constante • 0 hábito diario',
              after: '82 kg (-12 kg) • 3L agua • Rutina 06:00 AM',
              quote: 'TempleFit no solo cambió mi cuerpo; me devolvió la disciplina y el hábito de orar cada mañana antes de trabajar.',
              rating: 5,
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80'
            },
            {
              name: 'Mariana F.',
              age: '28 años',
              plan: 'Fuerza + Nutrición Bio-optimizada',
              before: 'Ansiedad • Dietas restrictivas • Falta de energía',
              after: 'Recomposición muscular • Paz mental • Journaling',
              quote: 'Aprendí a comer sin culpa y a tratar mi cuerpo con respeto como templo. La mentoría espiritual cambió mi perspectiva.',
              rating: 5,
              image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80'
            },
            {
              name: 'Diego R.',
              age: '41 años',
              plan: 'Reto 21 Días + Sábados CristoFit',
              before: 'Vida sedentaria • Sedentrismo laboral',
              after: 'Fuerza funcional • Comunidad activa • Liderazgo',
              quote: 'Los Sábados CristoFit Camp son el momento culminante de mi semana. Entrenar en hermandad no tiene precio.',
              rating: 5,
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80'
            }
          ].map((t, i) => (
            <motion.div key={i} variants={item} className="p-8 rounded-3xl bg-[#0B0F19]/90 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border border-temple-gold/40" />
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.name} <span className="text-xs text-gray-400 font-normal">({t.age})</span></h4>
                    <p className="text-xs text-temple-gold font-bold uppercase tracking-wider">{t.plan}</p>
                  </div>
                </div>

                <div className="flex gap-1 text-temple-gold pt-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 italic font-serif leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
                  <span className="font-bold uppercase tracking-wider text-[10px]">Antes:</span> {t.before}
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <span className="font-bold uppercase tracking-wider text-[10px]">Después:</span> {t.after}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Assessment Widget */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-black/60 to-black/90 border border-temple-gold/30 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-serif font-black uppercase text-white">
            Evaluador de Tu <span className="italic text-temple-gold">Plan Holístico</span>
          </h3>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Selecciona tu meta principal y te diremos exactamente cómo empezar tu transformación.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { id: 'fuerza', title: 'Fuerza y Nutrición', desc: 'Transformar cuerpo y grasa' },
              { id: 'habitos', title: 'Hábitos y Disciplina', desc: 'Rutina y consistencia' },
              { id: 'liderazgo', title: 'Mente y Espíritu', desc: 'Claridad mental y fe' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setGoal(opt.id as any)}
                className={`p-4 rounded-xl border cursor-pointer transition ${goal === opt.id ? 'bg-temple-gold/20 border-temple-gold text-white' : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'}`}
              >
                <p className="text-sm font-bold">{opt.title}</p>
                <p className="text-xs text-gray-400 mt-1 font-normal">{opt.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={calculatePlan}
            className="px-8 py-3.5 bg-white text-black font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-temple-gold transition shadow-md"
          >
            Calcular Mi Plan Ideal
          </button>

          {assessmentResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-temple-gold/10 border border-temple-gold/30 text-temple-gold text-sm font-medium max-w-2xl mx-auto">
              {assessmentResult}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quote / Footer Brand Banner */}
      <section className="text-center py-12 border-t border-white/5">
        <p className="font-serif italic text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          &quot;Nutre, Crea, Reta, Mente, Cuerpo y Espíritu.&quot;
        </p>
        <p className="text-xs text-temple-gold uppercase tracking-[0.3em] mt-4 font-extrabold">
          — Paulo, Fundador de TempleFit • Santa Cruz, Bolivia
        </p>
      </section>

    </motion.div>
  );
}
