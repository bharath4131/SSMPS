"use client";

import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Settings, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesHubPage() {
  const guide = [
    {
      need: "Physical asset protection, visitor auditing, and boundary control",
      solution: "Security Services",
      href: "/services/security",
    },
    {
      need: "Daily premises sanitation, floor care, facade upkeep, and hygiene audits",
      solution: "Housekeeping Services",
      href: "/services/housekeeping",
    },
    {
      need: "Technical staff dispatch (electricians/plumbers), pantry, and utility coordination",
      solution: "Facility Management",
      href: "/services/facility-management",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33]">
        
        {/* Hero Section */}
        <section className="py-24 md:py-36 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Core Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Three Capabilities. <br className="hidden sm:inline" />
              One Responsible Partner.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We align our security, housekeeping, and utility coordination matrices directly with client operations to maintain consistent standards.
            </p>
          </div>
        </section>

        {/* Division 1: Security Services (Force Dark) */}
        <section className="py-20 bg-[#081B33] text-white border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/25">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
                  Security Services
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Protecting assets and managing site entry parameters through trained guard personnel, scheduled patrol loops, and active operational supervision.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/security"
                    className="group inline-flex flex-col items-start py-1 text-xs font-bold tracking-wider text-white uppercase"
                  >
                    <div className="flex items-center gap-1.5 group-hover:text-[#D4AF37] transition-colors">
                      <span>Explore Security Offerings</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="w-full h-[1px] bg-white/20 mt-1 transition-all group-hover:bg-[#D4AF37]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Corporate Guarding", desc: "Access screening, visitor badge management, and reception safety checkpoints." },
                  { title: "Industrial Patrolling", desc: "Perimeter walks, materials gate logging, and shifts exit checks." },
                  { title: "Residential Safety", desc: "Gate lock control, vehicle entry auditing, and patrol schedules." },
                  { title: "Unarmed Operations", desc: "Trained personnel operating under specific duty post orders." },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#0c223d] border border-white/5 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Division 2: Housekeeping Services (Force Light) */}
        <section className="py-20 bg-white text-[#081B33] border-b border-[#081B33]/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                {[
                  { title: "Workspace Cleanliness", desc: "Regular office dustings, floor moppings, and desk-side sanitizations." },
                  { title: "Sanitary Maintenance", desc: "Restroom hygiene rosters, chemical dilution checks, and common area upkeep." },
                  { title: "Glass & Facades", desc: "Access-safe windows washings and high facade cleaning schedules." },
                  { title: "Floor Restoration", desc: "Stone floor diamond polishing, scrubbings, and restoration." },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#F7F9FC] border border-gray-100 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#081B33] font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="w-12 h-12 rounded-lg bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37] border border-[#081B33]/10">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
                  Housekeeping Services
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Maintaining pristine workplace hygiene through certified cleaning materials, dilution control checkouts, and daily checklist validation.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/housekeeping"
                    className="group inline-flex flex-col items-start py-1 text-xs font-bold tracking-wider text-[#081B33] uppercase"
                  >
                    <div className="flex items-center gap-1.5 group-hover:text-[#D4AF37] transition-colors">
                      <span>Explore Housekeeping</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="w-full h-[1px] bg-gray-200 mt-1 transition-all group-hover:bg-[#D4AF37]" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Division 3: Facility Management (Force Operational Grid) */}
        <section className="py-20 bg-[#F7F9FC] text-[#081B33] border-b border-[#081B33]/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37] border border-[#081B33]/10">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
                  Facility Management
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Providing full utility support and technical personnel outsourcing to keep building maintenance, pantry grids, and office systems running.
                </p>
                <div className="pt-2">
                  <Link
                    href="/services/facility-management"
                    className="group inline-flex flex-col items-start py-1 text-xs font-bold tracking-wider text-[#081B33] uppercase"
                  >
                    <div className="flex items-center gap-1.5 group-hover:text-[#D4AF37] transition-colors">
                      <span>Explore Facility Support</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="w-full h-[1px] bg-gray-200 mt-1 transition-all group-hover:bg-[#D4AF37]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Building Technicians", desc: "Outsourced electricians and plumbers operating under scheduled inspections checkouts." },
                  { title: "Front-Desk Reception", desc: "Professional front-desk hosts trained in visitor registries and telephone support." },
                  { title: "Pantry & Stewards", desc: "Trained pantry servers and stewards to manage meeting refreshments." },
                  { title: "Roster Management", desc: "Coordination of staffing shift handovers to prevent vacancy gaps." },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 space-y-2 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#081B33] font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Decision Guide */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="space-y-4 mb-12 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                B2B Selection Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                Corporate Decision Guide
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#081B33] text-white p-4 grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider">
                <div className="col-span-7">If Your Operational Need Is:</div>
                <div className="col-span-5">SSMPS Recommended Capability:</div>
              </div>
              <div className="divide-y divide-gray-100 bg-[#F7F9FC]">
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
                        className="w-8 h-8 rounded bg-[#081B33]/5 text-[#D4AF37] hover:bg-[#081B33] hover:text-white flex items-center justify-center transition-colors"
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
