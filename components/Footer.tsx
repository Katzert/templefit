import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-vintage-base py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6 text-accent-gold" />
              <span className="font-serif text-xl font-bold text-accent-gold uppercase">Templefit</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Centro de Transformación integral: Cuerpo, Mente y Espíritu. Nutrición, entrenamiento funcional y desarrollo espiritual en comunidad.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent-gold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/" className="hover:text-accent-gold transition-colors">Reto 21 Días</Link></li>
              <li><Link href="/alianzas" className="hover:text-accent-gold transition-colors">Modelo de Franquicias</Link></li>
              <li><Link href="/tienda" className="hover:text-accent-gold transition-colors">Tienda y Nutrición</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent-gold mb-4">Nuestra Regla</h3>
            <p className="text-sm opacity-80 italic">&quot;Todo lo que hagan, háganlo de corazón.&quot;</p>
            <p className="mt-4 text-xs opacity-60">© 2024 Templefit S.R.L. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
