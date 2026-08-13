import React from 'react';
import { instagramPosts } from '../../data/products';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../Icons';
import { AnimatedScene, AnimatedStagger, AnimatedStaggerItem } from '../AnimatedScene';

export default function InstagramSection() {
  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedScene className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 text-[#B08D67] mb-2">
            <InstagramIcon size={18} />
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold">
              Social Journal
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] uppercase font-normal tracking-wider">
            Follow The Journey
          </h2>
          <a 
            href="https://instagram.com/hijabmamahicis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-sans tracking-[0.2em] font-semibold text-[#B08D67] hover:text-[#1C1C1C] transition-colors mt-2 uppercase"
          >
            <span>@hijabmamahicis</span>
            <ExternalLink size={12} />
          </a>
        </AnimatedScene>

        {/* Instagram 6-Photo Grid */}
        <AnimatedStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <AnimatedStaggerItem key={post.id}>
              <a
                href="https://instagram.com/hijabmamahicis"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#1C1C1C] block border border-[#E8E2D9]"
              >
                <img 
                  src={post.image} 
                  alt="Instagram @hijabmamahicis"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay with Likes & Comments */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                  <InstagramIcon size={22} className="mb-2 text-[#D8C7B5]" />
                  <div className="flex items-center space-x-3 text-xs font-sans">
                    <div className="flex items-center space-x-1">
                      <Heart size={13} fill="white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={13} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
