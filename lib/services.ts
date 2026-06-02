export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Haircut",
    description: "Precision cut tailored to your style. Includes hot towel finish, scalp massage, and styling.",
    duration: "45 min",
    price: 45,
    category: "Hair",
    image: "/images/darkroom1.webp",
    popular: true,
  },
  {
    id: "fade-cut",
    name: "Fade & Taper",
    description: "Smooth fade from skin to any length. Skin fade, low fade, or mid fade — your choice.",
    duration: "50 min",
    price: 55,
    category: "Hair",
    image: "/images/darkroom2.webp",
    popular: true,
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    description: "Expert beard sculpting with straight-razor definition. Hot towel treatment included.",
    duration: "30 min",
    price: 35,
    category: "Beard",
    image: "/images/darkroom3.webp",
  },
  {
    id: "hot-shave",
    name: "Royal Hot Shave",
    description: "Old-school straight razor shave with multiple hot towel treatments, pre-shave oil and aftershave balm.",
    duration: "45 min",
    price: 50,
    category: "Beard",
    image: "/images/darkroom4.webp",
    popular: true,
  },
  {
    id: "cut-beard",
    name: "Cut & Beard Combo",
    description: "Full haircut combined with beard grooming. The complete Dark Room experience.",
    duration: "75 min",
    price: 75,
    category: "Combo",
    image: "/images/darkroom5.webp",
    popular: true,
  },
  {
    id: "hair-treatment",
    name: "Scalp Treatment",
    description: "Deep conditioning scalp treatment with steam, essential oils, and hot towel wrap.",
    duration: "45 min",
    price: 60,
    category: "Treatment",
    image: "/images/darkroom6.webp",
  },
  {
    id: "kids-cut",
    name: "Junior Cut",
    description: "Haircut for the young gents, ages 12 and under. Patient, fun, and precise.",
    duration: "30 min",
    price: 30,
    category: "Hair",
    image: "/images/darkroom7.webp",
  },
  {
    id: "color-service",
    name: "Color & Highlights",
    description: "Professional hair coloring service including consultation, application, and styling.",
    duration: "90 min",
    price: 95,
    category: "Treatment",
    image: "/images/darkroom8.webp",
  },
];

export const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM",
];

export const barbers = [
  { id: "any", name: "No Preference" },
  { id: "marcus", name: "Marcus — The Architect" },
  { id: "james", name: "James — The Sculptor" },
  { id: "kai", name: "Kai — The Artist" },
];
