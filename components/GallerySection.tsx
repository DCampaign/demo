"use client";

import { useState } from "react";
import { GALLERY_DATA } from "@/data/salonData";
import { Camera, Sparkles, ExternalLink } from "lucide-react";

export default function GallerySection() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Hair Color", "Precision Cut", "Skin Spa", "Bridal Couture"];

  const filteredImages =
    filter === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((img) => img.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F2] border-b border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Visual Portfolio
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Transformations & Lookbook
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Explore our latest master creations, dimensional balayage results, and bridal styling.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                filter === c
                  ? "bg-[#1A1816] text-[#FAF7F2] shadow-sm"
                  : "bg-white text-[#5E564C] border border-[#E2D6C3] hover:border-[#9E7B35]"
              }`}
            >
              {c === "all" ? "View All" : c}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[#C5A059] text-[#1A1816] inline-block mb-2">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 flex items-center">
                  <Sparkles className="w-3 h-3 text-[#DFBA6F] mr-1" />
                  Crafted by {item.stylist}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full border border-[#D5CEBF] shadow-sm text-xs font-medium text-[#4A433A]">
            <Camera className="w-4 h-4 text-[#C5A059]" />
            <span>Follow our salon journeys on Instagram:</span>
            <span className="font-bold text-[#1A1816]">@LuminaSalonLounge</span>
          </div>
        </div>
      </div>
    </section>
  );
}
