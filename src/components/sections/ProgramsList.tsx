import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";
import { FadeIn } from "@/components/ui/fade-in";

export function ProgramsList() {
  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16 pb-8 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-4">
              Agenda & Kegiatan.
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Rangkaian program rutin yang terbuka untuk jamaah umum. Mari bergabung dan makmurkan musholla bersama-sama.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col border-t border-border">
          {PROGRAMS_DATA.map((program, i) => {
            const IconComponent = icons[program.icon];
            
            return (
              <FadeIn 
                key={program.id} 
                delay={0.05 * i}
                className="group py-12 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:bg-bg-secondary/50"
              >
                <div className="flex items-start md:items-center gap-8 md:w-2/3">
                  <div className="text-emerald-primary hidden sm:block shrink-0">
                    <IconComponent size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2 group-hover:text-emerald-primary transition-colors">{program.title}</h3>
                    <p className="text-text-secondary text-lg leading-relaxed">{program.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/3 md:text-right">
                  <span className="text-sm font-medium tracking-widest uppercase text-text-primary border-b border-emerald-primary pb-1">
                    {program.schedule}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
