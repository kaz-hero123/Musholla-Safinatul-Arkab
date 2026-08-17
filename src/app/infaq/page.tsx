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
        <div className="max-w-4xl mx-auto border-b border-border pb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Laporan <span className="text-emerald-primary italic">Amanah.</span>
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
