"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What training and licensing do SSMPS security guards have?",
      a: "Our security operations are fully aligned with PSARA (Private Security Agencies Regulation Act) regulations. All deployed guards undergo rigorous training modules covering fire safety drills, crowd control, registry tracking, access-gate operation, and emergency evacuation protocols.",
    },
    {
      q: "How do you manage roster absenteeism and emergency replacements?",
      a: "We maintain a 15% buffer workforce pool at our Hyderabad headquarters. If a security officer or housekeeping executive is absent, our automated roster system alerts the operations supervisor, and a verified replacement is deployed to the site within 2 hours, ensuring zero post downtime.",
    },
    {
      q: "Are the chemicals used by your housekeeping staff safe and certified?",
      a: "Absolutely. We exclusively use eco-friendly, biodegradable, and certified chemical brands (such as Diversey/Taski). We comply with commercial safety guidelines, providing MSDS (Material Safety Data Sheets) documentation for all chemicals stored on client premises.",
    },
    {
      q: "What background checks are performed on manpower before hiring?",
      a: "Our verification process is thorough. We execute triple-tier verification: (1) Identity verification via national databases, (2) Criminal record checks through local police stations corresponding to their address, and (3) Professional reference checks from past deployments.",
    },
    {
      q: "What are your standard billing cycles and compliance policies?",
      a: "We bill monthly with standard 15-day payment terms. SSMPS is fully compliant with state labor department regulations, PF (Provident Fund), ESIC (Employee State Insurance), and GST filings. We provide monthly compliance receipts along with our commercial invoice.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F7F9FC] text-[#081B33]">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-6 mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
            Frequently Asked Questions.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold font-display text-[#081B33]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#081B33] text-white" : ""}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 px-6 md:px-8 text-xs md:text-sm text-gray-500 leading-relaxed font-light border-t border-gray-50 pt-4">
                        {faq.a}
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
