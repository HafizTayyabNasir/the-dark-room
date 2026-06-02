"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Star, Clock, Shield, ChevronDown, Award, Users, Sparkles, CheckCircle, Eye, ArrowRight } from "lucide-react";

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
                <span className="text-gold/70 text-xs tracking-[0.35em] uppercase font-bold">Est. 2024 · Abu Dhabi</span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
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
                  { value: "2+", label: "Years" },
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

            {/* Right Visual (Updated with real image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[480px] h-[580px]">
                {/* Main Card Image */}
                <div className="absolute inset-0 dark-card rounded-sm overflow-hidden p-1.5 border border-gold/20">
                  <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <Image
                      src="/images/Home_first_image.png"
                      alt="Premium Haircut Grooming Ritual"
                      fill
                      priority
                      className="object-cover scale-105 hover:scale-115 transition-transform duration-[1.5s]"
                      sizes="480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating Badge 1 */}
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

                {/* Floating Badge 2 */}
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
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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

      {/* ══════════════════════ OUR ROOTS / HISTORY (NEW SECTION) ══════════════════════ */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full"
          >
            <div className="absolute inset-0 dark-card rounded-sm overflow-hidden p-1.5 border border-gold/10">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src="/images/darkroom.webp"
                  alt="Traditional Barbershop Craft"
                  fill
                  className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-[1s]"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark via-transparent to-transparent opacity-60" />
              </div>
            </div>
            {/* Retro Badge */}
            <div className="absolute -bottom-6 right-6 bg-gold text-dark py-4 px-6 font-serif text-lg font-bold shadow-2xl rounded-sm">
              Authentic Mastery
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="gold-divider" style={{ margin: 0 }} />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">The Heritage</span>
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Our Roots & <span className="gold-text">Philosophy</span>
            </h2>
            <p className="text-cream/50 leading-relaxed">
              Founded in Abu Dhabi, The Dark Room was designed as an escape from the frantic pace of modern life. We believe grooming is not a chore—it is an art form, a ritual of restoration, and an expression of personal identity.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Our workspace blends industrial style, leather textures, and premium acoustic design, creating an intimate, exclusive atmosphere where you are the sole focus.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Carefully selected organic pomades, balms, and pre-shave oils",
                "Complimentary craft espresso or aged single-malt whiskey",
                "Each barber boasts a minimum of 8 years in precision styling"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-1 shrink-0" />
                  <span className="text-cream/70 text-sm font-serif">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ FEATURES ══════════════════════ */}
      <section className="py-24 bg-dark-100 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* ══════════════════════ CONCEPT: DEVELOPING A STYLE (NEW SECTION) ══════════════════════ */}
      <section className="py-28 relative overflow-hidden bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="gold-divider" style={{ margin: 0 }} />
                <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">The Concept</span>
              </div>
              <h2 className="font-serif text-5xl text-cream/90 leading-tight">
                Developing the <span className="gold-text">Best Version</span> of You
              </h2>
              <p className="text-cream/50 leading-relaxed">
                Like traditional photography, a &ldquo;dark room&rdquo; is a private space where detail is focused, chemicals react, and raw film is developed into a permanent piece of art.
              </p>
              <p className="text-cream/50 leading-relaxed">
                We view your styling through the same lens. You step in with potential; our master barbers analyze, refine, and develop the sharpest, most confident portrait of yourself.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-gold font-serif text-sm tracking-wider hover:text-gold-light transition-colors flex items-center gap-2 group">
                  Learn More About The Concept
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Stacked Frame Gallery */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[360px] dark-card p-1 overflow-hidden"
              >
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src="/images/darkroom9.webp"
                    alt="Precision Line Work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-dark/20" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[360px] dark-card p-1 overflow-hidden mt-8"
              >
                <div className="relative w-full h-full overflow-hidden rounded-sm">
                  <Image
                    src="/images/darkroom10.webp"
                    alt="Classic Haircut Finish"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-dark/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES PREVIEW ══════════════════════ */}
      <section className="py-24 bg-dark-100 relative overflow-hidden border-t border-gold/10">
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
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Our Craft</span>
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
              { name: "Classic Haircut", price: "From $45", icon: "✂", img: "/images/darkroom1.webp" },
              { name: "Fade & Taper", price: "From $55", icon: "⚡", img: "/images/darkroom2.webp" },
              { name: "Royal Hot Shave", price: "From $50", icon: "🪒", img: "/images/darkroom4.webp" },
              { name: "Cut & Beard Combo", price: "From $75", icon: "★", img: "/images/darkroom5.webp" },
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="dark-card rounded-sm overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-dark/40" />
                  <span className="absolute top-4 right-4 bg-dark/80 text-gold text-lg px-2.5 py-1.5 rounded-sm border border-gold/10 font-bold">
                    {service.icon}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg text-cream/90 mb-2 group-hover:text-gold transition-colors">{service.name}</h3>
                  <p className="text-gold text-sm font-mono">{service.price}</p>
                </div>
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

      {/* ══════════════════════ MEET THE CRAFTSMEN (NEW SECTION) ══════════════════════ */}
      <section className="py-28 bg-dark relative border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">The Team</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Meet Our <span className="gold-text">Master Barbers</span>
            </h2>
            <p className="text-cream/40 text-lg mt-4 max-w-xl mx-auto">
              Our craftsmen blend traditional disciplines with contemporary techniques to elevate your personal style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Reid",
                role: "Head Barber & Founder",
                img: "/images/darkroom15.webp",
                specialty: "Classic Scissor Cuts & Razor Work"
              },
              {
                name: "James Wu",
                role: "Master Barber",
                img: "/images/darkroom13.webp",
                specialty: "Tapers, Skin Fades & Line-ups"
              },
              {
                name: "Kai Laurent",
                role: "Senior Barber",
                img: "/images/darkroom14.webp",
                specialty: "Modern Styles & Color Blending"
              }
            ].map((barber, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="dark-card rounded-sm overflow-hidden group border border-gold/10 hover:border-gold/30"
              >
                <div className="relative h-[380px] w-full overflow-hidden">
                  <Image
                    src={barber.img}
                    alt={barber.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-gold text-[10px] tracking-widest uppercase font-mono">{barber.role}</span>
                    <h3 className="font-serif text-2xl text-cream/95 mt-1">{barber.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-dark-200 border-t border-gold/5">
                  <p className="text-cream/40 text-xs tracking-wider uppercase mb-1">Specialty</p>
                  <p className="text-cream/70 text-sm font-serif">{barber.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
      <section className="py-24 bg-dark-100 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="gold-divider" />
                <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Testimonials</span>
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
                  className="dark-card rounded-sm p-8 border border-gold/10"
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
        </div>
      </section>

      {/* ══════════════════════ STUDIO LIFE / GALLERY (NEW SECTION) ══════════════════════ */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Studio Life</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-5xl text-cream/90">
            Inside <span className="gold-text">The Dark Room</span>
          </h2>
          <p className="text-cream/40 text-lg mt-4 max-w-xl mx-auto">
            A visual tour of our sanctuary. High standards, genuine conversations, and premium detailing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: "/images/darkroom6.webp", label: "Apothecary Products" },
            { img: "/images/darkroom7.webp", label: "Traditional Razor Shave" },
            { img: "/images/darkroom8.webp", label: "Style consultation" },
            { img: "/images/darkroom12.webp", label: "Workspace details" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-[280px] dark-card p-1.5 overflow-hidden group border border-gold/10"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <Eye size={24} className="text-gold mb-2" />
                  <span className="text-cream font-serif text-sm font-bold">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="py-28 bg-dark-100 relative overflow-hidden border-t border-gold/10">
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
            <span className="text-gold/70 text-xs tracking-[0.3em] uppercase font-bold">Ready for the best cut of your life?</span>
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
