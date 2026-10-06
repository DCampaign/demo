"use client";

import { useState } from "react";
import { SALON_INFO } from "@/data/salonData";
import { Phone, Mail, MapPin, Clock, Car, MessageSquare, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgText, setMsgText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setMsgName("");
      setMsgEmail("");
      setMsgText("");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#EFEAE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E7B35] font-semibold">
            Visit & Connect
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1816] font-normal">
            LUMINA Lounge & Sanctuary
          </h2>
          <p className="mt-3 text-base text-[#635C52]">
            Conveniently situated in Beverly Hills with reserved valet service directly at the entrance.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Contact Details Card */}
            <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#EBE4D8] space-y-6">
              <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                Salon Concierge
              </h3>

              <div className="space-y-5">
                {/* Temporary Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#9E7B35] tracking-wider block">
                      Address (Sample)
                    </span>
                    <p className="text-sm font-medium text-[#1A1816] mt-0.5">
                      {SALON_INFO.address}
                    </p>
                    <span className="text-xs text-[#7A7369]">Near Bandra Talao & Linking Road Promenade</span>
                  </div>
                </div>

                {/* Temporary Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#9E7B35] tracking-wider block">
                      Direct Telephone (Sample)
                    </span>
                    <a
                      href={`tel:${SALON_INFO.phone}`}
                      className="text-sm font-medium text-[#1A1816] hover:text-[#9E7B35] transition-colors mt-0.5 block"
                    >
                      {SALON_INFO.phone}
                    </a>
                    <span className="text-xs text-[#7A7369]">Call or SMS for immediate concierge assistance</span>
                  </div>
                </div>

                {/* Temporary Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#9E7B35] tracking-wider block">
                      Concierge Email (Sample)
                    </span>
                    <a
                      href={`mailto:${SALON_INFO.email}`}
                      className="text-sm font-medium text-[#1A1816] hover:text-[#9E7B35] transition-colors mt-0.5 block"
                    >
                      {SALON_INFO.email}
                    </a>
                    <span className="text-xs text-[#7A7369]">Inquiries answered within 2 hours</span>
                  </div>
                </div>

                {/* Valet Parking */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#9E7B35] tracking-wider block">
                      Valet Parking
                    </span>
                    <p className="text-sm font-medium text-[#1A1816] mt-0.5">
                      Complimentary Guest Valet
                    </p>
                    <span className="text-xs text-[#7A7369]">White glove attendants at portico entrance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#1A1816] text-[#FAF7F2] rounded-3xl p-8 border border-[#3A352F]">
              <div className="flex items-center space-x-2 text-[#C5A059] mb-4">
                <Clock className="w-4 h-4" />
                <h4 className="text-xs uppercase tracking-widest font-bold">
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-3">
                {SALON_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-sm py-1.5 border-b border-white/10 last:border-b-0"
                  >
                    <span className="text-[#C8C0B2]">{h.days}</span>
                    <span className="font-medium text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message / Location Map Preview */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-8 lg:p-10 border border-[#EBE4D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#9E7B35]">
                    Direct Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#1A1816] mt-1">
                    Have a Special Request or Bridal Inquiries?
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2D6C3] flex items-center justify-center text-[#9E7B35] shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#635C52] mb-6">
                Send our salon director a quick inquiry regarding private party bookings, custom extensions matching, or tailored events.
              </p>

              {formSent ? (
                <div className="bg-white rounded-2xl p-6 border border-[#C5A059] text-center my-8">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A059] flex items-center justify-center mx-auto text-[#9E7B35] mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#1A1816]">Message Received</h4>
                  <p className="text-xs text-[#635C52] mt-1">
                    Thank you. Our salon concierge will reach out to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-4 text-xs font-bold text-[#9E7B35] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={msgName}
                        onChange={(e) => setMsgName(e.target.value)}
                        placeholder="Sophia Laurent"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        value={msgEmail}
                        onChange={(e) => setMsgEmail(e.target.value)}
                        placeholder="ananya@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5CEBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A453F] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      value={msgText}
                      onChange={(e) => setMsgText(e.target.value)}
                      placeholder="I would like to inquire about bridal hair styling & lehenga draping for an upcoming wedding in Mumbai..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D5CEBF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#1A1816] hover:bg-[#9E7B35] text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message to Concierge</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Stylized Simulated Map Card */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D6]">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5CEBF] h-48 bg-stone-800 shadow-inner group">
                {/* Map Graphic Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-85 transition-opacity"
                  style={{
                    backgroundImage: `url('https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Bandra_Worli_Sea_Link_at_night.jpg/1280px-Bandra_Worli_Sea_Link_at_night.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#1A1816] flex items-center justify-center shadow-lg mb-2 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-lg font-medium tracking-wide">
                    AURA Luxury Salon & Bridal Lounge
                  </p>
                  <p className="text-xs text-stone-200 mt-0.5">
                    Plot 42, Linking Road, Near Bandra Talao, Bandra West, Mumbai
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SALON_INFO.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-900 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
