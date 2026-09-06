/**
 * Analytics & Affiliate CTA Outbound Click Telemetry Abstraction
 * Tracks conversion actions with contextual metadata without hardcoded vendor locks.
 */

export interface AffiliateClickEvent {
  section: "navbar" | "hero" | "pricing" | "launch_kit" | "guide" | "final_cta" | "calculator" | "faq";
  ctaVariant: string;
  targetUrl: string;
  timestamp?: string;
}

/**
 * Tracks an outbound affiliate click event.
 * Easily hooked into Plausible, PostHog, Google Analytics or local logging.
 */
export function trackAffiliateClick(
  section: AffiliateClickEvent["section"],
  ctaVariant: string,
  targetUrl: string
): void {
  const eventData: AffiliateClickEvent = {
    section,
    ctaVariant,
    targetUrl,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[Analytics] Affiliate CTA Click:", eventData);
  }

  // Support for standard browser window analytics if present (e.g. gtag or plausible)
  if (typeof window !== "undefined") {
    // Window plausible event
    if ((window as unknown as { plausible?: (name: string, props: object) => void }).plausible) {
      (window as unknown as { plausible: (name: string, props: object) => void }).plausible("affiliate_cta_click", {
        props: eventData,
      });
    }
    // Window gtag event
    if ((window as unknown as { gtag?: (type: string, name: string, props: object) => void }).gtag) {
      (window as unknown as { gtag: (type: string, name: string, props: object) => void }).gtag("event", "affiliate_cta_click", eventData);
    }
  }
}
