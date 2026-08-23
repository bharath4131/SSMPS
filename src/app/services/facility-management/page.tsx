"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Settings, Zap, Droplets, UserPlus, Coffee, Building, Loader2, CheckCircle2, AlertCircle, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FacilityInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  staffCount: string;
  contractTerm: string;
  staffCategory: string;
  notes: string;
  botField: string;
};

export default function FacilityManagementServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCoordIdx, setActiveCoordIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FacilityInquiryValues>({
    defaultValues: {
      organization: "",
      contactName: "",
      email: "",
      phone: "",
      staffCount: "1-3",
      contractTerm: "Long Term",
      staffCategory: "Electrician Plumber",
      notes: "",
      botField: "",
    },
  });

  const onSubmit = async (data: FacilityInquiryValues) => {
    if (data.botField) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          phone: data.phone,
          company: data.organization,
          service: "Facility Management",
          location: "Not Specified",
          message: `Staff Count: ${data.staffCount}. Term: ${data.contractTerm}. Category: ${data.staffCategory}. Notes: ${data.notes}`,
          inquirySource: "Facility Page Form",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(result.error || "Failed to submit proposal request.");
      }
    } catch (err) {
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const facilityServicesList = [
    { 
      icon: Zap, 
      title: "Operational Coordination", 
      desc: "Coordinating day-to-day operations and utility schedules to ensure smooth site functionality." 
    },
    { 
      icon: Droplets, 
      title: "Planning & Roster Support", 
      desc: "Environment-specific service planning and roster alignment to prevent vacancy coverage gaps." 
    },
    { 
      icon: UserPlus, 
      title: "Support Desk Services", 
      desc: "Providing front-desk routing support, visitor log management, and service continuity." 
    },
    { 
      icon: Coffee, 
      title: "Pantry Support", 
      desc: "Delivering support for boardroom refreshment areas and meeting layouts." 
    },
    { 
      icon: Building, 
      title: "Service Continuity", 
      desc: "Ensuring site systems are checked and maintained through operational supervision." 
    },
  ];

  const workflowSteps = [
    { num: "01", step: "Environment", desc: "Understand your layout details and general site support requirements." },
    { num: "02", step: "Planning", desc: "Map required duty shifts and scheduling requirements." },
    { num: "03", step: "Coordination", desc: "Align standard service checkouts and support guidelines." },
    { num: "04", step: "Support", desc: "Deploy the coordinated crew and set up daily schedules." },
    { num: "05", step: "Continuity", desc: "Our supervisors review attendance and manage leaves diligently." },
  ];

  const facilityFaqs = [
    { 
      q: "How do you ensure service quality?", 
      a: "All deployed personnel undergo background checkouts and receive practical instruction guidelines before deployment." 
    },
    { 
      q: "Do you cover statutory compliance receipts?", 
      a: "Yes. All monthly invoices are processed in full compliance with state labor and administrative laws." 
    },
    { 
      q: "How do you manage roster absenteeism?", 
      a: "We maintain reserve personnel to ensure prompt replacements in case of scheduled leaves, keeping services continuous." 
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#081B33] min-h-screen pt-24">
        
        {/* Service Hero Banner */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#F7F9FC] border-b border-[#081B33]/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.05)_0%,#F7F9FC_90%)] z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C41E3A]/20 bg-[#C41E3A]/5 text-[#C41E3A] text-[10px] font-bold uppercase tracking-widest">
              <Settings className="w-4 h-4 text-[#C41E3A]" />
              <span>Facility Management Division</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-[#081B33] leading-tight uppercase">
              Better Facilities Require <br />
              Better Coordination.
            </h1>
            <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto" />
            <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              We provide outsourced utility staff, certified technicians, and administrative support on flexible corporate contracts.
            </p>
          </div>
        </section>

        {/* Workflow Visual System Diagram */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                Visual Workflow System
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#081B33] uppercase">
                Facility Coordination Loop
              </h2>
              <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {/* Horizontal line for desktop blueprint look */}
              <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-gray-100 -z-10 hidden md:block" />

              {workflowSteps.map((ws, idx) => (
                <div key={idx} className="bg-[#F7F9FC] p-6 rounded-2xl border border-gray-100 space-y-3 shadow-sm relative">
                  <div className="w-8 h-8 rounded-full bg-[#081B33] text-white flex items-center justify-center text-xs font-bold font-display">
                    {ws.num}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#081B33] font-display pt-2">
                    {ws.step}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-light leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Directory */}
        <section className="py-24 bg-[#F7F9FC] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#081B33] uppercase">
                Utility Staffing Catalog
              </h2>
              <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            </div>

            {/* Service Coordination Explorer */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 border-b border-gray-100 pb-4 mb-8">
              {facilityServicesList.map((srv, idx) => {
                const Icon = srv.icon;
                const isActive = activeCoordIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCoordIdx(idx)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C41E3A] ${
                      isActive 
                        ? "bg-[#081B33] text-white border-transparent shadow-md" 
                        : "bg-white border-gray-200 text-gray-500 hover:text-[#081B33] hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-2 stroke-[1.5]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest font-display">
                      {srv.title.replace(" Services", "").replace(" & Roster Support", "").replace(" Support", "")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Coordinator Details Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 min-h-[180px] relative overflow-hidden shadow-sm">
              <div className="absolute -right-6 -bottom-10 text-[100px] opacity-[0.02] pointer-events-none select-none font-bold text-[#081B33]">
                {activeCoordIdx + 1}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCoordIdx}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#C41E3A]/5 text-[#C41E3A] flex items-center justify-center">
                      {(() => {
                        const CoordIcon = facilityServicesList[activeCoordIdx].icon;
                        return <CoordIcon className="w-4 h-4" />;
                      })()}
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#081B33] uppercase tracking-wider">
                      {facilityServicesList[activeCoordIdx].title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl">
                    {facilityServicesList[activeCoordIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Inquiry Builder Form */}
        <section className="py-24 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C41E3A]">
                  Proposal Desk
                </span>
                <h2 className="text-3xl font-bold font-display tracking-tight text-white uppercase leading-none">
                  Request Facility Proposal.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Enter your utility support requirements and roster intervals below. Our contract desk supervisor will formulate a proposal.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/15 text-xs text-gray-300 leading-relaxed">
                <strong>Statutory Compliance:</strong> We verify all workers assigned are registered in state labor department databases, ESIC, and PF channels.
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl border border-white/5 bg-[#1E3A5F]/5 shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/35 flex items-center gap-3 text-green-400 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Facility proposal request submitted. Our coordinator will contact your representative.</span>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/35 flex items-center gap-3 text-red-400 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" tabIndex={-1} {...register("botField")} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Company / Organization *</label>
                    <input
                      id="organization"
                      type="text"
                      aria-invalid={errors.organization ? "true" : "false"}
                      {...register("organization", { required: "Organization is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C41E3A]"
                      placeholder="Company"
                    />
                    {errors.organization && <p className="text-[10px] text-red-400 mt-1">{errors.organization.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Contact Person Name *</label>
                    <input
                      id="contactName"
                      type="text"
                      aria-invalid={errors.contactName ? "true" : "false"}
                      {...register("contactName", { required: "Contact name is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C41E3A]"
                      placeholder="Name"
                    />
                    {errors.contactName && <p className="text-[10px] text-red-400 mt-1">{errors.contactName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Email *</label>
                    <input
                      id="email"
                      type="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email", { required: "Email is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C41E3A]"
                      placeholder="name@company.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      aria-invalid={errors.phone ? "true" : "false"}
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#C41E3A]"
                      placeholder="e.g. 9002570891"
                    />
                    {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="staffCount" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Staff Required</label>
                    <select
                      id="staffCount"
                      {...register("staffCount")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#C41E3A] text-white"
                    >
                      <option value="1-3">1 - 3 Persons</option>
                      <option value="4-10">4 - 10 Persons</option>
                      <option value="10+">10+ Persons</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contractTerm" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Contract Term</label>
                    <select
                      id="contractTerm"
                      {...register("contractTerm")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#C41E3A] text-white"
                    >
                      <option value="Long Term">Long-Term Contract</option>
                      <option value="Short Term Project">Short-Term Project</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="staffCategory" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Staff Category</label>
                    <select
                      id="staffCategory"
                      {...register("staffCategory")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#C41E3A] text-white"
                    >
                      <option value="Technical Support">Technical Support / Maintenance</option>
                      <option value="Reception Support">Reception Support / Admin</option>
                      <option value="Pantry Support">Pantry Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Roster Details / Notes</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Describe your site details or specific scheduling requirements..."
                    {...register("notes")}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#C41E3A] text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C41E3A] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs uppercase tracking-widest rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Request...</span>
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
        <section className="py-24 bg-white text-[#081B33]">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                Common Questions
              </h2>
              <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {facilityFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-[#F7F9FC] border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-bold font-display text-[#081B33] uppercase tracking-wider">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-lg bg-[#081B33]/5 text-[#C41E3A] flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#081B33] text-white" : ""}`}>
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
                          <div className="pb-6 px-6 md:px-8 text-xs md:text-sm text-gray-500 leading-relaxed font-light border-t border-gray-150 pt-4">
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
    </>
  );
}
