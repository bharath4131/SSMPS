"use client";

import { useState } from "react";
import Image from "next/image";
import { Building, Factory, Home, Hospital, GraduationCap, BedDouble, Warehouse, ShoppingBag, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Industries() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const sectors = [
    {
      name: "Corporate",
      icon: Building,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      desc: "Delivering front-desk greeting protocols, visitor log tracking, and floor sanitation schedules for modern office towers and business hubs.",
    },
    {
      name: "Industrial",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
      desc: "Providing heavy equipment boundary monitoring, shifts checkouts, logistics log checks, and chemical floor maintenance.",
    },
    {
      name: "Healthcare",
      icon: Hospital,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
      desc: "Enforcing biological waste disposal protocols, quiet zones security monitoring, emergency exits validation, and clinical hygiene standards.",
    },
    {
      name: "Residential",
      icon: Home,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
      desc: "Conducting fixed entry gate audits, resident card scanning checks, perimeter watch rounds, and daily courtyard grounds keeping.",
    },
    {
      name: "Education",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
      desc: "Deploying background-checked security personnel at entry points, student corridor safety supervision, and campus upkeep routines.",
    },
    {
      name: "Hospitality",
      icon: BedDouble,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      desc: "Providing professional front-desk reception support, pantry stewards, common area polishing, and lobby access screening.",
    },
    {
      name: "Warehousing",
      icon: Warehouse,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      desc: "Managing cargo terminal access lists, fence line integrity, loading bay safety audits, and yard cleaning rosters.",
    },
    {
      name: "Commercial",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
      desc: "Managing high-traffic entrance screening checks, escalator cleaning intervals, parking bay safety reviews, and public area sanitation.",
    },
  ];

  return (
    <section id="industries" className="py-24 md:py-36 bg-[#F7F9FC] text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
            Environments Served
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] uppercase">
            Sectors We Support
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Sectors Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isExpanded = activeIdx === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(isExpanded ? null : idx)}
                className={`relative rounded-2xl overflow-hidden shadow-sm transition-all duration-500 text-left border flex flex-col justify-end p-6 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                  isExpanded 
                    ? "h-96 border-[#D4AF37]/50 lg:col-span-2" 
                    : "h-72 border-[#081B33]/5 hover:border-[#D4AF37]/35"
                }`}
              >
                {/* Image Backdrop */}
                <Image
                  src={sec.image}
                  alt={sec.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    shouldReduceMotion ? "" : "group-hover:scale-105"
                  } ${isExpanded ? "opacity-20" : "opacity-35"}`}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/70 to-[#081B33]/20 z-10" />

                {/* Content */}
                <div className="relative z-20 space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/25">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-45 text-[#D4AF37]" : ""
                    }`} />
                  </div>

                  <h3 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                    {sec.name}
                  </h3>

                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-gray-300 font-light leading-relaxed pt-2 border-t border-white/5"
                    >
                      {sec.desc}
                    </motion.p>
                  )}
                </div>

              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
