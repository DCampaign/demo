"use client";

import { useState, useEffect } from "react";
import { SALON_INFO } from "@/data/salonData";
import { Phone, Calendar, ArrowUp } from "lucide-react";

interface FloatingActionsProps {
  onBookNow: () => void;
}

export default function FloatingActions({ onBookNow }: FloatingActionsProps) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-5 z-40 p-3 rounded-full bg-[#1A1816]/90 hover:bg-[#9E7B35] text-[#FAF7F2] shadow-xl backdrop-blur-sm border border-[#E8DFD0]/30 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-[#C5A059]" />
        </button>
      )}

      {/* Floating Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFD0] px-4 py-2.5 shadow-2xl flex items-center space-x-3">
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-3 rounded-full bg-white border border-[#D5CEBF] text-[#1A1816] flex items-center justify-center shrink-0 shadow-sm"
          aria-label="Call salon"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
        </a>
        <button
          onClick={onBookNow}
          className="flex-1 py-3 rounded-full bg-[#1A1816] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 shadow-lg"
        >
          <Calendar className="w-4 h-4 text-[#C5A059]" />
          <span>Book Ritual</span>
        </button>
      </div>
    </>
  );
}
