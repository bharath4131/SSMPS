"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldAlert, ShieldCheck, UserCheck, Video, Flame, Building, Factory, Home, Hospital, School, Calendar, Users, ChevronRight, ChevronLeft, Loader2, CheckCircle2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

type SecurityInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  guardCount: string;
  shifts: string;
  guardType: string;
  notes: string;
};

export default function SecurityServicePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SecurityInquiryValues>();

  const onSubmit = async (data: SecurityInquiryValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const securityServicesList = [
    { icon: Building, title: "Corporate Security", desc: "Access authorization, receptionist-guard duties, employee badge scans, and visitor routing for multinational offices and tech parks." },
    { icon: Factory, title: "Industrial Security", desc: "Material register audits, shipping dock supervision, perimeter fencing patrols, and multi-shift yard management for factories." },
    { icon: Home, title: "Residential Security", desc: "24/7 boundary patrols, CCTV perimeter scans, and visitor checks for luxury estates, bungalows, and private residences." },
    { icon: Building, title: "Apartment Security", desc: "Visitor tracking software logging, intercom confirmations, vehicle parking audits, and overnight guard rotations for gated societies." },
    { icon: Hospital, title: "Hospital Security", desc: "Management of high-traffic emergency units, patient safety zones, doctor escorts, crowd containment, and hospital assets protection." },
    { icon: School, title: "School Security", desc: "Background-screened security officers patrolling school grounds, regulating parent pick-ups, and conducting student safety audits." },
    { icon: Calendar, title: "Event Security", desc: "Temporary crowds management, VIP entry passes audits, emergency egress design, and physical boundary setups for seminars." },
    { icon: ShieldAlert, title: "Armed Guards", desc: "Government-licensed armed security marshals with clean records for high-risk zones, cash transit, and executive protection." },
    { icon: ShieldCheck, title: "Unarmed Guards", desc: "Highly disciplined guards trained under PSARA standard practices for access control, regular gate audits, and patrols." },
    { icon: UserCheck, title: "Bouncer Services", desc: "Physically commanding, trained security escorts for crowd control, event security checkpoints, and luxury corporate events." },
    { icon: Users, title: "VIP Protection", desc: "Bespoke close-protection details, high-threat security escorts, secure transit logistics, and route pre-clearance for executives." },
    { icon: Video, title: "CCTV Monitoring", desc: "Certified telemetry control room dispatchers monitoring perimeter feeds, managing alarm diagnostics, and auditing logs." },
    { icon: Flame, title: "Fire Safety Officers", desc: "Certified safety wardens trained in hazard prevention, gas leakage response, commercial fire drills, and building evacuation." },
  ];

  const securityProcess = [
    { title: "Risk Assessment", desc: "Our supervisors inspect building entry pathways, boundary weak spots, and lockups to draft a threat profile." },
    { title: "Post Orders Creation", desc: "We author a detailed handbook (SOP) detailing daily log procedures, badge scanning, shift handovers, and emergency contacts." },
    { title: "Personnel Selection", desc: "Guards matching the physical and linguistic profile required for your site are handpicked from our verified talent pool." },
    { title: "Roster Deployment", desc: " Roster schedules are dispatched, post instructions are verified on-site, and duty officers establish communication lines." },
    { title: "Midnight Audits", desc: "Our regional patrol team conducts surprise midnight visits to verify guard alertness, logging reports on our dashboard." },
  ];

  const securityFaqs = [
    { q: "Is SSMPS compliant with PSARA regulations in Hyderabad?", a: "Yes. SS Man power solutions (SSMPS) holds a valid, active PSARA license issued by the Telangana state police department. All our security guards are deployed in full compliance with state uniform and training requirements." },
    { q: "What is the emergency response time in case of a site incident?", a: "Our 24/7 central control desk monitors active postings. In the event of a security breach or emergency, our mobile patrol supervisors are dispatched immediately, with an average site arrival time of under 30 minutes in Hyderabad." },
    { q: "Do your guards receive training in medical first aid and fire safety?", a: "Yes. Every guard undergoes periodic training drills covering basic life support (CPR), medical emergency calling protocols, and fire extinguisher operations. Our specialized Fire Safety Officers are certified for complex safety audits." },
  ];

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="bg-[#081B33] text-white min-h-screen pt-24">
        
        {/* Service Hero Banner */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.3)_0%,#081B33_90%)] z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#081B33]/60 backdrop-blur-md">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Elite Security Division
              </span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Commanding Protection.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] gold-text-glow">
                Absolute Vigilance.
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We operate under PSARA state licensing, supplying vetted corporate guards, patrol units, armed officers, and Remote CCTV dispatch services to safeguard critical resources in Hyderabad.
            </p>
          </div>
        </section>

        {/* Detailed Service Directory */}
        <section className="py-24 md:py-32 bg-white text-[#081B33]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Service Catalog
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
                13 Core Security Specializations.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityServicesList.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-2xl border border-gray-100 bg-[#F7F9FC] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-[#081B33] text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <h3 className="text-base font-bold font-display text-[#081B33]">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operational Process Timeline */}
        <section className="py-24 md:py-32 bg-[#F7F9FC] text-[#081B33] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Deployment SOP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
                Security Onboarding Roadmap.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {securityProcess.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative space-y-4">
                  <div className="absolute top-4 right-4 text-4xl font-extrabold text-[#D4AF37]/15">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold font-display text-[#081B33] pr-8">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sector-Specific Quote Builder Form */}
        <section className="py-24 md:py-32 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  Instant Bid Request
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                  Request Security Proposal.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Provide your estimated guard numbers and shifts below. Our Hyderabad compliance supervisor will draft a custom PSARA-compliant bid.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/15 text-xs text-gray-300 leading-relaxed">
                <strong>SLA Compliance Guarantee:</strong> We guarantee legal adherence to ESIC, PF, minimum wage structures, and state Private Security regulation laws.
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 glass-card-gold p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl bg-[#1E3A5F]/10">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-300 text-xs font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Security proposal request received. We will call you within 2 hours!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      placeholder="Company"
                      {...register("organization", { required: "Organization name is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.organization && <p className="text-[10px] text-red-400 mt-1">{errors.organization.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("contactName", { required: "Contact name is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.contactName && <p className="text-[10px] text-red-400 mt-1">{errors.contactName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      {...register("email", { required: "Email is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Phone *</label>
                    <input
                      type="tel"
                      placeholder="9002570891"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Guards Needed</label>
                    <select
                      {...register("guardCount")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="1-5">1 - 5 Guards</option>
                      <option value="6-15">6 - 15 Guards</option>
                      <option value="16-50">16 - 50 Guards</option>
                      <option value="50+">50+ Guards</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Daily Shifts</label>
                    <select
                      {...register("shifts")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Single (12h)">Single Shift (12h)</option>
                      <option value="Double (8h+8h)">Double Shift (8h x 2)</option>
                      <option value="Continuous (24h)">Continuous (24h x 7)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Guard Type</label>
                    <select
                      {...register("guardType")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Unarmed">Unarmed Guard</option>
                      <option value="Armed">Armed Marshal</option>
                      <option value="Bouncers">VIP Bouncers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Site Details / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your site, check-in lobby setup, or weapon needs..."
                    {...register("notes")}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs tracking-wider uppercase rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Proposal Request...</span>
                    </>
                  ) : (
                    <span>Submit Proposal Request</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-24 md:py-32 bg-[#F7F9FC] text-[#081B33]">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center space-y-6 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
                Security FAQ
              </span>
              <h2 className="text-3xl font-bold font-display tracking-tight text-[#081B33]">
                Critical Security Questions.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="space-y-4">
              {securityFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-bold font-display text-[#081B33]">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-lg bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#081B33] text-white" : ""}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
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

      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
