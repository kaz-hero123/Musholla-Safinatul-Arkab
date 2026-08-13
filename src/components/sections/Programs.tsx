"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { SITE_DATA } from "@/lib/constants";
import { BookOpen, Users, Calendar, Heart } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={48} />,
  Users: <Users size={48} />,
  Calendar: <Calendar size={48} />,
  Heart: <Heart size={48} />
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
            <CardContainer key={program.id} className="w-full">
              <CardBody className="bg-bg-primary relative group/card w-full h-auto rounded-xl p-6 border border-white/10 hover:border-emerald-primary/50 transition-colors">
                <CardItem translateZ={50} className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${program.color} mb-6`}>
                  <div className="text-white opacity-80">{icons[program.icon]}</div>
                </CardItem>
                <CardItem translateZ={60} className="text-xl font-bold text-text-primary mb-2">
                  {program.title}
                </CardItem>
                <CardItem as="p" translateZ={40} className="text-text-secondary text-sm mb-6 line-clamp-3">
                  {program.description}
                </CardItem>
                <CardItem translateZ={30} className="bg-white/5 px-4 py-2 rounded-lg text-xs font-medium text-emerald-light border border-white/5 w-full text-center">
                  {program.schedule}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
