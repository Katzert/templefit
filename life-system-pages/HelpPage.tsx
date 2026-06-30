import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { HelpCircle, BookOpen, ChevronDown, CheckCircle2, Play, Users, MessageSquare, ShieldAlert } from 'lucide-react';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } } };

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿Cómo se calculan las horas productivas diarias?",
    answer: "El sistema divide el día en 3 bloques de alto rendimiento (Mañana, Tarde y Noche). Cada bloque marcado como productivo suma 6 horas a tu registro, completando un objetivo ideal de 18 horas de enfoque diario (restando 6 horas sugeridas de descanso)."
  },
  {
    question: "¿Qué son las 'Fugas de Energía' y cómo las elimino?",
    answer: "Las fugas son hábitos negativos o distracciones que sabotean tu progreso (ej. comer azúcar, trasnochar, exceso de redes sociales). Se listan en el bloque 'Hacer Menos' y se miden diariamente para ayudarte a erradicarlas usando el principio de 'Vía Negativa'."
  },
  {
    question: "¿Quién puede editar mi Ficha Técnica y mi Plan de Entrenamiento?",
    answer: "La Ficha Técnica y los planes de entrenamiento (Calistenia, CrossFit, Boxeo, Funcional Terapéutico) están bloqueados por seguridad. Solo tu Instructor o Administrador certificado tiene permisos para editarlos y asignarte cargas."
  },
  {
    question: "¿Cómo funciona la Auditoría Mensual?",
    answer: "Es una evaluación integral basada en la 'Rueda de la Vida'. Califica tu progreso en las 3 dimensiones (Cuerpo, Mente y Espíritu) y genera un gráfico de radar (radar chart) que muestra tus desequilibrios para corregirlos el siguiente mes."
  },
  {
    question: "Soy Instructor, ¿cómo cambio de alumno en foco?",
    answer: "En la barra lateral izquierda (Sidebar), los Instructores y Administradores tienen un selector llamado 'Alumno en Foco'. Al cambiar de alumno, todo el dashboard cargará instantáneamente los datos de ese atleta en particular."
  }
];

export function HelpPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      title: "1. Completa tu Bitácora Diaria",
      desc: "Registra tus bloques productivos, tus horas de sueño, agua y tacha los fallos del día. Hazlo cada noche en la pestaña 'Registro Diario'.",
      icon: "📝"
    },
    {
      title: "2. Consistencia en tus Hábitos",
      desc: "Marca tus victorias en el calendario de 31 días. Cada día que cumplas con tus compromisos sin caer en fugas, es una victoria marcada.",
      icon: "🏆"
    },
    {
      title: "3. Revisa tus Rutinas Deportivas",
      desc: "Entra a la 'Ficha Técnica' para ver los ejercicios recomendados por tu entrenador en Calistenia, Boxeo, CrossFit y Funcional.",
      icon: "🏋️"
    },
    {
      title: "4. Realiza tu Auditoría Semanal",
      desc: "Mide tus desviaciones y analiza tu gráfico de radar en la sección 'Auditoría Mensual'. Te dará claridad de dónde estás fallando.",
      icon: "📊"
    }
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 md:space-y-8 pb-12">
      <motion.div variants={item}>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
          AYUDA Y <span className="text-temple-gold">TUTORIALES</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest border-l-2 border-temple-gold pl-3">
          Domina el ecosistema TempleFit y acelera tu transformación.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left column: Quick tour */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BookOpen className="text-temple-gold" size={20} />
                  Guía de Inicio Rápido
                </CardTitle>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                  Sigue estos pasos esenciales para llevar tu registro diario de forma óptima.
                </p>
              </CardHeader>
              <CardContent>
                {/* Horizontal Steps Indicator */}
                <div className="grid grid-cols-4 gap-2 mb-6 mt-4">
                  {steps.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`py-3 px-2 rounded-xl border text-center transition-all ${
                        activeStep === idx
                          ? 'bg-temple-gold/10 border-temple-gold text-white shadow-[0_0_10px_rgba(197,160,89,0.15)]'
                          : 'bg-black/30 border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <div className="text-xl mb-1">{s.icon}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider hidden md:block">Paso {idx + 1}</div>
                    </button>
                  ))}
                </div>

                {/* Active Step Panel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3"
                  >
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="text-temple-gold text-xl">#</span> {steps[activeStep].title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {steps[activeStep].desc}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-temple-gold bg-temple-gold/5 p-3 rounded-lg border border-temple-gold/15">
                      <CheckCircle2 size={14} className="shrink-0" />
                      <span>Consejo Elite: Dedica solo 2 minutos antes de acostarse para actualizar tu bitácora.</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQs Accordion */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <HelpCircle className="text-temple-gold" size={20} />
                  Preguntas Frecuentes (FAQ)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 mt-4">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border-b border-white/5 pb-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-2 font-bold text-sm text-white hover:text-temple-gold transition"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={16} className={`text-temple-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-gray-400 leading-relaxed mt-2 pl-1 bg-white/[0.01] p-3 rounded-xl border border-white/5">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right column: Interactive tutorials */}
        <div className="lg:col-span-4 space-y-6">
          {/* Video Tutorials Card */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Play className="text-temple-gold" size={18} />
                  Video Tutoriales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-4">
                {[
                  { title: "Introducción a TempleFit", duration: "3:45", desc: "Aprende a navegar el sistema.", preview: "bg-gradient-to-tr from-temple-navy-dark to-temple-navy border border-temple-gold/10" },
                  { title: "Gestión de Alumnos (Instructores)", duration: "5:20", desc: "Cómo prescribir rutinas y revisar fatiga.", preview: "bg-gradient-to-tr from-temple-navy to-black border border-white/5" }
                ].map((v, i) => (
                  <div key={i} className="group cursor-pointer space-y-2">
                    <div className={`h-36 w-full rounded-2xl flex items-center justify-center relative overflow-hidden ${v.preview}`}>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="w-12 h-12 rounded-full bg-temple-gold text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition z-10">
                        <Play size={20} fill="black" className="ml-1" />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[9px] font-mono text-gray-300 z-10">{v.duration}</span>
                    </div>
                    <div className="px-1">
                      <h4 className="text-xs font-bold text-white group-hover:text-temple-gold transition leading-tight">{v.title}</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Support */}
          <motion.div variants={item}>
            <Card className="border-t-4 border-t-temple-gold">
              <CardContent className="!p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-temple-gold/10 border border-temple-gold/30 flex items-center justify-center mx-auto text-temple-gold">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">¿Necesitas soporte técnico?</h3>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Nuestro comando de soporte está listo para ayudarte con tu cuenta o errores de visualización.
                  </p>
                </div>
                <button className="w-full bg-temple-gold hover:bg-temple-gold/90 text-black font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-xl transition-all">
                  Contactar Soporte
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
