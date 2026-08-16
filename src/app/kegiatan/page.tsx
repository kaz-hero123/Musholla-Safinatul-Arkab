import { ProgramsList } from "@/components/sections/ProgramsList";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda & Kegiatan - Musholla Safinatul Arkab",
  description: "Jadwal kajian, TPA, dan galeri dokumentasi kegiatan Musholla Safinatul Arkab Sidoarjo.",
};

export default function KegiatanPage() {
  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-bg-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Membangun <span className="text-emerald-primary">Generasi</span> <br className="hidden md:block"/> Lewat Aksi Nyata
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Dari kelas mengaji anak-anak hingga kajian kitab orang dewasa. Inilah bukti komitmen kami dalam menghidupkan syiar Islam.
          </p>
        </div>
      </section>

      <ProgramsList />
      <GalleryGrid />
    </>
  );
}
