"use client";
import React from "react";
import { motion } from "framer-motion";
import NumberTicker from "@/components/ui/number-ticker";
import { SITE_DATA } from "@/lib/constants";
import { HoverBorderGradient } from "@/components/ui/hover-border";
import { BadgeCheck, Wallet, ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function InfaqReport() {
  const { infaq } = SITE_DATA;
  const progressPercent = Math.min(Math.round((infaq.currentBalance / infaq.goal) * 100), 100);

  return (
    <section id="infaq" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BadgeCheck className="text-emerald-primary" size={24} />
            <span className="text-emerald-light font-medium tracking-wide">Transparansi Keuangan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Laporan Infaq <span className="text-emerald-primary">{infaq.lastUpdated}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Balance Card */}
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-8 lg:col-span-2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-5">
              <Wallet size={200} />
            </div>
            <p className="text-text-secondary font-medium mb-2">Total Saldo Saat Ini</p>
            <div className="flex items-baseline gap-2 text-4xl md:text-6xl font-bold font-display text-white">
              <span>Rp</span>
              <NumberTicker value={infaq.currentBalance} />
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-secondary">Progress: {infaq.goalTitle}</span>
                <span className="text-emerald-light font-medium">{progressPercent}%</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-emerald-deep to-emerald-light rounded-full" 
                />
              </div>
              <p className="text-xs text-text-muted mt-2 text-right">
                Target: Rp {Intl.NumberFormat("id-ID").format(infaq.goal)}
              </p>
            </div>
          </div>

          {/* Income/Expense Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-bg-secondary border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <ArrowDownRight className="text-emerald-light" size={20} />
                </div>
                <span className="text-text-secondary font-medium">Pemasukan Bulan Ini</span>
              </div>
              <div className="text-2xl font-bold text-emerald-light">
                + Rp <NumberTicker value={infaq.incomeThisMonth} />
              </div>
            </div>
            
            <div className="bg-bg-secondary border border-white/10 rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <ArrowUpRight className="text-red-400" size={20} />
                </div>
                <span className="text-text-secondary font-medium">Pengeluaran Bulan Ini</span>
              </div>
              <div className="text-2xl font-bold text-red-400">
                - Rp <NumberTicker value={infaq.expenseThisMonth} />
              </div>
            </div>
          </div>
        </div>

        {/* CSS Chart & Monthly History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Bar Chart */}
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-6 flex flex-col">
             <h3 className="text-xl font-bold text-white mb-8">Grafik Pemasukan vs Pengeluaran</h3>
             <div className="flex-1 flex h-48 items-end gap-2 sm:gap-6 mt-auto">
                {infaq.history.map((data, i) => {
                  const maxVal = Math.max(...infaq.history.map(d => Math.max(d.income, d.expense)));
                  const incomeHeight = `${(data.income / maxVal) * 100}%`;
                  const expenseHeight = `${(data.expense / maxVal) * 100}%`;
                  
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-3 group h-full">
                      <div className="flex w-full items-end justify-center gap-1 h-full">
                        <div className="w-1/2 sm:w-1/3 bg-emerald-primary rounded-t-sm relative group-hover:bg-emerald-light transition-colors" style={{ height: incomeHeight }}>
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-light opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{(data.income / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className="w-1/2 sm:w-1/3 bg-red-500 rounded-t-sm relative group-hover:bg-red-400 transition-colors" style={{ height: expenseHeight }}>
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{(data.expense / 1000000).toFixed(1)}M</span>
                        </div>
                      </div>
                      <span className="text-xs text-text-secondary font-medium">{data.month.split(' ')[0]}</span>
                    </div>
                  );
                })}
             </div>
             <div className="flex justify-center gap-6 mt-8">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-emerald-primary rounded-sm" />
                 <span className="text-xs text-text-secondary font-medium">Pemasukan</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 bg-red-500 rounded-sm" />
                 <span className="text-xs text-text-secondary font-medium">Pengeluaran</span>
               </div>
             </div>
          </div>
          
          {/* Monthly Summary */}
          <div className="bg-bg-secondary border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Riwayat 4 Bulan Terakhir</h3>
            <div className="space-y-4">
               {infaq.history.slice().reverse().map((data, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-white/5">
                   <div>
                     <p className="font-medium text-white mb-1">{data.month}</p>
                     <p className="text-xs">
                       <span className="text-emerald-light">+ Rp {Intl.NumberFormat("id-ID").format(data.income)}</span>
                       <span className="mx-2 text-white/20">|</span>
                       <span className="text-red-400">- Rp {Intl.NumberFormat("id-ID").format(data.expense)}</span>
                     </p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs text-text-secondary mb-1">Saldo Bersih</p>
                     <p className="font-bold text-white">Rp {Intl.NumberFormat("id-ID").format(data.income - data.expense)}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 p-8 bg-bg-secondary border border-emerald-primary/20 rounded-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Salurkan Infaq Anda</h3>
            <p className="text-text-secondary mb-6 max-w-md">Bantu operasional dan program musholla melalui transfer QRIS atau konfirmasi via WhatsApp.</p>
            <a href="#">
              <HoverBorderGradient
                className="bg-black text-white px-8 py-3 flex items-center justify-center gap-2 mx-auto md:mx-0 w-full md:w-auto"
              >
                <span>Konfirmasi via WhatsApp</span>
              </HoverBorderGradient>
            </a>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-xl">
             <div className="w-32 h-32 bg-gray-100 border border-gray-300 flex items-center justify-center mb-2">
                <span className="text-gray-500 text-xs font-medium text-center">QR Code<br/>(Placeholder)</span>
             </div>
             <span className="text-black text-sm font-bold font-display tracking-wide">QRIS Musholla</span>
          </div>
        </div>
      </div>
    </section>
  );
}
