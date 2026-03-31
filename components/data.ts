import type { LucideIcon } from "lucide-react";
import {
  Bath,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  ShieldCheck,
  Trash2,
  Users,
  UtilityPole,
  Wind
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ApartmentItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Unit = {
  id: string;
  floor: string;
  size: string;
  rent: string;
  status: "Available" | "Occupied";
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Apartments", href: "#apartments" },
  { label: "Units", href: "#units" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const features: Feature[] = [
  {
    title: "24/7 Security",
    description: "Round-the-clock security presence with monitored entry points.",
    icon: ShieldCheck
  },
  {
    title: "Clean & Maintained Environment",
    description: "Regular housekeeping and maintenance for shared spaces.",
    icon: CheckCircle2
  },
  {
    title: "Reliable Utilities",
    description: "Consistent water and electricity support for everyday ease.",
    icon: UtilityPole
  },
  {
    title: "Family-Friendly Atmosphere",
    description: "Safe and welcoming community for families of all sizes.",
    icon: Users
  },
  {
    title: "Easy Access Location",
    description: "Convenient connectivity to transport, schools, and local shops.",
    icon: MapPin
  },
  {
    title: "Proper Waste Management",
    description: "Organized disposal and hygienic waste handling standards.",
    icon: Trash2
  }
];

export const apartmentDetails: ApartmentItem[] = [
  {
    title: "Spacious Rooms",
    description: "Thoughtful layouts with room to live, relax, and entertain.",
    icon: Home
  },
  {
    title: "Proper Ventilation",
    description: "Balanced natural airflow and bright interiors for daily comfort.",
    icon: Wind
  },
  {
    title: "Attached Bathrooms",
    description: "Modern attached bathrooms designed for convenience.",
    icon: Bath
  },
  {
    title: "Private Balcony",
    description: "A personal open-air extension for fresh air and city views.",
    icon: Building2
  },
  {
    title: "Functional Kitchen Space",
    description: "Well-planned kitchen areas with practical movement and storage.",
    icon: Home
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80",
    alt: "Luxury apartment exterior at dusk",
    category: "Exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern bright living room",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm and spacious bedroom",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80",
    alt: "Contemporary apartment kitchen",
    category: "Rooms"
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    alt: "Comfortable family dining area",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    alt: "Clean landscaped surroundings",
    category: "Surroundings"
  }
];

export const units: Unit[] = [
  { id: "A1", floor: "1st Floor", size: "250 sq ft", rent: "BDT 10,000/mo", status: "Available" },
  { id: "A3", floor: "1st Floor", size: "300 sq ft", rent: "BDT 4,000/mo", status: "Occupied" },
  { id: "B2", floor: "2nd Floor", size: "420 sq ft", rent: "BDT 4,500/mo", status: "Available" },
  { id: "C1", floor: "3rd Floor", size: "500 sq ft", rent: "BDT 3,500/mo", status: "Occupied" }
];
