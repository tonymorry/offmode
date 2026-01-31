
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Clip-On Design",
      desc: "Aggancio in metallo satinato per sport e tempo libero.",
      icon: "01"
    },
    {
      title: "Hybrid Sound",
      desc: "Usa le cuffie o lo speaker integrato per la tua musica.",
      icon: "02"
    },
    {
      title: "Radio FM",
      desc: "Resta connesso al mondo reale tramite le frequenze FM.",
      icon: "03"
    },
    {
      title: "Digital Detox",
      desc: "Nessun social, nessuna notifica. Solo tu e il ritmo.",
      icon: "04"
    }
  ];

  return (
    <section id="dettagli" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group">
              <span className="serif italic text-4xl text-gray-200 block mb-6 group-hover:text-black transition-colors">{f.icon}</span>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
