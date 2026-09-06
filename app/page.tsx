import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ToolStackProblem } from "@/components/ToolStackProblem";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesBento } from "@/components/FeaturesBento";
import { WhoItsFor } from "@/components/WhoItsFor";
import { TechStackCalculator } from "@/components/TechStackCalculator";
import { PricingSection } from "@/components/PricingSection";
import { LaunchKit } from "@/components/LaunchKit";
import { GuidePreview } from "@/components/GuidePreview";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* 01. Navigation */}
      <Header />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* 03. Pain: The Tool Stack Dilemma */}
        <ToolStackProblem />

        {/* 04. How It Works Workflow */}
        <HowItWorks />

        {/* 05. Feature Bento Grid */}
        <FeaturesBento />

        {/* 06. Who It's For (Personas) */}
        <WhoItsFor />

        {/* 07. Tech Stack Arithmetic Cost Calculator */}
        <TechStackCalculator />

        {/* 08. Transparent Pricing Plans */}
        <PricingSection />

        {/* 09. Exclusive Launch Kit Bonus */}
        <LaunchKit />

        {/* 10. Educational Guide Hub Preview */}
        <GuidePreview />

        {/* 11. FAQ & Objections */}
        <FaqSection />

        {/* 12. Final CTA Banner */}
        <FinalCta />
      </main>

      {/* 13. Minimalist Independent Footer */}
      <Footer />
    </div>
  );
}
