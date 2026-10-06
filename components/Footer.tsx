"use client";

import { useState } from "react";
import { SALON_INFO } from "@/data/salonData";
import { Sparkles, ArrowRight, Camera, Share2, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setCouponCode("AURA15");
    }
  };

  return (
    <footer className="bg-[#141210] text-[#D5CEBF] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Card */}
        <div className="bg-[#1F1C18] rounded-3xl p-8 sm:p-12 border border-[#38332D] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] flex items-center mb-2">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Exclusive Salon Club
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Receive 15% Off Your First Hair or Bridal Ritual
              </h3>
              <p className="mt-2 text-sm text-[#A89F91]">
                Join our private salon circle for seasonal beauty trends, festive offers, and priority appointment access.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-[#2A2621] p-4 rounded-2xl border border-[#C5A059] text-center animate-in fade-in">
                  <p className="text-xs text-white">Your festive perk has been unlocked!</p>
                  <p className="font-mono text-base font-bold text-[#C5A059] mt-1 tracking-wider">
                    CODE: {couponCode}
                  </p>
                  <p className="text-[11px] text-[#A89F91] mt-0.5">
                    Mention this code at billing to claim 15% off.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3.5 rounded-full bg-[#2A2621] border border-[#47413A] text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#DFBA6F] text-[#141210] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 flex items-center justify-center space-x-1"
                  >
                    <span>Claim 15%</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.25em] text-white font-semibold">
                AURA
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A059] font-medium -mt-1">
                LUXURY SALON & BRIDAL LOUNGE
              </span>
            </a>
            <p className="text-xs text-[#A89F91] leading-relaxed">
              Bandra West, Mumbai premier bridal lounge and salon sanctuary specializing in bespoke Balayage, Nanoplastia smoothing, and royal Ayurvedic spa rituals.
            </p>
            <div className="pt-2 text-xs text-[#8A8174]">
              Awarded Best Luxury Bridal & Hair Lounge Mumbai 2025
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  Signature Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  The Sanctuary Philosophy
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C5A059] transition-colors">
                  Pampering Packages
                </a>
              </li>
              <li>
                <a href="#stylists" className="hover:text-[#C5A059] transition-colors">
                  Master Artisans
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A059] transition-colors">
                  Lookbook & Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C5A059] transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Sample) */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Contact (Sample)
            </h4>
            <div className="space-y-2.5 text-xs text-[#B5ACA0]">
              <p className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] mr-2 shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] mr-2 shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#C5A059]">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] mr-2 shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#C5A059]">
                  {SALON_INFO.email}
                </a>
              </p>
              <p className="text-[11px] text-[#7A7369] pt-1">
                Complimentary Valet Parking Available
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">
              Visiting Hours
            </h4>
            <div className="space-y-2 text-xs text-[#B5ACA0]">
              {SALON_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between">
                  <span>{h.days}:</span>
                  <span className="text-white font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7369] gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} AURA Luxury Salon &amp; Bridal Lounge |{" "}
            <a href="https://dcampaign.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:text-[#DFBA6F] underline underline-offset-4 transition-colors">
              Powered by DCampaign Digital
            </a>
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#C5A059] transition-colors">
              Terms of Service
            </a>
            <a href="#terms" className="hover:text-[#C5A059] transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
