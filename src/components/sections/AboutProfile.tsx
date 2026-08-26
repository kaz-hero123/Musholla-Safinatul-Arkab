import React from "react";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/about";

export function AboutProfile() {
  return (
    <section className="py-24 px-4 md:px-6 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 mb-24">
          
          {/* Sejarah (Bento Card Large) */}
          <div className="lg:col-span-8 bg-bg-primary rounded-[2rem] p-8 md:p-12 border border-border/50 animate-reveal">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-8 tracking-tight">
              Jejak <span className="text-emerald-primary italic">Langkah.</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-6">
              {ABOUT_DATA.history}
            </p>
          </div>
          
          {/* Visi (Bento Card Small) */}
          <div className="lg:col-span-4 bg-emerald-primary text-white rounded-[2rem] p-8 md:p-12 shadow-lg animate-reveal" style={{animationDelay: '0.1s'}}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Visi Kami</h2>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              &quot;{ABOUT_DATA.vision}&quot;
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="mb-24">
          <div className="animate-reveal">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-12 tracking-tight">
              Misi <span className="text-emerald-primary italic">Utama.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ABOUT_DATA.mission.map((item, i) => (
              <div key={i} className="bg-bg-primary rounded-[2rem] p-8 border border-border/50 flex flex-col gap-6 animate-reveal hover:-translate-y-2 transition-transform duration-500 shadow-sm" style={{animationDelay: `${0.1 * i}s`}}>
                <div className="w-16 h-16 rounded-full bg-emerald-primary/10 flex items-center justify-center text-3xl font-display font-bold text-emerald-primary">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kepengurusan */}
        <div className="bg-bg-primary rounded-[3rem] p-8 md:p-16 border border-border/50 animate-reveal">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6 tracking-tight">
              Pengurus <span className="text-emerald-primary italic">& Pembina.</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Sinergi DKM dan Remaja Musholla untuk memastikan setiap program berjalan dengan progresif.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {ABOUT_DATA.leaders.map((leader, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] w-full relative mb-6 rounded-[2rem] overflow-hidden bg-bg-secondary border border-border/30">
                  <Image 
                    src={leader.image} 
                    alt={leader.name}
                    fill
                    unoptimized
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Glassmorphism gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2">
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-2 group-hover:text-emerald-primary transition-colors">{leader.name}</h3>
                  <p className="text-emerald-primary uppercase tracking-widest text-xs font-bold">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
