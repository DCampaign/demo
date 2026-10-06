"use client";

import { TESTIMONIALS_DATA } from "@/data/salonData";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-white border-b border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Kind Words
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Loved By Beverly Hills & Beyond
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div className="flex text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#1A1816]">4.9 out of 5</span>
            <span className="text-xs text-[#7A7369]">based on 1,240+ verified client reviews</span>
          </div>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EBE4D8] shadow-sm hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C5A059]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#E2D6C3]" />
                </div>

                <p className="font-serif italic text-base text-[#2E2822] leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-4 inline-block bg-white px-3 py-1 rounded-full border border-[#E2D6C3] text-[11px] font-semibold text-[#8C6D2D]">
                  Ritual: {t.service}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EAE3D6] flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#C5A059]"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-semibold text-[#1A1816]">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7B35]" />
                  </div>
                  <p className="text-xs text-[#756D62]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
