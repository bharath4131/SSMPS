"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click-away for mega menu
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Trap focus inside mobile menu drawer
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex="0"]'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTabTrap);
    firstElement?.focus();

    return () => window.removeEventListener("keydown", handleTabTrap);
  }, [isMobileMenuOpen]);

  const capabilities = [
    {
      name: "Security Services",
      href: "/services/security",
      desc: "Trained personnel, operations supervision, and corporate guard deployments.",
    },
    {
      name: "Housekeeping Services",
      href: "/services/housekeeping",
      desc: "Commercial cleaning, deep sanitization, and structured workspace maintenance.",
    },
    {
      name: "Facility Management",
      href: "/services/facility-management",
      desc: "Utility staffing, outsourced technicians, and full building support coordination.",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || pathname !== "/"
            ? "bg-[#081B33]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Official Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-102">
              <Image
                src="/logo-transparent.png"
                alt="SSMPS Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display tracking-wider text-white group-hover:text-[#C41E3A] transition-colors duration-300 uppercase">
                SSMPS
              </span>
              <span className="text-[8px] font-medium tracking-[0.25em] text-gray-300 uppercase -mt-1.5">
                Manpower solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/about"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                pathname === "/about" ? "text-[#C41E3A]" : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Capabilities Dropdown (Mega-Menu trigger) */}
            <div
              ref={megaMenuRef}
              className="relative"
            >
              <button
                ref={triggerRef}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300 cursor-pointer ${
                  pathname.startsWith("/services") ? "text-[#C41E3A]" : "text-gray-300 hover:text-white"
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                Capabilities
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-[#081B33] border border-white/10 rounded-lg p-5 shadow-2xl z-50"
                  >
                    <div className="space-y-4">
                      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest border-b border-white/5 pb-2">
                        Service Divisions
                      </div>
                      <div className="flex flex-col gap-3">
                        {capabilities.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="group/item flex flex-col p-2.5 rounded hover:bg-white/5 transition-colors"
                          >
                            <span className="text-xs font-bold text-white group-hover/item:text-[#C41E3A] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-gray-400 font-light mt-0.5 leading-relaxed">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/industries"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                pathname === "/industries" ? "text-[#C41E3A]" : "text-gray-300 hover:text-white"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/our-approach"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                pathname === "/our-approach" ? "text-[#C41E3A]" : "text-gray-300 hover:text-white"
              }`}
            >
              Our Approach
            </Link>

            <Link
              href="/contact"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                pathname === "/contact" ? "text-[#C41E3A]" : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Architectural CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/request-proposal"
              className="group flex flex-col items-end py-1 text-xs font-bold tracking-wider text-white uppercase"
            >
              <div className="flex items-center gap-1.5 group-hover:text-[#C41E3A] transition-colors duration-300">
                <span>Request a Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <span className="w-full h-[1px] bg-white/20 mt-1 transition-all duration-300 group-hover:bg-[#C41E3A] group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#C41E3A] transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#081B33] pt-28 px-8 pb-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 text-left">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#C41E3A] transition-colors"
              >
                About
              </Link>

              <div className="space-y-4">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block border-b border-white/5 pb-2">
                  Capabilities
                </span>
                <div className="flex flex-col gap-4 pl-2">
                  {capabilities.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-md font-bold uppercase tracking-wider text-gray-200 hover:text-[#C41E3A] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#C41E3A] transition-colors"
              >
                Industries
              </Link>

              <Link
                href="/our-approach"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#C41E3A] transition-colors"
              >
                Our Approach
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#C41E3A] transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex flex-col items-stretch border-t border-white/10 pt-8">
              <Link
                href="/request-proposal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-center text-xs font-bold tracking-wider text-white bg-[#C41E3A] hover:bg-[#A3182E] rounded shadow-lg uppercase transition-colors"
              >
                Request a Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
