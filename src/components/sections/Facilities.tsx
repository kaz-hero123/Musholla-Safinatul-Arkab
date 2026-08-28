/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ABOUT_DATA } from "@/data/about";
import { FadeIn } from "@/components/ui/fade-in";

export function Facilities() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:w-2/3">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 tracking-tight">
              Fasilitas Ibadah & Edukasi
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
              Infrastruktur yang dibangun dari infaq jamaah, dirancang untuk kenyamanan ibadah dan kelancaran proses belajar mengajar.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {ABOUT_DATA.facilities.map((fac, i) => (
            <FadeIn key={i} delay={0.1 * i} className="group">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-bg-primary relative border border-border">
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">{fac.title}</h3>
              <p className="text-text-secondary leading-relaxed">{fac.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
