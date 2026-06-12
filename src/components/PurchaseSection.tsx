import React, { useState } from 'react';
import { Check, MessageSquare } from 'lucide-react';

interface PurchaseSectionProps {
  onShowMessage: (msg: string) => void;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  recommended?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'PLAN BÁSICO',
    price: 49,
    tagline: 'Ideal para empezar.',
    features: [
      '1 Tarjeta NFC Premium con chip inteligente',
      'Configuración inicial de enlace único',
      'Código QR de respaldo impreso en reverso',
      'Enlace directo a WhatsApp corporativo',
      'Soporte técnico por correo electrónico',
    ],
  },
  {
    id: 'professional',
    name: 'PLAN PROFESIONAL',
    price: 79,
    tagline: 'La opción más recomendada.',
    features: [
      '1 Tarjeta NFC Premium con chip inteligente',
      'Micro-landing digital integrada personalizada',
      'Botonera interactiva de contacto y WhatsApp',
      'Enlaces ilimitados a Redes sociales y Catálogos',
      'Ubicación en Google Maps enlazada',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'PLAN PREMIUM',
    price: 99,
    tagline: 'Tu negocio en un toque inteligente.',
    features: [
      '1 Tarjeta NFC Premium con chip de última generación',
      'Micro-landing digital ultra-premium con diseño optimizado',
      'Botonera avanzada (WhatsApp, Redes, Teléfono, Email)',
      'Subida de Catálogo Digital de productos/servicios integrado',
      'Botón "Guardar Contacto Directo" (.vcf) en un clic',
      'Asesoría de diseño personalizada por ONE Estudio Gráfico',
    ],
  },
];

export const PurchaseSection: React.FC<PurchaseSectionProps> = ({ onShowMessage }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('professional');

  const selectedPlan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[1];

  const handleContactWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    const wsUrl = `https://wa.me/51991820599?text=${encoded}`;
    window.open(wsUrl, '_blank');
    onShowMessage('💬 Redirigiendo a WhatsApp para procesar tu consulta...');
  };

  return (
    <div className="space-y-12" id="order-section">
      {/* PLANS GRID */}
      <div>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-[0.25em] block">Catálogo Exclusivo</span>
          <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight">
            Nuestros Planes de Presentación NFC
          </h3>
          <p className="text-slate-400 font-serif text-sm">
            Elige el plan ideal para tus objetivos visuales y de vinculación profesional. Sin tarifas mensuales ni cargos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
          {PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative border p-6 sm:p-8 rounded-sm flex flex-col justify-between transition-all duration-300 cursor-pointer text-white group ${
                  isSelected
                    ? 'bg-[#080f25] border-cyan-500 shadow-lg shadow-cyan-500/10 scale-[1.02] ring-1 ring-cyan-500'
                    : 'bg-[#040a1c]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#070e20]'
                }`}
              >
                {/* Recommended Ribbon */}
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-[#020612] text-[8px] font-mono tracking-widest uppercase py-1 px-4 rounded-sm font-black shadow-md">
                    ★ RECOMENDADO
                  </div>
                )}

                <div className="space-y-4">
                  {/* Select indicator */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono tracking-widest opacity-60 uppercase block text-cyan-400 font-semibold">
                        {plan.id === 'basic' ? 'BÁSICO' : plan.id === 'professional' ? 'SOPORTE COMPLETO' : 'EDICIÓN ESPECIAL'}
                      </span>
                      <h4 className="text-base font-display font-bold uppercase tracking-wider text-white">
                        {plan.name}
                      </h4>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-cyan-500 border-cyan-500' : 'border-slate-700'
                    }`}>
                      {isSelected && <Check size={11} className="text-[#020612] font-bold" />}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-sans text-slate-400 font-light">S/</span>
                      <span className="text-4xl font-display font-extrabold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 italic font-light font-serif">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="border-t border-slate-800/80 pt-4 space-y-2.5">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex gap-2 text-[11px] items-start text-slate-300">
                        <Check size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span className="leading-tight opacity-95">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isSelected) {
                        const messageText = `Hola ONE Estudio Gráfico, deseo contratar el ${plan.name} (S/ ${plan.price}). Por favor, asísteme para iniciar con la creación de mi tarjeta de presentación NFC personalizada.`;
                        handleContactWhatsApp(messageText);
                      } else {
                        setSelectedPlanId(plan.id);
                      }
                    }}
                    className={`w-full py-2.5 text-[9px] font-mono tracking-widest uppercase rounded-sm border transition-all font-bold ${
                      isSelected
                        ? 'bg-cyan-500 text-[#020612] border-cyan-500 shadow-md shadow-cyan-500/10 hover:bg-cyan-400'
                        : 'bg-transparent text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isSelected ? '💬 ADQUIRIR ESTE PLAN' : 'SELECCIONAR PLAN'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
