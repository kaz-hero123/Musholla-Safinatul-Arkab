import InfaqDashboard from "@/components/sections/InfaqDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Infaq & Transparansi - Musholla Safinatul Arkab",
  description: "Laporan transparansi keuangan, infaq, dan sedekah bulanan Musholla Safinatul Arkab secara detail.",
};

export default function InfaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-bg-primary text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border bg-bg-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-primary animate-pulse"></span>
            <span className="text-text-secondary text-sm font-bold tracking-wide uppercase">Real-time Report</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Amanah Umat, <br />
            <span className="text-emerald-primary">Transparansi Nyata.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Setiap rupiah yang diinfakkan oleh jamaah dicatat dan dikelola dengan penuh tanggung jawab. Berikut adalah laporan terbuka keuangan kami.
          </p>
        </div>
      </section>
      
      <InfaqDashboard />
    </>
  );
}
