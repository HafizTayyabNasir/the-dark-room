import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Dark Room — Premium Barbershop",
  description: "Where precision meets artistry. The Dark Room is a premium barbershop offering haircuts, hot shaves, beard grooming, and more.",
  keywords: "barbershop, haircut, beard trim, hot shave, premium grooming, The Dark Room",
  openGraph: {
    title: "The Dark Room Barbershop",
    description: "Premium grooming for the modern gentleman.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
