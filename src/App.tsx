import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Radio,
  Sparkles,
  Smartphone,
  Zap,
  Users,
  ShieldCheck,
  ChevronDown,
  User
} from 'lucide-react';

import { PurchaseSection } from './components/PurchaseSection';
import { Footer } from './components/Footer';
import { NfcCardMockup } from './components/NfcCardMockup';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Toast notifier
  const handleShowMessage = (message: string) => {
    setToastMessage(message);
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:gráfico;ONE;estudio;;
FN:ONE estudio gráfico
TEL;TYPE=CELL,VOICE,msg:991820599
EMAIL;TYPE=PREF,INTERNET:obedjoel@gmail.com
NOTE:Tarjetas NFC Inteligentes por ONE Estudio Gráfico
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ONE_Estudio_Grafico.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleShowMessage('💾 ¡Contacto "ONE estudio gráfico" descargado con éxito!');
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const FAQS = [
    {
      q: '¿Cómo funciona exactamente la tarjeta física NFC?',
      a: 'La tarjeta contiene un microchip de memoria pasivo inteligente. Al acercarla al móvil de otra persona, el teléfono emite una onda de radiofrecuencia (13.56 MHz) que activa el chip instantáneamente y lee el enlace de tu perfil digital. No requiere batería ni recargas jamás.'
    },
    {
      q: '¿El destinatario necesita instalar alguna aplicación?',
      a: '¡Para nada! Esa es la mayor ventaja. Solo necesitan que su lector NFC esté activo (está activado por defecto en la gran mayoría de smartphones modernos). Automáticamente se desplegará tu micro-landing en su navegador web nativo.'
    },
    {
      q: '¿Cómo actualizo mis enlaces o biografía?',
      a: 'Puedes hacerlo de manera ilimitada en tiempo real a través de nuestra plataforma. Al cambiar tu información, se actualiza en la nube de inmediato. No necesitas grabar o configurar tu tarjeta física de nuevo; tus clientes verán siempre los enlaces más nuevos instantáneamente.'
    },
    {
      q: '¿Es seguro compartir mis datos por NFC?',
      a: 'Completamente seguro. El chip NFC solo transmite de forma pasiva la URL pública de tu tarjeta virtual. No almacena información confidencial ni bancaria, y funciona a una distancia muy corta (menos de 4 cm), evitando lecturas accidentales.'
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen bg-[#020612] text-slate-100 font-sans antialiased selection:bg-cyan-400 selection:text-[#020612]">
      {/* Toast Notice System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -40, x: '-50%' }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#080f25] border border-cyan-500/30 text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-2.5 max-w-sm w-[90%]"
          >
            <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Zap size={11} className="animate-pulse" />
            </div>
            <p className="text-xs font-semibold leading-tight">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative background visual elements safely contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full">
        <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[25%] right-1/4 w-[25rem] h-[25rem] bg-cyan-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Primary Header/Navbar */}
      <header className="border-b border-slate-800/80 py-3.5 px-4 md:px-12 relative z-10 bg-[#020612]/90 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo - Keep it clean and aligned left */}
          <div className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="ONE Estudio Gráfico" className="h-8 object-contain" />
          </div>

          {/* Desktop Navigation links - Hidden on small mobile */}
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-widest uppercase font-bold">
            <a href="#order-section" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300">Planes y Precios</a>
            <a href="#how-it-works" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300">Cómo Funciona</a>
            <a href="#faq" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300">Preguntas</a>
          </div>

          {/* Action Group on the right - Handled responsively to prevent wrapping */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Save Contact action */}
            <button
              onClick={handleSaveContact}
              title="Guardar Contacto"
              className="px-2.5 py-2 sm:px-4 sm:py-2 bg-transparent hover:bg-cyan-500 text-cyan-400 hover:text-[#020612] text-[10px] sm:text-[11px] font-mono font-black tracking-widest uppercase rounded-sm border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none"
            >
              <User size={13} className="shrink-0" />
              <span className="hidden min-[380px]:inline sm:hidden">Guardar</span>
              <span className="hidden sm:inline">Guardar Contacto</span>
            </button>

            {/* See plans link */}
            <a
              href="#order-section"
              className="px-2.5 py-2 sm:px-4 sm:py-2 bg-cyan-400/10 hover:bg-cyan-500 text-cyan-400 hover:text-[#020612] text-[10px] sm:text-[11px] font-mono font-black tracking-widest uppercase rounded-sm border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 text-center"
            >
              <span className="min-[380px]:hidden">Planes</span>
              <span className="hidden min-[380px]:inline">Ver Planes</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero segment */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-2 pb-14">
        <section className="text-center max-w-4xl mx-auto space-y-4">
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono tracking-[0.25em] text-cyan-400 font-bold uppercase rounded-sm">
            <Sparkles size={11} className="text-cyan-400/80 animate-pulse" />
            <span>Tarjetas Profesionales • Premium Intelligent Tech</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase leading-[0.95] tracking-tight text-white">
            Presenta tu Perfil de Negocio con un <span className="text-cyan-400 italic font-light lowercase font-serif">toque NFC</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Vincula tu WhatsApp, métodos de contacto y redes sociales permanentes a nuestra tarjeta física de alta gama. Grabado limpio con diseño optimizado de alta fidelidad, contraste ultra-nítido y secado inmediato libres de imperfecciones.
          </p>

          {/* NFC 3D Viewer */}
          <div className="py-2 max-w-md mx-auto">
            <NfcCardMockup />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#order-section"
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-500 hover:from-cyan-400 hover:to-cyan-400 text-[#020612] text-[10px] font-black tracking-widest rounded-sm shadow-lg shadow-cyan-500/10 uppercase transition-all flex items-center justify-center gap-2"
            >
              <Zap size={13} />
              Ver Planes y Precios
            </a>
            <a
              href="#"
              className="px-8 py-3.5 bg-transparent hover:bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-widest rounded-sm border border-cyan-500 uppercase transition-colors"
            >
              Contacto Personal
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-slate-300 text-[10px] font-bold tracking-widest rounded-sm border border-slate-800 uppercase transition-colors hover:text-white"
            >
              Cómo Funciona
            </a>
          </div>

          {/* Core Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 max-w-4xl mx-auto">
            <div className="p-5 bg-[#040a1c]/60 border border-slate-800/80 rounded-sm flex items-center gap-4 text-left shadow-md transition-all duration-300 hover:border-slate-700">
              <div className="w-12 h-12 bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 flex items-center justify-center shrink-0 font-bold">
                <Users size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white">Un Solo Pago</h4>
                <p className="text-sm text-slate-400 leading-tight">Sin mensualidades ni cobros de renovación recurrentes.</p>
              </div>
            </div>

            <div className="p-5 bg-[#040a1c]/60 border border-slate-800/80 rounded-sm flex items-center gap-4 text-left shadow-md transition-all duration-300 hover:border-slate-700">
              <div className="w-12 h-12 bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 flex items-center justify-center shrink-0 font-bold">
                <Smartphone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white">Formato Universal</h4>
                <p className="text-sm text-slate-400 leading-tight">El receptor solo acerca la tarjeta, sin instalar aplicaciones.</p>
              </div>
            </div>

            <div className="p-5 bg-[#040a1c]/60 border border-slate-800/80 rounded-sm flex items-center gap-4 text-left shadow-md transition-all duration-300 hover:border-slate-700">
              <div className="w-12 h-12 bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 flex items-center justify-center shrink-0 font-bold">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white">Tecnología Smart NFC</h4>
                <p className="text-sm text-slate-400 leading-tight">Microchip de lectura inmediata ultra-rápida, 100% inalámbrico.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Custom Checkout Simulator (PLANS & PRICING TOP PRIORITY) */}
        <section className="mt-20 pt-10 border-t border-slate-800/80">
          <PurchaseSection
            onShowMessage={handleShowMessage}
          />
        </section>

        {/* SECTION: How it works step by step */}
        <section className="mt-24 py-12 border-t border-slate-850" id="how-it-works">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-[0.25em] block">Sencillez Absoluta</span>
            <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight">
              ¿Cómo funciona en la vida real?
            </h2>
            <p className="text-slate-400 text-sm">
              Asombra a tus clientes mediante una experiencia directa, profesional y moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
            <div className="bg-[#040a1c]/65 border border-slate-800/80 p-8 rounded-sm space-y-4 shadow-md hover:border-slate-700 hover:bg-[#070e20] transition-colors">
              <span className="text-4xl font-display font-black text-cyan-400/20">01</span>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-sans">Aproximar Tarjeta</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Toca suavemente la parte posterior del smartphone de tu cliente con tu tarjeta física premium de ONE. Tu tarjeta actúa de manera inalámbrica inmediata sin QR ni cámara.
              </p>
            </div>

            <div className="bg-[#040a1c]/65 border border-slate-800/80 p-8 rounded-sm space-y-4 shadow-md hover:border-slate-700 hover:bg-[#070e20] transition-colors">
              <span className="text-4xl font-display font-black text-cyan-400/20">02</span>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-sans">Cargar Perfil</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                El teléfono reconoce el chip inteligente al instante abriendo tu micro-landing digital optimizada. Se despliegan tus métodos de contacto, portafolios y redes al instante.
              </p>
            </div>

            <div className="bg-[#040a1c]/65 border border-slate-800/80 p-8 rounded-sm space-y-4 shadow-md hover:border-slate-700 hover:bg-[#070e20] transition-colors">
              <span className="text-4xl font-display font-black text-cyan-400/20">03</span>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-sans">Guardar Datos</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Tu cliente puede pulsar el botón integrado para descargar tu información de contacto directa y agregarla al instante a la agenda de su móvil, sin escribir nada.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Testimonials */}
        <TestimonialsSection />

        {/* SECTION: F.A.Q. Grid accordion style */}
        <section className="mt-28" id="faq">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-[0.25em] block">Dudas Resueltas</span>
              <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight font-sans">Preguntas Frecuentes</h2>
              <p className="text-slate-400 text-sm">Respuestas rápidas para aclarar la tecnología y uso de tus tarjetas inteligentes.</p>
            </div>

            <div className="space-y-4 font-sans">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#040a1c]/60 border border-slate-800/80 rounded-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                    className="w-full p-5.5 text-left text-sm sm:text-base font-semibold tracking-wider text-white uppercase flex items-center justify-between gap-4 transition-colors hover:bg-cyan-500/5 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                        faqOpen === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {faqOpen === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 text-sm md:text-base text-slate-300 font-sans leading-relaxed border-t border-slate-850">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Applet Footer representation */}
      <Footer />
    </div>
  );
}
