"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShieldAlert, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Clients", href: "#clients" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#081B33]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#AA771C] rounded-lg shadow-md shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              <ShieldAlert className="w-6 h-6 text-[#081B33] stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-wider text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                SSMPS
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#D4AF37] uppercase -mt-1">
                Manpower solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-300 py-1"
              >
                {link.name}
                {/* Custom Hover Border Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 hover-trigger" />
              </a>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:9002570891"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>9002570891</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="relative px-6 py-2.5 text-xs font-bold tracking-wider text-white uppercase overflow-hidden border border-[#D4AF37] rounded-md transition-all duration-500 shadow-md hover:shadow-[#D4AF37]/25 hover:bg-[#D4AF37] hover:text-[#081B33] group"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-0" />
            </button>
          </div>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#D4AF37] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#081B33]/98 backdrop-blur-lg pt-24 px-8 pb-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium tracking-wide text-gray-200 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-8">
              <a
                href="tel:9002570891"
                className="flex items-center gap-2 text-md font-medium text-gray-300 hover:text-[#D4AF37]"
              >
                <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                <span>9002570891</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-4 text-sm font-bold tracking-wider text-[#081B33] bg-[#D4AF37] rounded-md shadow-lg shadow-[#D4AF37]/20 uppercase transition-all duration-300 active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
