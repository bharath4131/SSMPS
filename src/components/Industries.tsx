"use client";

import { motion } from "framer-motion";
import { Building, Hospital, Home, Factory, School, Hotel, Landmark, HardHat } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building,
      name: "Corporate Offices",
      desc: "Providing secure front desks, access controls, daily floor hygiene, and technical workforce pipelines for high-end IT Parks and MNC offices.",
    },
    {
      icon: Hospital,
      name: "Hospitals & Healthcare",
      desc: "Delivering fully disinfected sanitary ward cleaning, emergency exit control, quiet security zones, and reliable technical plumbing/electrical support.",
    },
    {
      icon: Home,
      name: "Apartments & Communities",
      desc: "Ensuring 24/7 boundary patrols, visitor tracking software integration, lawn maintenance, and daily housekeeping for premium gated societies.",
    },
    {
      icon: Factory,
      name: "Manufacturing Plants",
      desc: "Setting up safety patrols, shift checkouts, perimeter monitoring, material entry logs, and high-pressure chemical floor washing.",
    },
    {
      icon: School,
      name: "Schools & Colleges",
      desc: "Providing background-checked guards for campus entrances, safe pupil corridors, restroom upkeep, and administrative staff support.",
    },
    {
      icon: Hotel,
      name: "Hotels & Hospitality",
      desc: "Deploying professional lobby hosts, pantry servers, deep carpet maintenance, stone polishing, and valet support for high-end lodging.",
    },
    {
      icon: Landmark,
      name: "Banks & Institutions",
      desc: "Supplying armed security guards, remote CCTV feeds monitoring, rapid alarms response, and secure cash-in-transit gateway safety.",
    },
    {
      icon: HardHat,
      name: "Warehouses & Logistics",
      desc: "Configuring loading bay monitors, cargo safety guards, yard sweeping, fence integrity checks, and overnight staff supervision.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section id="industries" className="py-24 md:py-32 bg-[#F7F9FC] text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Market Segments
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
            Sectors We Serve With Distinction.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
            Different industries have unique regulatory and security needs. We deploy customized SOPs tailored specifically for each client vertical.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#D4AF37]/45 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Gold Accent Corner Blur */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl group-hover:bg-[#D4AF37]/10 transition-colors" />

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center group-hover:bg-[#081B33] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#081B33] group-hover:text-[#D4AF37] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-50/50 flex justify-end">
                  <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold group-hover:text-[#D4AF37] transition-colors">
                    SOP Active
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
