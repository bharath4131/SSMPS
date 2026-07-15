"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "Our Story", icon: ShieldCheck },
    { id: "mission", label: "Mission & Vision", icon: Target },
    { id: "values", label: "Core Values", icon: Heart },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Photography with Gold Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-10 border border-white">
              <Image
                src="/about_security_guard.png"
                alt="SSMPS Corporate Security Force"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Gold gradient border overlay */}
              <div className="absolute inset-0 border-[3px] border-[#D4AF37]/30 rounded-2xl pointer-events-none" />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphic Stat Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 glass-card-gold p-6 rounded-2xl max-w-[240px] shadow-xl border border-[#D4AF37]/35">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center text-[#081B33] font-bold">
                  <Award className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-display text-white">15+</h4>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold mt-0.5">
                    Years of Leadership
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background blocks */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#081B33]/20 rounded-bl-2xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & Tabs */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
                Corporate Profile
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
                Leading Facility & Security Solutions Since 1991.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mt-4" />
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-4 px-4 text-xs md:text-sm font-bold tracking-wider uppercase border-b-2 transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? "border-[#D4AF37] text-[#081B33]"
                        : "border-transparent text-gray-400 hover:text-[#081B33]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Panels with Framer Motion */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeTab === "story" && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-gray-600 text-sm leading-relaxed"
                  >
                    <p className="font-semibold text-[#081B33] text-base">
                      SS Man power solutions (SSMPS) was founded with a singular focus: bridging the gap between elite operational standards and local execution.
                    </p>
                    <p>
                      Over the past decade and a half, we have grown from a local service vendor into a premier enterprise partner. Today, we manage the security corridors, commercial hygiene, and administrative workforce pipelines for some of Hyderabad's most iconic commercial towers, manufacturing houses, and luxury residential enclaves.
                    </p>
                    <p>
                      Every security guard, housekeeping executive, and maintenance technician we deploy is fully vetted, undergo intensive training modules, and operates under strict client SLAs.
                    </p>
                  </motion.div>
                )}

                {activeTab === "mission" && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37] border border-gray-100 flex-shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-display text-[#081B33] uppercase tracking-wider">
                          Our Mission
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          To empower corporate enterprises and residential communities with bulletproof security networks and pristine, healthy operational environments, allowing them to focus entirely on their core mission.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37] border border-gray-100 flex-shrink-0">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-display text-[#081B33] uppercase tracking-wider">
                          Our Vision
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                          To be recognized as the gold standard of integrated facility management and manpower solutions across India, leveraging cutting-edge accountability frameworks, certified personnel, and green operational technologies.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "values" && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[
                      {
                        title: "Absolute Integrity",
                        desc: "100% background checks, valid government licensing, and transparent commercial contracts.",
                      },
                      {
                        title: "Continuous Training",
                        desc: "Regular drill routines, compliance audits, and emergency protocol response sessions.",
                      },
                      {
                        title: "Vigilant Accountability",
                        desc: "24/7 tracking, digital site logs, and real-time operations dashboards.",
                      },
                      {
                        title: "Client Centricity",
                        desc: "Flexible deployment matrices, dedicated account managers, and rapid emergency response.",
                      },
                    ].map((val, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <h5 className="text-xs md:text-sm font-bold text-[#081B33] font-display uppercase tracking-wider mb-1">
                          {val.title}
                        </h5>
                        <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
