"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import { History, Target, Users, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b-2 border-warm-text/10 pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-text mb-4">
            Tentang Kami
          </h2>
          <p className="text-warm-text/80 max-w-2xl text-lg">
            Lebih dari sekadar tempat ibadah. Kami adalah pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat.
          </p>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Visi Kami",
    description: "Mewujudkan generasi muda Islam yang cinta masjid, berakhlak karimah, dan menjadi teladan di lingkungan masyarakat sekitar.",
    icon: <Target className="h-8 w-8 text-emerald-primary" />,
  },
  {
    title: "Sejarah Singkat",
    description: "Didirikan oleh para pemuda pemudi dengan semangat gotong royong.",
    icon: <History className="h-6 w-6 text-emerald-primary" />,
  },
  {
    title: "Kepengurusan",
    description: "Dikelola sepenuhnya oleh Remaja Musholla (Remus) dengan bimbingan DKM.",
    icon: <Users className="h-6 w-6 text-emerald-primary" />,
  },
  {
    title: "Misi Utama",
    description: "1. Menyelenggarakan kegiatan keagamaan rutin.\n2. Membina TPA anak-anak.\n3. Melaksanakan program sosial kemasyarakatan.",
    icon: <Shield className="h-8 w-8 text-emerald-primary" />,
  },
];
