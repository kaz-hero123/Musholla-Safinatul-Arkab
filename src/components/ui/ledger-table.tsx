import React from "react";
import { InfaqHistory } from "@/data";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface LedgerTableProps {
  history: InfaqHistory[];
}

export function LedgerTable({ history }: LedgerTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-bg-secondary border-b border-border text-text-secondary">
            <tr>
              <th className="px-6 py-4 font-medium">Bulan</th>
              <th className="px-6 py-4 font-medium">Keterangan</th>
              <th className="px-6 py-4 font-medium text-right">Pemasukan</th>
              <th className="px-6 py-4 font-medium text-right">Pengeluaran</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {history.map((item, i) => (
              <tr key={i} className="hover:bg-bg-secondary/50 transition-colors">
                <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">
                  {item.month}
                </td>
                <td className="px-6 py-4 text-text-secondary min-w-[200px]">
                  {item.description || "-"}
                </td>
                <td className="px-6 py-4 text-right font-medium whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <ArrowDownRight className="text-emerald-primary w-4 h-4 hidden sm:block" />
                    <span className="text-emerald-primary">
                      Rp {Intl.NumberFormat("id-ID").format(item.income)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-medium whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <ArrowUpRight className="text-text-muted w-4 h-4 hidden sm:block" />
                    <span className="text-text-primary">
                      Rp {Intl.NumberFormat("id-ID").format(item.expense)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
