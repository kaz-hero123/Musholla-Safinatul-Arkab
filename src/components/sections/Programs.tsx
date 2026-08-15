import React from "react";
import { SITE_DATA } from "@/lib/constants";
import { BookOpen, Users, Calendar, Heart } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={28} />,
  Users: <Users size={28} />,
  Calendar: <Calendar size={28} />,
  Heart: <Heart size={28} />
};

export default function Programs() {
  return (
    <section className="py-24 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-border pb-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
            Program Rutin & Unggulan
          </h2>
          <p className="text-text-secondary mt-2 text-lg">
            Berbagai kegiatan rutin dan insidental yang diselenggarakan untuk memakmurkan musholla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.programs.map((program) => (
            <div key={program.id} className="bg-bg-primary rounded-3xl p-8 border border-border hover:border-emerald-primary/50 transition-colors flex flex-col group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-bg-secondary border border-border text-emerald-primary mb-6 group-hover:bg-emerald-primary/10 transition-colors">
                {icons[program.icon]}
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed flex-1">
                {program.description}
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-text-secondary text-sm font-medium">
                  <Calendar size={14} className="text-emerald-primary" />
                  {program.schedule}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
