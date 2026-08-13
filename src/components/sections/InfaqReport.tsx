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
          <div className="glass-card p-8 lg:col-span-2 flex flex-col justify-center relative overflow-hidden">
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
            <div className="glass-card p-6 flex-1 flex flex-col justify-center">
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
            
            <div className="glass-card p-6 flex-1 flex flex-col justify-center">
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

        <div className="flex justify-center mt-12">
          <HoverBorderGradient
            as="a"
            href="#"
            className="bg-black text-white px-8 py-3 flex items-center gap-2"
          >
            <span>Salurkan Infaq Anda (WhatsApp)</span>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}
