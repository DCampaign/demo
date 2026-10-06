import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA Luxury Salon & Bridal Studio | Bandra West, Mumbai",
  description:
    "Mumbai's premier luxury salon and bridal lounge. Specializing in bespoke Balayage for Indian skin tones, Nanoplastia smoothening, Ayurvedic head spas, and royal HD bridal makeovers.",
  keywords: [
    "luxury salon mumbai",
    "bridal makeup artist bandra",
    "balayage indian hair",
    "nanoplastia botoplex mumbai",
    "pre-bridal packages",
    "ayurvedic head spa",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#FAF7F2] text-[#231F20] font-sans antialiased selection:bg-[#E2BE76] selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}
