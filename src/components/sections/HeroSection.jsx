import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onShopNow }) {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background Hero Photography with Motion Scale */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/malaya_tunik.png" 
          alt="Mamah Icis Modest Fashion Hero" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-[#1C1C1C]/30" />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-95" />
      </motion.div>

      {/* Hero Animated Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D8C7B5] text-[11px] font-sans tracking-[0.3em] uppercase mb-8"
        >
          <Sparkles size={12} className="text-[#B08D67]" />
          <span>New Luxury Collection 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.1em] font-light uppercase leading-[1.08] mb-6 drop-shadow-sm"
        >
          Elevate Your <br />
          <span className="italic font-normal text-[#D8C7B5]">Everyday</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-sm sm:text-base md:text-lg font-sans font-light tracking-wide text-white/90 mb-10 leading-relaxed"
        >
          Koleksi hijab modern untuk menemani setiap momen dengan elegansi, kualitas premium, dan kenyamanan sempurna.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={onShopNow}
            className="btn-gold w-full sm:w-auto text-xs px-10 py-4 shadow-xl"
          >
            <span>Shop Collection</span>
            <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={onShopNow}
            className="w-full sm:w-auto px-8 py-4 border border-white/40 text-white font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[#1C1C1C] transition-all duration-300 backdrop-blur-sm"
          >
            Explore Catalog
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-white/60 text-[10px] tracking-[0.3em] uppercase"
      >
        <span>Scroll Down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
