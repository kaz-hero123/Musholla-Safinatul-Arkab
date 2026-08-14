import React from "react";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 px-6 border-t border-white/5 bg-gradient-to-b from-bg-primary to-bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-xl text-white">Safinatul Arkab</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-sm">
              Membangun Generasi Muda Beriman, Satu Langkah Menuju Kebaikan. Pusat pembinaan generasi muda Islam yang berakhlak mulia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/remussafinatularkab" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-emerald-light hover:bg-emerald-primary/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-emerald-light hover:bg-emerald-primary/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-emerald-light hover:bg-emerald-primary/20 transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#hero" className="hover:text-emerald-light transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-emerald-light transition-colors">Tentang Kami</a></li>
              <li><a href="#programs" className="hover:text-emerald-light transition-colors">Program</a></li>
              <li><a href="#infaq" className="hover:text-emerald-light transition-colors">Laporan Infaq</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Informasi</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#gallery" className="hover:text-emerald-light transition-colors">Galeri</a></li>
              <li><a href="#contact" className="hover:text-emerald-light transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} Remaja Musholla Safinatul Arkab. All rights reserved.
          </p>
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by Remus Safinatul Arkab
          </p>
        </div>
      </div>
    </footer>
  );
}
