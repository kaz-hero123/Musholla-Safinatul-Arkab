import InfaqReport from "@/components/sections/InfaqReport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laporan Infaq | Musholla Safinatul Arkab",
  description: "Laporan keuangan, pemasukan, dan pengeluaran infaq jamaah secara transparan.",
};

export default function InfaqPage() {
  return (
    <div className="pt-24 pb-12">
      <InfaqReport />
    </div>
  );
}
