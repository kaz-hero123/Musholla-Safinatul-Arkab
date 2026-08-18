import { BookOpen, Users, Calendar, Heart } from "lucide-react";

export interface Program {
  id: string;
  title: string;
  description: string;
  schedule: string;
  icon: keyof typeof icons;
}

// Map string keys to Lucide icons for easier rendering without storing React nodes in data
export const icons = {
  BookOpen,
  Users,
  Calendar,
  Heart,
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: "kajian",
    title: "Kajian Tafsir & Fiqih",
    description: "Pembahasan mendalam Kitab Tafsir Al-Jalalain dan Safinatun Najah bersama Ustadz H. Abdul Wahid. Terbuka untuk umum.",
    schedule: "Setiap Malam Jumat, Ba'da Maghrib",
    icon: "BookOpen",
  },
  {
    id: "tpa",
    title: "TPA & Tahfiz Anak",
    description: "Membina lebih dari 80 santri usia dini dengan metode Iqra' dan program hafalan Juz 30. Dibimbing oleh 4 pengajar tersertifikasi.",
    schedule: "Senin - Jumat, 15:30 WIB",
    icon: "Users",
  },
  {
    id: "phbi",
    title: "Peringatan Hari Besar",
    description: "Penyelenggaraan Tabligh Akbar, Lomba Santri, dan santunan yatim piatu pada momen Muharram, Maulid, dan Ramadhan.",
    schedule: "Menyesuaikan Kalender Hijriah",
    icon: "Calendar",
  },
  {
    id: "sosial",
    title: "Jumat Berkah & Sosial",
    description: "Pembagian 100+ porsi makanan gratis setiap bakda Jumat, serta distribusi sembako bulanan untuk warga pra-sejahtera di Sidoarjo.",
    schedule: "Setiap Jumat & Akhir Bulan",
    icon: "Heart",
  }
];
