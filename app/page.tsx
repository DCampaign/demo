"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesMenu from "@/components/ServicesMenu";
import AboutSection from "@/components/AboutSection";
import PricingPackages from "@/components/PricingPackages";
import StylistsSection from "@/components/StylistsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedStylist, setSelectedStylist] = useState<string>("");

  const scrollToBooking = (serviceName?: string, stylistName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (stylistName) setSelectedStylist(stylistName);
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      <aside aria-label="Demo website notice" className="fixed right-0 top-1/2 z-40 w-36 -translate-y-1/2 rounded-l-2xl border border-r-0 border-[#C5A059]/40 bg-[#141210]/95 p-3 text-[#EFE5D2] shadow-xl backdrop-blur-sm sm:w-48 sm:p-4">
        <strong className="block text-xs font-semibold uppercase tracking-wider text-[#DFBA6F]">Client Showcase Demo</strong>
        <p className="mt-2 text-[11px] leading-relaxed sm:text-xs">Sample website by DCampaign Digital. Images are AI-generated for this demo. All business details, offers, reviews, and bookings are samples for demonstration only.</p>
      </aside>

      {/* Hero Section */}
      <Hero onBookNow={() => scrollToBooking()} />

      {/* Features / Why Choose Lumina */}
      <Features />

      {/* Services Menu with tabbed categories */}
      <ServicesMenu onSelectService={(s) => scrollToBooking(s)} />

      {/* About / Salon Experience */}
      <AboutSection />

      {/* All-Inclusive Packages */}
      <PricingPackages onSelectPackage={(p) => scrollToBooking(p)} />

      {/* Master Stylists */}
      <StylistsSection onSelectStylist={(st) => scrollToBooking(undefined, st)} />

      {/* Lookbook / Transformations Gallery */}
      <GallerySection />

      {/* Client Reviews */}
      <TestimonialsSection />

      {/* Interactive Reservation / Booking */}
      <BookingSection
        key={`${selectedService}-${selectedStylist}`}
        selectedService={selectedService}
        selectedStylist={selectedStylist}
      />

      {/* Contact, Location & Hours (Temporary info) */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Luxury Footer */}
      <Footer />

      {/* Floating CTA & Scroll to Top */}
      <FloatingActions onBookNow={() => scrollToBooking()} />
    </main>
  );
}
