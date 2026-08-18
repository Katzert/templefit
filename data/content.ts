export const siteConfig = {
  name: "TempleFit",
  slogan: "Centro de Transformación Holística",
  tagline: "El espíritu da el diseño. El cuerpo es el templo. La mente crea y edifica vidas.",
  contact: {
    whatsapp: "59169127691",
    message: "¡Hola Paulo! Quiero información sobre los programas de TempleFit y los Escuadrones."
  }
};

export const features = [
  {
    id: "reto21",
    title: "Reto 21 Días = ÍNTEGROS",
    description: "3 horas diarias innegociables: 1h Cuerpo + 1h Mente + 1h Espíritu. Reset metabólico y circadiano a las 06:00 AM.",
    icon: "Target",
    color: "temple-gold"
  },
  {
    id: "escuadrones",
    title: "Los 25 Escuadrones (Regla de los 12)",
    description: "Células tácticas de máximo 12 atletas para garantizar hermandad, apoyo mutuo y rendición de cuentas.",
    icon: "Users",
    color: "temple-navy"
  },
  {
    id: "gym",
    title: "GYM: Calistenia, Crossfit & Boxeo Ético",
    description: "Fuerza funcional, barras y combate técnico disciplinario sin violencia.",
    icon: "Flame",
    color: "temple-red"
  },
  {
    id: "sabado",
    title: "Sábados CristoFit Camp (06:00 AM)",
    description: "Entrenamiento al aire libre, degustación de infusiones en Snack Bar y servicio comunitario solidario.",
    icon: "Sun",
    color: "temple-gold"
  }
];

export const products = [
  {
    id: "reto-21-dias",
    name: "Membresía Reto 21 Días / Gym Funcional",
    price: 200,
    category: "Membresía",
    description: "Acceso integral a entrenamientos de calistenia, crossfit, boxeo ético y CristoFit Camp los sábados.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "polera-oficial",
    name: "Polera Oficial de Algodón TempleFit",
    price: 100,
    category: "Textil",
    description: "Algodón de alta densidad, corte vintage elegante y distintivo de escuadrón.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "shorts-oficial",
    name: "Shorts Deportivos Tácticos",
    price: 70,
    category: "Textil",
    description: "Microfibra de alto rendimiento transpirable para calistenia y combate ético.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hoodie-canguro",
    name: "Canguro / Hoodie Oficial TempleFit",
    price: 150,
    category: "Textil",
    description: "Tejido térmico resistente para el amanecer 06:00 AM en el CristoFit Camp.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ginkgo-biloba",
    name: "Ginkgo Biloba Neuro-Circulatorio (120 caps)",
    price: 150,
    category: "Suplemento",
    description: "Mejora la irrigación cerebral, memoria y concentración para el pilar mental.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "oleo-coco",
    name: "Óleo de Coco Extra Virgen (200 ml)",
    price: 75,
    category: "Suplemento",
    description: "Triglicéridos de cadena media (TCM): energía limpia inmediata para el cerebro.",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "colageno-hidrolizado",
    name: "Colágeno Hidrolizado Articular (100 ml)",
    price: 95,
    category: "Suplemento",
    description: "Protección de articulaciones y tendones para el impacto en calistenia.",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "glutamina-pura",
    name: "Glutamina Pura Anticatabólica (300 gr)",
    price: 150,
    category: "Suplemento",
    description: "Reparación de la mucosa digestiva e inmunidad post-entrenamiento de alta exigencia.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "catering-abuelafit",
    name: "Catering Saludable Mensual (Alianza Abuela Fit)",
    price: 900,
    category: "Nutrición",
    description: "Plan de comidas limpias sin azúcares ni ultraprocesados, pan sin levadura y viandas saludables.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=800&auto=format&fit=crop"
  }
];

export const recipeCategories = [
  { id: "all", label: "Todas" },
  { id: "bebidas", label: "Bebidas Funcionales" },
  { id: "desayuno", label: "Desayunos & Bowls" },
  { id: "almuerzo", label: "Almuerzos & Comidas" },
  { id: "snack", label: "Snack Bar & Repostería" }
];

