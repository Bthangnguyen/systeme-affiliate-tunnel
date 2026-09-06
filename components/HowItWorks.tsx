"use client";

import { MousePointerClick, Mail, ShoppingCart, Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AffiliateButton } from "@/components/ui/affiliate-button";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      headline: "Collect Leads with Clean Funnels",
      description:
        "Build modern opt-in pages and squeeze funnels using the drag-and-drop builder. Collect verified email addresses with zero coding.",
      icon: MousePointerClick,
      pill: "Landing Pages & Opt-ins",
    },
    {
      number: "02",
      title: "Nurture",
      headline: "Engage Your Audience Automatically",
      description:
        "Trigger personalized welcome emails and automated drip sequences. Manage all contacts with simple tags instead of complicated lists.",
      icon: Mail,
      pill: "Unlimited Emails & Tags",
    },
    {
      number: "03",
      title: "Sell",
      headline: "Accept Payments with 0% Platform Fees",
      description:
        "Sell digital downloads, coaching packages, or online courses with built-in Stripe & PayPal checkout, 1-click upsells, and order bumps.",
      icon: ShoppingCart,
      pill: "Checkout & Products",
    },
    {
      number: "04",
      title: "Automate",
      headline: "Run Your Business on Autopilot",
      description:
        "Grant course access, tag buyers, send receipts, and notify team members automatically without paying for third-party connector tools.",
      icon: Zap,
      pill: "Built-In Workflows",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Simple 4-Step Workflow
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            From first visitor to paying customer.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Systeme.io transforms complicated marketing technology into a direct, logical pipeline.
          </p>

          {/* Interactive Visual Flow Indicator */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="bg-muted px-2.5 py-1 rounded-md">Traffic</span>
            <span>→</span>
            <span className="bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-md">Funnel</span>
            <span>→</span>
            <span className="bg-muted px-2.5 py-1 rounded-md">Email</span>
            <span>→</span>
            <span className="bg-muted px-2.5 py-1 rounded-md">Sale</span>
            <span>→</span>
            <span className="bg-muted px-2.5 py-1 rounded-md">Automation</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-muted-foreground/30 font-mono">
                      {step.number}
                    </span>
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <IconComponent className="size-5" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                    {step.title}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40">
                  <span className="inline-block text-[11px] font-medium text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-md">
                    {step.pill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step 4 CTA Banner */}
        <div className="mt-12 text-center">
          <AffiliateButton
            section="hero"
            ctaVariant="how_it_works_cta"
            size="lg"
            className="rounded-full px-8 shadow-sm font-semibold"
          >
            Launch Your First Funnel for Free
            <ArrowRight className="ml-2 size-4" />
          </AffiliateButton>
        </div>
      </div>
    </section>
  );
}
