import { SiteData } from "@/types";

export const SITE_DATA: SiteData = {
  programs: [
    {
      id: "kajian",
      title: "Kajian Rutin",
      description: "Pengajian kitab kuning dan tematik untuk memperdalam ilmu agama Islam.",
      schedule: "Setiap Malam Jumat, Ba'da Isya",
      icon: "BookOpen", 
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: "tpa",
      title: "TPA & Tahfiz",
      description: "Pendidikan Al-Quran bagi anak-anak dan remaja untuk mencetak generasi Qurani.",
      schedule: "Senin - Jumat, 16:00 WIB",
      icon: "Users",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "phbi",
      title: "Peringatan Hari Besar Islam",
      description: "Acara perayaan hari raya dan momen penting Islam seperti Maulid dan Isra Mi'raj.",
      schedule: "Insidental",
      icon: "Calendar",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "sosial",
      title: "Kegiatan Sosial",
      description: "Gotong royong, santunan anak yatim, dan pembagian sembako untuk masyarakat.",
      schedule: "Setiap Jumat Berkah",
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
