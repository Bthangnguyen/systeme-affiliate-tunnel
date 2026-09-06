import Link from "next/link";
import { BookOpen, CheckCircle, ArrowRight, UserPlus, Globe, Filter, Mail, Zap, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function GuidePreview() {
  const guideTopics = [
    { title: "Create Your Account", desc: "Activate the free plan without a credit card.", icon: UserPlus },
    { title: "Connect a Domain", desc: "Configure CNAME & DNS email authentication (DKIM/SPF).", icon: Globe },
    { title: "Build Your First Funnel", desc: "Squeeze page, order bump, and thank-you sequence.", icon: Filter },
    { title: "Set Up Email Marketing", desc: "Organize subscribers with tags and automated drip series.", icon: Mail },
    { title: "Create Automations", desc: "Link triggers and actions without code or third-party webhooks.", icon: Zap },
    { title: "Launch Your Digital Offer", desc: "Deliver course modules and secure customer payments.", icon: GraduationCap },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card to-muted/30 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-4 mb-10">
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
              <BookOpen className="size-3 mr-1" />
              Self-Paced Learning Hub
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              New to Systeme.io? We'll walk you through it.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We wrote a comprehensive, step-by-step setup guide to take the guesswork out of launching your first funnel, email sequence, and digital product.
            </p>
          </div>

          {/* Grid of guide steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {guideTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-border/50 bg-background/80 p-4 flex items-start gap-3 hover:border-primary/40 transition-colors"
                >
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{topic.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{topic.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
            <span className="text-xs text-muted-foreground">
              Free to read • No opt-in or email required to access
            </span>
            <Button asChild size="lg" className="rounded-full font-semibold">
              <Link href="/guide">
                Explore the Step-by-Step Guide
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
