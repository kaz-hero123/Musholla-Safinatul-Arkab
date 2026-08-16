import Programs from "@/components/sections/Programs";
import Gallery from "@/components/sections/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktivitas & Galeri - Musholla Safinatul Arkab",
  description: "Program rutin, kegiatan sosial, dan dokumentasi aktivitas jamaah Musholla Safinatul Arkab.",
};

export default function KegiatanPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Membangun <span className="text-emerald-primary">Generasi</span> Lewat Aksi Nyata
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Dari kelas mengaji anak-anak hingga kajian kitab orang dewasa. Inilah bukti komitmen kami dalam menghidupkan syiar Islam di Sidoarjo.
          </p>
        </div>
      </section>

      {/* Routine Programs Section (What we do) */}
      <Programs />

      {/* Gallery Section (Evidence of what we do) */}
      <Gallery />
    </>
  );
}
