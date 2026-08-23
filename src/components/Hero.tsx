"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  onOpenQuote?: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const titleWords = ["Protecting", "What", "Keeps", "You", "Moving."];

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#081B33]"
    >
      {/* Cinematic Ambient Backdrop Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1600&auto=format&fit=crop"
          alt="SSMPS Cinematic Corporate Workspace"
          fill
          priority
          sizes="100vw"
          className={`object-cover opacity-35 ${
            shouldReduceMotion ? "" : "scale-105 animate-[pulse_10s_infinite_alternate]"
          }`}
        />
        {/* Dark Vignette Overlay and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full flex flex-col justify-between min-h-[85vh]">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          
          {/* Headline & Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tagline */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C41E3A]/20 bg-[#C41E3A]/5 text-[#C41E3A] text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-ping" />
              YOU TRUST. WE SERVE.
            </motion.div>

            {/* Typography-Led Headline Reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08] uppercase">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3 pb-2">
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={textRevealVariants}
                    transition={{ delay: i * 0.1 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Sub-Headline description */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm md:text-base text-gray-300 font-light max-w-xl leading-relaxed"
            >
              Security, Housekeeping and Facility Management solutions for organizations that value reliability, discipline and professional service.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/request-proposal"
                className="px-6 py-4 bg-[#C41E3A] hover:bg-[#AA771C] text-[#081B33] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/services"
                className="px-6 py-4 border border-white/20 hover:border-white/40 text-white hover:bg-white/5 text-xs font-bold uppercase tracking-wider rounded transition-all text-center cursor-pointer"
              >
                Explore Capabilities
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Bottom Trust Indicators Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-12 text-white"
        >
          {/* Est 2021 */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Established</span>
              <span className="text-xs font-bold font-display uppercase tracking-wide mt-0.5 block">Year 2021</span>
            </div>
          </div>

          {/* Active Presence */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
              <MapPin className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Presence</span>
              <span className="text-xs font-bold font-display uppercase tracking-wide mt-0.5 block">TS &amp; Andhra Pradesh</span>
            </div>
          </div>

          {/* Growth */}
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
              <TrendingUp className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Growth</span>
              <span className="text-xs font-bold font-display uppercase tracking-wide mt-0.5 block">Southern India Expansion</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
