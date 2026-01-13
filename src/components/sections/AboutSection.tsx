"use client";

import { Lightbulb, Rocket, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const aboutCards = [
	{
		icon: Users,
		title: "Who are we?",
		description:
			"Welcome to GDG Mathura! We are a vibrant and inclusive community of students passionate about technology, innovation, and collaboration.",
	},
	{
		icon: Target,
		title: "Our Mission",
		description:
			"Our mission is to create a thriving environment where beginners and experienced developers come together to learn, build, and grow.",
	},
	{
		icon: Lightbulb,
		title: "What We Do",
		description:
			"We conduct workshops, events, hands-on projects, and tech meetups led by industry professionals and student leaders.",
	},
	{
		icon: Rocket,
		title: "Join Us",
		description:
			"Be part of our journey to build meaningful tech solutions and grow your network within the global developer community.",
	},
];

export default function AboutSection() {
	return (
		<section className="relative w-full scroll-mt-20 py-20" id="about">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* Section Header */}
				<div className="fade-in slide-in-from-bottom-4 mb-12 animate-in text-center duration-700">
					<h2 className="mb-3 font-semibold text-3xl text-foreground tracking-tight lg:text-4xl">
						About GDG On Campus
					</h2>
					<p className="mx-auto max-w-xl text-muted-foreground text-sm">
						Discover who we are and what drives us to build an amazing developer
						community
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{aboutCards.map((card, index) => (
						<Card
							className="group fade-in slide-in-from-bottom-4 relative animate-in overflow-hidden border border-border/40 bg-background/40 backdrop-blur-sm transition-colors hover:bg-background/60"
							key={card.title}
							style={{ animationDelay: `${(index + 1) * 100}ms` }}
						>
							<CardHeader className="pb-3">
								<div className="mb-3 inline-flex rounded-md border border-primary/10 bg-primary/5 p-2">
									<card.icon className="h-4 w-4 text-primary" />
								</div>
								<h3 className="font-semibold text-base text-foreground">
									{card.title}
								</h3>
							</CardHeader>

							<CardContent>
								<p className="text-muted-foreground text-xs leading-relaxed">
									{card.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
