import React from "react";
import { INFAQ_DATA } from "@/data/infaq";
import { ArrowRight, Book } from "lucide-react";
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
              title="Laporan Amanah Umat"
              subtitle="Kepercayaan adalah amanah terbesar. Kami mencatat dan melaporkan setiap rupiah yang dititipkan untuk kemakmuran musholla dan umat."
              badge="Transparansi"
              BadgeIcon={Book}
              className="mb-8"
            />
            
            <div className="border-l-2 border-emerald-primary pl-8 mb-10">
              <p className="text-text-secondary font-medium mb-2 uppercase tracking-widest text-sm">Penyaluran Bulan Ini</p>
              <div className="flex items-baseline gap-2 text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
                <span className="text-xl text-text-secondary font-sans font-normal">Rp</span>
                {Intl.NumberFormat("id-ID").format(expenseThisMonth)}
              </div>
              <p className="text-sm text-text-muted mt-2 italic">
                Pembaruan terakhir: {lastUpdated}
              </p>
            </div>

            <Button asChild size="lg" className="rounded-sm">
              <Link href="/infaq" className="gap-2">
                Buka Jurnal Keuangan <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right visual: Flat Ledger Preview */}
          <div className="bg-bg-secondary p-8 md:p-12 border border-border">
             <div className="flex justify-between items-end mb-10 border-b border-border pb-6">
               <div>
                 <p className="text-sm text-text-secondary tracking-widest uppercase mb-2">Saldo Kas Aktif</p>
                 <h4 className="font-display font-bold text-3xl">
                   <span className="text-lg text-text-secondary font-sans font-normal mr-1">Rp</span>
                   {Intl.NumberFormat("id-ID").format(currentBalance)}
                 </h4>
               </div>
             </div>
             
             <div className="space-y-0">
               {INFAQ_DATA.history.slice(0, 4).map((entry, i) => (
                 <div key={i} className="flex items-center justify-between py-4 border-b border-border/50 last:border-0">
                   <div>
                     <p className="text-sm font-bold text-text-primary">{entry.description}</p>
                     <p className="text-xs text-text-muted mt-1">{entry.date}</p>
                   </div>
                   <div className={`text-sm font-medium ${entry.type === 'in' ? 'text-text-primary' : 'text-text-secondary'}`}>
                     {entry.type === 'in' ? '+' : '-'} Rp {Intl.NumberFormat("id-ID").format(entry.amount)}
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
