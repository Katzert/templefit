export const siteConfig = {
  name: "TempleFit",
  slogan: "Centro de Transformación Integral",
  tagline: "Valores Eternos",
  contact: {
    whatsapp: "59170000000",
    message: "Quiero más información sobre TempleFit y el Reto de 21 Días."
  }
};

export const features = [
  {
    id: "reto21",
    title: "Reto 21 Días",
    description: "Programa intensivo de transformación. Hábitos, nutrición y comunidad para reiniciar tu metabolismo y tu mente.",
    icon: "Target",
    color: "temple-gold"
  },
  {
    id: "entrenamiento",
    title: "TempleFit Base",
    description: "Entrenamiento funcional diario diseñado para forjar disciplina, fuerza real y resistencia inquebrantable.",
    icon: "Flame",
    color: "temple-red"
  },
  {
    id: "neuro",
    title: "Neuro Espiritual",
    description: "Mentoría enfocada en inteligencia emocional, ventas y liderazgo bajo principios eternos.",
    icon: "Brain",
    color: "temple-gold"
  },
  {
    id: "sabado",
    title: "Sábado CristoFit",
    description: "Nuestra reunión semanal cumbre. Integración, entrenamiento al aire libre y crecimiento espiritual comunitario.",
    icon: "Users",
    color: "temple-navy"
  }
];

export const testimonials = [
  {
    text: "No es solo sudar, es entrenar con propósito. Las unidades de impacto me ayudaron a transformar no solo mi cuerpo sino mi visión de los negocios.",
    author: "Marcos V.",
    role: "Reto 21 Días",
    initial: "M"
  },
  {
    text: "La hermandad que se forma aquí es real. Sábado CristoFit se ha convertido en el mejor momento de mi semana.",
    author: "Elena R.",
    role: "Atleta TempleFit",
    initial: "E"
  },
  {
    text: "Integrar mi fe con mis objetivos de salud y liderazgo empresarial me dio la claridad mental que buscaba.",
    author: "Carlos D.",
    role: "Neuro Espiritual",
    initial: "C"
  }
];

export const products = [
  {
    id: "plan-keto",
    name: "Plan Nutricional Integral",
    price: 250,
    category: "Suscripción",
    description: "Acompañamiento nutricional optimizado para el Reto 21 Días.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "camiseta-alpha",
    name: "Camiseta Oficial TempleFit",
    price: 35,
    category: "Textil",
    description: "Algodón premium con diseño exclusivo de Comando Táctico.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proteina",
    name: "Suplementación Base",
    price: 60,
    category: "Suplemento",
    description: "Proteínas e insumos de alta pureza para recuperación muscular.",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop"
  }
];

export const alliances = [
  {
    title: "Comunidad Activa",
    description: "Generamos retención al forjar relaciones genuinas y valores compartidos.",
    icon: "Users"
  },
  {
    title: "Sistema Integral",
    description: "4 unidades de impacto que aseguran crecimiento en todas las áreas del usuario.",
    icon: "Target"
  },
  {
    title: "Crecimiento Sostenible",
    description: "Un modelo escalable basado en resultados reales y testimonios de transformación.",
    icon: "TrendingUp"
  }
];

export const recipeCategories = [
  { id: "all", label: "Todas" },
  { id: "desayuno", label: "Desayuno" },
  { id: "almuerzo", label: "Almuerzo" },
  { id: "cena", label: "Cena" },
  { id: "snack", label: "Snack" },
];

export const recipes = [
  {
    id: "avocado-power-bowl",
    name: "Power Bowl de Aguacate y Huevos",
    category: "desayuno",
    time: 15,
    difficulty: "Fácil",
    servings: 1,
    description: "Arranca tu día con grasas saludables y proteína de alta biodisponibilidad. El desayuno oficial del Reto 21 Días.",
    ingredients: [
      "1 aguacate maduro",
      "2 huevos de pastoreo",
      "1 puñado de microgreens",
      "6 tomates cherry",
      "1 cdta de aceite de oliva extra virgen",
      "Sal rosada y pimienta al gusto"
    ],
    steps: [
      "Corta el aguacate por la mitad y retira la semilla.",
      "Calienta el aceite de oliva en sartén a fuego medio-alto.",
      "Fríe los huevos al gusto sin romper la yema.",
      "Monta el bowl: base de aguacate, huevos encima, rodea con tomates.",
      "Sazona con sal rosada y pimienta."
    ],
    macros: { calories: 420, protein: 18, fat: 34, carbs: 8 },
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pollo-grillado-tactical",
    name: "Pollo Grillado Táctico",
    category: "almuerzo",
    time: 25,
    difficulty: "Media",
    servings: 2,
    description: "Proteína magra con vegetales de hoja verde y grasas esenciales.",
    ingredients: [
      "2 pechugas de pollo deshuesadas",
      "2 tazas de mix de lechugas verdes",
      "1 aguacate en láminas",
      "1 limón",
      "2 cdas de aceite de oliva",
      "Sal y pimienta"
    ],
    steps: [
      "Sazona las pechugas con sal, pimienta y orégano.",
      "Grilla las pechugas 6-7 minutos por lado.",
      "Corta en láminas y sirve con ensalada verde y limón."
    ],
    macros: { calories: 480, protein: 42, fat: 28, carbs: 6 },
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "salmon-omega-force",
    name: "Salmón Omega Force",
    category: "cena",
    time: 20,
    difficulty: "Media",
    servings: 2,
    description: "Omega-3 para recuperación muscular y función cerebral superior.",
    ingredients: [
      "2 filetes de salmón (180g c/u)",
      "2 tazas de brócoli en floretes",
      "2 cdas de mantequilla ghee",
      "1 limón"
    ],
    steps: [
      "Hornea el salmón a 200°C por 12-15 minutos.",
      "Cocina al vapor el brócoli por 5 minutos.",
      "Sirve con mantequilla ghee y limón."
    ],
    macros: { calories: 510, protein: 38, fat: 32, carbs: 10 },
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "shake-warrior",
    name: "Shake del Guerrero",
    category: "snack",
    time: 5,
    difficulty: "Fácil",
    servings: 1,
    description: "Proteína + grasas saludables en menos de 5 minutos.",
    ingredients: [
      "1 scoop de proteína de suero (chocolate)",
      "1 cda de mantequilla de almendras",
      "200ml de leche de almendras sin azúcar",
      "Hielo al gusto"
    ],
    steps: [
      "Licúa todos los ingredientes a máxima potencia por 45 segundos.",
      "Sirve en vaso alto y disfruta."
    ],
    macros: { calories: 320, protein: 30, fat: 16, carbs: 6 },
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop"
  }
];
