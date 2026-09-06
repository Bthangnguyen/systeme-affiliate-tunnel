"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FaqSection() {
  const faqs = [
    {
      q: "Is Systeme.io really free?",
      a: "Yes. Systeme.io offers a permanent Free Plan, not a 14-day trial that expires. You can manage up to 2,000 email contacts, run 3 sales funnels, create 1 online course, and send unlimited marketing emails without paying a dime.",
    },
    {
      q: "Do I need to enter a credit card to sign up?",
      a: "No. You only need to enter an email address to create your free account. No credit card, debit card, or billing information is collected during signup.",
    },
    {
      q: "Can I connect my own custom domain on the Free plan?",
      a: "Yes! Even on the $0 Free tier, Systeme.io allows you to connect 1 custom domain (e.g., yourname.com) with automatic free SSL security certificates via standard DNS CNAME records.",
    },
    {
      q: "Are there any limits on email sends?",
      a: "No. All plans — including the Free Plan — come with unlimited email sending. You will never be billed unexpected usage fees for sending newsletters or broadcast sequences.",
    },
    {
      q: "How do I accept payments for my products or courses?",
      a: "Systeme.io integrates directly with Stripe and PayPal (along with Razorpay, Flutterwave, and Mercado Pago). Money from your sales goes directly into your merchant account, and Systeme.io takes 0% platform transaction fees.",
    },
    {
      q: "Can I migrate my contacts and funnels if I upgrade later?",
      a: "Yes. If you decide to upgrade to an annual plan, Systeme.io's team provides complimentary 1-on-1 migration assistance to move your assets, contacts, and funnels from tools like ActiveCampaign, ClickFunnels, or Teachable.",
    },
    {
      q: "Why should I sign up through this website?",
      a: "When you sign up through our links, you get access to our exclusive Launch Kit (5 pre-built funnel templates, 30-day email swipe files, and setup checklists) at no extra cost, giving you a major head start.",
    },
    {
      q: "Is this the official Systeme.io website?",
      a: "No. This is an independent educational and review website created to provide tutorials, templates, and honest software guides. We recommend Systeme.io as independent affiliate partners and may earn a commission when you register or upgrade through our links.",
    },
  ];

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Clear answers to common questions.
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Everything you need to know about getting started without risk.
          </p>
        </div>

        {/* Accordion List */}
        <div className="rounded-2xl border border-border/70 bg-card p-4 sm:p-6 shadow-xs">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border/50 py-1">
                <AccordionTrigger className="text-left font-semibold text-foreground text-sm sm:text-base hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
