"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface BrandArrivalProps {
  onComplete: () => void;
}

export default function BrandArrival({ onComplete }: BrandArrivalProps) {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if splash has already been shown in this session
    const hasVisited = sessionStorage.getItem("ssmps_has_visited");
    if (hasVisited) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("ssmps_has_visited", "true");
      onComplete();
    }, 2000); // 2 seconds absolute limit

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#081B33] z-[9999] flex flex-col items-center justify-center text-white select-none"
        >
          <div className="max-w-xs flex flex-col items-center text-center space-y-6">
            {/* Shield Logo Reveal */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-28 h-28"
            >
              <Image
                src="/logo.png"
                alt="SSMPS Official Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Subtle Horizontal Scan Line */}
            {!shouldReduceMotion && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              />
            )}

            {/* Brand Commit Statement */}
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase"
              >
                YOU TRUST. WE SERVE.
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
