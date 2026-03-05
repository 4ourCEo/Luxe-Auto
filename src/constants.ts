export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  duration: string;
  isPopular?: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'essential',
    name: 'Essential Refresh',
    price: 149,
    description: 'Perfect for regular maintenance and keeping your vehicle in pristine condition.',
    duration: '2-3 Hours',
    features: [
      'Hand Wash & Dry',
      'Wheel & Tire Cleaning',
      'Interior Vacuum',
      'Window Cleaning',
      'Interior Wipe Down',
      'Spray Wax Finish'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    price: 299,
    description: 'Our most popular choice. A deep clean that restores that showroom feel.',
    duration: '4-6 Hours',
    isPopular: true,
    features: [
      'Everything in Essential',
      'Clay Bar Treatment',
      'Iron Decontamination',
      'Leather Cleaning & Conditioning',
      'Shampoo Carpets & Mats',
      'Engine Bay Detail',
      'Machine Polish & Sealant'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ultimate Restoration',
    price: 599,
    description: 'The pinnacle of automotive care. Every inch of your vehicle perfected.',
    duration: '8-10 Hours',
    features: [
      'Everything in Premium',
      'Multi-Stage Paint Correction',
      'Ceramic Coating (1-Year)',
      'Steam Clean All Surfaces',
      'Fabric Protection',
      'Headlight Restoration',
      'Trim Restoration'
    ]
  }
];

export const ADD_ONS: AddOn[] = [
  { id: 'ceramic-wheels', name: 'Ceramic Wheel Coating', price: 99, description: 'Protects wheels from brake dust and road grime.' },
  { id: 'pet-hair', name: 'Pet Hair Removal', price: 49, description: 'Deep removal of stubborn pet hair from all fabrics.' },
  { id: 'odor', name: 'Ozone Odor Treatment', price: 75, description: 'Eliminates smoke, mold, and other deep-seated odors.' },
  { id: 'glass', name: 'Glass Ceramic Coating', price: 60, description: 'Superior visibility and water repellency for all windows.' },
  { id: 'leather', name: 'Premium Leather Coating', price: 120, description: 'Advanced protection against spills and UV damage.' }
];

export const TESTIMONIALS = [
  {
    name: "James Wilson",
    role: "Porsche 911 Owner",
    content: "The attention to detail is staggering. My car looks better than the day I picked it up from the dealership. Truly a premium experience.",
    avatar: "https://picsum.photos/seed/james/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Tesla Model S Owner",
    content: "Seamless booking process and incredible results. The ceramic coating they applied has made maintenance so much easier.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Classic Mustang Owner",
    content: "They treated my vintage ride with the utmost respect. The paint correction brought back a depth I thought was lost forever.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];
