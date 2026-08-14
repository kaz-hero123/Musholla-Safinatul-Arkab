import Hero from "@/components/sections/Hero";
import NextPrayerChip from "@/components/ui/next-prayer-chip";
import HomeTeasers from "@/components/sections/HomeTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-20">
        <NextPrayerChip />
      </div>
      <HomeTeasers />
    </>
  );
}
