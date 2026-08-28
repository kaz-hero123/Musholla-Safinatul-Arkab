import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-bg-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
        
        {/* Left: Copy & Main CTA */}
        <FadeIn className="flex flex-col items-start text-left lg:col-span-7">
          <span className="font-arabic text-5xl md:text-5xl text-text-primary leading-relaxed mb-6 opacity-90 animate-reveal">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-text-primary leading-[1.1] md:leading-[1.05] mb-8 text-balance animate-reveal" style={{animationDelay: '0.1s'}}>
            Lebih dari sekadar <br className="hidden md:block"/>
            <span className="text-emerald-primary">tempat ibadah.</span>
          </h1>

          <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-xl animate-reveal" style={{animationDelay: '0.2s'}}>
            Musholla Safinatul Arkab adalah denyut nadi spiritual dan sosial bagi masyarakat Pepelegi. Membina generasi muda yang tangguh, mandiri, dan berakhlak mulia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8 md:mt-10 animate-reveal" style={{animationDelay: '0.3s'}}>
            <Button asChild size="lg" className="gap-2 rounded-full h-14 px-8 text-base bg-text-primary text-white hover:bg-text-primary/90 hover:scale-[0.98] transition-transform w-full sm:w-auto">
              <Link href="/kegiatan">
                Pendidikan & Sosial <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full h-14 px-8 text-base border-border hover:border-text-primary text-text-secondary hover:text-text-primary hover:bg-transparent transition-colors w-full sm:w-auto">
              <Link href="/kontak">
                <MapPin size={18} /> Lokasi Kami
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Right: Authentic Photography */}
        <FadeIn delay={0.2} className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] lg:col-span-5 rounded-2xl overflow-hidden bg-bg-secondary">
          <Image 
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1200&auto=format&fit=crop" 
            alt="Kegiatan jamaah Musholla Safinatul Arkab" 
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
          />
        </FadeIn>

      </div>
    </section>
  );
}
