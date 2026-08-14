export interface Program {
  id: string;
  title: string;
  description: string;
  schedule: string;
  icon: string;
  color: string;
}

export interface MonthlyInfaq {
  month: string;
  income: number;
  expense: number;
}

export interface InfaqReport {
  lastUpdated: string;
  currentBalance: number;
  incomeThisMonth: number;
  expenseThisMonth: number;
  goal: number;
  goalTitle: string;
  history: MonthlyInfaq[];
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  className: string;
}

export interface SiteData {
  programs: Program[];
  infaq: InfaqReport;
  gallery: GalleryImage[];
}
