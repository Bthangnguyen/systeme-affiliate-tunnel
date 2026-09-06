import Link from "next/link";
import { Layers } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 bg-card py-12 md:py-16 text-muted-foreground text-xs">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand Col */}
          <div className="space-y-3 max-w-sm">
            <Link href="/" className="flex items-center gap-2 font-bold text-base text-foreground tracking-tight">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                <Layers className="size-4" />
              </div>
              <span>{siteConfig.brand.name}</span>
            </Link>
            <p className="leading-relaxed text-muted-foreground">
              An independent educational resource dedicated to helping entrepreneurs simplify their online business stack and launch faster.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-2">
              <span className="font-semibold uppercase tracking-wider text-foreground text-[11px] block">
                Resources
              </span>
              <ul className="space-y-2">
                <li>
                  <Link href="/guide" className="hover:text-foreground transition-colors">
                    Step-by-Step Guide
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#calculator" className="hover:text-foreground transition-colors">
                    Stack Cost Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-foreground transition-colors">
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-semibold uppercase tracking-wider text-foreground text-[11px] block">
                Legal & Disclosures
              </span>
              <ul className="space-y-2">
                <li>
                  <Link href="/affiliate-disclosure" className="hover:text-foreground transition-colors">
                    Affiliate Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="https://systeme.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Systeme.io Official Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="max-w-2xl text-muted-foreground/80 leading-relaxed">
            <strong>FTC Disclaimer:</strong> {siteConfig.disclosures.short}{" "}
            {siteConfig.disclosures.notOfficial}
          </p>
          <div className="shrink-0 text-muted-foreground">
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
