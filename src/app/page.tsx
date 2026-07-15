"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import ProcessTimeline from "@/components/ProcessTimeline";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <>
      {/* Sticky Premium Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Clients Infinite Scroll Marquee */}
        <ClientMarquee />

        {/* About Company Split Section */}
        <About />

        {/* Services Tabbed Section */}
        <Services />

        {/* Why Choose Us Trust Section */}
        <WhyChooseUs />

        {/* Statistics Counting Section */}
        <Stats />

        {/* Industries Served Grid */}
        <Industries />

        {/* Process Timeline Track Section */}
        <ProcessTimeline />

        {/* Masonry Actions Gallery */}
        <Gallery />

        {/* Testimonials Slider Section */}
        <Testimonials />

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* Contact Form & Hyderabad Map */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Luxury Proposal Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </>
  );
}
