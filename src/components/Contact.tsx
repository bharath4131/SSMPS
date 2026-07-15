"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Loader2 } from "lucide-react";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate database write / email send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000); // clear success alert after 5s
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#081B33] text-white relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1E3A5F]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Connect With Our Hyderabad Office.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
            Have a general inquiry or need a quick operational consultation? Fill out the form or reach out directly to our leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-white">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="tel:9002570891"
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#D4AF37]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Call Us</h4>
                    <p className="text-sm font-bold text-white mt-1">9002570891</p>
                  </div>
                </a>

                <a
                  href="mailto:ssmps1991@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#D4AF37]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Us</h4>
                    <p className="text-sm font-bold text-white mt-1">ssmps1991@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919002570891?text=Hello%20SSMPS%20Team,%20I%20would%20like%20to%20discuss%20a%20manpower/security%20contract."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10 hover:border-[#D4AF37]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp Chat</h4>
                    <p className="text-sm font-bold text-white mt-1">Instant Operations Dispatch</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1E3A5F]/10">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Registered Office</h4>
                    <p className="text-xs text-gray-200 mt-1 leading-relaxed">
                      Above raja medical, Beside saidabad bustand, madannapet mandi, Hyderabad, Telangana - 500059.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed styled for dark mode */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5 shadow-lg relative bg-white/5">
              <iframe
                title="SSMPS Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2045230983196!2d78.50346067601955!3d17.353841103756853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99df5b76cf6b%3A0xe54e60155b9ab23!2sSaidabad%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(0.85)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-card-gold p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between bg-[#1E3A5F]/10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-white">
                Submit an Inquiry
              </h3>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-300 text-xs font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Your message has been sent successfully. We will get back to you shortly!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="9002570891"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="E.g., Roster audit, quote request"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your operational requirements here..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white resize-none"
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#AA771C] text-[#081B33] font-bold text-xs tracking-wider uppercase rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
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
