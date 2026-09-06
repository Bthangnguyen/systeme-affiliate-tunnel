import { Check, X, Layers, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ToolStackProblem() {
  const stackItems = [
    {
      role: "Sales Funnel Builder",
      traditional: "Separate tool ($97+/mo) & complex webhook connections",
      systeme: "Integrated natively — drag-and-drop page editor & order bumps",
    },
    {
      role: "Email Marketing Platform",
      traditional: "Per-contact pricing tiers that punish your list growth",
      systeme: "Unlimited email sending included from day one",
    },
    {
      role: "Marketing Automation",
      traditional: "Zapier or third-party webhooks that break when APIs change",
      systeme: "Built-in trigger & action rules without extra glue software",
    },
    {
      role: "Course & Membership LMS",
      traditional: "Standalone host with separate login portals for your students",
      systeme: "Direct student access automatically unlocked upon checkout",
    },
    {
      role: "Website & Custom Domain",
      traditional: "Separate hosting, SSL certificates, and DNS troubleshooting",
      systeme: "Connect your custom domain with free automatic SSL",
    },
    {
      role: "Affiliate Management",
      traditional: "Additional tracking subscription ($49+/mo)",
      systeme: "Run your own affiliate program right inside your dashboard",
    },
  ];

  return (
    <section id="tool-problem" className="w-full py-16 md:py-24 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10">
            The Tool Stack Dilemma
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Your business shouldn't need a dozen subscriptions.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Building an online business often means connecting separate tools for pages, email, courses, and
            automation. Systeme.io brings the core workflow together into one unified platform.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-xl border border-border/70 bg-card shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border/60 bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground p-4">
            <div className="md:col-span-4">Business Function</div>
            <div className="hidden md:block md:col-span-4 text-red-600 dark:text-red-400">Traditional Stack</div>
            <div className="hidden md:block md:col-span-4 text-primary font-bold">Systeme.io Consolidated</div>
          </div>

          <div className="divide-y divide-border/40">
            {stackItems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 p-4 md:p-5 items-center gap-2 md:gap-4 hover:bg-muted/10 transition-colors">
                <div className="md:col-span-4 font-medium text-foreground text-sm flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary/80" />
                  {item.role}
                </div>
                
                <div className="md:col-span-4 text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                  <X className="size-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                <div className="md:col-span-4 text-xs sm:text-sm font-medium text-foreground flex items-start gap-2 bg-primary/5 p-2 rounded-md md:bg-transparent md:p-0">
                  <Check className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item.systeme}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Footer */}
        <div className="mt-8 rounded-lg bg-secondary/50 border border-border/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Layers className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">One platform instead of a fragmented stack.</div>
              <div className="text-xs text-muted-foreground">Focus on creating and selling, not troubleshooting webhooks.</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground font-medium shrink-0">
            Start free • No credit card required
          </div>
        </div>
      </div>
    </section>
  );
}
