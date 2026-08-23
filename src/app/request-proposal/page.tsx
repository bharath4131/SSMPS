"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, ChevronLeft, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

type ProposalFormValues = {
  serviceType: "security" | "housekeeping" | "facility" | "multiple";
  organization: string;
  location: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  botField: string;
};

export default function RequestProposalPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<ProposalFormValues>({
    defaultValues: {
      serviceType: "security",
      organization: "",
      location: "",
      notes: "",
      name: "",
      email: "",
      phone: "",
      botField: "",
    },
  });

  const nextStep = async () => {
    // Validate current step fields before going next
    let fieldsToValidate: (keyof ProposalFormValues)[] = [];
    if (step === 1) fieldsToValidate = ["serviceType"];
    else if (step === 2) fieldsToValidate = ["organization", "location"];
    else if (step === 3) fieldsToValidate = ["notes"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ProposalFormValues) => {
    if (data.botField) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    const serviceLabels = {
      security: "Security Services",
      housekeeping: "Housekeeping Services",
      facility: "Facility Management",
      multiple: "Multiple Services Portfolio",
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.organization,
          service: serviceLabels[data.serviceType],
          location: data.location,
          message: data.notes,
          inquirySource: "Proposal Funnel Page",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
        setStep(1);
      } else {
        setSubmitError(result.error || "Failed to submit request.");
      }
    } catch (err) {
      setSubmitError("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceType = watch("serviceType");
  const percentComplete = (step / 4) * 100;

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33] pt-24 min-h-screen flex flex-col">
        
        {/* Banner Hero */}
        <section className="py-16 bg-[#081B33] text-white">
          <div className="max-w-4xl mx-auto px-6 space-y-4 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C41E3A]">
              Proposal Portal
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-wider">
              Request a B2B Proposal
            </h1>
            <p className="text-xs text-gray-300 font-light max-w-md mx-auto">
              Provide your details in this 4-step form to help our operations coordinators analyze your site requirements.
            </p>
          </div>
        </section>

        {/* Wizard Container */}
        <section className="py-12 flex-grow flex justify-center items-center px-6">
          <div className="max-w-2xl w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[450px]">
            
            {/* Top Progress Bar */}
            <div className="w-full bg-gray-50 h-2 relative">
              <div
                className="bg-[#C41E3A] h-full transition-all duration-300"
                style={{ width: `${percentComplete}%` }}
              />
            </div>

            {/* Inner Content Form */}
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              
              {/* Form Alerts */}
              <AnimatePresence mode="wait">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 mb-6 rounded-xl bg-green-500/10 border border-green-500/35 flex items-center gap-3 text-green-700 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Proposal request recorded successfully. We will analyze your inputs and contact you.</span>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/35 flex items-center gap-3 text-red-700 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-grow flex flex-col justify-between">
                
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" tabIndex={-1} {...register("botField")} />
                </div>

                {/* Wizard steps switch */}
                <div className="flex-grow">
                  
                  {/* Step 1: Service Selection */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <h2 className="text-sm font-bold uppercase tracking-widest text-[#081B33] border-b border-gray-100 pb-2">
                        Step 1: Choose Service Capability
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { value: "security", label: "Security Services", desc: "Access screening, gate audits, and shift patrollers." },
                          { value: "housekeeping", label: "Housekeeping", desc: "Premises sanitizing, daily floor care, and washroom upkeep." },
                          { value: "facility", label: "Facility Management", desc: "Outsourced electricians, plumbers, and reception hosts." },
                          { value: "multiple", label: "Multiple Capabilities", desc: "Coordinating combined utility contracts." },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`p-4 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                              serviceType === opt.value
                                ? "bg-[#081B33] border-[#081B33] text-white"
                                : "border-gray-200 text-[#081B33] hover:border-gray-300 bg-[#F7F9FC]"
                            }`}
                          >
                            <input
                              type="radio"
                              value={opt.value}
                              className="sr-only"
                              {...register("serviceType", { required: true })}
                            />
                            <span className="text-xs font-bold uppercase tracking-wider block">
                              {opt.label}
                            </span>
                            <span className={`text-[10px] mt-1 block leading-relaxed ${
                              serviceType === opt.value ? "text-gray-300" : "text-gray-500"
                            }`}>
                              {opt.desc}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Organization Info */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <h2 className="text-sm font-bold uppercase tracking-widest text-[#081B33] border-b border-gray-100 pb-2">
                        Step 2: Organization Details
                      </h2>
                      
                      <div className="space-y-3">
                        <label htmlFor="organization" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Company / Organization Name *
                        </label>
                        <input
                          id="organization"
                          type="text"
                          className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="e.g. Acme Tech Solutions"
                          {...register("organization", { required: "Organization name is required" })}
                        />
                        {errors.organization && <p className="text-[10px] text-red-500">{errors.organization.message}</p>}
                      </div>

                      <div className="space-y-3">
                        <label htmlFor="location" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Deployment City / Zone *
                        </label>
                        <input
                          id="location"
                          type="text"
                          className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="e.g. Madhapur, Hyderabad or Guntur"
                          {...register("location", { required: "Location is required" })}
                        />
                        {errors.location && <p className="text-[10px] text-red-500">{errors.location.message}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Requirements */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <h2 className="text-sm font-bold uppercase tracking-widest text-[#081B33] border-b border-gray-100 pb-2">
                        Step 3: Site Specifications
                      </h2>

                      <div className="space-y-3">
                        <label htmlFor="notes" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          Outline Your Roster &amp; Staff Needs *
                        </label>
                        <textarea
                          id="notes"
                          rows={6}
                          className="w-full border border-gray-200 bg-gray-50 rounded p-3 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33] resize-none"
                          placeholder="Please detail required guard shifts, facility size (sqft), or electrician matrix requirements..."
                          {...register("notes", { required: "Specifications are required" })}
                        />
                        {errors.notes && <p className="text-[10px] text-red-500">{errors.notes.message}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact Details */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <h2 className="text-sm font-bold uppercase tracking-widest text-[#081B33] border-b border-gray-100 pb-2">
                        Step 4: Representative Contact
                      </h2>

                      <div className="space-y-3">
                        <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">Representative Name *</label>
                        <input
                          id="name"
                          type="text"
                          className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none"
                          placeholder="Contact Name"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-[10px] text-red-500">{errors.name.message}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">Corporate Email *</label>
                          <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none"
                            placeholder="name@company.com"
                            {...register("email", { required: "Email is required" })}
                          />
                          {errors.email && <p className="text-[10px] text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-3">
                          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">Phone Number *</label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none"
                            placeholder="e.g. 9002570891"
                            {...register("phone", { required: "Phone is required" })}
                          />
                          {errors.phone && <p className="text-[10px] text-red-500">{errors.phone.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* Wizard Navigation Actions */}
                <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-200 hover:border-gray-300 rounded text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-5 py-2.5 bg-[#081B33] hover:bg-[#1E3A5F] text-white rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-[#C41E3A] hover:bg-[#AA771C] text-[#081B33] rounded text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Proposal</span>
                      )}
                    </button>
                  )}
                </div>

              </form>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
