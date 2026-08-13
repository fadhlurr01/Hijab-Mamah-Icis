import React from 'react';
import ProductCard from '../ProductCard';
import { ArrowRight, Flame } from 'lucide-react';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';

export default function BestSellerSection({ 
  products, 
  onSelectProduct, 
  onQuickAdd, 
  wishlistIds, 
  onToggleWishlist,
  onViewAll
}) {
  const bestSellers = products.filter(p => p.isBestSeller || p.badge === 'BEST SELLER').slice(0, 4);

  return (
    <section id="bestseller" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <AnimatedScene className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-[#E8E2D9] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-[#B08D67] mb-2">
            <Flame size={14} />
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold">
              Customer Favorites
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-normal uppercase tracking-wider">
            Most Loved
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#8A8178] mt-2">
            Koleksi terlaris yang menjadi favorit ribuan wanita muslimah modern di seluruh Indonesia.
          </p>
        </div>

        <button 
          onClick={() => {
            onViewAll('BEST_SELLER');
            const el = document.getElementById('collection');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-[#1C1C1C] hover:text-[#B08D67] transition-colors group"
        >
          <span>View All Best Sellers</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </AnimatedScene>

      {/* Grid */}
      <AnimatedStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {bestSellers.map((product) => (
          <AnimatedStaggerItem key={product.id}>
            <ProductCard
              product={product}
              onSelectProduct={onSelectProduct}
              onQuickAdd={onQuickAdd}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          </AnimatedStaggerItem>
        ))}
      </AnimatedStagger>
    </section>
  );
}
