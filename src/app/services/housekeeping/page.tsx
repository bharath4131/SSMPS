"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Briefcase, Building, Layers, Brush, Wrench, Bath, Loader2, CheckCircle2, AlertCircle, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type HousekeepingInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  facilitySize: string;
  frequency: string;
  propertyType: string;
  notes: string;
  botField: string;
};

export default function HousekeepingServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HousekeepingInquiryValues>({
    defaultValues: {
      organization: "",
      contactName: "",
      email: "",
      phone: "",
      facilitySize: "",
      frequency: "Daily Routine",
      propertyType: "Office Corporate",
      notes: "",
      botField: "",
    },
  });

  const onSubmit = async (data: HousekeepingInquiryValues) => {
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
          service: "Housekeeping Services",
          location: "Not Specified",
          message: `Facility Size: ${data.facilitySize}. Frequency: ${data.frequency}. Property Type: ${data.propertyType}. Notes: ${data.notes}`,
          inquirySource: "Housekeeping Page Form",
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

  const housekeepingServicesList = [
    { 
      icon: Briefcase, 
      title: "Workspace Upkeep", 
      desc: "Providing professional housekeeping support to maintain clean and well-maintained environments." 
    },
    { 
      icon: Layers, 
      title: "Glass & Surface Care", 
      desc: "Consistent service delivery and surface upkeep customized to environment-specific requirements." 
    },
    { 
      icon: Brush, 
      title: "Floor & Carpet Care", 
      desc: "Routine cleaning support to maintain dust-free, clean, and well-maintained environments." 
    },
    { 
      icon: Wrench, 
      title: "General Maintenance Support", 
      desc: "Consistent service delivery for floor preservation and overall site tidiness." 
    },
    { 
      icon: Bath, 
      title: "Hygiene Maintenance", 
      desc: "Professional housekeeping support to establish hygienic, clean, and well-maintained environments." 
    },
    { 
      icon: Building, 
      title: "Common Area Care", 
      desc: "Managing general common zone cleaning matching environment-specific requirements." 
    },
  ];

  const housekeepingProcess = [
    { title: "Discussion", desc: "Understand facility parameters, shift preferences, and environment-specific requirements." },
    { title: "Planning", desc: "Formulate cleaning checklists to support consistent service delivery." },
    { title: "Roster Setup", desc: "Organize duty rosters to ensure professional housekeeping support coverage." },
    { title: "Coordination", desc: "Operational supervisors check on-site checklists to maintain standards." },
    { title: "Calibrate Support", desc: "Conduct regular reviews to adapt staffing support based on site requirements." },
  ];

  const housekeepingFaqs = [
    { 
      q: "What cleaning materials and tools do you use?", 
      a: "We utilize standard commercial cleaning tools and materials to ensure clean and well-maintained environments." 
    },
    { 
      q: "How do you verify your housekeeping staff?", 
      a: "Every staff candidate is subject to verification checks before on-site placement." 
    },
    { 
      q: "Can you supply sanitary consumables?", 
      a: "Yes, we can coordinate the supply of standard washroom consumables under the service agreement if requested." 
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-[#081B33] min-h-screen pt-24">
        
        {/* Service Hero Banner */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#F7F9FC] border-b border-[#081B33]/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,#F7F9FC_90%)] z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C41E3A]/20 bg-[#C41E3A]/5 text-[#C41E3A] text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#C41E3A]" />
              <span>Housekeeping Services</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-[#081B33] leading-tight uppercase">
              Clean Environments. <br />
              Consistent Standards.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            <p className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              We deploy trained housekeeping executives, certified cleaning supplies, and detailed checklists to maintain hygienic B2B spaces.
            </p>
          </div>
        </section>

        {/* Detailed Service Directory */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#081B33] uppercase">
                Hygiene Solutions
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {housekeepingServicesList.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl border border-gray-100 bg-[#F7F9FC] flex flex-col justify-between min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <h3 className="text-base font-bold font-display text-[#081B33] uppercase tracking-wider">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operational Process Timeline */}
        <section className="py-24 bg-[#F7F9FC] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                Workflow
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#081B33] uppercase">
                Quality Maintenance Loop
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {housekeepingProcess.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 relative space-y-4 shadow-sm">
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-[#D4AF37]/15">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold font-display text-[#081B33] uppercase tracking-wider pr-8">
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

        {/* Inquiry Builder Form */}
        <section className="py-24 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  Inquiry Desk
                </span>
                <h2 className="text-3xl font-bold font-display tracking-tight text-white uppercase leading-none">
                  Request Housekeeping proposal.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Enter your property size and desired cleaning intervals. Our corporate manager will coordinate a walkthrough check.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/15 text-xs text-gray-300 leading-relaxed">
                <strong>Service Standards:</strong> We align our housekeeping support to deliver clean and well-maintained environments matching site requirements.
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
                    <span>Housekeeping request submitted. Our coordinator will contact your representative.</span>
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
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
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
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
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
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
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
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      placeholder="e.g. 9002570891"
                    />
                    {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="facilitySize" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Facility Size (Sqft)</label>
                    <input
                      id="facilitySize"
                      type="text"
                      {...register("facilitySize", { required: "Size is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      placeholder="e.g. 15,000 sqft"
                    />
                    {errors.facilitySize && <p className="text-[10px] text-red-400 mt-1">{errors.facilitySize.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="frequency" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Cleaning Frequency</label>
                    <select
                      id="frequency"
                      {...register("frequency")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Daily Routine">Daily Routine Cleaning</option>
                      <option value="Alternate Days">Alternate Days</option>
                      <option value="Deep Clean Project">Deep Clean Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Site Details / Notes</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe floor materials, high-rise facade windows details..."
                    {...register("notes")}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs uppercase tracking-widest rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
        <section className="py-24 bg-[#F7F9FC] text-[#081B33]">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#081B33] uppercase">
                Hygiene Questions
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {housekeepingFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-bold font-display text-[#081B33] uppercase tracking-wider">{faq.q}</span>
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
    </>
  );
}
