import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Instagram = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-bg-primary pt-24 pb-8 border-t border-border/30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Brand Card - Large */}
          <div className="lg:col-span-5 bg-bg-secondary rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-border/50 animate-reveal">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <span className="w-12 h-12 rounded-full bg-emerald-primary text-white flex items-center justify-center font-display font-bold italic text-2xl group-hover:scale-105 transition-transform">
                  S.
                </span>
                <span className="font-display font-bold text-2xl text-text-primary tracking-tight">Safinatul Arkab</span>
              </Link>
              <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                Pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat sekitar.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-bg-primary border border-border/50 flex items-center justify-center text-text-secondary hover:text-emerald-primary hover:border-emerald-primary transition-all hover:scale-105 shadow-sm" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="lg:col-span-3 bg-bg-secondary rounded-[2rem] p-6 sm:p-8 md:p-10 border border-border/50 animate-reveal" style={{animationDelay: '0.1s'}}>
            <h3 className="font-display font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-primary"></span> Navigasi
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Kisah Kami', href: '/tentang' },
                { label: 'Pendidikan & Sosial', href: '/kegiatan' },
                { label: 'Laporan Amanah', href: '/infaq' },
                { label: 'Kunjungi Kami', href: '/kontak' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-text-secondary hover:text-emerald-primary text-base font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-emerald-primary transition-all group-hover:w-4"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-4 bg-bg-secondary rounded-[2rem] p-6 sm:p-8 md:p-10 border border-border/50 animate-reveal" style={{animationDelay: '0.2s'}}>
            <h3 className="font-display font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-primary"></span> Hubungi Kami
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-emerald-primary shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <MapPin size={18} />
                </div>
                <span className="text-text-secondary text-sm leading-relaxed mt-1">
                  Jl. Jati Sari Besar Gg. Langgar, Legi, Pepelegi, Kec. Waru, Kabupaten Sidoarjo, Jawa Timur 61256
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-emerald-primary shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Phone size={18} />
                </div>
                <span className="text-text-secondary font-medium">+62 821-4350-6574</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-bg-primary flex items-center justify-center text-emerald-primary shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Mail size={18} />
                </div>
                <span className="text-text-secondary font-medium">info@safinatularkab.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 animate-reveal" style={{animationDelay: '0.3s'}}>
          <p className="text-text-muted text-sm font-medium">
            &copy; {new Date().getFullYear()} Remaja Musholla Safinatul Arkab. All rights reserved.
          </p>
          <div className="text-text-muted text-sm">
            Designed with <span className="text-emerald-primary">♥</span> for the Ummah
          </div>
        </div>
      </div>
    </footer>
  );
}
