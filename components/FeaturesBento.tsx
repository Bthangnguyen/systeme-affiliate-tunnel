import {
  Filter,
  Mail,
  Zap,
  GraduationCap,
  Globe,
  Share2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FeaturesBento() {
  const bentoCards = [
    {
      title: "Sales Funnel Builder",
      outcome: "Turn visitors into leads and customers.",
      description:
        "High-converting landing pages, lead capture forms, order bumps, and 1-click upsells with a responsive visual drag-and-drop editor.",
      icon: Filter,
      className: "md:col-span-2",
      highlight: "3 Funnels on Free Plan",
    },
    {
      title: "Email Marketing Engine",
      outcome: "Grow and nurture your audience from one platform.",
      description:
        "Send broadcast newsletters and set up multi-step automated sequences. Unlimited sends included without tier penalties.",
      icon: Mail,
      className: "md:col-span-1",
      highlight: "Unlimited Sends",
    },
    {
      title: "Workflow Automations",
      outcome: "Trigger follow-ups while you focus on your business.",
      description:
        "Tag contacts, assign courses, grant downloads, and notify teammates using visual trigger-and-action rules.",
      icon: Zap,
      className: "md:col-span-1",
      highlight: "Built-In Logic",
    },
    {
      title: "Online Courses & Communities",
      outcome: "Deliver digital education without another LMS.",
      description:
        "Upload video lectures, manage student rosters, drip content, and foster interactive discussions inside an integrated community.",
      icon: GraduationCap,
      className: "md:col-span-2",
      highlight: "Unlimited Students",
    },
    {
      title: "Custom Domains & Websites",
      outcome: "Build your web presence inside the same ecosystem.",
      description:
        "Connect your branded domain (e.g., yourname.com) with automated SSL encryption — included even on the $0 Free tier.",
      icon: Globe,
      className: "md:col-span-1",
      highlight: "Free Custom Domain",
    },
    {
      title: "Native Affiliate Management",
      outcome: "Let other people promote your own offers.",
      description:
        "Generate unique affiliate links for your partners, track sales, and manage payouts without paying $49/mo for an external affiliate tool.",
      icon: Share2,
      className: "md:col-span-2",
      highlight: "Zero Extra Fees",
    },
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Outcome-Driven Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Six essential tools. One clean dashboard.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything connects seamlessly so you never have to spend weekends fixing broken API integrations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl border border-border/70 bg-card p-6 md:p-8 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${card.className}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="size-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border/60">
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {card.title}
                  </h3>
                  <div className="text-sm font-semibold text-primary mb-3">
                    {card.outcome}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <CheckCircle className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                  Available from Day 1
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
