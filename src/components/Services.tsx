"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Sparkles, Settings, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: "Security Services",
      shortTitle: "Security",
      href: "/services/security",
      desc: "Trained personnel, strict reporting lines, and structured access controls. We deploy security solutions custom-tailored for corporate offices, manufacturing plants, and residential societies.",
      features: [
        "Corporate Gate Access Auditing",
        "Industrial Perimeter Patrols",
        "Residential Entry Logging",
        "Unarmed Security Personnel",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      icon: Shield,
    },
    {
      title: "Housekeeping Services",
      shortTitle: "Housekeeping",
      href: "/services/housekeeping",
      desc: "Commercial cleaning, deep sanitization, and daily workplace upkeep. We maintain hygienic, pristine, and safe commercial and industrial environments following custom SLA parameters.",
      features: [
        "Corporate Floor Deep Cleaning",
        "Industrial Disinfection Routines",
        "Common Area Hygiene Care",
        "Stone Diamond Floor Polishing",
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
      icon: Sparkles,
    },
    {
      title: "Facility Management",
      shortTitle: "Facilities",
      href: "/services/facility-management",
      desc: "Outsourced technicians, utility staff, and on-site coordinators. We provide building maintenance professionals to ensure electrical, plumbing, and general facility systems run without downtime.",
      features: [
        "Building Electricians & Plumbers",
        "Lobby Reception & Front-Desk Staff",
        "Pantry & Server Outsource",
        "Operational Roster Maintenance",
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
      icon: Settings,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 bg-[#081B33] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient blur background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1E3A5F]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 md:mb-24 text-left max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white uppercase leading-tight">
            Three capabilities. One responsible partner.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mt-4" />
        </div>

        {/* Desktop View: Expanding Panels Layout */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 text-left flex flex-col justify-between p-8 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer ${
                  isActive
                    ? "flex-[3.5] bg-[#0c223d] border-[#D4AF37]/50 shadow-xl"
                    : "flex-[1] bg-[#0c1f36] border-white/5 opacity-70 hover:opacity-100 hover:border-white/10"
                }`}
                aria-expanded={isActive}
              >
                {/* Background image when active */}
                {isActive && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover opacity-15 transition-transform duration-700 ${
                        shouldReduceMotion ? "" : "scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-[#081B33]/80" />
                  </div>
                )}

                {/* Header elements */}
                <div className="relative z-10 flex items-start justify-between w-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                    isActive ? "bg-[#D4AF37]/10 border-[#D4AF37]/35 text-[#D4AF37]" : "bg-white/5 border-white/5 text-gray-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {!isActive && (
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold rotate-90 origin-right translate-y-6">
                      {item.shortTitle}
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="relative z-10 space-y-6 mt-auto">
                  <h3 className="text-xl font-bold font-display uppercase tracking-wider text-white">
                    {item.title}
                  </h3>

                  {isActive && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <p className="text-xs text-gray-300 font-light leading-relaxed max-w-xl">
                        {item.desc}
                      </p>

                      {/* Capabilities checklist */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {item.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Architectural CTA Button */}
                      <div className="pt-2">
                        <Link
                          href={item.href}
                          onClick={(e) => e.stopPropagation()}
                          className="group/btn inline-flex flex-col items-start py-1 text-xs font-bold tracking-wider text-white uppercase"
                        >
                          <div className="flex items-center gap-1.5 group-hover/btn:text-[#D4AF37] transition-colors duration-300">
                            <span>Explore {item.shortTitle}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </div>
                          <span className="w-full h-[1px] bg-white/20 mt-1 transition-all duration-300 group-hover/btn:bg-[#D4AF37]" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile View: Accordion Layout */}
        <div className="md:hidden space-y-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-[#0c223d] border-[#D4AF37]/30 shadow-lg" : "bg-[#0c1f36] border-white/5"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded flex items-center justify-center border ${
                      isOpen ? "bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#D4AF37]" : "bg-white/5 border-white/5 text-gray-400"
                    }`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-white font-display">
                      {item.title}
                    </span>
                  </div>
                  <div>
                    {isOpen ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 space-y-6">
                        <p className="text-xs text-gray-300 font-light leading-relaxed">
                          {item.desc}
                        </p>
                        
                        {/* Features list */}
                        <div className="space-y-2 border-t border-white/5 pt-4">
                          {item.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                              <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Link */}
                        <div className="pt-2">
                          <Link
                            href={item.href}
                            className="group/btn flex items-center justify-between py-3 px-4 border border-white/10 rounded text-xs font-bold tracking-wider text-white uppercase bg-white/5"
                          >
                            <span>Explore {item.shortTitle}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
