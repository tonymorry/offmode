
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Subtle separator */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-[#e5e1d8] w-full"></div>
        </div>

        <Features />
        
        <ProductShowcase />
        
        <About />

        {/* Testimonials */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h3 className="serif text-4xl mb-16 italic">Voci dalla community</h3>
            <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
              {[
                { name: "Federico", role: "Runner", text: "La qualità costruttiva mi ha sorpreso. È solido, analogico nel feeling ma moderno nelle prestazioni." },
                { name: "Elena", role: "Studentessa", text: "Lo lascio sulla scrivania mentre studio. Niente notifiche, solo i miei album preferiti." }
              ].map((t, i) => (
                <div key={i} className="border-l border-black pl-8 py-4">
                  <p className="text-xl mb-6">"{t.text}"</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">{t.name} — {t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6 text-center">
          <h2 className="serif text-5xl md:text-7xl mb-12">Ritorna all'essenziale.</h2>
          <button className="bg-black text-white px-16 py-6 text-xs font-bold uppercase tracking-[0.4em] hover:scale-105 transition-transform">
            Acquista VibePod™
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
