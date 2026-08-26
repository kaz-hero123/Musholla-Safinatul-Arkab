import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Hero() {
  return (
    <section className="relative w-full pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-6 overflow-hidden bg-bg-primary">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch min-h-[85vh]">
        
        {/* Left: Copy & Main CTA (Bento Box 1) */}
        <FadeIn className="relative flex flex-col justify-between items-start text-left lg:col-span-7 bg-bg-secondary p-8 md:p-12 lg:p-16 rounded-[2rem] overflow-hidden group">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-full relative z-10">
            <span className="font-arabic text-3xl md:text-4xl text-emerald-primary/80 leading-none mb-8 block opacity-80 animate-reveal">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-text-primary leading-[1.02] mb-8 text-balance animate-reveal" style={{animationDelay: '0.1s'}}>
              Lebih dari sekadar <br className="hidden md:block"/>
              <span className="text-emerald-primary italic">tempat ibadah.</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl animate-reveal" style={{animationDelay: '0.2s'}}>
              Musholla Safinatul Arkab adalah denyut nadi spiritual dan sosial bagi masyarakat Pepelegi. Membina generasi muda yang tangguh dan berakhlak.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-12 relative z-10 animate-reveal" style={{animationDelay: '0.3s'}}>
            <Button asChild size="lg" className="gap-2 rounded-full h-14 px-8 text-base shadow-sm hover:scale-105 transition-all">
              <Link href="/kegiatan">
                Pendidikan & Sosial <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full h-14 px-8 text-base border-border hover:border-emerald-primary hover:bg-emerald-primary/5 text-text-secondary hover:text-text-primary transition-all">
              <Link href="/kontak">
                <MapPin size={18} /> Lokasi Kami
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Right Top: Authentic Photography (Bento Box 2) */}
        <FadeIn delay={0.2} className="relative w-full h-[400px] lg:h-auto lg:col-span-5 bg-text-primary rounded-[2rem] overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop" 
            alt="Kegiatan jamaah Musholla Safinatul Arkab" 
            fill
            unoptimized
            className="object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          {/* Glass Liquid Caption */}
          <div className="absolute bottom-6 left-6 right-6 p-4 glass-liquid rounded-2xl flex items-center justify-between">
             <p className="text-text-primary text-sm font-medium tracking-wide">
               Kajian Rutin Mingguan
             </p>
             <div className="w-8 h-8 rounded-full bg-emerald-primary/10 flex items-center justify-center">
               <ArrowRight size={14} className="text-emerald-primary" />
             </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
