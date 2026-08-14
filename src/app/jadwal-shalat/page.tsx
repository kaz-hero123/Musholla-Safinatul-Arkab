import PrayerTimes from "@/components/sections/PrayerTimes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jadwal Shalat | Musholla Safinatul Arkab",
  description: "Jadwal shalat hari ini untuk wilayah DKI Jakarta dan sekitarnya.",
};

export default function JadwalShalatPage() {
  return (
    <div className="pt-24 pb-12">
      <PrayerTimes />
    </div>
  );
}
