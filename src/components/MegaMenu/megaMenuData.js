// src/data/megaMenuData.js
import livingRoom from "../../assets/living-room.webp";
import bedeRoom from "../../assets/bed-room.webp";
import office from "../../assets/office.webp";
export const megaMenuData = {
  "Living Room": {
    categories: ["Sofas", "Chairs", "Recliners"],
    subcategories: {
      Sofas: ["2‑Seater Sofas", "3‑Seater Sofas"],
      Chairs: ["Plastic Chairs", "Folding Chairs"],
      Recliners: ["Electric Recliners", "Manual Recliners"],
    },
    image: livingRoom,
  },
  Bedroom: {
    categories: ["Beds", "Wardrobes", "Dressers"],
    subcategories: {
      Beds: ["King Beds", "Queen Beds", "Single Beds"],
      Wardrobes: ["2‑Door Wardrobes", "3‑Door Wardrobes"],
      Dressers: ["6‑Drawer Dressers", "4‑Drawer Dressers"],
    },
    image: bedeRoom,
  },
  Office: {
    categories: ["Desks", "Chairs", "Cabinets"],
    subcategories: {
      Desks: ["Standing Desks", "Executive Desks"],
      Chairs: ["Ergonomic Chairs", "Visitor Chairs"],
      Cabinets: ["Lockable Cabinets", "Floating Cabinets"],
    },
    image: office,
  },
};

export const popularCategories = [
  "Plastic Chairs",
  "King Sofa",
  "Modern Desk",
  "Ergonomic Chair",
];
