/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GALLERY_DATA } from "@/data/gallery";
import { cn } from "@/lib/utils";
export function GalleryGrid() {
  return (
    <section className="py-24 px-4 md:px-6 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-reveal">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4 tracking-tight">
              Galeri <span className="text-emerald-primary italic">Dokumentasi.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Momen-momen berharga dan rekam jejak kegiatan yang telah berlangsung di lingkungan Musholla Safinatul Arkab.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {GALLERY_DATA.map((item, i) => {
            const isLarge = i % 4 === 0 || i % 4 === 3;
            const spanClass = isLarge ? "md:col-span-8" : "md:col-span-4";
            
            return (
              <div 
                key={item.id} 
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] bg-bg-primary border border-border/50 animate-reveal",
                  spanClass
                )}
                style={{animationDelay: `${0.1 * i}s`}}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 text-white drop-shadow-md">{item.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
