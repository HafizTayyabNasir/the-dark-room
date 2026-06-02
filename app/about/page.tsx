"use client";

import { motion } from "framer-motion";
import { Scissors, Award, Users, Clock, Heart, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const barbers = [
  {
    name: "Marcus Reid",
    title: "Head Barber & Founder",
    experience: "15+ Years",
    specialty: "Classic Fades & Hot Shaves",
    bio: "Marcus built The Dark Room from a single chair and a dream. His philosophy: every man deserves to feel sharp.",
  },
  {
    name: "James Wu",
    title: "Master Barber",
    experience: "12+ Years",
    specialty: "Precision Cuts & Beard Sculpting",
    bio: "James brings an artist's eye to every cut. Trained in London and Tokyo, his cultural fluency shows in every line.",
  },
  {
    name: "Kai Laurent",
    title: "Senior Barber",
    experience: "8+ Years",
    specialty: "Modern Styles & Color",
    bio: "The youngest member of our team and our most experimental. Kai bridges tradition with what's next.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-dark pt-20">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Our Story</span>
            <div className="gold-divider" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-6xl sm:text-7xl text-cream/90 mb-6">
            About <span className="gold-text">The Dark Room</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-cream/50 text-xl max-w-2xl mx-auto leading-relaxed">
            A place where old-world barbering tradition meets contemporary precision. We don&apos;t just cut hair — we craft identities.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="gold-divider" style={{ margin: 0 }} />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Est. 2018</span>
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Born from <span className="gold-text">Passion</span>
            </h2>
            <p className="text-cream/50 leading-relaxed">
              The Dark Room was born in 2018 from a simple belief: that a great haircut is more than an appointment — it&apos;s an experience. Founder Marcus Reid opened our doors in the heart of New York City after 15 years of perfecting his craft across three continents.
            </p>
            <p className="text-cream/50 leading-relaxed">
              The name itself tells the story. A dark room in photography is where the real magic happens — where raw negatives are transformed into lasting images. We see every client the same way: walking in with potential, leaving transformed.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Today, The Dark Room is home to three master barbers and thousands of loyal clients who understand that the right cut changes everything.
            </p>

            <div className="flex gap-10 pt-4">
              {[
                { icon: Award, value: "3x", label: "Best Barbershop Award" },
                { icon: Users, value: "4K+", label: "Happy Clients" },
                { icon: Clock, value: "6", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon size={20} className="text-gold mx-auto mb-2" strokeWidth={1.5} />
                  <div className="text-2xl font-serif font-bold text-gold">{stat.value}</div>
                  <div className="text-cream/40 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual card */}
            <div className="dark-card rounded-sm p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-gold/30" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-gold/30" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-gold/30" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-gold/30" />

              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Scissors size={80} className="text-gold/30" strokeWidth={0.8} />
                </motion.div>
              </div>

              <div className="space-y-4">
                {[
                  "Precision that speaks for itself",
                  "Old-world mastery, modern execution",
                  "Every client, a masterpiece",
                  "Craftsmanship without compromise",
                  "The ritual of the perfect shave",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <span className="text-cream/60 text-sm font-serif italic">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-100 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Our Values</span>
              <div className="gold-divider" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl text-cream/90">
              What We <span className="gold-text">Stand For</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Scissors, title: "Precision", desc: "Every line deliberate. Every cut intentional. No shortcuts, no compromises." },
              { icon: Heart, title: "Care", desc: "We treat every client like a long-term relationship, not a transaction." },
              { icon: Star, title: "Excellence", desc: "We are relentless in our pursuit of the perfect cut. Good enough never is." },
              { icon: Users, title: "Community", desc: "The Dark Room is a place to belong. More than a shop — a brotherhood." },
            ].map((val, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="dark-card rounded-sm p-8 text-center group"
              >
                <div className="w-14 h-14 border border-gold/20 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:border-gold/50 transition-colors duration-300">
                  <val.icon size={24} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-cream/90 mb-3">{val.title}</h3>
                <p className="text-cream/40 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">The Team</span>
            <div className="gold-divider" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-5xl text-cream/90">
            Meet Our <span className="gold-text">Craftsmen</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {barbers.map((barber, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} className="dark-card rounded-sm overflow-hidden group">
              {/* Avatar */}
              <div className="h-64 bg-gradient-to-br from-dark-300 to-dark-200 relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center bg-dark-400 group-hover:border-gold/60 transition-colors">
                  <span className="text-4xl font-serif text-gold/60 font-bold">{barber.name[0]}</span>
                </div>
                <div className="absolute top-4 right-4 bg-gold/10 border border-gold/20 rounded-sm px-2 py-1">
                  <span className="text-gold text-xs">{barber.experience}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-cream/90 mb-1">{barber.name}</h3>
                <p className="text-gold text-xs tracking-widest uppercase mb-1">{barber.title}</p>
                <p className="text-cream/40 text-xs mb-4">Specialty: {barber.specialty}</p>
                <p className="text-cream/50 text-sm leading-relaxed">{barber.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
          <h2 className="font-serif text-5xl text-cream/90 mb-6">
            Come Experience <span className="gold-text">The Difference</span>
          </h2>
          <p className="text-cream/50 mb-10">
            Words only do so much. Come in and feel the difference for yourself.
          </p>
          <Link href="/booking" className="btn-gold px-12 py-5 text-sm rounded-sm inline-block">
            Book Your Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
