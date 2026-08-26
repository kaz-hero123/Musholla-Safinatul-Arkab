import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { InfaqCopyButton } from "@/components/ui/infaq-copy-button";

export default function InfaqDashboard() {
  const { 
    currentBalance, 
    incomeThisMonth, 
    expenseThisMonth, 
    goal,
    goalTitle, 
    recentDistributionNotes,
    bankName,
    accountNumber
  } = INFAQ_DATA;
  
  const progressPercent = Math.min(Math.round((currentBalance / goal) * 100), 100);

  return (
    <section className="py-16 md:py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">Ringkasan Keuangan</h2>
        
        {/* Top KPI Metrics - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-16">
          
          {/* Main Balance */}
          <div className="md:col-span-6 p-8 md:p-12 bg-emerald-primary text-white rounded-[2rem] flex flex-col justify-center relative overflow-hidden group animate-reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-white/80 mb-4">Saldo Kas Aktif</h3>
            <div className="flex items-baseline gap-2 text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight relative z-10">
              <span className="text-2xl text-white/60 font-sans font-normal">Rp</span>
              {Intl.NumberFormat("id-ID").format(currentBalance)}
            </div>
          </div>

          <div className="md:col-span-6 grid grid-rows-2 gap-4 md:gap-6">
            {/* Income */}
            <div className="p-6 md:p-8 bg-bg-secondary rounded-[2rem] flex flex-col justify-center border border-border/50 animate-reveal" style={{animationDelay: '0.1s'}}>
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-primary/10 flex items-center justify-center">
                  <ArrowDownRight className="text-emerald-primary" size={16} />
                </div>
                Pemasukan Bulan Ini
              </h3>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-lg text-text-muted font-sans font-normal mr-1">Rp</span>
                {Intl.NumberFormat("id-ID").format(incomeThisMonth)}
              </div>
            </div>

            {/* Expense */}
            <div className="p-6 md:p-8 bg-bg-secondary rounded-[2rem] flex flex-col justify-center border border-border/50 animate-reveal" style={{animationDelay: '0.2s'}}>
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-text-primary/5 flex items-center justify-center">
                  <ArrowUpRight className="text-text-secondary" size={16} />
                </div>
                Pengeluaran Bulan Ini
              </h3>
              <div className="text-3xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-lg text-text-muted font-sans font-normal mr-1">Rp</span>
                {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
              </div>
            </div>
          </div>
          
        </div>

        {/* Narrative Impact & Goal - Bento */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 pt-8">
          
          {/* Goal Progress (Left Bento) */}
          <div className="lg:col-span-5 bg-bg-secondary p-8 md:p-10 rounded-[2rem] border border-border/50 animate-reveal" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold font-display text-text-primary mb-2">{goalTitle}</h3>
                <p className="text-text-secondary mb-8">Bersama kita wujudkan fasilitas yang lebih nyaman untuk jamaah.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-4">
                  <p className="text-xl font-bold text-text-primary">
                    Rp {Intl.NumberFormat("id-ID").format(currentBalance)} 
                  </p>
                  <span className="text-sm font-normal text-text-muted">/ Rp {Intl.NumberFormat("id-ID").format(goal)}</span>
                </div>
                
                <div className="h-4 w-full bg-bg-primary rounded-full overflow-hidden border border-border/50 p-1">
                  <div 
                    style={{ width: `${progressPercent}%` }}
                    className="h-full bg-emerald-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden" 
                  >
                    <div className="absolute inset-0 bg-white/20 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
                <p className="text-right text-emerald-primary font-bold text-sm mt-3">{progressPercent}% Tercapai</p>
              </div>
            </div>
          </div>

          {/* Narrative (Right Bento) */}
          <div className="lg:col-span-7 bg-bg-secondary p-8 md:p-10 rounded-[2rem] border border-border/50 animate-reveal" style={{animationDelay: '0.5s'}}>
            <h3 className="font-display font-bold text-2xl text-text-primary mb-6">Fokus Penyaluran Dana</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Dana yang diinfakkan jamaah difokuskan pada kegiatan operasional harian, pemeliharaan fasilitas ibadah, serta kegiatan sosial kemasyarakatan.
            </p>
            <div className="flex flex-col gap-4">
              {recentDistributionNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-bg-primary rounded-2xl border border-border/30">
                  <div className="w-8 h-8 rounded-full bg-emerald-primary/10 flex items-center justify-center shrink-0">
                     <span className="text-emerald-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="flex flex-col mt-1">
                    <span className="text-text-primary font-bold">{note.title}</span>
                    <span className="text-text-secondary text-sm mt-1">{note.impact}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col gap-6">
              {bankName && accountNumber && (
                <InfaqCopyButton bankName={bankName} accountNumber={accountNumber} />
              )}
              <a 
                href="https://wa.me/6282143506574" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-text-primary hover:bg-black text-white font-medium px-8 py-4 rounded-xl transition-all hover:scale-105 text-sm tracking-wide"
              >
                Konfirmasi Infaq via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
