import Link from "next/link";
import { ArrowLeft, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Affiliate & Material Connection Disclosure | ${siteConfig.brand.name}`,
  description:
    "Full FTC-compliant disclosure regarding our affiliate relationship with Systeme.io and how we maintain independent editorial standards.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-background">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 space-y-8">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldAlert className="size-3.5" />
              <span>FTC Compliance Statement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Affiliate & Material Connection Disclosure
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated & Verified: {siteConfig.lastVerified}
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
            <div className="rounded-xl border border-border/80 bg-muted/40 p-5 not-prose">
              <h2 className="text-base font-bold text-foreground mb-2">Plain Language Summary</h2>
              <p className="text-sm text-muted-foreground">
                We believe in full transparency. Some of the links on this website (including buttons to create an account, view pricing, or access templates) are affiliate links. If you click on one of these links and create an account or purchase a subscription from Systeme.io, we may receive a financial commission. This comes at <strong>no additional cost to you</strong>.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Federal Trade Commission (FTC) Guidelines</h2>
              <p>
                In compliance with the United States Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising (16 CFR Part 255), this disclosure informs you that {siteConfig.brand.name} maintains an affiliate relationship with ITACEL PTE. LTD. (the operator of Systeme.io).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. What Is an Affiliate Link?</h2>
              <p>
                When you click an affiliate link on this website, a unique tracking identifier is appended to the destination URL. If you subsequently register for a free account or upgrade to a paid subscription, Systeme.io's affiliate tracking system records that you were referred by {siteConfig.brand.name}.
              </p>
              <p>
                This commission helps support our team in maintaining this website, writing free educational guides, and providing pre-built funnel templates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Independent Relationship Notice</h2>
              <p>
                <strong>{siteConfig.brand.name} is an independent educational and review website.</strong> We are not an employee, official agent, or corporate partner of Systeme.io. We do not represent ourselves as the official Systeme.io website. The official website of Systeme.io is located strictly at <a href="https://systeme.io" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://systeme.io</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Editorial Integrity & Product Recommendations</h2>
              <p>
                Our recommendation of Systeme.io is based on its genuine utility as a unified, cost-effective platform for solopreneurs and creators. We prioritize accuracy:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>We do not guarantee income, profits, or specific conversion rates.</li>
                <li>Pricing and plan feature limits reflect official documentation at the time of publication.</li>
                <li>We strongly encourage every visitor to begin with Systeme.io's permanent Free Plan ($0, no credit card required) to test the platform before committing any funds.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Questions & Contact Information</h2>
              <p>
                If you have questions regarding this disclosure or our relationship with Systeme.io, please contact our support team at{" "}
                <a href={`mailto:${siteConfig.brand.supportEmail}`} className="text-primary underline">
                  {siteConfig.brand.supportEmail}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
