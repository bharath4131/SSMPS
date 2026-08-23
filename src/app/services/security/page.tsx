"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldCheck, Building, Factory, Home, Hospital, School, Loader2, CheckCircle2, AlertCircle, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SecurityInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  guardCount: string;
  shifts: string;
  notes: string;
  botField: string;
};

export default function SecurityServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SecurityInquiryValues>({
    defaultValues: {
      organization: "",
      contactName: "",
      email: "",
      phone: "",
      guardCount: "1-5",
      shifts: "Single (12h)",
      notes: "",
      botField: "",
    },
  });

  const onSubmit = async (data: SecurityInquiryValues) => {
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
          service: "Security Services",
          location: "Not Specified",
          message: `Guards Needed: ${data.guardCount}. Shifts: ${data.shifts}. Notes: ${data.notes}`,
          inquirySource: "Security Page Form",
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

  const securityServicesList = [
    { 
      icon: Building, 
      title: "Corporate Support", 
      desc: "Providing professional security support, operational discipline, and reliable service coordination." 
    },
    { 
      icon: Factory, 
      title: "Industrial Support", 
      desc: "Environment-specific service planning, security support, and operational discipline for industrial zones." 
    },
    { 
      icon: Home, 
      title: "Residential Support", 
      desc: "Professional security support, service coordination, and operational discipline for communities." 
    },
    { 
      icon: Hospital, 
      title: "Healthcare Support", 
      desc: "Environment-specific service planning and professional security support customized for healthcare locations." 
    },
    { 
      icon: School, 
      title: "Education Support", 
      desc: "Reliable service coordination, operational discipline, and security support for campuses." 
    },
    { 
      icon: ShieldCheck, 
      title: "Operational Discipline", 
      desc: "Deployment of personnel focused on environment-specific service planning and professional security support." 
    },
  ];

  const securityProcess = [
    { title: "Discuss Requirement", desc: "Coordinate on site parameters, shift preferences, and general planning expectations." },
    { title: "Assess Environment", desc: "Review the site layout to establish environment-specific service planning criteria." },
    { title: "Roster Planning", desc: "Structure personnel schedules to meet reliable service coordination objectives." },
    { title: "Deploy & Coordinate", desc: "Initialize service schedules and establish operational supervisor coordination lines." },
    { title: "Supervision Review", desc: "Conduct routine checking of attendance logs to maintain high operational discipline." },
  ];

  /*
   * VERIFICATION REQUIRED:
   * The following FAQ block references state compliance rules and licensing.
   * If credentials are not verified, keep these visual descriptions neutral.
   */
  const securityFaqs = [
    { 
      q: "How do you ensure service standards?", 
      a: "Our personnel undergo training programs focusing on operational discipline, environment-specific service planning, and reliable service coordination." 
    },
    { 
      q: "How are roster absenteeism and shift handovers managed?", 
      a: "We coordinate shifts diligently. In case of leaves, our supervisors work to ensure roster compliance and continuous support coverage." 
    },
    { 
      q: "Do you have supervisors check the sites?", 
      a: "Yes, our operational supervision team conducts routine visits to verify attendance and compliance with client instructions." 
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#081B33] text-white min-h-screen pt-24">
        
        {/* Service Hero Banner */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.25)_0%,#081B33_90%)] z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>Security Operations Division</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white leading-tight uppercase">
              Security That <br />
              Supports Confidence.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We deploy disciplined, trained personnel to safeguard properties, manage visitor audits, and maintain operational stability.
            </p>
          </div>
        </section>

        {/* Detailed Service Directory */}
        <section className="py-24 bg-[#081B33] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
                Offerings
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white uppercase">
                Guarding Capabilities
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityServicesList.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl border border-white/5 bg-[#1E3A5F]/10 flex flex-col justify-between min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <h3 className="text-base font-bold font-display text-white uppercase tracking-wider">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
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
        <section className="py-24 bg-[#0c223d] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
                Implementation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white uppercase">
                Onboarding Framework
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {securityProcess.map((step, idx) => (
                <div key={idx} className="bg-[#081B33] p-6 rounded-2xl border border-white/5 relative space-y-4">
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-[#D4AF37]/10">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold font-display text-white uppercase tracking-wider pr-8">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Builder Form */}
        <section className="py-24 bg-[#081B33]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                  Inquiry Center
                </span>
                <h2 className="text-3xl font-bold font-display tracking-tight text-white uppercase leading-none">
                  Request Security Proposal.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Provide details about your required guard counts and roster schedules. Our operations coordinator will analyze your layout and draft a proposal.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/10 text-xs text-gray-300 leading-relaxed">
                <strong>Supervision Assurance:</strong> Deployed personnel are monitored by active mobile supervisors who report logs to our management offices.
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
                    <span>Proposal request submitted. Our coordinator will contact your representative shortly.</span>
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
                    <label htmlFor="guardCount" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Estimated Guards Required</label>
                    <select
                      id="guardCount"
                      {...register("guardCount")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="1-5">1 - 5 Guards</option>
                      <option value="6-15">6 - 15 Guards</option>
                      <option value="16-50">16 - 50 Guards</option>
                      <option value="50+">50+ Guards</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="shifts" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Daily Shifts</label>
                    <select
                      id="shifts"
                      {...register("shifts")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Single (12h)">Single Shift (12h)</option>
                      <option value="Double (8h+8h)">Double Shift (8h x 2)</option>
                      <option value="Continuous (24h)">Continuous (24h x 7)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Site Details / Notes</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly describe your site, check-in lobby setup, or specific post rules..."
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
        <section className="py-24 bg-[#0c223d] text-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white uppercase">
                Common Questions
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {securityFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-[#081B33] border border-white/5 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-bold font-display text-white uppercase tracking-wider">{faq.q}</span>
                      <div className={`w-8 h-8 rounded bg-white/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#D4AF37] text-[#081B33]" : ""}`}>
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
                          <div className="pb-6 px-6 md:px-8 text-xs md:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5 pt-4">
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
