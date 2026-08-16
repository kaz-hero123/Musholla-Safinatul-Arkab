/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GALLERY_DATA } from "@/data/gallery";

export function GalleryGrid() {
  return (
    <section className="py-24 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
              Dokumentasi
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Rekam jejak visual dari setiap aktivitas yang telah diselenggarakan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {GALLERY_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`group relative rounded-3xl overflow-hidden bg-bg-secondary ${item.className || ''}`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-display font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
