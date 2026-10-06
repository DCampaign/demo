export interface ServiceItem {
  id: string;
  name: string;
  category: "haircuts" | "color" | "treatments" | "bridal" | "spa";
  duration: string;
  price: string;
  description: string;
  badge?: string;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  image: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface PackageOffer {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SALON_INFO = {
  name: "AURA",
  tagline: "Haute Coiffure, Ayurvedic Spa & Luxury Bridal Lounge",
  phone: "+91 98200 12345",
  email: "concierge@aurasalon.in",
  address: "Plot 42, Linking Road, Near Bandra Talao, Bandra West, Mumbai, Maharashtra 400050",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  announcement: "✨ Festive & Wedding Season Special: Complimentary Kérastase Hair Spa with every Balayage or Pre-Bridal Package!",
  rating: "4.9",
  reviewsCount: "1,850+",
  experienceYears: "14+",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "signature-cut",
    name: "Designer Haircut & Kérastase Blowdry",
    category: "haircuts",
    duration: "45 mins",
    price: "₹1,499+",
    badge: "Bestseller",
    description: "Detailed consultation, luxury scalp massage with custom essential elixir, precision texturizing cut, and bouncy red-carpet blowout.",
    image: "/images/haircut.webp",
  },
  {
    id: "caramel-balayage",
    name: "Warm Caramel & Hazelnut Balayage",
    category: "color",
    duration: "150 mins",
    price: "₹5,999+",
    badge: "Trending",
    description: "Hand-painted seamless highlights perfectly tailored to Indian skin undertones, enriched with Olaplex bond multiplier and gloss glaze.",
    image: "/images/balayage.webp",
  },
  {
    id: "botoplex-treatment",
    name: "Nanoplastia & Botoplex Silk Infusion",
    category: "treatments",
    duration: "120 mins",
    price: "₹6,499+",
    badge: "Frizz-Free",
    description: "Formaldehyde-free intensive smoothing treatment specifically formulated for humid Indian weather. Delivers high mirror shine for 5+ months.",
    image: "/images/smoothening.webp",
  },
  {
    id: "royal-bridal-hd",
    name: "Royal HD / Airbrush Bridal Makeover",
    category: "bridal",
    duration: "180 mins",
    price: "₹18,500+",
    badge: "Signature VIP",
    description: "Complete royal bridal styling including high-definition airbrush makeup, couture hairstyle, lehenga/saree draping, jewelry setting & mink lashes.",
    image: "/images/bridal.webp",
  },
  {
    id: "gold-radiance-facial",
    name: "24K Shahnaz & Saffron Radiance Facial",
    category: "spa",
    duration: "75 mins",
    price: "₹3,499",
    badge: "Bridal Glow",
    description: "Kumkumadi & saffron infusion, ultrasonic extraction, 24K pure gold leaf mask, ice-globe cryotherapy, and lymphatic face contouring.",
    image: "/images/facial.webp",
  },
  {
    id: "japanese-head-spa",
    name: "Waterfall Head Spa & Ayurvedic Scalp Detox",
    category: "treatments",
    duration: "60 mins",
    price: "₹2,799",
    badge: "Holistic",
    description: "Micro-mist scalp scanner, Bhringraj & tea tree steam scrub, soothing hydrotherapy water halo ring, and upper back marma-point acupressure.",
    image: "/images/head-spa.webp",
  },
  {
    id: "mens-executive-groom",
    name: "Gentleman's Royal Beard & Hair Ritual",
    category: "haircuts",
    duration: "50 mins",
    price: "₹1,199",
    description: "Precision scissor styling, organic hot-towel steam lather, razor sharp beard sculpting, and charcoal anti-pollution facial scrub.",
    image: "/images/grooming.webp",
  },
  {
    id: "crystal-pedi-mani",
    name: "Elysian Rose & Crystal Spa Pedicure",
    category: "spa",
    duration: "60 mins",
    price: "₹1,899",
    badge: "Relaxation",
    description: "Rose petal soak, organic Himalayan salt scrub, deep moisturizing paraffin wax wrap, and extended calf reflexology massage.",
    image: "/images/mehndi.webp",
  },
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: "priyanka",
    name: "Priyanka Mehra",
    role: "Founder & Celebrity Bridal Stylist",
    experience: "14+ Years in Bollywood & Bridal Fashion",
    specialty: "High-Definition Royal Bridal & Saree Draping",
    bio: "Having worked with top Bollywood celebrities and royal destination weddings in Udaipur and Mumbai, Priyanka curates timeless glamour.",
    image: "/images/priyanka.webp",
    rating: 5.0,
  },
  {
    id: "rohit",
    name: "Rohit Khanna",
    role: "Master Colorist & Balayage Pioneer",
    experience: "11+ Years International Experience",
    specialty: "Indian Skin Tone Balayage & Olaplex Transformations",
    bio: "Trained in London and Mumbai, Rohit specializes in honey tones, rich mocha melts, and damage-free color corrections.",
    image: "/images/rohit.webp",
    rating: 4.9,
  },
  {
    id: "ananya",
    name: "Ananya Sen",
    role: "Senior Aesthetician & Skin Alchemist",
    experience: "9+ Years Clinical & Ayurvedic Aesthetics",
    specialty: "Glass Skin Facials, Pigmentation & Saffron Peels",
    bio: "Combines Vedic herbal science with modern Korean hydro-dermabrasion techniques to deliver instant festive glow.",
    image: "/images/ananya.webp",
    rating: 4.9,
  },
  {
    id: "kunal",
    name: "Kunal Verma",
    role: "Texture Specialist & Creative Director",
    experience: "10+ Years Precision Cutting",
    specialty: "Bespoke Layering, Botoplex & Men's Grooming",
    bio: "Celebrated for voluminous butterfly haircuts, curtain bangs tailored for Indian thick hair, and long-lasting smoothening.",
    image: "/images/kunal.webp",
    rating: 4.9,
  },
];

