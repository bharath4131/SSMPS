"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, ShieldCheck, Mail, Phone, MapPin, Loader2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  serviceType: string;
  staffSize: string;
  duration: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  notes: string;
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      serviceType: "Security Services",
      staffSize: "1-5",
      duration: "Long-term (Contract)",
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const selectedService = watch("serviceType");

  const handleNext = async () => {
    let valid = false;
    if (step === 1) {
      valid = await trigger("serviceType");
    } else if (step === 2) {
      valid = await trigger(["staffSize", "duration"]);
    }
    if (valid || step === 1 || step === 2) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call to email endpoint or database
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    reset();
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#081B33]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring" as const, duration: 0.5 }}
            className="relative w-full max-w-3xl overflow-hidden glass-card-gold text-white rounded-2xl shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 min-h-[500px]"
          >
            {/* Sidebar Branding & Info */}
            <div className="md:col-span-4 bg-gradient-to-b from-[#081B33] to-[#1E3A5F] p-8 flex flex-col justify-between border-r border-[#D4AF37]/15">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  Corporate Portal
                </span>
                <h3 className="text-xl font-bold font-display mt-2 mb-4">
                  Request a Bespoke Proposal
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Provide your requirements to receive a customized security and facility management operational outline.
                </p>
              </div>

              <div className="space-y-4 my-8 md:my-0">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>+91 9002570891</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>ssmps1991@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span className="leading-tight">Saidabad, Hyderabad</span>
                </div>
              </div>

              <div className="text-[9px] text-gray-400">
                &copy; {new Date().getFullYear()} SSMPS. Government Licensed.
              </div>
            </div>

            {/* Main Form Content */}
            <div className="md:col-span-8 p-8 flex flex-col justify-between relative bg-[#081B33]/90">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between">
                  {/* Step Indicators */}
                  <div className="flex items-center gap-4 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            step >= s
                              ? "bg-[#D4AF37] text-[#081B33] shadow-md shadow-[#D4AF37]/25"
                              : "bg-[#1E3A5F]/50 text-gray-400 border border-white/5"
                          }`}
                        >
                          {s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`h-[2px] w-8 md:w-16 rounded transition-all duration-300 ${
                              step > s ? "bg-[#D4AF37]" : "bg-[#1E3A5F]/50"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow">
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h4 className="text-lg font-bold font-display text-white mb-2">
                          What service does your organization require?
                        </h4>
                        <p className="text-xs text-gray-400 mb-6">
                          Select the primary sector of interest. You can add additional notes in Step 3.
                        </p>

                        <div className="space-y-3">
                          {[
                            {
                              id: "Security Services",
                              title: "Security Services",
                              desc: "Corporate, industrial guards, armed/unarmed, VIP safety & CCTV.",
                            },
                            {
                              id: "Housekeeping Services",
                              title: "Housekeeping Services",
                              desc: "Commercial cleaning, corporate housekeeping, deep disinfection.",
                            },
                            {
                              id: "Outsourcing Manpower Solutions",
                              title: "Manpower Outsourcing (Facility)",
                              desc: "Electrical, plumbing, gardeners, reception, pantry, & admin staff.",
                            },
                          ].map((item) => (
                            <label
                              key={item.id}
                              className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                                selectedService === item.id
                                  ? "border-[#D4AF37] bg-[#D4AF37]/5"
                                  : "border-white/10 hover:border-white/20 bg-white/5"
                              }`}
                            >
                              <input
                                type="radio"
                                value={item.id}
                                {...register("serviceType", { required: true })}
                                className="mt-1 accent-[#D4AF37]"
                              />
                              <div>
                                <h5 className="text-sm font-semibold text-white">{item.title}</h5>
                                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h4 className="text-lg font-bold font-display text-white mb-2">
                          Operational Scope & Scaling
                        </h4>
                        <p className="text-xs text-gray-400 mb-6">
                          Help us understand the size of deployment and duration needed.
                        </p>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                              Estimated Staff / Guards Needed
                            </label>
                            <select
                              {...register("staffSize", { required: true })}
                              className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4AF37] text-white"
                            >
                              <option className="bg-[#081B33]" value="1-5">1 - 5 Personnel</option>
                              <option className="bg-[#081B33]" value="6-20">6 - 20 Personnel</option>
                              <option className="bg-[#081B33]" value="21-50">21 - 50 Personnel</option>
                              <option className="bg-[#081B33]" value="50+">50+ Personnel (Enterprise)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                              Deployment Period
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {[
                                "Long-term (Contract)",
                                "Short-term (Project)",
                                "Event-based / One-off",
                              ].map((option) => (
                                <label
                                  key={option}
                                  className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-xs font-medium text-center transition-all duration-300 ${
                                    watch("duration") === option
                                      ? "border-[#D4AF37] bg-[#D4AF37]/5 text-white"
                                      : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    value={option}
                                    {...register("duration")}
                                    className="sr-only"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4 max-h-[300px] overflow-y-auto pr-2"
                      >
                        <h4 className="text-lg font-bold font-display text-white mb-2">
                          Contact & Corporate Profile
                        </h4>
                        <p className="text-xs text-gray-400 mb-4">
                          Enter your contact information. Our Hyderabad team will prepare a structured bid.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-semibold uppercase text-gray-400 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              placeholder="Name"
                              {...register("fullName", { required: "Full name is required" })}
                              className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                            />
                            {errors.fullName && (
                              <p className="text-[10px] text-red-400 mt-1">{errors.fullName.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-[10px] font-semibold uppercase text-gray-400 mb-1">
                              Company Name
                            </label>
                            <input
                              type="text"
                              placeholder="Company"
                              {...register("companyName")}
                              className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-semibold uppercase text-gray-400 mb-1">
                              Corporate Email *
                            </label>
                            <input
                              type="email"
                              placeholder="example@company.com"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address",
                                },
                              })}
                              className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                            />
                            {errors.email && (
                              <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-[10px] font-semibold uppercase text-gray-400 mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              placeholder="9002570891"
                              {...register("phone", { required: "Phone is required" })}
                              className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                            />
                            {errors.phone && (
                              <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold uppercase text-gray-400 mb-1">
                            Additional Operational Details
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Tell us about specific sites, shift structures, or cleaning scope..."
                            {...register("notes")}
                            className="w-full bg-[#1E3A5F]/30 border border-white/10 rounded-lg p-2.5 text-xs focus:outline-none focus:border-[#D4AF37] text-white resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center justify-between border-t border-white/15 pt-6 mt-6">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#081B33] bg-[#D4AF37] px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-2 text-xs font-bold text-[#081B33] bg-[#D4AF37] px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 min-w-[120px]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Submit Request</span>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/35 mb-6 animate-pulse">
                    <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mb-3">
                    Proposal Request Received
                  </h4>
                  <p className="text-sm text-gray-300 max-w-sm leading-relaxed mb-6">
                    Thank you. Your inquiry has been routed to our corporate accounts desk in Hyderabad. A representative will contact you via email (**ssmps1991@gmail.com** / phone) with an initial bid within 2 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#081B33] px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
