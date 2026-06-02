import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border border-gold/30">
                <Image
                  src="/images/logo.webp"
                  alt="The Dark Room Logo"
                  fill
                  className="object-contain scale-90"
                />
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Where precision meets artistry. A sanctuary for the modern gentleman seeking excellence in grooming.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-gold/20 rounded-sm flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.25em] uppercase font-bold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/booking", label: "Book Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-gold/30 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.25em] uppercase font-bold mb-6">
              Hours
            </h3>
            <ul className="space-y-3">
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Clock size={14} className="text-gold/60 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-cream/70 text-sm">{item.day}</div>
                    <div className="text-cream/40 text-xs">{item.hours}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.25em] uppercase font-bold mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold/60 mt-0.5 shrink-0" />
                <span className="text-cream/50 text-sm">
                  Al Rahah Street<br />Abu Dhabi, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold/60 shrink-0" />
                <a href="tel:+12125550100" className="text-cream/50 text-sm hover:text-gold transition-colors">
                  (212) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold/60 shrink-0" />
                <a href="mailto:info@thedarkroom.com" className="text-cream/50 text-sm hover:text-gold transition-colors">
                  info@thedarkroom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs tracking-wider">
            © 2024 The Dark Room Barbershop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 text-xs hover:text-gold/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/30 text-xs hover:text-gold/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
