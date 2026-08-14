import Programs from "@/components/sections/Programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Kegiatan | Musholla Safinatul Arkab",
  description: "Daftar program unggulan dan kegiatan rutin Musholla Safinatul Arkab.",
};

export default function ProgramPage() {
  return (
    <div className="pt-24 pb-12">
      <Programs />
    </div>
  );
}
