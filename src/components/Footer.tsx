import React from 'react';
import { Wifi, Github, Radio, Cpu, Smartphone, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-blue-100 py-16 px-6 md:px-12 text-blue-900 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand details */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="/logo.png" alt="ONE Estudio Gráfico" className="h-6 object-contain" />
            <div className="h-5 w-[1px] bg-blue-200" />
            <span className="text-xs font-mono tracking-widest text-blue-800">TARJETAS NFC</span>
          </div>
          <p className="max-w-xs leading-relaxed text-sm font-sans text-blue-700">
            La plataforma interactiva definitiva para vincular redes profesionales, programar citas y compartir contactos al instante de forma física y digital.
          </p>
        </div>

        {/* Feature quick lists */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-xs tracking-wider uppercase text-blue-800">
          <div className="flex items-center gap-1.5">
            <Cpu size={16} className="text-blue-600" />
            <span>Chip NTAG215</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Smartphone size={16} className="text-blue-600" />
            <span>Compatibilidad Universal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-blue-600" />
            <span>Privacidad Descentralizada</span>
          </div>
        </div>

        {/* Legal & Copy rights */}
        <div className="text-center md:text-right space-y-2 text-sm">
          <div className="text-blue-900">
            <span>© 2026 ONE Estudio Gráfico.</span>
            <span className="mx-2">•</span>
            <a href="#order-section" className="text-blue-700 hover:text-blue-500 font-semibold transition-colors">Condiciones</a>
          </div>
          <p className="text-xs text-blue-600/80 font-mono">
            Demostración interactiva premium con persistencia y simulación NFC.
          </p>
        </div>
      </div>
    </footer>
  );
};
