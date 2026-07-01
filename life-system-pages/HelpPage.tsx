import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { HelpCircle, ChevronDown, CheckCircle2, Shield, Award, UserCheck, AlertTriangle, Play, Sparkles } from 'lucide-react';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } } };

interface FAQItem {
  question: string;
  answer: string;
}

export function HelpPage() {
  const { user } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const role = user?.role || 'alumno';

  // Automatically reset active step when role changes
  useEffect(() => {
    setActiveStep(0);
    setOpenFaq(null);
  }, [role]);

  // 1. Role-specific content definition
  const roleContent = {
    alumno: {
      badge: "Perfil Atleta",
      badgeColor: "bg-temple-gold/10 text-temple-gold border-temple-gold/20",
      title: "Tu Ruta de Transformación",
      intro: "Como Alumno en TempleFit, tu misión es registrar tu consistencia diaria y seguir el plan trazado por tu coach. El sistema evalúa tu disciplina física, mental y espiritual.",
      steps: [
        {
          title: "Bitácora Diaria (Mente, Cuerpo, Espíritu)",
          desc: "Cada noche ingresa a 'Registro Diario'. Registra tus horas de sueño, tu hidratación y marca tus 'Bloques de Alto Rendimiento' (Mañana, Tarde y Noche). Asegúrate de realizar tu checklist mental y espiritual (meditación, lectura).",
          instruction: "⚠️ Vía Negativa (Checklist de Fallos): Sé honesto y escribe los hábitos negativos en los que caíste hoy (comer azúcar, procrastinar). Reconocer tus errores es el primer paso.",
          icon: "📝"
        },
        {
          title: "Tracker de Hábitos (Vía Positiva)",
          desc: "En la pestaña 'Tracker Hábitos' verás tu calendario mensual de 31 días. Marca el día como completado si lograste hacer tus hábitos positivos (Hacer Más) y evitaste tus hábitos negativos (Hacer Menos).",
          instruction: "🔥 Racha: Mantén la consistencia para elevar tu racha de victorias y ver subir tu barra de progreso mensual.",
          icon: "🏆"
        },
        {
          title: "Tu Ficha Técnica Deportiva",
          desc: "Accede a 'Ficha Técnica'. Aquí puedes ver tu plan de entrenamiento personalizado en Calistenia, Boxeo, CrossFit o Ejercicio Funcional Terapéutico, además de tus notas de salud y lesiones.",
          instruction: "🔒 Vista Protegida: No puedes modificar esta sección. Si requieres cambios de peso, altura o rutina, debes pedírselo a tu Instructor para que actualice tu ficha.",
          icon: "🏋️"
        },
        {
          title: "Auditoría de Rendimiento Mensual",
          desc: "Al final de la semana o mes, ve a 'Auditoría Mensual'. Aquí verás tu gráfico de radar (radar chart) que evalúa visualmente el balance entre tu Cuerpo, Mente y Espíritu, además de tus principales distractores.",
          instruction: "📊 Rueda del Rendimiento: Busca un gráfico balanceado. Los picos y valles te dirán de inmediato dónde estás descuidando tu vida.",
          icon: "📊"
        }
      ],
      faqs: [
        {
          question: "¿Cómo se calculan mis horas productivas diarias?",
          answer: "El día se divide en 3 bloques productivos (Mañana, Tarde, Noche). Cada bloque activado representa 6 horas de enfoque activo, sumando un objetivo ideal de 18 horas productivas diarias (dejando 6 horas para el descanso)."
        },
        {
          question: "¿Por qué no puedo editar mis ejercicios en la Ficha Técnica?",
          answer: "Por seguridad deportiva y metodológica, la prescripción de rutinas está a cargo exclusivo de instructores capacitados. Esto asegura que no cargues más peso o volumen del adecuado para tus lesiones o condición física."
        },
        {
          question: "¿Qué pasa si olvido registrar un día?",
          answer: "La consistencia es clave. Te recomendamos registrar tu bitácora al final del día. Si olvidas un día, tu racha se reiniciará a cero. ¡La disciplina no se toma vacaciones!"
        }
      ],
      checklist: [
        { id: 'c1', text: 'Completar perfil y propósito de vida.', checked: true },
        { id: 'c2', text: 'Registrar la Bitácora Diaria hoy.', checked: false },
        { id: 'c3', text: 'Revisar la Ficha Técnica asignada por mi coach.', checked: false },
        { id: 'c4', text: 'Analizar mi gráfico de radar en Auditoría.', checked: false }
      ]
    },
    instructor: {
      badge: "Perfil Instructor / Coach",
      badgeColor: "bg-temple-gold/20 text-temple-gold border-temple-gold/40 animate-pulse",
      title: "Guía de Gestión Metodológica",
      intro: "Tu rol es guiar, prescribir y evaluar el proceso de transformación del alumno. Tienes el control metodológico de las rutinas de CrossFit, Calistenia, Boxeo y Terapia Funcional.",
      steps: [
        {
          title: "Selección del Alumno en Foco (CRÍTICO)",
          desc: "Antes de realizar cualquier acción o evaluación, debes seleccionar al alumno que vas a evaluar en el selector 'Alumno en Foco' que aparece en la barra lateral izquierda (Sidebar).",
          instruction: "💡 Consejo: Toda la información que edites se guardará exclusivamente en el expediente del alumno seleccionado.",
          icon: "👥"
        },
        {
          title: "Prescripción de Rutinas y Ficha Clínica",
          desc: "Entra a 'Ficha Técnica'. Como instructor, tienes campos editables. Puedes hacer clic en cualquiera de las cajas de texto de CrossFit, Calistenia, Boxeo o Terapia Funcional para prescribir rutinas.",
          instruction: "✍️ Edición en Vivo: Escribe el plan de entrenamiento, haz clic fuera del campo y los cambios se guardarán automáticamente en tiempo real.",
          icon: "📐"
        },
        {
          title: "Libro Operativo Diario (LOD)",
          desc: "Ingresa a 'Libro Operativo'. Esta es tu herramienta de gestión comercial y de entrenamientos. Registra el Fundamento del Día, el Objetivo Principal y detalla las actividades y el foco comercial en cada franja horaria.",
          instruction: "💼 Foco Comercial: Asegúrate de alinear a tu equipo sobre qué producto destacar (retos, suplementos, renovaciones) en cada hora.",
          icon: "📖"
        },
        {
          title: "Bitácora de Cambios (Changelog de Seguridad)",
          desc: "Cada vez que actualices el peso de un alumno, edites una rutina o modifiques una métrica, el sistema registrará una entrada en la pestaña 'Registro de Cambios'.",
          instruction: "🔒 Transparencia: Este registro no se puede borrar y sirve para que el Administrador audite la calidad del entrenamiento y evite cambios no autorizados.",
          icon: "🛡️"
        }
      ],
      faqs: [
        {
          question: "¿Cómo calculo el IMC del alumno?",
          answer: "Ve a 'Ficha Técnica' y edita el peso o la estatura del alumno. El sistema recalcula el IMC de forma automática al instante aplicando la fórmula internacional (Peso / Altura²)."
        },
        {
          question: "¿Cómo veo el progreso histórico de mi alumno?",
          answer: "Puedes navegar a la pestaña 'Auditoría Mensual' teniendo al alumno seleccionado en foco. Allí verás el estado actual de su radar de desempeño y distractores."
        },
        {
          question: "¿Qué debo escribir en el Foco Comercial del Libro Operativo?",
          answer: "Debes detallar qué producto o servicio promover durante esa hora (ej: 'Venta de Proteína Whey', 'Promoción de Franquicias', 'Inscripción al Reto 21 Días')."
        }
      ],
      checklist: [
        { id: 'i1', text: 'Seleccionar al alumno en foco en el sidebar.', checked: false },
        { id: 'i2', text: 'Actualizar peso y estatura del alumno en su Ficha Técnica.', checked: false },
        { id: 'i3', text: 'Escribir la rutina de boxeo/calistenia del alumno.', checked: false },
        { id: 'i4', text: 'Registrar la directiva del Libro Operativo del día.', checked: false }
      ]
    },
    admin: {
      badge: "Perfil Administrador / Director",
      badgeColor: "bg-temple-red/20 text-temple-red border-temple-red/40",
      title: "Control Operativo y Comercial",
      intro: "Eres el responsable del éxito operativo, comercial y de marca de la franquicia. Tienes acceso completo a la configuración de usuarios, finanzas y calendarios de marketing.",
      steps: [
        {
          title: "Configuración y Roles de Usuarios",
          desc: "Ingresa a la pestaña 'Configuración'. Aquí puedes ver la lista de todos los usuarios registrados en tu franquicia, su estado (activo/inactivo), su fecha de registro y su marca de último acceso.",
          instruction: "👑 Gestión de Permisos: Haz clic en el botón de rol del usuario para ascenderlo o cambiar su rol cíclicamente (Alumno -> Instructor -> Admin).",
          icon: "⚙️"
        },
        {
          title: "Cuadro de Mando Financiero (QoS Comercial)",
          desc: "Accede a 'Dashboard Financiero'. Evalúa las gráficas de ingresos mensuales, la relación de gastos operativos e impuestos, y el porcentaje neto de rentabilidad del mes.",
          instruction: "💵 Toma de Decisiones: Utiliza el gráfico de barras y el breakdown para controlar el flujo de caja y la viabilidad económica de la franquicia.",
          icon: "📈"
        },
        {
          title: "Calendario Editorial de Redes Sociales",
          desc: "Ve a 'Redes Sociales'. Esta herramienta te permite organizar 12 meses de contenido publicitario. Planifica fecha, hora, copy detallado para Facebook/Instagram/Linkedin, hashtags y palabras clave.",
          instruction: "📱 Estrategia Digital: Diseña copys enfocados a potenciar habilidades blandas, invitar a entrenamientos de prueba y promocionar la adquisición de nuevas franquicias.",
          icon: "📱"
        },
        {
          title: "Auditoría de Operaciones",
          desc: "Monitorea el 'Registro de Cambios' global. Asegura que los entrenadores cumplan con las cargas técnicas y que no se modifiquen los históricos de los alumnos de forma inadecuada.",
          instruction: "🔍 Supervisión: Revisa las firmas digitales y fechas de modificación para mantener el estándar premium de la marca.",
          icon: "🔍"
        }
      ],
      faqs: [
        {
          question: "¿Cómo suspendo temporalmente el acceso de un usuario?",
          answer: "En la pestaña 'Configuración', ubica al usuario en la tabla y haz clic sobre su botón de estado (marcado como 'activo'). Cambiará a 'inactivo' y su acceso al dashboard quedará bloqueado de inmediato."
        },
        {
          question: "¿Cómo edito los gastos mensuales en el Dashboard Financiero?",
          answer: "Las métricas financieras se consolidan del sistema de caja. Actualmente en esta demo se renderizan de forma analítica para visualización comercial del negocio."
        },
        {
          question: "¿Cómo audito el último ingreso de un instructor?",
          answer: "Ve a la pestaña 'Configuración' y revisa la columna 'Último Acceso'. Ahí verás el registro exacto de fecha y hora en el que el instructor inició sesión."
        }
      ],
      checklist: [
        { id: 'a1', text: 'Revisar la tabla de último acceso de mis instructores.', checked: false },
        { id: 'a2', text: 'Analizar la rentabilidad en el Dashboard Financiero.', checked: false },
        { id: 'a3', text: 'Planificar el calendario de publicaciones en Redes Sociales.', checked: false },
        { id: 'a4', text: 'Auditar los últimos cambios de rutinas en el Registro de Cambios.', checked: false }
      ]
    }
  };

  const content = roleContent[role as keyof typeof roleContent] || roleContent.alumno;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 md:space-y-8 pb-12">
      
      {/* Header & Role Badge */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-white tracking-tighter">
            AYUDA Y <span className="text-temple-gold">TUTORIALES</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest border-l-2 border-temple-gold pl-3">
            Guía metodológica interactiva adaptada a tu perfil.
          </p>
        </div>
        <div className={`px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-widest self-start md:self-center flex items-center gap-2 ${content.badgeColor}`}>
          <Shield size={14} />
          {content.badge}
        </div>
      </motion.div>

      {/* Intro card */}
      <motion.div variants={item}>
        <Card className="bg-gradient-to-br from-temple-navy/40 to-transparent border-temple-gold/20">
          <CardContent className="!p-6 flex items-start gap-4">
            <div className="text-3xl shrink-0 p-3 bg-temple-gold/10 border border-temple-gold/20 rounded-2xl text-temple-gold">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hola, {user?.name || 'Atleta'}</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-3xl">
                {content.intro} A continuación tienes tu manual de operaciones interactivas paso a paso.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Role-Specific Step Walkthrough */}
        <div className="lg:col-span-8 space-y-6">
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="text-temple-gold" size={20} />
                  {content.title}
                </CardTitle>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Toca las pestañas numéricas para aprender el flujo de trabajo correcto.
                </p>
              </CardHeader>
              <CardContent>
                {/* Horizontal Step Tabs Selector */}
                <div className="grid grid-cols-4 gap-2 mb-6 mt-2">
                  {content.steps.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`py-3 px-1 rounded-xl border text-center transition-all ${
                        activeStep === idx
                          ? 'bg-temple-gold/10 border-temple-gold text-white shadow-[0_0_10px_rgba(197,160,89,0.15)]'
                          : 'bg-black/30 border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <div className="text-xl mb-1">{s.icon}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider hidden md:block">Sección {idx + 1}</div>
                    </button>
                  ))}
                </div>

                {/* Active Step Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3 min-h-[180px] flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-temple-gold font-mono">#{activeStep + 1}</span> {content.steps[activeStep].title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {content.steps[activeStep].desc}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 text-[10px] text-temple-gold bg-temple-gold/5 p-3 rounded-lg border border-temple-gold/15 mt-3">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                      <span>{content.steps[activeStep].instruction}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Role-Specific FAQs */}
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <HelpCircle className="text-temple-gold" size={20} />
                  Preguntas Frecuentes ({role.toUpperCase()})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 mt-2">
                {content.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border-b border-white/5 pb-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-2 font-bold text-sm text-white hover:text-temple-gold transition"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown size={16} className={`text-temple-gold shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-gray-400 leading-relaxed mt-2 pl-3 py-3 border-l-2 border-temple-gold/30 bg-white/[0.01] rounded-r-xl">
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

        {/* Right Column: Interactive Checklist & Rules */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Interactive Checklist (Walkthrough Simulator) */}
          <motion.div variants={item}>
            <Card className="border-t-4 border-t-temple-gold">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <UserCheck className="text-temple-gold" size={18} />
                  Tu Lista de Onboarding
                </CardTitle>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Tareas para dominar tu rol en la plataforma.
                </p>
              </CardHeader>
              <CardContent className="space-y-4 mt-2">
                <div className="space-y-3">
                  {content.checklist.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-2.5 rounded-xl bg-black/20 border border-white/5">
                      <input 
                        type="checkbox" 
                        defaultChecked={item.checked} 
                        className="mt-1 accent-temple-gold cursor-pointer"
                        id={item.id}
                      />
                      <label htmlFor={item.id} className="text-xs text-gray-300 select-none cursor-pointer leading-tight">
                        {item.text}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Golden Rules Card */}
          <motion.div variants={item}>
            <Card className="border-t-4 border-t-temple-red">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="text-temple-red" size={18} />
                  Directivas de Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-gray-400 mt-2">
                <p className="leading-relaxed">
                  1. **Transparencia Radical:** El registro de fallos (Bitácora) no pretende juzgarte, sino darte claridad objetiva. Escribe la verdad.
                </p>
                <p className="leading-relaxed">
                  2. **No Compartir Credenciales:** Cada perfil tiene logs de auditoría asociados. El mal uso de una cuenta afecta la validez del sistema de calidad.
                </p>
                <p className="leading-relaxed">
                  3. **Soporte de Metodología:** Para dudas sobre ejercicios, consulta siempre la caja de comentarios en tu ficha para chatear con tu instructor.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
