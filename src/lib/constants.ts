import { SiteData } from "@/types";

export const SITE_DATA: SiteData = {
  programs: [
    {
      id: "kajian",
      title: "Kajian Tafsir & Fiqih",
      description: "Pembahasan mendalam Kitab Tafsir Al-Jalalain dan Safinatun Najah bersama Ustadz H. Abdul Wahid. Terbuka untuk umum.",
      schedule: "Setiap Malam Jumat, Ba'da Maghrib",
      icon: "BookOpen", 
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "tpa",
      title: "TPA & Tahfiz Anak",
      description: "Membina lebih dari 80 santri usia dini dengan metode Iqra' dan program hafalan Juz 30. Dibimbing oleh 4 pengajar tersertifikasi.",
      schedule: "Senin - Jumat, 15:30 WIB",
      icon: "Users",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "phbi",
      title: "Peringatan Hari Besar",
      description: "Penyelenggaraan Tabligh Akbar, Lomba Santri, dan santunan yatim piatu pada momen Muharram, Maulid, dan Ramadhan.",
      schedule: "Menyesuaikan Kalender Hijriah",
      icon: "Calendar",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "sosial",
      title: "Jumat Berkah & Sosial",
      description: "Pembagian 100+ porsi makanan gratis setiap bakda Jumat, serta distribusi sembako bulanan untuk warga pra-sejahtera di Sidoarjo.",
      schedule: "Setiap Jumat & Akhir Bulan",
      icon: "Heart",
      color: "from-orange-500/20 to-red-500/20"
    }
  ],
  infaq: {
    lastUpdated: "Agustus 2026",
    currentBalance: 15450000,
    incomeThisMonth: 5200000,
    expenseThisMonth: 1750000,
    goal: 50000000, 
    goalTitle: "Renovasi Area Wudhu",
    history: [
      { month: "Mei 2026", income: 4500000, expense: 1200000 },
      { month: "Juni 2026", income: 4800000, expense: 2100000 },
      { month: "Juli 2026", income: 5100000, expense: 1500000 },
      { month: "Agustus 2026", income: 5200000, expense: 1750000 }
    ]
  },
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=800&auto=format&fit=crop",
      title: "Kajian Rutin Mingguan",
      description: "Jamaah antusias mengikuti kajian tematik setiap malam Jumat.",
      className: "md:col-span-2"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1606105961732-6332674f4ee6?q=80&w=800&auto=format&fit=crop",
      title: "Pendidikan TPA",
      description: "Anak-anak belajar membaca Al-Quran dengan metode Iqra.",
      className: "md:col-span-1"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1593113589914-07528e356c32?q=80&w=800&auto=format&fit=crop",
      title: "Kegiatan Sosial Berbagi",
      description: "Distribusi sembako kepada warga sekitar yang membutuhkan.",
      className: "md:col-span-1"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800&auto=format&fit=crop",
      title: "Gotong Royong Bersih Musholla",
      description: "Remaja musholla bergotong royong membersihkan area wudhu.",
      className: "md:col-span-2"
    }
  ]
};
