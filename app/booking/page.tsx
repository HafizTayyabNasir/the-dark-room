"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight, CheckCircle, Scissors } from "lucide-react";
import { services } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const categories = ["All", "Hair", "Beard", "Combo", "Treatment"];

function BookingContent() {
  const searchParams = useSearchParams();
  const preSelected = searchParams.get("service");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-dark pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
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
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Step 1 of 2</span>
            <div className="gold-divider" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-6xl sm:text-7xl text-cream/90 mb-6">
            Choose Your <span className="gold-text">Service</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-cream/50 text-xl max-w-xl mx-auto">
            Select the service you&apos;d like to book. Every treatment includes our signature hot towel experience.
          </motion.p>

          {/* Steps indicator */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold text-dark text-xs font-bold flex items-center justify-center">1</div>
              <span className="text-gold text-sm">Select Service</span>
            </div>
            <div className="w-16 h-px bg-gold/30" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-cream/20 text-cream/30 text-xs font-bold flex items-center justify-center">2</div>
              <span className="text-cream/30 text-sm">Your Details</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Selection */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group cursor-pointer"
              >
                <Link href={`/booking/checkout?service=${service.id}`} className="block h-full">
                  <div className={`dark-card rounded-sm overflow-hidden h-full flex flex-col transition-all duration-300 ${
                    preSelected === service.id ? "border-gold/60 shadow-[0_0_20px_rgba(201,168,76,0.2)]" : ""
                  }`}>
                    {/* Top accent bar */}
                    <div className="h-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 group-hover:via-gold transition-all duration-500" />

                    {/* Selected indicator */}
                    {preSelected === service.id && (
                      <div className="bg-gold/10 border-b border-gold/20 px-6 py-2 flex items-center gap-2">
                        <CheckCircle size={14} className="text-gold" />
                        <span className="text-gold text-xs">Recommended for you</span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      {/* Badges */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] text-gold/50 tracking-widest uppercase bg-gold/10 px-2 py-0.5 rounded-sm">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="text-[10px] text-dark bg-gold px-2 py-0.5 rounded-sm font-bold tracking-wide">
                            Popular
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl text-cream/90 group-hover:text-gold transition-colors duration-300 mb-3">
                        {service.name}
                      </h3>

                      <p className="text-cream/40 text-sm leading-relaxed flex-1 mb-6">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mb-6 pb-6 border-b border-gold/10">
                        <div className="flex items-center gap-2 text-cream/40 text-sm">
                          <Clock size={14} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="font-serif text-2xl text-gold font-bold">
                          ${service.price}
                        </div>
                      </div>

                      {/* Select Button */}
                      <div className={`w-full py-3 text-xs rounded-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        hoveredService === service.id
                          ? "btn-gold"
                          : "btn-outline"
                      }`}>
                        Select & Continue
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-cream/30 text-sm">
            <Scissors size={14} className="text-gold/40" />
            <span>All services include hot towel treatment, scalp massage & premium styling products</span>
            <Scissors size={14} className="text-gold/40" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-gold animate-pulse font-serif text-2xl">Loading...</div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
