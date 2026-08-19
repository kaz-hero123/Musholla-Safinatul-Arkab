import React from "react";
import { ABOUT_DATA } from "@/data/about";

export function AboutProfile() {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 border-t border-border pt-16">
          {/* Sejarah */}
          <div>
            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Jejak Langkah</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {ABOUT_DATA.history}
            </p>
          </div>
          
          {/* Visi */}
          <div>
            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Visi Kami</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {ABOUT_DATA.vision}
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="border-t border-border pt-16 mb-24">
          <h2 className="text-3xl font-display font-bold text-text-primary mb-12">Misi Utama</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {ABOUT_DATA.mission.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-2xl font-display font-bold text-emerald-primary">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kepengurusan */}
        <div className="border-t border-border pt-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">Pengurus & Pembina</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Kolaborasi Takmir dan Remaja Musholla dalam menghadirkan pelayanan jamaah yang maksimal dan program yang bermanfaat bagi warga sekitar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {ABOUT_DATA.leaders.map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] w-full relative mb-6 bg-bg-primary overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-1">{leader.name}</h3>
                  <p className="text-text-secondary uppercase tracking-widest text-xs font-medium">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
