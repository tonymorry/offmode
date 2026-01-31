
import React from 'react';
import { STORE_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-[#e5e1d8] bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-2xl font-bold tracking-[0.3em] uppercase">{STORE_NAME}</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed font-light">
              Ritrova la connessione con te stesso attraverso la musica. OFFMode è una filosofia di vita, non solo un brand.
            </p>
            <div className="flex space-x-8 text-[11px] font-bold tracking-widest uppercase">
              <a href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black">Instagram</a>
              <a href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black">TikTok</a>
              <a href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black">Journal</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 text-gray-400">Navigazione</h4>
            <ul className="space-y-4 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              <li><a href="#prodotto" className="hover:text-black transition-colors">VibePod™</a></li>
              <li><a href="#filosofia" className="hover:text-black transition-colors">La Visione</a></li>
              <li><a href="#dettagli" className="hover:text-black transition-colors">Supporto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] mb-8 text-gray-400">Info</h4>
            <ul className="space-y-4 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Spedizioni</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Resi</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contatti</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-[#e5e1d8] text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em]">
          <p>© 2024 {STORE_NAME.toUpperCase()} - DESIGNED FOR FOCUS</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
