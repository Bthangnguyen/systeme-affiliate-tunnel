"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Layers, ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AffiliateButton } from "@/components/ui/affiliate-button";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo />
          </Link>
          <span className="hidden sm:inline-flex items-center rounded-full bg-secondary/80 border border-border/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            Independent Guide
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#calculator"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Stack Calculator
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/#launch-kit"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Launch Kit
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <BookOpen className="size-3.5" />
            Guide
          </Link>
        </nav>

        {/* Action CTAs & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ModeToggle />
          <div className="hidden sm:block">
            <AffiliateButton
              section="navbar"
              ctaVariant="navbar_start_free"
              size="sm"
              className="rounded-full shadow-sm font-medium"
            >
              Start for Free
              <ArrowUpRight className="ml-1 size-3.5" />
            </AffiliateButton>
          </div>

          {/* Mobile Menu Drawer */}
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>{siteConfig.brand.name}</DrawerTitle>
                <DrawerDescription>
                  The all-in-one platform for your online business.
                </DrawerDescription>
              </DrawerHeader>
              <nav className="flex flex-col gap-3 px-4 py-2">
                <Link
                  href="/#how-it-works"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium hover:bg-muted"
                >
                  How It Works
                </Link>
                <Link
                  href="/#features"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium hover:bg-muted"
                >
                  Features
                </Link>
                <Link
                  href="/#calculator"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium hover:bg-muted"
                >
                  Stack Cost Calculator
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium hover:bg-muted"
                >
                  Pricing Plans
                </Link>
                <Link
                  href="/#launch-kit"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium hover:bg-muted"
                >
                  Exclusive Launch Kit
                </Link>
                <Link
                  href="/guide"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-base font-medium text-primary hover:bg-primary/10"
                >
                  Step-by-Step Guide
                </Link>
              </nav>
              <DrawerFooter className="pt-2">
                <AffiliateButton
                  section="navbar"
                  ctaVariant="mobile_drawer_start_free"
                  size="lg"
                  className="w-full rounded-full"
                >
                  Start for Free on Systeme.io
                  <ArrowUpRight className="ml-1 size-4" />
                </AffiliateButton>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full rounded-full">
                    Close Menu
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
