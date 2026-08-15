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
    <footer className="bg-bg-secondary border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-primary flex items-center justify-center text-bg-primary font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-xl text-text-primary tracking-tight">Safinatul Arkab</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat sekitar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-text-primary mb-6">Navigasi</h3>
            <ul className="space-y-4">
              <li><Link href="/tentang" className="text-text-secondary hover:text-emerald-primary text-sm transition-colors">Tentang Kami</Link></li>
              <li><Link href="/program" className="text-text-secondary hover:text-emerald-primary text-sm transition-colors">Program Rutin</Link></li>
              <li><Link href="/infaq" className="text-text-secondary hover:text-emerald-primary text-sm transition-colors">Laporan Infaq</Link></li>
              <li><Link href="/jadwal-shalat" className="text-text-secondary hover:text-emerald-primary text-sm transition-colors">Jadwal Shalat</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-text-primary mb-6">Kontak & Lokasi</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-primary shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm leading-relaxed">
                  Jl. Contoh Jalan No.123, Kelurahan Contoh, Kecamatan Contoh, Kota Contoh 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-primary shrink-0" />
                <span className="text-text-secondary text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-primary shrink-0" />
                <span className="text-text-secondary text-sm">info@safinatularkab.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Remaja Musholla Safinatul Arkab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-primary border border-border flex items-center justify-center text-text-secondary hover:text-emerald-primary hover:border-emerald-primary transition-all" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
