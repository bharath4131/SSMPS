"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Shield, Briefcase, Percent } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  
  // Spring config for smooth luxury animation
  const springValue = useSpring(motionValue, {
    stiffness: 40,
    damping: 12,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-bold tracking-tight">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Active Personnel",
      desc: "Background-verified, certified, and fully deployed security and utility staff.",
    },
    {
      icon: Briefcase,
      value: 200,
      suffix: "+",
      label: "Enterprise Clients",
      desc: "IT parks, corporate houses, mnc, and residential gated communities in Hyderabad.",
    },
    {
      icon: Shield,
      value: 15,
      suffix: "+",
      label: "Years of Leadership",
      desc: "Operating since 1991, maintaining standards of excellence across generations.",
    },
    {
      icon: Percent,
      value: 98,
      suffix: "%",
      label: "Client Retention Rate",
      desc: "Our annual contract renewal rate reflects our commitment to SLA compliance.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#081B33] to-[#1E3A5F] text-white overflow-hidden">
      {/* Mesh Overlay */}
      <div className="absolute inset-0 bg-[#081B33]/60 backdrop-blur-[2px] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-[#081B33]/55 border border-white/5 shadow-xl flex flex-col justify-between hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
                    Verified Metric
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-4xl lg:text-5xl font-extrabold font-display text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <h4 className="text-sm font-bold tracking-wide font-display text-[#D4AF37] uppercase">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mt-2">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
