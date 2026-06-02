"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
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

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 group-hover:via-gold transition-all duration-500" />

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

      {/* CTA */}
      <section className="py-24 bg-dark-100 relative">
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
