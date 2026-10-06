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

      <aside aria-label="Demo website notice" className="border-b border-[#C5A059]/30 bg-[#EFE5D2] px-4 py-3 text-center text-sm text-[#493C26]">
        <strong className="font-semibold">Demo website for client showcase.</strong>{" "}
        This is a sample design by DCampaign Digital. Business details, offers, reviews, and bookings are for demonstration only.
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
