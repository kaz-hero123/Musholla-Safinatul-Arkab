import Contact from "@/components/sections/Contact";
import PrayerTimes from "@/components/sections/PrayerTimes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Jadwal Shalat | Musholla Safinatul Arkab",
  description: "Hubungi kami, lihat lokasi musholla, dan pantau jadwal shalat hari ini.",
};

export default function KontakPage() {
  return (
    <div className="pt-24 pb-12 flex flex-col gap-12">
      <PrayerTimes />
      <Contact />
    </div>
  );
}
