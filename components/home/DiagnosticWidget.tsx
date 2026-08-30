'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, CheckCircle, Send, RotateCcw } from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function DiagnosticWidget() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<'fuerza' | 'habitos' | 'liderazgo'>('fuerza');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', age: '', weight: '', height: '',
    injuries: 'Ninguna (100% Sano)', preferredSchedule: 'Turno 06:00 AM (Reto 21 Días)',
    activityLevel: 'Principiante (1-2 días/sem)', daysAvailable: 'Lunes a Viernes',
    specificGoal: ''
  });

  const getRecommendedPlan = () => {
    if (goal === 'fuerza') {
      return {
        title: 'Fuerza Funcional y Nutrición',
        desc: 'Recomposición corporal mediante calistenia, crossfit y nutrición.'
      };
    } else if (goal === 'habitos') {
      return {
        title: 'Reto 21 Días: Cuerpo, Mente y Espíritu',
        desc: 'Entrenamiento diario a las 06:00 AM, escuadrones de 12 personas y campamentos los sábados.'
      };
    } else {
      return {
        title: 'Liderazgo y Entrenamiento Mental',
        desc: 'Entrenamiento en ventas, manejo del estrés y formación profesional.'
      };
    }
  };

  const handleSendAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;
    setIsSubmitting(true);
    const plan = getRecommendedPlan();

    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          name: formData.fullName, phone: formData.phone, source: 'web_diagnostic', status: 'new',
          notes: `Diagnóstico Web: Meta ${goal.toUpperCase()} | ${formData.age} años | ${formData.weight}kg | Horario: ${formData.preferredSchedule} | Plan: ${plan.title}`,
          dateAdded: new Date().toISOString().split('T')[0]
        });
      }
    } catch (err) {
      console.warn("No se pudo guardar en Firebase, continuando a WhatsApp", err);
    }
    
    setIsSubmitting(false);
    setStep(3);
  };

  const openWhatsAppWithLead = () => {
    const plan = getRecommendedPlan();
    const message = `¡Hola Paulo! Acabo de completar mi evaluación en la web de TempleFit:\n\n*FICHA DE DIAGNÓSTICO*\n• *Nombre:* ${formData.fullName}\n• *Celular:* ${formData.phone}\n• *Edad:* ${formData.age ? formData.age + ' años' : 'N/A'} | *Peso:* ${formData.weight ? formData.weight + ' kg' : 'N/A'} | *Estatura:* ${formData.height ? formData.height + ' cm' : 'N/A'}\n• *Enfoque:* ${goal.toUpperCase()}\n• *Nivel Actual:* ${formData.activityLevel}\n• *Horario Preferido:* ${formData.preferredSchedule}\n• *Salud / Lesiones:* ${formData.injuries}\n• *Meta Concreta:* ${formData.specificGoal || 'Mejorar hábitos y disciplina'}\n\n*PLAN RECOMENDADO:* ${plan.title}\n\nQuiero coordinar mi semana de prueba y asegurar mi cupo.`;
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="evaluacion" className="max-w-4xl mx-auto px-4 py-24 scroll-mt-24 relative z-10">
      <div className="p-8 md:p-14 rounded-[2rem] bg-white/85 dark:bg-gradient-to-b dark:from-[#0A0E17] dark:via-[#05070B] dark:to-[#0A0E17] border border-black/10 dark:border-white/5 text-center space-y-10 relative overflow-hidden shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        
        {/* Glows */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-temple-gold/15 dark:bg-temple-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-amber-500/10 dark:bg-temple-navy/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <div className="space-y-4 relative z-10" aria-live="polite" aria-atomic="true">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest shadow-inner">
            <span className={step >= 1 ? "text-amber-800 dark:text-temple-gold-bright" : ""} aria-current={step === 1 ? "step" : undefined}>1. Meta</span>
            <span className="opacity-30" aria-hidden="true">•</span>
            <span className={step >= 2 ? "text-amber-800 dark:text-temple-gold-bright" : ""} aria-current={step === 2 ? "step" : undefined}>2. Datos</span>
            <span className="opacity-30" aria-hidden="true">•</span>
            <span className={step >= 3 ? "text-amber-800 dark:text-temple-gold-bright" : ""} aria-current={step === 3 ? "step" : undefined}>3. Plan</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-black uppercase text-slate-900 dark:text-white tracking-tight text-balance">
            Test de Diagnóstico <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">del Atleta</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-gray-400 max-w-xl mx-auto font-light leading-relaxed text-pretty">
            {step === 1 && "Selecciona el área principal en la que deseas enfocarte."}
            {step === 2 && "Completa tus datos. Esta información servirá para diseñar tu plan."}
            {step === 3 && "Diagnóstico generado. Envía tu ficha a WhatsApp para agendar tu prueba."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-10 max-w-3xl mx-auto relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
                {[
                  { id: 'fuerza', title: 'Fuerza & Físico', desc: 'Calistenia, crossfit, quemar grasa y ganar músculo.' },
                  { id: 'habitos', title: 'Reto 21 Días', desc: 'Rutina a las 06:00 AM y disciplina diaria.' },
                  { id: 'liderazgo', title: 'Mente & Espíritu', desc: 'Entrenamiento en ventas, control del estrés y fe.' },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setGoal(opt.id as any)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold ${
                      goal === opt.id 
                        ? 'bg-temple-gold/15 dark:bg-temple-gold/10 border-amber-600 dark:border-temple-gold text-slate-900 dark:text-white shadow-md dark:shadow-[0_0_30px_rgba(197,160,89,0.15)] scale-[1.02]' 
                        : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/5 dark:border-white/5 text-slate-600 dark:text-gray-400 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                    }`}
                    aria-pressed={goal === opt.id}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <p className={`text-sm font-black uppercase tracking-wider ${goal === opt.id ? 'text-amber-800 dark:text-temple-gold-bright' : 'text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-gray-200'}`}>{opt.title}</p>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${goal === opt.id ? 'border-amber-600 dark:border-temple-gold bg-amber-600 dark:bg-temple-gold' : 'border-black/20 dark:border-white/20'}`} aria-hidden="true">
                          {goal === opt.id && <Check size={12} className="text-white dark:text-black" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-light text-pretty">{opt.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button onClick={() => setStep(2)} className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-temple-gold to-amber-600 hover:from-temple-gold-bright hover:to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 mx-auto group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold">
                <span>Continuar a Datos Biométricos</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="max-w-2xl mx-auto text-left relative z-10">
              <form onSubmit={handleSendAssessment} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Tu Nombre Completo *</label>
                    <input id="fullName" type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="Ej. Andrés Morales" className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Celular / WhatsApp *</label>
                    <input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+591 70012345" className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="age" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Edad</label>
                    <input id="age" type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} placeholder="Ej. 28" className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="weight" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Peso (kg)</label>
                    <input id="weight" type="number" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} placeholder="Ej. 75" className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="height" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Estatura (cm)</label>
                    <input id="height" type="number" value={formData.height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} placeholder="Ej. 174" className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="activityLevel" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Nivel Actual</label>
                    <select id="activityLevel" value={formData.activityLevel} onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all font-light appearance-none cursor-pointer">
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Sedentario">Sedentario (Sin ejercicio)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Principiante (1-2 días/sem)">Principiante (1-2 días/sem)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Intermedio (3-4 días/sem)">Intermedio (3-4 días/sem)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Avanzado">Avanzado (Constante)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="preferredSchedule" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Horario Preferido</label>
                    <select id="preferredSchedule" value={formData.preferredSchedule} onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })} className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all font-light appearance-none cursor-pointer">
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Turno 06:00 AM (Reto 21 Días)">Turno 06:00 AM (Reto 21 Días)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Turno Mañana (08:00 - 11:00)">Turno Mañana (08:00 - 11:00)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Turno Tarde (15:00 - 18:00)">Turno Tarde (15:00 - 18:00)</option>
                      <option className="bg-white dark:bg-black text-slate-900 dark:text-white" value="Turno Noche (19:00 - 21:00)">Turno Noche (19:00 - 21:00)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="specificGoal" className="text-[10px] text-slate-600 dark:text-gray-400 font-black uppercase tracking-widest pl-1">Objetivo Concreto (Opcional)</label>
                  <textarea id="specificGoal" rows={2} value={formData.specificGoal} onChange={(e) => setFormData({ ...formData, specificGoal: e.target.value })} placeholder="Ej. Bajar 6kg de grasa, ganar fuerza y vencer el estrés matutino..." className="w-full bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl p-4 text-sm text-slate-900 dark:text-white focus:border-temple-gold focus:ring-2 focus:ring-temple-gold/40 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 font-light resize-none" />
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6">
                  <button type="button" onClick={() => setStep(1)} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-temple-gold dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold">
                    ← Volver
                  </button>
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-temple-gold to-amber-600 hover:from-temple-gold-bright hover:to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold">
                    <span>{isSubmitting ? 'Procesando...' : 'Generar Plan'}</span>
                    {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="max-w-xl mx-auto space-y-8 relative z-10">
              <div className="p-8 rounded-[2rem] bg-white dark:bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-temple-gold/30 text-left space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-temple-gold/15 dark:bg-temple-gold/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-4 border-b border-black/10 dark:border-white/5 pb-6">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-temple-gold-bright border border-amber-500/20 dark:border-temple-gold/20 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-xl text-balance">¡Diagnóstico Generado!</h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 font-light mt-1 text-pretty">Ficha procesada exitosamente para {formData.fullName}.</p>
                  </div>
                </div>

                <div className="space-y-3 bg-white dark:bg-black/[0.03] dark:bg-black/30 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 dark:text-temple-gold-bright bg-amber-500/10 dark:bg-temple-gold/10 px-3 py-1 rounded-full">Plan Recomendado</span>
                  <h5 className="text-lg font-black text-slate-900 dark:text-white leading-tight text-balance">{getRecommendedPlan().title}</h5>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed font-light text-pretty">{getRecommendedPlan().desc}</p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-black/[0.05] dark:bg-black/50 border border-black/5 dark:border-white/5 text-xs text-slate-700 dark:text-gray-300 space-y-3 font-mono">
                  <p className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="text-amber-800 dark:text-temple-gold-bright font-bold">Atleta:</span> <span>{formData.fullName}</span></p>
                  <p className="flex justify-between border-b border-black/5 dark:border-white/5 pb-2"><span className="text-amber-800 dark:text-temple-gold-bright font-bold">Horario:</span> <span>{formData.preferredSchedule}</span></p>
                  <p className="flex justify-between"><span className="text-amber-800 dark:text-temple-gold-bright font-bold">Nivel:</span> <span>{formData.activityLevel}</span></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={openWhatsAppWithLead} className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500">
                  <Send size={18} />
                  <span>Enviar a WhatsApp Oficial</span>
                </button>

                <button onClick={() => { setStep(1); setFormData({ fullName: '', phone: '', age: '', weight: '', height: '', injuries: 'Ninguna (100% Sano)', preferredSchedule: 'Turno 06:00 AM (Reto 21 Días)', activityLevel: 'Principiante (1-2 días/sem)', daysAvailable: 'Lunes a Viernes', specificGoal: '' }); }} className="w-full sm:w-auto px-6 py-5 bg-transparent border border-black/10 dark:border-white/10 text-slate-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-black/5 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-temple-gold dark:hover:text-white transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-temple-gold">
                  <RotateCcw size={16} />
                  <span>Reiniciar Test</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
