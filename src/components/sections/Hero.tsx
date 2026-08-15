import React from "react";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Bismillah */}
        <div className="mb-8">
          <p className="font-arabic text-3xl md:text-4xl text-emerald-primary mb-2 opacity-90">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] mb-6 max-w-4xl">
          Musholla <span className="text-emerald-primary">Safinatul Arkab</span>
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mb-10 leading-relaxed">
          Pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
          <Link href="/program" className="bg-emerald-primary hover:bg-emerald-deep text-bg-primary px-8 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2">
            Jelajahi Program <ArrowRight size={18} />
          </Link>
          <Link href="/infaq" className="text-text-secondary hover:text-emerald-primary px-8 py-3.5 font-medium transition-colors">
            Laporan Infaq Transparan
          </Link>
        </div>

        {/* Photo Container */}
        <div className="w-full max-w-5xl aspect-video md:aspect-[21/9] bg-bg-secondary border border-border rounded-3xl overflow-hidden flex flex-col items-center justify-center relative shadow-sm group">
          <img 
            src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=2000&auto=format&fit=crop" 
            alt="Musholla Safinatul Arkab" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
