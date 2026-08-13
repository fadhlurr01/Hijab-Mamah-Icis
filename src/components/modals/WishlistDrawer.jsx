import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { getImageUrl } from '../../utils/image';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistProducts, 
  onRemoveWishlist, 
  onAddToCart,
  onSelectProduct 
}) {
  if (!isOpen) return null;

  const formatPrice = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F6F2] border-l border-[#E8E2D9] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E8E2D9] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart size={20} className="text-[#B08D67]" fill="#B08D67" />
              <h2 className="font-serif text-xl text-[#1C1C1C] uppercase font-normal tracking-wider">
                Saved Wishlist ({wishlistProducts.length})
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-[#8A8178] hover:text-[#1C1C1C] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Saved Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Heart size={48} className="text-[#D8C7B5] mx-auto opacity-60" />
                <h3 className="font-serif text-lg text-[#1C1C1C]">Your Wishlist is empty</h3>
                <p className="text-xs font-sans text-[#8A8178]">Simpan koleksi impian Anda dengan menekan ikon hati pada produk.</p>
                <button 
                  onClick={onClose}
                  className="btn-luxury text-xs px-6 py-2.5 mt-2"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white p-4 border border-[#E8E2D9] flex space-x-4 relative group"
                >
                  {/* Image */}
                  <img 
                    src={getImageUrl(product.images[0])} 
                    alt={product.name} 
                    className="w-20 h-24 object-cover object-top border border-[#E8E2D9] cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 
                          onClick={() => {
                            onClose();
                            onSelectProduct(product);
                          }}
                          className="font-serif text-sm text-[#1C1C1C] font-normal leading-snug line-clamp-1 hover:text-[#B08D67] cursor-pointer"
                        >
                          {product.name}
                        </h4>
                        <button 
                          onClick={() => onRemoveWishlist(product)}
                          className="text-[#8A8178] hover:text-rose-600 transition-colors"
                          title="Remove from Wishlist"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <span className="text-xs font-sans font-semibold text-[#1C1C1C] block mt-1">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <button 
                      onClick={() => {
                        onAddToCart({
                          ...product,
                          selectedColor: product.colors[0]?.name || '',
                          selectedSize: product.sizes[0] || '',
                          quantity: 1
                        });
                      }}
                      className="mt-2 py-1.5 px-3 bg-[#1C1C1C] text-white text-[10px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-[#B08D67] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={12} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E2D9]">
              <button 
                onClick={onClose}
                className="btn-luxury-outline w-full text-xs py-3 flex items-center justify-center gap-2"
              >
                <span>Continue Shopping</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
