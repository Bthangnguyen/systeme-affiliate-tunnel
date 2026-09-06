import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AffiliateButton } from "@/components/ui/affiliate-button";

export function FinalCta() {
  return (
    <section className="w-full py-20 md:py-28 bg-radial from-primary/10 via-background to-background border-t border-border/40">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          Ready to simplify your online business stack?
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          Start with Systeme.io for free and build your first funnel, email campaign, or digital product workflow from one platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <AffiliateButton
            section="final_cta"
            ctaVariant="final_cta_start_free"
            size="lg"
            className="w-full sm:w-auto rounded-full px-9 py-6 text-base font-semibold shadow-md"
          >
            Start Free
            <ArrowRight className="ml-2 size-4" />
          </AffiliateButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
            Instant access to all core features
          </span>
        </div>
      </div>
    </section>
  );
}
