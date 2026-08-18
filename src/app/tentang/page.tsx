import { AboutProfile } from "@/components/sections/AboutProfile";
import { Facilities } from "@/components/sections/Facilities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil & Sejarah - Musholla Safinatul Arkab",
  description: "Kenali lebih dekat sejarah berdirinya, visi, misi, dan para pengurus Musholla Safinatul Arkab Pepelegi.",
};

export default function TentangPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-bg-secondary text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
            Kisah Kami. <br className="hidden md:block"/>
            <span className="text-emerald-primary italic">Akar dari Pepelegi.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Sejak 1998, kami meyakini bahwa kemakmuran masjid diukur dari seberapa besar manfaatnya bagi masyarakat sekitar.
          </p>
        </div>
      </section>

      <AboutProfile />
      <Facilities />
    </>
  );
}
