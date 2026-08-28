/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GALLERY_DATA } from "@/data/gallery";
import { FadeIn } from "@/components/ui/fade-in";

export function GalleryGrid() {
  return (
    <section className="py-24 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4 tracking-tight">
              Galeri Dokumentasi.
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Momen-momen berharga dan rekam jejak kegiatan yang telah berlangsung di lingkungan Musholla Safinatul Arkab.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {GALLERY_DATA.map((item, i) => (
            <FadeIn key={item.id} delay={0.05 * i} className="group">
              <div className="aspect-square w-full relative mb-4 bg-bg-primary overflow-hidden border border-border">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
