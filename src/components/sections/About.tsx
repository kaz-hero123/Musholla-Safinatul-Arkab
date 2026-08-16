import React from "react";
import { History, Target, Users, Shield } from "lucide-react";

export default function About() {
  const items = [
    {
      title: "Visi Kami",
      description: "Menjadi pusat ibadah dan pembinaan umat yang inklusif, mencetak generasi muda Islam yang berakhlak mulia, berwawasan luas, serta mampu memberikan kontribusi positif bagi kemajuan masyarakat di era modern.",
      icon: <Target className="h-8 w-8 text-emerald-primary" />,
    },
    {
      title: "Sejarah Singkat",
      description: "Didirikan pada tahun 1998 atas inisiatif tokoh masyarakat Pepelegi. Berawal dari langgar kayu sederhana, musholla ini terus berkembang berkat gotong royong warga, hingga kini memiliki fasilitas modern untuk ibadah dan pendidikan.",
      icon: <History className="h-6 w-6 text-emerald-primary" />,
    },
    {
      title: "Kepengurusan",
      description: "Sinergi yang harmonis antara Dewan Kemakmuran Masjid (DKM) yang diketuai oleh H. Ahmad Rifa'i, dan semangat muda dari Remaja Musholla (Remus) di bawah koordinasi Sdr. Muhammad Fadhil, memastikan program berjalan progresif.",
      icon: <Users className="h-6 w-6 text-emerald-primary" />,
    },
    {
      title: "Misi Utama",
      description: "1. Menyelenggarakan ibadah jamaah dan kajian keislaman yang rutin.\n2. Mengelola TPQ untuk memberantas buta huruf Al-Quran sejak dini.\n3. Menggerakkan program sosial-ekonomi berbasis infaq untuk kesejahteraan warga sekitar.",
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
