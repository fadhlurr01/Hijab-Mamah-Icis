import React from 'react';
import { X, Trash2, ShoppingBag, Send, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingMin = 500000;
  const progressPercent = Math.min(100, (subtotal / freeShippingMin) * 100);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Trigger luxury confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B08D67', '#D8C7B5', '#1C1C1C']
      });
    } catch (e) {}

    let messageLines = `*HIJAB MAMAH ICIS — PESANAN BARU*%0A%0A`;
    cartItems.forEach((item, index) => {
      messageLines += `${index + 1}. *${item.name}*%0A   Warna: ${item.selectedColor || '-'}` +
        `%0A   Ukuran: ${item.selectedSize || '-'}` +
        `%0A   Jumlah: ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}%0A%0A`;
    });

    messageLines += `*Subtotal:* ${formatPrice(subtotal)}%0A`;
    if (subtotal >= freeShippingMin) {
      messageLines += `*Ongkir:* GRATIS (Promo Min Rp 500.000)%0A`;
    } else {
      messageLines += `*Ongkir:* Diperhitungkan oleh Admin Jakarta%0A`;
    }
    messageLines += `%0AMohon bantuan konfirmasi ketersediaan stok & nomor rekening pembayaran. Terima kasih!`;

    window.open(`https://wa.me/6282125612890?text=${messageLines}`, '_blank');
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
              <ShoppingBag size={20} className="text-[#B08D67]" />
              <h2 className="font-serif text-xl text-[#1C1C1C] uppercase font-normal tracking-wider">
                Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-[#8A8178] hover:text-[#1C1C1C] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#F2EDE4] border-b border-[#E8E2D9] text-xs font-sans space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-[#1C1C1C]">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-[#B08D67]" />
                {subtotal >= freeShippingMin ? (
                  <strong className="text-emerald-700 uppercase">Selamat! Anda mendapatkan Gratis Ongkir</strong>
                ) : (
                  <span>Kurang <strong>{formatPrice(freeShippingMin - subtotal)}</strong> lagi untuk Gratis Ongkir</span>
                )}
              </span>
              <span className="font-semibold text-[#B08D67]">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E8E2D9] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#B08D67] transition-all duration-500 rounded-full" 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag size={48} className="text-[#D8C7B5] mx-auto opacity-60" />
                <h3 className="font-serif text-lg text-[#1C1C1C]">Your Shopping Bag is empty</h3>
                <p className="text-xs font-sans text-[#8A8178]">Jelajahi koleksi hijab Mamah Icis dan tambahkan item favorit Anda.</p>
                <button 
                  onClick={onClose}
                  className="btn-luxury text-xs px-6 py-2.5 mt-2"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div 
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${idx}`}
                  className="bg-white p-4 border border-[#E8E2D9] flex space-x-4 relative group"
                >
                  {/* Thumbnail */}
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover border border-[#E8E2D9]"
                  />

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm text-[#1C1C1C] font-normal leading-snug line-clamp-1 pr-6">
                          {item.name}
                        </h4>
                        <button 
                          onClick={() => onRemoveItem(item)}
                          className="text-[#8A8178] hover:text-rose-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="text-[11px] font-sans text-[#8A8178] mt-1 space-x-2">
                        {item.selectedColor && <span>Warna: {item.selectedColor}</span>}
                        {item.selectedSize && <span>• Size: {item.selectedSize}</span>}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Adjuster */}
                      <div className="flex items-center border border-[#E8E2D9] bg-[#F8F6F2]">
                        <button 
                          onClick={() => onUpdateQuantity(item, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-xs text-[#1C1C1C] hover:bg-[#D8C7B5]"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-[11px] font-sans font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#1C1C1C] hover:bg-[#D8C7B5]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-sans font-semibold text-[#1C1C1C]">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E2D9] space-y-4">
              <div className="space-y-1.5 text-xs font-sans">
                <div className="flex items-center justify-between text-[#8A8178]">
                  <span>Subtotal Produk</span>
                  <span className="font-semibold text-[#1C1C1C]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-[#8A8178]">
                  <span>Estimasi Ongkir</span>
                  <span className="text-[#B08D67] font-semibold">
                    {subtotal >= freeShippingMin ? 'Gratis' : 'Dihitung di WA'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-sans font-semibold text-[#1C1C1C] pt-2 border-t border-[#E8E2D9]">
                  <span className="uppercase tracking-wider">Total Pembayaran</span>
                  <span className="text-base text-[#1C1C1C] font-serif">{formatPrice(subtotal)}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckoutWhatsApp}
                className="btn-gold w-full text-xs py-4 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={16} />
                <span>Order Direct via WhatsApp</span>
              </button>

              <div className="text-center text-[10px] font-sans text-[#8A8178] flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-[#B08D67]" />
                <span>100% Pesanan Diproses Langsung oleh Customer Care Jakarta</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
