import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedScene } from '../AnimatedScene';
import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils/image';

export default function EditorialBannerSection({ onDiscover }) {
  return (
    <section className="relative w-full py-28 bg-[#1C1C1C] text-white overflow-hidden my-12">
      {/* Background Editorial Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={getImageUrl('/images/oleta_silk.png')} 
          alt="Timeless Modesty Editorial" 
          className="w-full h-full object-cover object-top filter brightness-90 hover:brightness-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <AnimatedScene className="lg:col-span-7 space-y-6">
          <span className="inline-block text-[10px] font-sans tracking-[0.35em] uppercase text-[#B08D67] font-semibold">
            Editorial Campaign — Edition I
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light uppercase tracking-wider leading-[1.08]">
            Timeless <br />
            <span className="italic font-normal text-[#D8C7B5]">Modesty</span>
          </h2>

          <p className="text-sm sm:text-base font-sans text-white/80 max-w-lg font-light leading-relaxed">
            Designed for the modern woman who values understated elegance, fine silk craftsmanship, and timeless grace in every stride.
          </p>

          <div className="pt-4">
            <button 
              onClick={() => {
                onDiscover();
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold text-xs px-10 py-4 inline-flex items-center gap-3 group"
            >
              <span>Discover Collection</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </AnimatedScene>

        {/* Floating Quote Box */}
        <AnimatedScene className="lg:col-span-5 bg-white/10 backdrop-blur-md p-8 lg:p-10 border border-white/20 rounded-none relative">
          <span className="font-serif text-5xl text-[#B08D67] block leading-none mb-2">“</span>
          <p className="font-serif text-lg lg:text-xl text-white/90 italic font-light leading-relaxed mb-6">
            “Setiap helai kain dirancang bukan sekadar untuk menutup, melainkan untuk merayakan keanggunan sejati wanita modern.”
          </p>
          <div className="border-t border-white/20 pt-4 flex items-center justify-between text-xs font-sans">
            <span className="tracking-[0.2em] text-[#D8C7B5] uppercase font-semibold">Hijab Mamah Icis</span>
            <span className="text-white/60">Jakarta Studio</span>
          </div>
        </AnimatedScene>
      </div>
    </section>
  );
}
