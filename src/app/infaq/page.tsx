import InfaqReport from "@/components/sections/InfaqReport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Infaq - Musholla Safinatul Arkab",
  description: "Laporan transparansi keuangan, infaq, dan sedekah Musholla Safinatul Arkab.",
};

export default function InfaqPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-bg-primary border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Amanah Umat, <span className="text-emerald-primary">Transparansi Nyata</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Setiap rupiah yang diinfakkan oleh jamaah kami catat dan kelola dengan penuh tanggung jawab. Laporan ini kami publikasikan sebagai wujud akuntabilitas DKM kepada masyarakat.
          </p>
        </div>
      </section>
      
      <InfaqReport />
    </>
  );
}
