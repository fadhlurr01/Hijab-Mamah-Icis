import React from 'react';
import { Send, MapPin, Phone, ChevronRight } from 'lucide-react';
import { InstagramIcon, ShopeeIcon } from './Icons';
import { shopeeStoreUrl, whatsAppNumber, whatsAppDisplayNumber } from '../data/products';

export default function Footer({ onSelectCategory }) {
  const scrollToSection = (targetId, category = null) => {
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-10 border-t border-[#B08D67]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
        
        {/* Brand Overview Column */}
        <div className="lg:col-span-2 space-y-5">
          <div className="space-y-1">
            <span className="font-serif text-3xl tracking-[0.25em] uppercase font-light text-white block">
              Mamah Icis
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase font-sans text-[#D8C7B5]">
              Jakarta — Modest Workwear
            </span>
          </div>

          <p className="text-xs font-sans text-white/70 max-w-sm leading-relaxed font-light">
            Pakaian kerja sehari-hari kamu, biar mamah yang siapin ya :) Outfit kerja 5-6 hari yang cakep tanpa ngeberatin budget kamu.
          </p>

          <div className="pt-2 text-xs font-sans space-y-2 text-[#D8C7B5]">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-[#B08D67]" />
              <span>Dharmawangsa Square, Jakarta Selatan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-[#B08D67]" />
              <span>WA {whatsAppDisplayNumber}</span>
            </div>
          </div>
        </div>

        {/* Column 1: Shop */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-medium text-[#D8C7B5]">
            Shop & Categories
          </h4>
          <ul className="space-y-2.5 text-xs font-sans text-white/70">
            <li>
              <button onClick={() => scrollToSection('collection', 'TUNIK')} className="hover:text-[#B08D67] transition-colors flex items-center gap-1">
                <ChevronRight size={12} className="text-[#B08D67]" />
                <span>Tunik & Workwear</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('bestseller')} className="hover:text-[#B08D67] transition-colors flex items-center gap-1">
                <ChevronRight size={12} className="text-[#B08D67]" />
                <span>Best Seller Outfit</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('collection', 'VOAL')} className="hover:text-[#B08D67] transition-colors flex items-center gap-1">
                <ChevronRight size={12} className="text-[#B08D67]" />
                <span>Voal Premium</span>
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('collection', 'PASHMINA')} className="hover:text-[#B08D67] transition-colors flex items-center gap-1">
                <ChevronRight size={12} className="text-[#B08D67]" />
                <span>Pashmina Silk</span>
              </button>
            </li>
            <li>
              <a href={shopeeStoreUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B08D67] transition-colors flex items-center gap-1 text-[#EE4D2D]">
                <ChevronRight size={12} className="text-[#EE4D2D]" />
                <span>Official Shopee Store</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: About */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-medium text-[#D8C7B5]">
            About & Boutique
          </h4>
          <ul className="space-y-2.5 text-xs font-sans text-white/70">
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#B08D67] transition-colors">
                Rekam Jejak & Filosofi
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#B08D67] transition-colors">
                Pilihan Outfit 5-6 Hari Kerja
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#B08D67] transition-colors">
                Jakarta Flagship Store
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#B08D67] transition-colors">
                Contact & VIP Support
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Care & Official Channels */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-medium text-[#D8C7B5]">
            Customer Care
          </h4>
          <ul className="space-y-2.5 text-xs font-sans text-white/70 mb-6">
            <li><span>Pengiriman & Gratis Ongkir</span></li>
            <li><span>Garansi Ukuran & Retur 7 Hari</span></li>
            <li><span>Panduan Cuci & Perawatan Tunik</span></li>
          </ul>

          <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-medium text-[#D8C7B5]">
            Official Store & Media
          </h4>
          <div className="flex items-center space-x-3 text-white/80">
            <a href={shopeeStoreUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#EE4D2D]/20 text-[#EE4D2D] rounded-full hover:bg-[#EE4D2D] hover:text-white transition-colors" title="Official Shopee Store">
              <ShopeeIcon size={16} />
            </a>
            <a href={`https://wa.me/${whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-emerald-700/30 text-emerald-400 rounded-full hover:bg-emerald-600 hover:text-white transition-colors" title={`WhatsApp ${whatsAppDisplayNumber}`}>
              <Send size={15} />
            </a>
            <a href="https://instagram.com/hijabmamahicis" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-[#B08D67] transition-colors" title="Instagram @hijabmamahicis">
              <InstagramIcon size={15} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-white/50 space-y-4 sm:space-y-0">
        <div>
          © {new Date().getFullYear()} HIJAB MAMAH ICIS. All Rights Reserved. Pakaian kerja sehari-hari kamu, biar mamah yang siapin ya :)
        </div>
        <div className="flex items-center space-x-6">
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition-colors cursor-pointer">Jakarta, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
