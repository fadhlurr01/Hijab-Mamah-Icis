import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';
import { getImageUrl } from '../../utils/image';

export default function CategorySection({ onSelectCategory }) {
  const categoryCards = [
    {
      id: 'TUNIK',
      title: 'TUNIK & WORKWEAR',
      subtitle: 'Outfit Kerja 5-6 Hari Harian',
      itemsCount: '9 Models Ready',
      image: '/images/malaya_tunik.png'
    },
    {
      id: 'VOAL',
      title: 'VOAL PREMIUM',
      subtitle: 'Bordir & Ultrafine Laser-cut',
      itemsCount: 'Signature Series',
      image: '/images/cheryl.png'
    },
    {
      id: 'PASHMINA',
      title: 'PASHMINA SILK',
      subtitle: 'Silk Drape & Soft Ovaltine',
      itemsCount: 'Earthy Elegance',
      image: '/images/ivory_tunik.png'
    },
    {
      id: 'HIJAB',
      title: 'HIJAB SQUARE',
      subtitle: 'Dusty Pink & Festive Batik',
      itemsCount: 'Boutique Collection',
      image: '/images/raisha.png'
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <AnimatedScene className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold block mb-2">
          Explore By Category
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase font-normal tracking-wider">
          Curated Essentials
        </h2>
        <div className="w-12 h-[1px] bg-[#B08D67] mx-auto mt-4" />
      </AnimatedScene>

      <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryCards.map((cat) => (
          <AnimatedStaggerItem key={cat.id}>
            <div
              onClick={() => {
                onSelectCategory(cat.id);
                const el = document.getElementById('collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative h-[420px] rounded-none overflow-hidden cursor-pointer shadow-sm border border-[#E8E2D9]"
            >
              {/* Background Authentic Brand Image */}
              <img 
                src={getImageUrl(cat.image)} 
                alt={cat.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] group-hover:brightness-95"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/30 to-transparent opacity-80 group-hover:opacity-75 transition-opacity" />

              {/* Top Right Arrow */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#B08D67] group-hover:scale-110">
                <ArrowUpRight size={18} />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#D8C7B5] uppercase mb-1">
                  {cat.itemsCount}
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.15em] uppercase mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs font-sans text-white/80 line-clamp-1 group-hover:text-white transition-colors">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          </AnimatedStaggerItem>
        ))}
      </AnimatedStagger>
    </section>
  );
}
