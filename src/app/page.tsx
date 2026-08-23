"use client";

import { useState } from "react";
import BrandArrival from "@/components/BrandArrival";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Responsibility from "@/components/Responsibility";
import Services from "@/components/Services";
import DarkToLight from "@/components/DarkToLight";
import SSMPSStandard from "@/components/SSMPSStandard";
import RealPeople from "@/components/RealPeople";
import ProcessTimeline from "@/components/ProcessTimeline";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import RegionalPresence from "@/components/RegionalPresence";
import BrandCommitment from "@/components/BrandCommitment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isArrivalComplete, setIsArrivalComplete] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <>
      {/* SECTION 0 — Brand Arrival Splash */}
      <BrandArrival onComplete={() => setIsArrivalComplete(true)} />

      {/* Main Page Content (visible and interactive after arrival completes) */}
      <div className={`transition-opacity duration-500 ${isArrivalComplete ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        
        {/* Sticky Premium Navbar */}
        <Navbar onOpenQuote={handleOpenQuote} />

        <main className="flex-grow">
          {/* ACT 1: DARK */}
          {/* SECTION 1 — Hero */}
          <Hero onOpenQuote={handleOpenQuote} />

          {/* SECTION 2 — Responsibility Statement */}
          <Responsibility />

          {/* SECTION 3 — Capabilities expands */}
          <Services />

          {/* ACT 2: LIGHT */}
          {/* SECTION 4 — Dark-to-Light Transition */}
          <DarkToLight />

          {/* SECTION 5 — The SSMPS Standard chapters */}
          <SSMPSStandard />

          {/* SECTION 6 — Real People Image composition */}
          <RealPeople />

          {/* SECTION 7 — Operational Path roadmap */}
          <ProcessTimeline />

          {/* SECTION 8 — Industries grid */}
          <Industries />

          {/* SECTION 9 — Credibility stat block */}
          <Stats />

          {/* SECTION 10 — Regional SVG map */}
          <RegionalPresence />

          {/* ACT 3: DARK */}
          {/* SECTION 11 — Brand Commitment block */}
          <BrandCommitment />

          {/* SECTION 12 — Smart Inquiry adapt form */}
          <Contact />
        </main>

        {/* SECTION 13 — Structured Footer */}
        <Footer />

        {/* Request proposal modal */}
        <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
      </div>
    </>
  );
}
