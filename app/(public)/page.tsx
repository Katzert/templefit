'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Shield, 
  Users, 
  ArrowRight, 
  Brain, 
  Target, 
  CheckCircle, 
  Sparkles, 
  ChevronRight, 
  Award, 
  Dumbbell, 
  Heart, 
  BookOpen, 
  ExternalLink, 
  Check, 
  Send, 
  RotateCcw, 
  X, 
  Phone, 
  Activity, 
  Clock, 
  Sun, 
  ShieldCheck,
  Coffee,
  Zap,
  MapPin
} from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Home() {
  // Modal de Detalles del Ecosistema
  const [activeUnitModal, setActiveUnitModal] = useState<number | null>(null);

  // Stepper del Widget de Evaluación Diagnóstica
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<'fuerza' | 'habitos' | 'liderazgo'>('fuerza');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    injuries: 'Ninguna (100% Sano)',
    preferredSchedule: 'Turno 06:00 AM (Reto 21 Días)',
    activityLevel: 'Principiante (1-2 días/sem)',
    daysAvailable: 'Lunes a Viernes',
    specificGoal: ''
  });

  const triEcosystemUnits = [
    {
      id: 1,
      title: "1. GYM: Calistenia, Crossfit & Boxeo Ético",
      tag: "Área Fitness & Fuerza",
      icon: <Dumbbell size={36} className="text-temple-gold" />,
      subtitle: "Fuerza Real, Dominio Corporal y Rendimiento",
      description: "Entrenamiento funcional de alta exigencia física dividido en disciplinas combinadas: barras de calistenia, peso olímpico de crossfit y boxeo ético (combate técnico sin violencia).",
      features: [
        "Jaula de calistenia, anillas olímpicas y paralelas de alta resistencia",
        "Entrenamientos en Escuadrones Tácticos de máximo 12 atletas",
        "Sábados CristoFit Camp a las 06:00 AM al aire libre",
        "Entrenadores especializados con asignación personalizada"
      ],
      whatsappAction: "Hola Paulo! Quiero información sobre los entrenamientos de GYM (Calistenia, Crossfit y Boxeo Ético) en TempleFit."
    },
    {
      id: 2,
      title: "2. Snack Bar de Té & Nutrición Funcional",
      tag: "Alianza Abuela Fit",
      icon: <Coffee size={36} className="text-amber-400" />,
      subtitle: "Bebidas Botánicas, Proteína Limpia y Pan Sin Levadura",
      description: "Nutrición anti-inflamatoria diseñada para acelerar la recuperación y el enfoque. Infusiones de jengibre, cúrcuma y hierbabuena, batidos de proteína aislada y repostería bíblica saludable.",
      features: [
        "Infusiones botánicas calientes y frías con miel pura de abeja",
        "Batidos proteicos limpios con leche vegetal y sin azúcares refinados",
        "Panadería sin levadura y snacks formulados para el Reto 21 Días",
        "20% de descuento en barra para atletas activos de escuadrón"
      ],
      whatsappAction: "Hola Paulo! Quiero conocer el menú y planes del Snack Bar de Té y Nutrición de TempleFit."
    },
    {
      id: 3,
      title: "3. Salud Integral & Neuro-Entrenamiento",
      tag: "Cuerpo, Mente & Espíritu",
      icon: <Brain size={36} className="text-emerald-400" />,
      subtitle: "Neuro-Ventas, Respiración Buteyko y Lectura Bíblica",
      description: "El pilar que diferencia a TempleFit de cualquier gimnasio tradicional: biohacking, reeducación respiratoria para el control del estrés, devocionales y formación en integridad.",
      features: [
        "Programa de Neuro-Entrenamiento de Impacto en Ventas (6 módulos)",
        "Técnicas de respiración diafragmática (Método Buteyko) anti-estrés",
        "Club de lectura bíblica ('NeuroBiblia') y mentoría de vida",
        "Evaluaciones posturales y medicina preventiva con especialistas"
      ],
      whatsappAction: "Hola Paulo! Quiero información sobre los programas de Salud Integral, Neuro-Entrenamiento y Reto 21 Días."
    }
  ];

  const getRecommendedPlan = () => {
    if (goal === 'fuerza') {
      return {
        title: 'Plan Atleta Íntegro: Fuerza Funcional + Nutrición Anti-Inflamatoria',
        desc: 'Recomposición corporal, quema de grasa y tono muscular mediante calistenia, crossfit y nutrición cerebral.'
      };
    } else if (goal === 'habitos') {
      return {
        title: 'Reto 21 Días = ÍNTEGROS (Cuerpo 1h + Mente 1h + Espíritu 1h)',
        desc: '3 horas de disciplina diaria a las 06:00 AM. Integración en un Escuadrón de 12 atletas y Sábados CristoFit Camp.'
      };
    } else {
      return {
        title: 'Programa Neuro-Entrenamiento Espiritual & Liderazgo de Escuadrón',
        desc: 'Formación como Atleta de las Ventas, dominio del estrés, claridad bajo la palabra de Dios y proyección profesional.'
      };
    }
  };

  const handleSendAssessment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    const plan = getRecommendedPlan();

    try {
      if (db) {
        await addDoc(collection(db, 'leads'), {
          name: formData.fullName,
          phone: formData.phone,
          source: 'walk-in',
          status: 'new',
          notes: `Diagnóstico Web: Meta ${goal.toUpperCase()} | ${formData.age} años | ${formData.weight}kg | Horario: ${formData.preferredSchedule} | Plan: ${plan.title}`,
          dateAdded: new Date().toISOString().split('T')[0]
        });
      }
    } catch (err) {
      console.warn("No se pudo guardar en Firebase, continuando a WhatsApp", err);
    }

    setStep(3);
  };

  const openWhatsAppWithLead = () => {
    const plan = getRecommendedPlan();
    const message = `¡Hola Paulo! 👋 Acabo de completar mi Evaluación Diagnóstica en la web de TempleFit:

🏛️ *FICHA DE DIAGNÓSTICO DEL ALUMNO*
• *Nombre:* ${formData.fullName || 'No especificado'}
• *Celular:* ${formData.phone || 'No especificado'}
• *Edad:* ${formData.age ? formData.age + ' años' : 'N/A'} | *Peso:* ${formData.weight ? formData.weight + ' kg' : 'N/A'} | *Estatura:* ${formData.height ? formData.height + ' cm' : 'N/A'}
• *Dimensión a Transformar:* ${goal.toUpperCase()}
• *Nivel Actual:* ${formData.activityLevel}
• *Horario Preferido:* ${formData.preferredSchedule}
• *Salud / Lesiones:* ${formData.injuries}
• *Meta Concreta:* ${formData.specificGoal || 'Ganar disciplina y forjar hábitos reales'}

🔥 *PLAN RECOMENDADO:* ${plan.title}

Quiero coordinar mi Semana de Prueba Gratuita y asegurar mi cupo en un Escuadrón.`;

    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openUnitWhatsApp = (text: string) => {
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-20 font-sans">
      
      {/* Top Location & Verse Ticker */}
      <div className="bg-gradient-to-r from-[#07090E] via-[#0E1424] to-[#07090E] border-b border-temple-gold/20 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-temple-gold" />
            <span className="font-bold text-white">Santa Cruz de la Sierra, Bolivia</span>
          </div>
          <span className="text-temple-gold hidden sm:inline">•</span>
          <p className="font-serif italic text-gray-300">
            &quot;¿No sabéis que vuestro cuerpo es templo del Espíritu Santo?&quot; <span className="text-temple-gold font-bold">— 1 Corintios 6:19-20</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter brightness-75 scale-105 transform transition-transform duration-1000"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/80 to-[#07090E]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-8">
          
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-temple-gold/40 backdrop-blur-md shadow-lg shadow-temple-gold/5">
            <Sparkles className="text-temple-gold animate-pulse" size={15} />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-temple-gold">
              Movimiento Cristiano Fit
            </span>
          </motion.div>

          {/* Master Slogan Headline */}
          <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl font-serif font-black uppercase text-white tracking-tight leading-[1.08]">
            El Cuerpo es el <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-amber-200 to-temple-gold">Templo.</span><br />
            La Mente Crea y <span className="italic text-white">Edifica Vidas.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            No entrenamos solo por vanidad física. Forjamos carácter, nutrición limpia y fortaleza espiritual 
            mediante el <strong className="text-white font-bold">Reto 21 Días = ÍNTEGROS</strong> y la fraternidad de <strong className="text-temple-gold font-bold">Escuadrones de 12 Atletas</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/59169127691?text=¡Hola%20Paulo!%20Quiero%20reclamar%20mi%20Semana%20de%20Prueba%20Gratuita%20en%20TempleFit%20y%20conocer%20los%20Escuadrones."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-temple-gold/20 hover:scale-[1.02] hover:bg-amber-400 transition flex items-center justify-center gap-2"
            >
              <span>1 Semana de Prueba Gratuita</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#evaluacion"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/15 text-white font-bold uppercase tracking-wider text-xs rounded-2xl hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <Activity size={16} className="text-temple-gold" />
              <span>Hacer Evaluación Diagnóstica</span>
            </a>
          </motion.div>

          {/* Social Proof Counters */}
          <motion.div variants={item} className="grid grid-cols-3 max-w-xl mx-auto pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl font-black text-temple-gold">21 Días</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reto de Hábitos</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">12 Atletas</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Por Escuadrón</p>
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-400">06:00 AM</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">CristoFit Camp</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* The Tri-Ecosystem Section */}
      <section id="ecosistema" className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-gold/10 text-temple-gold text-[10px] font-black uppercase tracking-[0.3em]">
            EL TRI-ECOSISTEMA TEMPLEFIT
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            Tres Ejes de <span className="italic text-temple-gold">Transformación Real</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm font-normal">
            Una sinergia integral donde el entrenamiento de fuerza, la nutrición celular y la devoción espiritual convergen bajo un mismo techo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {triEcosystemUnits.map((unit, i) => (
            <motion.div 
              key={i} 
              variants={item} 
              onClick={() => setActiveUnitModal(i)}
              className="p-8 rounded-3xl bg-[#0E1424]/90 backdrop-blur-xl border border-white/10 hover:border-temple-gold/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-temple-gold/10 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:scale-110 transition duration-300">
                    {unit.icon}
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-temple-gold">
                    {unit.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-temple-gold transition">{unit.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal mb-6">{unit.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-temple-gold group-hover:translate-x-1 transition">
                <span>Ver Detalles & Protocolo</span>
                <ChevronRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Unit Detail Modal */}
      <AnimatePresence>
        {activeUnitModal !== null && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#121826] border border-temple-gold/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 md:p-8 relative space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setActiveUnitModal(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  {triEcosystemUnits[activeUnitModal].icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 bg-temple-gold/10 border border-temple-gold/30 rounded-full text-temple-gold">
                    {triEcosystemUnits[activeUnitModal].tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-2">{triEcosystemUnits[activeUnitModal].title}</h3>
                </div>
              </div>

              <div className="space-y-2 border-b border-white/10 pb-4">
                <h4 className="text-sm font-bold text-temple-gold uppercase tracking-wider">{triEcosystemUnits[activeUnitModal].subtitle}</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">{triEcosystemUnits[activeUnitModal].description}</p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">¿Qué incluye este pilar?</h5>
                <ul className="space-y-2.5">
                  {triEcosystemUnits[activeUnitModal].features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-black/40 p-3 rounded-xl border border-white/5 text-xs text-gray-300">
                      <CheckCircle size={16} className="text-temple-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const actionText = triEcosystemUnits[activeUnitModal].whatsappAction;
                    setActiveUnitModal(null);
                    openUnitWhatsApp(actionText);
                  }}
                  className="flex-1 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={16} />
                  <span>Consultar con Paulo Gil por WhatsApp</span>
                </button>

                <button
                  onClick={() => setActiveUnitModal(null)}
                  className="py-4 px-6 bg-white/5 border border-white/10 text-gray-300 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* The 21-Day Rule & Routine Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0E1424] via-[#0B0F19] to-black border border-temple-gold/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full border border-temple-gold/20">
                La Regla de las 3 Horas Diarias
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white tracking-tight leading-tight">
                El Reto de <span className="text-temple-gold">21 Días = ÍNTEGROS</span>
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                No creemos en atajos ni dietas milagrosas. Durante 21 días consecutivos reprogramas tus ritmos circadianos (dormir a las 22:00, despertar a las 06:00) y cumples una rutina diaria innegociable:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1h</div>
                  <div>
                    <p className="text-sm font-bold text-white">Pilar Cuerpo: Entrenamiento Físico</p>
                    <p className="text-xs text-gray-400">Calistenia, Crossfit, fuerza e hidratación monitoreada (2.8L - 3L).</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">1h</div>
                  <div>
                    <p className="text-sm font-bold text-white">Pilar Mente: Nutrición Cognitiva & Ventas</p>
                    <p className="text-xs text-gray-400">Biohacking, método Buteyko y Neuro-Entrenamiento en ventas.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">1h</div>
                  <div>
                    <p className="text-sm font-bold text-white">Pilar Espíritu: Oración & Devocional</p>
                    <p className="text-xs text-gray-400">Lectura bíblica diaria ('NeuroBiblia'), quietud y enfoque familiar.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 md:p-8 rounded-3xl bg-black/60 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <Sun className="text-temple-gold" size={24} />
                  <h3 className="text-lg font-black uppercase text-white tracking-wide">Sábados: CristoFit Camp (06:00 AM)</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Cada sábado la comunidad se reúne al amanecer para el entrenamiento grupal de los Escuadrones, seguido de degustación de infusiones en el Snack Bar y servicio comunitario solidario (*&quot;Palabra y Pan&quot;* y *&quot;Ciudad ética sin Basura&quot;*).
                </p>
                <div className="pt-2">
                  <Link
                    href="/escuadrones"
                    className="inline-flex items-center gap-2 text-xs font-bold text-temple-gold hover:text-white uppercase tracking-wider transition"
                  >
                    <span>Conocer los 25 Escuadrones y Fases</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Assessment Widget */}
      <section id="evaluacion" className="max-w-4xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0E1424] via-black/90 to-black border border-temple-gold/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/30 text-temple-gold text-[10px] font-black uppercase tracking-widest">
              <span>Paso {step} de 3 • Evaluación Diagnóstica</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-black uppercase text-white tracking-tight">
              Test de Diagnóstico <span className="italic text-temple-gold">del Atleta</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto">
              {step === 1 && "Selecciona la dimensión principal en la que deseas enfocarte."}
              {step === 2 && "Completa tus datos biométricos para que el Head Coach diseñe tu plan."}
              {step === 3 && "Diagnóstico generado. Envía tu ficha directa a WhatsApp."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
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
                    { id: 'fuerza', title: 'Fuerza & Físico', desc: 'Calistenia, Crossfit, quemar grasa y ganar tono' },
                    { id: 'habitos', title: 'Reto 21 Días', desc: 'Rutina 06:00 AM, disciplina y constancia' },
                    { id: 'liderazgo', title: 'Mente & Espíritu', desc: 'Neuro-ventas, dominio del estrés y fe' },
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
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Siguiente: Datos Biométricos →</span>
                </button>
              </motion.div>
            )}

            {/* STEP 2 */}
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
                        placeholder="Ej. Andrés Morales"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Celular / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+591 70012345"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Edad</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Ej. 28"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Peso (kg)</label>
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        placeholder="Ej. 75"
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Estatura (cm)</label>
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        placeholder="Ej. 174"
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
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none cursor-pointer"
                      >
                        <option value="Sedentario (Sin ejercicio previo)">Sedentario (Sin ejercicio previo)</option>
                        <option value="Principiante (1-2 días/sem)">Principiante (1-2 días/sem)</option>
                        <option value="Intermedio (3-4 días/sem)">Intermedio (3-4 días/sem)</option>
                        <option value="Avanzado (Entrenamiento constante)">Avanzado (Entrenamiento constante)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Horario Preferido</label>
                      <select
                        value={formData.preferredSchedule}
                        onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-sm text-white focus:border-temple-gold outline-none cursor-pointer"
                      >
                        <option value="Turno 06:00 AM (Reto 21 Días)">Turno 06:00 AM (Reto 21 Días)</option>
                        <option value="Turno Mañana (08:00 - 11:00)">Turno Mañana (08:00 - 11:00)</option>
                        <option value="Turno Tarde (15:00 - 18:00)">Turno Tarde (15:00 - 18:00)</option>
                        <option value="Turno Noche (19:00 - 21:00)">Turno Noche (19:00 - 21:00)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1 block">Objetivo Principal Concreto</label>
                    <textarea
                      rows={2}
                      value={formData.specificGoal}
                      onChange={(e) => setFormData({ ...formData, specificGoal: e.target.value })}
                      placeholder="Ej. Bajar 6kg de grasa, ganar fuerza en calistenia y vencer el estrés matutino..."
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
                      className="px-8 py-3.5 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-amber-400 transition shadow-lg flex items-center gap-2"
                    >
                      <span>Generar Diagnóstico</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto space-y-6"
              >
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-temple-gold/40 text-left space-y-4 shadow-xl">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="p-3 rounded-xl bg-temple-gold/20 text-temple-gold">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">¡Diagnóstico Listo para {formData.fullName}!</h4>
                      <p className="text-xs text-gray-400">Ficha procesada para el Head Coach Paulo Gil.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-temple-gold">Plan Recomendado</span>
                    <h5 className="text-base font-extrabold text-white">{getRecommendedPlan().title}</h5>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">{getRecommendedPlan().desc}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-300 space-y-1.5 font-mono">
                    <p><span className="text-temple-gold font-bold">• Atleta:</span> {formData.fullName}</p>
                    <p><span className="text-temple-gold font-bold">• Celular:</span> {formData.phone || 'N/A'}</p>
                    <p><span className="text-temple-gold font-bold">• Horario:</span> {formData.preferredSchedule}</p>
                    <p><span className="text-temple-gold font-bold">• Nivel:</span> {formData.activityLevel}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={openWhatsAppWithLead}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-emerald-500/20 transition flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    <span>Enviar Mi Ficha a Paulo por WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        fullName: '', phone: '', age: '', weight: '', height: '',
                        injuries: 'Ninguna (100% Sano)', preferredSchedule: 'Turno 06:00 AM (Reto 21 Días)',
                        activityLevel: 'Principiante (1-2 días/sem)', daysAvailable: 'Lunes a Viernes',
                        specificGoal: ''
                      });
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
        <p className="font-serif italic text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          &quot;El espíritu da el diseño. El cuerpo es el templo. La mente crea y edifica vidas.&quot;
        </p>
        <p className="text-xs text-temple-gold uppercase tracking-[0.3em] mt-4 font-black">
          — Paulo Alberto Gil Cuellar • TEMPLEFIT Santa Cruz, Bolivia
        </p>
      </section>

    </motion.div>
  );
}
