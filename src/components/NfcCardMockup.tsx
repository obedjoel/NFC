import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { Radio, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface CardModel {
  id: string;
  name: string;
  brand: string;
  subtitle: string;
  holder: string;
  chipLabel: string;
  themeClass: string;
  accentClass: string;
  badgeBg: string;
  textColor: string;
}

const MODELS: CardModel[] = [
  {
    id: 'cyberpunk-cyan',
    name: 'Cian Corporativo (ONE Estudio Gráfico)',
    brand: 'ONE',
    subtitle: 'ESTUDIO GRÁFICO',
    holder: 'SANTIAGO NAVARRO',
    chipLabel: 'NTAG215 • 13.56 MHz',
    themeClass: 'bg-gradient-to-br from-[#0c3c66] via-[#041629] to-[#041d33]',
    accentClass: 'text-cyan-400',
    badgeBg: 'bg-cyan-400 text-slate-950',
    textColor: 'text-white'
  },
  {
    id: 'gold-luxury',
    name: 'Oro Mate & Negro Carbón',
    brand: 'MARQUIS',
    subtitle: 'PRIVATE ESTATE',
    holder: 'ALESSANDRO VANCE',
    chipLabel: 'SECURE RFID • NFC',
    themeClass: 'bg-gradient-to-br from-[#1e1e20] via-[#0e0e0f] to-[#1a1916]',
    accentClass: 'text-amber-500',
    badgeBg: 'bg-amber-500 text-slate-950',
    textColor: 'text-slate-100'
  },
  {
    id: 'stealth-carbon',
    name: 'Esmeralda & Gris Oscuro Slim',
    brand: 'NEXUS',
    subtitle: 'KINETIC SYSTEMS',
    holder: 'ELENA ROSTOVA',
    chipLabel: 'NTAG215 • PROTOCOL A',
    themeClass: 'bg-gradient-to-br from-[#0e1411] via-[#050a07] to-[#12241b]',
    accentClass: 'text-emerald-400',
    badgeBg: 'bg-emerald-500 text-slate-950',
    textColor: 'text-white'
  },
  {
    id: 'minimal-coral',
    name: 'Blanco Nieve & Azul Cobalto',
    brand: 'STUDIO',
    subtitle: 'CREATIVE DESIGN',
    holder: 'VALENTINA RUIZ',
    chipLabel: 'SMART LINK v22',
    themeClass: 'bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]',
    accentClass: 'text-blue-600',
    badgeBg: 'bg-blue-600 text-white',
    textColor: 'text-slate-900'
  }
];

export const NfcCardMockup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVertical, setIsVertical] = useState(false);

  // Motion values for subtle interactive desk tilt effect
  const x = useMotionValue(200);
  const y = useMotionValue(100);

  // Tilt ranges for elegant cursor feedback
  const tiltX = useTransform(y, [0, 200], [13, -13]);
  const tiltY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(100);
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MODELS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MODELS.length) % MODELS.length);
  };

  const activeCard = MODELS[currentIndex];

  return (
    <div className="flex flex-col items-center gap-3 py-1 w-full max-w-lg mx-auto">
      {/* Carousel Selector & Orientation Selector Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-[340px] sm:max-w-[360px]">
        {/* Carousel selector */}
        <div className="flex items-center justify-between flex-1 bg-slate-950/40 border border-slate-800/60 p-1.5 rounded-sm w-full">
          <button
            onClick={handlePrev}
            className="p-1 px-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-[9.5px] font-mono tracking-widest text-slate-300 font-bold uppercase truncate max-w-[150px] sm:max-w-[170px]">
            {activeCard.name}
          </span>
          <button
            onClick={handleNext}
            className="p-1 px-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Siguiente"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Orientation Toggle Group */}
        <div className="flex bg-slate-950/40 border border-slate-800/60 p-1 rounded-sm w-full sm:w-auto shrink-0 justify-center gap-1 select-none">
          <button
            onClick={() => setIsVertical(false)}
            className={`px-3 py-1 text-[8px] font-mono font-black tracking-wider rounded-sm transition-all cursor-pointer ${
              !isVertical 
                ? 'bg-cyan-500 text-slate-950' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HORIZONTAL
          </button>
          <button
            onClick={() => setIsVertical(true)}
            className={`px-3 py-1 text-[8px] font-mono font-black tracking-wider rounded-sm transition-all cursor-pointer ${
              isVertical 
                ? 'bg-cyan-500 text-slate-950' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            VERTICAL
          </button>
        </div>
      </div>

      {/* Main Perspective Container */}
      <div 
        className={`relative transition-all duration-300 ease-out [perspective:1200px] my-2 select-none ${
          isVertical 
            ? 'w-[215px] sm:w-[230px] h-[340px] sm:h-[365px]'
            : 'w-full max-w-[340px] sm:max-w-[360px] h-[210px] sm:h-[225px]'
        }`}
      >
        {/* Parent container handles the mouse hover 3D tilt interaction */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full relative cursor-grab active:cursor-grabbing preserve-3d"
        >
          {/* Card Outer Reflection Gloss Overlay (placed in 3D layer for realistic sheen) */}
          <div 
            className="absolute inset-0 z-30 pointer-events-none rounded-2xl overflow-hidden"
            style={{ 
              transform: 'translateZ(2px)', 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="w-full h-full mix-blend-color-dodge bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-60 pointer-events-none" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCard.id}-${isVertical ? 'vertical' : 'horizontal'}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className={`absolute inset-0 w-full h-full rounded-2xl ${activeCard.themeClass} shadow-xl shadow-black/50 p-5 sm:p-6 flex flex-col justify-between overflow-hidden`}
              style={{ 
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0px)',
              }}
            >
              {/* Subtle matte highlight to simulate light on printed card stock, kept safely away from the card edges */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              {isVertical ? (
                // 1. DYNAMIC VERTICAL CARD DESIGN (Sober, balanced distribution)
                <div className="flex flex-col justify-between h-full w-full z-10 relative text-center">
                  {/* Top: Brand, Logo & Chip Details */}
                  <div className="flex flex-col items-center pt-2">
                    <span className={`font-display font-black text-2xl tracking-widest ${activeCard.textColor} leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
                      {activeCard.brand}
                    </span>
                    <span className={`text-[7px] font-sans tracking-[0.35em] ${activeCard.accentClass} font-extrabold uppercase mt-1.5 block drop-shadow-sm`}>
                      {activeCard.subtitle}
                    </span>

                    {/* Compact Smart Chip below Logo */}
                    <div className="mt-4 flex flex-col items-center gap-1 font-mono text-[8px] tracking-wider text-slate-300">
                      <span className={`font-black text-slate-950 ${activeCard.badgeBg.split(' ')[0]} px-1.5 py-0.5 rounded shadow-sm text-[6.5px]`}>
                        INTEL TECH
                      </span>
                      <span className="opacity-80 text-[6.5px] mt-0.5 font-bold font-mono">{activeCard.chipLabel}</span>
                    </div>
                  </div>

                  {/* Middle: Wireless contact sign */}
                  <div className="flex flex-col items-center justify-center my-2">
                    <div className="w-11 h-11 rounded-full bg-black/40 border border-slate-700/50 flex items-center justify-center shadow-lg relative">
                      <Radio size={18} className={`${activeCard.accentClass}`} />
                    </div>
                    <span className="text-[7px] font-mono tracking-[0.45em] text-slate-400/80 uppercase mt-2 font-black select-none">CONTACTLESS</span>
                  </div>

                  {/* Bottom: Holder details and NFC Premium certification Badge */}
                  <div className="flex flex-col items-center pb-2">
                    <div className="font-mono mb-3">
                      <span className="text-[6.5px] text-slate-400 tracking-widest block font-bold uppercase">TITULAR REGISTRADO</span>
                      <span className="text-[10px] sm:text-[10.5px] font-black tracking-widest text-white uppercase block mt-1 drop-shadow-md">
                        {activeCard.holder}
                      </span>
                    </div>

                    <div className={`flex items-center gap-1 ${activeCard.badgeBg} rounded px-2.5 py-0.5 shadow-md font-bold`}>
                      <Sparkles size={10} />
                      <span className="text-[7.5px] font-mono tracking-widest uppercase font-black">NFC PREMIUM</span>
                    </div>
                  </div>
                </div>
              ) : (
                // 2. DYNAMIC HORIZONTAL CARD DESIGN
                <div className="flex flex-col justify-between h-full w-full z-10 relative">
                  {/* Top Row: Brand & Subtitle (Left), Smart Chip (Right) */}
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col text-left">
                      <span className={`font-display font-black text-2xl tracking-widest ${activeCard.textColor} leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
                        {activeCard.brand}
                      </span>
                      <span className={`text-[7.5px] font-sans tracking-[0.35em] ${activeCard.accentClass} font-extrabold uppercase mt-1.5 block drop-shadow-sm`}>
                        {activeCard.subtitle}
                      </span>
                    </div>

                    <div className="flex flex-col items-end text-right font-mono text-[8px] tracking-wider text-slate-300">
                      <span className={`font-black text-slate-950 ${activeCard.badgeBg.split(' ')[0]} px-1.5 py-0.5 rounded shadow-sm text-[7px]`}>
                        INTEL TECH
                      </span>
                      <span className="opacity-80 text-[7px] mt-1 font-bold">{activeCard.chipLabel}</span>
                    </div>
                  </div>

                  {/* Center Row: Wireless Signal Beacon */}
                  <div className="flex flex-col items-center justify-center py-2">
                    <div className="w-12 h-12 rounded-full bg-black/40 border border-slate-700/50 flex items-center justify-center shadow-lg relative">
                      <Radio size={20} className={`${activeCard.accentClass} rotate-90`} />
                    </div>
                    <span className="text-[8px] font-mono tracking-[0.5em] text-slate-400/80 uppercase mt-2.5 font-bold">CONTACTLESS</span>
                  </div>

                  {/* Bottom Row: Holder Registered Name (Left), NFC Badge (Right) */}
                  <div className="flex justify-between items-end">
                    <div className="text-left font-mono">
                      <span className="text-[7px] text-slate-400 tracking-widest uppercase block font-bold">TITULAR REGISTRADO</span>
                      <span className="text-[10px] sm:text-[10.5px] font-black tracking-widest text-white uppercase block mt-1 drop-shadow-md">
                        {activeCard.holder}
                      </span>
                    </div>

                    <div className={`flex items-center gap-1.5 ${activeCard.badgeBg} rounded px-2.5 py-1 shadow-md font-bold`}>
                      <Sparkles size={11} />
                      <span className="text-[8px] font-mono tracking-widest uppercase font-black">NFC PREMIUM</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bullet Dot Indicators */}
      <div className="flex gap-2 justify-center mt-1">
        {MODELS.map((model, idx) => (
          <button
            key={model.id}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-slate-700 hover:bg-slate-600'
            }`}
            title={`Modelo ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
