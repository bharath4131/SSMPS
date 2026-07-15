"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "/about_security_guard.png",
      title: "Elite Guard Deployment",
      category: "Security",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
      title: "Commercial Disinfection",
      category: "Housekeeping",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
      title: "CCTV Control Operations",
      category: "Security",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: "/about_housekeeping.png",
      title: "Workspace Upkeep Roster",
      category: "Housekeeping",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
      title: "Electrical Grid Check",
      category: "Facilities",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
      title: "Lobby Stone Polishing",
      category: "Housekeeping",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white text-[#081B33]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Operations In Action
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#081B33]">
            Pristine Hygiene. Absolute Safety.
          </h2>
          <div className="h-[2px] w-20 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
            Take a look at our trained guards on patrol, deep commercial cleaning protocols, and technical facility engineers in Hyderabad.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 shadow-sm ${img.span}`}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#081B33]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10" />

              {/* Text & Icon reveal on hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 pointer-events-none">
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center text-[#081B33]">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                    {img.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold font-display text-white mt-1">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 bg-[#081B33]/90 backdrop-blur-sm cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <Image
                src={selectedImg}
                alt="Enlarged gallery preview"
                fill
                className="object-contain bg-[#081B33]"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 backdrop-blur-md border border-white/15 transition-all"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
