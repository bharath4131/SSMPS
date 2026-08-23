"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";

export default function RegionalPresence() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-[#F7F9FC] text-[#081B33] overflow-hidden border-t border-[#081B33]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
              Operational Reach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] uppercase leading-none">
              Regional <br />
              Presence.
            </h2>
            <div className="h-[2px] w-20 bg-[#C41E3A] my-6" />
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              SSMPS currently coordinates operations from our registered office in Hyderabad, providing full service coverage across Telangana and Andhra Pradesh.
            </p>
            
            {/* Presence specifications */}
            <div className="space-y-4 pt-4 border-t border-[#081B33]/5">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-4 h-4 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600 font-light">
                  Active deployments in Hyderabad and major commercial zones.
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600 font-light">
                  Expanding capability framework to cover adjacent Southern India markets.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract SVG geographic map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-7 flex justify-center items-center relative min-h-[300px] md:min-h-[400px]"
          >
            <svg
              viewBox="0 0 600 500"
              className="w-full max-w-[500px] h-auto drop-shadow-md select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background abstract grids */}
              <circle cx="300" cy="250" r="220" stroke="#081B33" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="5 5" />
              <circle cx="300" cy="250" r="160" stroke="#081B33" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="5 5" />

              {/* Abstract outlines of Southern India regions */}
              {/* Telangana representation */}
              <motion.path
                d="M 260 170 Q 300 150 340 190 Q 350 240 310 260 Q 270 270 250 220 Z"
                fill="#081B33"
                fillOpacity="0.85"
                stroke="#C41E3A"
                strokeWidth="1.5"
                initial={shouldReduceMotion ? { fillOpacity: 0.85 } : { fillOpacity: 0.1 }}
                whileInView={{ fillOpacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              {/* Andhra Pradesh representation */}
              <motion.path
                d="M 310 260 Q 350 240 380 280 Q 400 340 340 370 Q 290 350 280 300 Q 290 280 310 260 Z"
                fill="#081B33"
                fillOpacity="0.5"
                stroke="#C41E3A"
                strokeWidth="1"
                initial={shouldReduceMotion ? { fillOpacity: 0.5 } : { fillOpacity: 0.1 }}
                whileInView={{ fillOpacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {/* Adjacent states representing expansion */}
              {/* Karnataka / Tamil Nadu boundary representations */}
              <path
                d="M 250 220 Q 200 240 210 320 Q 230 400 290 420 Q 280 360 280 300 Z"
                fill="#081B33"
                fillOpacity="0.04"
                stroke="#081B33"
                strokeOpacity="0.1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M 290 420 Q 330 430 350 390 Q 340 370 290 350 Z"
                fill="#081B33"
                fillOpacity="0.04"
                stroke="#081B33"
                strokeOpacity="0.1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Connecting node points */}
              {/* Hyderabad Hub node */}
              <circle cx="300" cy="210" r="6" fill="#C41E3A" />
              <motion.circle
                cx="300"
                cy="210"
                r="12"
                stroke="#C41E3A"
                strokeWidth="1.5"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Andhra Pradesh regional node */}
              <circle cx="340" cy="310" r="4" fill="#C41E3A" />

              {/* Expansion direction arrow paths */}
              <path d="M 250 270 L 210 270 M 210 270 L 220 260 M 210 270 L 220 280" stroke="#C41E3A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 330 380 L 330 410 M 330 410 L 320 400 M 330 410 L 340 400" stroke="#C41E3A" strokeWidth="1.5" strokeLinecap="round" />

              {/* Labels */}
              <text x="300" y="195" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-manrope)">
                HYDERABAD HQ
              </text>
              <text x="290" y="240" fill="#C41E3A" fontSize="12" fontWeight="bold" fontFamily="var(--font-manrope)">
                TELANGANA
              </text>
              <text x="330" y="340" fill="#C41E3A" fontSize="11" fontWeight="bold" fontFamily="var(--font-manrope)">
                ANDHRA PRADESH
              </text>
              
              {/* Expansion label */}
              <text x="210" y="440" fill="#081B33" fillOpacity="0.6" fontSize="10" fontWeight="500" fontFamily="var(--font-inter)">
                Southern India Expansion Zone
              </text>
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
