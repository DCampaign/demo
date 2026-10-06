"use client";

import { Sparkles, Shield, HeartHandshake, Coffee, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Royal Indian Artistry",
      description:
        "Every haircut, balayage melt, and bridal makeover is customized to flatter Indian skin undertones, hair density, and festive aesthetics.",
    },
    {
      icon: Shield,
      title: "Organic & Vedic Botanicals",
      description:
        "Ammonia-free, cruelty-free formulas infused with Kumkumadi, Bhringraj, and Olaplex bond rebuilders for healthy, lustrous tresses.",
    },
    {
      icon: Coffee,
      title: "Complimentary Royal Bar",
      description:
        "Enjoy artisanal masala chai, south Indian filter coffee, cold-pressed fruit elixirs, and sparkling mocktails in our private suites.",
    },
    {
      icon: Award,
      title: "Celebrity Master Artisans",
      description:
        "Our team brings 14+ years of Bollywood cinema, destination wedding styling, and international colorist certifications.",
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            The AURA Difference
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#1A1816] font-normal">
            Elevating Indian Beauty & Wellness
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#EBE4D8] hover:border-[#C5A059] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] group-hover:bg-[#1A1816] group-hover:text-[#C5A059] transition-colors duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1A1816] mb-2 group-hover:text-[#9E7B35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#635C52] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
