import Hero from "@/components/sections/Hero";
import NextPrayerChip from "@/components/ui/next-prayer-chip";
import PrayerTimes from "@/components/sections/PrayerTimes";
import Features from "@/components/sections/Features";
import InfaqHighlight from "@/components/sections/InfaqHighlight";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-20 -mt-8 mb-8">
        <NextPrayerChip />
      </div>
      <PrayerTimes />
      <Features />
      <InfaqHighlight />
    </>
  );
}
