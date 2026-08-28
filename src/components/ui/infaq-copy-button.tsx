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
    <div className="flex flex-col gap-2 flex-1 w-full sm:w-auto">
      <p className="text-sm text-text-secondary font-medium tracking-widest uppercase">Atau transfer ke rekening:</p>
      <button
        onClick={handleCopy}
        className="group relative w-full flex items-center justify-between p-4 border border-border bg-bg-primary hover:border-text-primary transition-colors text-left"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{bankName}</span>
          <span className="text-lg font-mono font-medium text-text-primary mt-1">{accountNumber}</span>
        </div>
        <div className={`p-2 transition-colors ${copied ? 'text-emerald-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </div>
      </button>
      {copied && (
        <p className="text-emerald-primary text-xs font-medium animate-in fade-in slide-in-from-top-1">
          Nomor rekening berhasil disalin!
        </p>
      )}
    </div>
  );
}
