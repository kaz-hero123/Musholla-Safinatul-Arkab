"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
  content: React.ReactNode;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelected(null);
    }
  };

  return (
    <div className="w-full h-full p-4 md:p-0 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "h-64 md:h-80")}>
          <motion.div
            onClick={() => handleClick(card)}
            className="relative overflow-hidden cursor-pointer bg-bg-secondary rounded-2xl h-full w-full border border-white/5 hover:border-emerald-primary/50 transition-colors group"
            layoutId={`card-${card.id}`}
          >
            <img
              src={card.thumbnail}
              className="object-cover w-full h-full absolute inset-0 transition duration-500 group-hover:scale-105"
              alt="thumbnail"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-900/20 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                Lihat Detail
              </span>
            </div>
          </motion.div>
        </div>
      ))}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 h-full w-full bg-bg-primary/90 z-[100] backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
             <motion.div
                layoutId={`card-${selected.id}`}
                className="w-full max-w-4xl max-h-[90vh] bg-bg-secondary rounded-3xl overflow-hidden border border-emerald-primary/20 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex flex-col md:flex-row relative z-[101]"
             >
                {/* Close Button */}
                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-emerald-primary text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="w-full md:w-3/5 h-64 md:h-[600px] relative">
                  <img src={selected.thumbnail} className="object-cover w-full h-full" alt="selected" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent md:hidden" />
                </div>
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center relative bg-bg-secondary">
                   {selected.content}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
