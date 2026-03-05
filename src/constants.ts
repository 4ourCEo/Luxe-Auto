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

export interface ResultShowcaseItem {
  id: string;
  title: string;
  service: string;
  outcome: string;
  beforeImage: string;
  afterImage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'essential',
    name: 'Full Car Detailing',
    price: 310,
    description: "Comprehensive interior and exterior detail service with mobile convenience.",
    duration: '3-4 Hours',
    features: [
      'Exterior Hand Wash and Dry',
      'Wheel and Tire Cleaning',
      'Interior Vacuum and Wipe Down',
      'Glass and Mirror Cleaning',
      'Trim Dressing',
      'Final Quality Inspection'
    ]
  },
  {
    id: 'premium',
    name: 'Paint Correction',
    price: 550,
    description: 'Most booked package. Multi-stage polishing to remove swirls and restore gloss.',
    duration: '5-7 Hours',
    isPopular: true,
    features: [
      'Everything in Full Detail',
      'Clay Bar Decontamination',
      'Iron and Fallout Removal',
      'Multi-Stage Paint Polishing',
      'Swirl and Light Defect Reduction',
      'Paint Refinement for Gloss',
      'Paint Prep for Coating'
    ]
  },
  {
    id: 'ultimate',
    name: 'Ceramic Coating Package',
    price: 950,
    description: 'Long-term paint protection with hydrophobic performance and deep shine.',
    duration: '8-12 Hours',
    features: [
      'Everything in Paint Correction',
      'Professional Ceramic Coating Application',
      'Surface Prep and Panel Wipe',
      'Hydrophobic Paint Protection',
      'UV and Chemical Resistance Layer',
      'Enhanced Gloss Finish',
      'Aftercare Guidance'
    ]
  }
];

export const ADD_ONS: AddOn[] = [
  { id: 'ceramic-wheels', name: 'Ceramic Wheel Coating', price: 99, description: 'Resists brake dust buildup and makes wheel cleaning easier.' },
  { id: 'pet-hair', name: 'Pet Hair Removal', price: 49, description: 'Deep extraction of embedded pet hair from seats and carpet.' },
  { id: 'odor', name: 'Ozone Odor Treatment', price: 75, description: 'Neutralizes smoke, mildew, and persistent interior odors.' },
  { id: 'glass', name: 'Glass Ceramic Coating', price: 60, description: 'Improves wet-weather visibility with long-lasting water beading.' },
  { id: 'leather', name: 'Premium Leather Coating', price: 120, description: 'Adds UV and spill resistance while preserving a natural leather feel.' }
];

export const TESTIMONIALS = [
  {
    name: 'Client Placeholder 01',
    role: "Dreamy's Customer (Placeholder)",
    content: 'Placeholder review: fast scheduling, clear communication, and excellent finish quality.',
    avatar: 'https://picsum.photos/seed/dreamys-client-1/100/100'
  },
  {
    name: 'Client Placeholder 02',
    role: 'Seattle Area (Placeholder)',
    content: 'Placeholder review: paint correction made a noticeable difference and improved gloss.',
    avatar: 'https://picsum.photos/seed/dreamys-client-2/100/100'
  },
  {
    name: 'Client Placeholder 03',
    role: 'Eastside Area (Placeholder)',
    content: 'Placeholder review: on-time mobile appointment and strong attention to detail.',
    avatar: 'https://picsum.photos/seed/dreamys-client-3/100/100'
  }
];

export const RESULTS_SHOWCASE: ResultShowcaseItem[] = [
  {
    id: 'showcase-1',
    title: 'Mobile Full Detail',
    service: 'Full Car Detailing',
    outcome: 'Interior debris removed, exterior restored, and paint finish noticeably refreshed for weekly driving.',
    beforeImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'showcase-2',
    title: 'Correction + Coating Upgrade',
    service: 'Paint Correction and Ceramic Coating',
    outcome: 'Visible swirl reduction and long-lasting hydrophobic protection after correction and coating prep.',
    beforeImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80',
    afterImage: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=900&q=80',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How long does a full detail take?',
    answer: 'Most full details are completed in 3-4 hours. Paint correction and ceramic coating services typically require longer appointments.',
  },
  {
    question: 'Do you offer mobile detailing?',
    answer: 'Yes. Mobile service is available across Seattle and surrounding Eastside areas by appointment.',
  },
  {
    question: 'What package should I choose?',
    answer: 'Start with Full Car Detailing for routine care. Choose Paint Correction for swirl removal, or Ceramic Coating for longer-term protection.',
  },
  {
    question: 'Do you provide clear pricing before booking?',
    answer: 'Yes. We show transparent starting prices and your booking summary reflects package and add-on estimates before submission.',
  },
];
