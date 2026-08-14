import Gallery from "@/components/sections/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Kegiatan | Musholla Safinatul Arkab",
  description: "Dokumentasi kegiatan dan momen berharga jamaah Musholla Safinatul Arkab.",
};

export default function GaleriPage() {
  return (
    <div className="pt-24 pb-12">
      <Gallery />
    </div>
  );
}
