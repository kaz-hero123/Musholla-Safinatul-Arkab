"use client";
import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { Wallet, ArrowDownRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { LedgerTable } from "@/components/ui/ledger-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <section className="py-16 md:py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        
        {/* Top KPI Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Main Balance */}
          <Card className="md:col-span-1 bg-emerald-primary text-white border-emerald-deep relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Wallet size={120} />
            </div>
            <CardHeader>
              <CardTitle className="text-white/80 text-base font-sans font-medium">Saldo Kas Aktif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 text-4xl md:text-5xl font-bold font-display tracking-tight mt-2">
                <span className="text-2xl text-white/70 font-sans">Rp</span>
                {Intl.NumberFormat("id-ID").format(currentBalance)}
              </div>
            </CardContent>
          </Card>

          {/* Income */}
          <Card className="card-premium">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-primary/10 rounded-xl">
                  <ArrowDownRight className="text-emerald-primary" size={20} />
                </div>
                <CardTitle className="text-base text-text-secondary">Pemasukan Bulan Ini</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight mt-4">
                <span className="text-emerald-primary text-xl font-sans mr-1">+ Rp</span>
                {Intl.NumberFormat("id-ID").format(incomeThisMonth)}
              </div>
            </CardContent>
          </Card>

          {/* Expense */}
          <Card className="card-premium">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-bg-secondary rounded-xl">
                  <ArrowUpRight className="text-text-secondary" size={20} />
                </div>
                <CardTitle className="text-base text-text-secondary">Pengeluaran Bulan Ini</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight mt-4">
                <span className="text-text-muted text-xl font-sans mr-1">- Rp</span>
                {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goal Progress */}
        <Card className="card-premium mb-12">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-primary mb-2">
                  <TrendingUp size={18} />
                  <span className="font-semibold text-sm tracking-wide uppercase">Target Pendanaan</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-text-primary">{goalTitle}</h3>
              </div>
              <div className="text-right">
                <p className="text-text-secondary font-medium">Terkumpul</p>
                <p className="text-xl font-bold text-text-primary">
                  Rp {Intl.NumberFormat("id-ID").format(currentBalance)} <span className="text-sm font-normal text-text-muted">/ {Intl.NumberFormat("id-ID").format(goal)}</span>
                </p>
              </div>
            </div>
            
            <div className="h-4 w-full bg-bg-secondary rounded-full overflow-hidden mb-2">
              <div 
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-emerald-primary rounded-full transition-all duration-1000 ease-out" 
              />
            </div>
            <p className="text-right text-emerald-primary font-bold">{progressPercent}% Tercapai</p>
          </CardContent>
        </Card>

        {/* Data Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-display text-text-primary mb-6">Buku Besar (Ledger)</h3>
          <LedgerTable history={history} />
        </div>

        {/* Narrative Impact */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-primary/5 border border-emerald-primary/20 rounded-3xl p-8">
            <h3 className="font-display font-bold text-xl text-text-primary mb-3">Fokus Penyaluran Dana</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Dana yang diinfakkan jamaah difokuskan pada kegiatan operasional harian, pemeliharaan fasilitas ibadah, serta kegiatan sosial kemasyarakatan.
            </p>
            <div className="flex flex-wrap gap-3">
              {recentDistributionNotes.map((note, i) => (
                <span key={i} className="text-sm font-semibold bg-white px-4 py-2 rounded-xl border border-border text-emerald-primary shadow-sm">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-bg-primary border border-border rounded-3xl p-8 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Salurkan Infaq Anda</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Transfer ke rekening resmi BSI Musholla Safinatul Arkab. Konfirmasi melalui admin kami.
            </p>
            <a 
              href="https://wa.me/6282143506574" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-emerald-primary hover:bg-emerald-deep text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Konfirmasi WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
