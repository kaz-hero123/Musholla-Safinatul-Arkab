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
      url: 'data:image/svg+xml;utf8,<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23F5F2E8"/><path d="M0,0 L800,800 M800,0 L0,800" stroke="%2310B981" stroke-width="40" opacity="0.3"/><circle cx="400" cy="400" r="200" fill="none" stroke="%2310B981" stroke-width="20"/><rect x="250" y="250" width="300" height="300" fill="none" stroke="%2310B981" stroke-width="10" opacity="0.7" transform="rotate(45 400 400)"/></svg>',
      title: "Kajian Rutin Mingguan",
      description: "Jamaah antusias mengikuti kajian tematik setiap malam Jumat.",
      className: "md:col-span-2"
    },
    {
      id: 2,
      url: 'data:image/svg+xml;utf8,<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23F5F2E8"/><g stroke="%2310B981" stroke-width="15" fill="none"><circle cx="200" cy="200" r="100"/><circle cx="600" cy="200" r="100"/><circle cx="200" cy="600" r="100"/><circle cx="600" cy="600" r="100"/><circle cx="400" cy="400" r="150" opacity="0.5"/></g></svg>',
      title: "Pendidikan TPA",
      description: "Anak-anak belajar membaca Al-Quran dengan metode Iqra.",
      className: "md:col-span-1"
    },
    {
      id: 3,
      url: 'data:image/svg+xml;utf8,<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23F5F2E8"/><path d="M 0 400 Q 200 200 400 400 T 800 400 M 0 200 Q 200 0 400 200 T 800 200 M 0 600 Q 200 400 400 600 T 800 600" fill="none" stroke="%2310B981" stroke-width="15" opacity="0.6"/></svg>',
      title: "Kegiatan Sosial Berbagi",
      description: "Distribusi sembako kepada warga sekitar yang membutuhkan.",
      className: "md:col-span-1"
    },
    {
      id: 4,
      url: 'data:image/svg+xml;utf8,<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23F5F2E8"/><path d="M 400 0 L 800 400 L 400 800 L 0 400 Z" fill="none" stroke="%2310B981" stroke-width="25"/><path d="M 400 100 L 700 400 L 400 700 L 100 400 Z" fill="none" stroke="%2310B981" stroke-width="10" opacity="0.5"/><circle cx="400" cy="400" r="100" fill="none" stroke="%2310B981" stroke-width="10"/></svg>',
      title: "Gotong Royong Bersih Musholla",
      description: "Remaja musholla bergotong royong membersihkan area wudhu.",
      className: "md:col-span-2"
    }
  ]
};
