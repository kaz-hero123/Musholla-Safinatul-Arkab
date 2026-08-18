import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Features() {
  const topPrograms = PROGRAMS_DATA.slice(0, 3); // Just show top 3 on home

  return (
    <section className="py-24 md:py-32 px-6 bg-bg-secondary relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Fokus Pendidikan & Sosial"
          subtitle="Musholla Safinatul Arkab bukan hanya tempat shalat, tetapi juga pusat keilmuan dan kepedulian sosial untuk seluruh lapisan warga."
          badge="Aktivitas Utama"
          BadgeIcon={BookOpen}
          alignment="left"
        />

        <div className="flex flex-col gap-0 border-t border-border mt-16">
          {topPrograms.map((program) => {
            const IconComponent = icons[program.icon];
            return (
              <div key={program.id} className="group py-10 border-b border-border flex flex-col md:flex-row gap-8 items-start md:items-center justify-between transition-colors hover:bg-bg-primary/50">
                <div className="flex items-start md:items-center gap-8 md:w-2/3">
                  <div className="text-text-muted hidden sm:block shrink-0">
                    <IconComponent size={32} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-3">{program.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">{program.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/3 md:text-right">
                  <span className="text-sm font-medium text-text-primary tracking-widest uppercase inline-block border-b border-emerald-primary pb-1">
                    {program.schedule}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-start">
          <Button asChild variant="outline" size="lg" className="rounded-sm">
            <Link href="/kegiatan" className="gap-2">
              Jelajahi Semua Program <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
