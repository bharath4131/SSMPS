"use client";

import { Building, Factory, Home, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function SecurityShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      title: "Corporate Security",
      desc: "Access control, visitor logging, and concierge safety custom-tailored for corporate towers and office parks.",
      icon: Building,
    },
    {
      title: "Industrial Patrolling",
      desc: "Heavy perimeter security, equipment safeguards, and material gate audits for manufacturing plants.",
      icon: Factory,
    },
    {
      title: "Residential Safeguarding",
      desc: "Fixed gates, perimeter patrol loops, and entry auditing for residential communities and private estates.",
      icon: Home,
    },
    {
      title: "Unarmed Guard Operations",
      desc: "Disciplined guard personnel trained for access logs, regular site audits, and crowd containment.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F7F9FC] text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Operational Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
              Integrated Security Operations.
            </h2>
            <div className="h-[2px] w-20 bg-[#D4AF37]" />
          </div>
          <div className="lg:col-span-4 text-gray-500 text-xs md:text-sm font-light leading-relaxed">
            Our security capabilities are built around professional discipline, regular supervision, and strict adherence to client service guidelines.
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
                className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold tracking-wider text-[#081B33] uppercase font-display">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {cap.desc}
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