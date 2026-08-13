import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Feather, Award, Heart, ShoppingBag } from 'lucide-react';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';
import { shopeeStoreUrl, whatsAppNumber, whatsAppDisplayNumber } from '../../data/products';
import { ShopeeIcon } from '../Icons';
import { getImageUrl } from '../../utils/image';

export default function BrandStorySection() {
  return (
    <section id="about" className="py-24 bg-[#F2EDE4] border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Story Row 1: Brand Vision & Personal Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Photography */}
          <AnimatedScene className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-xl border border-[#E8E2D9]">
              <img 
                src={getImageUrl('/images/tulicia_tunik.png')} 
                alt="Hijab Mamah Icis Brand Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Accent Card with User Quote */}
            <div className="absolute -bottom-8 -right-6 hidden sm:flex flex-col bg-[#1C1C1C] text-white p-6 max-w-sm shadow-2xl border border-[#B08D67]">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] mb-1.5 font-bold">
                Pesan dari Mamah Icis
              </span>
              <p className="font-serif text-base italic text-[#D8C7B5] leading-snug">
                “Pakaian kerja sehari-hari kamu, biar mamah yang siapin ya :)”
              </p>
            </div>
          </AnimatedScene>

          {/* Right Column: Brand Story Content & Copy */}
          <AnimatedScene className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#B08D67] font-bold block">
              Solusi Outfit Kerja Harian
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1C1C] font-normal uppercase tracking-wider leading-tight">
              Pakaian Kerja <br />
              <span className="italic text-[#B08D67]">Sehari-Hari Kamu</span>
            </h2>

            <div className="space-y-4 text-sm font-sans text-[#242424] leading-relaxed font-light">
              <p className="p-4 bg-white/70 border-l-4 border-[#B08D67] italic text-[#1C1C1C] font-serif text-base">
                “5 sampai 6 hari kita berada di tempat kerja, kebutuhan kita akan pakaian kerja menjadi sangat krusial.”
              </p>

              <p>
                Gak mau pakai outfit yang itu-itu ajah, mau memperbanyak koleksi tapi takut budget kebobolan ?? 
                <strong className="text-[#B08D67] font-semibold block mt-1">
                  Tenang mamah siap rekomendasiin ke kamu, outfit cakep yang ga ngeberatin budget kamu.
                </strong>
              </p>

              <p className="text-xs text-[#8A8178]">
                Hijab Mamah Icis hadir untuk memadukan kenyamanan serat kain premium, kerapian bordir boutique, serta harga terjangkau yang ramah kantong.
              </p>
            </div>

            {/* Official Store Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href={shopeeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-6 py-3.5 flex items-center gap-2"
              >
                <ShopeeIcon size={16} />
                <span>Shop Official Shopee Store</span>
              </a>

              <a 
                href={`https://wa.me/${whatsAppNumber}?text=Halo%20Mamah%20Icis,%20saya%20butuh%20rekomendasi%20outfit%20kerja%20harian.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline text-xs px-6 py-3.5 flex items-center gap-2"
              >
                <span>Konsultasi WA {whatsAppDisplayNumber}</span>
              </a>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E2D9]">
              <div className="space-y-1">
                <Sparkles size={18} className="text-[#B08D67]" />
                <h4 className="font-serif text-sm font-semibold uppercase text-[#1C1C1C]">Budget Friendly</h4>
                <p className="text-[11px] text-[#8A8178]">Cakep & Ramah Kantong</p>
              </div>
              <div className="space-y-1">
                <ShieldCheck size={18} className="text-[#B08D67]" />
                <h4 className="font-serif text-sm font-semibold uppercase text-[#1C1C1C]">Workwear Ready</h4>
                <p className="text-[11px] text-[#8A8178]">Cocok 5-6 Hari Kerja</p>
              </div>
              <div className="space-y-1">
                <HeartHandshake size={18} className="text-[#B08D67]" />
                <h4 className="font-serif text-sm font-semibold uppercase text-[#1C1C1C]">All-Day Comfort</h4>
                <p className="text-[11px] text-[#8A8178]">Adem, Tegak & Nyaman</p>
              </div>
            </div>
          </AnimatedScene>

        </div>

        {/* Story Row 2: Philosophy Cards */}
        <AnimatedScene className="bg-white p-8 sm:p-14 border border-[#E8E2D9] text-center space-y-8 shadow-sm">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold block">
            Our Brand Guarantee
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-[#1C1C1C] uppercase max-w-2xl mx-auto font-normal">
            “Biar Mamah Yang Siapin Pakaian Kerja Kamu :)”
          </h3>
          <p className="text-xs sm:text-sm font-sans text-[#8A8178] max-w-2xl mx-auto leading-relaxed">
            Keanggunan pakaian kerja memancar lewat kehalusan bahan, jahitan rapi, serta rasa percaya diri tanpa membebani keuangan Anda.
          </p>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-4xl mx-auto">
            <AnimatedStaggerItem className="bg-[#F8F6F2] p-6 border border-[#E8E2D9] space-y-2">
              <Feather size={22} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Breathable Fabric</h4>
              <p className="text-[11px] text-[#8A8178]">Kain adem dipakai meeting & aktivitas kantor.</p>
            </AnimatedStaggerItem>

            <AnimatedStaggerItem className="bg-[#F8F6F2] p-6 border border-[#E8E2D9] space-y-2">
              <Award size={22} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Boutique Stitching</h4>
              <p className="text-[11px] text-[#8A8178]">Detail bordir & pola kemeja presisi tinggi.</p>
            </AnimatedStaggerItem>

            <AnimatedStaggerItem className="bg-[#F8F6F2] p-6 border border-[#E8E2D9] space-y-2">
              <Heart size={22} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Made with Care</h4>
              <p className="text-[11px] text-[#8A8178]">Direkomendasikan khusus oleh Mamah Icis.</p>
            </AnimatedStaggerItem>
          </AnimatedStagger>
        </AnimatedScene>

      </div>
    </section>
  );
}
