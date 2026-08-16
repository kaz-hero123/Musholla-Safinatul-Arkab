import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Features() {
  const topPrograms = PROGRAMS_DATA.slice(0, 3); // Just show top 3 on home

  return (
    <section className="py-24 md:py-32 px-6 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Menghidupkan Syiar Islam"
          subtitle="Beragam program dan aktivitas dirancang untuk memenuhi kebutuhan spiritual dan sosial masyarakat."
          badge="Program Unggulan"
          BadgeIcon={Sparkles}
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPrograms.map((program) => {
            const IconComponent = icons[program.icon];
            return (
              <Card key={program.id} className="card-premium h-full flex flex-col group">
                <CardHeader className="pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-primary/10 flex items-center justify-center text-emerald-primary mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="mb-2 text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <div className="mt-auto px-8 pb-8">
                  <p className="text-sm font-medium text-emerald-primary bg-emerald-primary/5 inline-flex px-3 py-1 rounded-full">
                    {program.schedule}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/kegiatan" className="gap-2">
              Lihat Semua Program <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
