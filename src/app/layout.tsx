import type { Metadata } from "next";
import { Inter, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-amiri" });

export const metadata: Metadata = {
  metadataBase: new URL("https://safinatul-arkab.vercel.app"),
  title: "Musholla Safinatul Arkab",
  description: "Membangun Generasi Muda Beriman, Satu Langkah Menuju Kebaikan.",
  openGraph: {
    title: "Musholla Safinatul Arkab",
    description: "Pusat pembinaan generasi muda Islam yang berakhlak mulia, mandiri, dan bermanfaat bagi masyarakat.",
    url: "https://safinatul-arkab.vercel.app",
    siteName: "Safinatul Arkab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Musholla Safinatul Arkab",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn(
        "min-h-screen bg-bg-primary text-text-primary font-sans antialiased flex flex-col overflow-x-hidden",
        inter.variable,
        playfair.variable,
        amiri.variable
      )}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
