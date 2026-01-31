
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="filosofia" className="py-32 px-6 bg-[#1a1a1a] text-[#f9f7f2]">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500 mb-8 block">La nostra missione</span>
        <h2 className="serif text-4xl md:text-6xl italic mb-12 leading-tight">
          Siamo costantemente connessi, <br className="hidden md:block"/> ma raramente presenti.
        </h2>
        <div className="grid md:grid-cols-2 gap-16 text-left text-gray-400 leading-relaxed">
          <p>
            OFFMode nasce come risposta al sovraccarico digitale. In un mondo che corre, abbiamo creato un oggetto che ti invita a rallentare. VibePod™ non è solo tecnologia, è uno strumento di consapevolezza.
          </p>
          <p>
            Ogni dettaglio, dalla clip fisica alla mancanza di uno schermo touch, è pensato per farti dimenticare il dispositivo e farti vivere il momento. Riprenditi il tuo tempo, un brano alla volta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
