import React from "react";
import { motion } from "motion/react";

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#161717] text-slate-900 dark:text-[#fafad6] select-none px-6 transition-colors"
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 text-center max-w-md"
      >
        {/* Favicon Logo with soft halo accent */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-blue-50 dark:bg-blue-950/40 animate-pulse opacity-80" />
          <img
            src="/favicon.png"
            alt="Ambassade RDC au Burundi"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain relative z-10 drop-shadow-md rounded-2xl"
          />
        </div>

        {/* Text Titles */}
        <div className="space-y-1.5">
          <h1 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-[#fafad6] tracking-tight uppercase">
            Ambassade de la RDC au Burundi
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
            Chancellerie à Bujumbura • République Démocratique du Congo
          </p>
        </div>

        {/* Animated National Color Dots */}
        <div className="flex items-center gap-2 mt-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0054a6] animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f7d117] animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ce1126] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
