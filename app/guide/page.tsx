"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  UserPlus,
  Globe,
  Filter,
  Mail,
  Zap,
  GraduationCap,
  Coins,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { AffiliateDisclosureBadge } from "@/components/ui/affiliate-disclosure-badge";
import { siteConfig } from "@/config/site";

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const guideSections = [
    { id: "getting-started", title: "1. Account Creation", icon: UserPlus },
    { id: "domain-setup", title: "2. Custom Domain & DNS", icon: Globe },
    { id: "first-funnel", title: "3. Building Your First Funnel", icon: Filter },
    { id: "email-marketing", title: "4. Email Sequences & Tags", icon: Mail },
    { id: "automation", title: "5. Workflows & Rules", icon: Zap },
    { id: "selling-products", title: "6. Selling Products & Payments", icon: CheckCircle2 },
    { id: "courses", title: "7. Hosting Courses & Community", icon: GraduationCap },
    { id: "affiliate-program", title: "8. The 60% Affiliate Program", icon: Coins },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10 md:py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
            </Button>
            <AffiliateDisclosureBadge />
          </div>

          {/* Guide Header Banner */}
          <div className="rounded-3xl border border-border/80 bg-gradient-to-r from-primary/10 via-card to-muted/20 p-6 sm:p-10 mb-12 shadow-xs">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                <BookOpen className="size-3.5" />
                <span>Complete Step-by-Step Training</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                The Practical Guide to Launching on Systeme.io
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything you need to configure your domain, publish your first sales funnel, automate email sequences, and sell digital products without code.
              </p>
            </div>
          </div>

          {/* Dual-Column Layout: Sticky Sidebar + Main Article */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Desktop Sticky Table of Contents */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-border/70 bg-card p-5 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {guideSections.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveSection(sec.id)}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span>{sec.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-5 border-t border-border/50 space-y-3">
                  <div className="text-xs font-medium text-foreground">
                    Don&apos;t have an account yet?
                  </div>
                  <AffiliateButton
                    section="guide"
                    ctaVariant="guide_sidebar_start_free"
                    size="sm"
                    className="w-full rounded-full font-semibold"
                  >
                    Create Free Account
                    <ArrowUpRight className="ml-1 size-3.5" />
                  </AffiliateButton>
                  <p className="text-[11px] text-muted-foreground text-center">
                    No credit card required
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="lg:col-span-8 space-y-16 text-muted-foreground leading-relaxed">
              {/* SECTION 1 */}
              <section id="getting-started" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <UserPlus className="size-4" /> Part 1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  1. Creating & Activating Your Free Account
                </h2>
                <p>
                  Systeme.io provides a permanent Free Plan with no expiration date and no credit card required. To set up your account cleanly:
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3">
                  <h3 className="text-sm font-bold text-foreground">Step-by-Step Activation:</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm">
                    <li>
                      Visit the registration page via{" "}
                      <Link href={siteConfig.affiliate.systemeBaseUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">
                        Systeme.io
                      </Link>{" "}
                      and enter your primary business email address.
                    </li>
                    <li>
                      Click <strong>&ldquo;Get my free account&rdquo;</strong>.
                    </li>
                    <li>
                      Check your email inbox for a confirmation message titled <em>&ldquo;Confirm your account on systeme.io&rdquo;</em>.
                    </li>
                    <li>
                      Click the activation link and set a secure password for your new workspace.
                    </li>
                  </ol>
                </div>
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5">
                  <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pro-Tip:</strong> Using a custom domain email (e.g. <code>you@yourdomain.com</code>) improves email deliverability down the road, but a standard Gmail address works perfectly to get started.
                  </span>
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="domain-setup" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Globe className="size-4" /> Part 2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  2. Connecting Your Custom Domain & DNS Records
                </h2>
                <p>
                  By default, your funnels use a subdomain like <code>yourname.systeme.io</code>. To establish professional brand trust, connect your custom domain (even on the Free Plan).
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3">
                  <h3 className="text-sm font-bold text-foreground">Configuring DNS in 3 Steps:</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-sm">
                    <li>
                      Go to your profile avatar in the top right $\rightarrow$ <strong>Settings</strong> $\rightarrow$ <strong>Custom domains</strong>.
                    </li>
                    <li>
                      Click <strong>Add domain</strong> and enter a subdomain (e.g. <code>app.yourdomain.com</code> or <code>www.yourdomain.com</code>).
                    </li>
                    <li>
                      Systeme.io will display two <strong>CNAME</strong> records. Add these records in your domain registrar DNS panel (Cloudflare, Namecheap, GoDaddy, etc.).
                    </li>
                  </ol>
                </div>
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-4 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                  <AlertTriangle className="size-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Email Authentication Notice:</strong> Under <strong>Settings $\rightarrow$ Mailing settings</strong>, also add the 3 DKIM CNAME records provided. This tells major inboxes (Google, Outlook) that your automated marketing emails are legitimate, keeping your messages out of the spam folder.
                  </span>
                </div>
              </section>

              {/* SECTION 3 */}
              <section id="first-funnel" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Filter className="size-4" /> Part 3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  3. Building Your First Sales Funnel
                </h2>
                <p>
                  Funnels are sequential web pages designed to guide visitors toward a single conversion goal without distracting navigation menus.
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3">
                  <h3 className="text-sm font-bold text-foreground">Core Funnel Structure:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <strong>Step 1: Squeeze Page / Opt-in Page:</strong> Offers a compelling Lead Magnet (checklist, guide, discount) in exchange for the visitor&apos;s email address.
                    </li>
                    <li>
                      <strong>Step 2: Order Form (Checkout):</strong> A streamlined checkout page with integrated Stripe/PayPal fields, order bumps, and coupon codes.
                    </li>
                    <li>
                      <strong>Step 3: Thank You / Delivery Page:</strong> Confirms the order, provides the download link, and prompts next steps.
                    </li>
                  </ul>
                </div>
                <p className="text-sm">
                  Systeme.io&apos;s editor operates in three structural layers: <strong>Sections (green)</strong> hold <strong>Rows (blue)</strong>, which contain drag-and-drop <strong>Elements (orange)</strong> such as headings, buttons, countdown timers, and video players.
                </p>

                {/* Contextual CTA */}
                <div className="rounded-xl bg-muted/40 border border-border/60 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-sm font-bold text-foreground">Want pre-made templates?</div>
                    <div className="text-xs text-muted-foreground">Import 5 tested funnels directly into your account in 1 click.</div>
                  </div>
                  <AffiliateButton
                    section="guide"
                    ctaVariant="guide_section3_funnel_cta"
                    size="sm"
                    className="rounded-full shrink-0 font-semibold"
                  >
                    Start Free & Get Templates
                  </AffiliateButton>
                </div>
              </section>

              {/* SECTION 4 */}
              <section id="email-marketing" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Mail className="size-4" /> Part 4
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  4. Setting Up Email Marketing & Tag Organization
                </h2>
                <p>
                  Unlike legacy platforms (like Mailchimp) that separate subscribers into isolated, duplicate lists, Systeme.io uses a unified <strong>Tag-based contact system</strong>.
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3">
                  <h3 className="text-sm font-bold text-foreground">How to Structure Your Tags:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Create an interest tag like <code>Lead - Checklist</code> for new opt-ins.</li>
                    <li>Create a customer tag like <code>Buyer - Course XYZ</code> when someone purchases.</li>
                    <li>
                      Under <strong>Emails $\rightarrow$ Campaigns</strong>, build automated drip sequences that send emails 24 hours, 48 hours, and 72 hours after signup.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 5 */}
              <section id="automation" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Zap className="size-4" /> Part 5
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  5. Connecting Automations & Workflows
                </h2>
                <p>
                  Automations ensure your business delivers value without requiring manual intervention for every new customer.
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-2 text-sm">
                  <p><strong>Basic Automation Rule (Triggers & Actions):</strong></p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li><strong>Trigger:</strong> Funnel step form subscribed (user submits their email).</li>
                    <li><strong>Action 1:</strong> Apply tag <code>Lead - New</code>.</li>
                    <li><strong>Action 2:</strong> Subscribe contact to your welcome email campaign.</li>
                    <li><strong>Action 3:</strong> Send a direct confirmation email with the asset link.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 6 */}
              <section id="selling-products" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <CheckCircle2 className="size-4" /> Part 6
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  6. Selling Digital Products & Accepting Payments
                </h2>
                <p>
                  Under <strong>Products $\rightarrow$ Physical / Digital Products</strong>, you can upload downloadable files (PDFs, ZIPs) or create membership resources.
                </p>
                <p className="text-sm">
                  Connect your Stripe or PayPal account under <strong>Settings $\rightarrow$ Payment Gateways</strong>. Systeme.io charges <strong>0% platform fees</strong>, meaning you only pay standard merchant processing rates (typically 2.9% + $0.30) to Stripe or PayPal directly.
                </p>
              </section>

              {/* SECTION 7 */}
              <section id="courses" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <GraduationCap className="size-4" /> Part 7
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  7. Hosting Online Courses & Community Groups
                </h2>
                <p>
                  Navigate to <strong>Products $\rightarrow$ Courses</strong> to construct a complete learning management curriculum.
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Add <strong>Modules</strong> (chapters) and <strong>Lectures</strong> (individual lessons).</li>
                    <li>Upload videos directly to Systeme.io&apos;s video player with zero bandwidth overage charges.</li>
                    <li>Link your course to an Order Form: student accounts and login credentials are generated and emailed automatically upon purchase.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 8 */}
              <section id="affiliate-program" className="space-y-4 scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <Coins className="size-4" /> Part 8
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  8. Understanding the Systeme.io Affiliate Opportunity
                </h2>
                <p>
                  In addition to running your own business, every Systeme.io account automatically includes access to their affiliate program:
                </p>
                <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3 text-sm">
                  <h3 className="text-sm font-bold text-foreground">Key Program Mechanics:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>60% Lifetime Recurring Commission:</strong> Affiliates earn 60% of monthly or annual subscription fees for every customer referred.
                    </li>
                    <li>
                      <strong>Permanent Lead Tagging:</strong> When someone signs up for a Free Plan through your link, their account is tagged with your affiliate ID for life. When they eventually upgrade months or years later, you receive the recurring commission.
                    </li>
                    <li>
                      <strong>Monthly Payouts:</strong> Paid on the 10th of every month via PayPal or Wire/Wise with a low $30 minimum threshold.
                    </li>
                  </ul>
                </div>

                {/* Final Guide CTA */}
                <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 p-6 sm:p-8 text-center space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Ready to start building your own online business?
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Create your free account today and test the entire workflow with zero financial risk.
                  </p>
                  <AffiliateButton
                    section="guide"
                    ctaVariant="guide_bottom_start_free"
                    size="lg"
                    className="rounded-full px-8 py-6 font-semibold shadow-sm"
                  >
                    Create Your Free Systeme.io Account
                    <ArrowRight className="ml-2 size-4" />
                  </AffiliateButton>
                  <div className="text-[11px] text-muted-foreground">
                    No credit card required • Free plan does not expire
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
