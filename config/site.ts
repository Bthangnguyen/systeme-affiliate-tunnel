/**
 * Site Configuration & Centralized Source of Truth
 * US-targeted, conversion-first independent resource for Systeme.io.
 */

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface LaunchKitItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
}

export const siteConfig = {
  brand: {
    name: "SoloLaunch",
    legalName: "SoloLaunch Independent Review & Resources",
    url: "https://sololaunch.io",
    ogImage: "/og.png",
    supportEmail: "support@sololaunch.io",
  },
  meta: {
    title: "Everything You Need to Launch Your Online Business | In One Place",
    description:
      "The simpler way to launch and run an online business without stitching together a complicated stack of marketing tools. Build funnels, email marketing, courses, and automations with Systeme.io.",
    keywords: [
      "Systeme.io",
      "all in one marketing platform",
      "sales funnel builder",
      "email marketing automation",
      "online course platform",
      "free funnel builder",
      "solopreneur business tools",
    ],
  },
  // Central Affiliate Configuration
  affiliate: {
    // Systeme.io live affiliate ID
    affiliateId: process.env.NEXT_PUBLIC_SYSTEME_AFFILIATE_ID || "sa0280709543899e1c2a6538ad88d9dc5bbcfeccc8",
    systemeBaseUrl: "https://systeme.io",
    // Free plan registration URL
    registerUrl: "https://systeme.io",
    pricingUrl: "https://systeme.io/pricing",
    // Link to Share Funnel package (when user clicks, imports templates & registers under your affiliate tag)
    shareFunnelUrl: "https://systeme.io/funnel/share/sololaunch-kit",
  },
  // Legal & FTC Disclosures
  disclosures: {
    footerDisclaimer:
      "FTC Disclaimer: Disclosure: We may earn a commission if you sign up or purchase through links on this site, at no additional cost to you. We are an independent review and educational resource and not an employee or official partner of Systeme.io. This is an independent educational resource and is not sponsored by, endorsed by, or affiliated with Systeme.io official branding.",
  },
  // Verified Pricing Baseline (September 2026)
  pricing: [
    {
      id: "free",
      name: "Free",
      priceMonthly: 0,
      priceYearly: 0,
      description: "Everything you need to build and launch your business risk-free.",
      popular: true,
      badge: "Forever Free",
      ctaText: "Start for Free",
      features: [
        "Up to 2,000 email contacts",
        "Unlimited email sends",
        "3 full sales funnels (15 steps total)",
        "1 online course with unlimited students",
        "1 custom domain connection with free SSL",
        "1 automation rule & 1 workflow",
        "0% transaction fees on all sales",
        "No credit card required to sign up",
      ],
    },
    {
      id: "startup",
      name: "Startup",
      priceMonthly: 17,
      priceYearly: 170,
      description: "Scale your funnels and expand your contact database.",
      popular: false,
      ctaText: "Start Startup Plan",
      features: [
        "Up to 5,000 email contacts",
        "Unlimited email sends",
        "10 sales funnels (50 steps)",
        "5 online courses with unlimited students",
        "3 custom domains",
        "10 automation rules & 5 email campaigns",
        "0% transaction fees",
        "1-click upsells, order bumps, coupons",
      ],
    },
    {
      id: "webinar",
      name: "Webinar",
      priceMonthly: 47,
      priceYearly: 470,
      description: "Automate your high-ticket sales with evergreen automated webinars.",
      popular: false,
      ctaText: "Start Webinar Plan",
      features: [
        "Up to 10,000 email contacts",
        "Unlimited email sends",
        "50 sales funnels (300 steps)",
        "20 online courses",
        "10 custom domains",
        "100 automation rules & 20 campaigns",
        "10 Evergreen automated webinars",
        "0% transaction fees",
      ],
    },
    {
      id: "unlimited",
      name: "Unlimited",
      priceMonthly: 97,
      priceYearly: 970,
      description: "Uncapped scaling for established creators, agencies, and teams.",
      popular: false,
      badge: "Free Migration",
      ctaText: "Start Unlimited Plan",
      features: [
        "Unlimited email contacts",
        "Unlimited sales funnels & steps",
        "Unlimited courses & students",
        "Unlimited custom domains",
        "Unlimited evergreen webinars",
        "Free 1-on-1 migration service",
        "0% transaction fees",
        "Priority 24/7 customer support",
      ],
    },
  ] as PricingPlan[],
  // Exclusive Launch Kit (Practical, verified assets)
  launchKit: [
    {
      id: "funnels",
      title: "5 Proven Funnel Templates",
      tagline: "1-Click Direct Import",
      description:
        "High-converting templates for Lead Generation, Digital Product Sales, Consultation Booking, and Course Enrollment ready to customize.",
      icon: "Layers",
      badge: "Ready-to-Use",
    },
    {
      id: "emails",
      title: "30-Day Email Marketing Sequence",
      tagline: "Copy & Paste Swipe Files",
      description:
        "Battle-tested welcome series, educational nurture campaigns, and offer sequences crafted for maximum open rates and conversions.",
      icon: "Mail",
      badge: "Swipe Files",
    },
    {
      id: "checklist",
      title: "Zero-to-Launch Setup Checklist",
      tagline: "Step-by-Step Roadmap",
      description:
        "An actionable, no-fluff PDF checklist covering custom domain setup, DNS email authentication (DKIM/SPF), and payment gateway integration.",
      icon: "CheckSquare",
      badge: "Action Guide",
    },
    {
      id: "guide",
      title: "Complete Video & Text Quickstart",
      tagline: "Self-Paced Training",
      description:
        "Clear walkthroughs that get your first lead capture page and email automation live in less than 60 minutes.",
      icon: "PlayCircle",
      badge: "Training",
    },
  ] as LaunchKitItem[],
  lastVerified: "September 2026",
};

/**
 * Robust Affiliate URL Builder
 * Correctly appends tracking parameters to any target URL:
 * - Handles existing query strings (e.g. ?plan=free -> ?plan=free&sa=YOUR_ID)
 * - Preserves anchor hash fragments (e.g. #pricing -> ?sa=YOUR_ID#pricing)
 * - Strips duplicate slashes and formats cleanly
 */
export function getAffiliateUrl(targetUrl: string = siteConfig.affiliate.systemeBaseUrl): string {
  const affId = siteConfig.affiliate.affiliateId;
  if (!affId || affId === "YOUR_AFFILIATE_ID") {
    return targetUrl;
  }

  try {
    const url = new URL(targetUrl);
    // Add or replace the ?sa parameter
    url.searchParams.set("sa", affId);
    return url.toString();
  } catch {
    // Fallback if targetUrl is relative or simple string
    const [pathAndQuery, hash] = targetUrl.split("#");
    const separator = pathAndQuery.includes("?") ? "&" : "?";
    const withTracking = `${pathAndQuery}${separator}sa=${affId}`;
    return hash ? `${withTracking}#${hash}` : withTracking;
  }
}