export const PACKAGES_DATA: PackageOffer[] = [
  {
    id: "festive-glow",
    title: "Festive & Party Glam",
    price: "₹3,999",
    originalPrice: "₹5,500",
    description: "Perfect for sangeet nights, family functions, or weekend celebrations.",
    features: [
      "Designer Haircut & Volume Blowdry",
      "Kérastase Intensive Scalp Mask & Steam",
      "Instant Glow Gold Peptide Express Facial",
      "Crystal Manicure with Gel Finish",
      "Complimentary Masala Chai or Filter Coffee",
    ],
    isPopular: false,
  },
  {
    id: "pre-bridal-radiance",
    title: "Pre-Bridal Queen Ritual",
    price: "₹12,499",
    originalPrice: "₹17,000",
    description: "Our top-rated 2-session comprehensive bridal prep for glowing hair and skin.",
    features: [
      "Full Nanoplastia / Botoplex Hair Smoothening",
      "24K Pure Gold Leaf Cellular Facial",
      "Full Body Rose & Walnut Polishing Scrub",
      "Luxury Spa Mani-Pedi with Paraffin Dip",
      "Eyebrow Threading & Upper Lip Organic Waxing",
      "Private VIP Suite with Refreshments",
    ],
    isPopular: true,
  },
  {
    id: "royal-dulhan",
    title: "The Royal Dulhan Couture Suite",
    price: "₹24,999",
    originalPrice: "₹32,000",
    description: "The ultimate wedding day pampering experience for the bride and mother of the bride.",
    features: [
      "HD Airbrush Waterproof Bridal Makeup",
      "Designer Bridal Hairdo with Fresh Flowers / Gajra",
      "Traditional & Contemporary Saree / Lehenga Draping",
      "Jewelry, Maang Tikka & Veil Setting Assistance",
      "Mother of the Bride Express Party Makeover",
      "Luxury Touch-Up Survival Kit & Mimosas",
    ],
    isPopular: false,
  },
];

export const GALLERY_DATA = [
  {
    title: "Royal HD Bridal Makeover",
    category: "Bridal Couture",
    image: "/images/bridal.webp",
    stylist: "Priyanka Mehra",
  },
  {
    title: "Warm Caramel Balayage on Dark Hair",
    category: "Hair Color",
    image: "/images/balayage.webp",
    stylist: "Rohit Khanna",
  },
  {
    title: "Voluminous Butterfly Layers",
    category: "Precision Cut",
    image: "/images/haircut.webp",
    stylist: "Kunal Verma",
  },
  {
    title: "24K Gold & Saffron Bridal Facial",
    category: "Skin Spa",
    image: "/images/facial.webp",
    stylist: "Ananya Sen",
  },
  {
    title: "Nanoplastia Mirror Silk Gloss",
    category: "Precision Cut",
    image: "/images/smoothening.webp",
    stylist: "Kunal Verma",
  },
  {
    title: "Royal Bridal Mehndi & Nails",
    category: "Wellness Ritual",
    image: "/images/mehndi.webp",
    stylist: "Ananya Sen",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Meera Kapoor",
    role: "Dermatologist, Mumbai",
    rating: 5,
    text: "AURA is easily the most sophisticated salon in Bandra. Rohit did a caramel balayage that looks so natural against my Indian skin tone. Absolutely no brassiness and zero hair damage thanks to their Olaplex treatments.",
    date: "1 week ago",
    service: "Warm Caramel Balayage",
  },
  {
    id: "t2",
    name: "Ananya Deshmukh",
    role: "Bride",
    rating: 5,
    text: "Priyanka and her team did my bridal makeup for my wedding at Taj Lands End. The airbrush base was flawless for 14 hours straight under heavy stage lighting. My lehenga draping was pin-perfect. Every bride deserves AURA!",
    date: "3 weeks ago",
    service: "The Royal Dulhan Couture Suite",
  },
  {
    id: "t3",
    name: "Rohan Singhal",
    role: "Tech Entrepreneur",
    rating: 5,
    text: "The Waterfall Ayurvedic Head Spa is extraordinary. After weeks of long screen hours and stress, the Bhringraj oil massage and water halo completely refreshed me. Outstanding hospitality and coffee as well.",
    date: "2 weeks ago",
    service: "Waterfall Head Spa & Scalp Detox",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "Do you offer destination wedding bridal styling outside Mumbai?",
    answer: "Yes, our Master Bridal Team led by Priyanka Mehra travels across India (Udaipur, Goa, Jaipur, Delhi) and internationally for luxury destination weddings. Please book at least 2 months in advance.",
  },
  {
    question: "Are your hair colors and treatments safe for sensitive Indian hair?",
    answer: "Absolutely. We exclusively formulate with ammonia-free, PPD-free botanical colors enriched with Olaplex and Kérastase bond protectors. We also perform a complimentary patch test prior to any major chemical service.",
  },
  {
    question: "How long before my wedding should I start my Pre-Bridal rituals?",
    answer: "We recommend scheduling your first consultation 4 to 6 weeks before your wedding date. This allows optimal time for skin rejuvenation, facials, and hair smoothening without last-minute skin sensitivity.",
  },
  {
    question: "Is there valet parking available at your Bandra West salon?",
    answer: "Yes, we provide complimentary valet parking directly at our Linking Road portico entrance for all AURA guests.",
  },
  {
    question: "Do I need an appointment or are walk-ins welcome?",
    answer: "While we gladly welcome walk-ins subject to stylist availability, we strongly recommend booking in advance, especially on weekends and auspicious wedding dates.",
  },
];
