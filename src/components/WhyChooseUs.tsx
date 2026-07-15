"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldAlert, Zap, Banknote, Clock, Award } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: UserCheck,
      title: "Rigorous Background Verification",
      desc: "Every officer and cleaner undergoes criminal database checks, identity validation via national registers, and reference audits before deployment.",
    },
    {
      icon: ShieldAlert,
      title: "Certified & Trained Personnel",
      desc: "Our guards are trained under PSARA standard practices. Our cleaning crews complete certified disinfection modules.",
    },
    {
      icon: Zap,
      title: "Rapid Workforce Deployment",
      desc: "With a robust regional talent database in Hyderabad, we can deploy replacement staff or scale up manpower pools within 24 to 48 hours.",
    },
    {
      icon: Banknote,
      title: "Transparent & Competitive pricing",
      desc: "Zero hidden costs. We provide a granular monthly billing structure adhering to state minimum wage rules and statutory compliance.",
    },
    {
      icon: Clock,
      title: "24/7 Operational Support Desk",
      desc: "Our control desk works around the clock, providing real-time roster updates and immediate emergency dispatch.",
    },
    {
      icon: Award,
      title: "SLA-Backed Quality Assurance",
      desc: "We operate under strict Service Level Agreements. Monthly audit ratings and client checklists ensure consistent excellence.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-white text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Operational Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
              Setting the Benchmark for Professional Accountability.
            </h2>
            <div className="h-[2px] w-20 bg-[#D4AF37]" />
          </div>
          <div className="lg:col-span-5 text-gray-500 text-xs md:text-sm font-light leading-relaxed">
            We understand that hiring security and cleaning agencies is about trust and compliance. SSMPS guarantees absolute legal alignment, minimizing risk for your organization.
          </div>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl border border-gray-100 bg-[#F7F9FC] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#081B33] flex items-center justify-center text-[#D4AF37] shadow-inner">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display text-[#081B33]">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
