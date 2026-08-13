import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ 
  wishlistCount, 
  cartCount, 
  onOpenSearch, 
  onOpenWishlist, 
  onOpenCart,
  onSelectCategory
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scrollSpy
      const sections = ['hero', 'collection', 'bestseller', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', targetId: 'hero' },
    { name: 'Collection', targetId: 'collection', category: 'ALL' },
    { name: 'Best Seller', targetId: 'bestseller', category: 'BEST_SELLER' },
    { name: 'About', targetId: 'about' },
    { name: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.category && onSelectCategory) {
      onSelectCategory(link.category);
    }
    const el = document.getElementById(link.targetId);
    if (el) {
      const yOffset = -70; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isTransparentHero = !scrolled && activeSection === 'hero';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparentHero 
          ? 'glass-nav-transparent text-white' 
          : 'glass-nav-scrolled text-[#1C1C1C]'
      }`}
    >
      {/* Top Privilege Bar */}
      <div className={`text-center py-1.5 px-4 text-[10px] tracking-[0.25em] uppercase font-semibold border-b transition-colors duration-300 ${
        isTransparentHero 
          ? 'border-white/10 bg-black/20 text-white/90' 
          : 'border-[#E8E2D9] bg-[#1C1C1C] text-[#D8C7B5]'
      }`}>
        <span>Complimentary Express Shipping on Orders Over Rp 500.000</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Signature Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick({ targetId: 'hero' })}
          className="cursor-pointer group flex items-center space-x-3"
        >
          <BrandLogo size={36} isDark={isTransparentHero} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col items-start">
            <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] font-medium uppercase transition-opacity duration-300 group-hover:opacity-80 leading-none">
              Mamah Icis
            </span>
            <span className={`text-[9px] tracking-[0.35em] uppercase font-sans font-medium transition-colors mt-1 ${
              isTransparentHero ? 'text-white/70' : 'text-[#8A8178]'
            }`}>
              Jakarta — Modest Fashion
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(link)}
              className={`relative py-1 text-xs font-sans tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-[#B08D67] ${
                activeSection === link.targetId ? 'text-[#B08D67]' : ''
              }`}
            >
              {link.name}
              {activeSection === link.targetId && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#B08D67] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center space-x-5 lg:space-x-6">
          <button 
            onClick={onOpenSearch}
            className="p-2 transition-transform duration-300 hover:scale-110 hover:text-[#B08D67]"
            title="Search Collection"
          >
            <Search size={20} strokeWidth={1.75} />
          </button>

          {/* Wishlist Button with Dynamic Badge */}
          <button 
            onClick={onOpenWishlist}
            className="p-2 relative transition-transform duration-300 hover:scale-110 hover:text-[#B08D67]"
            title="Wishlist"
          >
            <Heart 
              size={20} 
              strokeWidth={1.75} 
              fill={wishlistCount > 0 ? '#B08D67' : 'none'} 
              className={wishlistCount > 0 ? 'text-[#B08D67]' : ''} 
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-[#B08D67] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs transition-all duration-300 animate-scale-in">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Button with Dynamic Badge */}
          <button 
            onClick={onOpenCart}
            className="p-2 relative transition-transform duration-300 hover:scale-110 hover:text-[#B08D67]"
            title="Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 bg-[#1C1C1C] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-[#D8C7B5] shadow-xs transition-all duration-300 animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F6F2] text-[#1C1C1C] border-b border-[#E8E2D9] animate-fade-in px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link)}
                className="text-left text-sm font-sans tracking-[0.2em] uppercase font-medium py-2 border-b border-[#E8E2D9]/50 text-[#1C1C1C] hover:text-[#B08D67]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between text-xs text-[#8A8178] border-t border-[#E8E2D9]">
            <span>Instagram @hijabmamahicis</span>
            <span>Jakarta Boutique</span>
          </div>
        </div>
      )}
    </header>
  );
}
