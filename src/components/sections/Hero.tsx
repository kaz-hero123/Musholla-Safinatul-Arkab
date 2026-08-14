"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { HoverBorderGradient } from "@/components/ui/hover-border";
import { ChevronDown, Image as ImageIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center bg-bg-primary pt-24 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start justify-center pt-10 lg:pt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-arabic text-3xl md:text-4xl text-emerald-light mb-6 opacity-90"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]"
          >
            Musholla <br />
            <span className="text-emerald-primary">Safinatul Arkab</span>
          </motion.h1>
          
          <div className="mt-6 max-w-xl">
            <TextGenerateEffect
              words="Membangun Generasi Muda Beriman, Satu Langkah Menuju Kebaikan."
              className="text-text-secondary text-lg md:text-xl font-medium"
              duration={0.5}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-6 items-center"
          >
            <a href="#programs">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-bg-secondary text-white flex items-center space-x-2 px-8 py-3 font-medium hover:bg-black transition-colors"
              >
                <span>Jelajahi Program</span>
              </HoverBorderGradient>
            </a>
            
            <a href="#infaq" className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 group font-medium">
              <span>Laporan Infaq</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Photo Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 bg-bg-secondary/50 backdrop-blur-sm group"
        >
          {/* Explicit Placeholder Design */}
          <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center bg-bg-primary/30 group-hover:bg-bg-primary/50 transition-colors">
            <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <ImageIcon className="text-text-secondary" size={40} />
            </div>
            <p className="font-display font-bold text-white text-lg tracking-wide">Foto Musholla</p>
            <p className="text-text-muted text-sm mt-1 uppercase tracking-widest">— Segera Hadir —</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-text-secondary opacity-50" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
