"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Globe } from "lucide-react";

export default function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      label: "Established",
      value: "2021",
      desc: "SSManPower Solutions commenced operations with a focus on disciplined service deployment.",
      icon: ShieldCheck,
    },
    {
      label: "Clients Served",
      value: "25+",
      desc: "Maintaining trusted relationships with corporate, industrial, and residential organizations.",
      icon: Users,
    },
    {
      label: "Current Presence",
      value: "TS & AP",
      desc: "Providing active operations coverage across Telangana and Andhra Pradesh.",
      icon: MapPin,
    },
    {
      label: "Expanding Presence",
      value: "Southern India",
      desc: "Expanding our operations infrastructure across critical sectors in adjacent states.",
      icon: Globe,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: idx * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="py-24 md:py-32 bg-white text-[#081B33] border-t border-[#081B33]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
            Scale &amp; Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] uppercase leading-none">
            Built to serve. <br />
            Growing with responsibility.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Typographic Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-gray-100 bg-[#F7F9FC] shadow-sm flex flex-col justify-between min-h-[220px]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                    Verified
                  </span>
                </div>

                <div className="space-y-2 mt-6">
                  <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block">
                    {item.label}
                  </span>
                  <div className="text-3xl md:text-4xl font-extrabold font-display text-[#081B33] tracking-tight uppercase">
                    {item.value}
                  </div>
                  <p className="text-[11px] text-gray-500 font-light leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
