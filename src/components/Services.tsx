"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Factory,
  Home,
  Hospital,
  School,
  Calendar,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Users,
  Video,
  Flame,
  Briefcase,
  Store,
  HardHat,
  Sparkles,
  Layers,
  Brush,
  Wrench,
  Bath,
  Zap,
  Droplets,
  UserPlus,
  Coffee,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("security");

  const categories = [
    { id: "security", label: "Security Services" },
    { id: "housekeeping", label: "Housekeeping Services" },
    { id: "facility", label: "Facility Management" },
  ];

  const serviceData = {
    security: {
      headline: "Commanding Authority. Bulletproof Safety.",
      desc: "Our security force is government-licensed, PSARA-compliant, and fully vetted. We protect physical assets, critical infrastructure, and VIPs across Hyderabad.",
      items: [
        {
          icon: Building,
          title: "Corporate Security",
          desc: "Concierge-level protection customized for high-rise corporate towers and MNC office hubs.",
        },
        {
          icon: Factory,
          title: "Industrial Security",
          desc: "Heavy-patrol security for factories, warehouse yards, and manufacturing facilities.",
        },
        {
          icon: Home,
          title: "Residential Security",
          desc: "Vigilant perimeter defense and entry monitoring for high-end villas and private estates.",
        },
        {
          icon: Building,
          title: "Apartment Security",
          desc: "Gate log checkouts and boundary monitoring for luxury apartment complexes and societies.",
        },
        {
          icon: Hospital,
          title: "Hospital Security",
          desc: "SOP-driven security managing sensitive healthcare zones, emergency exits, and crowds.",
        },
        {
          icon: School,
          title: "School Security",
          desc: "Background-verified guards ensuring safe student corridors and child protection audits.",
        },
        {
          icon: Calendar,
          title: "Event Security",
          desc: "Temporary event security, guest flow control, and safety layouts for corporate seminars.",
        },
        {
          icon: ShieldAlert,
          title: "Armed Guards",
          desc: "Licensed armed security officers for critical safety zones and asset transfers.",
        },
        {
          icon: ShieldCheck,
          title: "Unarmed Guards",
          desc: "Highly-trained unarmed officers for general surveillance, access control, and patrol loops.",
        },
        {
          icon: UserCheck,
          title: "Bouncer Services",
          desc: "Elite close-protection personnel for crowd management and corporate guest safety.",
        },
        {
          icon: Users,
          title: "VIP Protection",
          desc: "Bespoke executive protection details and security escorts for high-profile delegates.",
        },
        {
          icon: Video,
          title: "CCTV Monitoring",
          desc: "24/7 remote telemetry control room monitoring, alarm dispatches, and log audits.",
        },
        {
          icon: Flame,
          title: "Fire Safety Officers",
          desc: "Certified emergency response officers trained in fire control, drill setup, and hazard checks.",
        },
      ],
    },
    housekeeping: {
      headline: "Pristine Upkeep. Clinical Disinfection.",
      desc: "We deliver luxury-grade corporate housekeeping services using eco-friendly Diversey chemicals, certified disinfection SOPs, and heavy-grade industrial scrubbers.",
      items: [
        {
          icon: Briefcase,
          title: "Office Housekeeping",
          desc: "Daily office upkeep including desk grooming, meeting room sanitization, and lobby polish.",
        },
        {
          icon: Home,
          title: "Residential Housekeeping",
          desc: "Bespoke housekeeping, domestic sanitation, and daily cleaning for luxury residencies.",
        },
        {
          icon: Hospital,
          title: "Hospital Housekeeping",
          desc: "Clinical sanitization and infection control complying with medical-grade sterility standards.",
        },
        {
          icon: Store,
          title: "Mall Housekeeping",
          desc: "Scalable cleaning rosters for high-traffic shopping centers, food courts, and washrooms.",
        },
        {
          icon: HardHat,
          title: "Industrial Cleaning",
          desc: "Heavy-machinery area sanitization, grease removal, and warehouse floor maintenance.",
        },
        {
          icon: Sparkles,
          title: "Deep Cleaning",
          desc: "Intensive chemical restoration, high-pressure washing, and comprehensive sanitization.",
        },
        {
          icon: Layers,
          title: "Glass Cleaning",
          desc: "Certified rope-access safety facades and exterior high-rise window scrubbing.",
        },
        {
          icon: Brush,
          title: "Carpet Cleaning",
          desc: "Vacuum extraction, dry-foam cleaning, stain removal, and sanitization of carpets.",
        },
        {
          icon: Wrench,
          title: "Floor Maintenance",
          desc: "Diamond-grit marble polishing, wood waxing, and stone restoration services.",
        },
        {
          icon: Bath,
          title: "Washroom Maintenance",
          desc: "Hourly sanitation routines, odor-control maintenance, and hygiene refilling.",
        },
      ],
    },
    facility: {
      headline: "Outsourced Staffing. Seamless Operations.",
      desc: "SSMPS fills critical utility staff vacancies, providing certified electricians, front-desk administrators, pantry hosts, and gardeners on SLA contracts.",
      items: [
        {
          icon: Zap,
          title: "Electrical Maintenance",
          desc: "Certified industrial and domestic building electricians for diagnostic repairs and grid upkeep.",
        },
        {
          icon: Droplets,
          title: "Plumbing",
          desc: "Immediate diagnostic plumbers for piping audits, overhead tanks, and water grids upkeep.",
        },
        {
          icon: UserPlus,
          title: "Reception Staff",
          desc: "Polite, trained front-desk administrators managing visitor logs and phone lines.",
        },
        {
          icon: Coffee,
          title: "Pantry Services",
          desc: "Hygienic pantry servers managing coffee stations and board meeting refreshments.",
        },
        {
          icon: Leaf,
          title: "Garden Maintenance",
          desc: "Professional landscaping, regular mowing, pruning, and horticultural care.",
        },
        {
          icon: Building,
          title: "Building Maintenance",
          desc: "General handymen for carpentry repairs, masonry touch-ups, and structure audits.",
        },
      ],
    },
  };

  const currentData = serviceData[activeCategory as keyof typeof serviceData];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#081B33] text-white relative">
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E3A5F]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Complete Enterprise Service Spectrum.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-[#1E3A5F]/20 border border-white/5 rounded-xl backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2.5 md:px-8 md:py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-[#D4AF37] text-[#081B33] shadow-lg shadow-[#D4AF37]/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left: Summary Block */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                Operational Outline
              </span>
              <h3 className="text-2xl md:text-4xl font-bold font-display leading-tight">
                {currentData.headline}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                {currentData.desc}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                <span>{currentData.items.length} Active SLA Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Right: Detailed Services Sub-Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D4AF37] scrollbar-track-[#081B33]">
              {currentData.items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-6 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-md flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 flex-shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold font-display text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
