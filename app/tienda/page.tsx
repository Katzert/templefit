import { ShoppingBag, Utensils, Shirt } from 'lucide-react';

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-vintage-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 block">E-Commerce Minimalista</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-base">Nutrición y Equipamiento</h1>
          <p className="text-navy-light mt-4 max-w-2xl mx-auto">Potencia tu transformación con nuestros planes de Batch Cooking y porta nuestra armadura con orgullo.</p>
        </div>

        {/* Categoria Nutricion (Suscripciones) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-vintage-dark/30 pb-4">
            <Utensils className="w-8 h-8 text-accent-rust" />
            <h2 className="font-serif text-3xl font-bold text-navy-base">Suscripciones: Batch Cooking</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Producto 1 */}
            <div className="flex flex-col md:flex-row bg-vintage-base rounded-2xl overflow-hidden shadow-sm border border-vintage-dark/20">
              <div className="md:w-2/5 bg-navy-dark relative min-h-[200px]">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <Utensils className="w-20 h-20 text-vintage-light" />
                </div>
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-navy-base mb-2">Plan Keto Pro (5 Comidas/Día)</h3>
                  <p className="text-sm text-navy-light mb-4">Tercerizado con cocinas ocultas. Entregas diarias para optimizar tu rendimiento en el Reto 21 Días.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-serif font-bold text-2xl text-accent-rust">$250/mes</span>
                  {/* TODO: Connect with Payment Gateway API (Stripe/MercadoPago) */}
                  <button className="bg-navy-base text-vintage-light px-6 py-2 rounded-full font-bold hover:bg-navy-light transition-colors">Suscribirse</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categoria Merchandising */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-vintage-dark/30 pb-4">
            <Shirt className="w-8 h-8 text-accent-gold" />
            <h2 className="font-serif text-3xl font-bold text-navy-base">Armadura Templefit</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Merch Item */}
            <div className="bg-vintage-base rounded-xl p-4 border border-vintage-dark/20 text-center group cursor-pointer hover:shadow-md transition-all">
              <div className="bg-vintage-light aspect-square rounded-lg mb-4 flex items-center justify-center border border-vintage-dark/10 group-hover:border-accent-gold/50 transition-colors">
                <Shirt className="w-16 h-16 text-navy-light opacity-50" />
              </div>
              <h3 className="font-bold text-navy-base">Camiseta &quot;Escuadrón Alpha&quot;</h3>
              <p className="text-sm text-navy-light my-2">Estilo Vintage. Algodón premium.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-serif font-bold text-lg text-navy-base">$35.00</span>
                <button className="text-accent-rust font-bold hover:underline flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" /> Agregar
                </button>
              </div>
            </div>
            {/* Suplementos Item */}
            <div className="bg-vintage-base rounded-xl p-4 border border-vintage-dark/20 text-center group cursor-pointer hover:shadow-md transition-all">
              <div className="bg-vintage-light aspect-square rounded-lg mb-4 flex items-center justify-center border border-vintage-dark/10 group-hover:border-accent-gold/50 transition-colors">
                <div className="w-12 h-16 bg-navy-light rounded-sm opacity-50 relative">
                  <div className="absolute top-0 w-full h-4 bg-navy-base rounded-t-sm"></div>
                </div>
              </div>
              <h3 className="font-bold text-navy-base">Proteína Isolatada</h3>
              <p className="text-sm text-navy-light my-2">Gluten-Free. Sabor Vainilla Francesa.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-serif font-bold text-lg text-navy-base">$60.00</span>
                <button className="text-accent-rust font-bold hover:underline flex items-center gap-1">
                  <ShoppingBag className="w-4 h-4" /> Agregar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
