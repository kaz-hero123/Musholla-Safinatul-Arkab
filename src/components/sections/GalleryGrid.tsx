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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {GALLERY_DATA.map((item) => (
            <div 
              key={item.id} 
              className={`group flex flex-col ${item.className || ''}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-bg-secondary mb-4 relative">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <div className="border-t border-border pt-4 mt-auto">
                <h3 className="font-display font-bold text-xl mb-2 text-text-primary">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
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
