"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kegiatan", href: "/kegiatan" },
  { name: "Infaq", href: "/infaq" },
  { name: "Kontak", href: "/kontak" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-bg-primary shadow-sm border-b border-border py-3" : "bg-bg-primary py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-primary flex items-center justify-center text-bg-primary font-bold text-xl">
            S
          </div>
          <span className="font-display font-bold text-xl text-text-primary tracking-tight">Safinatul Arkab</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? "bg-emerald-primary/10 text-emerald-deep" : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary border-b border-border shadow-xl md:hidden">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-primary/10 text-emerald-deep"
                      : "text-text-secondary active:bg-bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
