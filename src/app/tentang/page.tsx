import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Organisasi - Musholla Safinatul Arkab",
  description: "Kenali lebih dekat visi, misi, sejarah, dan pengurus Musholla Safinatul Arkab.",
};

export default function TentangPage() {
  return (
    <>
      {/* Intro Narrative Section - Fills the missing Context gap */}
      <section className="pt-32 pb-16 px-6 bg-bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Pusat Pembinaan Umat, <span className="text-emerald-primary">Bukan Sekadar Tempat Ibadah</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Sejak didirikan, Musholla Safinatul Arkab hadir sebagai sentral kegiatan keagamaan, sosial, dan pendidikan bagi masyarakat Pepelegi, Sidoarjo. Kami percaya bahwa kemakmuran masjid diukur dari seberapa besar manfaatnya bagi lingkungan sekitar.
          </p>
        </div>
      </section>

      {/* The existing About component containing Visi, Misi, Sejarah, Pengurus */}
      <About />

      {/* Missing Information Placeholder: Facilities */}
      <section className="py-24 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 border-b border-border pb-6">
            <h2 className="text-3xl font-display font-bold text-text-primary tracking-tight">Fasilitas & Layanan</h2>
            <p className="text-text-secondary mt-2">Mendukung kenyamanan ibadah dan kelancaran program jamaah.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-primary p-8 rounded-3xl border border-border">
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Area Ibadah Utama</h3>
              <p className="text-text-secondary text-sm">Dilengkapi AC dan karpet tebal untuk kenyamanan shalat berjamaah 5 waktu.</p>
            </div>
            <div className="bg-bg-primary p-8 rounded-3xl border border-border">
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Ruang Kelas TPA</h3>
              <p className="text-text-secondary text-sm">Fasilitas belajar khusus untuk santri TPQ Safinatul Arkab.</p>
            </div>
            <div className="bg-bg-primary p-8 rounded-3xl border border-border">
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">Kajian Audio Visual</h3>
              <p className="text-text-secondary text-sm">Sistem suara yang merata dan dukungan visual untuk kajian tematik mingguan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
