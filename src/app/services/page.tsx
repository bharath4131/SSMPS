"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function ServicesHubPage() {
  const [activeTab, setActiveTab] = useState(0); // 0: Security, 1: Housekeeping, 2: Facilities
  const shouldReduceMotion = useReducedMotion();

  const divisions = [
    {
      title: "Security Services",
      icon: Shield,
      desc: "Protecting assets and managing site entry parameters through trained personnel, scheduled patrol loops, and active operational supervision.",
      href: "/services/security",
      bgClass: "bg-[#081B33] text-white border-white/5",
      isDark: true,
      capabilities: [
        { title: "Corporate Support", desc: "Access screening, visitor badge management, and reception safety checkpoints." },
        { title: "Industrial Support", desc: "Perimeter walks, materials gate logging, and shifts exit checks." },
        { title: "Residential Support", desc: "Gate lock control, vehicle entry auditing, and patrol schedules." },
        { title: "General Support", desc: "Trained personnel operating under specific duty post guidelines." },
      ]
    },
    {
      title: "Housekeeping Services",
      icon: Sparkles,
      desc: "Maintaining pristine workplace hygiene through certified cleaning materials, daily schedules, and supervisor-verified checkouts.",
      href: "/services/housekeeping",
      bgClass: "bg-white text-[#081B33] border-gray-100",
      isDark: false,
      capabilities: [
        { title: "Premises Upkeep", desc: "Regular office dustings, floor moppings, and desk-side sanitizations." },
        { title: "Hygiene Support", desc: "Restroom hygiene rosters, common area upkeep, and sanitation checks." },
        { title: "Facility Upkeep", desc: "Safe cleaning protocols for windows and internal building fixtures." },
        { title: "Daily Checklist Care", desc: "Consistent service delivery matching environment-specific requirements." },
      ]
    },
    {
      title: "Facility Management",
      icon: Settings,
      desc: "Providing utility coordination and technical support personnel to keep building systems, pantry grids, and office services running.",
      href: "/services/facility-management",
      bgClass: "bg-[#F8FAFC] text-[#081B33] border-gray-100",
      isDark: false,
      capabilities: [
        { title: "Operational Coordination", desc: "Maintenance coordination under scheduled checkouts and system updates." },
        { title: "Admin Support", desc: "Reception area logs, front-desk greeting protocols, and visitor coordination." },
        { title: "Refreshment Support", desc: "Pantry coordination matching corporate meeting and visitor requirements." },
        { title: "Service Continuity", desc: "Coordination of staffing shift handovers to prevent operational vacancy gaps." },
      ]
    }
  ];

  const guide = [
    {
      need: "Physical asset protection, visitor auditing, and boundary control",
      solution: "Security Services",
      href: "/services/security",
    },
    {
      need: "Daily premises sanitation, floor care, and hygiene audits",
      solution: "Housekeeping Services",
      href: "/services/housekeeping",
    },
    {
      need: "Technical coordination support (electricians/plumbers) and admin support",
      solution: "Facility Management",
      href: "/services/facility-management",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F8FAFC] text-[#081B33]">
        
        {/* Hero Section */}
        <section className="py-24 md:py-36 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
              Core Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Three Capabilities. <br className="hidden sm:inline" />
              One Responsible Partner.
            </h1>
            <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We align our security, housekeeping, and utility coordination matrices directly with client operations to maintain consistent standards.
            </p>
          </div>
        </section>

        {/* Division Interactive Explorer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            
            {/* Division Switcher Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-100 pb-4">
              {divisions.map((div, idx) => {
                const Icon = div.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C41E3A] ${
                      isActive 
                        ? "bg-[#081B33] text-white border-transparent shadow-md" 
                        : "bg-[#F8FAFC] text-gray-600 border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                      isActive 
                        ? "bg-[#C41E3A]/10 border-[#C41E3A]/30 text-[#C41E3A]" 
                        : "bg-white border-gray-200 text-gray-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider block opacity-70">Division {idx + 1}</span>
                      <span className="text-sm font-bold font-display uppercase tracking-wider block">{div.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Division Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className={`p-8 rounded-2xl border shadow-sm ${divisions[activeTab].bgClass}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left content inside panel */}
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C41E3A] block">
                      Active Division
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
                      {divisions[activeTab].title}
                    </h2>
                    <p className={`text-xs sm:text-sm font-light leading-relaxed ${divisions[activeTab].isDark ? "text-gray-300" : "text-gray-500"}`}>
                      {divisions[activeTab].desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={divisions[activeTab].href}
                        className={`group inline-flex flex-col items-start py-1 text-xs font-bold tracking-wider uppercase ${
                          divisions[activeTab].isDark ? "text-white" : "text-[#081B33]"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 hover:text-[#C41E3A] transition-colors">
                          <span>Explore {divisions[activeTab].title} Detail</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                        <span className={`w-full h-[1px] mt-1 transition-all group-hover:bg-[#C41E3A] ${
                          divisions[activeTab].isDark ? "bg-white/20" : "bg-gray-200"
                        }`} />
                      </Link>
                    </div>
                  </div>

                  {/* Right grid cards inside panel */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {divisions[activeTab].capabilities.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`p-6 rounded-xl border ${
                          divisions[activeTab].isDark 
                            ? "bg-[#0c223d] border-white/5" 
                            : "bg-white border-gray-200/50"
                        } space-y-2`}
                      >
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#C41E3A] font-display">
                          {item.title}
                        </h3>
                        <p className={`text-[11px] font-light leading-relaxed ${
                          divisions[activeTab].isDark ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* Corporate Decision Guide */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="space-y-4 mb-12 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                B2B Selection Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                Corporate Decision Guide
              </h2>
              <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="bg-[#081B33] text-white p-4 grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider">
                <div className="col-span-7">If Your Operational Need Is:</div>
                <div className="col-span-5">SSMPS Recommended Capability:</div>
              </div>
              <div className="divide-y divide-gray-100">
                {guide.map((item, idx) => (
                  <div key={idx} className="p-5 grid grid-cols-12 gap-4 items-center text-xs">
                    <div className="col-span-7 text-gray-500 font-light leading-relaxed flex gap-2">
                      <span className="text-[#C41E3A] font-bold">▪</span>
                      {item.need}
                    </div>
                    <div className="col-span-5 flex justify-between items-center">
                      <span className="font-bold text-[#081B33] font-display uppercase tracking-wide">
                        {item.solution}
                      </span>
                      <Link
                        href={item.href}
                        className="w-8 h-8 rounded bg-[#C41E3A]/5 text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
