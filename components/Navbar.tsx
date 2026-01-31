
import React from 'react';
import { STORE_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#f9f7f2]/90 backdrop-blur-md border-b border-[#e5e1d8] px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold tracking-[0.25em] uppercase">{STORE_NAME}</span>
          <span className="text-[9px] bg-black text-white px-2 py-0.5 rounded-sm ml-3 font-bold tracking-widest">ORIGINAL</span>
        </div>
        
        <div className="hidden md:flex space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#prodotto" className="hover:text-black transition-colors">Il Prodotto</a>
          <a href="#filosofia" className="hover:text-black transition-colors">La Filosofia</a>
          <a href="#dettagli" className="hover:text-black transition-colors">Dettagli</a>
        </div>

        <button className="bg-black text-white px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
          Ordina
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
