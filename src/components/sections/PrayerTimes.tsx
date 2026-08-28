"use client";
import React, { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from "@/lib/prayer-api";
import { Clock, MapPin, BellRing, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

export default function PrayerTimes() {
  const [times, setTimes] = useState<PrayerTimesType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const loadData = async () => {
    const data = await getPrayerTimes("Sidoarjo");
    if (data) {
      setTimes(data);
      try {
        localStorage.setItem("prayerTimesCache", JSON.stringify(data));
      } catch (err) {
        console.error("Cache error:", err);
      }
    } else {
      try {
        const cached = localStorage.getItem("prayerTimesCache");
        if (cached) {
          setTimes(JSON.parse(cached));
        } else {
          setError("Gagal memuat jadwal shalat.");
        }
      } catch (err) {
        console.error("Cache read error:", err);
        setError("Gagal memuat jadwal shalat.");
      }
    }
    setLoading(false);
  };

  const fetchTimes = () => {
    setLoading(true);
    setError(null);
    loadData();
  };

  useEffect(() => {
    // eslint-disable-next-line
    loadData();
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
            <div className="flex items-center gap-2 text-text-secondary mb-2 text-sm font-medium">
              <MapPin size={16} />
              <span>Sidoarjo & Sekitarnya</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">Jadwal Waktu Shalat</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-transparent border border-border px-6 py-4 flex items-center gap-4 flex-1 md:flex-none">
              <Clock className="text-text-secondary" />
              <div className="text-sm">
                <p className="text-text-secondary">Waktu Saat Ini</p>
                <p className="font-bold text-text-primary tabular-nums tracking-wider text-lg">
                  {currentTime ? currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--"} WIB
                </p>
              </div>
            </div>
            
            {nextPrayer && (
              <div className="bg-bg-primary border-l-4 border-emerald-primary px-6 py-4 flex items-center gap-4 flex-1 md:flex-none shadow-sm">
                <BellRing className="text-emerald-primary" />
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
          <div className="h-40 flex items-center justify-center text-text-secondary border border-border bg-bg-primary">
            Memuat jadwal...
          </div>
        ) : error ? (
          <div className="h-32 flex flex-col items-center justify-center text-text-secondary gap-4">
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
            <Button variant="outline" size="sm" onClick={fetchTimes} className="gap-2">
              <RefreshCw size={16} /> Coba Lagi
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
            {prayerList.map((prayer, i) => {
              const isActive = nextPrayer?.name === prayer.name;
              return (
                <FadeIn
                  key={prayer.name}
                  delay={i * 0.05}
                  className={cn(
                    "flex flex-col items-center justify-center p-8 bg-bg-primary transition-colors duration-300",
                    isActive && "bg-text-primary text-bg-primary",
                    i === 4 && "col-span-2 md:col-span-1"
                  )}
                >
                  <span className={cn(
                    "font-medium mb-2 uppercase tracking-widest text-xs",
                    isActive ? "text-emerald-light" : "text-text-secondary"
                  )}>
                    {prayer.name}
                  </span>
                  <span className={cn(
                    "text-4xl md:text-5xl font-bold font-display tabular-nums tracking-tight",
                    isActive ? "text-white" : "text-text-primary"
                  )}>
                    {prayer.time}
                  </span>
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* Friday Roster */}
        <FadeIn delay={0.3} className="mt-8 bg-bg-primary p-6 border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-primary/10 flex items-center justify-center shrink-0 mt-1">
               <BellRing size={20} className="text-emerald-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1">Jadwal Jumat</h3>
              <p className="text-text-secondary text-sm">Petugas shalat Jumat pekan ini.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 px-6 py-4 border-l border-border md:border-none">
            <div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-widest mb-1">Khatib</p>
              <p className="font-medium text-text-primary text-lg">Ust. H. Abdullah Faqih</p>
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-widest mb-1">Imam</p>
              <p className="font-medium text-text-primary text-lg">Ust. Abdurrahman</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