export const recipes = [
  {
    id: "electrohidra-elite",
    name: "ElectroHidra 'Elite-Hydration' (Isotónica)",
    category: "bebidas",
    time: 5,
    difficulty: "Fácil",
    servings: 1,
    description: "Bebida isotónica natural (280-300 mOsm/kg) con buffer contra el lactato muscular y electrolitos puros.",
    ingredients: [
      "1 litro de agua filtrada",
      "1.2 g de sal marina natural",
      "0.6 g de bicarbonato de sodio (buffer contra lactato)",
      "0.6 g de cloruro de potasio",
      "100 mg de citrato de magnesio (anticalambres)",
      "60 g de miel pura de abeja (solución glucosa al 6%)",
      "30 ml de jugo de limón recién exprimido"
    ],
    steps: [
      "Disuelve la sal marina, el bicarbonato, el potasio y el magnesio en el agua filtrada a temperatura ambiente.",
      "Añade la miel pura y mezcla vigorosamente hasta homogenizar.",
      "Agrega el jugo de limón al final para conservar la vitamina C.",
      "Consume antes y durante el entrenamiento de alta intensidad."
    ],
    macros: { calories: 190, protein: 0, fat: 0, carbs: 48 },
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "electrodetox-blast",
    name: "ElectroDetox Blast (Descanso & Autofagia)",
    category: "bebidas",
    time: 10,
    difficulty: "Fácil",
    servings: 1,
    description: "Infusión antiparasitaria y desintoxicante. Cero azúcares para estimular la autofagia celular en días de reposo.",
    ingredients: [
      "1 litro de infusión de clavo de olor y canela",
      "1/2 taza de jugo de pepino fresco colado",
      "2 tallos de apio colados",
      "Zumo de 1 limón fresco",
      "1 cdta de jengibre fresco rallado",
      "6 a 8 hojas de menta fresca"
    ],
    steps: [
      "Prepara una infusión hirviendo 3 clavos de olor y 1 rama de canela en 1L de agua por 5 minutos.",
      "Deja enfriar y añade el extracto de pepino, apio, jengibre y zumo de limón.",
      "Machaca las hojas de menta para liberar aceites esenciales.",
      "Consumir en ayunas o en ventanas de descanso activo sin miel ni edulcorantes."
    ],
    macros: { calories: 35, protein: 1, fat: 0, carbs: 7 },
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "smoothie-salomon",
    name: "Smoothie Cerebral de Salomón (Neuro-Salud)",
    category: "bebidas",
    time: 5,
    difficulty: "Fácil",
    servings: 1,
    description: "Formulado para potenciar la neurogénesis, concentración y memoria. Con cúrcuma y piperina (+2000% absorción).",
    ingredients: [
      "60 g de aguacate maduro",
      "50 g de espinaca fresca",
      "60 g de arándanos frescos",
      "150 ml de leche de almendras sin azúcar",
      "15 g de semillas de chía",
      "2 g de cúrcuma (Cupesí) en polvo",
      "1 pizca de pimienta negra recién molida"
    ],
    steps: [
      "Coloca el aguacate, la espinaca y los arándanos en la licuadora.",
      "Vierte la leche de almendras y añade la chía.",
      "Incorpora la cúrcuma junto con la pimienta negra para activar la curcumina.",
      "Licúa durante 60 segundos hasta obtener una textura aterciopelada."
    ],
    macros: { calories: 260, protein: 6, fat: 18, carbs: 19 },
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "bowl-guerrero-elias",
    name: "Bowl del Guerrero de Elías (Pre-Entreno)",
    category: "desayuno",
    time: 8,
    difficulty: "Fácil",
    servings: 1,
    description: "Carga de energía de combustión lenta para sostener el esfuerzo en jaula de calistenia y crossfit.",
    ingredients: [
      "60 g de avena integral en hojuelas",
      "80 g de plátano maduro en rodajas",
      "15 g de semillas de chía",
      "20 g de nueces o almendras troceadas",
      "10 g de miel pura de abeja",
      "1 g de canela en polvo"
    ],
    steps: [
      "Cocina la avena con agua tibia o déjala reposar en leche vegetal.",
      "Cubre con las rodajas de plátano y las semillas de chía.",
      "Añade las nueces troceadas y baña con el hilo de miel pura.",
      "Espolvorea la canela y consume 60-90 minutos antes del entrenamiento."
    ],
    macros: { calories: 430, protein: 12, fat: 16, carbs: 62 },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "infusion-daniel",
    name: "Infusión Desintoxicante de Daniel",
    category: "bebidas",
    time: 7,
    difficulty: "Fácil",
    servings: 1,
    description: "Infusión caliente anti-inflamatoria de tradición bíblica para depuración hepática y confort articular.",
    ingredients: [
      "300 ml de agua pura",
      "5 g de jengibre fresco rallado",
      "2 g de cúrcuma en polvo",
      "15 ml de jugo de limón",
      "10 g de miel de abeja",
      "1 rama de canela entera"
    ],
    steps: [
      "Hierve el agua con el jengibre y la rama de canela durante 4 minutos.",
      "Apaga el fuego, añade la cúrcuma y deja infusionar tapado por 2 minutos.",
      "Cuela, añade el jugo de limón y endulza con miel pura.",
      "Tomar en la mañana o después del almuerzo."
    ],
    macros: { calories: 55, protein: 0, fat: 0, carbs: 14 },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
  }
];
