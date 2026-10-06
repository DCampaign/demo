"use client";

import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/salonData";
import { Clock, Tag, Sparkles, Check } from "lucide-react";

interface ServicesMenuProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesMenu({ onSelectService }: ServicesMenuProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Rituals" },
    { id: "haircuts", label: "Haircuts & Styling" },
    { id: "color", label: "Color & Balayage" },
    { id: "treatments", label: "Treatments & Spa" },
    { id: "bridal", label: "Bridal & Glamour" },
  ];

  const filteredServices =
    activeTab === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Bespoke Menu
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Signature Services & Rituals
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Every treatment includes a tailored consultation, scalp cleansing ritual, and styling.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#1A1816] text-[#FAF7F2] shadow-md"
                  : "bg-white text-[#554D43] border border-[#E2D6C3] hover:border-[#9E7B35] hover:text-[#1A1816]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE3D6] shadow-sm hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <span className="absolute top-3 left-3 bg-[#1A1816]/90 backdrop-blur-sm text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/10 flex items-center">
                    <Sparkles className="w-2.5 h-2.5 text-[#C5A059] mr-1" />
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8A8175] mb-2 font-medium">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                      {service.duration}
                    </span>
                    <span className="text-base font-serif font-bold text-[#9E7B35]">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#1A1816] group-hover:text-[#9E7B35] transition-colors leading-snug">
                    {service.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#665D52] line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0EAE1]">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="w-full py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#1A1816] text-[#1A1816] hover:text-[#FAF7F2] border border-[#DFD5C4] hover:border-[#1A1816] text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-1"
                  >
                    <span>Select & Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
