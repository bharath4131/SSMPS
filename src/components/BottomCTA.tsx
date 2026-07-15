"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface BottomCTAProps {
  onOpenQuote: () => void;
}

export default function BottomCTA({ onOpenQuote }: BottomCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 md:py-32 bg-[#081B33] text-white text-center overflow-hidden border-b border-white/5">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.4)_0%,#081B33_80%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight leading-tight max-w-2xl mx-auto">
          Need a Reliable Security &amp; Facility Management Partner?
        </h2>
        <p className="text-xs md:text-sm text-gray-300 max-w-lg mx-auto font-light leading-relaxed">
          Discuss your requirements with our team and receive a customized service proposal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs tracking-wider uppercase rounded shadow-lg shadow-[#D4AF37]/15 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer border border-[#D4AF37]"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <a
            href="#contact"
            className="px-8 py-4 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider uppercase rounded transition-all duration-300 text-center cursor-pointer"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}