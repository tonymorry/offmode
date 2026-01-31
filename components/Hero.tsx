
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10 order-2 md:order-1 text-left">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">Edizione Limitata VibePod™</span>
          <h1 className="serif text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-10 text-[#1a1a1a]">
            La tua musica. <br/>
            <span className="italic text-gray-300">Senza rumore.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-md mb-12 leading-relaxed font-light">
            Un ritorno all'ascolto consapevole. Senza notifiche, senza algoritmi, solo la tua playlist preferita in un design essenziale.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <a href="#prodotto" className="bg-black text-white px-12 py-5 font-bold text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all">
              Acquista Ora
            </a>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 border-l border-gray-200 pl-6">
              Spedizione gratuita <br/> in tutta Italia
            </div>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Elemento decorativo circolare vintage */}
            <div className="absolute inset-0 bg-[#f0ede4] rounded-full scale-90"></div>
            
             <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000" 
              className="relative z-10 w-3/4 h-3/4 object-contain mix-blend-multiply drop-shadow-2xl transition-transform hover:scale-105 duration-1000" 
              alt="VibePod Original"
            />
            
            <div className="absolute -bottom-6 -left-6 md:left-0 bg-white p-8 vintage-shadow border border-[#e5e1d8] z-20 max-w-[200px]">
              <p className="serif italic text-3xl leading-none text-[#1a1a1a]">"Less is more."</p>
              <div className="h-px bg-gray-100 w-full my-4"></div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Design Filosofia OFFMode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
