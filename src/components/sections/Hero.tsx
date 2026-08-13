"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { HoverBorderGradient } from "@/components/ui/hover-border";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-bg-primary pt-20">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center text-center z-50 w-full"
        >
          <h2 className="font-arabic text-3xl md:text-5xl text-emerald-light mb-6 opacity-80">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </h2>
          
          <h1 className="font-display mt-8 bg-gradient-to-br from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
            Musholla <br className="md:hidden" />
            <span className="text-emerald-primary">Safinatul Arkab</span>
          </h1>
          
          <div className="mt-4 max-w-2xl mx-auto px-4">
            <TextGenerateEffect
              words="Membangun Generasi Muda Beriman, Satu Langkah Menuju Kebaikan."
              className="text-text-secondary text-lg md:text-xl font-medium"
            />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-black text-white flex items-center space-x-2 px-8 py-3"
            >
              <span>Jelajahi Program</span>
            </HoverBorderGradient>
            
            <a href="#infaq" className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 group font-medium">
              <span>Laporan Infaq</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </LampContainer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
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
