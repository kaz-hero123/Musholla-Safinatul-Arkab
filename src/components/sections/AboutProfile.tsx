/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ABOUT_DATA } from "@/data/about";
import { Card, CardContent } from "@/components/ui/card";
import { Target, History, Compass } from "lucide-react";

export function AboutProfile() {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Sejarah */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-primary/10 text-emerald-primary mb-6">
              <History size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Jejak Langkah</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {ABOUT_DATA.history}
            </p>
          </div>
          
          {/* Visi */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-primary/10 text-emerald-primary mb-6">
              <Compass size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-text-primary mb-6">Visi Kami</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {ABOUT_DATA.vision}
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-bg-primary rounded-[2.5rem] border border-border p-10 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
            <Target size={200} className="text-emerald-primary" />
          </div>
          <h2 className="text-3xl font-display font-bold text-text-primary mb-12">Misi Utama</h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {ABOUT_DATA.mission.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-primary text-white flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-text-secondary leading-relaxed pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kepengurusan */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4">Pengurus & Pembina</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sinergi DKM dan Remaja Musholla untuk memastikan setiap program berjalan dengan progresif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ABOUT_DATA.leaders.map((leader, i) => (
            <Card key={i} className="card-premium overflow-hidden border-0 bg-transparent">
              <div className="aspect-[4/5] w-full relative mb-6 rounded-3xl overflow-hidden bg-bg-secondary">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="px-2 text-center pb-2">
                <h3 className="font-display font-bold text-xl text-text-primary mb-1">{leader.name}</h3>
                <p className="text-emerald-primary font-medium">{leader.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
