import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";

export function ProgramsList() {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Agenda & Kegiatan
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Rangkaian program rutin yang terbuka untuk jamaah umum. Mari bergabung dan makmurkan musholla bersama-sama.
          </p>
        </div>

        <div className="space-y-6">
          {PROGRAMS_DATA.map((program) => {
            const IconComponent = icons[program.icon];
            return (
              <div key={program.id} className="bg-bg-primary rounded-3xl p-8 border border-border flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-emerald-primary/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-emerald-primary/5 flex items-center justify-center text-emerald-primary shrink-0 border border-emerald-primary/10">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{program.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">{program.description}</p>
                </div>
                <div className="shrink-0 bg-bg-secondary px-6 py-3 rounded-full border border-border">
                  <span className="text-emerald-primary font-medium">{program.schedule}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
