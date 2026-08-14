"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Marquee from "@/components/ui/marquee";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Program", href: "#programs" },
  { name: "Laporan Infaq", href: "#infaq" },
  { name: "Galeri", href: "#gallery" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Beranda");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeLink = navLinks.find(link => link.href === `#${id}`);
            if (activeLink) {
              setActiveSection(activeLink.name);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    // Wait slightly for DOM to be fully loaded
    setTimeout(() => {
      const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
      sections.forEach(section => observer.observe(section!));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* Announcement Ticker */}
      <motion.div 
        initial={false}
        animate={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-full bg-emerald-deep text-white text-xs font-medium tracking-wide overflow-hidden"
      >
        <Marquee className="py-1" pauseOnHover>
          <span className="mx-4">🕌 Mari salurkan infaq terbaik Anda untuk operasional Musholla</span>
          <span className="mx-4">✨ Pengajian rutin setiap malam Jumat ba&apos;da Maghrib</span>
          <span className="mx-4">📅 Program TPA dibuka setiap hari Senin - Jumat</span>
        </Marquee>
      </motion.div>

      {/* Main Navbar */}
      <nav
        className={`w-full max-w-7xl mx-auto px-6 py-3 transition-all duration-300 rounded-full flex items-center justify-between
        ${isScrolled ? "bg-bg-primary/90 backdrop-blur-xl border border-white/10 shadow-lg mt-4" : "bg-transparent mt-4"}`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-display font-bold text-lg text-white">Safinatul Arkab</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                activeSection === link.name ? "text-white" : "text-text-secondary hover:text-white"
              }`}
            >
              {activeSection === link.name && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-bg-secondary/95 backdrop-blur-xl border border-white/10 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-3 rounded-xl text-center font-medium ${
                  activeSection === link.name
                    ? "bg-emerald-primary/20 text-emerald-light"
                    : "text-text-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
