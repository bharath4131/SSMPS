"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = "security" | "housekeeping" | "facility" | "multiple" | "general";

type ContactFormValues = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
  botField: string;
};

export default function Contact() {
  const [selectedService, setSelectedService] = useState<ServiceType>("security");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      organization: "",
      phone: "",
      email: "",
      location: "",
      requirement: "",
      botField: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot check
    if (data.botField) {
      setIsSubmitted(true); // Quietly ignore spambots
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    const serviceLabels: Record<ServiceType, string> = {
      security: "Security Services",
      housekeeping: "Housekeeping",
      facility: "Facility Management",
      multiple: "Multiple Services",
      general: "Discuss My Requirement",
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
          service: serviceLabels[selectedService],
          location: data.location,
          message: data.requirement,
          inquirySource: "Homepage Contact Section",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(result.error || "An error occurred while submitting your inquiry.");
      }
    } catch (err) {
      setSubmitError("Failed to connect to the server. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions: { value: ServiceType; label: string }[] = [
    { value: "security", label: "Security Services" },
    { value: "housekeeping", label: "Housekeeping" },
    { value: "facility", label: "Facility Management" },
    { value: "multiple", label: "Multiple Services" },
    { value: "general", label: "General Discussion" },
  ];

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#081B33] text-white relative">
      {/* Background ambient decoration */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E3A5F]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#C41E3A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C41E3A] block">
            Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white uppercase leading-none">
            What can we help your <br className="hidden sm:inline" />
            organization with?
          </h2>
          <div className="h-[2px] w-20 bg-[#C41E3A] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:9002570891"
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#C41E3A]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Call Operations</h4>
                    <p className="text-sm font-bold text-white mt-1">9002570891</p>
                  </div>
                </a>

                <a
                  href="mailto:ssmps1991@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#C41E3A]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email Inquiries</h4>
                    <p className="text-sm font-bold text-white mt-1">ssmps1991@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10">
                  <div className="w-10 h-10 rounded bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Registered Office</h4>
                    <p className="text-xs text-gray-200 mt-1 leading-relaxed">
                      Above raja medical, Beside saidabad bustand, madannapet mandi, Hyderabad, Telangana - 500059.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Factual Statement */}
            <div className="border-t border-white/5 pt-6 mt-6">
              <span className="text-[9px] uppercase tracking-widest text-gray-500 block">Service Territory</span>
              <span className="text-xs text-gray-300 font-medium mt-1 block">Deployments actively managed across Telangana &amp; Andhra Pradesh.</span>
            </div>
          </div>

          {/* Right Column: Custom Form */}
          <div className="lg:col-span-7 bg-[#1E3A5F]/10 border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold font-display text-white uppercase tracking-wider">
                Submit Proposal Inquiry
              </h3>

              {/* Service options selector */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                  Select Capabilities Required
                </span>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelectedService(opt.value)}
                      className={`px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                        selectedService === opt.value
                          ? "bg-[#C41E3A] border-[#C41E3A] text-[#081B33]"
                          : "border-white/10 text-gray-300 hover:border-white/30 bg-white/5"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Status Messages */}
              <AnimatePresence mode="wait">
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/35 flex items-center gap-3 text-green-400 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>Inquiry processed successfully. Our operations coordinator will contact your representative shortly.</span>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/35 flex items-center gap-3 text-red-400 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inquiry fields */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    tabIndex={-1}
                    {...register("botField")}
                    placeholder="Leave empty"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("name", { required: "Name is required" })}
                      className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                      }`}
                      placeholder="Contact Name"
                    />
                    {errors.name && (
                      <span className="text-[9px] text-red-400 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Organization field */}
                  <div className="space-y-1">
                    <label htmlFor="organization" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      aria-invalid={errors.organization ? "true" : "false"}
                      {...register("organization", { required: "Organization is required" })}
                      className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors ${
                        errors.organization ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                      }`}
                      placeholder="Company Name"
                    />
                    {errors.organization && (
                      <span className="text-[9px] text-red-400 block">{errors.organization.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      aria-invalid={errors.phone ? "true" : "false"}
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9\s+-]{10,15}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                      className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                      }`}
                      placeholder="e.g. 9002570891"
                    />
                    {errors.phone && (
                      <span className="text-[9px] text-red-400 block">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                      }`}
                      placeholder="email@organization.com"
                    />
                    {errors.email && (
                      <span className="text-[9px] text-red-400 block">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Location field */}
                <div className="space-y-1">
                  <label htmlFor="location" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Deployment Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    aria-invalid={errors.location ? "true" : "false"}
                    {...register("location", { required: "Location is required" })}
                    className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors ${
                      errors.location ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                    }`}
                    placeholder="e.g. Madhapur, Hyderabad or Visakhapatnam"
                  />
                  {errors.location && (
                    <span className="text-[9px] text-red-400 block">{errors.location.message}</span>
                  )}
                </div>

                {/* Requirement field */}
                <div className="space-y-1">
                  <label htmlFor="requirement" className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Describe Requirements
                  </label>
                  <textarea
                    id="requirement"
                    rows={4}
                    aria-invalid={errors.requirement ? "true" : "false"}
                    {...register("requirement", { required: "Requirement description is required" })}
                    className={`w-full bg-white/5 border rounded px-3 py-2.5 text-xs text-white focus:outline-none transition-colors resize-none ${
                      errors.requirement ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C41E3A]"
                    }`}
                    placeholder="Roster frequencies, guard shift timings, or cleaning area square footage"
                  />
                  {errors.requirement && (
                    <span className="text-[9px] text-red-400 block">{errors.requirement.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C41E3A] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs uppercase tracking-widest rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Proposal Request</span>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
