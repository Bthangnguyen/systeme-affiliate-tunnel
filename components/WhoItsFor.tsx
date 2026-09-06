import { Users, Compass, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhoItsFor() {
  const personas = [
    {
      title: "Creators",
      role: "Audience Monetization",
      flow: "Audience → Email → Digital Products",
      description:
        "Capture social followers into an owned email newsletter, sell digital downloads and templates, and build sustainable direct revenue.",
      icon: Users,
    },
    {
      title: "Coaches & Consultants",
      role: "High-Ticket Client Acquisition",
      flow: "Landing Page → Lead → Follow-up → Client",
      description:
        "Attract qualified consultation inquiries with high-converting booking pages and nurture them with automated calendar reminders.",
      icon: Compass,
    },
    {
      title: "Course Creators",
      role: "Digital Education",
      flow: "Sales Page → Checkout → Course Access",
      description:
        "Host videos, drip curriculum modules, automate student logins upon payment, and build student community discussions without extra LMS costs.",
      icon: GraduationCap,
    },
    {
      title: "Solopreneurs",
      role: "Lean Operations",
      flow: "Website → Funnel → Email → Automation",
      description:
        "Run an entire online venture solo without needing an engineering team, full-time admin, or expensive developer retainer.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Tailored For Modern Creators
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Built for people who'd rather grow their business than manage software.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Whether you are selling your first $27 PDF or scaling a six-figure digital course, the workflow fits your model.
          </p>
        </div>

        {/* Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {persona.title}
                  </h3>
                  <div className="text-xs font-semibold text-primary mb-3">
                    {persona.role}
                  </div>
                  <div className="rounded-md bg-muted/60 p-2 text-xs font-mono font-medium text-foreground mb-4">
                    {persona.flow}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
