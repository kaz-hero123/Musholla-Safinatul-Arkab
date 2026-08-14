import React from "react";
import Link from "next/link";
import { ArrowRight, Info, Calendar } from "lucide-react";
import { SITE_DATA } from "@/lib/constants";

export default function HomeTeasers() {
  const { infaq, gallery } = SITE_DATA;
  
  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Varied Header Layout (No colored keyword, left-aligned, border separation) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-border pb-6 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold text-text-primary tracking-tight">Eksplorasi</h2>
            <p className="text-text-secondary mt-2 text-lg">Pusat informasi, jadwal, dan dokumentasi kegiatan musholla.</p>
          </div>
        </div>

        {/* Distinct Card Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          
          {/* Laporan Infaq - Number Lead (col-span-4) */}
          <Link href="/infaq" className="md:col-span-3 lg:col-span-4 group relative rounded-3xl p-8 bg-bg-secondary border border-border hover:border-emerald-primary transition-colors flex flex-col justify-between overflow-hidden">
            <div>
              <p className="text-text-secondary font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-primary"></span>
                Saldo Kas Saat Ini
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-text-primary font-display tabular-nums tracking-tight mb-2">
                Rp {Intl.NumberFormat("id-ID").format(infaq.currentBalance / 1000000)}<span className="text-xl text-text-muted">JT</span>
              </h3>
            </div>
            <div className="mt-12 flex items-center justify-between text-sm font-medium text-emerald-primary">
              <span>Laporan Transparansi</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Galeri - Visual Lead (col-span-4) */}
          <Link href="/galeri" className="md:col-span-3 lg:col-span-4 group relative rounded-3xl bg-bg-secondary border border-border hover:border-emerald-primary transition-colors flex flex-col overflow-hidden">
            <div className="h-40 w-full relative overflow-hidden">
               <img 
                 src={gallery[0].url} 
                 alt="Galeri Thumbnail" 
                 className="object-cover w-full h-full opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
            </div>
            <div className="p-8 pt-0 flex-grow flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-text-primary font-display mb-2">Galeri Kegiatan</h3>
              <div className="flex items-center justify-between text-sm font-medium text-emerald-primary">
                <span>Lihat Dokumentasi</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Jadwal Shalat - Information Lead (col-span-4) */}
          <Link href="/jadwal-shalat" className="md:col-span-6 lg:col-span-4 group relative rounded-3xl p-8 bg-bg-secondary border border-border hover:border-emerald-primary transition-colors flex flex-col justify-between">
            <div>
               <h3 className="text-2xl font-bold text-text-primary font-display mb-4">Jadwal Shalat</h3>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-text-secondary border-b border-border pb-2">
                   <span>Subuh</span><span className="text-text-primary font-medium">04:30</span>
                 </div>
                 <div className="flex justify-between items-center text-text-secondary border-b border-border pb-2">
                   <span>Dzuhur</span><span className="text-text-primary font-medium">11:55</span>
                 </div>
                 <div className="flex justify-between items-center text-text-secondary pb-2">
                   <span>...dan lainnya</span>
                 </div>
               </div>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm font-medium text-emerald-primary">
              <span>Cek Jadwal Lengkap</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Tentang Kami - Text Lead (col-span-6) */}
          <Link href="/tentang" className="md:col-span-3 lg:col-span-6 group relative rounded-3xl p-8 bg-bg-secondary border border-border hover:border-emerald-primary transition-colors flex items-center gap-6">
             <div className="w-14 h-14 rounded-2xl bg-emerald-primary/10 flex items-center justify-center text-emerald-primary flex-shrink-0 group-hover:bg-emerald-primary/20 transition-colors">
               <Info size={28} />
             </div>
             <div className="flex-grow">
               <h3 className="text-xl font-bold text-text-primary font-display mb-1">Tentang Kami</h3>
               <p className="text-text-secondary text-sm">Sejarah, visi misi, dan kepengurusan musholla.</p>
             </div>
             <ArrowRight size={20} className="text-emerald-primary group-hover:translate-x-1 transition-transform hidden sm:block" />
          </Link>

          {/* Program - Text Lead (col-span-6) */}
          <Link href="/program" className="md:col-span-3 lg:col-span-6 group relative rounded-3xl p-8 bg-bg-secondary border border-border hover:border-emerald-primary transition-colors flex items-center gap-6">
             <div className="w-14 h-14 rounded-2xl bg-emerald-primary/10 flex items-center justify-center text-emerald-primary flex-shrink-0 group-hover:bg-emerald-primary/20 transition-colors">
               <Calendar size={28} />
             </div>
             <div className="flex-grow">
               <h3 className="text-xl font-bold text-text-primary font-display mb-1">Program Rutin</h3>
               <p className="text-text-secondary text-sm">TPA, kajian tematik, dan peringatan hari besar Islam.</p>
             </div>
             <ArrowRight size={20} className="text-emerald-primary group-hover:translate-x-1 transition-transform hidden sm:block" />
          </Link>

        </div>
      </div>
    </section>
  );
}
