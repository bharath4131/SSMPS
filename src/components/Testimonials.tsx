"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh K. Rao",
      role: "Operations Director, Cyber Towers IT Park",
      content: "SSMPS has managed our security corridors and daily utility staffing for the last 3 years. Roster management is seamless, and their midnight field audits keep the guard force alert. Excellent service compliance.",
      stars: 5,
    },
    {
      name: "Ananya Reddy",
      role: "Facilities Manager, Capital Retail Malls",
      content: "Our mall experiences high footfalls. The housekeeping executives deployed by SSMPS keep our glass facades and marble floors pristine using professional grade scrubbers. Marble diamond-polishing quality is exceptional.",
      stars: 5,
    },
    {
      name: "Col. Suresh Verma (Retd)",
      role: "President, Heights Premium Residencies",
      content: "Security is of paramount concern in gated communities. SSMPS's biometric entry procedures and PSARA-certified guards have greatly elevated our security standards. Their electrician and gardener dispatches are prompt.",
      stars: 5,
    },
    {
      name: "Dr. Vikram Sethi",
      role: "Chief Administrator, Zenith Multi-Speciality Hospital",
      content: "Hospital hygiene requires strict adherence to disinfection protocols. The deep sanitization housekeeping team from SSMPS is highly disciplined, operating under strict biological disposal guidelines. Truly outstanding.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#081B33] text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1E3A5F]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Client Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
            Endorsed by Top Corporate Administrators.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
            Read what corporate facility directors, mall operators, and community presidents in Hyderabad say about our security and housekeeping operations.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="max-w-4xl mx-auto pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="w-full"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="glass-card-gold h-full p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#D4AF37]/25 transition-all duration-300">
                  <div className="space-y-6">
                    {/* Star Rating & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-[#D4AF37]/15 stroke-[1.5]" />
                    </div>

                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-light italic">
                      "{t.content}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5">
                    <h4 className="text-sm font-bold font-display text-white">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
