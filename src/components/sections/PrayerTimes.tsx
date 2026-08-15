"use client";
import React, { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from "@/lib/prayer-api";
import { Clock, MapPin, BellRing } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrayerTimes() {
  const [times, setTimes] = useState<PrayerTimesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getPrayerTimes().then(data => {
      setTimes(data);
      setLoading(false);
    });
  }, []);

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
    <section className="py-24 px-6 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between border-b border-border pb-6 mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 text-text-secondary mb-2 uppercase text-sm tracking-wider font-semibold">
              <MapPin size={16} />
              <span>Sidoarjo & Sekitarnya</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary">Jadwal Waktu Shalat</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-bg-primary border border-border rounded-xl px-6 py-4 flex items-center gap-4 flex-1 md:flex-none">
              <Clock className="text-text-secondary" />
              <div className="text-sm">
                <p className="text-text-secondary">Waktu Saat Ini</p>
                <p className="font-bold text-text-primary tabular-nums tracking-wider text-lg">
                  {currentTime ? currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--"} WIB
                </p>
              </div>
            </div>
            
            {nextPrayer && (
              <div className="bg-emerald-primary/10 border border-emerald-primary/30 rounded-xl px-6 py-4 flex items-center gap-4 flex-1 md:flex-none">
                <BellRing className="text-emerald-primary animate-pulse" />
                <div className="text-sm">
                  <p className="text-emerald-primary font-medium">Menuju {nextPrayer.name}</p>
                  <p className="font-bold text-text-primary tabular-nums tracking-wider text-lg">
                    {formatCountdown(nextPrayer.diffMs)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="h-32 flex items-center justify-center text-text-secondary">
            Memuat jadwal...
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {prayerList.map((prayer) => {
              const isActive = nextPrayer?.name === prayer.name;
              return (
                <div
                  key={prayer.name}
                  className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "bg-emerald-primary border-emerald-deep shadow-md scale-[1.02]" 
                      : "bg-bg-primary border-border hover:border-emerald-primary/50"
                  )}
                >
                  <span className={cn(
                    "font-medium mb-2",
                    isActive ? "text-bg-primary/90" : "text-text-secondary"
                  )}>
                    {prayer.name}
                  </span>
                  <span className={cn(
                    "text-3xl md:text-4xl font-bold font-display tabular-nums",
                    isActive ? "text-bg-primary" : "text-text-primary"
                  )}>
                    {prayer.time}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
