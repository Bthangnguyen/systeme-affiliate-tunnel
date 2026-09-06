"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { AffiliateButton } from "@/components/ui/affiliate-button";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Simple & Transparent Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Start free. Upgrade when your business needs more.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            No forced trials. No credit card required to begin. 0% platform transaction fees on every plan.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span
              className={`text-sm font-medium cursor-pointer ${
                billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly billing
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billingCycle === "yearly"}
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden bg-primary"
            >
              <span
                className={`pointer-events-none inline-block size-5 transform rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out ${
                  billingCycle === "yearly" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium cursor-pointer inline-flex items-center gap-1.5 ${
                billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Annual billing
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Save 30% (~2 months free)
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pricing.map((plan) => {
            const isFree = plan.id === "free";
            const price = billingCycle === "monthly" ? plan.priceMonthly : Math.round(plan.priceYearly / 12);

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isFree
                    ? "border-primary shadow-md bg-card ring-1 ring-primary/30"
                    : "border-border/70 bg-card/60 shadow-xs hover:border-border"
                }`}
              >
                {/* Plan Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary text-primary-foreground text-[11px] font-bold px-3 py-0.5 shadow-xs uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-muted-foreground min-h-[32px] mb-4">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-6 pb-4 border-b border-border/50">
                    <span className="text-4xl font-extrabold text-foreground font-mono">
                      ${price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      /month {billingCycle === "yearly" && !isFree ? "(billed annually)" : ""}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <AffiliateButton
                    section="pricing"
                    ctaVariant={`pricing_${plan.id}_plan`}
                    targetUrl={isFree ? siteConfig.affiliate.registerUrl : siteConfig.affiliate.pricingUrl}
                    variant={isFree ? "default" : "outline"}
                    className={`w-full rounded-full font-semibold mb-6 ${
                      isFree ? "shadow-sm" : ""
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="ml-1.5 size-3.5" />
                  </AffiliateButton>

                  {/* Features List */}
                  <div className="space-y-2.5 text-xs text-muted-foreground">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground block mb-2">
                      Included Features:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className={isFree && fIdx < 4 ? "text-foreground font-medium" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {isFree && (
                  <div className="mt-6 pt-3 border-t border-border/40 text-center">
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      ✓ No credit card required
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
