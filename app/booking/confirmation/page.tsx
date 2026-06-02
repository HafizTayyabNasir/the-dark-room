"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, User, CreditCard, Banknote, ArrowRight, Phone, MapPin, Scissors } from "lucide-react";

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || `TDR${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const service = searchParams.get("service") || "Classic Haircut";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const name = searchParams.get("name") || "";
  const total = searchParams.get("total") || "45";
  const payment = searchParams.get("payment") || "cash";

  const formattedDate = date
    ? new Date(date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
    : "";

  return (
    <div className="bg-dark pt-20 pb-24 min-h-screen">
      {/* Hero Success */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center"
        >
          {/* Check circle animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-8 relative"
          >
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <CheckCircle size={36} className="text-gold" />
            </div>
            {/* Pulse rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-full border border-gold/30"
            />
            <motion.div
              animate={{ scale: [1, 2, 2], opacity: [0.3, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              className="absolute inset-0 rounded-full border border-gold/20"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Booking Confirmed</span>
            <div className="gold-divider" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl text-cream/90 mb-4">
            You&apos;re All <span className="gold-text">Set!</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-cream/50 text-lg mb-6 leading-relaxed">
            Your appointment at The Dark Room has been confirmed. We can&apos;t wait to see you.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-sm px-4 py-2"
          >
            <span className="text-cream/40 text-xs">Booking Reference:</span>
            <span className="text-gold font-mono text-sm font-bold tracking-widest">{id.toUpperCase()}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Confirmation Details */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Appointment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="dark-card rounded-sm overflow-hidden"
        >
          <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
          <div className="p-8">
            <h2 className="font-serif text-2xl text-cream/90 mb-6">Appointment Details</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Scissors, label: "Service", value: service },
                { icon: User, label: "Name", value: name || "Guest" },
                { icon: Calendar, label: "Date", value: formattedDate || "—" },
                { icon: Clock, label: "Time", value: time || "—" },
                {
                  icon: payment === "card" ? CreditCard : Banknote,
                  label: "Payment",
                  value: payment === "card" ? "Card Payment" : "Cash at Shop",
                },
                { icon: null, label: "Total", value: `$${total}` },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-dark-200/50 rounded-sm">
                  {item.icon && (
                    <item.icon size={18} className="text-gold/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                  )}
                  {!item.icon && (
                    <div className="w-[18px] h-[18px] flex items-center justify-center text-gold text-xs font-bold">$</div>
                  )}
                  <div>
                    <p className="text-cream/30 text-xs tracking-wide uppercase mb-1">{item.label}</p>
                    <p className={`text-sm font-serif ${item.label === "Total" ? "text-gold text-xl font-bold" : "text-cream/80"}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="dark-card rounded-sm p-8"
        >
          <h3 className="font-serif text-xl text-cream/90 mb-6">What to Expect</h3>
          <div className="space-y-4">
            {[
              { step: "01", text: "Arrive 5 minutes early so your barber can review your style preferences." },
              { step: "02", text: "Enjoy a complimentary hot towel treatment and beverage while you settle in." },
              { step: "03", text: "Your master barber will consult with you on the perfect style before starting." },
              { step: "04", text: `${payment === "cash" ? "Pay cash when done" : "Your card was charged"}. Walk out a transformed man.` },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-sm border border-gold/20 flex items-center justify-center text-gold/50 text-xs font-mono shrink-0">
                  {item.step}
                </div>
                <p className="text-cream/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="dark-card rounded-sm p-8"
        >
          <h3 className="font-serif text-xl text-cream/90 mb-6">Find Us</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-cream/70 text-sm">123 Dark Alley, Suite 1</p>
                  <p className="text-cream/70 text-sm">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold/60 shrink-0" />
                <a href="tel:+12125550100" className="text-cream/70 text-sm hover:text-gold transition-colors">
                  (212) 555-0100
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <div className="text-cream/40 text-xs leading-relaxed">
                  <p>Mon–Fri: 9:00 AM – 7:00 PM</p>
                  <p>Saturday: 8:00 AM – 6:00 PM</p>
                  <p>Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="h-40 bg-dark-300 rounded-sm border border-gold/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={24} className="text-gold/30 mx-auto mb-2" />
                <p className="text-cream/20 text-xs">The Dark Room Barbershop</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="btn-outline flex-1 py-4 text-sm rounded-sm flex items-center justify-center gap-2 text-center"
          >
            Return Home
          </Link>
          <Link
            href="/booking"
            className="btn-gold flex-1 py-4 text-sm rounded-sm flex items-center justify-center gap-2"
          >
            Book Another Service
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-gold animate-pulse font-serif text-2xl">Loading...</div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
