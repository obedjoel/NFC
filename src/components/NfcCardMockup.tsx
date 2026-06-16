import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { Radio, Sparkles, ChevronLeft, ChevronRight, Hexagon, ScanLine, Cpu, Fingerprint } from 'lucide-react';

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
  layout: 'corporate' | 'luxury' | 'tech' | 'minimal';
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
    textColor: 'text-white',
    layout: 'corporate'
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
    textColor: 'text-slate-100',
    layout: 'luxury'
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
    textColor: 'text-white',
    layout: 'tech'
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
    textColor: 'text-slate-900',
    layout: 'minimal'
  }
];

const CorporateCard = ({ card, isVertical }: { card: CardModel; isVertical: boolean }) => (
  isVertical ? (
    <div className="flex flex-col justify-between h-full w-full z-10 relative text-center">
      <div className="flex flex-col items-center pt-2">
        <span className={`font-display font-black text-2xl tracking-widest ${card.textColor} leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
          {card.brand}
        </span>
        <span className={`text-[10px] sm:text-[11px] font-sans tracking-[0.35em] ${card.accentClass} font-extrabold uppercase mt-1.5 block drop-shadow-sm`}>
          {card.subtitle}
        </span>
        <div className="mt-4 flex flex-col items-center gap-1 font-mono text-[10px] tracking-wider text-slate-300">
          <span className={`font-black text-slate-950 ${card.badgeBg.split(' ')[0]} px-1.5 py-0.5 rounded shadow-sm text-[9px]`}>
            INTEL TECH
          </span>
          <span className="opacity-80 text-[9px] mt-0.5 font-bold font-mono">{card.chipLabel}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <div className="w-12 h-12 rounded-full bg-black/40 border border-slate-700/50 flex items-center justify-center shadow-lg relative">
          <Radio size={20} className={`${card.accentClass}`} />
        </div>
        <span className="text-[9px] font-mono tracking-[0.45em] text-slate-400/80 uppercase mt-2 font-black select-none">CONTACTLESS</span>
      </div>
      <div className="flex flex-col items-center pb-2">
        <div className="font-mono mb-3">
          <span className="text-[9px] text-slate-400 tracking-widest block font-bold uppercase">TITULAR REGISTRADO</span>
          <span className="text-[12px] sm:text-[13px] font-black tracking-widest text-white uppercase block mt-1 drop-shadow-md">
            {card.holder}
          </span>
        </div>
        <div className={`flex items-center gap-1.5 ${card.badgeBg} rounded px-3 py-1 shadow-md font-bold`}>
          <Sparkles size={12} />
          <span className="text-[9.5px] font-mono tracking-widest uppercase font-black">NFC PREMIUM</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between h-full w-full z-10 relative">
      <div className="flex justify-between items-start">
        <div className="flex flex-col text-left">
          <span className={`font-display font-black text-2xl tracking-widest ${card.textColor} leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}>
            {card.brand}
          </span>
          <span className={`text-[10px] sm:text-[11px] font-sans tracking-[0.35em] ${card.accentClass} font-extrabold uppercase mt-1.5 block drop-shadow-sm`}>
            {card.subtitle}
          </span>
        </div>
        <div className="flex flex-col items-end text-right font-mono text-[9px] tracking-wider text-slate-300">
          <span className={`font-black text-slate-950 ${card.badgeBg.split(' ')[0]} px-1.5 py-0.5 rounded shadow-sm text-[9px]`}>
            INTEL TECH
          </span>
          <span className="opacity-80 text-[9px] mt-1 font-bold">{card.chipLabel}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <div className="w-14 h-14 rounded-full bg-black/40 border border-slate-700/50 flex items-center justify-center shadow-lg relative">
          <Radio size={24} className={`${card.accentClass} rotate-90`} />
        </div>
        <span className="text-[10px] font-mono tracking-[0.5em] text-slate-400/80 uppercase mt-2.5 font-bold">CONTACTLESS</span>
      </div>
      <div className="flex justify-between items-end">
        <div className="text-left font-mono">
          <span className="text-[10px] text-slate-400 tracking-widest uppercase block font-bold">TITULAR REGISTRADO</span>
          <span className="text-[12px] sm:text-[13px] font-black tracking-widest text-white uppercase block mt-1 drop-shadow-md">
            {card.holder}
          </span>
        </div>
        <div className={`flex items-center gap-1.5 ${card.badgeBg} rounded px-3 py-1.5 shadow-md font-bold`}>
          <Sparkles size={13} />
          <span className="text-[10px] font-mono tracking-widest uppercase font-black">NFC PREMIUM</span>
        </div>
      </div>
    </div>
  )
);

const LuxuryCard = ({ card, isVertical }: { card: CardModel; isVertical: boolean }) => (
  <div className="flex flex-col justify-between h-full w-full z-10 relative">
    <div className="absolute inset-0 border border-amber-500/30 rounded-xl z-0 pointer-events-none opacity-40 -m-1" />
    
    <div className={`flex h-full ${isVertical ? 'flex-col items-center justify-between py-6' : 'justify-between items-center px-4 py-2'}`}>
      <div className={`flex flex-col ${isVertical ? 'items-center mt-2' : 'justify-center items-start'}`}>
        <Hexagon size={isVertical ? 38 : 28} className={`${card.accentClass} mb-3`} strokeWidth={1} />
        <span className={`font-serif uppercase tracking-[0.3em] text-xl ${card.textColor}`}>{card.brand}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mt-1">{card.subtitle}</span>
      </div>

      <div className={`flex justify-center items-center ${isVertical ? 'my-auto opacity-40' : 'mx-auto opacity-40'}`}>
         <Radio size={isVertical ? 30 : 38} className={`${card.accentClass} ${!isVertical && '-rotate-90'}`} strokeWidth={1} />
      </div>

      <div className={`flex flex-col ${isVertical ? 'items-center text-center mt-auto' : 'items-end text-right mt-auto'}`}>
        <span className={`text-[13px] font-sans tracking-[0.2em] uppercase ${card.textColor} drop-shadow-sm`}>{card.holder}</span>
        <span className={`text-[9px] tracking-[0.25em] uppercase mt-1 ${card.accentClass}`}>{card.chipLabel}</span>
      </div>
    </div>
  </div>
);

