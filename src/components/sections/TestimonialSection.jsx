import React from 'react';
import { testimonials } from '../../data/products';
import { Star, Quote } from 'lucide-react';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#F2EDE4] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedScene className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold block mb-2">
            Client Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase font-normal tracking-wider">
            Loved By Her
          </h2>
          <div className="w-12 h-[1px] bg-[#B08D67] mx-auto mt-4" />
        </AnimatedScene>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <AnimatedStaggerItem key={t.id}>
              <div className="bg-white p-8 lg:p-10 border border-[#E8E2D9] flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow h-full">
                <Quote size={32} className="text-[#D8C7B5] mb-4 opacity-50" />
                
                <p className="font-serif text-base sm:text-lg text-[#242424] italic font-light leading-relaxed mb-6">
                  “{t.comment}”
                </p>

                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]">
                      {t.name}
                    </h4>
                    <span className="text-[10px] text-[#8A8178] font-sans">
                      {t.location} — Verified Buyer
                    </span>
                  </div>

                  <div className="flex items-center space-x-0.5 text-[#B08D67]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="#B08D67" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
