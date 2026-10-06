"use client";

import Image from "next/image";

import { STYLISTS_DATA } from "@/data/salonData";
import { Star, Award, Calendar } from "lucide-react";

interface StylistsSectionProps {
  onSelectStylist: (stylistName: string) => void;
}

export default function StylistsSection({ onSelectStylist }: StylistsSectionProps) {
  return (
    <section id="stylists" className="py-24 bg-white border-b border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Master Artisans
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Meet Our World-Class Stylists
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Internationally educated artists dedicated to elevating your individual beauty with bespoke precision.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STYLISTS_DATA.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#EAE3D6] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <Image width={1024} height={1536} sizes="(max-width: 768px) 90vw, 33vw" 
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-1 text-[#DFBA6F] text-xs mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#DFBA6F]" />
                    <span className="font-semibold">{stylist.rating.toFixed(1)}</span>
                    <span className="text-stone-300 text-[11px]">(50+ reviews)</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white">
                    {stylist.name}
                  </h3>
                  <p className="text-xs text-[#E5D7BF] font-light">
                    {stylist.role}
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="inline-block bg-white px-2.5 py-1 rounded-full border border-[#E2D6C3] text-[10px] font-semibold text-[#8C6D2D] uppercase tracking-wider">
                    {stylist.experience}
                  </div>
                  <p className="text-xs font-semibold text-[#1A1816]">
                    Specialty: <span className="font-normal text-[#5A534B]">{stylist.specialty}</span>
                  </p>
                  <p className="text-xs text-[#635C52] leading-relaxed line-clamp-3">
                    {stylist.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE3D6]">
                  <button
                    onClick={() => onSelectStylist(stylist.name)}
                    className="w-full py-2.5 rounded-full bg-white hover:bg-[#1A1816] text-[#1A1816] hover:text-white border border-[#D5CEBF] hover:border-[#1A1816] text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Book with {stylist.name.split(" ")[0]}</span>
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
