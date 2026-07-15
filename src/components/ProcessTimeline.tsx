"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, ClipboardList, Send, ShieldAlert, Activity, HeartHandshake } from "lucide-react";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const steps = [
    {
      icon: ClipboardList,
      title: "1. Corporate Consultation",
      desc: "Our Hyderabad managers sit with your leadership to audit current operations, assess risk levels, and define housekeeping frequencies.",
    },
    {
      icon: FileText,
      title: "2. Site Inspection",
      desc: "We perform a thorough site walkthrough to identify vulnerabilities, measure square footage, and optimize guard posts/patrol loops.",
    },
    {
      icon: Send,
      title: "3. Strategic Proposal",
      desc: "We issue a granular commercial bid specifying guard schedules, cleaning chemicals compliance, and manpower billing breakdowns.",
    },
    {
      icon: ShieldAlert,
      title: "4. Rapid Deployment",
      desc: "Following contract signing, we mobilize the team. All staff receive site-specific training and verify post instructions.",
    },
    {
      icon: Activity,
      title: "5. Real-Time Monitoring",
      desc: "Our control center logs guard patrols. Field officers perform surprise midnight audits, and housekeeping managers review checklists.",
    },
    {
      icon: HeartHandshake,
      title: "6. Continuous Support",
      desc: "We assign a dedicated account coordinator. Monthly SLA reviews and formal feedback loops guarantee sustained quality.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#081B33] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 md:mb-28">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Operational Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            How We Guarantee Flawless Execution.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
            From initial site audit to ongoing midnight audits, SSMPS follows a systematic approach to ensure safety and hygiene.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-[1px] pointer-events-none" />
          
          {/* Animated Gold Fill Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] to-[#AA771C] origin-top -translate-x-[1px] pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />

          {/* Steps Grid */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Space Holder for desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Bullet Indicator */}
                  <div className="absolute left-6 lg:left-1/2 w-10 h-10 -translate-x-5 flex items-center justify-center z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-xl bg-[#081B33] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg"
                    >
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </motion.div>
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#D4AF37]/20 transition-all duration-300 relative shadow-xl"
                    >
                      {/* Side pointer indicator for desktop */}
                      <div
                        className={`hidden lg:block absolute top-7 w-3 h-3 bg-[#1E3A5F]/10 border-t border-r border-white/5 rotate-45 ${
                          isEven
                            ? "-right-1.5 border-l-0 border-b-0 rotate-[45deg] border-[#D4AF37]/20"
                            : "-left-1.5 border-r-0 border-t-0 rotate-[225deg] border-[#D4AF37]/20"
                        }`}
                        style={{
                          backgroundColor: "#0d223d",
                        }}
                      />

                      <h3 className="text-lg font-bold font-display text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
