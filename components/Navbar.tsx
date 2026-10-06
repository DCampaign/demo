"use client";

import { useState, useEffect } from "react";
import { SALON_INFO } from "@/data/salonData";
import { Phone, MapPin, Clock, Calendar, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Stylists", href: "#stylists" },
    { label: "Lookbook", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById("booking");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#1A1816] text-[#E8DFD0] text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#C5A059] font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              {SALON_INFO.announcement}
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[#D5CEBF]">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-3 h-3 mr-1.5 text-[#C5A059]" />
              {SALON_INFO.phone}
            </a>
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1.5 text-[#C5A059]" />
              Bandra West, Mumbai
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#E8DFD0]"
            : "bg-[#FAF7F2]/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#1A1816] font-semibold group-hover:text-[#9E7B35] transition-colors">
              AURA
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#9E7B35] font-medium -mt-1">
              LUXURY SALON & BRIDAL LOUNGE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4A453F] hover:text-[#9E7B35] tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="p-2.5 rounded-full border border-[#D5CEBF] text-[#1A1816] hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
              title="Call Salon"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1A1816] text-[#FAF7F2] hover:bg-[#9E7B35] transition-all duration-300 shadow-sm text-sm font-medium tracking-wide group"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#C5A059] group-hover:text-white transition-colors" />
              Book Ritual
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={handleBookingClick}
              className="px-3 py-1.5 rounded-full bg-[#1A1816] text-white text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A1816] hover:bg-[#E8DFD0]/40 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD0] px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#2C2723] hover:text-[#9E7B35] font-medium text-base py-1.5 border-b border-[#EFEAE1]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col space-y-2">
                <button
                  onClick={handleBookingClick}
                  className="w-full py-3 rounded-xl bg-[#1A1816] text-[#FAF7F2] font-medium text-sm flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Reserve Appointment</span>
                </button>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="w-full py-2.5 rounded-xl border border-[#D5CEBF] text-[#2C2723] text-sm font-medium flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call: {SALON_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
