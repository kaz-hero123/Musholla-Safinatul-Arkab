import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden bg-bg-primary border-b border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Copy */}
        <FadeIn className="flex flex-col items-start text-left lg:col-span-5">
          {/* Bismillah - Editorial style */}
          <div className="mb-6">
            <span className="font-arabic text-3xl text-text-primary/80 leading-none">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.05] mb-8">
            Lebih dari sekadar <br className="hidden md:block"/>
            <span className="text-emerald-primary italic">tempat ibadah.</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            Musholla Safinatul Arkab adalah denyut nadi spiritual dan sosial bagi masyarakat Pepelegi. Sejak didirikan, kami berdedikasi untuk membina generasi muda yang tangguh, berakhlak, dan bermanfaat bagi sesama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="gap-2 rounded-sm">
              <Link href="/kegiatan">
                Pendidikan & Sosial <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-sm border-border hover:border-emerald-primary text-text-secondary">
              <Link href="/kontak">
                <MapPin size={18} /> Lokasi Kami
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Right: Authentic Photography */}
        <FadeIn delay={0.2} className="relative w-full h-[500px] lg:h-[700px] lg:col-span-7 bg-bg-secondary group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop" 
            alt="Kegiatan jamaah Musholla Safinatul Arkab" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          {/* Editorial Caption instead of glass panel */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
             <p className="text-white/90 text-sm font-medium tracking-wide">
               {/* TODO: Replace with real community photo and caption */}
               Suasana kajian rutin mingguan di Musholla Safinatul Arkab.
             </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
