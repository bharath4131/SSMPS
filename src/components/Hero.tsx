"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, UserCheck, Clock, ArrowRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  // Master timeline staggering
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  const trustBadges = [
    { icon: Shield, text: "Professional Workforce" },
    { icon: UserCheck, text: "Customized Solutions" },
    { icon: Clock, text: "Operational Support" },
    { icon: Sparkles, text: "Multiple Service Categories" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#081B33]"
    >
      {/* Cinematic Ambient Backdrop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 pointer-events-none scale-105 select-none"
        src="https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf1862169560f4e3c153b8d4e5143329f60f64&profile_id=165&oauth2_token_id=57447761"
      />

      {/* Dark Luxury Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,27,51,0.4)_0%,#081B33_90%)] z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-[#081B33]/60 z-0" />

      {/* Parallax Floating Golden Rings/Spheres */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 md:left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-[80px] pointer-events-none z-0"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 md:right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#1E3A5F]/35 to-transparent blur-[100px] pointer-events-none z-0"
      />

      {/* Golden accent framing lines */}
      <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/5 pointer-events-none z-10 hidden md:block" />
      <div className="absolute top-12 left-12 bottom-12 right-12 border border-[#D4AF37]/5 pointer-events-none z-10 hidden md:block" />

      {/* Main Narrative Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32 w-full flex flex-col items-center justify-between min-h-[85vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-grow flex flex-col items-center justify-center space-y-10"
        >
          {/* Subheading Pill */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/20 bg-[#081B33]/80 backdrop-blur-lg shadow-xl shadow-black/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              SSMPS Global Operations
            </span>
          </motion.div>

          {/* Kinetic Headline Reveal */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.05] text-white">
              <div className="overflow-hidden inline-block py-2 pr-4">
                <motion.span variants={textRevealVariants} className="inline-block">
                  Protecting
                </motion.span>
              </div>
              <div className="overflow-hidden inline-block py-2 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] gold-text-glow">
                <motion.span variants={textRevealVariants} className="inline-block">
                  What Matters.
                </motion.span>
              </div>
              <br />
              <div className="overflow-hidden inline-block py-2 pr-4">
                <motion.span variants={textRevealVariants} className="inline-block">
                  Maintaining
                </motion.span>
              </div>
              <div className="overflow-hidden inline-block py-2">
                <motion.span variants={textRevealVariants} className="inline-block font-light italic">
                  Excellence.
                </motion.span>
              </div>
            </h1>
          </div>

          {/* Elegant Sub-Narrative */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm md:text-base text-gray-300 max-w-xl text-center font-light leading-relaxed tracking-wide opacity-80"
          >
            Delivering bespoke security details, clinical housekeeping protocols, and outsourcing solutions designed for large-scale corporate, industrial, and healthcare sectors.
          </motion.p>

          {/* Glowing Call-to-actions */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto items-center"
          >
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4.5 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs tracking-[0.15em] uppercase rounded shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer border border-[#D4AF37]"
            >
              <span>Bespoke Bid Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4.5 border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-[0.15em] uppercase rounded backdrop-blur-md transition-all duration-300 text-center cursor-pointer"
            >
              Explore Portfolio
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Trust Badges & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-white/5 pt-12 mt-12"
        >
          {/* Trust Badges */}
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-[#1E3A5F]/15 backdrop-blur-sm shadow-inner"
              >
                <div className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-200">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Cinematic Scroll indicator */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <a
              href="#about"
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]"
            >
              <span>Scroll to Explore</span>
              <div className="w-6 h-10 rounded-full border border-[#D4AF37]/45 flex justify-center p-1.5 relative overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
