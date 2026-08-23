"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-gray-400 border-t border-white/5 relative z-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Logo & Brand Narrative */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="SSMPS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-display tracking-wider text-white group-hover:text-[#D4AF37] transition-colors duration-300 uppercase">
                  SSMPS
                </span>
                <span className="text-[8px] font-medium tracking-[0.25em] text-[#D4AF37] uppercase -mt-1.5">
                  Manpower solutions
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              SS ManPower Solutions (SSMPS) delivers professional Security, Housekeeping, and Facility Management services. Focused on discipline, operational supervision, and compliance, we support the everyday environments that keep your organization moving.
            </p>
            <div className="text-xs font-semibold text-white tracking-widest uppercase">
              YOU TRUST. WE SERVE.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "About SSMPS", href: "/about" },
                { name: "Our Capabilities", href: "/services" },
                { name: "Sectors Served", href: "/industries" },
                { name: "Our Approach", href: "/our-approach" },
                { name: "Contact Office", href: "/contact" },
                { name: "Request a Proposal", href: "/request-proposal" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Security Guard Services", href: "/services/security" },
                { name: "Commercial Housekeeping", href: "/services/housekeeping" },
                { name: "Outsourced Technicians", href: "/services/facility-management" },
                { name: "Operational Supervision", href: "/our-approach" },
                { name: "Roster Administration", href: "/our-approach" },
              ].map((srv, idx) => (
                <li key={idx}>
                  <Link href={srv.href} className="hover:text-white transition-colors">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Office Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Operational Contacts
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:9002570891" className="hover:text-white">9002570891</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:ssmps1991@gmail.com" className="hover:text-white">ssmps1991@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Above raja medical, Beside saidabad bustand, madannapet mandi, Hyderabad, Telangana.
                </span>
              </li>
              <li className="border-t border-white/5 pt-2 mt-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-500 block">Active Presence</span>
                <span className="text-[10px] text-gray-300 font-semibold mt-1 block">Telangana &amp; Andhra Pradesh</span>
                <span className="text-[9px] text-[#D4AF37] font-light mt-0.5 block">Expanding across Southern India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} SS ManPower Solutions (SSMPS). All rights reserved. Est. 2021.
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
