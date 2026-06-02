"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Sparkles, CheckCircle, HelpCircle, Scissors, Star } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const categories = ["All", "Hair", "Beard", "Combo", "Treatment"];

const packages = [
  {
    name: "The Executive Ritual",
    price: "110",
    description: "Our complete grooming experience. Perfect for monthly maintenance or special occasions.",
    items: [
      "Signature Precision Haircut",
      "Royal Hot Razor Shave or Beard Sculpt",
      "Scalp Treatment & Charcoal Face Mask",
      "Aromatherapy Hot Towel Massage",
      "Premium styling & take-home beard oil"
    ],
    popular: true
  },
  {
    name: "The Groomsman Package",
    price: "160",
    description: "Designed for those preparing for a major event or wedding. Bring your best man or come solo.",
    items: [
      "Precision Haircut & Style",
      "Royal Hot Razor Shave",
      "Color Enhancement or Grey Blending",
      "Nose/Ear Waxing & Brow Clean-up",
      "Premium Beverage and Gift Bag"
    ],
    popular: false
  }
];

const faqs = [
  {
    q: "How early should I arrive for my appointment?",
    a: "We recommend arriving 5–10 minutes early to check in, grab a complimentary beverage, and relax in our lounge before your session."
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours notice for any cancellations or rescheduling. Cancellations made within 24 hours may be subject to a 50% fee."
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-ins are always welcome! However, to avoid waiting times, we highly recommend booking an appointment online."
  },
  {
    q: "Which products do you use?",
    a: "We use only ultra-premium, organic grooming products, including pre-shave oils, conditioning pomades, and nourishing beard balms from world-class artisan brands."
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gold/3 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Our Craft</span>
            <div className="gold-divider" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-6xl sm:text-7xl text-cream/90 mb-6">
            Premium <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-cream/50 text-xl max-w-xl mx-auto leading-relaxed">
            Each service is a carefully crafted ritual — designed to make you feel and look extraordinary.
          </motion.p>
        </motion.div>
      </section>

      {/* What's Included Banner */}
      <section className="bg-dark-100 border-y border-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Hot Towel Treatment",
              "Scalp Massage",
              "Premium Products",
              "Complimentary Drink",
              "Master Barbers Only",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={14} className="text-gold" />
                <span className="text-cream/50 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-dark-DEFAULT font-bold"
                  : "border border-gold/20 text-cream/50 hover:border-gold/50 hover:text-cream/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group"
              >
                <div className="dark-card rounded-sm overflow-hidden h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-gold/50 tracking-widest uppercase bg-gold/10 px-2 py-0.5 rounded-sm">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="text-[10px] text-dark bg-gold px-2 py-0.5 rounded-sm font-bold tracking-wide">
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-xl text-cream/90 group-hover:text-gold transition-colors duration-300">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-cream/40 text-sm leading-relaxed flex-1 mb-6">
                      {service.description}
                    </p>

                    {/* Duration & Price */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-gold/10">
                      <div className="flex items-center gap-2 text-cream/40 text-sm">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                      <div className="font-serif text-2xl text-gold font-bold">
                        ${service.price}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/booking?service=${service.id}`}
                      className="btn-gold w-full py-3 text-xs rounded-sm flex items-center justify-center gap-2 group/btn"
                    >
                      Book This Service
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ══════════════════════ VIP PACKAGES SECTION (NEW) ══════════════════════ */}
      <section className="py-24 bg-dark-200 border-t border-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Ultra Premium</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              VIP Grooming <span className="gold-text">Packages</span>
            </h2>
            <p className="text-cream/40 text-lg mt-4 max-w-xl mx-auto">
              Curated experiences for the modern gentleman desiring the ultimate upgrade in care and luxury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`dark-card rounded-sm p-8 flex flex-col justify-between relative ${
                  pkg.popular ? "border-gold shadow-[0_0_30px_rgba(201,168,76,0.15)]" : "border-gold/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-6 bg-gold text-dark font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-sm shadow-md">
                    Most Popular Experience
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-2xl text-cream/95 mb-2">{pkg.name}</h3>
                  <p className="text-cream/40 text-sm mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-gold font-serif text-4xl font-bold">${pkg.price}</span>
                    <span className="text-cream/30 text-xs uppercase tracking-wider">/ full ritual</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-cream/70 text-sm font-serif">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/booking"
                  className={`w-full py-4 text-xs rounded-sm tracking-widest uppercase font-bold text-center block ${
                    pkg.popular ? "btn-gold" : "btn-outline"
                  }`}
                >
                  Book Package Experience
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ BEFORE & AFTER GALLERY (NEW) ══════════════════════ */}
      <section className="py-24 border-t border-gold/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">The Results</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-5xl text-cream/90">
            Before & After <span className="gold-text">Transformations</span>
          </h2>
          <p className="text-cream/40 text-lg mt-4 max-w-xl mx-auto">
            Witness the craftsmanship. Real transformations, sharp styles, and exceptional attention to detail.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "/images/darkroom11.webp", title: "Classic Crop & Beard Trim", barber: "Marcus Reid" },
            { img: "/images/darkroom12.webp", title: "Mid Skin Fade & Shape-up", barber: "James Wu" },
            { img: "/images/darkroom13.webp", title: "Executive Pompadour", barber: "Kai Laurent" },
            { img: "/images/darkroom14.webp", title: "Beard Sculpt & Shave", barber: "Marcus Reid" }
          ].map((item, i) => (
            <div key={i} className="dark-card rounded-sm overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/10 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-serif text-base text-cream/90">{item.title}</h4>
                  <p className="text-[10px] text-gold/60 tracking-wider uppercase mt-1">Crafted by {item.barber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════ FAQS SECTION (NEW) ══════════════════════ */}
      <section className="py-24 bg-dark-100 border-t border-gold/10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Information</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Frequently Asked <span className="gold-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="dark-card rounded-sm border border-gold/10 overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-serif text-lg text-cream/90 flex items-center gap-3">
                    <HelpCircle size={18} className="text-gold" />
                    {faq.q}
                  </h3>
                  <span className={`text-gold text-lg transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
                
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-gold/5 text-cream/50 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-200 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <Sparkles size={32} className="text-gold mx-auto mb-6" />
          <h2 className="font-serif text-5xl text-cream/90 mb-6">
            Not Sure Which <span className="gold-text">Service?</span>
          </h2>
          <p className="text-cream/50 mb-4 leading-relaxed">
            Our barbers will guide you to the perfect treatment for your hair type and style goals. Come in for a consultation — on us.
          </p>
          <p className="text-cream/30 text-sm mb-10">Call us at <a href="tel:+12125550100" className="text-gold hover:text-gold-light">(212) 555-0100</a> or just walk in.</p>
          <Link href="/booking" className="btn-gold px-12 py-5 text-sm rounded-sm inline-block">
            Book Your Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

