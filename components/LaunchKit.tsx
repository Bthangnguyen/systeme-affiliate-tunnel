import { Layers, Mail, CheckSquare, PlayCircle, ArrowRight, Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { AffiliateDisclosureBadge } from "@/components/ui/affiliate-disclosure-badge";

export function LaunchKit() {
  const iconMap: Record<string, typeof Layers> = {
    Layers,
    Mail,
    CheckSquare,
    PlayCircle,
  };

  return (
    <section id="launch-kit" className="w-full py-16 md:py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs border-primary/30 text-primary bg-primary/5">
            <Gift className="size-3 mr-1" />
            Affiliate Onboarding Bonus
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Start with Systeme.io — Get the Launch Kit Included
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Use this page to create your free Systeme.io account and get practical resources designed to help you launch faster.
          </p>
        </div>

        {/* Launch Kit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {siteConfig.launchKit.map((item) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:border-primary/40 transition-all flex items-start gap-4"
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="size-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">{item.tagline}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Card & How To Claim */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-4">
          <h4 className="text-lg font-bold text-foreground">
            How to Access Your Launch Kit
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            1. Click the button below to register your free Systeme.io account.
            <br />
            2. Follow the direct import instructions inside our step-by-step{" "}
            <a href="/guide" className="underline text-primary font-medium">
              Onboarding Guide
            </a>{" "}
            to download the templates and swipe files instantly.
          </p>

          <div className="pt-2">
            <AffiliateButton
              section="launch_kit"
              ctaVariant="launch_kit_start_free"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-sm"
            >
              Start Free & Get the Launch Kit
              <ArrowRight className="ml-2 size-4" />
            </AffiliateButton>
          </div>

          <div className="pt-2">
            <AffiliateDisclosureBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
