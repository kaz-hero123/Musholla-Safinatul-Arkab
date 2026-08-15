"use client";
import React, { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from "@/lib/prayer-api";
import { BellRing, MapPin } from "lucide-react";
import Link from "next/link";

export default function NextPrayerChip() {
  const [times, setTimes] = useState<PrayerTimesType | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getPrayerTimes().then(data => setTimes(data));
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

  return (
    <Link href="/jadwal-shalat" className="block max-w-xl mx-auto -mt-8 relative z-20 group">
      <div className="bg-bg-primary border border-border rounded-full px-6 py-4 flex items-center justify-between shadow-sm hover:border-emerald-primary hover:shadow-md transition-all">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary hidden sm:inline">DKI Jakarta</span>
        </div>
        
        {nextPrayer ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BellRing size={16} className="text-emerald-primary" />
              <span className="text-sm text-emerald-primary font-medium">{nextPrayer.name}</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-sm font-bold text-text-primary tabular-nums">
              {formatCountdown(nextPrayer.diffMs)}
            </span>
          </div>
        ) : (
          <div className="text-sm text-text-secondary">Memuat jadwal...</div>
        )}
        
        <span className="text-emerald-primary group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
