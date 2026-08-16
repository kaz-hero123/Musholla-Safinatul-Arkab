"use client";
import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { ArrowRight, Wallet, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export default function InfaqHighlight() {
  const { currentBalance, expenseThisMonth, lastUpdated } = INFAQ_DATA;

  return (
    <section className="py-24 md:py-32 px-6 bg-bg-primary relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeader 
              title="Transparansi Tanpa Kompromi"
              subtitle="Kami percaya bahwa kepercayaan umat adalah amanah terbesar. Seluruh aliran dana infaq dilaporkan secara terbuka setiap bulan."
              badge="Laporan Keuangan"
              BadgeIcon={Wallet}
              className="mb-8"
            />
            
            <div className="bg-emerald-primary/5 border border-emerald-primary/20 rounded-3xl p-8 mb-8">
              <p className="text-text-secondary font-medium mb-2">Total Penyaluran Bulan Ini</p>
              <div className="flex items-baseline gap-2 text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-2xl text-emerald-primary font-sans font-semibold">Rp</span>
                {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
              </div>
              <p className="text-sm text-text-muted mt-4">
                * Update terakhir: {lastUpdated}
              </p>
            </div>

            <Button asChild size="lg">
              <Link href="/infaq" className="gap-2">
                Lihat Laporan Lengkap <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right visual: abstract ledger UI */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-primary/10 to-transparent rounded-[3rem] -rotate-3 scale-105" />
            <div className="bg-white border border-border rounded-3xl shadow-xl p-8 relative z-10">
               <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
                 <h4 className="font-display font-bold text-lg">Saldo Kas Saat Ini</h4>
                 <div className="text-2xl font-bold text-emerald-primary font-display">
                    Rp {Intl.NumberFormat("id-ID").format(currentBalance / 1000000)}<span className="text-sm">JT</span>
                 </div>
               </div>
               
               <div className="space-y-4">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex items-center justify-between py-3">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-muted">
                          <ArrowUpRight size={18} />
                        </div>
                        <div>
                          <div className="h-4 w-32 bg-bg-secondary rounded-full mb-2" />
                          <div className="h-3 w-20 bg-bg-secondary/50 rounded-full" />
                        </div>
                     </div>
                     <div className="h-4 w-24 bg-bg-secondary rounded-full" />
                   </div>
                 ))}
               </div>

               <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Laporan Aktif</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
