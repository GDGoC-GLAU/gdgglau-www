"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sparkles, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc]">
      {/* Aurora Dream Diagonal Flow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <Card className="border-border/40 bg-card/60 shadow-lg backdrop-blur-xl">
            <CardContent className="px-4 py-2.5 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex-shrink-0 transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/gdg-logo.png"
                    alt="GDG Logo"
                    width={180}
                    height={36}
                    className="h-7 w-auto sm:h-9"
                    priority
                  />
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-1 md:flex">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <Link href="/">Home</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <Link href="/about">About Us</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <Link href="/events">Events</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <Link href="/gallery">Gallery</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <Link href="/team">Team</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="ml-2 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                    asChild
                  >
                    <Link
                      href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Us
                    </Link>
                  </Button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                    asChild
                  >
                    <Link
                      href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Us
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-3 flex flex-wrap items-center justify-center gap-1.5 border-t border-border/40 pt-3 md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/about">About</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/events">Events</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/gallery">Gallery</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Link href="/team">Team</Link>
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Coming Soon Banner */}
          <Alert className="mb-8 border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent backdrop-blur-sm">
            <AlertDescription className="ml-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-foreground">
                <span className="inline-flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" />
                  <span className="text-base font-semibold">Coming Soon!</span>
                </span>
                <span className="ml-6 text-muted-foreground">
                  We&lsquo;re building something amazing for the GDG community.
                  Stay tuned for updates on events, workshops, and more!
                </span>
              </span>
            </AlertDescription>
          </Alert>

          {/* Content placeholder */}
          <div className="flex min-h-[60vh] items-center justify-center">
            <Card className="border-border/40 bg-card/60 p-8 text-center shadow-lg backdrop-blur-xl">
              <CardContent className="space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {/* <Sparkles className="h-10 w-10 text-primary" /> */}
                  <Image
                    src="/gdg.gif"
                    alt="GDG Animation"
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Website Under Construction
                </h2>
                <p className="text-muted-foreground">
                  Our new website is currently being developed. Check back soon
                  for exciting updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