const TechCard = ({ card, isVertical }: { card: CardModel; isVertical: boolean }) => (
  <div className="flex flex-col h-full w-full z-10 relative bg-[#00000033] font-mono">
    <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:12px_12px] opacity-30 pointer-events-none rounded-2xl" />
    
    <div className={`relative z-10 flex h-full ${isVertical ? 'flex-col justify-between' : 'flex-row justify-between'} p-1`}>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <ScanLine size={20} className={card.accentClass} />
          <span className={`text-[14px] font-bold tracking-[0.3em] ${card.textColor}`}>{card.brand}</span>
        </div>
        <span className="bg-emerald-950 text-emerald-400 px-2 py-[2px] text-[9px] sm:text-[10px] uppercase tracking-widest w-fit border border-emerald-900/50 mb-4">SEQ: X-9010</span>
      </div>

      <div className={`flex flex-col ${isVertical ? 'items-start mt-auto' : 'justify-end items-end h-full mt-auto'}`}>
        <div className={`flex items-center gap-2 mb-3 bg-black/60 p-2 border border-slate-800 ${isVertical ? 'self-start' : 'self-end'}`}>
           <Cpu size={16} className="text-slate-400" />
           <span className="text-[10px] uppercase tracking-widest text-slate-300">LINK: {card.chipLabel}</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">AUTHORIZED USER</span>
        <span className={`text-[16px] font-black uppercase tracking-widest ${card.accentClass}`}>{card.holder}</span>
      </div>
    </div>
  </div>
);

const MinimalCard = ({ card, isVertical }: { card: CardModel; isVertical: boolean }) => (
  <div className="flex h-full w-full z-10 relative">
    <div className={`flex justify-between w-full p-2 py-4 ${isVertical ? 'flex-col' : 'items-center'}`}>
      <div className={`flex gap-1.5 items-center ${isVertical ? 'self-start mb-auto' : 'self-start mb-auto'}`}>
         <Fingerprint size={20} className={`${card.accentClass} opacity-80`} strokeWidth={1.5} />
         <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-slate-500 uppercase">{card.brand}</span>
      </div>

      <div className={`flex flex-col ${isVertical ? 'items-end text-right' : 'items-start ml-auto mt-auto'}`}>
         <span className={`text-3xl sm:text-4xl font-sans font-thin tracking-tighter ${card.textColor} leading-none`}>
           {card.holder.split(' ')[0]}<br/>
           <span className="font-bold">{card.holder.split(' ')[1]}</span>
         </span>
         <span className={`text-[10px] tracking-[0.25em] uppercase mt-2 ${card.accentClass}`}>{card.subtitle}</span>
      </div>
    </div>
  </div>
);

const renderCardContent = (card: CardModel, isVertical: boolean) => {
  switch (card.layout) {
    case 'corporate': return <CorporateCard card={card} isVertical={isVertical} />;
    case 'luxury': return <LuxuryCard card={card} isVertical={isVertical} />;
    case 'tech':   return <TechCard card={card} isVertical={isVertical} />;
    case 'minimal': return <MinimalCard card={card} isVertical={isVertical} />;
    default:       return <CorporateCard card={card} isVertical={isVertical} />;
  }
};

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
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-[380px] sm:max-w-[400px]">
        {/* Carousel selector */}
        <div className="flex items-center justify-between flex-1 bg-slate-950/40 border border-slate-800/60 p-1.5 rounded-sm w-full">
          <button
            onClick={handlePrev}
            className="p-1 px-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-slate-300 font-bold uppercase truncate max-w-[170px] sm:max-w-[200px]">
            {activeCard.name}
          </span>
          <button
            onClick={handleNext}
            className="p-1 px-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Orientation Toggle Group */}
        <div className="flex bg-slate-950/40 border border-slate-800/60 p-1 rounded-sm w-full sm:w-auto shrink-0 justify-center gap-1 select-none">
          <button
            onClick={() => setIsVertical(false)}
            className={`px-4 py-1.5 text-[10px] sm:text-[11px] font-mono font-black tracking-wider rounded-sm transition-all cursor-pointer ${
              !isVertical 
                ? 'bg-cyan-500 text-slate-950' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HORIZONTAL
          </button>
          <button
            onClick={() => setIsVertical(true)}
            className={`px-4 py-1.5 text-[10px] sm:text-[11px] font-mono font-black tracking-wider rounded-sm transition-all cursor-pointer ${
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
        className={`relative transition-all duration-300 ease-out [perspective:1200px] my-3 select-none ${
          isVertical 
            ? 'w-[245px] sm:w-[260px] h-[390px] sm:h-[415px]'
            : 'w-full max-w-[380px] sm:max-w-[400px] h-[240px] sm:h-[255px]'
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

              {renderCardContent(activeCard, isVertical)}
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
