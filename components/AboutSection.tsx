"use client";

import Image from "next/image";

import { Check, Sparkles } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Zero-rush policy: Dedicated unhurried attention for every appointment",
    "Tailored formulas crafted specifically for your hair texture & skin tone",
    "State-of-the-art Japanese waterfall head spa & wash basin ergonomics",
    "Complimentary luxury champagne, cold-pressed juices & artisanal coffees",
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-[#EFEAE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-stone-100">
                  <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                    src="/images/bridal.webp"
                    alt="Royal Indian Beauty & Elegance"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-stone-100">
                  <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                    src="/images/balayage.webp"
                    alt="Warm Caramel Balayage Artistry"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-stone-100">
                  <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                    src="/images/mehndi.webp"
                    alt="Bridal Mehndi & Spa Nails"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-stone-100">
                  <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                    src="/images/facial.webp"
                    alt="Radiant Skin Facial Glow"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1816] text-[#FAF7F2] p-5 rounded-2xl shadow-2xl border border-[#C5A059]/40 text-center min-w-[200px]">
              <span className="block font-serif text-3xl font-light text-[#C5A059]">14+</span>
              <span className="text-xs uppercase tracking-widest text-[#D5CEBF] font-medium">
                Years of Bridal & Hair Craft
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
              The Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal leading-tight">
              A Haven of Royal Grace, Confidence & Vedic Indulgence
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A059]" />

            <p className="text-base text-[#5A534B] leading-relaxed">
              Founded on the belief that beauty rituals should celebrate authentic Indian elegance while embracing cutting-edge global techniques, AURA was conceived as a peaceful retreat in the heart of Bandra West, Mumbai.
            </p>

            <p className="text-sm text-[#665D52] leading-relaxed">
              Every detail—from our private bridal dressing suites to Japanese waterfall head spas and organic saffron botanical formulas—is curated so you depart feeling revitalized, radiant, and empowered.
            </p>

            {/* Highlights List */}
            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-[#F4E8D1] text-[#9E7B35] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm text-[#443E36] font-medium">{h}</span>
                </div>
              ))}
            </div>

            {/* Founder Quote */}
            <div className="pt-6 border-t border-[#EFEAE1] flex items-center space-x-4">
              <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                src="/images/priyanka.webp"
                alt="Priyanka Mehra"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C5A059]"
              />
              <div>
                <p className="font-serif italic text-base text-[#1A1816]">
                  &ldquo;We don&apos;t just style hair and makeup; we awaken the majestic confidence within every woman.&rdquo;
                </p>
                <p className="text-xs text-[#9E7B35] font-medium tracking-wider uppercase mt-1">
                  Priyanka Mehra — Founder & Celebrity Bridal Stylist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
