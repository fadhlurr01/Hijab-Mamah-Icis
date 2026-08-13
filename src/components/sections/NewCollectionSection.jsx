import React, { useState, useMemo } from 'react';
import ProductCard from '../ProductCard';
import { categories, colorPalette } from '../../data/products';
import { Search, Filter, SlidersHorizontal, X, ArrowUpDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';

export default function NewCollectionSection({ 
  products, 
  onSelectProduct, 
  onQuickAdd, 
  wishlistIds, 
  onToggleWishlist,
  selectedCategory,
  onSelectCategory
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [sortBy, setSortBy] = useState('latest');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category Filter
      if (selectedCategory === 'BEST_SELLER' && !p.isBestSeller) return false;
      if (selectedCategory === 'NEW' && !p.isNew) return false;
      if (selectedCategory === 'SALE' && !p.originalPrice) return false;
      if (selectedCategory !== 'ALL' && selectedCategory !== 'BEST_SELLER' && selectedCategory !== 'NEW' && selectedCategory !== 'SALE') {
        if (p.category !== selectedCategory) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchCategory = p.category.toLowerCase().includes(query);
        const matchMaterial = p.material.toLowerCase().includes(query);
        if (!matchName && !matchCategory && !matchMaterial) return false;
      }

      // Color Filter
      if (selectedColor) {
        const hasColor = p.colors.some(c => c.name === selectedColor);
        if (!hasColor) return false;
      }

      // Price Filter
      if (p.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popular') return b.rating - a.rating;
      return 0; // default latest
    });
  }, [products, selectedCategory, searchQuery, selectedColor, maxPrice, sortBy]);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <AnimatedScene className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#B08D67]/10 border border-[#B08D67]/30 text-[#B08D67] text-[10px] font-sans tracking-[0.3em] uppercase font-bold mb-3">
          <Sparkles size={12} />
          <span>Curated Boutique Collection</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1C] font-normal uppercase tracking-wider">
          The Signature Collection
        </h2>
        <p className="text-xs sm:text-sm font-sans text-[#8A8178] mt-2">
          Discover our full line of hijab, pashmina silk, voal monogram, and bergo instant crafted with ultra-fine materials in Jakarta.
        </p>
      </AnimatedScene>

      {/* Main Controls Bar */}
      <AnimatedScene className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-[#F2EDE4] p-4 border border-[#E8E2D9]">
        
        {/* Category Tabs */}
        <div className="flex items-center overflow-x-auto space-x-2 scrollbar-none pb-2 lg:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans tracking-[0.15em] uppercase font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id 
                  ? 'bg-[#1C1C1C] text-white shadow-sm' 
                  : 'bg-white text-[#242424] hover:bg-[#D8C7B5] hover:text-[#1C1C1C]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right Search & Controls */}
        <div className="flex items-center space-x-3">
          {/* Search Input */}
          <div className="relative flex-1 lg:w-64">
            <input 
              type="text"
              placeholder="Search product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-white border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67]"
            />
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8178]" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8178] hover:text-[#1C1C1C]"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-[#E8E2D9] px-4 py-2 pr-8 text-xs font-sans uppercase tracking-wider text-[#1C1C1C] focus:outline-none cursor-pointer"
            >
              <option value="latest">Sort: Latest</option>
              <option value="popular">Sort: Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ArrowUpDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8178] pointer-events-none" />
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden p-2 bg-[#1C1C1C] text-white"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </AnimatedScene>

      {/* Catalog Layout: Sidebar Filters + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className={`lg:col-span-3 space-y-8 bg-white p-6 border border-[#E8E2D9] h-fit ${
          mobileFilterOpen ? 'block' : 'hidden lg:block'
        }`}>
          <div className="flex items-center justify-between border-b border-[#E8E2D9] pb-3">
            <h3 className="font-serif text-lg text-[#1C1C1C] uppercase font-normal tracking-wider flex items-center gap-2">
              <Filter size={16} className="text-[#B08D67]" />
              <span>Filters</span>
            </h3>
            {(selectedColor || maxPrice < 500000 || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedColor(null);
                  setMaxPrice(500000);
                  setSearchQuery('');
                }}
                className="text-[10px] font-sans tracking-wider uppercase text-[#B08D67] underline"
              >
                Reset
              </button>
            )}
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-sans text-[#1C1C1C]">
              <span className="font-semibold uppercase tracking-wider">Max Price</span>
              <span className="text-[#B08D67] font-semibold">{formatPrice(maxPrice)}</span>
            </div>
            <input 
              type="range"
              min={200000}
              max={500000}
              step={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#B08D67] cursor-pointer"
            />
          </div>

          {/* Color Filter */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase font-semibold tracking-wider text-[#1C1C1C]">
              Color Palette
            </h4>
            <div className="flex flex-wrap gap-2">
              {colorPalette.map((col) => (
                <button
                  key={col.name}
                  onClick={() => setSelectedColor(selectedColor === col.name ? null : col.name)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1 text-[11px] font-sans border transition-colors ${
                    selectedColor === col.name 
                      ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white' 
                      : 'border-[#E8E2D9] bg-[#F8F6F2] text-[#242424] hover:border-[#B08D67]'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: col.hex }} />
                  <span>{col.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="p-4 bg-[#F8F6F2] border border-[#D8C7B5] text-[11px] font-sans text-[#8A8178] space-y-1">
            <span className="font-semibold text-[#1C1C1C] uppercase block">Boutique Guarantee</span>
            <p>100% Produk Original Mamah Icis dengan garansi retur 7 hari jika tidak pas.</p>
          </div>
        </aside>

        {/* Product Grid Area with Animated Stagger */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#E8E2D9] p-8 space-y-4">
              <span className="font-serif text-2xl text-[#1C1C1C]">No items match your filter criteria</span>
              <p className="text-xs font-sans text-[#8A8178]">Coba ubah kata kunci pencarian atau reset filter warna/harga.</p>
              <button 
                onClick={() => {
                  onSelectCategory('ALL');
                  setSelectedColor(null);
                  setMaxPrice(500000);
                  setSearchQuery('');
                }}
                className="btn-luxury text-xs px-6 py-2.5 mt-2"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between text-xs font-sans text-[#8A8178] mb-4">
                <span>Showing {filteredProducts.length} Luxury Styles</span>
                {selectedCategory !== 'ALL' && (
                  <span className="uppercase text-[#1C1C1C] font-semibold">Category: {selectedCategory}</span>
                )}
              </div>

              <AnimatedStagger className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            </div>
          )}
        </main>

      </div>
    </section>
  );
}
