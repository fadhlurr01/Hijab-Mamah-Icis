import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { getImageUrl } from '../utils/image';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onQuickAdd, 
  isWishlisted, 
  onToggleWishlist 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const hasValidSecondImage = product.images[1] && product.images[1].startsWith('/images/');

  return (
    <div 
      className="group relative flex flex-col luxury-card p-3 rounded-none overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Safe Product Hover Transition */}
      <div 
        className="relative w-full aspect-[4/5] bg-[#F8F6F2] overflow-hidden mb-4 cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        {/* Primary Authentic Product Image */}
        <img 
          src={getImageUrl(product.images[0])} 
          alt={product.name}
          className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
            isHovered ? 'scale-108 filter brightness-[1.02]' : 'scale-100 brightness-100'
          }`}
        />

        {/* Secondary Detail Image if authentic */}
        {hasValidSecondImage && (
          <img 
            src={getImageUrl(product.images[1])} 
            alt={`${product.name} Detail`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
          {product.badge && (
            <span className={product.badge === 'BEST SELLER' ? 'badge-gold' : 'badge-dark'}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-300 z-10 ${
            isWishlisted 
              ? 'bg-[#1C1C1C] text-[#B08D67]' 
              : 'bg-white/80 backdrop-blur-md text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white'
          }`}
          title="Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? '#B08D67' : 'none'} strokeWidth={2} />
        </button>

        {/* Quick Add Overlay Slide-up */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-md transition-all duration-300 z-10 flex items-center justify-between gap-2 border-t border-[#E8E2D9] ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            className="flex-1 py-2 bg-[#1C1C1C] text-white text-[10px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#B08D67] transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingBag size={13} />
            <span>Quick Add</span>
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className="p-2 bg-[#F8F6F2] text-[#1C1C1C] hover:bg-[#D8C7B5] transition-colors"
            title="View Detail"
          >
            <Eye size={14} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 px-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-[10px] uppercase font-sans tracking-[0.15em] text-[#8A8178] mb-1">
          <span>{product.category}</span>
          <div className="flex items-center space-x-1 text-[#B08D67]">
            <Star size={11} fill="#B08D67" />
            <span className="font-semibold text-[#1C1C1C]">{product.rating}</span>
          </div>
        </div>

        {/* Name */}
        <h3 
          onClick={() => onSelectProduct(product)}
          className="font-serif text-base text-[#1C1C1C] font-normal leading-snug line-clamp-1 mb-1.5 hover:text-[#B08D67] transition-colors cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Pricing & Colors */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-[#E8E2D9]/60">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm font-sans font-semibold text-[#1C1C1C]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-sans text-[#8A8178] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex items-center space-x-1">
            {product.colors.map((c, i) => (
              <span 
                key={i} 
                className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
