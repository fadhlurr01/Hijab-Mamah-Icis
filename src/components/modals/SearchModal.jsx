import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export default function SearchModal({ 
  isOpen, 
  onClose, 
  products, 
  onSelectProduct 
}) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const searchResults = query.trim() === '' ? [] : products.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    );
  });

  const formatPrice = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-white border border-[#E8E2D9] shadow-2xl p-6 sm:p-8 space-y-6 relative rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8A8178] hover:text-[#1C1C1C] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-1">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold">
            Live Search
          </span>
          <h3 className="font-serif text-2xl text-[#1C1C1C] uppercase font-normal">
            Find Your Signature Hijab
          </h3>
        </div>

        {/* Input Bar */}
        <div className="relative">
          <input 
            type="text"
            autoFocus
            placeholder="Ketik nama hijab, voal, pashmina, atau bergo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 text-base font-serif bg-[#F8F6F2] border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67] text-[#1C1C1C]"
          />
          <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B08D67]" />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8178] hover:text-[#1C1C1C]"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Results Area */}
        <div className="max-h-[50vh] overflow-y-auto space-y-3">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs font-sans text-[#8A8178] space-y-2">
              <span className="font-semibold text-[#1C1C1C] uppercase block">Pencarian Populer:</span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {['Silk Voal', 'Monogram Printed', 'Noir Pashmina', 'Maharani Bergo', 'Satin Square'].map((term, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 bg-[#F8F6F2] border border-[#E8E2D9] text-[#1C1C1C] hover:border-[#B08D67] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-10 text-xs font-sans text-[#8A8178]">
              Tidak ada produk yang cocok dengan kata kunci "{query}".
            </div>
          ) : (
            <div>
              <span className="text-[11px] font-sans uppercase font-bold text-[#8A8178] block mb-3">
                Ditemukan {searchResults.length} Hasil:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="flex items-center space-x-3 p-2.5 bg-[#F8F6F2] border border-[#E8E2D9] hover:border-[#B08D67] cursor-pointer transition-all group"
                  >
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-14 h-16 object-cover border border-[#E8E2D9]"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-sans tracking-wider uppercase text-[#B08D67] block">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-sm text-[#1C1C1C] truncate group-hover:text-[#B08D67]">
                        {product.name}
                      </h4>
                      <span className="text-xs font-sans font-semibold text-[#1C1C1C] block">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-[#8A8178] group-hover:text-[#B08D67] transition-transform group-hover:translate-x-1" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
