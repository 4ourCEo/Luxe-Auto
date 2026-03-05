import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Clock,
  CheckCircle2,
  Star,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Droplets,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Globe,
  BadgeCheck,
  WandSparkles,
} from 'lucide-react';
import { cn } from './lib/utils';
import { SERVICE_TIERS, ADD_ONS, TESTIMONIALS, RESULTS_SHOWCASE, FAQ_ITEMS } from './constants';
import { GlowingEffectDemo } from '@/components/ui/demo';

type BookingFormData = {
  package: string;
  addOns: string[];
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  vehicle: string;
};

const BUSINESS = {
  name: "Dreamy's Mobile Detailing & Ceramic Coating",
  shortName: "Dreamy's Detailing",
  website: 'https://dreamysdetailing.com/',
  logoPath: '/brands/dreamys-logo.png',
  phone: '(206) 600-8071',
  email: 'info@dreamysdetailing.com',
  address: '5817 18th Ave S, Seattle, WA 98108',
  rating: '5.0 / 5.0',
  reviews: '311 Google Reviews',
  availability: 'Mobile Service, 7 Days / Week',
  instagram: 'https://www.instagram.com/dreamysdetail/',
};

const SERVICE_AREAS = ['Seattle', 'Bainbridge Island', 'Bellevue', 'Kirkland', 'Redmond', 'Sammamish', 'Issaquah', 'Mercer Island', 'Renton', 'Kent'];

const smoothScrollTo = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const getPackagePrice = (packageId: string): number => {
  const pkg = SERVICE_TIERS.find((tier) => tier.id === packageId);
  return pkg?.price ?? 0;
};

