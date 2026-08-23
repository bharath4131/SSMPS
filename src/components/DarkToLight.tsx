"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function DarkToLight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#081B33] to-[#F7F9FC] text-center px-6">
      
      {/* Decorative vertical B2B connector line */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 120 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[1px] bg-[#D4AF37] mb-8"
        />
      )}

      {/* Main Narrative */}
      <div className="max-w-4xl space-y-6 relative z-10">
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-none uppercase select-none text-[#081B33]"
        >
          Protection is only <br className="hidden sm:inline" />
          the beginning.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-[2px] bg-[#C41E3A] mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto leading-relaxed"
        >
          SSMPS integrates disciplined security protocols with commercial housekeeping and facility coordination to establish cohesive operations across all corporate sectors.
        </motion.p>
      </div>
      
    </section>
  );
}
