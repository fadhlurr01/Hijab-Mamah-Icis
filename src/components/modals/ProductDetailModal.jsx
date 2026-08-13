import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Send, Star, ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';
import { getImageUrl } from '../../utils/image';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('material');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleBuyNowWhatsApp = () => {
    const total = formatPrice(product.price * quantity);
    const text = `Halo Admin Mamah Icis,%0ASaya ingin memesan langsung:%0A- Produk: ${product.name}%0A- Warna: ${selectedColor}%0A- Ukuran: ${selectedSize}%0A- Jumlah: ${quantity}%0A- Total: ${total}%0A%0AMohon bantuannya untuk proses pengiriman. Terima kasih!`;
    window.open(`https://wa.me/6282125612890?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#E8E2D9] overflow-y-auto shadow-2xl flex flex-col md:flex-row rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-md text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Gallery Section */}
        <div className="md:w-1/2 p-6 bg-[#F8F6F2] flex flex-col">
          {/* Main Photo Display */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-white border border-[#E8E2D9] mb-4">
            <img 
              src={getImageUrl(activeImage)} 
              alt={product.name} 
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
            {product.badge && (
              <span className={`absolute top-3 left-3 ${product.badge === 'BEST SELLER' ? 'badge-gold' : 'badge-dark'}`}>
                {product.badge}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex items-center space-x-3 overflow-x-auto">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-20 border transition-all overflow-hidden ${
                  activeImage === img ? 'border-[#B08D67] ring-2 ring-[#B08D67]/30' : 'border-[#E8E2D9] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={getImageUrl(img)} alt="" className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info & Options */}
        <div className="md:w-1/2 p-6 lg:p-8 flex flex-col justify-between space-y-6">
          <div>
            {/* Category & Ratings */}
            <div className="flex items-center justify-between text-xs font-sans tracking-[0.2em] uppercase text-[#8A8178] mb-2">
              <span>{product.category}</span>
              <div className="flex items-center space-x-1 text-[#B08D67]">
                <Star size={13} fill="#B08D67" />
                <span className="font-semibold text-[#1C1C1C]">{product.rating}</span>
                <span className="text-[#8A8178]">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Product Name */}
            <h2 className="font-serif text-2xl lg:text-3xl text-[#1C1C1C] uppercase font-normal leading-snug mb-3">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-xl font-sans font-semibold text-[#1C1C1C]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-sans text-[#8A8178] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-xs font-sans text-[#8A8178] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Color Option Selector */}
            <div className="space-y-2 mb-5">
              <label className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#1C1C1C] block">
                Pilihan Warna: <span className="text-[#B08D67]">{selectedColor}</span>
              </label>
              <div className="flex items-center space-x-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 border text-xs font-sans transition-all ${
                      selectedColor === color.name 
                        ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white shadow-xs' 
                        : 'border-[#E8E2D9] bg-[#F8F6F2] text-[#242424] hover:border-[#B08D67]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2 mb-6">
              <label className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#1C1C1C] block">
                Ukuran (Size):
              </label>
              <div className="flex items-center space-x-2">
                {product.sizes.map((sz, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-1.5 border text-xs font-sans transition-all ${
                      selectedSize === sz 
                        ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white font-semibold' 
                        : 'border-[#E8E2D9] bg-[#F8F6F2] text-[#242424] hover:border-[#B08D67]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#1C1C1C]">
                Jumlah:
              </label>
              <div className="flex items-center border border-[#E8E2D9] bg-[#F8F6F2]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm text-[#1C1C1C] hover:bg-[#D8C7B5]"
                >
                  -
                </button>
                <span className="px-4 text-xs font-sans font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm text-[#1C1C1C] hover:bg-[#D8C7B5]"
                >
                  +
                </button>
              </div>
              <span className="text-[10px] font-sans text-emerald-700 font-semibold uppercase flex items-center gap-1">
                <Sparkles size={11} /> Stock Ready
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleAdd}
                  className="flex-1 btn-gold text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  <span>{addedSuccess ? '✓ Added to Bag' : 'Add To Bag'}</span>
                </button>

                <button 
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 border transition-colors ${
                    isWishlisted ? 'bg-[#1C1C1C] text-[#B08D67] border-[#1C1C1C]' : 'border-[#E8E2D9] text-[#1C1C1C] hover:bg-[#F8F6F2]'
                  }`}
                  title="Wishlist"
                >
                  <Heart size={18} fill={isWishlisted ? '#B08D67' : 'none'} />
                </button>
              </div>

              <button 
                onClick={handleBuyNowWhatsApp}
                className="btn-luxury w-full text-xs py-3.5 flex items-center justify-center gap-2"
              >
                <Send size={15} />
                <span>Buy Now via WhatsApp Direct</span>
              </button>
            </div>
          </div>

          {/* Additional Info Accordion Tabs */}
          <div className="border-t border-[#E8E2D9] pt-4 text-xs font-sans">
            <div className="flex border-b border-[#E8E2D9] pb-2 space-x-4">
              <button 
                onClick={() => setActiveTab('material')}
                className={`uppercase font-semibold tracking-wider transition-colors ${
                  activeTab === 'material' ? 'text-[#B08D67] border-b-2 border-[#B08D67]' : 'text-[#8A8178]'
                }`}
              >
                Material & Care
              </button>
              <button 
                onClick={() => setActiveTab('shipping')}
                className={`uppercase font-semibold tracking-wider transition-colors ${
                  activeTab === 'shipping' ? 'text-[#B08D67] border-b-2 border-[#B08D67]' : 'text-[#8A8178]'
                }`}
              >
                Shipping & Returns
              </button>
            </div>

            <div className="pt-3 text-[#8A8178] leading-relaxed">
              {activeTab === 'material' ? (
                <div className="space-y-1">
                  <p><strong className="text-[#1C1C1C]">Bahan:</strong> {product.material}</p>
                  <p><strong className="text-[#1C1C1C]">Perawatan:</strong> {product.careInstructions}</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p><strong className="text-[#1C1C1C]">Pengiriman:</strong> {product.shippingInfo}</p>
                  <p><strong className="text-[#1C1C1C]">Garansi Retur:</strong> {product.returnPolicy}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
