/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ABOUT_DATA } from "@/data/about";

export function Facilities() {
  return (
    <section className="py-24 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Fasilitas Ibadah & Edukasi
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Infrastruktur yang dibangun dari infaq jamaah, dirancang untuk kenyamanan ibadah dan kelancaran proses belajar mengajar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_DATA.facilities.map((fac, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-bg-secondary relative">
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">{fac.title}</h3>
              <p className="text-text-secondary leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
