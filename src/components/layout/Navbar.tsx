"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Kisah Kami", href: "/tentang" },
  { name: "Pendidikan & Sosial", href: "/kegiatan" },
  { name: "Laporan Amanah", href: "/infaq" },
  { name: "Kunjungi Kami", href: "/kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center mt-4 px-4 ${
        isScrolled ? "translate-y-2" : "translate-y-0"
      }`}
    >
      <div 
        className={`w-full max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full ${
          isScrolled 
            ? "glass-liquid" 
            : "bg-bg-primary/80 backdrop-blur-sm border border-transparent shadow-none"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 md:gap-3 group truncate max-w-[75vw]">
          <span className="font-display font-bold italic text-2xl md:text-3xl text-emerald-primary tracking-tight group-hover:scale-105 transition-transform shrink-0">S.</span>
          <span className="font-display font-bold text-sm text-text-primary tracking-tight block md:hidden truncate">
            Musholla Safinatul Arkab
          </span>
          <span className="font-display font-bold text-lg text-text-primary tracking-tight hidden md:block">Safinatul Arkab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-text-primary text-white" 
                    : "text-text-secondary hover:text-text-primary hover:bg-black/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2 focus:outline-none rounded-full hover:bg-black/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-4 left-4 right-4 glass-liquid rounded-3xl md:hidden overflow-hidden border border-border/50"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`p-4 rounded-2xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-text-primary text-white"
                        : "text-text-secondary hover:bg-black/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
