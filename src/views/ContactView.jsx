import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from '../components/Icons';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Konsultasi Hijab / Ukuran',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto open WhatsApp with formatted message
      const text = `Halo Admin Mamah Icis Jakarta,%0ANama: ${formData.name}%0ATopik: ${formData.topic}%0APesan: ${formData.message}`;
      window.open(`https://wa.me/6281288889920?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-6 animate-fade-in min-h-screen">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#B08D67] font-bold block mb-2">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1C1C] uppercase font-normal tracking-wider">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm font-sans text-[#8A8178] mt-2">
          Kami siap membantu Anda memilih hijab terbaik, konsultasi warna, hingga layanan pemesanan seragam & hampers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Boutique Information & Socials */}
        <div className="lg:col-span-5 space-y-8 bg-[#F2EDE4] p-8 lg:p-10 border border-[#E8E2D9]">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#B08D67] font-bold block mb-1">
              Flagship Boutique
            </span>
            <h3 className="font-serif text-2xl text-[#1C1C1C] uppercase font-normal">
              Jakarta Studio
            </h3>
          </div>

          <div className="space-y-6 text-xs font-sans text-[#242424]">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-[#B08D67] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold uppercase tracking-wider text-[#1C1C1C] mb-0.5">Alamat Gallery</strong>
                <p className="text-[#8A8178]">Dharmawangsa Square Ground Floor Unit 42, Kebayoran Baru, Jakarta Selatan, 12160</p>
              </div>
            </div>

            {/* WhatsApp Hotline */}
            <div className="flex items-start space-x-3">
              <Phone size={18} className="text-[#B08D67] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold uppercase tracking-wider text-[#1C1C1C] mb-0.5">WhatsApp Official VIP</strong>
                <a href="https://wa.me/6281288889920" target="_blank" rel="noopener noreferrer" className="text-[#B08D67] font-semibold hover:underline">
                  +62 812-8888-9920 (Respons Cepat)
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start space-x-3">
              <Clock size={18} className="text-[#B08D67] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold uppercase tracking-wider text-[#1C1C1C] mb-0.5">Jam Operasional</strong>
                <p className="text-[#8A8178]">Senin — Sabtu: 09:00 – 20:00 WIB</p>
                <p className="text-[#8A8178]">Minggu & Hari Libur: 10:00 – 18:00 WIB</p>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="pt-6 border-t border-[#E8E2D9] space-y-3">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#1C1C1C] block">
              Official Social Media
            </span>
            <div className="flex flex-col space-y-2 text-xs font-sans">
              <a href="https://instagram.com/hijabmamahicis" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#8A8178] hover:text-[#B08D67] transition-colors">
                <InstagramIcon size={15} className="text-[#B08D67]" />
                <span>Instagram: @hijabmamahicis</span>
              </a>
              <a href="https://tiktok.com/@hijabmamahicis" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#8A8178] hover:text-[#B08D67] transition-colors">
                <TikTokIcon size={15} className="text-[#B08D67]" />
                <span>TikTok: @hijabmamahicis</span>
              </a>
              <a href="https://facebook.com/hijabmamahicis" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#8A8178] hover:text-[#B08D67] transition-colors">
                <FacebookIcon size={15} className="text-[#B08D67]" />
                <span>Facebook: Hijab Mamah Icis Official</span>
              </a>
            </div>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <div className="pt-4">
            <a 
              href="https://wa.me/6281288889920?text=Halo%20Admin%20Mamah%20Icis,%20saya%20ingin%20bertanya%20mengenai%20koleksi%20hijab."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gold text-xs py-3.5 flex items-center justify-center gap-2"
            >
              <Send size={15} />
              <span>Chat Direct via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form & Embedded Map */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white p-8 lg:p-10 border border-[#E8E2D9] space-y-6">
            <h3 className="font-serif text-2xl text-[#1C1C1C] uppercase font-normal">
              Send Us A Message
            </h3>

            {submitted ? (
              <div className="p-6 bg-[#F8F6F2] border border-[#B08D67] text-center space-y-3 animate-fade-in">
                <CheckCircle2 size={36} className="text-[#B08D67] mx-auto" />
                <h4 className="font-serif text-lg text-[#1C1C1C]">Pesan Anda Berhasil Terkirim!</h4>
                <p className="text-xs font-sans text-[#8A8178]">
                  Membuka WhatsApp untuk terhubung secara instan dengan Customer VIP Mamah Icis...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#1C1C1C]">Nama Lengkap *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F8F6F2] border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#1C1C1C]">Nomor WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 text-xs bg-[#F8F6F2] border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#1C1C1C]">Topik Pertanyaan</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-3 text-xs bg-[#F8F6F2] border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67]"
                  >
                    <option value="Konsultasi Hijab / Ukuran">Konsultasi Hijab / Ukuran</option>
                    <option value="Pemesanan Seragam / Bridesmaid">Pemesanan Seragam / Bridesmaid</option>
                    <option value="Hampers / Gift Box Custom">Hampers / Gift Box Custom</option>
                    <option value="Cek Status Pengiriman">Cek Status Pengiriman</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans tracking-wider uppercase font-semibold text-[#1C1C1C]">Pesan / Catatan *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan atau kebutuhan warna Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 text-xs bg-[#F8F6F2] border border-[#E8E2D9] focus:outline-none focus:border-[#B08D67]"
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-luxury w-full text-xs py-4 flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Kirim Pesan via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Embedded Google Maps Placeholder */}
          <div className="bg-white border border-[#E8E2D9] p-4 space-y-2">
            <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#1C1C1C] flex items-center gap-1.5">
              <MapPin size={13} className="text-[#B08D67]" />
              <span>Location Map — Jakarta South Boutique</span>
            </span>
            <div className="w-full h-64 bg-[#E8E2D9] relative overflow-hidden flex items-center justify-center text-center p-6">
              <iframe 
                title="Boutique Location"
                src="https://maps.google.com/maps?q=Dharmawangsa%20Square%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
