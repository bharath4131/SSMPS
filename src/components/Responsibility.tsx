"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Responsibility() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const categories = [
    { title: "People", desc: "Your employees, visitors, and residents." },
    { title: "Property", desc: "Your real estate assets and physical infrastructure." },
    { title: "Operations", desc: "Your supply chains, workflow continuity, and shifts." },
    { title: "Environments", desc: "Your workspaces, clinics, and clean surroundings." },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#081B33] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1E3A5F]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-12 max-w-5xl"
        >
          {/* Main Statement */}
          <div className="space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Core Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.1] uppercase max-w-4xl">
              Every organization has something worth protecting.
            </h2>
            <div className="h-[2px] w-20 bg-[#D4AF37] mt-6" />
          </div>

          {/* Detailed Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-6">
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                Behind every corporate campus, warehouse, and residential building, there are critical elements that require care, structure, and accountability. SSMPS provides the support infrastructure to keep your business environments clean, secure, and fully operational.
              </p>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                We align our services with your daily schedules to minimize operational disruption. By focusing on trained personnel, regulatory compliance, and field supervision, we ensure that your core operations remain resilient.
              </p>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5">
            {categories.map((cat, index) => (
              <div key={index} className="space-y-2 border-l border-[#D4AF37]/30 pl-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
