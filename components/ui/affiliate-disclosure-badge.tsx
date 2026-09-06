import Link from "next/link";
import { Info } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AffiliateDisclosureBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 hover:bg-secondary border border-border/50 rounded-full px-3 py-1 transition-colors ${className}`}
    >
      <Info className="size-3.5 text-muted-foreground/80 shrink-0" />
      <span>{siteConfig.disclosures.short}</span>
      <Link
        href="/affiliate-disclosure"
        className="underline hover:text-foreground font-medium transition-colors"
      >
        Details
      </Link>
    </div>
  );
}
