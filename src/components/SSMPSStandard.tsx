"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SSMPSStandard() {
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

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-[#F7F9FC] text-[#081B33]">
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
            <div className="h-[2px] w-20 bg-[#D4AF37] my-6" />
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              We govern our operations by four core pillars that translate client trust into disciplined daily execution. We do not compromise on quality or legal compliance.
            </p>
          </div>

          {/* Right Column: Vertical Chapters Narrative */}
          <div className="lg:col-span-8 space-y-8">
            {chapters.map((ch, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-8 border-t border-[#081B33]/10 first:border-t-0 first:pt-0"
              >
                {/* Large outline numeral */}
                <div className="sm:col-span-2 text-4xl sm:text-5xl font-extrabold font-display text-[#D4AF37] leading-none">
                  {ch.num}
                </div>
                
                {/* Chapter Content */}
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="text-lg font-bold font-display text-[#081B33] uppercase tracking-wider">
                    {ch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
