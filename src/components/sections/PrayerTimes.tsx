"use client";
import React, { useEffect, useState } from "react";
import { getPrayerTimes, PrayerTimes as PrayerTimesType } from "@/lib/prayer-api";
import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PrayerTimes() {
  const [times, setTimes] = useState<PrayerTimesType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrayerTimes().then(data => {
      setTimes(data);
      setLoading(false);
    });
  }, []);

  const prayerList = times ? [
    { name: "Subuh", time: times.Fajr },
    { name: "Dzuhur", time: times.Dhuhr },
    { name: "Ashar", time: times.Asr },
    { name: "Maghrib", time: times.Maghrib },
    { name: "Isya", time: times.Isha },
  ] : [];

  return (
    <section className="py-16 px-6 bg-bg-secondary border-y border-white/5 relative overflow-hidden">
      <div className="absolute -left-40 top-0 w-96 h-96 bg-emerald-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Jadwal Shalat</h2>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin size={16} />
              <span>DKI Jakarta & Sekitarnya</span>
            </div>
          </div>
          
          <div className="glass-card px-6 py-3 flex items-center gap-3">
            <Clock className="text-emerald-light" />
            <div className="text-sm">
              <p className="text-text-secondary">Waktu Saat Ini</p>
              <p className="font-bold text-white tabular-nums tracking-wider">
                {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })} WIB
              </p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="h-32 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-primary/30 border-t-emerald-primary rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {prayerList.map((prayer, i) => (
              <motion.div
                key={prayer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center hover:border-emerald-primary/50 transition-colors group"
              >
                <span className="text-text-secondary font-medium mb-1 group-hover:text-white transition-colors">{prayer.name}</span>
                <span className="text-2xl font-bold font-display text-emerald-light tabular-nums">{prayer.time}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
