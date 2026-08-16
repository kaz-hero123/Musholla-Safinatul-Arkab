"use client";
import React from "react";
import { SITE_DATA } from "@/lib/constants";
import { BadgeCheck, Wallet, ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function InfaqReport() {
  const { infaq } = SITE_DATA;
  const progressPercent = Math.min(Math.round((infaq.currentBalance / infaq.goal) * 100), 100);

  return (
    <section className="py-24 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-border pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="text-emerald-primary" size={20} />
              <span className="text-emerald-primary text-sm font-bold tracking-wide uppercase">Transparansi Keuangan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
              Laporan Kas & Infaq
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="inline-block bg-bg-secondary text-text-secondary px-4 py-1.5 rounded-full text-sm font-medium border border-border">
              Update Terakhir: {infaq.lastUpdated}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Balance Card */}
          <div className="bg-bg-secondary border border-border rounded-3xl p-8 lg:col-span-2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <p className="text-text-secondary font-medium">Total Saldo Kas Saat Ini</p>
              <Wallet size={24} className="text-text-muted" />
            </div>
            <div className="flex items-baseline gap-2 text-4xl md:text-6xl font-bold font-display text-text-primary tracking-tight mb-8">
              <span className="text-2xl md:text-3xl text-text-muted font-sans">Rp</span>
              {Intl.NumberFormat("id-ID").format(infaq.currentBalance)}
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-3">
                <span className="text-text-secondary font-medium">{infaq.goalTitle}</span>
                <span className="text-emerald-primary font-bold">{progressPercent}%</span>
              </div>
              <div className="h-4 w-full bg-border rounded-full overflow-hidden">
                <div 
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-emerald-primary rounded-full transition-all duration-1000" 
                />
              </div>
              <p className="text-xs text-text-muted mt-2 text-right font-medium">
                Target: Rp {Intl.NumberFormat("id-ID").format(infaq.goal)}
              </p>
            </div>
          </div>

          {/* Income/Expense Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-bg-secondary border border-border rounded-3xl p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-primary/10 rounded-xl">
                  <ArrowDownRight className="text-emerald-primary" size={20} />
                </div>
                <span className="text-text-secondary font-medium">Pemasukan Bulan Ini</span>
              </div>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-emerald-primary text-xl font-sans mr-1">+ Rp</span>
                {Intl.NumberFormat("id-ID").format(infaq.incomeThisMonth)}
              </div>
            </div>
            
            <div className="bg-bg-secondary border border-border rounded-3xl p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-text-muted/10 rounded-xl">
                  <ArrowUpRight className="text-text-secondary" size={20} />
                </div>
                <span className="text-text-secondary font-medium">Pengeluaran Bulan Ini</span>
              </div>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-text-secondary text-xl font-sans mr-1">- Rp</span>
                {Intl.NumberFormat("id-ID").format(infaq.expenseThisMonth)}
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Impact Section */}
        <div className="bg-emerald-primary/10 border border-emerald-primary/20 rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-bg-primary rounded-2xl shrink-0">
              <BadgeCheck className="text-emerald-primary w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-3">Catatan Penyaluran Bulan Lalu</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Alhamdulillah, berkat partisipasi aktif jamaah, dana infaq bulan lalu telah sukses disalurkan untuk dua program utama: pemeliharaan fasilitas ibadah (termasuk servis rutin AC dan penggantian lampu sorot utama) serta pendistribusian 50 paket sembako Jumat Berkah kepada warga lansia di wilayah Pepelegi.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-semibold bg-bg-primary px-3 py-1.5 rounded-lg border border-emerald-primary/20 text-emerald-deep">Servis Fasilitas</span>
                <span className="text-xs font-semibold bg-bg-primary px-3 py-1.5 rounded-lg border border-emerald-primary/20 text-emerald-deep">Santunan Lansia</span>
                <span className="text-xs font-semibold bg-bg-primary px-3 py-1.5 rounded-lg border border-emerald-primary/20 text-emerald-deep">Jumat Berkah</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 p-8 md:p-10 bg-bg-secondary border border-border rounded-3xl">
          <div>
            <h3 className="text-2xl font-display font-bold text-text-primary mb-2">Salurkan Infaq Anda</h3>
            <p className="text-text-secondary max-w-lg leading-relaxed">
              Dukung operasional dan program Musholla Safinatul Arkab. Konfirmasi transfer via WhatsApp untuk pencatatan yang transparan.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a href="https://wa.me/6282143506574" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-emerald-primary hover:bg-emerald-deep text-bg-primary font-medium px-8 py-4 rounded-xl transition-colors">
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
