"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function RealPeople() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 md:py-36 bg-white text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="space-y-4 mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
            Operations In Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#081B33] uppercase">
            Real People. <br className="xs:hidden" />
            Real Responsibility.
          </h2>
          <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
        </div>

        {/* Editorial Overlapping Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold font-display text-[#081B33] uppercase tracking-wider">
              Human-Centric Service Delivery
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
              We believe quality is driven by on-site accountability. Our managers conduct active post-deployment checks and coordinate shift transfers directly to ensure that personnel are alert and perform tasks according to client SOPs.
            </p>
            <div className="border-t border-[#081B33]/5 pt-4">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                Standard Protocols
              </span>
              <span className="text-[11px] text-[#081B33] font-semibold mt-1 block">
                Active Site Audits &amp; Digital Attendance Records
              </span>
            </div>
          </div>

          {/* Right Image Cluster (Controlled Overlap) */}
          <div className="lg:col-span-8 grid grid-cols-12 gap-4 relative min-h-[400px] md:min-h-[500px]">
            
            {/* Dominant Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="col-span-8 relative aspect-video sm:aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100 z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                alt="SSMPS Corporate Client Office Environment"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#081B33]/80 backdrop-blur-md px-3 py-1.5 rounded text-[9px] uppercase tracking-widest text-white">
                Workspace Cleanliness
              </div>
            </motion.div>

            {/* Overlapping Top-Right Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-gray-100 z-20 self-end -translate-y-12 -translate-x-6 hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136368-1a4682885df9?q=80&w=600&auto=format&fit=crop"
                alt="SSMPS Technical Supervisor Coordination"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#081B33]/80 backdrop-blur-md px-3 py-1.5 rounded text-[9px] uppercase tracking-widest text-white">
                On-Site Audits
              </div>
            </motion.div>

            {/* Overlapping Bottom-Center Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="col-span-5 relative aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-100 z-30 -translate-y-8 translate-x-12 hidden md:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                alt="SSMPS Clean Exterior Building Operations"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#081B33]/80 backdrop-blur-md px-3 py-1.5 rounded text-[9px] uppercase tracking-widest text-white">
                Facility Infrastructure
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
