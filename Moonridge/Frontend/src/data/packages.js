// src/data/packages.js

export const CATEGORY = {
  TOUR: "tour",
  BIKE: "bike",
  CAR: "car",
};

export const PACKAGES = [
  // --- Tour Packages ---
  {
    id: "meghalaya",
    title: "Meghalaya Adventure Package",
    category: CATEGORY.TOUR,
    featured: true,
    price: "₹30,990",
    images: ["/images/img1.jpeg", "/images/img2.jpeg", "/images/img4.jpeg"],
    plans: [
      {
        name: "Regular",
        price: "₹14,999",
        features: ["Hotel Stay (3★)", "Breakfast", "Sightseeing", "Transport"],
      },
      {
        name: "Pro",
        price: "₹21,999",
        features: ["Hotel Stay (5★)", "All Meals", "Private Cab", "Guide"],
      },
    ],
    about:
      "Explore Meghalaya’s lush landscapes, waterfalls, caves, and vibrant culture across Shillong and Cherrapunji.",
    itinerary: ["Arrival → Shillong transfer", "Shillong sightseeing", "Cherrapunji waterfalls & caves"],
  },

  {
    id: "kashmir",
    title: "Kashmir Paradise Tour",
    category: CATEGORY.TOUR,
    featured: true,
    price: "₹21,990",
    images: ["/images/img1.jpeg", "/images/img3.jpeg", "/images/img4.jpeg"],
    plans: [
      {
        name: "Regular",
        price: "₹18,999",
        features: ["3★ Hotel", "Breakfast", "Sightseeing"],
      },
      {
        name: "Pro",
        price: "₹28,999",
        features: ["5★ Hotel", "All Meals", "Private Cab"],
      },
    ],
    about: "Experience snow-covered mountains, Dal Lake houseboats, and breathtaking valleys.",
    itinerary: ["Arrival → Srinagar", "Gulmarg visit", "Pahalgam tour"],
  },

  {
    id: "andaman",
    title: "Andaman Island Package",
    category: CATEGORY.TOUR,
    featured: true,
    price: "₹24,990",
    images: ["/images/img2.jpeg", "/images/img3.jpeg", "/images/img4.jpeg"],
    plans: [
      {
        name: "Regular",
        price: "₹20,999",
        features: ["Hotel", "Breakfast", "Island tour"],
      },
      {
        name: "Pro",
        price: "₹30,999",
        features: ["Resort", "All meals", "Water sports"],
      },
    ],
    about: "Enjoy crystal clear beaches, coral reefs, and exciting water activities.",
    itinerary: ["Arrival → Port Blair", "Havelock Island", "Water activities & return"],
  },

  // --- Bike Packages ---
  {
    id: "bike1",
    title: "Ladakh Bike Adventure",
    category: CATEGORY.BIKE,
    featured: true,
    price: "₹35,000",
    images: ["/images/bike1.jpg", "/images/img1.jpeg", "/images/img3.jpeg"],
    plans: [
      {
        name: "Regular",
        price: "₹25,000",
        features: ["Bike Rental", "Hotel Stay", "Breakfast", "Sightseeing", "Guide"],
      },
      {
        name: "Pro",
        price: "₹35,000",
        features: ["Premium Bike", "5★ Hotel Stay", "All Meals", "Private Guide"],
      },
    ],
    about: "Ride through Ladakh’s stunning mountains, valleys, and high-altitude passes.",
    itinerary: ["Arrival → Leh", "Leh local sightseeing", "Nubra Valley ride", "Pangong Lake ride"],
  },

  {
    id: "bike2",
    title: "Spiti Valley Ride",
    category: CATEGORY.BIKE,
    featured: true,
    price: "₹28,000",
    images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"],
    plans: [
      {
        name: "Regular",
        price: "₹22,000",
        features: ["Bike Rental", "Hotel Stay", "Breakfast", "Sightseeing"],
      },
      {
        name: "Pro",
        price: "₹28,000",
        features: ["Premium Bike", "3★ Hotel Stay", "All Meals", "Private Guide"],
      },
    ],
    about: "Explore the remote and scenic Spiti Valley with thrilling bike rides.",
    itinerary: ["Arrival → Kaza", "Key Monastery visit", "Chandratal Lake ride"],
  },

  {
    id: "bike3",
    title: "Manali to Leh",
    category: CATEGORY.BIKE,
    featured: false,
    price: "₹32,000",
    images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"],
    plans: [
      {
        name: "Regular",
        price: "₹27,000",
        features: ["Bike Rental", "Hotel Stay", "Breakfast", "Guide"],
      },
      {
        name: "Pro",
        price: "₹32,000",
        features: ["Premium Bike", "5★ Hotel", "All Meals", "Private Guide"],
      },
    ],
    about: "Epic ride from Manali to Leh across high mountain passes and valleys.",
    itinerary: ["Manali → Rohtang Pass", "Sarchu → Leh ride", "Leh local sightseeing"],
  },

  {
    id: "bike4",
    title: "Kashmir Ride",
    category: CATEGORY.BIKE,
    featured: true,
    price: "₹30,000",
    images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"],
    plans: [
      {
        name: "Regular",
        price: "₹25,000",
        features: ["Bike Rental", "Hotel Stay", "Breakfast", "Sightseeing"],
      },
      {
        name: "Pro",
        price: "₹30,000",
        features: ["Premium Bike", "5★ Hotel Stay", "All Meals", "Private Guide"],
      },
    ],
    about: "Ride through Kashmir’s valleys, mountains, and breathtaking landscapes.",
    itinerary: ["Arrival → Srinagar", "Gulmarg ride", "Pahalgam tour"],
  },

  {
    id: "bike5",
    title: "Zanskar Valley",
    category: CATEGORY.BIKE,
    featured: false,
    price: "₹33,000",
    images: ["/images/bike1.jpg", "/images/bike2.jpg", "/images/bike3.jpg"],
    plans: [
      {
        name: "Regular",
        price: "₹28,000",
        features: ["Bike Rental", "Hotel Stay", "Breakfast", "Guide"],
      },
      {
        name: "Pro",
        price: "₹33,000",
        features: ["Premium Bike", "5★ Hotel Stay", "All Meals", "Private Guide"],
      },
    ],
    about: "Adventure ride across the beautiful Zanskar Valley with stunning views.",
    itinerary: ["Arrival → Padum", "Zanskar Valley ride", "Local sightseeing"],
  },
];