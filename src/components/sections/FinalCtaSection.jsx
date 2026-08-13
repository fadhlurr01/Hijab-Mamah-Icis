import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedScene } from '../AnimatedScene';
import { motion } from 'framer-motion';

export default function FinalCtaSection({ onShopNow }) {
  return (
    <section className="relative w-full py-32 bg-[#1C1C1C] text-white overflow-hidden">
      {/* Background Editorial Visual */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.2 }}
        whileInView={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/florida.png" 
          alt="Mamah Icis Signature Style" 
          className="w-full h-full object-cover object-top filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/70 to-[#1C1C1C]" />
      </motion.div>

      <AnimatedScene className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#B08D67] font-bold block">
          Your Modest Fashion Journey
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl font-light uppercase tracking-wider leading-tight">
          Find Your <br />
          <span className="italic font-normal text-[#D8C7B5]">Signature Style</span>
        </h2>

        <p className="text-sm sm:text-base font-sans text-white/80 max-w-xl mx-auto font-light leading-relaxed">
          Discover the collection made exclusively for you. Koleksi hijab premium yang memancarkan pesona diri terbaik Anda.
        </p>

        <div className="pt-6">
          <button 
            onClick={() => {
              onShopNow();
              const el = document.getElementById('collection');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold text-xs px-12 py-4 inline-flex items-center gap-3 shadow-2xl group"
          >
            <span>Shop Now</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </AnimatedScene>
    </section>
  );
}
