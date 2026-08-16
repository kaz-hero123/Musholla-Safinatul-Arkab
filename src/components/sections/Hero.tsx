/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left: Copy */}
        <FadeIn className="flex flex-col items-start text-left max-w-2xl">
          {/* Bismillah */}
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-primary/5 border border-emerald-primary/10">
            <span className="font-arabic text-2xl text-emerald-primary opacity-90 leading-none pb-1">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.05] mb-6">
            Pusat Pembinaan <span className="text-emerald-primary">Umat & Generasi</span> Muda.
          </h1>

          <p className="text-text-secondary text-lg md:text-xl font-medium mb-10 leading-relaxed">
            Lebih dari sekadar tempat ibadah. Musholla Safinatul Arkab hadir sebagai sentral kegiatan keagamaan, sosial, dan pendidikan bagi masyarakat Pepelegi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="gap-2">
              <Link href="/kegiatan">
                Jelajahi Program <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="/kontak">
                <MapPin size={18} /> Lokasi Kami
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm font-medium text-text-muted">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Jamaah" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Bergabung dengan <span className="text-text-primary font-bold">500+ jamaah</span> aktif</p>
          </div>
        </FadeIn>

        {/* Right: Curated Editorial Image */}
        <FadeIn delay={0.2} className="relative w-full h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden bg-bg-secondary border border-border shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop" 
            alt="Musholla Safinatul Arkab" 
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="glass-panel p-6 rounded-3xl backdrop-blur-xl">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-emerald-primary flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-lg leading-tight">Donasi Renovasi</p>
                  <p className="text-white/80 text-sm mt-1">Rp 15.450.000 terkumpul bulan ini</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
