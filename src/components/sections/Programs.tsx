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
    <section id="programs" className="py-24 px-6 bg-bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">
            Program <span className="text-emerald-primary">Unggulan</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Berbagai kegiatan rutin dan insidental yang diselenggarakan untuk memakmurkan musholla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.programs.map((program) => (
            <div key={program.id} className="bg-bg-primary relative group w-full h-auto rounded-2xl p-8 border border-white/10 hover:border-emerald-primary/50 hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${program.color} mb-6`}>
                <div className="text-white opacity-90">{icons[program.icon]}</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-text-secondary text-sm mb-8 flex-1">
                {program.description}
              </p>
              <div className="bg-white/5 px-4 py-3 rounded-xl text-xs font-medium text-emerald-light border border-white/5 w-full text-center">
                {program.schedule}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
