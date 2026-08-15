import React from "react";
import { History, Target, Users, Shield } from "lucide-react";

export default function About() {
  const items = [
    {
      title: "Visi Kami",
      description: "Mewujudkan generasi muda Islam yang cinta masjid, berakhlak karimah, dan menjadi teladan di lingkungan masyarakat sekitar.",
      icon: <Target className="h-8 w-8 text-emerald-primary" />,
    },
    {
      title: "Sejarah Singkat",
      description: "Didirikan oleh para pemuda pemudi dengan semangat gotong royong dan tekad untuk memakmurkan musholla.",
      icon: <History className="h-6 w-6 text-emerald-primary" />,
    },
    {
      title: "Kepengurusan",
      description: "Dikelola sepenuhnya oleh Remaja Musholla (Remus) dengan bimbingan dan arahan DKM setempat.",
      icon: <Users className="h-6 w-6 text-emerald-primary" />,
    },
    {
      title: "Misi Utama",
      description: "1. Menyelenggarakan kegiatan keagamaan rutin.\n2. Membina TPA anak-anak.\n3. Melaksanakan program sosial kemasyarakatan.",
      icon: <Shield className="h-8 w-8 text-emerald-primary" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-border pb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4 tracking-tight">
            Tentang Kami
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            Lebih dari sekadar tempat ibadah. Kami adalah pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`bg-bg-secondary border border-border p-8 rounded-3xl flex flex-col justify-between ${
                i === 0 || i === 3 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-bg-primary border border-border flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
