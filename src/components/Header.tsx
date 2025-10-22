import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
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
                  {/* <Link
                      href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Us
                    </Link> */}
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              {/* <div className="flex items-center gap-2 md:hidden">
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
                </div> */}
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
  );
}
