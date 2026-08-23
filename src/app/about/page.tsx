"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const timeline = [
    { year: "2021", label: "Establishment", desc: "SS ManPower Solutions established. Commenced operations in Hyderabad focusing on commercial utility services." },
    { year: "Today", label: "Active Regional Deployment", desc: "Serving 25+ enterprise clients across Telangana and Andhra Pradesh with active supervisory posts." },
    { year: "Next", label: "Strategic Expansion", desc: "Expanding operational and management infrastructure to cover adjacent markets across Southern India." },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33]">
        {/* ACT 1 Hero: Dark Authority */}
        <section className="relative py-28 md:py-40 bg-[#081B33] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="B2B Corporate Infrastructure"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[#081B33]/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Service is a Responsibility
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight uppercase max-w-4xl">
              About SSMPS.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37]" />
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl leading-relaxed">
              We provide the discipline, personnel training, and on-site oversight required to secure assets and manage hygiene standards for corporate and residential organizations.
            </p>
          </div>
        </section>

        {/* ACT 2: Light Editorial Narrative */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Who We Are */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                  Who We Are
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                  Supporting the environments behind everyday business operations.
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Established in 2021, SS ManPower Solutions (SSMPS) provides specialized Security, Housekeeping, and Facility Management services. We manage the operational details—roster planning, supervision checkpoints, regulatory compliance—so your team can focus on its core goals.
                </p>
              </div>

              {/* Right Column: Timeline Chapters */}
              <div className="lg:col-span-7 space-y-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block mb-4">
                  Operational Timeline
                </span>
                <div className="space-y-6 border-l border-gray-100 pl-6 ml-2">
                  {timeline.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeUp}
                      className="relative space-y-1"
                    >
                      {/* Node point */}
                      <span className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border-2 border-white" />
                      <div className="text-lg font-bold font-display text-[#081B33]">
                        {item.year}
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 bg-[#F7F9FC]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                Core Governance Principles
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Trust", desc: "Building client confidence through absolute financial, administrative, and legal compliance.", icon: Award },
                { title: "Responsibility", desc: "Minimizing risk through on-site post instructions and supervised attendance management.", icon: ShieldCheck },
                { title: "Discipline", desc: "Establishing strict duty protocols, operational uniform codes, and checklist adherence.", icon: Users },
                { title: "Service", desc: "Adapting our capabilities to match corporate, commercial, and residential environments.", icon: MapPin },
              ].map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <div className="w-10 h-10 rounded bg-[#081B33]/5 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest font-display text-[#081B33]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-[#081B33] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.4)_0%,#081B33_80%)] z-0" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display uppercase tracking-wider">
              Ready to Discuss Your Operations?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-lg mx-auto">
              Connect with our Hyderabad office to schedule a site walkthrough and receive a customized service proposal.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/request-proposal"
                className="px-6 py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
