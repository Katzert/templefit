'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Utensils, Shirt, Zap, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { db } from '../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const IconMap: Record<string, any> = {
  Shirt,
  Zap,
  Star
};

// Simulate default products from fallback data if Firebase is not connected yet
const defaultProducts = [
  {
    id: 'prod-1',
    name: 'Whey Protein Isolate - 2lbs',
    description: 'Proteína aislada de rápida absorción, ideal para recuperación post-entreno.',
    price: 450,
    category: 'Suplementos',
    icon: 'Zap',
    features: ['25g Proteína por scoop', '0g Azúcar añadida', 'Sabor Vainilla Francesa']
  },
  {
    id: 'prod-2',
    name: 'Polera Oficial Oversize Black',
    description: 'Corte oversize diseñado para máxima movilidad y confort durante el entrenamiento pesado.',
    price: 180,
    category: 'Apparel',
    icon: 'Shirt',
    features: ['100% Algodón Premium', 'Estampado de alta densidad', 'Corte Oversize Drop-Shoulder']
  }
];

export default function TiendaPage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [storeProducts, setStoreProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const docRef = doc(db, 'workspaces', 'templefit-main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().inventory) {
          setStoreProducts(docSnap.data().inventory);
        } else {
          setStoreProducts(defaultProducts);
        }
      } catch (err) {
        console.warn("Firebase no configurado, usando data local", err);
        setStoreProducts(defaultProducts);
      }
    };
    fetchInventory();
  }, []);

  const handleOrder = (productName: string, price: number) => {
    const text = encodeURIComponent(`Hola TempleFit! Quisiera adquirir de la Armería TempleFit: ${productName} ($${price}). ¿Cómo realizo el pago/coordinación?`);
    window.open(`https://wa.me/59169127691?text=${text}`, '_blank');
  };

  return (
    <div className="animate-fade-in-up min-h-screen font-sans">
      {/* Header Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-24 overflow-hidden border-b border-temple-gold/20">
        <div className="absolute inset-0 bg-temple-navy-dark"></div>
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0B0F19]/90 to-[#0B0F19]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="inline-block px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-temple-gold">EQUIPAMIENTO & NUTRICIÓN DE ÉLITE</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white uppercase tracking-tight mb-6">
            LA <span className="text-temple-gold italic">ARMERÍA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Equipamiento oficial y nutrición para tu entrenamiento.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Nutrición Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-temple-gold">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-temple-gold">Nutrición y Suplementos</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-white uppercase">NUTRICIÓN Y <span className="text-temple-gold italic">SUPLEMENTOS</span></h2>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {storeProducts.filter(p => p.category === 'Suscripción').map((product) => (
              <div key={product.id} className="p-8 rounded-3xl bg-[#0B0F19] border border-white/10 flex flex-col md:flex-row gap-6 hover:border-temple-gold/40 transition group">
                <div className="md:w-2/5 relative min-h-[220px] rounded-2xl overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-3 left-3 bg-temple-gold text-black font-extrabold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                    RECOMENDADO
                  </div>
                </div>
                <div className="md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Sin Gluten / Sin Azúcar Añadida
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" /> Entrega Diaria 06:00 AM
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <div>
                      <span className="font-black text-3xl text-temple-gold">${product.price}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-1">/mes</span>
                    </div>
                    <button 
                      onClick={() => handleOrder(product.name, product.price)}
                      className="bg-temple-gold text-black px-6 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-widest hover:bg-amber-400 transition shadow-md"
                    >
                      Pedir Plan ↗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Merch Section */}
        <div>
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-temple-gold">
                <Shirt className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-temple-gold">Indumentaria Táctica</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-white uppercase">ARMADURA <span className="text-temple-gold italic">TEMPLEFIT</span></h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeProducts.filter(p => p.category !== 'Suscripción').map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-[#0B0F19] border border-white/10 flex flex-col justify-between hover:border-temple-gold/40 transition group">
                <div>
                  <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-black/40 relative">
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-temple-gold">
                      ${item.price}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{item.description}</p>
                </div>

                <button 
                  onClick={() => handleOrder(item.name, item.price)}
                  className="w-full bg-white/10 hover:bg-temple-gold hover:text-black border border-white/20 text-white font-extrabold text-xs uppercase tracking-widest py-3 rounded-xl transition"
                >
                  Adquirir Armadura ↗
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
