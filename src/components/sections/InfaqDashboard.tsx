"use client";
import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { InfaqCopyButton } from "@/components/ui/infaq-copy-button";
import { FadeIn } from "@/components/ui/fade-in";

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
        
        {/* Top KPI Metrics - Clean Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Main Balance */}
          <FadeIn className="lg:col-span-8 flex flex-col justify-center border-b border-border pb-12 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-12">
            <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-6">Saldo Kas Aktif</h3>
            <div className="flex items-baseline gap-2 sm:gap-4 text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold font-display tracking-tight text-text-primary truncate">
              <span className="text-2xl sm:text-3xl md:text-4xl text-text-secondary font-sans font-normal">Rp</span>
              {Intl.NumberFormat("id-ID").format(currentBalance)}
            </div>
          </FadeIn>

          <div className="lg:col-span-4 flex flex-col justify-center gap-12">
            {/* Income */}
            <FadeIn delay={0.1} className="flex flex-col">
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-4 flex items-center gap-2">
                <ArrowDownRight className="text-emerald-primary" size={16} />
                Pemasukan Bulan Ini
              </h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight truncate">
                <span className="text-lg sm:text-xl text-text-secondary font-sans font-normal mr-2">Rp</span>
                {Intl.NumberFormat("id-ID").format(incomeThisMonth)}
              </div>
            </FadeIn>

            {/* Expense */}
            <FadeIn delay={0.2} className="flex flex-col">
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-secondary mb-4 flex items-center gap-2">
                <ArrowUpRight className="text-text-secondary" size={16} />
                Pengeluaran Bulan Ini
              </h3>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight truncate">
                <span className="text-lg sm:text-xl text-text-secondary font-sans font-normal mr-2">Rp</span>
                {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
              </div>
            </FadeIn>
          </div>
          
        </div>

        {/* Narrative Impact & Goal */}
        <div className="grid lg:grid-cols-12 gap-16 pt-12 border-t border-border">
          
          {/* Narrative */}
          <FadeIn className="lg:col-span-7">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">Fokus Penyaluran Dana</h2>
            <p className="text-text-secondary text-xl leading-relaxed mb-12 max-w-2xl text-balance">
              Dana yang diinfakkan jamaah difokuskan pada kegiatan operasional harian, pemeliharaan fasilitas ibadah, serta kegiatan sosial kemasyarakatan.
            </p>
            <div className="flex flex-col gap-6">
              {recentDistributionNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-6 border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="text-emerald-primary font-display font-bold text-2xl w-6 shrink-0 mt-1">
                     {i + 1}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-text-primary text-xl font-bold mb-2">{note.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">{note.impact}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              {bankName && accountNumber && (
                <InfaqCopyButton bankName={bankName} accountNumber={accountNumber} />
              )}
              <a 
                href="https://wa.me/6282143506574" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-white font-medium px-8 py-4 transition-colors text-sm tracking-widest uppercase w-full sm:w-auto text-center"
              >
                Konfirmasi via WA
              </a>
            </div>
          </FadeIn>

          {/* Goal Progress */}
          <FadeIn delay={0.2} className="lg:col-span-5 bg-bg-secondary p-10 lg:p-12">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl font-bold font-display text-text-primary mb-4">{goalTitle}</h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-12">
                  Bersama kita wujudkan fasilitas yang lebih nyaman untuk jamaah. Target dana tahun ini difokuskan pada renovasi area wudhu.
                </p>
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-2">
                  <p className="text-2xl font-bold text-text-primary">
                    Rp {Intl.NumberFormat("id-ID").format(currentBalance)} 
                  </p>
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-widest">
                    Target: Rp {Intl.NumberFormat("id-ID").format(goal)}
                  </span>
                </div>
                
                <div className="h-2 w-full bg-border overflow-hidden">
                  <div 
                    style={{ width: `${progressPercent}%` }}
                    className="h-full bg-emerald-primary transition-all duration-1000 ease-out" 
                  ></div>
                </div>
                <p className="text-right text-emerald-primary font-bold text-sm mt-4 uppercase tracking-widest">{progressPercent}% Tercapai</p>
              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
