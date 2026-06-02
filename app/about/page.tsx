"use client";

import { motion } from "framer-motion";
import { Scissors, Award, Users, Clock, Heart, Star, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";
import Image from "next/image";
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
    image: "/images/darkroom15.webp"
  },
  {
    name: "James Wu",
    title: "Master Barber",
    experience: "12+ Years",
    specialty: "Precision Cuts & Beard Sculpting",
    bio: "James brings an artist's eye to every cut. Trained in London and Tokyo, his cultural fluency shows in every line.",
    image: "/images/darkroom13.webp"
  },
  {
    name: "Kai Laurent",
    title: "Senior Barber",
    experience: "8+ Years",
    specialty: "Modern Styles & Color",
    bio: "The youngest member of our team and our most experimental. Kai bridges tradition with what's next.",
    image: "/images/darkroom14.webp"
  },
];

const milestones = [
  { year: "2018", title: "The Beginning", desc: "Started with a single chair in a small loft, offering bespoke cuts to local creatives." },
  { year: "2020", title: "Growing the Circle", desc: "Expanded the studio and brought on master barbers James and Kai, establishing our brand reputation." },
  { year: "2022", title: "Best Shop Award", desc: "Voted NYC's Best Boutique Barbershop for our focus on customer care and traditional grooming rituals." },
  { year: "2024 & Beyond", title: "Modern Heritage", desc: "Continuing to redefine custom styling and grooming education from our sanctuary." }
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
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Our Story</span>
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
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gold/10">
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
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Est. 2018</span>
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
            {/* Visual card with image */}
            <div className="dark-card rounded-sm p-4 relative overflow-hidden border border-gold/15">
              <div className="relative h-[400px] w-full rounded-sm overflow-hidden mb-6">
                <Image
                  src="/images/The-Dark_Room.webp"
                  alt="Barbershop Heritage Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-dark/20" />
              </div>

              <div className="space-y-3 px-4 pb-4">
                {[
                  "Precision that speaks for itself",
                  "Old-world mastery, modern execution",
                  "Every client, a masterpiece",
                  "Craftsmanship without compromise",
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
                    <span className="text-cream/80 text-sm font-serif italic">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-100 relative border-t border-gold/10">
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
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Our Values</span>
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

      {/* ══════════════════════ WORKSPACE & VIBE SECTION (NEW) ══════════════════════ */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gold/10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] w-full"
          >
            <div className="absolute inset-0 dark-card rounded-sm overflow-hidden p-1.5 border border-gold/10">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src="/images/darkroom11.webp"
                  alt="Barbershop Workspace Vibe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-dark/10" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="gold-divider" style={{ margin: 0 }} />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">The Vibe</span>
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Designed as a <span className="gold-text">Sanctuary</span>
            </h2>
            <p className="text-cream/50 leading-relaxed">
              Every design element within The Dark Room has been curated to promote relaxation. From our custom sound system playing mid-century jazz and blues to the vintage leather Belmont chairs, we have built a space that allows you to pause your day.
            </p>
            <p className="text-cream/50 leading-relaxed">
              Enjoy a double shot of espresso or a select glass of bourbon before your appointment. This isn&apos;t just about getting a haircut; it&apos;s a dedicated time for yourself.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-cream font-serif text-lg font-bold">Premium Acoustics</h4>
                <p className="text-cream/40 text-xs leading-relaxed mt-1">Calming jazz and soft background ambient music.</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <h4 className="text-cream font-serif text-lg font-bold">Vintage Chairs</h4>
                <p className="text-cream/40 text-xs leading-relaxed mt-1">Fully restored 1960 Belmont barber chairs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ TIMELINE / MILESTONES (NEW) ══════════════════════ */}
      <section className="py-24 bg-dark-100 border-t border-gold/10 relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">Milestones</span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-5xl text-cream/90">
              Our Journey <span className="gold-text">So Far</span>
            </h2>
          </div>

          <div className="relative border-l border-gold/20 pl-8 ml-4 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Gold Circle Indicator */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-dark border-2 border-gold flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                </div>
                
                <span className="font-mono text-gold text-lg font-bold tracking-wider">{milestone.year}</span>
                <h3 className="font-serif text-2xl text-cream/90 mt-1 mb-2">{milestone.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed max-w-xl">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gold/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-bold">The Team</span>
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
              {/* Avatar with real image */}
              <div className="h-80 bg-gradient-to-br from-dark-300 to-dark-200 relative flex items-center justify-center overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 380px"
                />
                <div className="absolute top-4 right-4 bg-gold/15 border border-gold/30 rounded-sm px-2 py-1 backdrop-blur-sm">
                  <span className="text-gold text-xs">{barber.experience}</span>
                </div>
              </div>
              <div className="p-6 bg-dark-200">
                <h3 className="font-serif text-xl text-cream/90 mb-1">{barber.name}</h3>
                <p className="text-gold text-xs tracking-widest uppercase mb-2 font-mono">{barber.title}</p>
                <p className="text-cream/40 text-xs mb-4">Specialty: {barber.specialty}</p>
                <p className="text-cream/50 text-sm leading-relaxed">{barber.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Barbering Standards / Hygiene (NEW SECTION) */}
      <section className="py-24 bg-dark border-t border-gold/10 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="dark-card p-8 rounded-sm border border-gold/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Scissors size={28} className="text-gold" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-cream/90 flex items-center gap-2">
                Our Grooming Standards
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed">
                Hygiene and precision are our priority. All straight-razor blades are single-use, and metallic instruments undergo full medical-grade ultraviolet and liquid sanitization between appointments. We maintain an immaculate environment for your safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-100 relative border-t border-gold/10">
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
          <p className="text-cream/50 mb-10 leading-relaxed">
            Words only do so much. Come in and feel the difference for yourself. Let our masters refine your look.
          </p>
          <Link href="/booking" className="btn-gold px-12 py-5 text-sm rounded-sm inline-block">
            Book Your Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
