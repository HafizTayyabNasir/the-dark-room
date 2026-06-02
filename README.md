# The Dark Room — Barbershop Website

A premium Next.js appointment booking website for The Dark Room Barbershop.

## Features

- 🏠 **Home Page** — Hero, services preview, testimonials, CTA
- 📖 **About Page** — Story, team, values
- ✂️ **Services Page** — Filterable service catalog with pricing
- 📅 **Booking Flow** — Service selection → Checkout → Confirmation
- 💳 **Payment Options** — Card payment or Cash at shop
- 🎨 **Dark gold aesthetic** with Framer Motion animations
- 📱 **Fully responsive** — Mobile, tablet, desktop
- 🚀 **Vercel-ready** — Deploy in one click

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deploy to Vercel

1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Click Deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
the-dark-room/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services catalog
│   ├── booking/
│   │   ├── page.tsx          # Service selection (Step 1)
│   │   ├── checkout/page.tsx # Checkout form (Step 2)
│   │   └── confirmation/     # Booking confirmed
│   └── api/
│       ├── booking/route.ts  # Booking API endpoint
│       └── contact/route.ts  # Contact form endpoint
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── services.ts           # Services data & time slots
│   └── utils.ts
└── types/index.ts
```

## Customization

### Services
Edit `lib/services.ts` to add/modify services, pricing, and time slots.

### Colors
Edit `tailwind.config.ts` to change the color palette.

### Content
All page content is in `app/*/page.tsx` files.

### API Integration
The booking API at `app/api/booking/route.ts` currently logs to console.
Connect your database (Postgres, MongoDB, etc.) to persist bookings.

### Email Notifications
Add [Resend](https://resend.com) or similar to send confirmation emails.
