import React from "react";
import Image from "next/image";
import { ABOUT_DATA } from "@/data/about";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutProfile() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Sejarah & Visi (Asymmetric Layout) */}
        <div className="border-t border-border pt-12 pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-sm font-medium uppercase tracking-widest text-text-secondary mb-4">Sejarah & Visi</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight">Jejak Langkah.</h3>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-16">
              <FadeIn delay={0.1}>
                <p className="text-text-primary text-xl md:text-2xl leading-relaxed text-balance">
                  {ABOUT_DATA.history}
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2} className="border-l border-emerald-primary pl-8">
                <p className="text-sm font-medium uppercase tracking-widest text-text-secondary mb-4">Visi Kami</p>
                <p className="text-text-primary text-xl leading-relaxed">
                  &quot;{ABOUT_DATA.vision}&quot;
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div className="border-t border-border pt-12 pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <h2 className="text-sm font-medium uppercase tracking-widest text-text-secondary mb-4">Misi Utama</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight">Arah Gerak.</h3>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
              <div className="flex flex-col border-t border-border">
                {ABOUT_DATA.mission.map((item, i) => (
                  <FadeIn 
                    key={i} 
                    delay={0.1 * i}
                    className="py-8 border-b border-border flex items-start gap-8"
                  >
                    <span className="text-emerald-primary font-display font-bold text-2xl w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {item}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kepengurusan */}
        <div className="border-t border-border pt-12">
          <FadeIn className="mb-16">
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-secondary mb-4">Kepengurusan</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight">Pengurus & Pembina.</h3>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {ABOUT_DATA.leaders.map((leader, i) => (
              <FadeIn key={i} delay={0.05 * i} className="group">
                <div className="aspect-[3/4] w-full relative mb-6 bg-bg-secondary overflow-hidden">
                  <Image 
                    src={leader.image} 
                    alt={leader.name}
                    fill
                    unoptimized
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-primary mb-1">{leader.name}</h4>
                  <p className="text-text-secondary text-sm">{leader.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
