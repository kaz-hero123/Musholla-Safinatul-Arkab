export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  description: string;
  className?: string; // Layout hints if needed
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop",
    title: "Kajian Rutin Mingguan",
    description: "Jamaah antusias mengikuti kajian tematik setiap malam Jumat.",
    className: "md:col-span-2 md:row-span-2"
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
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    title: "Kegiatan Sosial Berbagi",
    description: "Distribusi sembako kepada warga sekitar yang membutuhkan.",
    className: "md:col-span-1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=1200&auto=format&fit=crop",
    title: "Gotong Royong Bersih Musholla",
    description: "Remaja musholla bergotong royong membersihkan area wudhu.",
    className: "md:col-span-2"
  }
];
