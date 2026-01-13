"use client";

import { ArrowRight, Calendar, Code, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative flex min-h-[85vh] w-full items-center justify-center">
			<div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
				<div className="flex flex-col items-center text-center">
					{/* Logo */}
					<div className="fade-in slide-in-from-bottom-4 mb-6 animate-in duration-700">
						<Image
							alt="GDG On Campus"
							className="h-16 w-auto opacity-90"
							height={64}
							src="/Static/Logo/gdg (1).gif"
							unoptimized
							width={192}
						/>
					</div>

					{/* Main Heading */}
					<h1 className="fade-in slide-in-from-bottom-4 mb-4 animate-in delay-200 duration-700">
						<span className="block font-medium text-foreground/60 text-sm uppercase tracking-wider">
							Welcome to
						</span>
						<span className="mt-3 block font-semibold text-5xl text-foreground tracking-tight lg:text-6xl">
							GDG On Campus
						</span>
						<span className="mt-2 block font-normal text-2xl text-foreground/70 tracking-tight lg:text-3xl">
							GLA University
						</span>
					</h1>

					{/* Subheading */}
					<p className="fade-in slide-in-from-bottom-4 mb-10 max-w-xl animate-in text-muted-foreground text-sm leading-relaxed delay-300 duration-700 lg:text-base">
						A community of students passionate about technology, innovation, and
						collaboration. Learn, build, and grow with us.
					</p>

					{/* CTA Buttons */}
					<div className="fade-in slide-in-from-bottom-4 flex animate-in flex-col gap-3 delay-500 duration-700 sm:flex-row">
						<Button
							asChild
							className="group h-9 border-primary/20 bg-primary px-5 font-medium text-primary-foreground text-xs tracking-tight hover:bg-primary/90"
						>
							<Link
								href="https://gdg.community.dev/gdg-on-campus-gla-university-mathura-india/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Join Community
								<ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
							</Link>
						</Button>
						<Button
							asChild
							className="h-9 px-5 text-xs tracking-tight"
							variant="outline"
						>
							<Link href="#events">Explore Events</Link>
						</Button>
					</div>

					{/* Stats */}
					<div className="fade-in slide-in-from-bottom-4 mt-20 grid w-full max-w-2xl animate-in grid-cols-1 gap-4 delay-700 duration-700 sm:grid-cols-3">
						<div className="group rounded-lg border border-border/40 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60">
							<div className="mb-3 flex justify-center">
								<div className="rounded-md border border-primary/10 bg-primary/5 p-2">
									<Users className="h-4 w-4 text-primary" />
								</div>
							</div>
							<div className="font-semibold text-2xl text-foreground">
								4800+
							</div>
							<div className="mt-1 text-muted-foreground text-xs">
								Community Members
							</div>
						</div>
						<div className="group rounded-lg border border-border/40 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60">
							<div className="mb-3 flex justify-center">
								<div className="rounded-md border border-primary/10 bg-primary/5 p-2">
									<Calendar className="h-4 w-4 text-primary" />
								</div>
							</div>
							<div className="font-semibold text-2xl text-foreground">20+</div>
							<div className="mt-1 text-muted-foreground text-xs">
								Events Hosted
							</div>
						</div>
						<div className="group rounded-lg border border-border/40 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60">
							<div className="mb-3 flex justify-center">
								<div className="rounded-md border border-primary/10 bg-primary/5 p-2">
									<Code className="h-4 w-4 text-primary" />
								</div>
							</div>
							<div className="font-semibold text-2xl text-foreground">6</div>
							<div className="mt-1 text-muted-foreground text-xs">
								Tech Teams
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
