"use client";

import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081B33] text-gray-400 border-t border-white/5 relative z-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">

          {/* Logo & Narrative */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/#home" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#AA771C] rounded-lg">
                <ShieldCheck className="w-6 h-6 text-[#081B33]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-wider text-white">
                  SSMPS
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-[#D4AF37] uppercase -mt-1">
                  Manpower solutions
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              SS Man power solutions (SSMPS) provides Security, Housekeeping, and Facility Management services, delivering trained personnel and utility outsourcing for corporate offices, industries, and residential zones in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Home", href: "/#home" },
                { name: "About Us", href: "/#about" },
                { name: "Our Services", href: "/#services" },
                { name: "Sectors Served", href: "/#clients" },
                { name: "Operational Gallery", href: "/#gallery" },
                { name: "Contact Team", href: "/#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#D4AF37] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Corporate Security Guarding", href: "/services/security" },
                { name: "Industrial Facility Patrols", href: "/services/security" },
                { name: "Residential Society Patrols", href: "/services/security" },
                { name: "Office Housekeeping & Upkeep", href: "/services/housekeeping" },
                { name: "High-Rise Facade Glass Cleaning", href: "/services/housekeeping" },
                { name: "Stone Floor Polishing", href: "/services/housekeeping" },
                { name: "Outsourced Building Electricians", href: "/services/facility-management" },
                { name: "Front-Desk Reception Staffing", href: "/services/facility-management" },
              ].map((srv, idx) => (
                <li key={idx}>
                  <Link href={srv.href} className="hover:text-white transition-colors">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold font-display text-white uppercase tracking-wider">
              Corporate Contacts
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>9002570891</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>ssmps1991@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Above raja medical, Beside saidabad bustand, madannapet mandi, Hyderabad.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} SS Man power solutions (SSMPS). All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/#home" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/#home" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
