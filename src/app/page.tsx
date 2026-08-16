import Hero from "@/components/sections/Hero";
import NextPrayerChip from "@/components/ui/next-prayer-chip";
import HomeTeasers from "@/components/sections/HomeTeasers";
import PrayerTimes from "@/components/sections/PrayerTimes";
import InfaqReport from "@/components/sections/InfaqReport";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-20">
        <NextPrayerChip />
      </div>
      <HomeTeasers />
      <PrayerTimes />
      <InfaqReport />
    </>
  );
}
