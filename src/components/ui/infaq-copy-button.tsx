"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface InfaqCopyButtonProps {
  accountNumber: string;
  bankName: string;
}

export function InfaqCopyButton({ accountNumber, bankName }: InfaqCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-text-secondary font-medium">Atau transfer langsung ke rekening:</p>
      <button
        onClick={handleCopy}
        className="group relative w-full flex items-center justify-between p-4 rounded-xl border border-border/50 bg-bg-primary hover:border-emerald-primary/50 hover:shadow-sm transition-all text-left"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold text-emerald-primary uppercase tracking-wider">{bankName}</span>
          <span className="text-lg font-mono font-medium text-text-primary mt-1">{accountNumber}</span>
        </div>
        <div className={`p-2 rounded-lg transition-colors ${copied ? 'bg-emerald-primary/10 text-emerald-primary' : 'bg-bg-secondary text-text-secondary group-hover:bg-emerald-primary/5 group-hover:text-emerald-primary'}`}>
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ring-1 ring-inset ring-emerald-primary/20"></div>
      </button>
      {copied && (
        <p className="text-emerald-primary text-xs font-medium animate-in fade-in slide-in-from-top-1">
          Nomor rekening berhasil disalin!
        </p>
      )}
    </div>
  );
}
