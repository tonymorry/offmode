
import React, { useState } from 'react';
import { VIBEPOD_PRODUCT } from '../constants';

const ProductShowcase: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(VIBEPOD_PRODUCT.colors[0]);

  return (
    <section id="prodotto" className="py-32 px-6 bg-white border-y border-[#e5e1d8] relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        
        {/* Gallery Column */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-[#f9f7f2] aspect-square flex items-center justify-center p-16 border border-[#e5e1d8] relative overflow-hidden group">
            <img 
              src={selectedColor.image} 
              alt={selectedColor.name}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 right-6">
              <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">Studio Shot / 01</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
             {VIBEPOD_PRODUCT.colors.map((c) => (
               <button 
                 key={c.name}
                 onClick={() => setSelectedColor(c)}
                 className={`aspect-square border-2 p-1 transition-all bg-[#f9f7f2] ${selectedColor.name === c.name ? 'border-black opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
               >
                 <img src={c.image} className="w-full h-full object-contain mix-blend-multiply" />
               </button>
             ))}
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-col justify-center">
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] py-1 px-3 border border-black inline-block">Best Seller</span>
            </div>
            <h2 className="serif text-5xl md:text-6xl mb-6 text-[#1a1a1a]">VibePod™ <span className="text-xl font-sans font-normal text-gray-300 italic ml-2">v.1</span></h2>
            <div className="flex items-baseline space-x-6 mb-8">
              <span className="text-4xl font-medium text-[#1a1a1a]">€{VIBEPOD_PRODUCT.price.toFixed(2)}</span>
              <span className="text-xl text-gray-300 line-through">€{VIBEPOD_PRODUCT.originalPrice.toFixed(2)}</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-lg font-light mb-8">
              {VIBEPOD_PRODUCT.description} Un oggetto tattile e resistente, creato per durare nel tempo. Ogni componente è stato scelto per ridurre l'impatto digitale sulla tua vita quotidiana.
            </p>
          </div>

          <div className="mb-12 p-8 bg-[#f9f7f2] border border-[#e5e1d8]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">Seleziona Finitura Opaca</h4>
            <div className="flex flex-wrap gap-5">
              {VIBEPOD_PRODUCT.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor.name === color.name ? 'border-black' : 'border-transparent'}`}
                >
                  <div 
                    className="w-9 h-9 rounded-full shadow-inner" 
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a]">
              Colore: <span className="font-light text-gray-500 ml-2">{selectedColor.name}</span>
            </p>
          </div>

          <div className="space-y-6">
            <button className="w-full bg-black text-white py-7 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-zinc-800 hover:tracking-[0.5em] transition-all">
              Aggiungi al Carrello
            </button>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#e5e1d8] p-5 text-center">
                <span className="block text-[9px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Audio Output</span>
                <span className="text-[11px] font-bold uppercase text-[#1a1a1a]">Jack & Speaker</span>
              </div>
              <div className="border border-[#e5e1d8] p-5 text-center">
                <span className="block text-[9px] font-bold uppercase text-gray-400 mb-2 tracking-widest">Tempo Ricarica</span>
                <span className="text-[11px] font-bold uppercase text-[#1a1a1a]">45 Minuti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
