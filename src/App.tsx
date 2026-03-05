import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
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
  Facebook
} from 'lucide-react';
import { cn } from './lib/utils';
import { SERVICE_TIERS, ADD_ONS, TESTIMONIALS, type ServiceTier, type AddOn } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Add-ons', href: '#addons' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
            <Car className="text-black w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">LUXE<span className="text-white/50">AUTO</span></span>
        </div>

        {/* Desktop Nav */}
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
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f3ca99a4741?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury car detailing" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/60">The Pinnacle of Automotive Care</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter">
            Artistry in <br />
            <span className="text-white/40 italic">Every Detail.</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Experience a level of precision that transcends ordinary cleaning. We restore, protect, and elevate your vehicle to its absolute finest state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform group"
            >
              View Packages <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-panel px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Our Process
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 right-12 hidden lg:flex gap-12">
        {[
          { label: 'Vehicles Perfected', value: '2,500+' },
          { label: 'Client Satisfaction', value: '100%' },
          { label: 'Years Experience', value: '12' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="flex flex-col"
          >
            <span className="text-3xl font-serif font-bold">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PricingSection = ({ formData, setFormData }: { formData: any, setFormData: any }) => {
  return (
    <section id="services" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Curated Detail Packages</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Choose the level of care that suits your vehicle's needs. From maintenance to full restoration.</p>
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
                "relative p-8 rounded-3xl flex flex-col h-full transition-all duration-500",
                tier.isPopular ? "bg-white text-black scale-105 z-10 shadow-2xl" : "glass-panel text-white"
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <p className={cn("text-sm mb-6", tier.isPopular ? "text-black/60" : "text-white/50")}>
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-serif">${tier.price}</span>
                  <span className={cn("text-sm", tier.isPopular ? "text-black/40" : "text-white/30")}>starting at</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-wider opacity-60">
                  <Clock className="w-3 h-3" /> {tier.duration}
                </div>
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={cn("w-5 h-5 shrink-0", tier.isPopular ? "text-black" : "text-white/40")} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  setFormData({ ...formData, package: tier.id });
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all",
                  tier.isPopular ? "bg-black text-white hover:opacity-90" : "bg-white text-black hover:bg-white/90"
                )}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AddOnsSection = () => {
  return (
    <section id="addons" className="py-32 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif font-bold mb-4">À La Carte Add-ons</h2>
            <p className="text-white/50">Address specific pain points with our specialized treatments. Mix and match to create your perfect service.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-white/40">
            <Sparkles className="w-4 h-4" />
            Customizable Care
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADD_ONS.map((addon) => (
            <div key={addon.id} className="glass-panel p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">{addon.name}</h4>
                <span className="font-serif text-xl font-bold">${addon.price}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{addon.description}</p>
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/30 group-hover:text-white transition-colors">
                Add to Booking <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = ({ formData, setFormData }: { formData: any, setFormData: any }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <section id="booking" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-[40px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar */}
            <div className="bg-white p-10 text-black">
              <h3 className="text-2xl font-serif font-bold mb-8">Reserve Your Session</h3>
              <div className="space-y-8">
                {[
                  { step: 1, label: 'Service Selection' },
                  { step: 2, label: 'Schedule' },
                  { step: 3, label: 'Details' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border",
                      step === s.step ? "bg-black text-white border-black" : "border-black/20 text-black/40"
                    )}>
                      {s.step}
                    </div>
                    <span className={cn(
                      "text-sm font-semibold",
                      step === s.step ? "text-black" : "text-black/40"
                    )}>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-20 pt-10 border-t border-black/10">
                <div className="flex items-center gap-3 text-sm opacity-60">
                  <Shield className="w-4 h-4" />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="md:col-span-2 p-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-xl font-bold mb-6">Select your package</h4>
                    <div className="space-y-3">
                      {SERVICE_TIERS.map(tier => (
                        <button
                          key={tier.id}
                          onClick={() => setFormData({ ...formData, package: tier.id })}
                          className={cn(
                            "w-full p-4 rounded-xl border text-left transition-all",
                            formData.package === tier.id 
                              ? "bg-white/10 border-white" 
                              : "border-white/10 hover:border-white/30"
                          )}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{tier.name}</span>
                            <span className="font-serif">${tier.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button 
                      disabled={!formData.package}
                      onClick={nextStep}
                      className="w-full bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50 mt-8"
                    >
                      Continue
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-xl font-bold mb-6">Choose a date</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-white/40">Date</label>
                        <input 
                          type="date" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-white/40">Time</label>
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="13:00">01:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button onClick={prevStep} className="flex-1 py-4 rounded-xl font-bold border border-white/10">Back</button>
                      <button 
                        disabled={!formData.date || !formData.time}
                        onClick={nextStep} 
                        className="flex-[2] bg-white text-black py-4 rounded-xl font-bold disabled:opacity-50"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-xl font-bold mb-6">Personal details</h4>
                    <input 
                      placeholder="Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input 
                      placeholder="Vehicle Make & Model"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-white"
                      onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                    />
                    <div className="flex gap-4 mt-8">
                      <button onClick={prevStep} className="flex-1 py-4 rounded-xl font-bold border border-white/10">Back</button>
                      <button 
                        onClick={() => alert('Booking Confirmed! (Demo)')}
                        className="flex-[2] bg-white text-black py-4 rounded-xl font-bold"
                      >
                        Confirm Booking
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
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-white text-white" />)}
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Trusted by Enthusiasts</h2>
          <p className="text-white/50">Hear from our clients who demand nothing but perfection.</p>
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

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <Car className="text-black w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">LUXEAUTO</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Setting the standard in automotive preservation. We combine advanced chemistry with artisan techniques to deliver unparalleled results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h6>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> studio@luxeauto.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> 123 Detail Way, Los Angeles, CA</li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs uppercase tracking-widest font-bold mb-6">Hours</h6>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 - 16:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <span>© 2024 LuxeAuto Detailing. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      title: "Consultation",
      description: "We assess your vehicle's condition and discuss your specific goals and expectations.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Preparation",
      description: "Multi-stage decontamination process to ensure a perfectly clean canvas for restoration.",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Restoration",
      description: "Precision machine polishing and interior rejuvenation using artisan techniques.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Protection",
      description: "Application of high-grade sealants or ceramic coatings for long-lasting preservation.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif font-bold mb-6">The Luxe <br /><span className="text-white/40 italic">Process</span></h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Our methodology is rooted in precision and patience. We don't just clean; we preserve and protect your investment using the world's finest products.
            </p>
            <div className="p-8 rounded-3xl bg-white text-black">
              <h4 className="font-bold mb-2">Ready to begin?</h4>
              <p className="text-sm opacity-70 mb-6">Experience the difference of a truly professional detail.</p>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-black text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Book Your Session
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="text-6xl font-serif font-bold text-white/5 absolute -top-8 -left-4 z-0">0{i + 1}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
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

export default function App() {
  const [formData, setFormData] = useState({
    package: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    vehicle: ''
  });

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <PricingSection formData={formData} setFormData={setFormData} />
        <AddOnsSection />
        <ProcessSection />
        <BookingSection formData={formData} setFormData={setFormData} />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
