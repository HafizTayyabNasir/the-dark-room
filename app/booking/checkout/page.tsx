"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, CreditCard, Banknote, Calendar, User, Mail, Phone, FileText, ChevronDown, Lock, CheckCircle } from "lucide-react";
import { services, timeSlots, barbers } from "@/lib/services";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(value: string) {
  const v = value.replace(/\D/g, "").slice(0, 4);
  return v.length >= 2 ? v.slice(0, 2) + "/" + v.slice(2) : v;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get("service") || "";

  const service = services.find((s) => s.id === serviceId) || services[0];

  const [step, setStep] = useState<"details" | "payment">("details");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    barber: "any",
    notes: "",
    paymentMethod: "cash" as "card" | "cash",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const set = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validateDetails = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) newErrors.phone = "Valid phone number required";
    if (!form.date) newErrors.date = "Please select a date";
    if (!form.time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    if (form.paymentMethod === "card") {
      if (form.cardNumber.replace(/\s/g, "").length < 16) newErrors.cardNumber = "Enter full card number";
      if (!form.cardName.trim()) newErrors.cardName = "Name on card required";
      if (form.cardExpiry.length < 5) newErrors.cardExpiry = "Valid expiry required";
      if (form.cardCvv.length < 3) newErrors.cardCvv = "Valid CVV required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validatePayment()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          serviceId: service.id,
          serviceName: service.name,
          total: service.price,
        }),
      });
      const data = await res.json();
      if (data.success) {
        router.push(`/booking/confirmation?id=${data.bookingId}&service=${encodeURIComponent(service.name)}&date=${form.date}&time=${encodeURIComponent(form.time)}&name=${encodeURIComponent(form.firstName + " " + form.lastName)}&total=${service.price}&payment=${form.paymentMethod}`);
      }
    } catch {
      router.push(`/booking/confirmation?id=TDR${Date.now().toString().slice(-6)}&service=${encodeURIComponent(service.name)}&date=${form.date}&time=${encodeURIComponent(form.time)}&name=${encodeURIComponent(form.firstName + " " + form.lastName)}&total=${service.price}&payment=${form.paymentMethod}`);
    }
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <div className="bg-dark pt-20 pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-dark-100 border-b border-gold/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/booking" className="flex items-center gap-2 text-cream/50 hover:text-gold transition-colors text-sm group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Change Service
            </Link>
            {/* Steps */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step === "details" ? "text-gold" : "text-gold/50"}`}>
                <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step === "details" ? "bg-gold text-dark" : "border border-gold/40 text-gold/40"}`}>
                  {step === "payment" ? <CheckCircle size={14} /> : "1"}
                </div>
                <span className="text-xs hidden sm:block">Your Details</span>
              </div>
              <div className="w-12 h-px bg-gold/20" />
              <div className={`flex items-center gap-2 ${step === "payment" ? "text-gold" : "text-cream/30"}`}>
                <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step === "payment" ? "bg-gold text-dark" : "border border-cream/20 text-cream/30"}`}>
                  2
                </div>
                <span className="text-xs hidden sm:block">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left — Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "details" ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="font-serif text-3xl text-cream/90 mb-8">
                    Your <span className="gold-text">Details</span>
                  </h2>

                  <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8">
                    {/* Personal Info */}
                    <motion.div variants={fadeUp} className="space-y-4">
                      <h3 className="text-gold/60 text-xs tracking-[0.25em] uppercase flex items-center gap-2">
                        <User size={14} /> Personal Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={(e) => set("firstName", e.target.value)}
                            className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.firstName ? "border-red-500/50" : ""}`}
                          />
                          {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={(e) => set("lastName", e.target.value)}
                            className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.lastName ? "border-red-500/50" : ""}`}
                          />
                          {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.email ? "border-red-500/50" : ""}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.phone ? "border-red-500/50" : ""}`}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </motion.div>

                    {/* Appointment Details */}
                    <motion.div variants={fadeUp} className="space-y-4">
                      <h3 className="text-gold/60 text-xs tracking-[0.25em] uppercase flex items-center gap-2">
                        <Calendar size={14} /> Appointment Details
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="date"
                            min={minDateStr}
                            value={form.date}
                            onChange={(e) => set("date", e.target.value)}
                            className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.date ? "border-red-500/50" : ""}`}
                          />
                          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                        </div>
                        <div className="relative">
                          <select
                            value={form.time}
                            onChange={(e) => set("time", e.target.value)}
                            className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm appearance-none ${errors.time ? "border-red-500/50" : ""} ${!form.time ? "text-[#555]" : ""}`}
                          >
                            <option value="" disabled>Select Time</option>
                            {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none" />
                          {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                        </div>
                      </div>
                      <div className="relative">
                        <select
                          value={form.barber}
                          onChange={(e) => set("barber", e.target.value)}
                          className="dark-input w-full px-4 py-3.5 rounded-sm text-sm appearance-none"
                        >
                          {barbers.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 pointer-events-none" />
                      </div>
                    </motion.div>

                    {/* Notes */}
                    <motion.div variants={fadeUp} className="space-y-4">
                      <h3 className="text-gold/60 text-xs tracking-[0.25em] uppercase flex items-center gap-2">
                        <FileText size={14} /> Special Requests <span className="text-cream/20 normal-case tracking-normal">(optional)</span>
                      </h3>
                      <textarea
                        placeholder="Any special requests, style references, or notes for your barber..."
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        rows={4}
                        className="dark-input w-full px-4 py-3.5 rounded-sm text-sm resize-none"
                      />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                      <button
                        onClick={() => { if (validateDetails()) setStep("payment"); }}
                        className="btn-gold w-full py-4 text-sm rounded-sm flex items-center justify-center gap-2"
                      >
                        Continue to Payment
                        <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={() => setStep("details")}
                      className="text-cream/40 hover:text-gold transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="font-serif text-3xl text-cream/90">
                      Payment <span className="gold-text">Method</span>
                    </h2>
                  </div>

                  <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-6">
                    {/* Payment Method Selection */}
                    <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                      {[
                        { value: "cash", icon: Banknote, label: "Cash at Shop", desc: "Pay when you arrive. Easy and hassle-free." },
                        { value: "card", icon: CreditCard, label: "Card Payment", desc: "Secure online payment. Visa, Mastercard, Amex." },
                      ].map((method) => (
                        <button
                          key={method.value}
                          onClick={() => set("paymentMethod", method.value)}
                          className={`dark-card rounded-sm p-5 text-left transition-all duration-300 ${
                            form.paymentMethod === method.value
                              ? "border-gold/60 shadow-[0_0_20px_rgba(201,168,76,0.15)]"
                              : "border-gold/10 hover:border-gold/30"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-sm border flex items-center justify-center transition-colors ${
                              form.paymentMethod === method.value ? "border-gold bg-gold/10" : "border-gold/20"
                            }`}>
                              <method.icon size={20} className={form.paymentMethod === method.value ? "text-gold" : "text-cream/30"} strokeWidth={1.5} />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                form.paymentMethod === method.value ? "border-gold" : "border-cream/20"
                              }`}>
                                {form.paymentMethod === method.value && (
                                  <div className="w-2 h-2 rounded-full bg-gold" />
                                )}
                              </div>
                              <span className={`font-serif text-lg ${form.paymentMethod === method.value ? "text-cream/90" : "text-cream/50"}`}>
                                {method.label}
                              </span>
                            </div>
                          </div>
                          <p className="text-cream/30 text-xs pl-[52px]">{method.desc}</p>
                        </button>
                      ))}
                    </motion.div>

                    {/* Card Form */}
                    <AnimatePresence>
                      {form.paymentMethod === "card" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="dark-card rounded-sm p-6 space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                              <Lock size={14} className="text-gold" />
                              <span className="text-cream/40 text-xs">Your payment information is encrypted and secure</span>
                            </div>

                            <div>
                              <input
                                type="text"
                                placeholder="Card Number"
                                value={form.cardNumber}
                                onChange={(e) => set("cardNumber", formatCardNumber(e.target.value))}
                                className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm font-mono tracking-widest ${errors.cardNumber ? "border-red-500/50" : ""}`}
                                maxLength={19}
                              />
                              {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                            </div>

                            <div>
                              <input
                                type="text"
                                placeholder="Name on Card"
                                value={form.cardName}
                                onChange={(e) => set("cardName", e.target.value)}
                                className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm ${errors.cardName ? "border-red-500/50" : ""}`}
                              />
                              {errors.cardName && <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  value={form.cardExpiry}
                                  onChange={(e) => set("cardExpiry", formatExpiry(e.target.value))}
                                  className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm font-mono ${errors.cardExpiry ? "border-red-500/50" : ""}`}
                                  maxLength={5}
                                />
                                {errors.cardExpiry && <p className="text-red-400 text-xs mt-1">{errors.cardExpiry}</p>}
                              </div>
                              <div>
                                <input
                                  type="text"
                                  placeholder="CVV"
                                  value={form.cardCvv}
                                  onChange={(e) => set("cardCvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                                  className={`dark-input w-full px-4 py-3.5 rounded-sm text-sm font-mono ${errors.cardCvv ? "border-red-500/50" : ""}`}
                                  maxLength={4}
                                />
                                {errors.cardCvv && <p className="text-red-400 text-xs mt-1">{errors.cardCvv}</p>}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {form.paymentMethod === "cash" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="dark-card rounded-sm p-6 border-gold/10"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                          <div>
                            <p className="text-cream/70 text-sm font-serif mb-1">Pay at the Shop</p>
                            <p className="text-cream/40 text-xs leading-relaxed">
                              No payment required now. Pay cash when you arrive for your appointment. Please arrive 5 minutes early.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.div variants={fadeUp}>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-gold w-full py-4 text-sm rounded-sm flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                            Confirming Appointment...
                          </span>
                        ) : (
                          <>
                            Confirm Appointment · ${service.price}
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                      <p className="text-cream/25 text-xs text-center mt-3">
                        <Lock size={10} className="inline mr-1" />
                        Booking is free to make. You won&apos;t be charged until your appointment.
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — Summary Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-28"
            >
              <div className="dark-card rounded-sm overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
                <div className="p-6 border-b border-gold/10">
                  <p className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-1">Your Booking</p>
                  <h3 className="font-serif text-2xl text-cream/90">{service.name}</h3>
                  <p className="text-cream/40 text-sm mt-2">{service.category}</p>
                </div>

                <div className="p-6 space-y-4 border-b border-gold/10">
                  <div className="flex items-center gap-3 text-sm text-cream/50">
                    <Clock size={16} className="text-gold/60" />
                    <span>{service.duration}</span>
                  </div>
                  {form.date && (
                    <div className="flex items-center gap-3 text-sm text-cream/50">
                      <Calendar size={16} className="text-gold/60" />
                      <span>{new Date(form.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                    </div>
                  )}
                  {form.time && (
                    <div className="flex items-center gap-3 text-sm text-cream/50">
                      <Clock size={16} className="text-gold/60" />
                      <span>{form.time}</span>
                    </div>
                  )}
                  {(form.firstName || form.lastName) && (
                    <div className="flex items-center gap-3 text-sm text-cream/50">
                      <User size={16} className="text-gold/60" />
                      <span>{[form.firstName, form.lastName].filter(Boolean).join(" ")}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cream/50 text-sm">{service.name}</span>
                    <span className="text-cream/70 text-sm">${service.price}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gold/10">
                    <span className="text-cream/30 text-xs">Processing fee</span>
                    <span className="text-cream/30 text-xs">$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream/70 font-serif text-lg">Total</span>
                    <span className="text-gold font-serif text-2xl font-bold">${service.price}</span>
                  </div>
                </div>
              </div>

              {/* Shop Info */}
              <div className="mt-4 dark-card rounded-sm p-5 space-y-2">
                <p className="text-cream/40 text-xs tracking-widest uppercase mb-3">The Dark Room</p>
                <p className="text-cream/50 text-sm">123 Dark Alley, Suite 1</p>
                <p className="text-cream/50 text-sm">New York, NY 10001</p>
                <p className="text-cream/40 text-xs mt-2">Mon–Fri: 9AM–7PM · Sat: 8AM–6PM · Sun: 10AM–4PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-gold animate-pulse font-serif text-2xl">Loading...</div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
