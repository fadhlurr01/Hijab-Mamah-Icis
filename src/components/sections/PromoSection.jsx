import React from 'react';
import { ArrowRight, Tag, Gift, Clock } from 'lucide-react';
import { AnimatedScene } from '../AnimatedScene';
import { getImageUrl } from '../../utils/image';

export default function PromoSection({ onShopSale }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <AnimatedScene className="relative bg-[#1C1C1C] text-white p-8 sm:p-12 lg:p-16 rounded-none overflow-hidden shadow-2xl border border-[#B08D67]/40">
        
        {/* Subtle Background Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 pointer-events-none">
          <img 
            src={getImageUrl('/images/oleba_batik.png')} 
            alt="Mamah Icis Special Privilege"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#B08D67]/20 border border-[#B08D67] text-[#D8C7B5] text-[10px] font-sans tracking-[0.25em] uppercase font-semibold">
            <Tag size={12} className="text-[#B08D67]" />
            <span>Exclusive Privileges</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light uppercase tracking-wider leading-tight text-white">
            Special Privilege <br />
            <span className="italic text-[#D8C7B5]">Bundle & Save</span>
          </h2>

          <p className="text-sm font-sans text-white/80 max-w-lg font-light leading-relaxed">
            Nikmati diskon hingga 25% untuk setiap pembelian paket Bundling 3 Signature Voal, plus kemasan eksklusif Hardbox Mamah Icis & voucher potongan Rp 50.000.
          </p>

          {/* Promo Highlights */}
          <div className="flex flex-wrap gap-6 pt-2 text-xs font-sans text-[#D8C7B5]">
            <div className="flex items-center space-x-2">
              <Gift size={16} className="text-[#B08D67]" />
              <span>Free Premium Gift Box</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-[#B08D67]" />
              <span>Limited Stock Release</span>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => {
                onShopSale('SALE');
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold text-xs px-10 py-4 inline-flex items-center gap-3 group"
            >
              <span>Shop Sale Collection</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </AnimatedScene>
    </section>
  );
}
