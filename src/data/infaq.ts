export interface InfaqHistory {
  month: string;
  income: number;
  expense: number;
  description?: string;
}

export interface InfaqData {
  lastUpdated: string;
  currentBalance: number;
  incomeThisMonth: number;
  expenseThisMonth: number;
  goal: number;
  goalTitle: string;
  history: InfaqHistory[];
  recentDistributionNotes: { title: string; impact: string }[];
  bankName?: string;
  accountNumber?: string;
}

export const INFAQ_DATA: InfaqData = {
  lastUpdated: "Agustus 2026",
  currentBalance: 15450000,
  incomeThisMonth: 5200000,
  expenseThisMonth: 1750000,
  goal: 50000000,
  goalTitle: "Renovasi Area Wudhu",
  history: [
    { month: "Mei 2026", income: 4500000, expense: 1200000, description: "Operasional rutin & kajian" },
    { month: "Juni 2026", income: 4800000, expense: 2100000, description: "Pembelian karpet baru shaf depan" },
    { month: "Juli 2026", income: 5100000, expense: 1500000, description: "Operasional & santunan anak yatim" },
    { month: "Agustus 2026", income: 5200000, expense: 1750000, description: "Servis AC dan Jumat Berkah" }
  ],
  recentDistributionNotes: [
    {
      title: "Servis Fasilitas AC",
      impact: "Memastikan 150+ jamaah shalat dengan sejuk & khusyuk."
    },
    {
      title: "Santunan Lansia",
      impact: "Membantu biaya pengobatan dan sembako untuk 5 warga lansia dhuafa."
    },
    {
      title: "Jumat Berkah",
      impact: "120 porsi makan siang gratis dibagikan untuk jamaah & musafir."
    }
  ],
  bankName: "", // Isi dengan nama bank (contoh: BSI)
  accountNumber: "" // Isi dengan nomor rekening
};
