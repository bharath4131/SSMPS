"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Droplets, UserPlus, Coffee, Leaf, Building, ChevronRight, ChevronLeft, Loader2, CheckCircle2, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

type FacilityInquiryValues = {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  staffCount: string;
  contractTerm: string;
  staffCategory: string;
  notes: string;
};

export default function FacilityManagementServicePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FacilityInquiryValues>();

  const onSubmit = async (data: FacilityInquiryValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const facilityServicesList = [
    { icon: Zap, title: "Electrical Maintenance", desc: "Outsourced certified building electricians managing grid distribution, panel audits, UPS networks, and immediate utility repair." },
    { icon: Droplets, title: "Plumbing", desc: "Diagnostic commercial plumbing technicians handling pipe layouts, overhead tanks, water pressure grids, and sanitizing fittings." },
    { icon: UserPlus, title: "Reception Staff", desc: "Trained corporate front-desk executives, telephone line coordinators, visitor badge printers, and administrative office support." },
    { icon: Coffee, title: "Pantry Services", desc: "Food safety certified pantry hosts, kitchen server boys, cafeteria inventory handlers, and executive meeting dining staff." },
    { icon: Leaf, title: "Garden Maintenance", desc: "Experienced horticulturists, gardeners, landscaping coordinators, lawn grooming, lawn weeding, and peripheral garden upkeep." },
    { icon: Building, title: "Building Maintenance", desc: "General caretakers executing basic carpentry, lock restorations, ceiling grid alignments, and structural inspections." },
  ];

  const facilityProcess = [
    { title: "Skill Matrix Audit", desc: "We sit with your facility director to analyze technical credentials, license requirements, and shift volumes." },
    { title: "Candidate Selection", desc: "Candidates matching your required technical profile are chosen from our pre-screened, verified pool." },
    { title: "Roster Dispatch", desc: "Personnel are dispatched to your site, complete on-site safety inductions, and sync with your facility supervisors." },
    { title: "Compliance Check", desc: "We verify monthly statutory documents (Provident Fund, ESIC, minimum wage payouts) are fully compiled." },
    { title: "Periodic Review", desc: "Our contract desk audits attendance logs, reviews crew performance, and updates staff allocation monthly." },
  ];

  const facilityFaqs = [
    { q: "How do you ensure the technical skills of plumbers and electricians?", a: "Every technical team member deployed holds a valid government-recognized ITI or equivalent trade certification. They undergo practical skill tests at our regional training yard before deployment." },
    { q: "What statutory compliances do you provide with monthly billing?", a: "We provide complete statutory receipts. This includes PF (Provident Fund) challans, ESIC (Employee State Insurance) returns, ECR logs, and professional tax receipts corresponding to the workers assigned to your site." },
    { q: "What happens if a deployed staff member is not performing up to mark?", a: "If a candidate is found unsuitable or performs below expectation, you can request a replacement. We will review the post requirements and deploy a replacement within 48 hours." },
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
              <Building className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Facility Management & Manpower
              </span>
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Seamless Utility Staffing.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] gold-text-glow">
                SLA-Backed Performance.
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We resolve your operational support vacancies, providing certified electricians, plumbers, reception administrators, and pantry servers on flexible corporate contracts in Hyderabad.
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
                6 Core Facility Management Divisions.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilityServicesList.map((srv, idx) => {
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
                Outsourcing SOP
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
                Manpower Recruitment Roadmap.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {facilityProcess.map((step, idx) => (
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
                  Request Utility Staff.
                </h2>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  Enter your utility staffing needs below. Our contract desk supervisor will formulate a compliant manpower proposal.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#1E3A5F]/15 text-xs text-gray-300 leading-relaxed">
                <strong>Statutory Assurance:</strong> SSMPS assumes full employer liabilities including worker insurance, professional certifications, and compliant ESIC registration.
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
                  <span>Facility proposal request received. We will contact you shortly!</span>
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
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Staff Required</label>
                    <select
                      {...register("staffCount")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="1-3">1 - 3 Persons</option>
                      <option value="4-10">4 - 10 Persons</option>
                      <option value="10+">10+ Persons</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Contract Term</label>
                    <select
                      {...register("contractTerm")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Long Term">Long-Term Contract</option>
                      <option value="Short Term Project">Short-Term (Project)</option>
                      <option value="Temporary Support">Temporary Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Staff Category</label>
                    <select
                      {...register("staffCategory")}
                      className="w-full bg-[#081B33]/60 border border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:border-[#D4AF37] text-white"
                    >
                      <option value="Electrician Plumber">Electrician / Plumber</option>
                      <option value="Reception Admin">Reception / Admin</option>
                      <option value="Pantry Host">Pantry Server</option>
                      <option value="Gardener Handyman">Gardener / Handyman</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Roster Details / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific work schedules, certifications required (e.g. electrical licenses), or shift allocations..."
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
                Facility FAQ
              </span>
              <h2 className="text-3xl font-bold font-display tracking-tight text-[#081B33]">
                Facility Staffing Inquiries.
              </h2>
              <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="space-y-4">
              {facilityFaqs.map((faq, idx) => {
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
