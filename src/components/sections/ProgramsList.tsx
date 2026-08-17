import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";

export function ProgramsList() {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-border pb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Agenda & Kegiatan
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Rangkaian program rutin yang terbuka untuk jamaah umum. Mari bergabung dan makmurkan musholla bersama-sama.
          </p>
        </div>

        <div className="flex flex-col gap-0 border-t border-border border-b">
          {PROGRAMS_DATA.map((program) => {
            const IconComponent = icons[program.icon];
            return (
              <div key={program.id} className="group py-10 border-b border-border flex flex-col md:flex-row gap-8 items-start md:items-center justify-between transition-colors hover:bg-bg-primary/50 last:border-0">
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
      </div>
    </section>
  );
}
