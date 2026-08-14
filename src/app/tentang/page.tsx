import About from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Musholla Safinatul Arkab",
  description: "Sejarah, Visi Misi, dan Kepengurusan Musholla Safinatul Arkab.",
};

export default function TentangPage() {
  return (
    <div className="pt-24 pb-12">
      <About />
    </div>
  );
}
