import React from 'react';
import { Sparkles, Shield, Heart, Feather, Award } from 'lucide-react';

export default function AboutView({ onExploreCollection }) {
  return (
    <div className="pt-28 pb-24 animate-fade-in min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1C1C1C] text-white overflow-hidden mb-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#B08D67] font-bold block">
            Brand Story & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light uppercase tracking-wider leading-tight">
            The World of <br />
            <span className="italic font-normal text-[#D8C7B5]">Mamah Icis</span>
          </h1>
          <p className="text-sm sm:text-base font-sans text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Menghadirkan harmoni sempurna antara nilai-nilai modest fashion, kemewahan bahan silk pilihan, dan kepraktisan wanita modern di Jakarta.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Section 1: Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold">
              01 — Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase font-normal tracking-wider">
              Lahir dari Passion & Dedikasi
            </h2>
            <p className="text-sm font-sans text-[#242424] leading-relaxed font-light">
              Hijab Mamah Icis berdiri di Jakarta dengan satu keyakinan sederhana: wanita muslimah tidak harus mengorbankan kenyamanan demi terlihat anggun dan mewah.
            </p>
            <p className="text-xs sm:text-sm font-sans text-[#8A8178] leading-relaxed">
              Setiap koleksi dirancang dengan perhatian mendalam terhadap detail cutting, pemilihan benang silk ultrafine, dan kenyamanan pemakaian sepanjang hari. Dari pertemuan bisnis hingga momen hangat bersama keluarga, Mamah Icis hadir menemani langkah Anda.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] overflow-hidden border border-[#E8E2D9] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80" 
                alt="Mamah Icis Studio Crafting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Our Philosophy */}
        <div className="bg-[#F2EDE4] p-10 sm:p-16 border border-[#E8E2D9] text-center space-y-8">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold block">
            02 — Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase max-w-2xl mx-auto font-normal">
            “Timeless Elegance Meets Modern Functionality”
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#8A8178] max-w-2xl mx-auto leading-relaxed">
            Kami percaya bahwa keanggunan tidak berteriak. Keanggunan memancar lewat kehalusan bahan, jatuhnya kain yang natural, serta kepercayaan diri wanita yang memakainya.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 border border-[#E8E2D9] space-y-2">
              <Feather size={24} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Ultra Light Weight</h4>
              <p className="text-[11px] text-[#8A8178]">Serat kain breathable yang tidak bikin gerah.</p>
            </div>
            <div className="bg-white p-6 border border-[#E8E2D9] space-y-2">
              <Award size={24} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Boutique Grade</h4>
              <p className="text-[11px] text-[#8A8178]">Standar jahitan tepi laser-cut presisi tinggi.</p>
            </div>
            <div className="bg-white p-6 border border-[#E8E2D9] space-y-2">
              <Heart size={24} className="text-[#B08D67] mx-auto" />
              <h4 className="font-serif text-base uppercase text-[#1C1C1C]">Made with Love</h4>
              <p className="text-[11px] text-[#8A8178]">Diolah oleh penjahit berpengalaman di Jakarta.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Quality & Craftsmanship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden border border-[#E8E2D9] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Silk Fabric Quality Inspection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold">
              03 — Quality & Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase font-normal tracking-wider">
              Kualitas Tanpa Kompromi
            </h2>
            <p className="text-sm font-sans text-[#242424] leading-relaxed font-light">
              Setiap roll bahan yang masuk ke studio Mamah Icis melewati uji kelembutan, daya serap, dan ketahanan warna.
            </p>
            <ul className="space-y-3 text-xs font-sans text-[#8A8178]">
              <li className="flex items-center space-x-2">
                <Sparkles size={14} className="text-[#B08D67]" />
                <span>Teknologi Ultrafine Silk Voal yang tegak di dahi tanpa perlu starch.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles size={14} className="text-[#B08D67]" />
                <span>Pewarna ramah lingkungan yang aman untuk kulit sensitif.</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles size={14} className="text-[#B08D67]" />
                <span>Emblem emas antik anti karat sebagai segel otentisitas Mamah Icis.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Why Mamah Icis CTA */}
        <div className="bg-[#1C1C1C] text-white p-12 text-center space-y-6 border border-[#B08D67]/50">
          <h3 className="font-serif text-3xl uppercase font-light text-[#D8C7B5]">
            Experience The Difference
          </h3>
          <p className="text-xs sm:text-sm font-sans text-white/80 max-w-xl mx-auto">
            Temukan koleksi favorit Anda sekarang dan nikmati layanan belanja personal dari tim VIP Mamah Icis.
          </p>
          <button 
            onClick={onExploreCollection}
            className="btn-gold text-xs px-10 py-3.5"
          >
            Explore Collection Now
          </button>
        </div>

      </div>
    </div>
  );
}
