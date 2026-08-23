"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building, Factory, Home, Hospital, GraduationCap, BedDouble, Warehouse, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function IndustriesPage() {
  const [activeSecIdx, setActiveSecIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectors = [
    {
      name: "Corporate",
      icon: Building,
      desc: "Operational discipline, clean and well-maintained environments, and reliable coordination for offices.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Industrial",
      icon: Factory,
      desc: "Service planning and support customized to meet industrial facility requirements.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Healthcare",
      icon: Hospital,
      desc: "Service continuity and housekeeping support focused on clean and well-maintained environments.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Residential",
      icon: Home,
      desc: "Operational coordination and professional security support for residential properties.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Education",
      icon: GraduationCap,
      desc: "Reliable service coordination and housekeeping support customized for educational facilities.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Hospitality",
      icon: BedDouble,
      desc: "Cleanliness support, environment-specific service planning, and operational discipline.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Warehousing",
      icon: Warehouse,
      desc: "Operational coordination and professional security support matching warehouse environments.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Commercial",
      icon: ShoppingBag,
      desc: "Consistent service delivery, service planning, and housekeeping support for shopping centers.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33]">
        
        {/* Banner Hero */}
        <section className="py-24 md:py-36 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
              Deployment Sectors
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Every Environment Has <br className="hidden sm:inline" />
              Different Requirements.
            </h1>
            <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We design specialized checklists, security post orders, and housekeeping frequencies matching the compliance profile of each environment.
            </p>
          </div>
        </section>

        {/* Sectors Interactive Selector */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            
            {/* Selector Grid of Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 border-b border-gray-100 pb-4">
              {sectors.map((sec, idx) => {
                const Icon = sec.icon;
                const isActive = activeSecIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSecIdx(idx)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C41E3A] ${
                      isActive 
                        ? "bg-[#081B33] text-white border-transparent shadow-md" 
                        : "bg-[#F8FAFC] border-gray-100 text-gray-500 hover:text-[#081B33] hover:border-gray-200"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-2 stroke-[1.5]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest font-display">
                      {sec.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Sector Display Card */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-[#F8FAFC]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSecIdx}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 min-h-[350px]"
                >
                  {/* Left Side: Photo */}
                  <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
                    <Image
                      src={sectors[activeSecIdx].image}
                      alt={`${sectors[activeSecIdx].name} Environment`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right Side: Details */}
                  <div className="lg:col-span-7 p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded bg-[#C41E3A]/5 text-[#C41E3A] flex items-center justify-center">
                        {(() => {
                          const SecIcon = sectors[activeSecIdx].icon;
                          return <SecIcon className="w-5 h-5" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold font-display uppercase tracking-wider text-[#081B33]">
                        {sectors[activeSecIdx].name} Environments
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xl">
                        {sectors[activeSecIdx].desc}
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <Link
                        href="/request-proposal"
                        className="group/btn inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#081B33] hover:text-[#C41E3A] transition-colors"
                      >
                        <span>Request a Service Proposal</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
