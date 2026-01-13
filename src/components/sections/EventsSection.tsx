"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const events = [
	{
		title: "OpenX: Dive into Open Source",
		desc: "OpenX workshop that introduced students to the power of contributing to open source development.",
		img: "/Static/Logo/open x.webp",
		category: "Workshop",
	},
	{
		title: "Incept'25",
		desc: "A specialization-focused session for first-year students exploring multiple tech domains.",
		img: "/Static/Logo/incept.webp",
		category: "Session",
	},
	{
		title: "Info Session",
		desc: "Introduction to GDG On Campus community, mission, and upcoming learning opportunities.",
		img: "/Static/Logo/Info session.webp",
		category: "Community",
	},
	{
		title: "IntrusionX 48-Hour Hackathon",
		desc: "A 24-hour cybersecurity hackathon tackling real-world security challenges.",
		img: "/Static/Logo/intrusion.webp",
		category: "Hackathon",
	},
	{
		title: "Build With AI",
		desc: "Workshop on AI and Google Cloud technologies through Arcade Skill Up program.",
		img: "/Static/Logo/arcade.webp",
		category: "Workshop",
	},
	{
		title: "Flutter Fest On Campus",
		desc: "A month-long Flutter celebration for beginners and pros alike.",
		img: "/Static/Logo/flutter fest.webp",
		category: "Festival",
	},
	{
		title: "Cloud Session",
		desc: "Exploring Google Cloud infrastructure and fundamentals.",
		img: "/Static/Logo/PUNERVA SINGH (2)_WkOloVo.webp",
		category: "Workshop",
	},
	{
		title: "Design Day",
		desc: "Session on UI/UX design, prototyping, and creative collaboration.",
		img: "/Static/Logo/PUNERVA SINGH_gNfrtmW.webp",
		category: "Workshop",
	},
];

const categoryColors: Record<string, string> = {
	Workshop: "border-primary/20 bg-primary/5 text-primary",
	Session: "border-primary/20 bg-primary/5 text-primary",
	Community: "border-primary/20 bg-primary/5 text-primary",
	Hackathon: "border-primary/20 bg-primary/5 text-primary",
	Festival: "border-primary/20 bg-primary/5 text-primary",
};

export default function EventsSection() {
	return (
		<section className="relative w-full scroll-mt-20 py-20" id="events">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
					<div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary text-xs tracking-tight">
						<Calendar className="h-3 w-3" />
						Past Events
					</div>
					<h2 className="mb-3 font-semibold text-3xl text-foreground tracking-tight lg:text-4xl">
						Events & Workshops
					</h2>
					<p className="mx-auto max-w-xl text-muted-foreground text-sm">
						Explore the amazing events we&apos;ve hosted to empower developers
					</p>
				</div>

				{/* Events Grid */}
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{events.map((event, index) => (
						<Card
							className="group fade-in slide-in-from-bottom-4 relative animate-in overflow-hidden border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60"
							key={event.title}
							style={{ animationDelay: `${(index + 1) * 75}ms` }}
						>
							{/* Image */}
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									alt={event.title}
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									fill
									src={event.img}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
								<Badge
									className={`absolute top-2 left-2 border text-[10px] ${categoryColors[event.category] || "border-primary/20 bg-primary/5 text-primary"}`}
								>
									{event.category}
								</Badge>
							</div>

							<CardContent className="p-3">
								<h3 className="mb-1.5 line-clamp-2 font-semibold text-foreground text-sm transition-colors group-hover:text-primary">
									{event.title}
								</h3>
								<p className="line-clamp-2 text-[11px] text-muted-foreground leading-relaxed">
									{event.desc}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* View All Button */}
				<div className="fade-in slide-in-from-bottom-4 mt-12 flex animate-in justify-center delay-500 duration-700">
					<Button
						asChild
						className="group h-9 gap-1.5 px-5 text-xs tracking-tight"
						variant="outline"
					>
						<Link href="/gallery">
							View All Events
							<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
