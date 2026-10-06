"use client";

import { useState } from "react";
import { SERVICES_DATA, STYLISTS_DATA, SALON_INFO } from "@/data/salonData";
import { Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, X } from "lucide-react";

interface BookingSectionProps {
  selectedService?: string;
  selectedStylist?: string;
}

export default function BookingSection({
  selectedService = "",
  selectedStylist = "",
}: BookingSectionProps) {
  const [service, setService] = useState(selectedService || SERVICES_DATA[0].name);
  const [stylist, setStylist] = useState(selectedStylist || "Any Available Master Stylist");
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("11:30 AM");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+91 98200 12345");
  const [email, setEmail] = useState("guest@sample-aurasalon.in");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "02:30 PM",
    "04:00 PM",
    "05:30 PM",
    "07:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `AURA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName("");
    setNotes("");
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-[#FAF7F2] to-[#F2EBE0] border-b border-[#EFEAE1] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Seamless Reservation
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            Reserve Your Sanctuary Experience
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Select your preferred treatment, master artisan, and time. No upfront booking fee required.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        {/* Confirmation Modal / Card */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#C5A059] text-center max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#9E7B35] mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs uppercase tracking-widest font-bold text-[#9E7B35] bg-[#F4E8D1] px-3.5 py-1 rounded-full">
              Reservation Confirmed
            </span>

            <h3 className="font-serif text-3xl font-medium text-[#1A1816] mt-4 mb-2">
              We Await Your Arrival, {fullName || "Esteemed Guest"}
            </h3>

            <p className="text-sm text-[#665D52] mb-6">
              Your appointment request has been registered in the salon calendar. A courtesy confirmation text and calendar invitation have been sent.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFD0] text-left space-y-3 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-[#E0D5C3]">
                <span className="text-xs text-[#7A7369]">Confirmation Code</span>
                <span className="font-mono font-bold text-sm text-[#1A1816]">{bookingRef}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7A7369]">Selected Ritual</span>
                <span className="font-medium text-xs sm:text-sm text-[#1A1816]">{service}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7A7369]">Stylist</span>
                <span className="font-medium text-xs sm:text-sm text-[#1A1816]">{stylist}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7A7369]">Date & Time</span>
                <span className="font-medium text-xs sm:text-sm text-[#1A1816]">{date} at {time}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#E0D5C3]">
                <span className="text-xs text-[#7A7369]">Salon Location</span>
                <span className="font-medium text-xs text-[#1A1816]">{SALON_INFO.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-full bg-[#1A1816] hover:bg-[#9E7B35] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Book Another Appointment
              </button>
              <a
                href="#contact"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-full border border-[#D5CEBF] bg-white text-[#1A1816] hover:border-[#1A1816] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                View Directions & Valet
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Booking Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#E8DFD0]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Service & Stylist */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#9E7B35] mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  1. Ritual & Artisan Selection
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Choose Service / Ritual *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.price} • {s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Preferred Master Stylist
                    </label>
                    <select
                      value={stylist}
                      onChange={(e) => setStylist(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    >
                      <option value="Any Available Master Stylist">Any Available Master Stylist</option>
                      {STYLISTS_DATA.map((st) => (
                        <option key={st.id} value={st.name}>
                          {st.name} — {st.role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Date & Time Slot */}
              <div className="pt-6 border-t border-[#F0EAE1]">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#9E7B35] mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  2. Preferred Date & Available Time Slot
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Select Date *
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Select Arrival Time *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                            time === slot
                              ? "bg-[#1A1816] text-white shadow-md border border-[#1A1816]"
                              : "bg-[#FAF7F2] text-[#554D43] border border-[#E0D5C3] hover:border-[#9E7B35]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Contact Information (Using temporary contact details for sample look) */}
              <div className="pt-6 border-t border-[#F0EAE1]">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#9E7B35] mb-4 flex items-center">
                  <User className="w-4 h-4 mr-1.5" />
                  3. Guest Details (Sample Temporary Info)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98200 12345"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ananya@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-2">
                    Special Inquiries or Hair/Skin Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your hair history, upcoming event date, or favorite refreshment..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEBF] bg-[#FAF7F2] text-[#1A1816] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-[#7A7369]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Complimentary cancellation up to 24 hours prior</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#1A1816] hover:bg-[#9E7B35] text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Confirm Ritual Reservation</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
