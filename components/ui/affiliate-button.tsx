"use client";

import * as React from "react";
import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { getAffiliateUrl } from "@/config/site";
import { trackAffiliateClick, AffiliateClickEvent } from "@/lib/analytics";

export interface AffiliateButtonProps extends ButtonProps {
  section: AffiliateClickEvent["section"];
  ctaVariant?: string;
  targetUrl?: string;
  children: React.ReactNode;
}

export function AffiliateButton({
  section,
  ctaVariant = "primary_cta",
  targetUrl,
  className,
  children,
  ...props
}: AffiliateButtonProps) {
  const finalUrl = getAffiliateUrl(targetUrl);

  const handleClick = () => {
    trackAffiliateClick(section, ctaVariant, finalUrl);
  };

  return (
    <Button asChild className={className} {...props}>
      <Link
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </Link>
    </Button>
  );
}
