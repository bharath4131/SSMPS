"use client";

import { Shield, Building, Factory, Hotel, HardHat, Store, School, Landmark } from "lucide-react";

export default function ClientMarquee() {
  const clients = [
    { name: "Apex Tech Park", icon: Building },
    { name: "Pharma Labs India", icon: Factory },
    { name: "Vanguard Corporates", icon: Landmark },
    { name: "Capital Malls", icon: Store },
    { name: "Zenith Healthcare", icon: Shield },
    { name: "Regency Hotels", icon: Hotel },
    { name: "Oxford Global School", icon: School },
    { name: "Cyber Towers IT", icon: Building },
    { name: "Hydra Logistics", icon: HardHat },
  ];

  return (
    <section id="clients" className="py-12 bg-[#081B33] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <h3 className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
          Trusted by Industry Leaders Across Sectors
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Infinite Scrolling Row 1 */}
        <div className="flex gap-8 py-4 animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E3A5F]/20 border border-white/5 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              <client.icon className="w-5 h-5 text-[#D4AF37]/75" />
              <span className="text-sm font-semibold tracking-wider text-gray-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Backdrop shadows for premium fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#081B33] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#081B33] to-transparent z-10" />
      </div>
    </section>
  );
}
