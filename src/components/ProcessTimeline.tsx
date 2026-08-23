"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, ZoomIn, FileCheck, ShieldCheck, Award, HeartHandshake } from "lucide-react";

export default function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Discuss",
      icon: ClipboardList,
      desc: "Review your specific security, housekeeping, and facility objectives.",
    },
    {
      num: "02",
      title: "Assess",
      icon: ZoomIn,
      desc: "Perform a thorough walkthrough of boundaries, layout, and zones.",
    },
    {
      num: "03",
      title: "Plan",
      icon: FileCheck,
      desc: "Design detailed rosters, shift cycles, and post instructions.",
    },
    {
      num: "04",
      title: "Deploy",
      icon: ShieldCheck,
      desc: "Mobilize the vetted team, verify gear, and establish reporting logs.",
    },
    {
      num: "05",
      title: "Supervise",
      icon: Award,
      desc: "Conduct supervisory visits and duty checks to maintain discipline.",
    },
    {
      num: "06",
      title: "Support",
      icon: HeartHandshake,
      desc: "Assign a coordinator for roster queries and rapid replacements.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-white text-[#081B33] overflow-hidden border-t border-[#081B33]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="space-y-4 mb-20 md:mb-28 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
            Operational Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] uppercase">
            From requirement <br />
            to reliable delivery.
          </h2>
          <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
        </div>

        {/* Desktop View: Immersive Horizontal Process */}
        <div className="hidden lg:block relative py-12">
          {/* Progress Accent Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 -translate-y-1/2 z-0" />
          {!shouldReduceMotion && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#C41E3A] origin-left -translate-y-1/2 z-10"
            />
          )}

          <div className="grid grid-cols-6 gap-6 relative z-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-10 h-10 rounded bg-[#081B33] flex items-center justify-center text-[#C41E3A] shadow-md">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C41E3A] uppercase tracking-wider block">
                      Step {step.num}
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#081B33] font-display">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Roadmap */}
        <div className="lg:hidden relative pl-8 py-4">
          {/* Vertical Progress Line */}
          <div className="absolute top-0 bottom-0 left-[18px] w-[1px] bg-gray-100 z-0" />
          {!shouldReduceMotion && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 left-[18px] w-[2px] bg-[#C41E3A] origin-top z-10"
            />
          )}

          <div className="space-y-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-4 items-start relative z-20"
                >
                  <div className="w-9 h-9 rounded bg-[#081B33] flex items-center justify-center text-[#C41E3A] shadow flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-[#C41E3A] uppercase tracking-widest block">
                        Step {step.num}
                      </span>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#081B33] font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