const getAddOnTotal = (addOns: string[]): number => {
  return addOns.reduce((sum, id) => {
    const match = ADD_ONS.find((addon) => addon.id === id);
    return sum + (match?.price ?? 0);
  }, 0);
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Booking', href: '#booking' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent',
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href={BUSINESS.website} className="flex items-center gap-3" aria-label={`${BUSINESS.shortName} home`}>
          <img
            src={BUSINESS.logoPath}
            alt={`${BUSINESS.shortName} logo`}
            className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => smoothScrollTo('booking')}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Book Now
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile navigation"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                smoothScrollTo('booking');
              }}
              className="bg-white text-black px-6 py-3 rounded-xl text-sm font-semibold w-full"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="Premium detailed vehicle"
          className="w-full h-full object-cover animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-white/30" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/50">Premier Mobile Car Detailing In Seattle</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter">
            Mobile Detailing,
            <br />
            <span className="text-white/40 italic">Ceramic Coating Done Right.</span>
          </h1>

          <p className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed font-light">
            5-star rated mobile detailing, paint correction, and ceramic coating for Seattle-area drivers.
            Book online fast and get transparent pricing before confirming your appointment.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => smoothScrollTo('booking')}
              className="bg-white text-black px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 group"
            >
              Get Instant Estimate <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => smoothScrollTo('services')}
              className="glass-panel px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              View Packages
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {[
              { label: 'Google Rating', value: BUSINESS.rating },
              { label: 'Social Proof', value: BUSINESS.reviews },
              { label: 'Availability', value: BUSINESS.availability },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-white/90">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  const items = [
    { icon: <BadgeCheck className="w-4 h-4" />, text: 'Fully Insured Professionals' },
    { icon: <Clock className="w-4 h-4" />, text: '24/7 Online Scheduling' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Seattle + Eastside Service Areas' },
    { icon: <WandSparkles className="w-4 h-4" />, text: 'Paint Correction & Ceramic Experts' },
  ];

  return (
    <section className="px-6 -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.text} className="glass-panel rounded-2xl px-5 py-4 flex items-center gap-3">
            <span className="text-white/80">{item.icon}</span>
            <span className="text-sm text-white/80">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const PricingSection = ({
  formData,
  setFormData,
}: {
  formData: BookingFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
}) => {
  return (
    <section id="services" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Packages With Clear Outcomes</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Every package has transparent pricing, defined scope, and realistic service times so customers know exactly what they are booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative p-8 rounded-3xl flex flex-col h-full transition-all duration-500',
                tier.isPopular ? 'bg-white text-black scale-105 z-10 shadow-2xl' : 'glass-panel text-white',
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
                  Most Booked
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <p className={cn('text-sm mb-6', tier.isPopular ? 'text-black/60' : 'text-white/50')}>{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-serif">${tier.price}</span>
                  <span className={cn('text-sm', tier.isPopular ? 'text-black/40' : 'text-white/30')}>starting at</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-wider opacity-60">
                  <Clock className="w-3 h-3" /> {tier.duration}
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={cn('w-5 h-5 shrink-0', tier.isPopular ? 'text-black' : 'text-white/40')} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, package: tier.id }));
                  smoothScrollTo('booking');
                }}
                className={cn(
                  'w-full py-4 rounded-xl font-bold transition-all',
                  tier.isPopular ? 'bg-black text-white hover:opacity-90' : 'bg-white text-black hover:bg-white/90',
                )}
              >
                Choose This Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section id="results" className="py-28 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Real Before-and-After Proof</h2>
            <p className="text-white/50">
              High-performing detailer sites consistently show visual outcomes. These examples set realistic expectations and build trust before booking.
            </p>
          </div>
          <div className="text-sm text-white/50">Documented transformations from recent client sessions.</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {RESULTS_SHOWCASE.map((item) => (
            <article key={item.id} className="glass-panel rounded-3xl overflow-hidden">
              <div className="grid grid-cols-2 gap-[1px] bg-white/10">
                <img src={item.beforeImage} alt={`${item.title} before detailing`} className="w-full h-52 object-cover" referrerPolicy="no-referrer" />
                <img src={item.afterImage} alt={`${item.title} after detailing`} className="w-full h-52 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">{item.service}</p>
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AddOnsSection = ({
  selectedAddOns,
  toggleAddOn,
}: {
  selectedAddOns: string[];
  toggleAddOn: (id: string) => void;
}) => {
  return (
    <section id="addons" className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif font-bold mb-4">High-Value Add-ons</h2>
            <p className="text-white/50">Select add-ons now so your estimate reflects total scope and pricing before you submit your booking.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-white/40">
            <Sparkles className="w-4 h-4" />
            {selectedAddOns.length} selected
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADD_ONS.map((addon) => {
            const isSelected = selectedAddOns.includes(addon.id);

            return (
              <button
                key={addon.id}
                onClick={() => toggleAddOn(addon.id)}
                className={cn(
                  'text-left glass-panel p-6 rounded-2xl group transition-colors border',
                  isSelected ? 'bg-white/10 border-white/40' : 'border-white/10 hover:bg-white/10',
                )}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-lg">{addon.name}</h4>
                  <span className="font-serif text-xl font-bold">${addon.price}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{addon.description}</p>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors">
                  {isSelected ? 'Added to Estimate' : 'Add to Estimate'} <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      title: 'Inspection & Quote Confirmation',
      description: 'We review your vehicle condition and confirm package scope before work begins.',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: 'Decontamination & Deep Clean',
      description: 'Paint, wheels, trim, and interior are safely decontaminated and prepped.',
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: 'Correction & Finishing',
      description: 'We restore gloss, remove defects where possible, and refine high-touch details.',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Protection & Delivery',
      description: 'Final coatings are applied and your finished vehicle is delivered with care guidance.',
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif font-bold mb-6">
              A Process That
              <br />
              <span className="text-white/40 italic">Builds Trust</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Top-performing detailers reduce uncertainty by showing exactly what happens after booking. We do the same, step by step.
            </p>
            <div className="p-8 rounded-3xl bg-white text-black">
              <h4 className="font-bold mb-2">Need help choosing?</h4>
              <p className="text-sm opacity-70 mb-6">Start with Signature Detail. Upgrade if paint correction is recommended.</p>
              <button
                onClick={() => smoothScrollTo('booking')}
                className="w-full py-3 bg-black text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Start Booking
              </button>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="text-6xl font-serif font-bold text-white/5 absolute -top-8 -left-4 z-0">0{i + 1}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center mb-6">{step.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = ({
  formData,
  setFormData,
}: {
  formData: BookingFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
}) => {
  const [step, setStep] = useState(1);

  const selectedPackage = SERVICE_TIERS.find((tier) => tier.id === formData.package);
  const packagePrice = getPackagePrice(formData.package);
  const addOnTotal = getAddOnTotal(formData.addOns);
  const estimate = packagePrice + addOnTotal;
  const canConfirm = Boolean(formData.name && formData.email && formData.phone && formData.vehicle && formData.date && formData.time && formData.package);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section id="booking" className="py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-[40px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-10 text-black">
              <h3 className="text-2xl font-serif font-bold mb-8">Book in Under 2 Minutes</h3>
              <div className="space-y-8">
                {[
                  { step: 1, label: 'Choose Package' },
                  { step: 2, label: 'Select Date/Time' },
                  { step: 3, label: 'Confirm Details' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border',
                        step === s.step ? 'bg-black text-white border-black' : 'border-black/20 text-black/40',
                      )}
                    >
                      {s.step}
                    </div>
                    <span className={cn('text-sm font-semibold', step === s.step ? 'text-black' : 'text-black/40')}>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-black/10 space-y-3">
                <div className="flex items-center gap-2 text-sm opacity-70">
                  <Shield className="w-4 h-4" />
                  <span>Transparent starting pricing</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-70">
                  <Calendar className="w-4 h-4" />
                  <span>Same-day request support</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-70">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Instant estimate preview</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h4 className="text-xl font-bold mb-6">Choose your package</h4>
                    <div className="space-y-3">
                      {SERVICE_TIERS.map((tier) => (
                        <button
                          key={tier.id}
                          onClick={() => setFormData((prev) => ({ ...prev, package: tier.id }))}
                          className={cn(
                            'w-full p-4 rounded-xl border text-left transition-all',
                            formData.package === tier.id ? 'bg-white/10 border-white' : 'border-white/10 hover:border-white/30',
                          )}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold">{tier.name}</span>
                            <span className="font-serif">${tier.price}</span>
                          </div>
                          <p className="text-xs text-white/50">{tier.duration}</p>
                        </button>
                      ))}
                    </div>
                    <button disabled={!formData.package} onClick={nextStep} className="w-full bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50 mt-8">
                      Continue
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <h4 className="text-xl font-bold mb-6">Select your appointment</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-white/40">Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                          onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-white/40">Time</label>
                        <select
                          value={formData.time}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                          onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="16:30">04:30 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button onClick={prevStep} className="flex-1 py-4 rounded-xl font-bold border border-white/10">Back</button>
                      <button disabled={!formData.date || !formData.time} onClick={nextStep} className="flex-[2] bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50">
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                    <h4 className="text-xl font-bold mb-2">Confirm your booking details</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        placeholder="Full Name"
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                      <input
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        placeholder="Phone Number"
                        value={formData.phone}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                      <input
                        placeholder="Vehicle Make & Model"
                        value={formData.vehicle}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                        onChange={(e) => setFormData((prev) => ({ ...prev, vehicle: e.target.value }))}
                      />
                    </div>

                    <div className="glass-panel rounded-2xl p-5 mt-2">
                      <h5 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">Estimate Summary</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Package</span>
                          <span>{selectedPackage ? `${selectedPackage.name} ($${packagePrice})` : 'Not selected'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Add-ons</span>
                          <span>${addOnTotal}</span>
                        </div>
                        <div className="pt-2 border-t border-white/10 flex justify-between font-bold">
                          <span>Estimated Total</span>
                          <span>${estimate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button onClick={prevStep} className="flex-1 py-4 rounded-xl font-bold border border-white/10">Back</button>
                      <button
                        onClick={() => alert('Booking request submitted. We will confirm shortly. (Demo)')}
                        disabled={!canConfirm}
                        className="flex-[2] bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50"
                      >
                        Confirm Booking Request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Trusted by Seattle Area Drivers</h2>
          <p className="text-white/50">Based on public Google reviews and customer feedback from Dreamy's service area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 rounded-3xl relative"
            >
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConversionHighlightsSection = () => {
  return (
    <section className="py-28 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-4xl font-serif font-bold mb-4">High-Conversion Website Elements</h2>
          <p className="text-white/50">
            This interactive layout captures the same UX patterns seen across top-performing detailing businesses:
            clear promise, proof, transparent pricing, and low-friction booking.
          </p>
        </div>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-5">Service Area & FAQ</h2>
          <p className="text-white/50 mb-7">
            Strong local performers make location coverage and common booking questions easy to find. This removes friction before contact.
          </p>

          <h3 className="text-xs uppercase tracking-[0.28em] text-white/40 mb-4">Areas We Serve</h3>
          <div className="flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="glass-panel rounded-full px-4 py-2 text-sm text-white/80">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 glass-panel rounded-2xl p-5">
            <p className="text-sm text-white/70">Need a custom quote for oversized vehicles or specialty requests?</p>
            <button onClick={() => smoothScrollTo('booking')} className="mt-4 bg-white text-black px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="glass-panel rounded-2xl p-5 group">
              <summary className="cursor-pointer font-semibold list-none flex items-center justify-between gap-3">
                {item.question}
                <ChevronRight className="w-4 h-4 text-white/50 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-sm text-white/60 mt-4 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={BUSINESS.logoPath}
                alt={`${BUSINESS.shortName} logo`}
                className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
              />
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Mobile auto detailing and ceramic coating focused on transparent pricing, visible outcomes, and a fast booking process.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS.website}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h6>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> {BUSINESS.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> {BUSINESS.email}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" /> {BUSINESS.address}
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Hours</h6>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Mon - Sun</span> <span>Open 24 Hours</span>
              </li>
              <li className="flex justify-between">
                <span>Online Booking</span> <span>24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Mobile Service</span> <span>By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <span>© 2026 {BUSINESS.shortName}. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [formData, setFormData] = useState<BookingFormData>({
    package: '',
    addOns: [],
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicle: '',
  });

  const toggleAddOn = (id: string) => {
    setFormData((prev) => {
      const hasAddOn = prev.addOns.includes(id);
      return {
        ...prev,
        addOns: hasAddOn ? prev.addOns.filter((item) => item !== id) : [...prev.addOns, id],
      };
    });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <PricingSection formData={formData} setFormData={setFormData} />
        <ResultsSection />
        <AddOnsSection selectedAddOns={formData.addOns} toggleAddOn={toggleAddOn} />
        <ProcessSection />
        <BookingSection formData={formData} setFormData={setFormData} />
        <Testimonials />
        <ConversionHighlightsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
