"use client";

import { PACKAGES_DATA } from "@/data/salonData";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function PricingPackages({ onSelectPackage }: PricingPackagesProps) {
  return (
    <section id="packages" className="py-24 bg-[#F5EFE6]/60 border-b border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            All-Inclusive Packages
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Curated Pampering Experiences
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Comprehensive bundles combining cuts, gloss rituals, treatments, and VIP lounge amenities.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-[#1A1816] text-[#FAF7F2] shadow-2xl scale-105 border-2 border-[#C5A059]"
                  : "bg-white text-[#1A1816] border border-[#E8DFD0] shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A059] to-[#DFBA6F] text-[#1A1816] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase flex items-center shadow-md">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Most Requested
                </div>
              )}

              <div>
                <h3
                  className={`font-serif text-2xl font-medium ${
                    pkg.isPopular ? "text-white" : "text-[#1A1816]"
                  }`}
                >
                  {pkg.title}
                </h3>
                <p
                  className={`mt-2 text-xs sm:text-sm ${
                    pkg.isPopular ? "text-[#C8C0B2]" : "text-[#70685D]"
                  }`}
                >
                  {pkg.description}
                </p>

                <div className="mt-6 mb-8 flex items-baseline space-x-2">
                  <span
                    className={`font-serif text-4xl sm:text-5xl font-light ${
                      pkg.isPopular ? "text-[#C5A059]" : "text-[#9E7B35]"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span
                      className={`text-sm line-through ${
                        pkg.isPopular ? "text-stone-500" : "text-stone-400"
                      }`}
                    >
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span
                    className={`text-xs uppercase tracking-wider ${
                      pkg.isPopular ? "text-stone-400" : "text-stone-500"
                    }`}
                  >
                    / session
                  </span>
                </div>

                <div className="space-y-3.5 pt-2">
                  <p
                    className={`text-xs uppercase font-semibold tracking-wider ${
                      pkg.isPopular ? "text-[#C5A059]" : "text-[#9E7B35]"
                    }`}
                  >
                    What&apos;s Included:
                  </p>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.isPopular
                            ? "bg-[#C5A059]/20 text-[#C5A059]"
                            : "bg-[#F4E8D1] text-[#9E7B35]"
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span
                        className={`text-xs sm:text-sm ${
                          pkg.isPopular ? "text-[#E6E0D5]" : "text-[#554D43]"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-stone-200/20">
                <button
                  onClick={() => onSelectPackage(pkg.title)}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                    pkg.isPopular
                      ? "bg-[#C5A059] hover:bg-[#DFBA6F] text-[#1A1816] shadow-lg"
                      : "bg-[#1A1816] hover:bg-[#9E7B35] text-white shadow-sm"
                  }`}
                >
                  <span>Reserve This Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
