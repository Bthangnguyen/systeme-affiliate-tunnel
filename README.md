# SoloLaunch — Systeme.io US Affiliate Tunnel

A conversion-first, high-trust US affiliate funnel for **Systeme.io** built with **[magicuidesign/app-template](https://github.com/magicuidesign/app-template)** (Next.js 15, React 19, Tailwind CSS 4, Motion, Radix UI).

Positioning:
> **The simpler way to launch and run an online business without stitching together a complicated stack of marketing tools.**

---

## 🚀 Key Features

* **US-Targeted Conversion Funnel:** Tailored for Solopreneurs, Creators, Coaches, and Course Creators.
* **Outcome-Driven Magic UI Bento Grid:** Highlights Funnels, Email Marketing, Automations, Courses, Custom Domains, and Native Affiliate Management.
* **Interactive Tech Stack Cost Estimator:** Real-time arithmetic calculator showing current software spend vs. Systeme.io's $0 start.
* **Exclusive Launch Kit Showcase:** Free pre-built funnel templates, 30-day email swipe sequences, and onboarding checklists.
* **Step-by-Step Educational Onboarding Hub (`/guide`):** 8-part in-depth curriculum with sticky desktop sidebar and mobile navigation.
* **FTC Compliant (`/affiliate-disclosure`):** Transparent affiliate disclosure badges placed contextually near all action points.
* **Robust Affiliate URL Builder:** Centralized tracking link generator (`config/site.ts`) that correctly preserves existing query parameters and anchor hash fragments.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS 4
* **Components:** Radix UI, Magic UI, Lucide Icons
* **Animations:** Motion (Framer Motion 12) with full `prefers-reduced-motion` support
* **Theme:** Light-first with Dark Mode toggle (`next-themes`)

---

## ⚙️ Configuration

Open `config/site.ts` to configure your brand and affiliate details:

```typescript
export const siteConfig = {
  brand: {
    name: "SoloLaunch",
    supportEmail: "support@sololaunch.io",
  },
  affiliate: {
    // Replace with your actual Systeme.io Affiliate ID (e.g. sa0123...)
    affiliateId: process.env.NEXT_PUBLIC_SYSTEME_AFFILIATE_ID || "YOUR_AFFILIATE_ID",
    systemeBaseUrl: "https://systeme.io",
    registerUrl: "https://systeme.io",
    pricingUrl: "https://systeme.io/pricing",
    shareFunnelUrl: "https://systeme.io/funnel/share/YOUR_ID",
  },
};
```

All CTA buttons and links across the site automatically inherit your affiliate tracking ID (`?sa=YOUR_ID`).

---

## 💻 Local Development

```bash
# Install dependencies
pnpm install # or npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 🚀 Deploy to Vercel

The easiest way to deploy is via the [Vercel Dashboard](https://vercel.com/new):

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import this repository (`Bthangnguyen/systeme-affiliate-tunnel`).
3. Click **Deploy**. Vercel will automatically build and assign a free SSL-secured production URL (`.vercel.app`).
