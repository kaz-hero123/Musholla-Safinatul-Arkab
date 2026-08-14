"use client";
import React from "react";
import Marquee from "@/components/ui/marquee";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SITE_DATA } from "@/lib/constants";

export default function Gallery() {
  const { gallery } = SITE_DATA;

  const cards = gallery.map(item => ({
    id: item.id,
    className: item.className,
    thumbnail: item.url,
    content: (
      <div>
        <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{item.title}</h3>
        <p className="text-text-secondary text-base">{item.description}</p>
        <div className="mt-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-primary text-xs font-medium border border-emerald-500/20">
            Dokumentasi Kegiatan
          </span>
        </div>
      </div>
    )
  }));

  const marqueeImages = gallery.map(g => g.url);

  return (
    <section id="gallery" className="py-24 overflow-hidden bg-warm-bg">
      <div className="px-6 max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-warm-text/10 pb-6 gap-4">
        <div>
          <h2 className="text-4xl font-display font-bold text-warm-text tracking-tight">Galeri Kegiatan</h2>
        </div>
        <p className="text-warm-text/80 max-w-md text-sm md:text-right">
          Momen berharga dalam setiap kegiatan kemakmuran Musholla Safinatul Arkab.
        </p>
      </div>

      {/* Primary Bento Grid */}
      <div className="mb-20 px-6">
        <LayoutGrid cards={cards} />
      </div>

      {/* Secondary Marquee Strip */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {marqueeImages.map((src, i) => (
            <div key={`m1-${i}`} className="relative h-48 w-64 md:h-64 md:w-80 overflow-hidden rounded-2xl mx-2 border border-warm-text/10 opacity-70 hover:opacity-100 transition-opacity">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Duplicate to ensure smooth scrolling since we only have 4 items */}
          {marqueeImages.map((src, i) => (
            <div key={`m1-dup-${i}`} className="relative h-48 w-64 md:h-64 md:w-80 overflow-hidden rounded-2xl mx-2 border border-warm-text/10 opacity-70 hover:opacity-100 transition-opacity">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-warm-bg via-warm-bg/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-warm-bg via-warm-bg/80 to-transparent"></div>
      </div>
    </section>
  );
}
