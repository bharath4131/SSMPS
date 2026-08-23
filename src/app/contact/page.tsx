"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = "security" | "housekeeping" | "facility" | "general";

type ContactFormValues = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
  botField: string;
};

export default function ContactPage() {
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
    if (data.botField) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setSubmitError(null);

    const serviceLabels: Record<ServiceType, string> = {
      security: "Security Services",
      housekeeping: "Housekeeping Services",
      facility: "Facility Management",
      general: "General Inquiry",
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
          inquirySource: "Contact Page Form",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(result.error || "Failed to submit message.");
      }
    } catch (err) {
      setSubmitError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions: { value: ServiceType; label: string }[] = [
    { value: "security", label: "Security Services" },
    { value: "housekeeping", label: "Housekeeping" },
    { value: "facility", label: "Facility Management" },
    { value: "general", label: "General Discussion" },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#F7F9FC] text-[#081B33] pt-24">
        
        {/* Banner Hero */}
        <section className="py-24 bg-[#081B33] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 pt-12 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Contact Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight uppercase max-w-4xl mx-auto">
              Let's Talk About <br className="hidden sm:inline" />
              Your Requirements.
            </h1>
            <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto mt-4" />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Coordinates */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-display uppercase tracking-wider text-[#081B33]">
                    Corporate Offices
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-gray-100">
                      <div className="w-9 h-9 rounded bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Hyderabad HQ</span>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          Above raja medical, Beside saidabad bustand, madannapet mandi, Hyderabad, Telangana - 500059.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-gray-100">
                      <div className="w-9 h-9 rounded bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Call Support</span>
                        <a href="tel:9002570891" className="text-xs font-bold text-[#081B33] mt-1 block">9002570891</a>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 rounded-xl bg-[#F7F9FC] border border-gray-100">
                      <div className="w-9 h-9 rounded bg-[#081B33]/5 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Email Details</span>
                        <a href="mailto:ssmps1991@gmail.com" className="text-xs font-bold text-[#081B33] mt-1 block">ssmps1991@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mt-6 space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold block">Service Areas</span>
                  <span className="text-xs font-medium text-gray-600 block">Deployments actively managed across Telangana &amp; Andhra Pradesh.</span>
                  <span className="text-[10px] text-[#C41E3A] block font-semibold">Southern India Expansion Coverage</span>
                </div>
              </div>

              {/* Right Column: Custom Form */}
              <div className="lg:col-span-7 bg-[#F7F9FC] p-8 md:p-10 border border-gray-100 rounded-2xl">
                <div className="space-y-6">
                  <h2 className="text-lg font-bold font-display uppercase tracking-wider text-[#081B33]">
                    Submit Message
                  </h2>

                  {/* Selector */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                      Required Service Division
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setSelectedService(opt.value)}
                          className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                            selectedService === opt.value
                              ? "bg-[#081B33] border-[#081B33] text-white"
                              : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/35 flex items-center gap-3 text-green-700 text-xs"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Message submitted successfully. Our office coordinator will get in touch shortly.</span>
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/35 flex items-center gap-3 text-red-700 text-xs"
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
                        <label htmlFor="name" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Your Name *</label>
                        <input
                          id="name"
                          type="text"
                          aria-invalid={errors.name ? "true" : "false"}
                          {...register("name", { required: "Name is required" })}
                          className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="Contact Name"
                        />
                        {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Company / Organization *</label>
                        <input
                          id="organization"
                          type="text"
                          aria-invalid={errors.organization ? "true" : "false"}
                          {...register("organization", { required: "Organization name is required" })}
                          className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="Company"
                        />
                        {errors.organization && <p className="text-[10px] text-red-500 mt-1">{errors.organization.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Email *</label>
                        <input
                          id="email"
                          type="email"
                          aria-invalid={errors.email ? "true" : "false"}
                          {...register("email", { required: "Email is required" })}
                          className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="name@company.com"
                        />
                        {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Phone *</label>
                        <input
                          id="phone"
                          type="tel"
                          aria-invalid={errors.phone ? "true" : "false"}
                          {...register("phone", { required: "Phone is required" })}
                          className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                          placeholder="e.g. 9002570891"
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Deployment Location *</label>
                      <input
                        id="location"
                        type="text"
                        aria-invalid={errors.location ? "true" : "false"}
                        {...register("location", { required: "Location is required" })}
                        className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33]"
                        placeholder="e.g. Gachibowli, Hyderabad"
                      />
                      {errors.location && <p className="text-[10px] text-red-500 mt-1">{errors.location.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="requirement" className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Details of Requirement *</label>
                      <textarea
                        id="requirement"
                        rows={4}
                        aria-invalid={errors.requirement ? "true" : "false"}
                        {...register("requirement", { required: "Details are required" })}
                        className="w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-xs text-[#081B33] focus:outline-none focus:border-[#081B33] resize-none"
                        placeholder="Include desired shift schedules, staff volumes or frequencies details..."
                      />
                      {errors.requirement && <p className="text-[10px] text-red-500 mt-1">{errors.requirement.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#081B33] hover:bg-[#1E3A5F] text-white font-bold text-xs uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
