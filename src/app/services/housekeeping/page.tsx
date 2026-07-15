"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Briefcase, Home, Hospital, Store, HardHat, Layers, Brush, Wrench, Bath, ChevronRight, ChevronLeft, Loader2, CheckCircle2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

type HousekeepingInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  facilitySize: string;
  frequency: string;
  propertyType: string;
  notes: string;
};

export default function HousekeepingServicePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HousekeepingInquiryValues>();

  const onSubmit = async (data: HousekeepingInquiryValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const housekeepingServicesList = [
    { icon: Briefcase, title: "Office Housekeeping", desc: "Pristine desk cleaning, conference room sanitization, trash clearance, floor vacuuming, and daily corporate workspace maintenance." },
    { icon: Home, title: "Residential Housekeeping", desc: "Detailed room sweeping, kitchen cleaning, sanitization of surface areas, and domestic clean routines for gated enclaves." },
    { icon: Hospital, title: "Hospital Housekeeping", desc: "SOP-driven medical-grade disinfection, sanitizing ICU/surgical corridors, waste separation, and infection control compliance." },
    { icon: Store, title: "Mall Housekeeping", desc: "Continuous sanitation of food courts, heavy floor sweeping utilizing scrubber dryers, glass partition clearing, and washrooms upkeep." },
    { icon: HardHat, title: "Industrial Cleaning", desc: "Chemical grease removal from factory floors, warehouse dust control, utility area washing, and plant safety cleaning." },
    { icon: Sparkles, title: "Deep Cleaning", desc: "Seasonal deep scrubbing, high-pressure steam cleaning, sanitization of upholstery, and detailing of corners." },
    { icon: Layers, title: "Glass Cleaning", desc: "Certified high-rise exterior facade washing, window streak removals, and structural partition frame cleaning." },
    { icon: Brush, title: "Carpet Cleaning", desc: "Industrial dry-foam carpet cleaning, stain removal audits, fabric deodorizing, and deep dirt extraction." },
    { icon: Wrench, title: "Floor Maintenance", desc: "Diamond-grit marble polishing, stone restoration, wood floor waxing, tile scrub routines, and joint filling." },
    { icon: Bath, title: "Washroom Maintenance", desc: "Hourly washroom sanitizing checklists, plumbing scale removal, deodorizing dispensers refilling, and mirror cleaning." },
  ];

  const housekeepingProcess = [
    { title: "Site Walkthrough", desc: "We inspect layout setups, floor tiles composition, facade height access, and washroom volumes to calculate resource allocation." },
    { title: "Chemical Selection", desc: "We map certified eco-friendly Diversey/Taski cleaning solutions and compile safety MSDS logs to be housed on site." },
    { title: "Schedule Setup", desc: "We draft granular hourly, daily, and weekly cleaning checklists detailing post duties for the housekeeping crew." },
    { title: "Checklist Audits", desc: "Housekeeping supervisors execute random audit scorecards, checking desk mirrors, floor shine, and washroom hygiene." },
    { title: "Quality Rating", desc: "We conduct monthly client reviews to score housekeeping performance and calibrate schedules based on seasonal needs." },
  ];

  const housekeepingFaqs = [
    { q: "What cleaning chemicals and equipment do you use?", a: "We use professional-grade eco-friendly cleaning chemicals from certified brands like Diversey (e.g., Taski R1 to R6 series). Our equipment includes heavy-duty floor scrubbers, vacuum extractors, high-pressure wash jets, and streak-free squeegees." },
    { q: "Are your housekeeping staff certified and trained in hygiene?", a: "Yes. All housekeeping executives undergo a 3-day training module covering chemical dilution ratios, cross-contamination prevention, high-altitude facade safety, and customer hospitality." },
    { q: "Do you supply the consumables (handwash, paper towels)?", a: "We offer both options. We can supply standard bathroom consumables (toilet rolls, handwash liquid, sanitizers) as part of a monthly contract bundle, or work with inventory supplied by client." },
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
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Premium Housekeeping Division
              </span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Pristine Operations.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] gold-text-glow">
                Clinical Hygiene.
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We deploy certified cleaning executives, advanced floor maintaining scrubbers, and Diversey chemical guidelines to preserve hygiene standards across IT parks, malls, and healthcare sectors.
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
                10 Housekeeping Specializations.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {housekeepingServicesList.map((srv, idx) => {
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
                Hygiene SOP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
                Cleaning Schedule Roadmap.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {housekeepingProcess.map((step, idx) => (
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
                  Request Housekeeping Proposal.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Enter your facility details below. Our corporate housekeeping manager will calculate chemical inventory requirements and dispatch a quote.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/15 text-xs text-gray-300 leading-relaxed">
                <strong>Safety First:</strong> We comply with all commercial health regulations, using non-toxic solutions and keeping MSDS binders on site.
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
                  <span>Housekeeping proposal request received. We will contact you shortly!</span>
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
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Estimated Sq. Footage</label>
                    <input
                      type="text"
                      placeholder="E.g., 25,000 sqft"
                      {...register("facilitySize")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Cleaning Frequency</label>
                    <select
                      {...register("frequency")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Daily Routine">Daily Routine cleaning</option>
                      <option value="Alternate Days">Alternate Days</option>
                      <option value="Deep Clean Project">Deep Clean (One-Off)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Facility Type</label>
                    <select
                      {...register("propertyType")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Office Corporate">Office / Corporate</option>
                      <option value="Healthcare Hospital">Hospital / Clinic</option>
                      <option value="Retail Mall">Shopping Mall</option>
                      <option value="Factory Floor">Manufacturing / Industrial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Special Site Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about facade heights, carpet areas, marble tiles, or desired shift timing..."
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
                Housekeeping FAQ
              </span>
              <h2 className="text-3xl font-bold font-display tracking-tight text-[#081B33]">
                Commercial Cleaning Inquiries.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
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
