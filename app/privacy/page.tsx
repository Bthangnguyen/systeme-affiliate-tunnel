import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.brand.name}`,
  description: "Learn how we handle data and protect visitor privacy on our website.",
};

export default function PrivacyPolicyPage() {
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
              <Shield className="size-3.5" />
              <span>Data & Privacy Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground">
              Effective Date: {siteConfig.lastVerified}
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-6 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Overview</h2>
              <p>
                {siteConfig.brand.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy of visitors who use our website. This Privacy Policy outlines what information is collected, how it is used, and how we protect your personal data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
              <p>
                As an educational and informational website, we collect minimal information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>Anonymous Usage Data:</strong> We may use privacy-preserving analytics to understand page visits, browser types, and referral sources to improve our guides.
                </li>
                <li>
                  <strong>Direct Communications:</strong> If you email our support team, we retain your email address and correspondence solely to answer your inquiry.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Outbound Links to Systeme.io</h2>
              <p>
                Our site contains outbound links to external third-party websites, primarily Systeme.io. When you click on an affiliate link to Systeme.io, you will be redirected to their platform. Systeme.io operates under its own Privacy Policy and Terms of Service governing any account registration or payment processing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Cookies and Web Beacons</h2>
              <p>
                We do not set intrusive advertising cookies. Any affiliate tracking cookies placed when you visit Systeme.io are managed directly by Systeme.io's servers to attribute your account signup.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Children&apos;s Privacy</h2>
              <p>
                Our website is intended for general entrepreneurial audiences and does not knowingly collect any data from children under 13 years of age.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact us at{" "}
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
