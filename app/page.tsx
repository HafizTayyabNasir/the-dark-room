"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Scissors, Star, Clock, Shield, ChevronDown, Award, Users, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-dark">
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated BG */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-200 to-dark-100" />
          {/* Geometric Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Gold accent orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
            {/* Left Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="gold-divider w-12 h-px" style={{ margin: 0 }} />
                <span className="text-gold/70 text-xs tracking-[0.35em] uppercase">Est. 2018 · New York</span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeUp} className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
                <span className="text-cream/90">The Art</span>
                <br />
                <span className="gold-text">of the</span>
                <br />
                <span className="text-cream/90">Perfect</span>
                <br />
                <span className="text-cream/90">Cut</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeUp} className="text-cream/50 text-lg leading-relaxed max-w-md">
                Step into a sanctuary where old-world mastery meets modern precision. Every visit is a ritual. Every cut, a statement.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/booking" className="btn-gold px-8 py-4 text-sm rounded-sm inline-block animate-pulse-gold">
                  Book Your Appointment
                </Link>
                <Link href="/services" className="btn-outline px-8 py-4 text-sm rounded-sm inline-block">
                  View Services
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeUp} className="flex gap-10 pt-4">
                {[
                  { value: "6+", label: "Years" },
                  { value: "4K+", label: "Clients" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl font-serif text-gold font-bold">{stat.value}</div>
                    <div className="text-cream/40 text-xs tracking-[0.2em] uppercase">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[480px] h-[580px]">
                {/* Main Card */}
                <div className="absolute inset-0 dark-card rounded-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-dark" />
                  {/* Barber illustration using CSS art */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Scissors Icon Large */}
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gold/20"
                      >
                        <Scissors size={200} strokeWidth={0.5} />
                      </motion.div>
                      {/* Center Gold Circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold-dark/10 flex items-center justify-center">
                            <Scissors size={28} className="text-gold" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold/30" />
                  <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold/30" />
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gold/30" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold/30" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-dark-200 border border-gold/30 rounded-sm px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-cream/80 text-sm font-serif">Premium Cut</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-dark-200 border border-gold/30 rounded-sm px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold" />
                    <span className="text-cream/80 text-sm font-serif">Book Today</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ══════════════════════ MARQUEE ══════════════════════ */}
      <div className="border-y border-gold/10 bg-dark-100 py-4 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-gold/40 text-xs tracking-[0.3em] uppercase flex items-center gap-12">
              Premium Cuts
              <span className="text-gold/20">✦</span>
              Hot Shaves
              <span className="text-gold/20">✦</span>
              Beard Grooming
              <span className="text-gold/20">✦</span>
              The Dark Room
              <span className="text-gold/20">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Scissors,
              title: "Master Craftsmen",
              desc: "Each barber brings 10+ years of experience. Precision isn't an option — it's our standard.",
            },
            {
              icon: Shield,
              title: "Premium Products",
              desc: "We use only the finest grooming products — from pre-shave oils to artisanal aftershave balms.",
            },
            {
              icon: Star,
              title: "The Experience",
              desc: "Hot towels, scalp massages, complimentary drinks. We don't just cut hair — we restore you.",
            },
          ].map((feat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              className="dark-card rounded-sm p-8 group"
            >
              <div className="w-14 h-14 border border-gold/20 rounded-sm flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors duration-300">
                <feat.icon size={24} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-cream/90 mb-3">{feat.title}</h3>
              <p className="text-cream/40 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════ SERVICES PREVIEW ══════════════════════ */}
      <section className="py-24 bg-dark-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="0.5" fill="#C9A84C"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Our Craft</span>
              <div className="gold-divider" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl sm:text-6xl text-cream/90">
              Signature <span className="gold-text">Services</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream/40 text-lg mt-4 max-w-xl mx-auto">
              Every service is a ritual, carefully designed to make you feel like the best version of yourself.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Classic Haircut", price: "From $45", icon: "✂" },
              { name: "Fade & Taper", price: "From $55", icon: "⚡" },
              { name: "Royal Hot Shave", price: "From $50", icon: "🪒" },
              { name: "Cut & Beard Combo", price: "From $75", icon: "★" },
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="dark-card rounded-sm p-6 text-center group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-lg text-cream/90 mb-2">{service.name}</h3>
                <p className="text-gold text-sm font-mono">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="btn-outline px-10 py-4 text-sm rounded-sm inline-block">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Testimonials</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-5xl text-cream/90">What They <span className="gold-text">Say</span></h2>
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { name: "James K.", text: "The best barber experience in the city. The attention to detail is unmatched. My fade has never looked this crisp.", rating: 5 },
              { name: "Marcus D.", text: "The hot shave experience alone is worth every penny. It's like stepping back in time to when grooming was an art form.", rating: 5 },
              { name: "Tyler B.", text: "I've been coming here for 3 years. The consistency is what keeps me coming back — perfect cut every single time.", rating: 5 },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="dark-card rounded-sm p-8"
              >
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(null).map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-cream/60 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                    {testimonial.name[0]}
                  </div>
                  <span className="text-cream/70 text-sm font-serif">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="py-24 bg-dark-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <Sparkles size={20} className="text-gold" />
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase">Ready for the best cut of your life?</span>
            <Sparkles size={20} className="text-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-5xl sm:text-6xl text-cream/90 mb-6">
            Book Your <span className="gold-text">Experience</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream/50 text-lg mb-10 max-w-lg mx-auto">
            Reserve your seat in the chair. Walk out a new man.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/booking" className="btn-gold px-12 py-5 text-sm rounded-sm inline-block animate-pulse-gold">
              Book Now — It&apos;s Free
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
