import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendoza',
    role: 'Agente Inmobiliario',
    company: 'RE/MAX Perú',
    text: 'Desde que uso la tarjeta NFC de ONE, mis clientes guardan mi contacto al instante tras mostrarles un inmueble. Ya no pierdo leads valiosos en papelitos. Sumamente profesional.'
  },
  {
    id: '2',
    name: 'Dra. Sofía Alarcón',
    role: 'Médico Pediatra',
    text: 'A los padres en la clínica les encanta. Solo acercan su teléfono y ya tienen mi número para emergencias, el link para pedir citas en WhatsApp y la ubicación de mi consultorio.'
  },
  {
    id: '3',
    name: 'Miguel Ángel Zevallos',
    role: 'Socio Fundador',
    company: 'Zevallos & Asociados Abogados',
    text: 'Muy elegante y moderna. En las reuniones en el juzgado o con clientes corporativos, el impacto es inmediato al compartir mi perfil con un solo toque. La personalización en el diseño de mi tarjeta PVC fue clave.'
  },
  {
    id: '4',
    name: 'Valeria Rojas',
    role: 'Arquitecta de Interiores',
    text: 'Mis clientes valoran la innovación y el buen gusto. Esta tarjeta me permite enlazarlos directamente a mi portafolio digital de proyectos al instante. ¡El diseño quedó idéntico a mi marca!'
  },
  {
    id: '5',
    name: 'Jorge Paredes',
    role: 'Asesor Financiero',
    text: 'Antes repartía decenas de tarjetas impresas que nadie guardaba. Con mi tarjeta de PVC personalizada transmito modernidad, ahorro dinero a largo plazo, y me aseguro de estar en sus contactos desde el primer día.'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="mt-28 py-12 border-t border-slate-850" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-[0.25em] block">Casos de Éxito</span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight">
            Experiencias Reales
          </h2>
          <p className="text-slate-400 text-sm">
            Profesionales peruanos de diversos rubros ya están modernizando su networking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className={`bg-[#040a1c]/60 border border-slate-800/80 p-6 rounded-sm relative group hover:border-slate-700 hover:bg-[#070e20] transition-colors shadow-md ${
                 idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                 idx === 4 ? 'md:col-span-2 lg:col-span-2 lg:mx-auto lg:max-w-md w-full' : ''
              }`}
            >
              <div className="flex items-center gap-1 mb-4 text-cyan-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" /> )}
              </div>
              <MessageSquareQuote size={28} className="text-slate-800/60 absolute top-6 right-6 group-hover:text-cyan-900/30 transition-colors" />
              <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="mt-auto border-t border-slate-800/50 pt-4">
                <h4 className="text-white font-bold tracking-wide uppercase text-sm sm:text-base">{t.name}</h4>
                <div className="flex flex-col mt-0.5">
                  <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">{t.role}</span>
                  {t.company && <span className="text-slate-500 text-xs font-sans mt-0.5">{t.company}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
