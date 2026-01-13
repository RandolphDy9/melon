import { ServicePackage, IndividualService, Review } from "./types";

export const PACKAGES: ServicePackage[] = [
  {
    id: 1,
    name: "Classic Magic",
    price: "$299",
    duration: "1 hour",
    icon: "🪄",
    images: [
      "https://images.unsplash.com/photo-1705849441124-a109b0e53956?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1718863342104-123667960213?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Magic Show",
      "One Clown Entertainer",
      "Animal Show: Rabbit & Dove",
    ],
    fullDescription:
      "Our signature high-energy magic show! Perfect for birthday parties and small gatherings. Watch as our professional clown dazzles kids with interactive tricks, including a magical appearance by our friendly rabbit and dove. Guaranteed giggles and wonder!",
  },
  {
    id: 2,
    name: "Deluxe Fun Mix",
    price: "$399",
    duration: "1 hr 45 mins",
    icon: "🎈",
    images: [
      "https://images.unsplash.com/photo-1612855190135-bdbacda2a2b5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Magic Show",
      "Two Clown Entertainers",
      "Balloon Twisting",
      "Bubble Show",
      "Animal Show",
    ],
    fullDescription:
      "Double the entertainers, double the fun! This comprehensive package keeps the energy high for nearly two hours. Includes a full magic show, intricate balloon twisting for every child, and an enchanting bubble show that fills the air with joy. The animal appearance remains the grand finale!",
  },
  {
    id: 3,
    name: "Event Pro Suite",
    price: "$650",
    icon: "🎧",
    images: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565972476522-4338522b1929?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Emcee & Event Program",
      "DJ and Sounds",
      "Lights & Bubble Maker",
    ],
    savings: "Big savings of $75",
    fullDescription:
      "Taking the stress out of event planning! We provide a professional emcee to host your entire program, ensuring everything stays on schedule. Includes a full DJ setup with high-quality sound, party lights, and a heavy-duty bubble machine to create an amazing atmosphere.",
  },
  {
    id: 4,
    name: "Grand Celebration",
    price: "$1375",
    icon: "📸",
    images: [
      "https://images.unsplash.com/photo-1727892349075-401c9df83995?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1727892349154-ac042a8565c7?q=80&w=800&auto=format&fit=crop",
    ],
    features: ["Everything in Packages 2 + 3", "Photo Booth (2 hours)"],
    savings: "Big savings of $100",
    fullDescription:
      "The ultimate entertainment solution. We combine our best entertainers (Package 2) with our professional production team (Package 3) and add a high-end photo booth with fun props. You get the magic, the music, and the memories captured forever.",
  },
  {
    id: 5,
    name: "Ultimate Gala",
    price: "$1725 & up",
    icon: "🏰",
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1767438886481-3a477e181f2b?q=80&w=800&auto=format&fit=crop",
    ],
    features: ["Everything in Package 4", "Basic Balloon Set-up Decorations"],
    savings: "Price depends on inclusions",
    fullDescription:
      "The complete 'turn-key' party experience. We handle the entertainment, the music, the photos, and the atmosphere. This package includes a professionally designed balloon arch or backdrop to transform your venue into a magical wonderland. Customizable based on your theme!",
  },
  {
    id: 6,
    name: "Custom Celebration",
    price: "Custom",
    icon: "🎨",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
    ],
    features: [
      "Bespoke Itinerary",
      "Theme Customization",
      "Flexible Staffing",
      "Special Requests",
    ],
    fullDescription:
      "Don't see exactly what you're looking for? Let's build it together! Whether it's a themed corporate event, a massive school festival, or a unique community gathering, we can mix and match any of our services to create your perfect party plan.",
  },
];

export const INDIVIDUAL_SERVICES: IndividualService[] = [
  { name: "Magic & Balloons (Set A)", price: "$299", icon: "✨" },
  { name: "Magic & Balloons (Set B)", price: "$399", icon: "🎩" },
  { name: "Professional Emcee", price: "$325", icon: "🎤" },
  { name: "DJ & Sound System", price: "$350", icon: "🎵" },
  { name: "Special Effects (Lights/Bubbles)", price: "$50", icon: "🫧" },
  {
    name: "Photo Booth",
    price: "$175/hr",
    icon: "📷",
    note: "*Two hrs minimum",
  },
  { name: "Premium Face Painting", price: "$100/hr", icon: "🎨" },
  {
    name: "Mobile Bartending",
    price: "$350/event",
    icon: "🍹",
    note: "*Excluding drinks",
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Jennifer L.",
    rating: 5,
    text: "Melon Fun made my daughter's 5th birthday absolutely magical! The rabbit appearance was the highlight.",
    date: "Feb 2025",
  },
  {
    id: 2,
    author: "Marcus T.",
    rating: 5,
    text: "Extremely professional and punctual. The DJ kept the energy up and the emcee was hilarious.",
    date: "Jan 2025",
  },
  {
    id: 3,
    author: "Sarah W.",
    rating: 5,
    text: "Best face painting in the GTA. The artists are truly talented. Highly recommend the Deluxe package!",
    date: "Dec 2024",
  },
  {
    id: 4,
    author: "David K.",
    rating: 5,
    text: "We booked the Event Pro Suite for our community festival. The sound quality was perfect and the bubble machine was a hit with the toddlers!",
    date: "Feb 2025",
  },
  {
    id: 5,
    author: "Elena R.",
    rating: 5,
    text: "Truly the best value. The entertainers handled 30 hyper kids with ease. I could actually enjoy my own party for once!",
    date: "Nov 2024",
  },
  {
    id: 6,
    author: "Chris M.",
    rating: 5,
    text: "The photo booth props were so creative. Everyone left with amazing physical prints and digital copies. Five stars!",
    date: "Jan 2025",
  },
  {
    id: 7,
    author: "Linda P.",
    rating: 5,
    text: "Margie was so helpful with the booking process. Everything went exactly as planned. The magic show was very interactive.",
    date: "Oct 2024",
  },
  {
    id: 8,
    author: "Robert G.",
    rating: 5,
    text: "I was skeptical about the mobile bartending but they exceeded expectations. Professional, clean, and very friendly service.",
    date: "Feb 2025",
  },
  {
    id: 9,
    author: "Michelle S.",
    rating: 5,
    text: "The balloon setup transformed our boring community hall into a wonderland. Incredible artistic talent!",
    date: "Sept 2024",
  },
];

export const CONTACT_INFO = {
  margie: "+1 647-219-1155",
  sallyDoc: "+1 416-394-3128 / +1 416-474-3128",
  rachelle: "+1 416-878-0052",
  facebook: "https://www.facebook.com/melon.facepainting",
  area: "Serving Toronto & the GTA",
};
