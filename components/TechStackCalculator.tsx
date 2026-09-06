"use client";

import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AffiliateButton } from "@/components/ui/affiliate-button";

export function TechStackCalculator() {
  const [funnelCost, setFunnelCost] = useState<number>(97);
  const [emailCost, setEmailCost] = useState<number>(45);
  const [courseCost, setCourseCost] = useState<number>(59);
  const [autoCost, setAutoCost] = useState<number>(29);
  const [otherCost, setOtherCost] = useState<number>(20);

  const monthlyTotal =
    (Number(funnelCost) || 0) +
    (Number(emailCost) || 0) +
    (Number(courseCost) || 0) +
    (Number(autoCost) || 0) +
    (Number(otherCost) || 0);

  const annualTotal = monthlyTotal * 12;

  const handleReset = () => {
    setFunnelCost(97);
    setEmailCost(45);
    setCourseCost(59);
    setAutoCost(29);
    setOtherCost(20);
  };

  return (
    <section id="calculator" className="w-full py-16 md:py-24 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Stack Arithmetic
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            How much is your current tech stack costing you?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Enter what you currently pay (or plan to pay) for separate marketing software to calculate your monthly baseline.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input fields */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Tool Category
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="size-3" /> Reset Defaults
                </button>
              </div>

              <div>
                <label htmlFor="funnel-cost" className="text-xs font-medium text-foreground block mb-1">
                  Website & Sales Funnel Builder
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    id="funnel-cost"
                    type="number"
                    min="0"
                    value={funnelCost}
                    onChange={(e) => setFunnelCost(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border/80 bg-background pl-8 pr-12 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">/mo</span>
                </div>
              </div>

              <div>
                <label htmlFor="email-cost" className="text-xs font-medium text-foreground block mb-1">
                  Email Marketing & Newsletter Tool
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    id="email-cost"
                    type="number"
                    min="0"
                    value={emailCost}
                    onChange={(e) => setEmailCost(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border/80 bg-background pl-8 pr-12 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">/mo</span>
                </div>
              </div>

              <div>
                <label htmlFor="course-cost" className="text-xs font-medium text-foreground block mb-1">
                  Course Hosting / Community LMS
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    id="course-cost"
                    type="number"
                    min="0"
                    value={courseCost}
                    onChange={(e) => setCourseCost(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border/80 bg-background pl-8 pr-12 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">/mo</span>
                </div>
              </div>

              <div>
                <label htmlFor="auto-cost" className="text-xs font-medium text-foreground block mb-1">
                  Workflow Automation (Zapier, etc.)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    id="auto-cost"
                    type="number"
                    min="0"
                    value={autoCost}
                    onChange={(e) => setAutoCost(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border/80 bg-background pl-8 pr-12 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">/mo</span>
                </div>
              </div>

              <div>
                <label htmlFor="other-cost" className="text-xs font-medium text-foreground block mb-1">
                  Affiliate Management & Other Tools
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                  <input
                    id="other-cost"
                    type="number"
                    min="0"
                    value={otherCost}
                    onChange={(e) => setOtherCost(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border/80 bg-background pl-8 pr-12 py-2 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">/mo</span>
                </div>
              </div>
            </div>

            {/* Arithmetic Output summary */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Current Estimated Stack
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-foreground font-mono">
                  ${monthlyTotal}
                  <span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Approximately <strong className="text-foreground font-semibold">${annualTotal.toLocaleString()}</strong> per year across separate subscriptions.
                </div>
              </div>

              <div className="border-t border-border/60 pt-4 text-left text-xs space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span><strong>Systeme.io Free Plan:</strong> $0 / month (No credit card needed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span><strong>Systeme.io Paid Plans:</strong> Start at just $17 / month</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-3">
                  See what you could consolidate with Systeme.io:
                </p>
                <AffiliateButton
                  section="calculator"
                  ctaVariant="calculator_start_free"
                  className="w-full rounded-full font-semibold shadow-xs"
                >
                  Start Free on Systeme.io
                  <ArrowRight className="ml-2 size-4" />
                </AffiliateButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
