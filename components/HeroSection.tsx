"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { AffiliateDisclosureBadge } from "@/components/ui/affiliate-disclosure-badge";

export function HeroSection() {
  const FADE_DOWN = {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full pt-12 pb-16 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-radial from-primary/5 via-background to-background">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-primary/15 to-blue-500/10 blur-[120px] rounded-full opacity-60"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto"
        >
          {/* Eyebrow badge */}
          <motion.div variants={FADE_DOWN}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-xs">
              <Sparkles className="size-3.5" />
              <span>ALL-IN-ONE ONLINE BUSINESS PLATFORM</span>
            </div>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            variants={FADE_DOWN}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl/tight lg:text-6xl/none text-foreground"
          >
            Everything You Need to Launch Your Online Business.{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              In One Place.
            </span>
          </motion.h1>

          {/* Supporting Subhead */}
          <motion.p
            variants={FADE_DOWN}
            className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Build sales funnels, grow your email list, sell digital products, and
            automate your marketing without piecing together a complicated stack of tools.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={FADE_DOWN}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2"
          >
            <AffiliateButton
              section="hero"
              ctaVariant="hero_primary_start_free"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all"
            >
              Start for Free
              <ArrowRight className="ml-2 size-4" />
            </AffiliateButton>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-7 py-6 text-base text-muted-foreground hover:text-foreground"
            >
              <Link href="#how-it-works">
                See How It Works
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Friction-reducing Microcopy & Trust Highlights */}
          <motion.div
            variants={FADE_DOWN}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground pt-1"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              Free plan does not expire
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              Set up in minutes
            </span>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={FADE_DOWN}
            className="pt-4 border-t border-border/40 w-full max-w-xl"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/80 font-medium">
              Funnels · Email Marketing · Automation · Courses · Websites
            </p>
          </motion.div>
        </motion.div>

        {/* Product Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-12 md:mt-16 mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl p-2 bg-gradient-to-b from-border/80 via-border/30 to-transparent shadow-2xl">
            <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
              {/* Browser Window Bar */}
              <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-400/80" />
                  <div className="size-3 rounded-full bg-amber-400/80" />
                  <div className="size-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="rounded-md border border-border/50 bg-background/80 px-4 py-1 text-xs text-muted-foreground font-mono">
                  systeme.io/dashboard
                </div>
                <div className="w-10" />
              </div>

              {/* Dashboard Content Mockup */}
              <div className="p-6 md:p-8 bg-gradient-to-b from-card to-background">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                    <div className="text-xs text-muted-foreground font-medium">Funnels & Pages</div>
                    <div className="text-2xl font-bold mt-1 text-foreground">3 Live Funnels</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Opt-in → Sales → Checkout</div>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                    <div className="text-xs text-muted-foreground font-medium">Email Subscribers</div>
                    <div className="text-2xl font-bold mt-1 text-foreground">1,850 Contacts</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Unlimited emails included</div>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                    <div className="text-xs text-muted-foreground font-medium">Active Automations</div>
                    <div className="text-2xl font-bold mt-1 text-foreground">24/7 Automated</div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">Tag → Sequence → Delivery</div>
                  </div>
                </div>

                {/* Workflow Simulation Graphic */}
                <div className="rounded-lg border border-border/60 bg-secondary/30 p-5 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Unified Business Workflow
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="rounded-md bg-background px-3 py-1.5 border border-border/80 font-medium shadow-xs">
                      1. Lead Capture
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="rounded-md bg-background px-3 py-1.5 border border-border/80 font-medium shadow-xs">
                      2. Tag & Email Sequence
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="rounded-md bg-background px-3 py-1.5 border border-border/80 font-medium shadow-xs">
                      3. Digital Product Checkout ($0 Fee)
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="rounded-md bg-background px-3 py-1.5 border border-border/80 font-medium shadow-xs">
                      4. Course Access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FTC Disclosure beneath visual */}
          <div className="mt-4 text-center">
            <AffiliateDisclosureBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
