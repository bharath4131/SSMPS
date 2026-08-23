"use client";

import Link from "next/link";
import { ArrowRight, ClipboardList, ZoomIn, FileCheck, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";

export default function OurApproachPage() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Discuss",
      icon: ClipboardList,
      subtitle: "Requirement Analysis",
      desc: "We schedule an initial meeting to review your operational posts, desired uniform codes, shifts durations, and key compliance targets (PF, ESIC).",
    },
    {
      num: "02",
      title: "Assess",
      icon: ZoomIn,
      subtitle: "Site Audit",
      desc: "Our supervisors execute a site inspection, checking entry/exit points, facade glass layout, floor types, and logistics locks to calculate manpower metrics.",
    },
    {
      num: "03",
      title: "Plan",
      icon: FileCheck,
      subtitle: "Custom Post SOPs",
      desc: "We draft detailed post orders, cleaning chemical dilution guidelines (MSDS), shift schedules, and safety evacuation routes specific to your layout.",
    },
    {
      num: "04",
      title: "Deploy",
      icon: ShieldCheck,
      subtitle: "Team Mobilization",
      desc: "Our verified personnel are deployed. The operations supervisor handles the shift gate handover, confirms attendance registries, and verifies uniform codes.",
    },
    {
      num: "05",
      title: "Supervise",
      icon: Award,
      subtitle: "Supervisory Checkpoints",
      desc: "Operations managers execute surprise day and night audits, evaluating staff posture, log accuracy, and mopping checklist ratings.",
    },
    {
      num: "06",
      title: "Support",
      icon: HeartHandshake,
      subtitle: "Client Relations Desk",
      desc: "Each site has a dedicated account coordinator to quickly coordinate substitute personnel for planned leaves or emergency vacancy shifts.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33]">
        
        {/* Banner Hero */}
        <section className="py-24 md:py-36 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Governance Framework
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Structure Builds <br className="hidden sm:inline" />
              Reliability.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We govern our security, cleaning, and utility outsourcing deployments through a structured 6-stage roadmap. No shortcuts, just consistent oversight.
            </p>
          </div>
        </section>

        {/* Process Detail Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="relative border-l border-gray-150 pl-8 ml-4 space-y-12">
              
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="relative group space-y-3"
                  >
                    {/* Node point */}
                    <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full bg-[#081B33] text-[#D4AF37] flex items-center justify-center border-2 border-white shadow">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl font-extrabold font-display text-[#D4AF37]">
                        {item.num}
                      </span>
                      <h2 className="text-lg font-bold font-display text-[#081B33] uppercase tracking-wider">
                        {item.title}
                      </h2>
                    </div>

                    <div className="space-y-2 pl-8">
                      <span className="text-[10px] font-bold text-[#C41E3A] uppercase tracking-widest block">
                        {item.subtitle}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#081B33] text-white text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
              Work With a Structured Partner
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-lg mx-auto">
              Schedule an on-site evaluation of your commercial or residential property with our operations coordinators.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/request-proposal"
                className="px-6 py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Initiate Site Discussion</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
