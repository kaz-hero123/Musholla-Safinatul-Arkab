import React from "react";
import { PROGRAMS_DATA, icons } from "@/data/programs";

export function ProgramsList() {
  return (
    <section className="py-24 px-4 md:px-6 bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 border-b border-border/30 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-reveal">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4 tracking-tight">
              Agenda <span className="text-emerald-primary italic">& Kegiatan.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Rangkaian program rutin yang terbuka untuk jamaah umum. Mari bergabung dan makmurkan musholla bersama-sama.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {PROGRAMS_DATA.map((program, i) => {
            const IconComponent = icons[program.icon];
            const isLarge = i === 0 || i === 3;
            const spanClass = isLarge ? "md:col-span-8" : "md:col-span-4";
            const bgClass = isLarge ? "bg-bg-primary" : "bg-emerald-primary/5 border border-emerald-primary/10";
            
            return (
              <div 
                key={program.id} 
                className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-border/50 animate-reveal hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-md ${spanClass} ${bgClass}`}
                style={{animationDelay: `${0.1 * i}s`}}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 ${isLarge ? 'bg-bg-secondary text-emerald-primary' : 'bg-emerald-primary text-white shadow-md'}`}>
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <span className={`text-xs font-medium tracking-widest uppercase py-1.5 px-4 rounded-full border ${isLarge ? 'border-emerald-primary/30 text-emerald-primary bg-emerald-primary/10' : 'border-emerald-primary text-emerald-primary bg-white/80 backdrop-blur'}`}>
                    {program.schedule}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4 group-hover:text-emerald-primary transition-colors">{program.title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">{program.description}</p>
                </div>
                
                {/* Decorative glow effect */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-primary/10 rounded-full blur-3xl group-hover:bg-emerald-primary/20 transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
