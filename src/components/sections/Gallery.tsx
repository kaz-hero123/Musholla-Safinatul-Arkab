"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 overflow-hidden bg-bg-secondary">
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
          Galeri <span className="text-emerald-primary">Kegiatan</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Momen berharga dalam setiap kegiatan kemakmuran Musholla Safinatul Arkab.
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {images.map((src, i) => (
            <div key={i} className="relative h-64 w-80 md:h-80 md:w-[400px] overflow-hidden rounded-2xl mx-2 border border-white/10">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover className="[--duration:35s] mt-4">
          {images.map((src, i) => (
            <div key={`rev-${i}`} className="relative h-64 w-80 md:h-80 md:w-[400px] overflow-hidden rounded-2xl mx-2 border border-white/10">
              <img src={src} alt={`Gallery rev ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-bg-secondary"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-bg-secondary"></div>
      </div>
    </section>
  );
}
