"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BrandCommitment() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-32 md:py-48 bg-[#081B33] text-white relative overflow-hidden flex flex-col justify-center items-center text-center border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-xl space-y-10 relative z-10"
      >
        {/* Core Brand Line */}
        <div className="space-y-4">
          <motion.h3
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-wider uppercase leading-none text-white select-none"
          >
            You Trust.
          </motion.h3>
          <motion.h3
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-wider uppercase leading-none text-[#D4AF37] select-none"
          >
            We Serve.
          </motion.h3>
        </div>

        {/* Line divider */}
        {!shouldReduceMotion && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />
        )}

        {/* Shield Logo Reveal */}
        <motion.div
          variants={textVariants}
          className="flex justify-center"
        >
          <div className="relative w-24 h-24 shadow-2xl">
            <Image
              src="/logo.png"
              alt="SSMPS Shield Seal"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
