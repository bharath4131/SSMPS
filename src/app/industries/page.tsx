"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building, Factory, Home, Hospital, GraduationCap, BedDouble, Warehouse, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  const sectors = [
    {
      name: "Corporate",
      icon: Building,
      desc: "Delivering front-desk greeting protocols, visitor log tracking, and floor sanitation schedules for modern office towers and business hubs.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Industrial",
      icon: Factory,
      desc: "Providing heavy equipment boundary monitoring, shifts checkouts, logistics log checks, and chemical floor maintenance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Healthcare",
      icon: Hospital,
      desc: "Enforcing biological waste disposal protocols, quiet zones security monitoring, emergency exits validation, and clinical hygiene standards.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Residential",
      icon: Home,
      desc: "Conducting fixed entry gate audits, resident card scanning checks, perimeter watch rounds, and daily courtyard grounds keeping.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Education",
      icon: GraduationCap,
      desc: "Deploying background-checked security personnel at entry points, student corridor safety supervision, and campus upkeep routines.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Hospitality",
      icon: BedDouble,
      desc: "Providing professional front-desk reception support, pantry stewards, common area polishing, and lobby access screening.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Warehousing",
      icon: Warehouse,
      desc: "Managing cargo terminal access lists, fence line integrity, loading bay safety audits, and yard cleaning rosters.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Commercial",
      icon: ShoppingBag,
      desc: "Managing high-traffic entrance screening checks, escalator cleaning intervals, parking bay safety reviews, and public area sanitation.",
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Deployment Sectors
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Every Environment Has <br className="hidden sm:inline" />
              Different Requirements.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We design specialized checklists, security post orders, and housekeeping frequencies matching the compliance profile of each environment.
            </p>
          </div>
        </section>

        {/* Sectors Grid Catalog */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl overflow-hidden border border-gray-100 bg-[#F7F9FC] grid grid-cols-1 sm:grid-cols-12 shadow-sm"
                  >
                    {/* Left Side: Photo */}
                    <div className="sm:col-span-5 relative min-h-[200px] sm:min-h-full">
                      <Image
                        src={sec.image}
                        alt={`${sec.name} Environment`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>

                    {/* Right Side: Details */}
                    <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center border border-[#081B33]/5">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="text-sm font-bold font-display uppercase tracking-wider text-[#081B33]">
                          {sec.name} Sector
                        </h3>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                          {sec.desc}
                        </p>
                      </div>
                      
                      <div className="pt-2">
                        <Link
                          href="/request-proposal"
                          className="group/btn inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#081B33] hover:text-[#C41E3A] transition-colors"
                        >
                          <span>Request Bid</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
