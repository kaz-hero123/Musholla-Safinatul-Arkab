"use client";
import React, { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from "@/lib/prayer-api";
import { Clock, MapPin, BellRing } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PrayerTimes() {
  const [times, setTimes] = useState<PrayerTimesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getPrayerTimes().then(data => {
      setTimes(data);
      setLoading(false);
    });
  }, []);

  // Derive nextPrayer directly during render
  let nextPrayer = null;
  if (times && currentTime) {
    const prayerList = [
      { name: "Subuh", time: times.Fajr },
      { name: "Dzuhur", time: times.Dhuhr },
      { name: "Ashar", time: times.Asr },
      { name: "Maghrib", time: times.Maghrib },
      { name: "Isya", time: times.Isha },
    ];

    let foundNext = false;
    for (const prayer of prayerList) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerDate = new Date(currentTime);
      prayerDate.setHours(hours, minutes, 0, 0);
      
      const diffMs = prayerDate.getTime() - currentTime.getTime();
      if (diffMs > 0) {
        nextPrayer = { name: prayer.name, time: prayer.time, diffMs };
        foundNext = true;
        break;
      }
    }

    if (!foundNext) {
      const [hours, minutes] = times.Fajr.split(':').map(Number);
      const subuhTomorrow = new Date(currentTime);
      subuhTomorrow.setDate(subuhTomorrow.getDate() + 1);
      subuhTomorrow.setHours(hours, minutes, 0, 0);
      nextPrayer = { name: "Subuh", time: times.Fajr, diffMs: subuhTomorrow.getTime() - currentTime.getTime() };
    }
  }

  const formatCountdown = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const prayerList = times ? [
    { name: "Subuh", time: times.Fajr },
    { name: "Dzuhur", time: times.Dhuhr },
    { name: "Ashar", time: times.Asr },
    { name: "Maghrib", time: times.Maghrib },
    { name: "Isya", time: times.Isha },
  ] : [];

  return (
    <section className="py-24 px-6 bg-bg-secondary border-y border-white/5 relative overflow-hidden">
      <div className="absolute -left-40 top-0 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Jadwal Shalat</h2>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin size={16} />
              <span>DKI Jakarta & Sekitarnya</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-bg-secondary border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 flex-1 md:flex-none">
              <Clock className="text-text-secondary" />
              <div className="text-sm">
                <p className="text-text-secondary">Waktu Saat Ini</p>
                <p className="font-bold text-white tabular-nums tracking-wider text-lg">
                  {currentTime ? currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--"} WIB
                </p>
              </div>
            </div>
            
            {nextPrayer && (
              <div className="glass-card border-emerald-primary/40 px-6 py-4 flex items-center gap-4 flex-1 md:flex-none">
                <BellRing className="text-emerald-light animate-pulse" />
                <div className="text-sm">
                  <p className="text-emerald-light font-medium">Menuju {nextPrayer.name}</p>
                  <p className="font-bold text-white tabular-nums tracking-wider text-lg">
                    {formatCountdown(nextPrayer.diffMs)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="h-32 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-primary/30 border-t-emerald-primary rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-5 gap-4 snap-x snap-mandatory hide-scrollbar">
            {prayerList.map((prayer, i) => {
              const isActive = nextPrayer?.name === prayer.name;
              return (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "min-w-[160px] md:min-w-0 snap-center flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "glass-card border-emerald-primary/50 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-105 md:scale-110 z-10" 
                      : "bg-bg-secondary border border-white/10 hover:border-white/20"
                  )}
                >
                  {isActive && <div className="absolute inset-0 bg-emerald-primary/10 animate-pulse" />}
                  <span className={cn(
                    "font-medium mb-2 relative z-10",
                    isActive ? "text-emerald-light" : "text-text-secondary group-hover:text-white transition-colors"
                  )}>
                    {prayer.name}
                  </span>
                  <span className={cn(
                    "text-3xl font-bold font-display tabular-nums relative z-10",
                    isActive ? "text-white" : "text-emerald-light/70"
                  )}>
                    {prayer.time}
                  </span>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
