import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections for Single Page Flow
import HeroSection from './components/sections/HeroSection';
import NewCollectionSection from './components/sections/NewCollectionSection';
import CategorySection from './components/sections/CategorySection';
import EditorialBannerSection from './components/sections/EditorialBannerSection';
import BestSellerSection from './components/sections/BestSellerSection';
import BrandStorySection from './components/sections/BrandStorySection';
import PromoSection from './components/sections/PromoSection';
import InstagramSection from './components/sections/InstagramSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ContactSection from './components/sections/ContactSection';
import FinalCtaSection from './components/sections/FinalCtaSection';

// Interactive Modals & Drawers
import ProductDetailModal from './components/modals/ProductDetailModal';
import CartDrawer from './components/modals/CartDrawer';
import WishlistDrawer from './components/modals/WishlistDrawer';
import SearchModal from './components/modals/SearchModal';

// Dataset
import { products } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  
  // Interactive Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState([
    {
      ...products[0],
      selectedColor: 'Champagne Gold',
      selectedSize: '115 x 115 cm',
      quantity: 1
    }
  ]);
  const [wishlistIds, setWishlistIds] = useState(['hm-01', 'hm-03']);

  // Handlers
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    const el = document.getElementById('collection');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const handleAddToCart = (productToAdd) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => 
          item.id === productToAdd.id && 
          item.selectedColor === productToAdd.selectedColor &&
          item.selectedSize === productToAdd.selectedSize
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += (productToAdd.quantity || 1);
        return updated;
      } else {
        return [...prev, { ...productToAdd, quantity: productToAdd.quantity || 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (targetItem, newQty) => {
    setCartItems((prev) => 
      prev.map((item) => {
        if (
          item.id === targetItem.id && 
          item.selectedColor === targetItem.selectedColor &&
          item.selectedSize === targetItem.selectedSize
        ) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveCartItem = (targetItem) => {
    setCartItems((prev) => 
      prev.filter((item) => !(
        item.id === targetItem.id && 
        item.selectedColor === targetItem.selectedColor &&
        item.selectedSize === targetItem.selectedSize
      ))
    );
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#242424] font-sans selection:bg-[#B08D67] selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        wishlistCount={wishlistIds.length}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Single Page Experience */}
      <main className="flex-1">
        {/* Section 1: Hero Scene */}
        <HeroSection onShopNow={() => handleSelectCategory('ALL')} />

        {/* Section 2: Catalog & New Collection Scene */}
        <NewCollectionSection 
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={(p) => handleAddToCart({
            ...p,
            selectedColor: p.colors[0]?.name || '',
            selectedSize: p.sizes[0] || '',
            quantity: 1
          })}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Section 3: Category Collection Scene */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* Section 4: Editorial Banner Scene */}
        <EditorialBannerSection onDiscover={() => handleSelectCategory('ALL')} />

        {/* Section 5: Best Seller Scene */}
        <BestSellerSection 
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={(p) => handleAddToCart({
            ...p,
            selectedColor: p.colors[0]?.name || '',
            selectedSize: p.sizes[0] || '',
            quantity: 1
          })}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onViewAll={(cat) => handleSelectCategory(cat)}
        />

        {/* Section 6: Brand Story & Philosophy Scene */}
        <BrandStorySection />

        {/* Section 7: Promo Privilege Scene */}
        <PromoSection onShopSale={(cat) => handleSelectCategory(cat)} />

        {/* Section 8: Instagram Feed Scene */}
        <InstagramSection />

        {/* Section 9: Testimonials Scene */}
        <TestimonialSection />

        {/* Section 10: Contact & Boutique Location Scene */}
        <ContactSection />

        {/* Section 11: Final CTA Scene */}
        <FinalCtaSection onShopNow={() => handleSelectCategory('ALL')} />
      </main>

      {/* Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory}
      />

      {/* Global Interactive Modals & Drawers */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
      />

      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}
