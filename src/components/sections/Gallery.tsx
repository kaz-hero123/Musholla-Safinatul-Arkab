import React from "react";
import { SITE_DATA } from "@/lib/constants";

export default function Gallery() {
  const { gallery } = SITE_DATA;

  return (
    <section className="py-24 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-border pb-6 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">Galeri Kegiatan</h2>
          </div>
          <p className="text-text-secondary max-w-md text-sm md:text-right">
            Momen berharga dalam setiap kegiatan kemakmuran Musholla Safinatul Arkab.
          </p>
        </div>

        {/* CSS Grid based gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-3xl border border-border bg-bg-secondary ${
                index === 0 ? "md:col-span-2 lg:col-span-2 aspect-[2/1]" : "aspect-square md:aspect-auto md:h-80"
              }`}
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
