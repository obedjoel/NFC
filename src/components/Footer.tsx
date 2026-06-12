import React from 'react';
import { Wifi, Github, Radio, Cpu, Smartphone, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020612] border-t border-slate-800/80 py-16 px-6 md:px-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand details */}
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex flex-col text-left">
              <span className="font-display font-black tracking-widest text-base text-white">ONE</span>
              <span className="text-[7.5px] font-sans tracking-[0.35em] text-cyan-400 font-bold uppercase -mt-1">ESTUDIO GRÁFICO</span>
            </div>
            <div className="h-5 w-[1px] bg-slate-850" />
            <span className="text-[10px] font-mono tracking-widest text-slate-400">TARJETAS NFC</span>
          </div>
          <p className="max-w-xs leading-relaxed text-[11px] font-serif text-slate-400/80">
            La plataforma interactiva definitiva para vincular redes profesionales, programar citas y compartir contactos al instante de forma física y digital.
          </p>
        </div>

        {/* Feature quick lists */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-[9px] tracking-wider uppercase text-slate-400/70">
          <div className="flex items-center gap-1.5">
            <Cpu size={14} className="text-cyan-400/70" />
            <span>Chip NTAG215</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Smartphone size={14} className="text-cyan-400/70" />
            <span>Compatibilidad Universal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-cyan-400/70" />
            <span>Privacidad Descentralizada</span>
          </div>
        </div>

        {/* Legal & Copy rights */}
        <div className="text-center md:text-right space-y-2">
          <div className="text-slate-400/90">
            <span>© 2026 ONE Estudio Gráfico.</span>
            <span className="mx-2 font-serif">•</span>
            <a href="#order-section" className="text-slate-300 hover:text-cyan-400 font-semibold font-serif transition-colors">Condiciones</a>
          </div>
          <p className="text-[10px] text-slate-500/80 font-mono">
            Demostración interactiva premium con persistencia y simulación NFC.
          </p>
        </div>
      </div>
    </footer>
  );
};
