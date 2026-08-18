"use client";
import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { Wallet, ArrowDownRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { LedgerTable } from "@/components/ui/ledger-table";

export default function InfaqDashboard() {
  const { 
    currentBalance, 
    incomeThisMonth, 
    expenseThisMonth, 
    goal, 
    goalTitle, 
    history, 
    recentDistributionNotes 
  } = INFAQ_DATA;
  
  const progressPercent = Math.min(Math.round((currentBalance / goal) * 100), 100);

  return (
    <section className="py-16 md:py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Ringkasan Keuangan</h2>
        
        {/* Top KPI Metrics - Flat Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
          
          {/* Main Balance */}
          <div className="p-8 md:p-12 bg-bg-secondary flex flex-col justify-center">
            <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-4">Saldo Kas Aktif</h3>
            <div className="flex items-baseline gap-2 text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
              <span className="text-2xl text-text-muted font-sans font-normal">Rp</span>
              {Intl.NumberFormat("id-ID").format(currentBalance)}
            </div>
          </div>

          {/* Income */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-4 flex items-center gap-2">
              <ArrowDownRight className="text-emerald-primary" size={16} />
              Pemasukan Bulan Ini
            </h3>
            <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
              {Intl.NumberFormat("id-ID").format(incomeThisMonth)}
            </div>
          </div>

          {/* Expense */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-4 flex items-center gap-2">
              <ArrowUpRight className="text-text-muted" size={16} />
              Pengeluaran Bulan Ini
            </h3>
            <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
              {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
            </div>
          </div>
          
        </div>

        {/* Goal Progress - Editorial Bar */}
        <div className="mb-16 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-2xl font-bold font-display text-text-primary">{goalTitle}</h3>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-bold text-text-primary">
                Rp {Intl.NumberFormat("id-ID").format(currentBalance)} <span className="text-sm font-normal text-text-muted">/ {Intl.NumberFormat("id-ID").format(goal)}</span>
              </p>
            </div>
          </div>
          
          <div className="h-2 w-full bg-bg-secondary overflow-hidden">
            <div 
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-emerald-primary transition-all duration-1000 ease-out" 
            />
          </div>
          <p className="text-right text-text-secondary font-medium text-sm mt-2">{progressPercent}% Tercapai</p>
        </div>

        {/* Data Table */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-display text-text-primary mb-8 border-b border-border pb-4">Jurnal Keuangan</h2>
          {/* Note: the LedgerTable component should ideally be flattened as well. We assume it inherits table styles. */}
          <LedgerTable history={history} />
        </div>

        {/* Narrative Impact */}
        <div className="grid md:grid-cols-2 gap-16 border-t border-border pt-16">
          <div>
            <h2 className="font-display font-bold text-3xl text-text-primary mb-6">Fokus Penyaluran Dana</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Dana yang diinfakkan jamaah difokuskan pada kegiatan operasional harian, pemeliharaan fasilitas ibadah, serta kegiatan sosial kemasyarakatan.
            </p>
            <div className="flex flex-col gap-3">
              {recentDistributionNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-none bg-emerald-primary mt-2.5 shrink-0" />
                  <span className="text-text-primary font-medium">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bg-secondary p-8 md:p-12 flex flex-col justify-center border-l-4 border-emerald-primary">
            <h2 className="text-2xl font-display font-bold text-text-primary mb-4">Salurkan Infaq Anda</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Salurkan donasi Anda melalui rekening BSI resmi Musholla Safinatul Arkab. Mohon konfirmasi setelah transfer agar tercatat dengan baik.
            </p>
            <a 
              href="https://wa.me/6282143506574" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-emerald-primary hover:bg-emerald-deep text-white font-medium px-8 py-4 transition-colors text-sm tracking-wide uppercase"
            >
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
