'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Shield, Users, ArrowRight, Brain, Target, CheckCircle, Sparkles, ChevronRight, Award, Dumbbell, Heart, BookOpen, ExternalLink, Star, User, Calendar, Activity, Check, Send, RotateCcw } from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Home() {
  // Stepper State for Evaluation Widget
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<'fuerza' | 'habitos' | 'liderazgo'>('fuerza');
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    activityLevel: 'Principiante (1-2 días/sem)',
    daysAvailable: '3-4 días por semana',
    specificGoal: ''
  });

  const getRecommendedPlan = () => {
    if (goal === 'fuerza') {
      return {
        title: 'Plan Fuerza Real + Nutrición Anti-Inflamatoria',
        desc: 'Enfocado en quemar grasa, ganar tono muscular y optimizar tu alimentación pre y post entrenamiento.'
      };
    } else if (goal === 'habitos') {
      return {
        title: 'Reto 21 Días + Sábados CristoFit Camp',
        desc: 'Reinicio metabólico y mental. Sistema de escuadrones para forjar disciplina inquebrantable a las 06:00 AM.'
      };
    } else {
      return {
        title: 'Mentoría Neuro-Espiritual + Hábito de Alto Rendimiento',
        desc: 'Desarrolla inteligencia emocional, liderazgo bajo principios eternos y claridad mental para tu vida profesional.'
      };
    }
  };

  const handleSendAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    const plan = getRecommendedPlan();

    // Optionally save lead to Firebase
    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          fullName: formData.fullName,
          age: formData.age,
          goal: goal,
          activityLevel: formData.activityLevel,
          daysAvailable: formData.daysAvailable,
          specificGoal: formData.specificGoal,
          recommendedPlan: plan.title,
          createdAt: new Date().toISOString(),
          status: 'Nuevo Prospecto'
        });
      }
    } catch (err) {
      console.warn("No se pudo guardar en Firebase, continuando a WhatsApp", err);
    }

    setStep(3);
  };

  const openWhatsAppWithLead = () => {
    const plan = getRecommendedPlan();
    const message = `Hola Paulo! Hice la Evaluación Diagnóstica en la web de TempleFit:

*FICHA DE DIAGNÓSTICO*
• *Nombre:* ${formData.fullName || 'No especificado'}
• *Edad:* ${formData.age || 'No especificada'}
• *Objetivo Principal:* ${goal.toUpperCase()}
• *Nivel Actual:* ${formData.activityLevel}
• *Disponibilidad:* ${formData.daysAvailable}
• *Meta / Inconveniente:* ${formData.specificGoal || 'Ninguno'}

*PLAN RECOMENDADO:* ${plan.title}

Quiero coordinar mi Semana de Prueba Gratuita y comenzar.`;

    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-20 font-sans">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-temple-navy-dark via-temple-gold/20 to-temple-navy-dark border-b border-white/10 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span>Centro Integral de Fuerza y Mentalidad • Santa Cruz</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale-[30%]"
          style={{ backgroundImage: 'url(/templefit/media/hero_premium.png)' }}
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
            FORJA TU <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-amber-200 to-temple-gold">CARÁCTER</span>
          </motion.h1>

          <motion.p variants={item} className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Entrenamiento, nutrición y comunidad para recuperar el control de tu cuerpo en 21 Días.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/59169127691?text=Hola%20Paulo!%20Quiero%20reclamar%20mi%20Semana%20de%20Prueba%20Gratis%20y%20el%2020%25%20de%20descuento%20en%20Snack%20Bar!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-temple-gold/20 hover:scale-[1.02] transition duration-200 flex flex-col items-center justify-center gap-1"
            >
              <div className="flex items-center gap-2">
                <span>1 Semana de Prueba Gratuita</span>
                <ArrowRight size={18} />
              </div>
              <span className="text-[9px] opacity-80">+ 20% Dcto. en Snack Bar (Cupos Limitados)</span>
            </a>

            <a
              href="#evaluacion"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-wider text-xs rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <span>Hacer Evaluación Diagnóstica</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* The Method Section */}
      <section id="metodo" className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-temple-gold">EL MÉTODO TEMPLEFIT</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            Nuestros 4 <span className="italic text-temple-gold">Pilares</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-normal">Desarrolladas para potenciar las 3 dimensiones de tu ser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Dumbbell size={32} className="text-temple-gold" />,
              title: "1. Centro de Entrenamiento",
              tag: "Tu espacio de entrenamiento",
              desc: "Programas intensivos, CristoFit Camp los sábados y hermandad en Escuadrones."
            },
            {
              icon: <Target size={32} className="text-amber-400" />,
              title: "2. Barra Nutricional Integrada",
              tag: "Snack Bar & Suplementos",
              desc: "Alimentación pre y post entreno de alta calidad. Productos anti-inflamatorios diseñados para acelerar tus resultados físicos."
            },
            {
              icon: <Award size={32} className="text-temple-gold-bright" />,
              title: "3. Apparel (Marca de Ropa)",
              tag: "Carácter y disciplina",
              desc: "Colecciones exclusivas que representan tu compromiso con los valores eternos. Vístete con el carácter que forjas a diario."
            },
            {
              icon: <Heart size={32} className="text-emerald-400" />,
              title: "4. Medicina Preventiva",
              tag: "Salud preventiva",
              desc: "Monitoreo clínico, rehabilitación y alianzas de salud para que puedas entrenar duro toda tu vida."
            }
          ].map((unit, i) => (
            <motion.div key={i} variants={item} className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-temple-gold/40 transition-all duration-300 group h-full">
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Multi-Step Assessment Widget */}
      <section id="evaluacion" className="max-w-4xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0F1420] via-black/90 to-black border border-temple-gold/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/30 text-temple-gold text-[10px] font-bold uppercase tracking-widest">
              <span>Paso {step} de 3 • Evaluación Gratuita</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-black uppercase text-white">
              Evaluación <span className="italic text-temple-gold">Diagnóstica</span>
            </h3>
            <p className="text-sm text-gray-400 max-w-lg mx-auto">
              {step === 1 && "Paso 1: Selecciona la dimensión principal que deseas transformar."}
              {step === 2 && "Paso 2: Completa tus datos para personalizar tu diagnóstico."}
              {step === 3 && "Paso 3: Diagnóstico generado con éxito."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Select Goal */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  {[
                    { id: 'fuerza', title: 'Fuerza y Nutrición', desc: 'Transformar cuerpo, grasa y tono muscular' },
                    { id: 'habitos', title: 'Hábitos y Disciplina', desc: 'Rutina 06:00 AM y consistencia' },
                    { id: 'liderazgo', title: 'Mente y Espíritu', desc: 'Claridad mental, fe y temple' },
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setGoal(opt.id as any)}
                      className={`p-5 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                        goal === opt.id 
                          ? 'bg-temple-gold/20 border-temple-gold text-white shadow-lg shadow-temple-gold/10' 
                          : 'bg-black/50 border-white/10 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm font-bold text-white">{opt.title}</p>
                          {goal === opt.id && <Check size={16} className="text-temple-gold" />}
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed font-normal">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Siguiente: Ingresar Mis Datos</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* STEP 2: Fill Personal & Diagnostic Data */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="max-w-2xl mx-auto text-left"
              >
                <form onSubmit={handleSendAssessment} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Tu Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Juan Carlos Pérez"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Tu Edad</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Ej. 30"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Nivel de Actividad Actual</label>
                      <select
                        value={formData.activityLevel}
                        onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      >
                        <option value="Sedentario (Sin ejercicio)">Sedentario (Sin ejercicio)</option>
                        <option value="Principiante (1-2 días/sem)">Principiante (1-2 días/sem)</option>
                        <option value="Intermedio (3-4 días/sem)">Intermedio (3-4 días/sem)</option>
                        <option value="Avanzado (Constante)">Avanzado (Constante)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Días Disponibles</label>
                      <select
                        value={formData.daysAvailable}
                        onChange={(e) => setFormData({ ...formData, daysAvailable: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      >
                        <option value="2-3 días por semana">2-3 días por semana</option>
                        <option value="4-5 días por semana">4-5 días por semana</option>
                        <option value="Todos los días">Todos los días</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Meta Principal o Inconveniente a Resolver</label>
                    <textarea
                      rows={2}
                      value={formData.specificGoal}
                      onChange={(e) => setFormData({ ...formData, specificGoal: e.target.value })}
                      placeholder="Ej. Quiero bajar 8kg de grasa y eliminar la fatiga constante..."
                      className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 bg-white/5 border border-white/10 text-gray-300 font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white/10 transition"
                    >
                      ← Volver
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition shadow-lg flex items-center gap-2"
                    >
                      <span>Procesar Mi Diagnóstico</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Results & WhatsApp Send */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto space-y-6"
              >
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-temple-gold/40 text-left space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="p-3 rounded-xl bg-temple-gold/20 text-temple-gold">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">¡Diagnóstico Completado para {formData.fullName}!</h4>
                      <p className="text-xs text-gray-400">Generado según tu perfil físico e historial.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-temple-gold">Plan Recomendado</span>
                    <h5 className="text-lg font-extrabold text-white">{getRecommendedPlan().title}</h5>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">{getRecommendedPlan().desc}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-400 space-y-1 font-mono">
                    <p><span className="text-temple-gold font-bold">Nivel:</span> {formData.activityLevel}</p>
                    <p><span className="text-temple-gold font-bold">Disponibilidad:</span> {formData.daysAvailable}</p>
                    {formData.specificGoal && <p><span className="text-temple-gold font-bold">Meta:</span> {formData.specificGoal}</p>}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={openWhatsAppWithLead}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-emerald-500/20 transition flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>Enviar Mi Ficha a Paulo por WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({ fullName: '', age: '', activityLevel: 'Principiante (1-2 días/sem)', daysAvailable: '3-4 días por semana', specificGoal: '' });
                    }}
                    className="w-full sm:w-auto px-6 py-4 bg-white/5 border border-white/10 text-gray-300 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={16} />
                    <span>Reiniciar</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Quote / Footer Brand Banner */}
      <section className="text-center py-12 border-t border-white/5">
        <p className="font-serif italic text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          &quot;Cuidamos tu cuerpo porque es el templo del Espíritu.&quot;
        </p>
        <p className="text-xs text-temple-gold uppercase tracking-[0.3em] mt-4 font-extrabold">
          — Paulo, Fundador de TempleFit • Santa Cruz, Bolivia
        </p>
      </section>

    </motion.div>
  );
}
