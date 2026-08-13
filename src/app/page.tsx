import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import InfaqReport from "@/components/sections/InfaqReport";
import Gallery from "@/components/sections/Gallery";
import PrayerTimes from "@/components/sections/PrayerTimes";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <PrayerTimes />
        <Programs />
        <InfaqReport />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
