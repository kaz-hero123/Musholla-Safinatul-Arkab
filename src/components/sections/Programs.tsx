"use client";
import React from "react";
import { SITE_DATA } from "@/lib/constants";
import { BookOpen, Users, Calendar, Heart } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={32} />,
  Users: <Users size={32} />,
  Calendar: <Calendar size={32} />,
  Heart: <Heart size={32} />
};

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-4 border-emerald-primary pl-6 py-2">
          <h2 className="text-4xl font-display font-bold text-text-primary tracking-tight">
            Program Rutin & Unggulan
          </h2>
          <p className="text-text-secondary mt-2 text-lg">
            Berbagai kegiatan rutin dan insidental yang diselenggarakan untuk memakmurkan musholla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.programs.map((program) => (
            <div key={program.id} className="bg-bg-primary relative group w-full h-auto rounded-2xl p-8 border border-border hover:border-emerald-primary transition-all duration-300 flex flex-col">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-emerald-primary/10 mb-6`}>
                <div className="text-emerald-primary">{icons[program.icon]}</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6 flex-1">
                {program.description}
              </p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-border/50 text-text-secondary text-xs font-medium rounded-full">
                  <Calendar size={12} />
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
