"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function SSMPSStandard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const chapters = [
    {
      num: "01",
      title: "People",
      desc: "The strength of every service begins with the people delivering it. We implement structured vetting and on-site training to prepare personnel for custom assignments.",
    },
    {
      num: "02",
      title: "Discipline",
      desc: "Reliable operations require consistency, structure, and absolute accountability. Our supervisory inspections verify attendance, uniform compliance, and duty log adherence.",
    },
    {
      num: "03",
      title: "Service",
      desc: "Every environment has different requirements. We build customized checklists, roster schedules, and patrol intervals specific to your corporate, commercial, or residential layout.",
    },
    {
      num: "04",
      title: "Continuity",
      desc: "Support does not end at deployment. Each client is assigned an operations coordinator to quickly handle roster adjustments, shift queries, and emergency replacements.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#F8FAFC] text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
              Our Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] leading-none uppercase">
              The SSMPS <br />
              Standard.
            </h2>
            <div className="h-[2px] w-20 bg-[#C41E3A] my-6" />
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              We govern our operations by four core pillars that translate client trust into disciplined daily execution. We do not compromise on quality or legal compliance.
            </p>
          </div>

          {/* Right Column: Interactive Chapters Navigation & Explorer */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Interactive Chapter Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-[#081B33]/10 pb-4">
              {chapters.map((ch, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C41E3A] ${
                      isActive 
                        ? "bg-[#081B33] text-white border-transparent shadow-md" 
                        : "bg-white text-gray-500 border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <span className={`text-xs font-bold font-display uppercase tracking-widest ${isActive ? "text-[#C41E3A]" : "text-gray-400"}`}>
                      {ch.num}
                    </span>
                    <span className="text-sm font-bold font-display uppercase tracking-wider mt-1">
                      {ch.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display Active Chapter Details */}
            <div className="min-h-[160px] bg-white border border-gray-100 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-12 text-[140px] font-black font-display text-[#081B33]/5 select-none pointer-events-none">
                {chapters[activeIdx].num}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4 relative z-10"
                >
                  <h3 className="text-xl font-bold font-display text-[#081B33] uppercase tracking-wider flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C41E3A]" />
                    {chapters[activeIdx].title}
                  </h3>
                  <p className="text-sm md:text-md text-gray-600 font-light leading-relaxed max-w-2xl">
                    {chapters[activeIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
