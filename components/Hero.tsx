"use client";

import Image from "next/image";

import { SALON_INFO } from "@/data/salonData";
import { Star, ShieldCheck, Sparkles, ArrowRight, Heart } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#FAF7F2]">
      {/* Subtle Luxury Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8DFD0]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F4E8D1]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E2D6C3] shadow-sm backdrop-blur-sm">
              <span className="flex text-[#C5A059]">
                <Sparkles className="w-4 h-4 fill-[#C5A059]" />
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#665D52]">
                Awarded Mumbai&apos;s Premier Bridal & Hair Lounge 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#1A1816] font-normal leading-[1.15] tracking-tight">
              Where Royal Indian Beauty Meets{" "}
              <span className="italic font-serif text-[#9E7B35] font-light">
                Modern Artistry
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A534B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Step into Bandra&apos;s most opulent retreat. Specializing in bespoke Balayage tailored for Indian skin undertones, Nanoplastia silk smoothing, 24K saffron facials, and royal HD bridal couture.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A1816] text-[#FAF7F2] hover:bg-[#9E7B35] transition-all duration-300 font-medium text-sm tracking-wider uppercase shadow-lg shadow-black/5 flex items-center justify-center group"
              >
                <span>Reserve Your Ritual</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D5CEBF] bg-white/70 hover:bg-white text-[#1A1816] hover:border-[#9E7B35] transition-all duration-300 font-medium text-sm tracking-wider uppercase text-center shadow-sm"
              >
                Explore Services & Menu
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-[#E8DFD0] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-1 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#1A1816]">4.9 / 5.0 Rating</p>
                <p className="text-xs text-[#7A7369]">1,850+ verified reviews</p>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-serif font-bold text-[#1A1816]">14+ Years</p>
                <p className="text-sm font-semibold text-[#1A1816]">Celebrity Craft</p>
                <p className="text-xs text-[#7A7369]">Bollywood & Weddings</p>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-serif font-bold text-[#1A1816]">100% Safe</p>
                <p className="text-sm font-semibold text-[#1A1816]">Ammonia-Free</p>
                <p className="text-xs text-[#7A7369]">Olaplex & Kérastase</p>
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-serif font-bold text-[#1A1816]">VIP Lounge</p>
                <p className="text-sm font-semibold text-[#1A1816]">Private Suites</p>
                <p className="text-xs text-[#7A7369]">Artisanal chai & coffee</p>
              </div>
            </div>
          </div>

          {/* Right Visual Imagery Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Salon Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
                <Image width={1024} height={1536} sizes="(max-width: 1024px) 90vw, 40vw" priority
                  src="/images/bridal.webp"
                  alt="Royal Indian Bridal Styling by AURA"
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest bg-[#C5A059] text-stone-900 px-2.5 py-1 rounded-full font-bold">
                    Royal Bridal & Balayage
                  </span>
                  <p className="mt-2 text-sm font-serif italic text-stone-200">
                    Bespoke HD bridal makeover & warm caramel dimension
                  </p>
                </div>
              </div>

              {/* Floating Review Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-[#E8DFD0] max-w-[260px] hidden sm:block animate-pulse-slow">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-stone-800">5.0 Star Rating</span>
                </div>
                <p className="text-xs text-stone-600 italic">
                  &ldquo;The best bridal makeover and caramel balayage in Mumbai. Truly world-class.&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400">
                  <span>Dr. Meera K.</span>
                  <span className="text-[#9E7B35] font-medium">Bandra West</span>
                </div>
              </div>

              {/* Floating Stylist Badge */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-[#E8DFD0] flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-[#1A1816]">Wedding Season Bookings Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
